import React, { Component } from 'react'

//import style
import './style/style.css'

//import component
import Navbar from '../../Components/NavBar'
import Footer from '../../../User/Components/Footer'
import FormFlight from '../../Components/FormFlight'

export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="body pt-5 pb-5">
                    <FormFlight tittle="Add Flight" buttonText="add" />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
