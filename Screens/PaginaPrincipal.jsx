import React, {useState} from 'react';

import { ApplicationProvider, Layout, Text ,Icon, TabBar,Button, Modal, Card} from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image ,View} from 'react-native';
import Frecuencia from './Frecuencia';
import Diabetes from './Diabetes';

const { Navigator, Screen } = createMaterialTopTabNavigator();



const PaginaPrincipal = () => {

  

  const [showModal, setshowModal] = useState(false);
  const [showModal2, setshowModal2] = useState(false);

    return (
        <View style={{flex: 1, backgroundColor: '#f5f6fa' , alignItems: 'center' }}>
          <Card  style={{backgroundColor: '#04e394', width: 365}}  >
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20, backgroundColor: '#04e394' }}  >Bienvenido a la Aplicación de Salud</Text>

          </Card>
       
      
         <Button onPress={() => setshowModal(true)}   status='success' style= {{marginTop:50, width: 300, borderRadius:20}} >Frecuencia Cardiaca</Button>
         <Modal visible={showModal}>
      <Frecuencia/>
      <Button onPress={() => setshowModal(false)} style={{marginTop: 20 ,borderRadius:20}} status='danger'>Cerrar</Button>
    </Modal>
    
      
    <Button onPress={() => setshowModal2(true)} status='success' style= {{marginTop:50, width: 300, borderRadius:20}} >Diabetes</Button>
    <Modal visible={showModal2}>
      <Diabetes/>
      <Button onPress={() => setshowModal2(false)} style={{marginTop: 20, borderRadius:20}} status='danger'>Cerrar</Button>
    </Modal>
   
    
    
   
   
    </View>
   
  );
    
};





  

  export default PaginaPrincipal;