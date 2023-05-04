import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";


export default function Home() {
  return (
    <>
      <Pagina titulo="Pagina Inicial">
        <Container>
          <span className="text-8xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-3">Deputa<br/>Dex</span>
          <p className="pt-4 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Loren LorenLoren Loren Loren Loren Loren LorenvLoren
             LorenLoren LorenLoren LLoren LorenLoren LorenLoren Loren
             Loren LorenLoren LorenLoren LorenLoren LorenLoren Loren
             Loren LorenLoren LorenLoren LorenLoren Lorenoren</p>
        </Container>
      </Pagina>
    </>
  )
}
