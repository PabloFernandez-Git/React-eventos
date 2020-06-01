import React, { Component } from 'react'

class App extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this)
    }

    render() {
        return (
            <>
                <h1>Events</h1>
                {/*  <button onClick={this.handleClick}>Click me!</button> */}
                {/* <buttononClick={()=>this.handleClick()}>Clickme!</button> */}
                {/* <button onClick={this.handleClick.bind(this)}>Click me!</button> */}
                <button onClick={this.handleClick}>Click me!</button>
            </>
        )
    }
}


export default App;



/*
Formas de enlazar eventos (existen cuatro)

La forma mas recomedada es utilizar una arrow function pero de no ser posible, la mejor solucion es realizar el bind de la funcion con la clase (Class App) dentro del constructor.



1. Arrow function (recomendada!)

handleClick = () => {
    console.log(this)
}

<button onClick={this.handleClick}>Click me!</button>

El contexto que es lo que significa 'this' (el contexto de la funcion) es 'Class App'.
Estamos haciendo referencia a la clase en la cual nos encontramos.

----------

2. Como bindear (como hacer el enlace) entre las funciones cuando handleClick no tiene el contexto que debe. 

handleClick() {
    console.log(this)
}

<button onClick={() => this.handleClick()}>Click me!</button>


----------

3. Bind

Bind es un metodo que modifica el contexto de la funcion que estamos ejecutando.
En el caso del boton el contexto de 'this' si es 'Class App' por lo tanto estamos llamando a la funcion y estamos enlazando el contexto del boton con la clase.

handleClick() {
    console.log(this)
}

<button onClick={this.handleClick.bind(this)}>Click me!</button>


----------

4. Realizar el bind de la funcion con la clase (Class App) dentro del constructor (mejor opcion!)

<button onClick={this.handleClick}>Click me!</button>

constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
}

Escribimos el nombre la funcion que queremos enlazar (this.handleClick) y lo igualamos con 'this.handleClick.bind(this)'.
De esta forma le estamos diciendo que el contexto de la funcion va a ser igual a la misma funcion con el contexto correcto.
De esta forma en el boton podriamos usar la funcion utilizando 'onClick={this.handleClick}'


----------

Bind
For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

*/