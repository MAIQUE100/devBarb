import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #333333
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;

`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #c6a068
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChanceText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#c6a068" />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#c6a068"
                value={value}
                onChangeText={onChanceText}
                secureTextEntry={password} //Fazendo o campo virar senha

            />
        </InputArea>
    );
}

//268596