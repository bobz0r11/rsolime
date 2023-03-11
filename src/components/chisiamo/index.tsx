import { useTranslation } from 'react-i18next';

import './chisiamo.scss';

const Chisiamo = () => {

    const { t } = useTranslation();

    return (
        <div className="chisiamo">
            <div className="chisiamo__content">
                <div className="chisiamo__content--header reveal fade-left">{t('chisiamo')}</div>
                <div className="reveal fade-bottom">
                    <div className="chisiamo__content--title">
                        {/* {t('chisiamo_title1')} */}
                    </div>
                    <div className="chisiamo__content--text">
                        &emsp;&emsp;{t('chisiamo_text1')}
                        <span id="scrollToChisiamo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chisiamo;