import React from "react";

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

class App extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div>Hello Word</div>
                <Footer />
            </>
        );
    }
}
export default App;