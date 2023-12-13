import { useState } from "react";
import './style.css';
import ComponentCard from "../card";
import { buscarJogo, filtrarJogo, retornarJogos } from "../../servico";

export default function ComponenteLista(){

    const [lista, setLista] = useState(retornarJogos());
    const [texto, setTexto] = useState("");
  

    const BuscarJogoPlataforma = (plataforma) => {
        setLista(filtrarJogo(plataforma));
        setTexto("");

    }

    const LimparBusca = () => {
        setLista( retornarJogos());
        setTexto("");
    }

    const BuscarJogo = (texto) => {
        setTexto(texto);
        setLista(buscarJogo(texto))
        
     
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