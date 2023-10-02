import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  if (total === 0) {
    return <h2 className="TodoCounter">No hay TODOs 😴</h2>;
  }

  if (completed === total) {
    return <h2 className="TodoCounter">Completaste todos tus TODOs! 🥳</h2>;
  }

  return (
    <h2 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h2>
  );
}

export { TodoCounter };
