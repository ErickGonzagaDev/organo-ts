import './Colaborador.css'
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";

interface ColaboradorProps {
    colaborador: IColaborador
    corDeFundo: string
}


const Colaborador = ({ colaborador, corDeFundo }: ColaboradorProps) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <h5>{new Date(colaborador.data).toLocaleDateString()}</h5>
        </div>
    </div>)
}

export default Colaborador