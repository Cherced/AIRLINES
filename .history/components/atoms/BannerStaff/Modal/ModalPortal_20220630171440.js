import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";


export function ModalPortal({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
   
    return mounted ? createPortal( <>{children}</>, document.getElementById("myportal")) : null ;
}