import Image from 'next/image'
import { Inter } from 'next/font/google'
import Cabecalho from "../components/Cabecalho";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";


export default function Home() {
  return (
    <>
      <Pagina titulo="Pagina Inicial">
        <Container>
          <h1>Deputados</h1>
          <p>Loren LorenLoren Loren Loren Loren Loren LorenvLoren
             LorenLoren LorenLoren LLoren LorenLoren LorenLoren Loren
             Loren LorenLoren LorenLoren LorenLoren LorenLoren Loren
             Loren LorenLoren LorenLoren LorenLoren Lorenoren</p>
        </Container>
      </Pagina>
    </>
  )
}
