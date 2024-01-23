import React from "react"
import { createPortal } from "react-dom"

export function Modal ({children}){
    return createPortal(
        <section className="bg-zinc-900/75 fixed inset-0 flex justify-center items-center w-full h-full">
            {children}
        </section>,
        document.getElementById('modal')
    )
}
