import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// este es un metodo de comunicacion entre componentes con un nodo externo al paginado de la App
// sirve para lanzar el menu de seleccion de idiomas
export function ModalPortal({ children }) {
    const [mounted, setMounted] = useState(false); // abre el flujo de proyecto para que se carge en simultaneo al disparar el evento desde el boton de menu
    useEffect(() => { // es un hook para accion desde el cliente, y propagar una actividad que consuma objetos como WINDOW DOCUMENT O NAV
        setMounted(true); // montamos evento
        return () => setMounted(false); // apagamos evento
    }, []);
   
    return mounted ? createPortal( <>{children}</>, document.getElementById("myportal")) : null ; // en el espacio que se ejecuta el bloque de codigo anterior se hace el get de el nodo externo, y se aborda el componente children 
    // para este caso en particular children sera el menu de idiomas    
}