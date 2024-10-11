import PropTypes from "prop-types";

const ButtonAtom = ({ text, value, setShowComponent }) => {
    const handleClick = () => {
        setShowComponent(value);
    };

    return (
        <li className={`button-atom ${value ? "active" : ""}`}>
            <button onClick={handleClick}>{text}</button>
        </li>
    );
};

ButtonAtom.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    setShowComponent: PropTypes.func.isRequired,
};

export default ButtonAtom;
