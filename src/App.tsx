import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LiquidityPools } from './pages/liquidityPools';
import { TranchePools } from './pages/tranchePools';
import { CodexStaking } from './pages/codexStaking';


export function App() {
	return <BrowserRouter>
		<Switch>
			<Route children={ <CodexStaking /> } path="/codex-staking" />
			<Route children={ <LiquidityPools /> } path="/liquidity-pools" />
			<Route children={ <TranchePools /> } path="/tranche-pools" />
			<Route children={ <HomePage /> } path="/" />
		</Switch>
	</BrowserRouter>
}