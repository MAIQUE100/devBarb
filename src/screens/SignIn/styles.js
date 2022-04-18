import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #000000;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #268
    font-weight: bold;
    margin-left: 5px;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #666;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #c6a068
`;

export const SignMessageButtom = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtomText = styled.Text`
    font-size: 16px;
    color: #c6a068
`;
export const SignMessageButtomTextBold = styled.Text`
    font-size: 16px;
    color: #c6a068
    font-weight: bold;
    margin-left: 5px;
`;








/* InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButtom,
    SignMessageButtomText,
    SignMessageButtomTextBold
*/