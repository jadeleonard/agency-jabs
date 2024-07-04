import { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
    title:'Authentication'
}


    
export default function AutheticationLayout ({children}:Readonly<{children:React.ReactNode}>){
    return(
        <html lang="en" suppressHydrationWarning>
            <body>
                {children}
            </body>
        </html>
    )
}