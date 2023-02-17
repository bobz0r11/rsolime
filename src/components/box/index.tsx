import './box.scss';

interface BoxProps {
    title?: String,
    message?: String,
    classNames?: any,
    iconName?: any,
};

const Box = ({ title, message, iconName, classNames }: BoxProps) => {
    const Icon = iconName;

    return (
        <div className={`box ${classNames}`}>
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
                <div className="box__content--read-more">Read more...</div>
            </div>
        </div>
    )
}

export default Box;