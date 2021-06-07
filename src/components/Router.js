import React from 'react'
import {Link} from 'gatsby'
import {menubar} from './layout.module.css'
import { item } from './layout.module.css'
import { group } from './layout.module.css'


export default function Router() {
    return (
       
        <nav className={menubar}>
            <div className={group}>
                <Link className={item} to="/"> Personnal</Link>
                <Link className={item} to="/subfolder/business">Business</Link>
                <Link className={item} to="/subfolder/explore">Explore Vodafone</Link>
            </div>
        </nav>
       
    )
}
