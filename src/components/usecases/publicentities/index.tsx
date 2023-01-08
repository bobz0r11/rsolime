import { useEffect } from 'react';

import casa1 from 'images/casa1.jpg';
import casa2 from 'images/casa2.jpg';
import casa3 from 'images/casa3.jpg';
import casa4 from 'images/casa4.jpg';

import { HiOutlineBuildingLibrary } from "react-icons/hi2";

import './publicentities.scss';

const Publicentities = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="overlay" />
            <div className="publicentities">
                <div className="publicentities__content">
                    <div className="publicentities__content--header active reveal fade-bottom">
                        <div className="horeca__content--header__icon">
                            <HiOutlineBuildingLibrary />
                        </div>
                        <div className="horeca__content--header__text">
                            Public entities
                        </div>
                    </div>
                    <div className="reveal active fade-bottom">
                        <div className="publicentities__content--title">
                            Casa
                        </div>
                        <img className="publicentities__content--image publicentities__content--image--left" src={casa1} alt="Logo" />
                        <div className="publicentities__content--text">
                            &emsp;&emsp;Tale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizio
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="publicentities__content--text">
                            &emsp;&emsp;Tale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizio
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="publicentities__content--title">
                            Cucina
                        </div>
                        <img className="publicentities__content--image publicentities__content--image--right" src={casa2} alt="Logo" />
                        <div className="publicentities__content--text">
                            &emsp;&emsp;Tale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizioTale complesso si rivela, a contatto con microrganismi patogeni, come efficace “antagonista batterico”.
                            La duplicazione esponenziale delle colonie batteriche generate viene favorita dalla catalizzazione enzimatica, che assicura una rapida reazione biochimica rivolta alla degradazione della sostanza organica,
                            con conseguente inibizio
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <img className="publicentities__content--image publicentities__content--image--left" src={casa3} alt="Logo" />
                        <div className="publicentities__content--text">
                            &emsp;&emsp;Disperdere 2 grammi in ogni scarico interessato 2 volte 1° settimana. Ripetere dopo 15 giorni, infine 1 volta al mese, preferibilmente di sera. Il mattino seguente far scorrere l'acqua
                            Elimina alla fonte i cattivi odori, le incrostazioni generate da residui organici, gli intasamenti e le contaminazioni batteriche
                            Caratteristica: bonifica naturalmente l'ambiente, attivo a pH acidi o basici, resiste a temperature sino a 50°C in presenza o assenza di luce, in ambienti aerobici o anaerobici.
                            Trattandosi di un composto totalmente naturale, non provoca nessuna azione ossidativa, corrosiva odeteriorante sui materiali cui viene a contatto, come materiali ferrosi plastica pvc ecc. in quanto le florebatteriche sono indirizzate, al loro risveglio, a degradare solo ed unicamente la sostanza organica; pertanto,si può affermare che il prodotto può essere manipolato con estrema sicurezza dagli operatori tecnici, nonabbisogna di alcuna precauzione specifica o preventiva. I test analitici confermano e viene contemplato come prodotto naturale non tossico, non corrosivo.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Publicentities;