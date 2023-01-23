import React, { createContext, useReducer } from "react";
import { useAuthContext } from "./UseToken";

const initialState = {
    token: false,
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "login":
                return { ...state, token: (state.token = true) };

            case "logout":
                return { ...state, token: (state.token = false) };

            default:
                return state;
        }
    }, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};
