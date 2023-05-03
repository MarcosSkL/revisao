import { Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiDeputa from '../../services/apiDeputa'
import Link from 'next/link'

const Detalhes = ({ deputados, despesas, profissao }) => {

    return (
        <Pagina>
            <Row>

                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src={deputados.dados.ultimoStatus.urlFoto} alt={deputados.dados.nomeCivil} />
                        <Card.Body className='bg-secondary text-white'>
                            <Card.Title>{deputados.dados.nomeCivil}</Card.Title>
                            <div className="d-flex flex-column align-items-end">
                                <Link href={'/deputados/'} className='btn btn-info text-white'>Voltar</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <h3>Despesas</h3>
                    <Table striped>
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
                                    <td>{item.tipoDocumento}</td>
                                    <td>{item.valorDocumento}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Col>
                <Col md={3}>
                    <h3>Profissão</h3>
                    <ul>
                        <li>
                           {profissao.dados.map(item =>(
                            {item.nome}
                           ))}
                           
                        </li>
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