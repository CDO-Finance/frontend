import { useState } from 'react';
import classNames from 'classnames';
import { CodexStakingTableRowProps } from './types';
import { StakeUnstake } from '../../stakeUnstakeBlock';
import { TotalCodexRewards } from '../../totalCodexRewards';
import './index.scss';


export const CodexStakingTableRow = ({ item: { cdEarned, text, apy, boldText, imgSrc }, isFirst }: CodexStakingTableRowProps) => {
	const [ expanded, setExpanded ] = useState(false);
	const onExpand = () => setExpanded(!expanded);

	return <>
		<div className={ classNames('codexStakingTableRow', { '--expanded': expanded }) }>
			<div className="codexStakingTableRowItem">
				{
					imgSrc.map((img, i) => <img key={ i } src={ img } alt="icon-pool" />)
				}
			</div>
			<div className="codexStakingTableRowItem">
				<div className="codexStakingTableTextBold">{ boldText }</div>
				<div className="codexStakingTableText">
					{ text }
					{ 
						isFirst &&
						<> (Read a <a href="#">step-by-step guide</a> on how to get the LP Token.)</>
					}
				</div>
			</div>
			<div className="codexStakingTableRowItem">
				<div className="codexStakingTableApy">{ `apy ${apy}%` }</div>
			</div>
			<div className="codexStakingTableRowItem">
				<div className="codexStakingTableCdoEarned">{ `CDO earned: ${cdEarned}` }</div>
			</div>
			<div className="codexStakingTableRowItem">
				<div className="codexStakingTableExpand">
					<img
						className="codexStakingTableExpandImg"
						src="/images/icons/expand.svg"
						alt="expand"
						onClick={ onExpand }
					/>
				</div>
			</div>
		</div>
		{
			expanded &&
			<div className={ classNames('codexStakingTableRowExpanded', { '--expanded': expanded }) }>
				<StakeUnstake title={ boldText } />
				<StakeUnstake title={ boldText } isUnstake />
				<TotalCodexRewards amount="2,100" />
			</div>
		}
	</>
};
