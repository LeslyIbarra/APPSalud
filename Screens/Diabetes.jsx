import React, {useEffect, useState, useContext, useM} from "react";

import { ApplicationProvider, Layout, Text ,Icon, TabBar,Button, Tab,Card, Input} from '@ui-kitten/components';
import {Controller, useForm} from 'react-hook-form';

const Diabetes = () => {

    const [info, setInfo] = useState(false);
    const [mensaje, setMensaje] = useState();

    const getFormErrorMessage = (name) => {
        return errors[name] && <Text style = {{color: 'red'}} status='danger' >{errors[name].message}</Text>;
    };

    const onSubmit = (data) => {
        console.log('data', data.Glucosa);
        console.log('data', data.Edad);
        console.log('data', data.imc);
    if (data.Glucosa <= 140 && data.Glucosa <=199 && data.imc >= 18.5 &&  data.imc <= 24.9 && data.Edad >= 18 && data.Edad <= 65) {
        setMensaje(' Usted Es una Persona Saludable ');
        setInfo(true);
    }
    else if (data.Glucosa >= 140 && data.Glucosa <=199 && data.imc >= 25.0 && data.imc <= 29.9 && data.Edad >= 18 && data.Edad <= 65) {
        setMensaje(' Usted tiene un nivel de glucosa en sangre elevado, Usted es Prediabetico ');
        setInfo(true);
    }

    else if (data.Glucosa >= 200 && data.Glucosa <= 210  && data.imc >= 18.5 &&  data.imc <= 24.9 && data.Edad <= 20 ){
        setMensaje(' Usted tiene un nivel de glucosa en sangre elevado, Usted Tiene Diabetes Tipo 1 ');
        setInfo(true);
    }
    else if (data.Glucosa >= 211 && data.Glucosa <= 220  && data.imc >= 18.5 &&  data.imc <= 24.9 && data.Edad >= 21 ){
        setMensaje(' Usted tiene un nivel de glucosa en sangre elevado, Usted Tiene Diabetes Tipo 2 ');
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
        <Layout style={{ flex: 1, marginTop: 100 , backgroundColor: '#f5f6fa'}}>
            <Text category='h1' style={{textAlign: 'center', backgroundColor: '#f5f6fa'}}>Diabetes</Text>
            <Layout style= {{backgroundColor: '#f5f6fa'}}>
                <Text category='h6' style={{textAlign: 'center' ,marginTop: 20,  }}>Ingrese su nivel de glucosa en la sangre</Text>
                <Controller
                name="Glucosa"
                control={control}
                rules={{ required: "Glucosa es  requerida" }}
                render ={({field, fieldState}) => (
                    <Input
                    placeholder='Glucosa: Ej. 200 mg/dl'
                    isFocused= {true}
                    status={fieldState.invalid ? 'danger' : 'basic'}
                    maxLength={10}
                    value = {field.value}
                    onChangeText={field.onChange}
                    style = {{ borderRadius: 20, marginTop: 20 , backgroundColor: '#fff'}}
                    />
                 )}/>
                {getFormErrorMessage('Glucosa', "Glucosa es  requerida")} 
                   
            </Layout>
            <Layout style={{backgroundColor: '#f5f6fa'}}>
                <Text category='h6'style={{textAlign: 'center' ,marginTop: 20,  backgroundColor: '#f5f6fa'}}>Ingrese su edad</Text>
                <Controller
                name="Edad"
                control={control}
                rules={{ required: 'Edad es Requerida' }}
                render ={({field, fieldState}) => (
                    <Input
                    placeholder='Edad: Ej. 18'
                    isFocused= {true}
                    status={fieldState.invalid ? 'danger' : 'basic'}
                    maxLength={10}
                    value = {field.value}
                    onChangeText={field.onChange}
                    style = {{ borderRadius: 20, marginTop: 20,  backgroundColor: '#fff'}}
                    />
                    )}/>
                {getFormErrorMessage('Edad', "Edad es  requerida")}
              </Layout>
                <Layout style={{backgroundColor: '#f5f6fa'}} >
                <Text category='h6' style={{textAlign: 'center' ,marginTop: 20,  backgroundColor: '#f5f6fa'}} >Ingrese su IMC</Text>
                <Controller
                name="imc"
                control={control}
                rules={{ required: 'imc es Requerida' }}
                render ={({field, fieldState}) => (
                    <Input
                    placeholder='IMC: Ej. 24.5 '
                    isFocused= {true}
                    status={fieldState.invalid ? 'danger' : 'basic'}
                    maxLength={10}
                    value = {field.value}
                    onChangeText={field.onChange}
                    style = {{ borderRadius: 20, marginTop: 20,  backgroundColor: '#fff'}}
                    />
                    )}/>
                {getFormErrorMessage('imc', "imc es  requerida")}
                </Layout>
                
     
                <Layout style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, backgroundColor: '#f5f6fa'}}>
                <Button onPress={handleSubmit(onSubmit)} status='success' style= {{borderRadius:20}}>Guardar</Button>
                <Button onPress={clean} status='danger' style= {{borderRadius:20}} >Limpiar</Button>
            </Layout>

            <Card style={{marginTop: 20, backgroundColor: '#ffff'}} status='warning'>

            {info && <Text category='h6' style={{textAlign: 'center'}}>{mensaje}</Text>}
             </Card>
           
            
            </Layout>
    );
}

export default Diabetes;

