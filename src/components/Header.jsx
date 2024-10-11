import PropTypes from "prop-types";
import ButtonAtom from "../components/ButtonAtom";

const Header = ({ setShowComponent }) => {
    return (
        <header>
            <nav>
                <ul>
                    <ButtonAtom text="Agregar Tarea" value={true} setShowComponent={setShowComponent} />
                    <ButtonAtom text="Ver Tareas" value={false} setShowComponent={setShowComponent} />
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    setShowComponent: PropTypes.func.isRequired,
};

export default Header;
