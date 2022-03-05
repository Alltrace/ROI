import * as React from 'react';
import { Modal, Portal, Text, Button,Icon,Chip, Dialog,Paragraph, Provider } from 'react-native-paper';

const ViewList = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', };

  return (
    <Provider>
      <Portal>
      <Dialog visible={visible} onDismiss={hideModal} >
        <Dialog.Content>
        <Chip onClose={()=>console.log("closed")} >Example Chip</Chip>
       
        
        </Dialog.Content>
      </Dialog>
       
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};

export default ViewList;