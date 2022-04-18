import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #000000;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const Text = styled.Text`
    font-size: 20px;
    color: #268
    font-weight: bold;
    margin-left: 5px;
    
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
