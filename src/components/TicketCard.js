import React from 'react';
import './TicketCard.css';
import DotMenu from '../assets/dot-menu.svg';

const TicketCard = ({ ticket }) => {
	return (
		<div className='ticket-card'>
			<div className='ticket-header'>
				<span className='ticket-id'>{ticket.id}</span>
				<img className='ticket-avatar' src={ticket.avatarUrl || 'https://via.placeholder.com/24'} alt='User Avatar' />
			</div>
			<h3 className='ticket-title'>{ticket.title}</h3>
			<div className='ticket-type-main'>
				<div className='ticket-type-wrap'>
					<img src={DotMenu} alt='dots icon' />
				</div>

				<div className='ticket-type-wrap margin-left10'>
					<p className='ticket-type'>Feature Request</p>
				</div>
			</div>
		</div>
	);
};

export default TicketCard;
