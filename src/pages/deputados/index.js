import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiDeputa from '../../services/apiDeputa'

const index = ({deputados}) => {

    return (

        <Pagina titulo="Deputados">

            <Row className="px-1 mx-1">
                {deputados.dados.map(item => (
                    <Col key={item.id} md={3} className="mb-4" >
                        <Card>
                            <Card.Img style={{ Width: '100%', height: '100%' }} variant="top" src={item.urlFoto} title={item.name} />
                            <Card.Body className='bg-gradient-to-tl from-indigo-100 via-indigo-400 to-blue-900 text-white'>
                                <Card.Title>{item.nome}</Card.Title>
                                <div className="d-flex flex-column align-items-end">
                                    <Link href={'/deputados/' + item.id} className='btn btn-primary text-white'>Detalhes</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiDeputa.get("/deputados")
    const deputados = resultado.data

    return {
      props: {deputados}
    }
  }