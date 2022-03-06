import * as React from 'react';
import { Modal, Portal, Text, Button,Icon,Chip, Dialog,Paragraph, Provider } from 'react-native-paper';
import { TagPlusAPI } from '../../service/api';

const ViewList = ({data}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', };

  const handleOrder = async() => {
    const res = await TagPlusAPI(data);
    console.log(res, 'res order')
  }

  return (
    <Provider>
      <Portal>
      <Dialog visible={visible} onDismiss={hideModal} >
        <Dialog.Content>
    {data.map((list, index) => (
      <>
        {console.log(list, 'map-list-check')}
        <Chip onClose={()=> console.log('do nothing')} >{list.tag}</Chip>
      </>

    ))}
    <Button onPress={handleOrder} mode='contained'>Proceed to order</Button>
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