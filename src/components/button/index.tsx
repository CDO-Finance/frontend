import classNames from "classnames";
import { ButtonTypes } from "./types";
import "./index.scss";

export const Button = ({
  children,
  onClick,
  isMain = false,
  onMouseEnter,
  onMouseLeave,
}: ButtonTypes) => (
  <button
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={classNames("button", { "--main": isMain })}
  >
    {children}
  </button>
);
