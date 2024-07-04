import { Metadata } from "next"
import React from 'react'
export const metadata : Metadata ={
    title:"Dashboard"
}


export default function DashboardLayout({children}:Readonly<{children : React.ReactNode}>) {
    return(
        <div>
                {children}
        </div>
    )
}