import { Header } from '../../layouts/header';
import { Navigation } from '../../layouts/navigation';
import { PageContainer } from '../../components/pageContainer';
import { InfoContainer } from '../../components/infoContainer';
import { Info } from '../../components/info';
import { Card } from '../../components/card';
import { EarnedCard } from '../../components/earnedCard';
import { Heading } from '../../components/heading';
import { CodexStakingTable } from '../../components/codexStakingTable';
import './index.scss';


export function CodexStaking() {
  return (
    <div className="codexStaking">
			<Header />
			<div className="codexStakingContainer">
				<Navigation />
				<PageContainer>
					<InfoContainer>
						<Info title="Your rewards summary">
							<div className="codexStakingCards">
								<EarnedCard amount="2,100" />
								<Card amount="9,500" title="wallet balance" />
								<Card amount="170" title="locked amount" isLocked />
							</div>
						</Info>
					</InfoContainer>
					<Heading title="4 Available staking Opportunities" />
					<CodexStakingTable />
				</PageContainer>
			</div>
    </div>
  );
}
