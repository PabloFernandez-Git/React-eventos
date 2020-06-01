import React, { Component } from 'react'

class App extends Component {

    handleClick = (e, msg) => {
        console.log(msg)
        console.log(e.target)
    }

    render() {
        return (
            <>
                <h1>Events</h1>
                <button onClick={(e) => this.handleClick(e, 'Hello')}>Click me!</button>
            </>
        )
    }
}

export default App;



/*
Paso de parametros con arrow function:

Como enviar parametros cuando ejecutamos un evento (con arrow function)

Cuando ejecutamos un evento de esta forma automaticamente y sin que podamos evitarlo se va a enviar el evento.
Podemos no recogerlo pero el evento se esta enviando.

<button onClick={this.handleClick}>Click me!</button>

Si queremos pasar mas parametros u otro parametro en lugar del evento (e) entonces necesitamos que la funcion sea llamda de la siguiente manera:

handleClick = (msg) => {
    console.log(msg)
}

<button onClick={() => this.handleClick(e, 'Hello')}>Click me!</button>


Si ademas necesitamos pasar el evento:

handleClick = (e, msg) => {
    console.log(msg)
    console.log(e.target)
}

<button onClick={(e) => this.handleClick(e, 'Hello')}>Click me!</button>

'e' es el evento pero se esta ejecutando a traves de una funcion anonima por lo tanto el parametro de evento lo tiene que recoger la funcion que esta ejecutando el evento.


*/