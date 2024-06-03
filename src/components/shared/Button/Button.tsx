import { ButtonTypes, ButtonVarieties } from "./Button-types";
import "./Button.scss";

interface Props {
  onClick: () => void;
  text: string;
  type?: ButtonTypes;
  variety?: ButtonVarieties;
}
export const Button = ({
  text,
  onClick,
  type = ButtonTypes.Button,
  variety = ButtonVarieties.Primary,
}: Props): React.ReactElement => {
  return (
    <button className={`btn btn-${variety}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};
