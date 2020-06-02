import React, { Component, Fragment } from 'react';
//import Button from './components/Button'

class App extends Component {

    handleClick = (e) => {
        console.log(e)
        console.log(e.nativeEvent)
    }

    render() {
        return (
            <Fragment>
                <h1>Events</h1>
                {/* <button onClick={this.handleClick}>Click me!</button> */}
                <button onClick={this.handleClick}>Click me!</button>
            </Fragment>
        )
    }
}

export default App;



/*
Eventos sintéticos (SyntheticEvent)

React controla los eventos para que funcionen en todos los navegadores.
React crea un evento sintetico con la finalidad que el evento funcione en todos los navegadores; no es el evento original de JS.

Se utilizan casi todos los eventos nativos de JS que podemos necesitar pero de necesitar algun evento muy especifico podemos acceder con 'e.nativeEvent'. 


*/