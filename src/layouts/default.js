import React from 'react'

//header
//import Header from '../components/partials/headerStyle/NavBar'

import Header from '../components/partials/headerStyle/header'

//footer
import Footer from '../components/partials/footerStyle/footer'

//default 
import DefaultRouter from '../router/default-router'


const Default = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div id="content-page" className="content-page">
                    <DefaultRouter/>
                </div>
				<Footer />
            </div>
        </>
    )
}

export default Default
