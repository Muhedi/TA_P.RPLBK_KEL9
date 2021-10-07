import { Component } from 'react';
import React from 'react';
import Index from './index';
import { Button } from 'react-bootstrap';

class Detail extends Component {
  state = {
    komponen1: false,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm('Iklan "TA RPLBK KELOMPOK 09 2021"!!');
  }

  ubahkomponen1 = () => {
    this.setState((state) => {
      return { komponen1: !this.state.komponen1 };
    });
  };

  render() {
    return (
      <div>
        {this.state.komponen1 ? <Index /> : ''}
        <Button variant="outline-danger" href="film" onClick={this.ubahkomponen1}>
          {this.state.komponen1 ? 'SEMBUNYIIN ' : 'TAMPILIN '}
         FILEM
        </Button>
      </div>
    );
  }
}
export default Detail;
