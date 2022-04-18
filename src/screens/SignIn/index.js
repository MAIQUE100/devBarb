import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
//import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  UserContext } from '../../contexts/userContext';
import { 
    Container,
    Text,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButtom,
    SignMessageButtomText,
    SignMessageButtomTextBold

} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import Barber from '../../assets/Hai.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext)

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

   
    const handleSignClick = async () => {

        if(emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);

            if(json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'avatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });                

            } else {
                alert("E-mail e/ou senha errados");
            }

        } else {
            alert("Preencha os campos!")
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <Container>
            
            <Barber width="105%" height="350" />
            <InputArea>

                <SignInput 
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChanceText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChanceText={t=>setPasswordField(t)}
                    password={true}

                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButtom onPress={handleMessageButtonClick}>
                <SignMessageButtomText>Ainda não possui uma conta?</SignMessageButtomText>
                <SignMessageButtomTextBold>Cadastre-se</SignMessageButtomTextBold>
            </SignMessageButtom>

        </Container>
    );
}

//<Barber width="110%" height="315" />