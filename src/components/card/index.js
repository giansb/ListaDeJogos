
import './style.css'

export default function ComponentCard(props){
    let text = "teste";
     text = String(props.sobre);

    if(text.length>175){
        text = text.slice(0,175);
    }

    text = text + "..."

    let plataforma;

    if(props.plataforma == "PLAYSTATION"){
        plataforma = "./img/icons/playstation.png";
    } else if (props.plataforma == "XBOX"){
        plataforma = "./img/icons/xbox.png";
    } else if(props.plataforma == "NINTENDO"){
        plataforma = "./img/icons/nintendo.png";
    }



    return(
        <div className="card">
            <img src={props.image}/>
            <div className='card-content1'>
                <div className="card-content">
                    <h3>{props.titulo}</h3>
                    <p>{text}</p>
                </div>
                <div className='card-content2'>
                    <a href={props.link} target='_blank' >COMPRAR</a>
                    <img className='logo' src={plataforma} width="50"></img>
                </div>
            </div>
        </div>
    );
}