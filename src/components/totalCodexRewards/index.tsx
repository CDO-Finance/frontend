import { Button } from '../button';
import { TotalCodexRewardsProps } from './types';
import './index.scss';


export const TotalCodexRewards = ({ amount }: TotalCodexRewardsProps) => (
	<div className="totalCodexRewards">
		<div className="totalCodexRewardsTitle">total codex rewards</div>
		<div className="totalCodexRewardsAmount">{ amount }</div>
		<Button children="Claim" />
	</div>
);
