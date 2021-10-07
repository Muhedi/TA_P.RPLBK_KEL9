import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { useState, createContext, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Home } from '../home';
import { Switch, Route } from 'react-router-dom';
// import Detail from '../detail';

export default class film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      visible: false,
      judul: '',
      poster: '',
      genre: '',
      harga: '',
      detail: '',
      id: '',
      character: '',
    };
  }

  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
    console.log(this.state.id);
  };

  handlejudul = (e) => {
    this.setState({
      judul: e.target.value,
    });
    console.log(this.state.judul);
  };

  handleposter = (e) => {
    this.setState({
      gambar: e.target.value,
    });
    console.log(this.state.poster);
  };
  handlegenre = (e) => {
    this.setState({
      daerah: e.target.value,
    });
    console.log(this.state.genre);
  };
  handleHarga = (e) => {
    this.setState({
      harga: e.target.value,
    });
    console.log(this.state.harga);
  };
  handleDetail = (e) => {
    this.setState({
      detail: e.target.value,
    });
    console.log(this.state.detail);
  };
   handlecharacter = (e) => {
    this.setState({
      character: e.target.value,
    });
    console.log(this.state.character);
  };
  handletrailer = (e) => {
    this.setState({
      trailer: e.target.value,
    });
    console.log(this.state.trailer);
  };

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:8000/films',
      // json-server --watch dataPemain.json
      headers: {
        accept: '*/*',
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          film: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    alert(`SHOW FILEM!`);
  }

  state = {
    komponen1: false,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm('HALO DARI TOKOPAEDI.COM');
  }

  ubahkomponen1 = () => {
    this.setState((state) => {
      return { komponen1: !this.state.komponen1 };
    });
  };
  componentWillUnmount() {
    alert('HAI DARI TOKOPAEDI.COM');
  }
  render() {
    return (
      <div>
        <div>
          <br />
          <Button variant="outline-danger" href="film" onClick={this.ubahkomponen1} href="/">
            {this.state.komponen1 ? 'TAMPILIN ' : 'SEMBUNYIIN '}
            FILEM
          </Button>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          {/* <Detail /> */}
        </div>
        {this.state.film.map((results, index) => {
          return (
            <div>
              <div>
                <br />
                <Container>
                  <Row xs={5} md={4} className="g-10">
                    <Col justifyContent="center">
                      {Array.from({ length: 1 }).map((_, idx) => (
                        <Card className="text-white " key={results.id} style={{ width: '81rem' }} justifyContent="center">
                          <Card.Img src={results.poster} alt="Card image" width={400} height={800} />
                          <Card.ImgOverlay>
                            <Card.Title className="mb-2 bg-danger  ">{results.judul}</Card.Title>
                            <Card.Text className="mb-2 bg-warning  ">{results.detail}</Card.Text>
                            <Card.Text className="mb-5 bg-success">{results.harga}</Card.Text>

                            <Card.Footer>
                              <FilmDetail judul={results.judul} poster={results.poster} genre={results.genre} harga={results.harga} detail={results.detail} character={results.character} trailer={results.trailer} />
                            </Card.Footer>
                          </Card.ImgOverlay>
                        </Card>
                      ))}
                    </Col>
                  </Row>
                  <br />
                </Container>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function FilmDetail(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, judul, genre, harga, detail, poster, character, trailer } = props;

  var userDetailContext = createContext(null);

  useEffect(() => {
    document.title = `${judul}`;
  });

  return (
    <>
      <userDetailContext.Provider key={id}>
        <Button variant="primary" onClick={handleShow}>
          Detail
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{judul}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Poto src={poster}></Poto>
            <p>judul : {judul}</p>
            <p>Genre : {genre}</p>
            <p>Detail : <br /> {detail}</p>
            <p>Karakter : {character}</p>
            <p>Trailer : {trailer}</p>
            <p>Harga : {harga}</p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </userDetailContext.Provider>
    </>
  );
}

function Poto(props) {
  return (
    <div>
      <Image src={props.src} />
      <br />
    </div>
  );
}

const Image = styled.img`
  border: 1px solid #03bfcb;
  border-radius: 5%;
  padding: 0px;
  width: 50%;
  height: 10%;
  margin: 20px;
`;
