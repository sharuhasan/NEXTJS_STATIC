import Navbar from "./navbar"
import Head from 'next/head'

export default function Layout ({children}){
    return (
        <div >
            <Head>
                <title>Static_Webiste</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            </Head>
            <Navbar />
            {children}
        </div>
    )   
}