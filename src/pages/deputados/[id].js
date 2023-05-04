import { Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiDeputa from '../../services/apiDeputa'
import Link from 'next/link'

const Detalhes = ({ deputados, despesas, profissao }) => {

    return (
        <Pagina titulo={deputados.dados.ultimoStatus.nome}>
            <Row key={deputados.id} >

                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src={deputados.dados.ultimoStatus.urlFoto} alt={deputados.dados.nomeCivil} />
                        <Card.Body className='bg-gradient-to-tl from-indigo-100 via-indigo-400 to-blue-900 text-white'>
                            <Card.Title className='h5'>{deputados.dados.nomeCivil}</Card.Title>
                            <p>Partido: {deputados.dados.ultimoStatus.siglaPartido}<br />
                                UF Partido: {deputados.dados.ultimoStatus.siglaUf} </p>
                        </Card.Body>
                    </Card>
                    <div className="d-flex flex-column align-items-start pt-1">
                        <Link href={'/deputados/'} className='btn btn-primary text-white'>Voltar</Link>
                    </div>
                </Col>
                <Col md={6}>
                    <h3>Despesas</h3>
                    <Table bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {despesas.dados.map(item => (
                                <tr>
                                    <td>{item.dataDocumento}</td>
                                    <td>{item.tipoDespesa}</td>
                                    <td>{item.valorDocumento}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Col>
                <Col md={3}>
                    <h3>Profissões</h3>
                    <ul>
                        {profissao.dados.map(item => (
                            <li style={{ listStyle: "inside" }}>
                                {item.titulo}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>

        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const deputado = await apiDeputa.get("/deputados/" + id)
    const despesa = await apiDeputa.get("/deputados/" + id + "/despesas")
    const profi = await apiDeputa.get("/deputados/" + id + "/profissoes")

    const deputados = deputado.data
    const despesas = despesa.data
    const profissao = profi.data

    return {
        props: { deputados, despesas, profissao }
    }
}