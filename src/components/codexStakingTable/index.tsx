import { IData } from './types';
import { CodexStakingTableRow } from './codexStakingTableRow';
import './index.scss';


const DUMMY_DATA: IData[] = [
  {
    imgSrc: [ '/images/icons/bnb.svg', '/images/icons/hi.svg' ],
    boldText: 'CDO-wBNB LP Token',
    text: 'Stake CDO-wBNB LP Token to earn CDO rewards',
		apy: 125,
    cdEarned: 0,
  },
  {
    imgSrc: [ '/images/icons/bnb.svg' ],
    boldText: 'flexBNB',
    text: 'Stake flexBNB to earn CDO.Finance rewards',
		apy: 125,
    cdEarned: 0,
  },
  {
    imgSrc: [ '/images/icons/busd.png' ],
    boldText: 'flexBUSD',
    text: 'Stake flexBUSD to earn CDO.Finance rewards',
		apy: 125,
    cdEarned: 0,
  },
  {
    imgSrc: [ '/images/icons/btcb.jpg' ],
    boldText: 'flexBTCB',
    text: 'Stake flexBTCB to earn CDO.Finance rewards',
		apy: 125,
    cdEarned: 0,
  }
];

export const CodexStakingTable = () => (
	<div className="codexStakingTableWrap">
		<div className="codexStakingTable">
			{
				DUMMY_DATA.map((el, i) => (
					<CodexStakingTableRow key={ i } item={ el } isFirst={ i === 0 } />
				))
			}
		</div>
	</div>
);
