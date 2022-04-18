import React, { createContext, useReducer } from 'react';
import { InitialState, UserReduce } from '../reducers/userReduce';

export const UserContext = createContext();

export default ({children}) => {

    const [state, dispatch] = useReducer(UserReduce, InitialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}