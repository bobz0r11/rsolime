import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

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
                            {t('domestic')}
                        </div>
                    </div>
                    <div className="reveal active fade-bottom">
                        <div className="domestic__content--title">
                            {t('domestic_toilet')}
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa1} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"><FiCheckCircle /></span>WC

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"><FiCheckCircle /></span>{t('domestic_washbasins')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"><FiCheckCircle /></span>{t('domestic_sinks')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"><FiCheckCircle /></span>{t('domestic_shower')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"><FiCheckCircle /></span>{t('domestic_trays')}

                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')}</strong>
                                {t('domestic_usecase_toilet')}
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            {t('domestic_kitchen')}
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa2} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_workplans')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_flooring')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_dishwasher')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_insidehoods')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_aircond')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_trashcan')}

                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')}</strong>
                                {t('domestic_usecase_kitchen')}
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            {t('domestic_bedroom')}
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa4} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_floors')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_carpets')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_curtains')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_matteresses')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_cushions')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_shoeracks')}

                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')}</strong>
                                {t('domestic_usecase_bedroom')}
                            </div>

                        </div>
                    </div>

                    {/* <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            CASA - SALOTTI STUDI
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa5} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Pavimenti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Tappeti
                                <br />&emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> Divani, poltrone, tendaggi ecc.
                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')} </strong>
                                Disperdere ½ cucchiaino da caffè in 1/2 litro di acqua, mescolare, filtrare su fazzolettino di carta, in flacone munito di erogatore spray. Nebulizzare sulle parti interessate.
                            </div>
                        </div>
                    </div> */}

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            {t('domestic_children')}
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa8} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_shoes')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_diapers')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_sanitarynapkin')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_pantyliners')}

                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')}</strong>
                                {t('domestic_usecase_children')}
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            {t('domestic_pets')}
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa9} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_dogs')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_cats')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_rodents')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_rabbits')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_birds')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_fish')}

                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')}</strong>
                                {t('domestic_usecase_pets')}
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--right">
                            {t('domestic_external_env1')}
                        </div>
                        <img className="domestic__content--image domestic__content--image--right" src={casa6} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_gratings')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_fosse')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_wells')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_cesspits')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_grease')}

                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')}</strong>
                                {t('domestic_usecase_external_env1')}
                            </div>
                        </div>
                    </div>

                    <div className="reveal fade-bottom">
                        <div className="domestic__content--title domestic__content--title--left">
                            {t('domestic_external_env2')}
                        </div>
                        <img className="domestic__content--image domestic__content--image--left" src={casa7} alt="Logo" />
                        <div className="domestic__content--text">

                            <div>
                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_mowing')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_kitchenscraps')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_leafscraps')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_flowerscraps')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_pruningscraps')}

                                <br />
                                &emsp;&emsp;<span className="domestic__content--text--icon"> <FiCheckCircle /> </span> {t('domestic_substances')}

                                <br />
                            </div>

                            <div className="domestic__content--text--info">
                                <strong>{t('usecase')}</strong>
                                {t('domestic_usecase_external_env2')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Domestic;