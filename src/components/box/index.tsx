import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import './box.scss';

interface BoxProps {
    title?: String,
    message?: String,
    readMorePath?: any,
    style?: any,
    classNames?: any,
    iconName?: any,
};

const Box = ({ title, message, iconName, classNames, readMorePath, style }: BoxProps) => {
    const { t } = useTranslation();
    const Icon = iconName;

    return (
        <div className={`box ${classNames || ''}`} style={style}>
            <div className="box__content" >
                {message}
                <Link className="box__content--read-more" to={readMorePath}>
                    {t(`${'read_more_here'}`)}
                </Link>
            </div>
            <div className="box__icon">
                <Icon />
                <div className="box__icon__title">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default Box;