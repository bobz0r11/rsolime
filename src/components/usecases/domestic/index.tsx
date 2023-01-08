import { useEffect } from 'react';

import casa1 from 'images/casa1.jpg';
import casa2 from 'images/casa2.jpg';
import casa3 from 'images/casa3.jpg';
import casa4 from 'images/casa4.jpg';
import casa5 from 'images/casa5.jpg';
import casa6 from 'images/casa6.jpg';
import casa7 from 'images/casa7.jpg';
import casa8 from 'images/casa8.jpg';
import casa9 from 'images/casa9.jpg';

import { BsHouse, BsCheckSquareFill } from "react-icons/bs";

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
                            Domestico
                        </div>
                    </div>
                    <div className="reveal active fade-bottom">
                        <div className="domestic__content--title">
                            SERVIZI IGIENICI
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa1} alt="Logo" />
                        <div className="domestic__content--text">
                            <strong>Adatto per:</strong>
                            <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <BsCheckSquareFill /> </span> WC
                            <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <BsCheckSquareFill /> </span>	Lavabi
                            <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <BsCheckSquareFill /> </span>	Lavandini
                            <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <BsCheckSquareFill /> </span>	piatti
                            <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <BsCheckSquareFill /> </span>	doccia, vasche, ecc.
                            <br /><strong>Modalità d'uso:</strong> Disperdere ½ cucchiaino da caffè per ogni scarico interessato 2 volte prima settimana.  dopo 15gg, infine, una volta al mese, preferibilmente la sera; il mattino seguente fare scorrere acqua.
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA CUCINA
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa2} alt="Logo" />
                        <div className="domestic__content--text">
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
                        <img className="domestic__content--image domestic__content--image--left" src={casa3} alt="Logo" />
                        <div className="domestic__content--text">
                            &emsp;&emsp;Disperdere 2 grammi in ogni scarico interessato 2 volte 1° settimana. Ripetere dopo 15 giorni, infine 1 volta al mese, preferibilmente di sera. Il mattino seguente far scorrere l'acqua
                            Elimina alla fonte i cattivi odori, le incrostazioni generate da residui organici, gli intasamenti e le contaminazioni batteriche
                            Caratteristica: bonifica naturalmente l'ambiente, attivo a pH acidi o basici, resiste a temperature sino a 50°C in presenza o assenza di luce, in ambienti aerobici o anaerobici.
                            Trattandosi di un composto totalmente naturale, non provoca nessuna azione ossidativa, corrosiva odeteriorante sui materiali cui viene a contatto, come materiali ferrosi plastica pvc ecc. in quanto le florebatteriche sono indirizzate, al loro risveglio, a degradare solo ed unicamente la sostanza organica; pertanto,si può affermare che il prodotto può essere manipolato con estrema sicurezza dagli operatori tecnici, nonabbisogna di alcuna precauzione specifica o preventiva. I test analitici confermano e viene contemplato come prodotto naturale non tossico, non corrosivo.
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA CAMERE DA LETTO
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa4} alt="Logo" />
                        <div className="domestic__content--text">
                            &emsp;&emsp;Disperdere 2 grammi in ogni scarico interessato 2 volte 1° settimana. Ripetere dopo 15 giorni, infine 1 volta al mese, preferibilmente di sera. Il mattino seguente far scorrere l'acqua
                            Elimina alla fonte i cattivi odori, le incrostazioni generate da residui organici, gli intasamenti e le contaminazioni batteriche
                            Caratteristica: bonifica naturalmente l'ambiente, attivo a pH acidi o basici, resiste a temperature sino a 50°C in presenza o assenza di luce, in ambienti aerobici o anaerobici.
                            Trattandosi di un composto totalmente naturale, non provoca nessuna azione ossidativa, corrosiva odeteriorante sui materiali cui viene a contatto, come materiali ferrosi plastica pvc ecc. in quanto le florebatteriche sono indirizzate, al loro risveglio, a degradare solo ed unicamente la sostanza organica; pertanto,si può affermare che il prodotto può essere manipolato con estrema sicurezza dagli operatori tecnici, nonabbisogna di alcuna precauzione specifica o preventiva. I test analitici confermano e viene contemplato come prodotto naturale non tossico, non corrosivo.
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            CASA SALOTTI STUDI
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa5} alt="Logo" />
                        <div className="domestic__content--text">
                            &emsp;&emsp;Disperdere 2 grammi in ogni scarico interessato 2 volte 1° settimana. Ripetere dopo 15 giorni, infine 1 volta al mese, preferibilmente di sera. Il mattino seguente far scorrere l'acqua
                            Elimina alla fonte i cattivi odori, le incrostazioni generate da residui organici, gli intasamenti e le contaminazioni batteriche
                            Caratteristica: bonifica naturalmente l'ambiente, attivo a pH acidi o basici, resiste a temperature sino a 50°C in presenza o assenza di luce, in ambienti aerobici o anaerobici.
                            Trattandosi di un composto totalmente naturale, non provoca nessuna azione ossidativa, corrosiva odeteriorante sui materiali cui viene a contatto, come materiali ferrosi plastica pvc ecc. in quanto le florebatteriche sono indirizzate, al loro risveglio, a degradare solo ed unicamente la sostanza organica; pertanto,si può affermare che il prodotto può essere manipolato con estrema sicurezza dagli operatori tecnici, nonabbisogna di alcuna precauzione specifica o preventiva. I test analitici confermano e viene contemplato come prodotto naturale non tossico, non corrosivo.
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            CASA AMBIENTI ESTERNI - PORTICATI-AREE COTILIVE
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa6} alt="Logo" />
                        <div className="domestic__content--text">
                            &emsp;&emsp;Disperdere 2 grammi in ogni scarico interessato 2 volte 1° settimana. Ripetere dopo 15 giorni, infine 1 volta al mese, preferibilmente di sera. Il mattino seguente far scorrere l'acqua
                            Elimina alla fonte i cattivi odori, le incrostazioni generate da residui organici, gli intasamenti e le contaminazioni batteriche
                            Caratteristica: bonifica naturalmente l'ambiente, attivo a pH acidi o basici, resiste a temperature sino a 50°C in presenza o assenza di luce, in ambienti aerobici o anaerobici.
                            Trattandosi di un composto totalmente naturale, non provoca nessuna azione ossidativa, corrosiva odeteriorante sui materiali cui viene a contatto, come materiali ferrosi plastica pvc ecc. in quanto le florebatteriche sono indirizzate, al loro risveglio, a degradare solo ed unicamente la sostanza organica; pertanto,si può affermare che il prodotto può essere manipolato con estrema sicurezza dagli operatori tecnici, nonabbisogna di alcuna precauzione specifica o preventiva. I test analitici confermano e viene contemplato come prodotto naturale non tossico, non corrosivo.
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--center">
                            CASA AMBIENTE ASTERNO COMPOSTIERA FAI DA TE
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa7} alt="Logo" />
                        <div className="domestic__content--text">
                            &emsp;&emsp;Disperdere 2 grammi in ogni scarico interessato 2 volte 1° settimana. Ripetere dopo 15 giorni, infine 1 volta al mese, preferibilmente di sera. Il mattino seguente far scorrere l'acqua
                            Elimina alla fonte i cattivi odori, le incrostazioni generate da residui organici, gli intasamenti e le contaminazioni batteriche
                            Caratteristica: bonifica naturalmente l'ambiente, attivo a pH acidi o basici, resiste a temperature sino a 50°C in presenza o assenza di luce, in ambienti aerobici o anaerobici.
                            Trattandosi di un composto totalmente naturale, non provoca nessuna azione ossidativa, corrosiva odeteriorante sui materiali cui viene a contatto, come materiali ferrosi plastica pvc ecc. in quanto le florebatteriche sono indirizzate, al loro risveglio, a degradare solo ed unicamente la sostanza organica; pertanto,si può affermare che il prodotto può essere manipolato con estrema sicurezza dagli operatori tecnici, nonabbisogna di alcuna precauzione specifica o preventiva. I test analitici confermano e viene contemplato come prodotto naturale non tossico, non corrosivo.
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA FAMIGLIA
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa8} alt="Logo" />
                        <div className="domestic__content--text">
                            &emsp;&emsp;Disperdere 2 grammi in ogni scarico interessato 2 volte 1° settimana. Ripetere dopo 15 giorni, infine 1 volta al mese, preferibilmente di sera. Il mattino seguente far scorrere l'acqua
                            Elimina alla fonte i cattivi odori, le incrostazioni generate da residui organici, gli intasamenti e le contaminazioni batteriche
                            Caratteristica: bonifica naturalmente l'ambiente, attivo a pH acidi o basici, resiste a temperature sino a 50°C in presenza o assenza di luce, in ambienti aerobici o anaerobici.
                            Trattandosi di un composto totalmente naturale, non provoca nessuna azione ossidativa, corrosiva odeteriorante sui materiali cui viene a contatto, come materiali ferrosi plastica pvc ecc. in quanto le florebatteriche sono indirizzate, al loro risveglio, a degradare solo ed unicamente la sostanza organica; pertanto,si può affermare che il prodotto può essere manipolato con estrema sicurezza dagli operatori tecnici, nonabbisogna di alcuna precauzione specifica o preventiva. I test analitici confermano e viene contemplato come prodotto naturale non tossico, non corrosivo.
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            CASA ANIMALI DA COMPAGNIA
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa9} alt="Logo" />
                        <div className="domestic__content--text">
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

export default Domestic;