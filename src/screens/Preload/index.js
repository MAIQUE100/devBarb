import React, { useEffect } from 'react';
//import { Text } from 'react-native'
import { Container, LoadingIcon, Text,} from './styles';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';


import BarberLogo from '../../assets/Hai.svg';

export default () => {

    const navigation = useNavigation(); //Usado para navegar de uma tela para outra
    
    useEffect(() => { //Executa o codigo dentro dele assim que a tela atual abre
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token'); //Verifica se existe um token para o usuario
            if(token) {

            } else {
               navigation.navigate('SignIn') //Se nao tiver, direciona para a tela de login
            }
        }
        checkToken()
    }, []);
    
    return (
        <Container>
            
            <BarberLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFFFFF"/>
            
            <Text>Loading...</Text>
        
        </Container>
    );
}


//<BarberLogo width="100%" height="160" />
