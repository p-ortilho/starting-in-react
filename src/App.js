import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { useState } from 'react';

function App() {

  const times = [
    {"nome": "Front-end",
      "corPrimaria": "#57C278",
      "corSecundaria": "#D9F7E9"
    }, 

    {"nome": "Programação",
      "corPrimaria": "#82CFFA",
      "corSecundaria": "#E8F8FF"
    },

    {"nome": "Data Science",
      "corPrimaria": "#A6D157",
      "corSecundaria": "#F0F8E2"
    },
     
    {"nome": "Back-end",
      "corPrimaria": "#E06B69",
      "corSecundaria": "#FDE7E8"
    },
     
    {"nome": "Deveops",
      "corPrimaria": "",
      "corSecundaria": ""
    },
     
    {"nome": "Mobile",
      "corPrimaria": "#DB6EBF",
      "corSecundaria": "#FAE9F5"
    },

    {"nome": "Invação e Gestão",
      "corPrimaria": "#FFBA05",
      "corSecundaria": "#FFF5D9"
    },
    
    {"nome": "UX e Design",
      "corPrimaria": "#FF8A29",
      "corSecundaria": "#FFEEDF"
    }

  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log('Adicionando colaborador...', colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corFundo={time.corSecundaria} 
          corCard={time.corPrimaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
        />
      )}

      <Rodape/>

    </div>
  );
}

export default App;