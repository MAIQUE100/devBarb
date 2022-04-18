import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//import { Text } from 'react-native'
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

import SignInput from '../../components/SignInput';
import Api from '../../Api';


import Barber from '../../assets/Hai.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import Profile from '../../assets/person.svg';

export default () => {

    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
   
    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            console.log(res);

            if (res.token) {
                alert("Deu certo!!!!!!!!!!!!!!!!!!!!!!!")

            } else {
                alert("Erro: " + res.error);
            }

        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            
            <Barber width="110%" height="350" />
            <InputArea>

                <SignInput 
                    IconSvg={Profile} 
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChanceText={t=>setNameField(t)}
                />

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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButtom onPress={handleMessageButtonClick}>
                <SignMessageButtomText>Já possui uma conta?</SignMessageButtomText>
                <SignMessageButtomTextBold>Faça Login</SignMessageButtomTextBold>
            </SignMessageButtom>

        </Container>
    );
}

// <Barber width="110%" height="350" />