import { useState, useEffect } from "react";

const createStore = (initialStore) => {
    let store = initialStore;
    const listeners = new Set();

    const dispatch = (newStore) => {
        // Make it like reacts setState so if you pass in a function you can get the store value first
        store = typeof newStore === "function" ? newStore(store) : newStore;
        listeners.forEach((listener) => listener(() => store));
    };

    const useStore = () => {
        const [, listener] = useState();
        useEffect(() => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        }, []);
        return store;
    };

    return [useStore, dispatch];
};
export default createStore;
