import React from 'react'
import Layout from '../components/Layout'
import NavbarPersonnal from '../components/NavbarPersonnal'
import 'bootstrap/dist/css/bootstrap.min.css' ;

export default function Home() {
  return (
    <Layout pageTitle="Home">
    <NavbarPersonnal/>
    <div>
      <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
    </div>

    </Layout>
  )
}
