import React, { FC, InputHTMLAttributes } from "react";
import "./index.scss";

interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  btnLabel: string;
  isHideArrows?: boolean;
}

export const InputButton: FC<InputButtonProps> = ({
  btnLabel,
  isHideArrows,
  ...rest
}) => {
  return (
    <div className="wrapperInput">
      <input {...rest} className={isHideArrows ? `hide-arrows` : ""} />
      <button className="btnInput">{btnLabel}</button>
    </div>
  );
};
