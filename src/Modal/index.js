import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) {
    console.error(
      "Modal root element not found in the DOM. Please ensure an element with id 'modal' exists."
    );
    return null;
  }

  return createPortal(
    <div className="ModalBackground">{children}</div>,
    modalRoot
  );
}

export { Modal };
