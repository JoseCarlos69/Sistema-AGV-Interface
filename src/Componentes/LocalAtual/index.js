import React from 'react';
import estilos from './index.module.css';
import ButtonSensor  from '../../Assets/buttonSensor';
import useMedia from './../../Hooks/useMedia';
import IconeHorario from '../../Assets/iconeHorario';
// import StatusRota from '../../Componentes/StatusRota';
import imgRota from './rota.png';

const InfoFields = () => {
    const isMobile = useMedia("(max-width: 740px)");

    return (
        <p className={estilos.StatusRota}>
            {/* <StatusRota /> */}
            { !isMobile && <span></span> }
        <section className={estilos.board}>
                <div className={estilos.rota}>
                    <img src={imgRota} alt="Área de localização do AGV"/>
                </div>
                    <section className={estilos.fields} >
                            <span>Local atual</span>
                        <div className={estilos.fieldLocal} id="field1">
                            <span>Ponto A</span>
                        </div>
                            <span>Partida</span>
                        <div className={estilos.fieldPartida} id="field">
                            <span >Ponto A</span>
                        </div>
                        <span>Destino</span>
                        <div className={estilos.fieldDestino}  id="field">
                            <span >Ponto D</span>
                        </div>
                            <span >Velocidade</span>
                        <div className={estilos.fieldVeloc}  id="field">
                            <span >30 cm/s</span>
                        </div>
                    </section>
        </section>

        <section className={estilos.atividades}>
            <div className="row">
                <div className={estilos.texto}>
                    <h1>Atividades</h1>
                </div>
                    <div className={estilos.card}>
                    <IconeHorario className={estilos.horario}/>
                    <ButtonSensor />
                    <p className="ocorrencia">Sem ocorrências</p>                
                    </div>
                    <div className={estilos.card}>                
                    <IconeHorario className={estilos.horario}/>
                    <ButtonSensor />
                    <p className="ocorrencia">Sem ocorrências</p>                
                    </div>
                    <div className={estilos.card}>                
                    <IconeHorario className={estilos.horario}/>
                    <ButtonSensor />
                    <p className="ocorrencia">Sem ocorrências</p>                
                    </div>
            </div>
            <div className="row">
                    <div className={estilos.card}>                
                    <IconeHorario className={estilos.horario}/>
                    <ButtonSensor />
                    <p className="ocorrencia">Sem ocorrências</p>                
                    </div>
                    <div className={estilos.card}>                
                    <IconeHorario className={estilos.horario}/>
                    <ButtonSensor />
                    <p className="ocorrencia">Sem ocorrências</p>                
                    </div>
                    <div className={estilos.card}>                
                    <IconeHorario className={estilos.horario}/>
                    <ButtonSensor />
                    <p className="ocorrencia">Sem ocorrências</p>                
                    </div>
            </div>

        </section>
        </p>
    );
};

export default InfoFields;
