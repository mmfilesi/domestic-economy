import React, { Component } from 'react';
import { MainHeader, MainFooter, ListEconomy } from '../../components';

class ViewMain extends Component {

  constructor(props) {
    super(props);
    /* en state definimos dos arrays, uno para los ingresos (inputs) y otro para las salidas (oputputs) */
    this.state = {
      inputs: [
        {'id': '00', 'description': 'nómina', 'quantity': 100}
      ],
      outputs: [
        {'id': '00', 'description': 'libro formidable', 'quantity': 2},
        {'id': '01', 'description': 'calcetines', 'quantity': 3},
        {'id': '02', 'description': 'comida gato', 'quantity': 2}
      ],
      subtotalInputs: 0,
      subtotalOutputs: 0
    };
  }

  componentWillMount() {
    /* Separo las estas variables para que se entienda mejor el proceso, pero podríamos haber definido el valor directamente en setState */
    let subtotalInp = this.getSubtotal(this.state.inputs);
    let subtotalOut = this.getSubtotal(this.state.outputs);
    this.setState({subtotalInputs: subtotalInp});
    this.setState({subtotalOutputs: subtotalOut});
  }

  getSubtotal(arrayItems) {
    return arrayItems.reduce( (subtotal, next) => subtotal + next.quantity, 0)
  }

  render() {
    return (
    <div className='view-main'>
      <MainHeader />
        {/* Ingresos */}
        <ListEconomy subtitle='Ingresos' items={this.state.inputs} subtotal={this.state.subtotalInputs} />
        {/* Gastos */}
        <ListEconomy subtitle='Gastos' items={this.state.outputs} subtotal={this.state.subtotalOutputs} />
        <p>
            {( this.state.subtotalOutputs > this.state.subtotalInputs ) ?
             <span className='warning'>Cuidado, vamos mal.</span> :
             <span className='info'>Todo correcto.</span> 
            }
        </p>
      <MainFooter />
    </div>
    );
  }
}

export default ViewMain;