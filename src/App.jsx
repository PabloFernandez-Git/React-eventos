import React, { Component, Fragment } from 'react';
import Button from './components/Button'

class App extends Component {

    handleClick = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <Fragment>
                <h1>Events</h1>
                {/* <button onClick={this.handleClick}>Click me!</button> */}
                <Button text="Click me!" />
            </Fragment>
        )
    }
}

export default App;



/*
Eventos en componentes funcionales

Para utilizar eventos en un componente que no tiene estado o que no es una clase (Class component) lo que tenemos que hacer es crear el evento (usando una funcion) dentro del componente.

Para utilizar handleClick tenemos que declararlo (const handleClick) y de esta forma tenemos una función dentro de otra función.

Una vez que ya tenemos la funcion handleClick declarada en nuestra función solo tenemos que llamarla.



*/