import { useState } from "react";
import { colecaoDados } from "../colecao";
import './style.css';
import ComponentCard from "../card";

export default function ComponenteLista(){

    const [lista, setLista] = useState(colecaoDados);

  

    const BuscarJogoPlataforma = (plataforma) => {
        setLista(
            colecaoDados.filter((jogo) =>{
                return jogo.plataforma == plataforma;
            })
        
        );

    }

    const LimparBusca = () => {
        setLista(
            colecaoDados
        )
    }

    const BuscarJogo = (texto) => {
        
        setLista(lista.filter((jogo) =>
        jogo.nome.toLowerCase().includes(texto.toLowerCase()) || 
        jogo.plataforma.toLowerCase().includes(texto.toLowerCase())))
    }

    return(
        <div className="principal">
            <h3>Lista de jogos</h3>
            <div className="lista-botoes">
                <div className="lista-filtros">
                    <button className="xbox" onClick={() => BuscarJogoPlataforma("XBOX")}>XBOX</button>
                    <button className="play" onClick={() => BuscarJogoPlataforma("PLAYSTATION")}>PlayStation</button>
                    <button className="nintendo" onClick={() => BuscarJogoPlataforma("NINTENDO")}>Nintendo</button>
                </div>
                <button className="limpar" onClick={() => LimparBusca()}>MOSTRAR TODOS</button>
            </div>
            <input className="input-group mb-3 pesquisa" type="text" id="pesquisa" placeholder="pesquisar" onChange={(event) => BuscarJogo(event.target.value)}/>
            <div className="lista-array">
                
                {
                    lista.map((jogo) => {
                        return(
                            <ComponentCard key={jogo.id} titulo={jogo.nome} image={jogo.img} sobre={jogo.sobre} link={jogo.link} plataforma={jogo.plataforma}/>
                        );
                    })
                }
            </div>
        </div>
    );
}