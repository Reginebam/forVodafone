import React from 'react'
import {Link} from 'gatsby'
import {group} from './layout.module.css'
import {iteme} from './layout.module.css'
import {menubare} from './layout.module.css'


export default function NavbarPersonnal() {
    return (
        <nav className={menubare}>
        <div className={group}>
        <Link className={iteme} to="/subfolder/personnal/mobile">Mobile</Link>
        <Link className={iteme} to="/subfolder/personnal/mobile"> Broadband</Link>
        <Link className={iteme} to="/subfolder/personnal/mobile"> Vodafone Cash</Link>
        <Link className={iteme} to="/subfolder/personnal/mobile"> Help</Link>
        </div>
        </nav>
    )
}
