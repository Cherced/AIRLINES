import React, {useState, createContext, useContext} from 'react';

// este es un hook de fuente de verdad para comunicar un estado de manera global en la aplicacion y establecer comunicaicon simultanea

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