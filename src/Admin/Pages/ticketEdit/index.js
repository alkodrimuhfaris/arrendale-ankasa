import React, { Component } from 'react'

//import style

//import component
import Navbar from '../../Components/NavBar'
import Footer from '../../../User/Components/Footer'

export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="body pt-5 pb-5">
                    
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
