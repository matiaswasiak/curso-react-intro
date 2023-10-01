import { ReactComponent as CheckSvg } from "./check.svg";
import { ReactComponent as DeleteSvg } from "./delete.svg";

const iconTypes = {
  check: <CheckSvg />,
  delete: <DeleteSvg />,
};

function TodoIcon({ type }) {
  return (
    <span className={`Icon Icon-svg Icon-${type}`}>{iconTypes[type]}</span>
  );
}

export { TodoIcon };
