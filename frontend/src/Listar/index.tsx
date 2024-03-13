import { useEffect, useState } from 'react';
import './styles.css';

import Praia1 from '../assets/praia1.jpeg'
import Praia2 from '../assets/praia2.jpeg';
import Praia3 from '../assets/praia3.jpeg';

// npm install --save-dev @types/react @types/react-dom

function Listar() {

  interface Props {
    foto: string,
    localizacao: string
  }
  const [praias, setPraias] = useState([
  {
    foto:Praia1,
    localizacao:"Porto de Galinhas"
  },
  {
    foto:Praia2,
    localizacao:"Carneiros"
  },
  {
    foto:Praia3,
    localizacao:"Natal"
  }]);


  // useEffect(() => {
  //   setPraias(getPraias());
  // }, [])

  function getPraias() {
      return [
        {
          foto:Praia1,
          localizacao:"Porto de Galinhas"
        },
        {
          foto:Praia2,
          localizacao:"Carneiros"
        },
        {
          foto:Praia3,
          localizacao:"Natal"
        }
    ]
  }

 

  const [descricao,setDescricao] = useState('');

  const [verBotao, setVerBotao] = useState(true);
  
  function ListarItem(props: Props) {
    return (
  
        <div className="item">
          <div className="foto">
            <img src={props.foto} alt="praia"/>
          </div>
          <div className="localizacao">
            {props.localizacao}</div>
        </div>
  
  
    )
  }

  function IrBuscar() {
    const results = praias.filter(item => item.localizacao.toLowerCase().indexOf(descricao.toLowerCase()) !== -1);
    setPraias(results);
    setVerBotao(!verBotao);

  }

  function IrLimpar() {

    setPraias(getPraias());
    // setPraias([
    //   {
    //     foto:Praia1,
    //     localizacao:"Porto de Galinhas"
    //   },
    //   {
    //     foto:Praia2,
    //     localizacao:"Carneiros"
    //   },
    //   {
    //     foto:Praia3,
    //     localizacao:"Natal"
    //   }]);
    setVerBotao(!verBotao);
  }
  


    return (
    // <div className="main">
    //   <ListarItem foto={Praia1} localizacao={"Porto de Galinhas"}/>
    //   <ListarItem foto={Praia2} localizacao={"Carneiros"}/>
    //   <ListarItem foto={Praia3} localizacao={"Natal"}/>
    // </div>  


    <div className="Main">
    



          <div className="busca">
            
            {verBotao && (
              <input className="input" 
                type="text"
                placeholder="Pesquise sua praia de hoje"
                value={descricao}    
                onChange={e => setDescricao(e.target.value)}
              />
            )}               

            {verBotao && (
              <button 
                type="button"
                className="button" 
                onClick={IrBuscar}
                >Buscar</button>
            )}   

            {!verBotao && (
              <button 
                type="button"
                className="button" 
                onClick={IrLimpar}
                >Nova Busca</button>
            )}   


          </div>


          

          <div className="itens">

            {praias.map(item => {
            return (
              <ListarItem 
                key={item.localizacao}
                foto={item.foto}
                localizacao={item.localizacao}
              />
            )
            })}
          </div>

    </div> 

     
  );
}

export default Listar;
