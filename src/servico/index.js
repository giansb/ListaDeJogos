import { colecaoDados } from "../data"



export const retornarJogos = () => {
    return colecaoDados;
}

export const buscarJogo = (texto) => {
    return colecaoDados.filter((jogo) => 
        jogo.nome.toLowerCase().includes(texto.toLowerCase()) ||
        jogo.plataforma.toLowerCase().includes(texto.toLowerCase())
    );
};

export const filtrarJogo = (plataforma) => {
    return colecaoDados.filter((jogo) => jogo.plataforma === plataforma);
}