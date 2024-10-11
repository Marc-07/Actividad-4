import PropTypes from "prop-types";

const SeeTask = ({ listTask}) => {

    return (
        <div className="task-list">
            <h1>Lista de Tareas</h1>
            <div className="task-grid"> 
                {listTask.map((item, index) => (
                    <div key={index} className="task-item">
                        <h2>{item.title || "Sin título"}</h2>
                        <p>{item.description || "Sin descripción"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
};

export default SeeTask;
