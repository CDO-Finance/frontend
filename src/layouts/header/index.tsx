import { Button } from '../../components/button';
import { HeaderTypes } from './types';
import './index.scss';


export const Header = ({ withBtn = true }: HeaderTypes) => (
	<header className="header">
		<img src="/images/logo.svg" alt="CDO.Finance logo" />
		{ withBtn && <Button children="Connect Wallet" isMain /> }
	</header>
);