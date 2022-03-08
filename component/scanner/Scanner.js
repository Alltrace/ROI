import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Card } from "react-native-paper";

export default function Scanner({ handleChange }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    handleChange({ type: type, data: data });
    setText(data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Card style={{ margin: "5%" }}>
        <Text style={styles.maintext}>{text}</Text>
      </Card>
      {scanned && (
        <Button
          style={{
            backgroundColor: "#6c65df",
            marginHorizontal: "15%",
            padding: 8,
            borderRadius: 15,
          }}
          onPress={() => setScanned(false)}
          color="white"
        >
          add item
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",

    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    marginTop: 15,
    marginHorizontal: "15%",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 250,
    overflow: "hidden",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#6c65df",
  },
});
