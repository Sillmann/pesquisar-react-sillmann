import React from 'react';
import { useState } from 'react';
import './styles.css';

import Praia1 from '../assets/praia1.jpeg'
import Praia2 from '../assets/praia2.jpeg';
import Praia3 from '../assets/praia3.jpeg';

interface Props {
  foto: string,
  localizacao: string
}

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

function Listar() {

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

  return (
    // <div className="main">
    //   <ListarItem foto={Praia1} localizacao={"Porto de Galinhas"}/>
    //   <ListarItem foto={Praia2} localizacao={"Carneiros"}/>
    //   <ListarItem foto={Praia3} localizacao={"Natal"}/>
    // </div>  


    <div className="main">
    
          <form className="form">
            <input className="input" 
              placeholder="Pesquise sua praia de hoje"
            />
          </form>

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
