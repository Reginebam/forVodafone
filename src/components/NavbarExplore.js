import React from 'react'
import {Link} from 'gatsby'

export default function NavbarExplore() {
    return (
        <div>
             <Link to="/subfolder/explore"> About us</Link>
        <Link to="/subfolder/explore"> Corporate Social Responsibility</Link>
        <Link to="/subfolder/explore"> Instant School</Link>
        </div>
    )
}
