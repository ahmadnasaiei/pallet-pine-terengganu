import { useNavigate } from "react-router-dom";
import s from "./ButtonComponent.module.css";

type ButtonComponentProps = {
  label: string;
  route?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const ButtonComponent = ({
  label,
  route,
  onClick,
  icon,
}: ButtonComponentProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (route) {
      navigate(route);
    }
  };

  return (
    <button className={s.button} onClick={handleClick}>
      {label}
      {icon && <span className={s.iconContainer}>{icon}</span>}
    </button>
  );
};

export default ButtonComponent;
