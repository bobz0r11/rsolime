import { useTranslation } from 'react-i18next';

import './philosophy.scss';

const Philosophy = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className="philosophy">
                <div className="philosophy__content">
                    <div className="philosophy__content--header reveal fade-left">{t('philosophy')}</div>
                    <div className="reveal fade-bottom">
                        <div className="philosophy__content--title">
                            {t('philosophy_title1')}
                        </div>
                        <div className="philosophy__content--text">
                            &emsp;&emsp;{t('philosophy_text1')}
                        </div>
                    </div>
                    <div className="reveal fade-bottom">
                        <div className="philosophy__content--title">
                            {t('philosophy_title2')}
                        </div>
                        <div className="philosophy__content--text">
                            <span id="scrollToPhilosophy" />
                            &emsp;&emsp;{t('philosophy_text2')}
                        </div>
                    </div>
                    <div className="reveal fade-bottom">
                        <div className="philosophy__content--title">
                            {t('philosophy_title3')}
                        </div>
                        <div className="philosophy__content--text">
                            &emsp;&emsp;{t('philosophy_text3')}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Philosophy;