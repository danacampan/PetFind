import {createContext} from "react";

export const MyContext = createContext({
    petList: [],
    setPetList: () => {},
})