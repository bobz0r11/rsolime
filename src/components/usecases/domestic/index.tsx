import { useEffect } from 'react';

import casa1 from 'images/casa1.jpg';
import casa2 from 'images/casa2.jpg';
import casa4 from 'images/casa4.jpg';
import casa5 from 'images/casa5.jpg';
import casa6 from 'images/casa6.jpg';
import casa7 from 'images/casa7.jpg';
import casa8 from 'images/casa8.jpg';
import casa9 from 'images/casa9.jpg';

import { BsHouse } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";

import './domestic.scss';

const Domestic = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="overlay" />
            <div className="domestic">
                <div className="domestic__content">
                    <div className="domestic__content--header active reveal fade-bottom">
                        <div className="domestic__content--header__icon">
                            <BsHouse />
                        </div>
                        <div className="domestic__content--header__text">
                            DOMESTICO
                        </div>
                    </div>
                    <div className="reveal active fade-bottom">
                        <div className="domestic__content--title">
                            CASA - SERVIZI IGIENICI
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa1} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> WC
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Lavabi
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Lavandini
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> piatti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> doccia, vasche, ecc.
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere ½ cucchiaino da caffè per ogni scarico interessato 2 volte prima settimana.  dopo 15gg, infine, una volta al mese, preferibilmente la sera; il mattino seguente fare scorrere acqua.
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA - CUCINA
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa2} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Piani di lavoro
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pavimenti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Lavastoviglie/Lavatrice
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Interno cappe
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Climatizzatori, forni, frigoriferi, ecc.
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pattumiera organico
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere ½ cucchiaino da caffè in 1/2 litro di acqua, mescolare, filtrare su fazzolettino di carta, in flacone munito di erogatore spray. Nebulizzare sulle parti interessate. Pattumiera organico: Disperdere ¼ di un cucchiaino da caffè anche tutti i giorni su residui alimentari che emettono forti odori o a giorni alterni.
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            CASA - CAMERE DA LETTO
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa4} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pavimenti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Tappeti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Tendaggi
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Materassi
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Cuscini
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Scarpiere
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere ½ cucchiaino da caffè in 1/2 litro di acqua, mescolare, filtrare su fazzolettino di carta, in flacone munito di erogatore spray. Nebulizzare sulle parti interessate.
                            </div>

                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA - SALOTTI STUDI
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa5} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pavimenti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Tappeti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Divani, poltrone, tendaggi ecc.
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere ½ cucchiaino da caffè in 1/2 litro di acqua, mescolare, filtrare su fazzolettino di carta, in flacone munito di erogatore spray. Nebulizzare sulle parti interessate.
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            CASA - AMBIENTI ESTERNI (PORTICATI-AREE COTILIVE)
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa6} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Grigliati
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Fosse biologiche
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pozzetti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pozzi neri
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Vasche condensa grassi, ecc.
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere ½ cucchiaino da caffè sulle parti interessate 2 volte prima settimana. Dopo 15gg, infine una volta al mese.
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA - AMBIENTE ESTERNO (COMPOSTIERA FAI DA TE)
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa7} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Sfalci
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Scarti da cucina
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Scarti di foglie
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Scarti di fiori
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Scarti di potature
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Altre sostanze organiche in decomposizione
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere ½ cucchiaino da caffè ogni 15 gg. In soli 3 mese avrete il vero compost per il vostro giardino e il vostro orto.
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            CASA - FAMIGLIA
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa8} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Scarpe
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pannolini
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pannoloni
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Salva slip
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere in minime quantità a modo di talco.
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA - ANIMALI DA COMPAGNIA
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa9} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Cani
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Gatti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Furetti roditori
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Conigli
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Uccelli
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pesci ornamentali, tartarughe, serpenti e molti altri
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>Modalità d'uso: </strong>
                                Disperdere in minime quantità a modo di talco lella lettiera-nella cuccia 2 volte la settimana. (per i pesci ornamentali disperso nell'acqua).
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Domestic;