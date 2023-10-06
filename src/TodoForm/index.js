import "./TodoForm.css";

function TodoForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Cortar cebolla para el almuerzo"></textarea>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
