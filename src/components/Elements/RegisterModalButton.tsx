"use client";
import { useAppContext } from "@/lib/AppContext";
import React from "react";

export default function RegisterModalButton({className, children}:{className?:string, children?:React.ReactNode}) {
    const {context, setContext} = useAppContext();
  return (
    <button className={className}
        onClick={()=> {
            setContext({...context, showRegisterModal: true})
        }}
    >
        {children}
    </button>
  );
}
