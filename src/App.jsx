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
                <Button text="Click me" onEventClick={this.handleClick} />
            </Fragment>
        )
    }
}

export default App;



/*
Eventos personalizados

El evento onClick={this.handleClick} es una prop que pertenece a las etiquetas de JSX.
<Button /> no es un etiqueta JSX; es un componente.

Para que funcione debemos crear un evento personalizado.

<Button text="Click me" onEventClick={this.handleClick} />

Dentro de nuestro componente pasamos el 'onEventClick' y dentro de la etiqueta <Button> donde si tenemos el evento 'onClick' le decimos que cuando hagan click en ese boton ejecute la prop que le pasamos (onEventClick).

const Button = ({ text, onEventClick }) => (
    <Button onClick={onEventClick}> {text} </Button>
)

Cuando pasamos eventos entre componentes NO se pone el evento en el componente.
'OnClick' son eventos que hay que aplicar a etiquetas JSX.
Los componentes necesitan eventos personalizados. 


*/