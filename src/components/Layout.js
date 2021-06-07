import React from 'react'
import Router from './Router'
import Footer from './Footer'
import  './Layout.module.css'

export default function Layout({pageTitle, children}) {
    return (
        <div>
            <Router/>
            <div>{children}</div>
            <Footer/>   
        </div>
    )
}
