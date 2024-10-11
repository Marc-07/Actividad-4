import PropTypes from "prop-types";

const AddTask = ({ listTask, setlistTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target[0].value.trim(); 
        const description = e.target[1].value.trim();

        //Verifica duplicados
        const isDuplicate = listTask.some(task => task.title === title);

        if (isDuplicate) {
            alert("Esta tarea ya existe. Por favor, agrega una tarea diferente."); 
            return; 
        }

        setlistTask([...listTask, { title, description }]);

        e.target[0].value = ""; 
        e.target[1].value = ""; 
    };

    return (
        <section>
            <h1>Agregar una tarea</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Título de la tarea" required />
                <textarea placeholder="Descripción de la tarea" required></textarea>

                <button type="submit">Agregar</button>
            </form>
        </section>  
    );
};

AddTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
};

export default AddTask;
