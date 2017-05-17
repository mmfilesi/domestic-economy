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
      subtotalOutputs: 0,
      showInputs: true,
      showOutputs: true
    };

    this.handleClickHideBlock = this.handleClickHideBlock.bind(this);
    this.handleClickDeleteOutput = this.handleClickDeleteOutput.bind(this);
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

  handleClickHideBlock(block) {
    this.setState({[block]: !this.state[block]});
  }

  handleClickDeleteOutput(idOutput) {
    let arrTemp = this.state.outputs.filter( (item)=> {
      if ( item.id !== idOutput ) {
        return true;
      }
      return false;
    });

    this.setState({outputs: arrTemp});
  }

  render() {
    return (
    <div className='view-main'>
      <MainHeader />
        {/* Ingresos */}
        <h4>
        <button onClick={ ()=> this.handleClickHideBlock('showInputs') } >
          { this.state.showInputs ? '-' : '+' } Ingresos
        </button>
        </h4>
        { this.state.showInputs &&
        <ListEconomy items={this.state.inputs} subtotal={this.state.subtotalInputs} />
        }
        {/* Gastos */}
        <h4>
        <button onClick={ ()=> this.handleClickHideBlock('showOutputs') } >
          { this.state.showOutputs ? '-' : '+' }  Gastos
        </button>
        </h4>
        { this.state.showOutputs && 
        <ListEconomy deleteItem={ this.handleClickDeleteOutput } items={this.state.outputs} subtotal={this.state.subtotalOutputs} />
        }
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