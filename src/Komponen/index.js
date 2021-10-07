import React, { Component, useEffect } from 'react';
import Makanan from './film/film';
import { Button } from 'react-bootstrap';
class Index extends Component {
  componentDidMount() {
    alert(`Proses tampil data film`);
  }
  componentWillUnmount() {
    alert('Proses tutup data film');
  }

  render() {
    return (
      <div>
        <film />
      </div>
    );
  }
}

export default Index;
