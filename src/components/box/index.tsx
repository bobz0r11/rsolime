import { Link } from "react-router-dom";

import './box.scss';

interface BoxProps {
    title?: String,
    message?: String,
    readMorePath?: any,
    classNames?: any,
    iconName?: any,
};

const Box = ({ title, message, iconName, classNames, readMorePath }: BoxProps) => {
    const Icon = iconName;

    return (
        <div className={`box ${classNames || ''}`}>
            <div className="box__header">
                <div className="box__icon">
                    <Icon />
                </div>
                <div className="box__title">
                    {title}
                </div>
            </div>
            <div className="box__content">
                {message}
                <Link className="box__content--read-more" to={readMorePath}>Read more...</Link>
            </div>
        </div>
    )
}

export default Box;