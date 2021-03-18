import { Button } from "../button";
import { StakeUnstakeProps } from "./types";
import "./index.scss";
import { InputButton } from "../inputButton";

export const StakeUnstake = ({
  title,
  isUnstake = false,
}: StakeUnstakeProps) => (
  <div className="stakeUnstake">
    <div className="stakeUnstakeTitle">{`I want to ${
      isUnstake ? "unstake" : "stake"
    }`}</div>
    <InputButton btnLabel="Max" type="number" min="0" isHideArrows={true} />
    <p className="stakeUnstakeBalance">
      {isUnstake
        ? `Staked ${title} Balance: 00`
        : `Available ${title} Balance: 00`}
    </p>
    <Button children={isUnstake ? "Unstake" : "Approve"} />
  </div>
);
