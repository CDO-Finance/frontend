import { useEffect } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { PopupProps } from './types';
import './index.scss';


export const Popup = ({ action, imgSrc, pool, onSubmit, onClose }: PopupProps) => {
	useEffect(() => {
		document.querySelector('body')!.style.overflow = 'hidden';
		return () => { document.querySelector('body')!.style.overflow = 'initial'; };
	}, []);

	const onPopupClick = (event: any) => {
		event.stopPropagation();

		const { target } = event;

		if (target.classList.contains('popup')) onClose();
	};

	return <div className="popup" onClick={ onPopupClick }>
		<div className="popupWrap">
			<img className="popupCloseBtn" src="/images/icons/close.svg" alt="close-icon" onClick={ onClose } />
			<img className="popupImg" src={ imgSrc } alt="pool-icon" />
			<div className="popupTitle">{ `${action} ${pool}` }</div>
			<div className="popupInputWrap">
				<div className="input-wrapper">
					<button>Max</button>
				<Input />
				</div>
				<div className="popupText mt-4">Available Balance: 0.00</div>
				<div className="popupText">Exchange Rate: 1.05 BNB to 130 flexBNB</div>
			</div>
			<div className="popupConclusion">You will receive <span>{`0.00`}</span> flexBNB</div>
			<Button isMain onClick={ onSubmit }>Confirm</Button>
		</div>
	</div>
}
