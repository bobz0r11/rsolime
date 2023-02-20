import { useTranslation } from 'react-i18next';

import './history.scss';

const History = () => {

    const { t } = useTranslation();

    return (
        <div className="history">
            <div className="history__content">
                <div className="history__content--header reveal fade-left">{t('history')}</div>
                <div className="reveal fade-bottom">
                    <div className="history__content--title">
                        {t('history_title1')}
                    </div>
                    <div className="history__content--text">
                        &emsp;&emsp;{t('history_text1')}
                    </div>
                </div>
                <div className="reveal fade-bottom">
                    <div className="history__content--title">
                        {t('history_title2')}
                    </div>
                    <div className="history__content--text">
                        &emsp;&emsp;{t('history_text2')}
                    </div>
                    <span id="scrollToHistory" />
                </div>
                <div className="reveal fade-bottom">
                    <div className="history__content--title">
                        History content title
                    </div>
                    <div className="history__content--text">
                        &emsp;&emsp;Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;