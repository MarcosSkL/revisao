import React from 'react'
import Cabecalho from './Cabecalho'
import { Container } from 'react-bootstrap';

const Pagina = (props) => {

  return (
    <>
      <Cabecalho />
      <div className="bg-secondary p-5 bg-secondary bg-opacity-25 mb-4">
        <Container className="px-5 mx-5">
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      <Container className='pb-5 mb-5'>
        {props.children}
      </Container>

      <div style={{ width: "100%" }} className="bg-secondary mt-5 position-fixed bottom-0 py-3 text-white text-center">
        <p>@MarcosSkL</p>
      </div>

    </>
  )
}

export default Pagina