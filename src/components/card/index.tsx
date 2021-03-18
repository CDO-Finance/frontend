import { CardProps } from './types';
import './index.scss';


export const Card = ({ title, amount, isLocked = false }: CardProps) => (
	<div className="card">
		<div className="cardInfo">
			<img src={ `/images/icons/${isLocked ? 'lock' : 'wallet'}.svg` } alt="codex-icon" />
			<div className="cardInfoWrap">
				<div className="cardTitle">{ title }</div>
				<div className="cardAmount"><span>{ amount }</span>codex</div>
			</div>
		</div>
		{
			isLocked &&
			<div className="cardBottom">Your locked balance will be available after 3 months. <a href="#">Click here</a> for further details.</div>
		}
	</div>
);
