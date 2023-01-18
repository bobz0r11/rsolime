import './box.scss';

interface BoxProps {
    title?: String,
    message?: String,
    iconName?: any,
};

const Box = ({ title, message, iconName }: BoxProps) => {
    const Icon = iconName;

    return (
        <div className="box">
            <div className="box__header">
                <div className="box__icon">
                    <Icon />
                </div>
                <div className="box__title">
                    {title}
                </div>
            </div>
            <div className="box__content">{message}</div>
        </div>
    )
}

export default Box;