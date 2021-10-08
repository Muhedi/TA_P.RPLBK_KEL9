import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Detail from './detail';
import { useContext, createContext } from 'react';

const Context = createContext('Default Value');
export function Utama() {
  const value = 'MUHAMMAD EDI ILFA';
  const value1 = '2112011812017';
  return (
    <Container>
      <br />
      <Card className=" bg-light text-Dark ">
        <Card.Img src="https://i.ibb.co/Hrcq19h/SSS.png" alt="Card image" width={1000} height={600} />
        <Card.ImgOverlay>
          <br />
          <br />
       
          <Card.Title className="title-8 ">
            PUSAT DATABASE FILM <span className=" text-success">TOKOPAEDI.COM </span> 
          </Card.Title>

          <Card.Text> UDAH KEPO? CEK DISINI</Card.Text>
          <Detail />
        </Card.ImgOverlay>
      </Card>
      <footer className="blockquote-footer">
        <CardGroup>
          <Card>
            <Card.Body className=" body-4">
              <Card.Title>
                <br />
                <h4> KLIK POJOK KANAN ATAS </h4>
                <h2> "DATABASE FILM"</h2>
                <h4> SERUU! !</h4>
              </Card.Title>
              <Card.Text>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className=" body-4">
              <Card.Title>
                KELOMPOK 9
                <br />
                <Context.Provider value={value}>
                  <MyComponent />
                </Context.Provider>
                <br />
                <Context.Provider value={value1}>
                  <MyComponent1 />
                </Context.Provider>
              </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </footer>
      <br />
      <br />
    </Container>
  );
}

function MyComponent() {
  const value = useContext(Context);

  return <span>{value}</span>;
}

function MyComponent1() {
  const value1 = useContext(Context);

  return <span>{value1}</span>;
}
