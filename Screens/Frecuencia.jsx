import React, { useEffect, useState, useContext, useMemo } from "react";

import { ApplicationProvider, Layout, Text ,Icon, TabBar,Button, Tab,Card, Input} from '@ui-kitten/components';
import {Controller, useForm} from 'react-hook-form';




const Frecuencia = () => {

    const [info, setInfo] = useState(false);
    const [mensaje, setMensaje] = useState();




    const getFormErrorMessage = (name) => {
        return errors[name] && <Text style = {{color: 'red'}} status='danger' >{errors[name].message}</Text>;
    };
    
    
    
    const onSubmit = (data) => {
        console.log('data', data.PresionArterial);
        console.log('data', data.FrecuenciaDiastolica);
        if (data.PresionArterial <= 120 && data.FrecuenciaDiastolica <= 80) {
            setMensaje(' " Usted tiene su Presion Arterial Normal "');
            setInfo(true);
        }
        else if (data.PresionArterial >= 120 &&  data.PresionArterial <= 139 && data.FrecuenciaDiastolica >= 80 && data.FrecuenciaDiastolica <= 89) {
            setMensaje(' " Usted tiene su presión arterial es más alta de lo normal, Usted es Hipertensión" ');
            setInfo(true);
        }
        else if (data.PresionArterial >= 140 && data.FrecuenciaDiastolica >= 90 ) {
            setMensaje('" Usted padece de presión arterial alta." ');
            setInfo(true);
        }



    };

    const clean = () => {
        setInfo(false);
        setMensaje(' ');
        reset();
    };

    
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
        clearErrors,
        setError,
        getValues,
        setValue,
      } = useForm({});
    
   

    return (
        
    <Layout style={{flex: 1, marginTop: 150, backgroundColor: '#f5f6fa'}}>

        
        
        <Text category='h1' style={{textAlign: 'center', backgroundColor: '#f5f6fa'}} >Frecuencia Cardiaca</Text>
        

        <Layout style={{backgroundColor: '#f5f6fa'}}>
        <Text category='h6' style={{textAlign: 'center' ,marginTop: 20, backgroundColor: '#f5f6fa'}}>Ingrese su Presion Sistolica </Text>
         <Controller
         name="PresionArterial"
         control={control}
         rules={{ required: 'Presion Arterial es requerida' }}
         render ={({field, fieldState}) => (
                <Input
                placeholder='Presión sistólica: Ej. 120'
                isFocused= {true}
                status={fieldState.invalid ? 'danger' : 'basic'}
                maxLength={10}
                value = {field.value}
                onChangeText={field.onChange}
                style = {{ borderRadius: 30, marginTop: 20, backgroundColor: '#fff'}}
                />
             )}/>
                {getFormErrorMessage('PresionArterial', "Presion Arterial es requerido")}
            
        </Layout>
        <Layout style={{backgroundColor: '#f5f6fa'}} >
        <Text category='h6' style={{textAlign: 'center' ,marginTop: 20, backgroundColor: '#f5f6fa' }}>Ingrese su Presion Diastolica</Text>
            <Controller
            name="FrecuenciaDiastolica"
            control={control}
            rules={{ required: 'Presion Diastolica es requerida' }}
            render ={({field, fieldState}) => (
                <Input
                placeholder='Presión Diastolica: Ej. 80'
                isFocused= {true}
                status={fieldState.invalid ? 'danger' : 'basic'}
                maxLength={10}
                value = {field.value}
                onChangeText={field.onChange}
                style = {{ borderRadius: 20,marginTop: 20, backgroundColor: '#fff'}}
                />
                )}/>
                {getFormErrorMessage('FrecuenciaDiastolica', "Frecuencia Diastolica es requerido")}
                    
        </Layout>
       
              
            <Layout style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, backgroundColor: '#f5f6fa'}}>
                <Button onPress={handleSubmit(onSubmit)} status='success' style={{borderRadius:20}}>Guardar</Button>
                <Button onPress={clean} status='danger'style={{borderRadius:20}} >Limpiar</Button>
            </Layout>

            <Card style={{marginTop: 20 , textAlign: 'center', backgroundColor: '#ffff' }} status='warning'>

            {info && <Text category='h6' style={{textAlign: 'center', backgroundColor: '#ffff'}} >{mensaje}</Text>}
             </Card>
            
       
  </Layout>
  );

}

export default Frecuencia;
