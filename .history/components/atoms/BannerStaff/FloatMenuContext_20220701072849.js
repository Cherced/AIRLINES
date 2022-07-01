import React, {useState, createContext, useContext} from 'react';

const MenuFloatContext = createContext({});


export function MenuFloatContextProvider({children}){
    const [menu, setMenu] = React.useState(false)
    return (
        <MenuFloatContext.Provider value={{
            menu, setMenu
        }}
        >
        {children}
        </MenuFloatContext.Provider>
        )
}

export function useMenuFloatContext(){
    const context = useContext(MenuFloatContext)
    return context
}