import React, { Component } from 'react'

class App extends Component {

    handleClick(msg, msg2, e) {
        console.log(e)
        console.log(msg)
        console.log(msg2)
    }

    render() {
        return (
            <>
                <h1>Events</h1>
                <button onClick={this.handleClick.bind(this, 'hello', 'world')}>Click me!</button>
            </>
        )
    }
}

export default App;



/*
Paso de parametros sin arrow function:

<button onClick={this.handleClick.bind(this, 'hello', 'world')}>Click me!</button>

La forma de pasar parametros si no contamos con arrow functions es utilizar el metodo 'bind' y pasar como primer parametro 'this', luego podemos pasar uno o mas parametros.


handleClick(msg, msg2, e) {
    console.log(e)
    console.log(msg)
    console.log(msg2)
}

En el 'handle' debemos pasar los parametros pero siempre el evento (e) debe ser el ultimo.

*/