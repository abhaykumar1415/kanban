import React, { useMemo } from 'react';
import TicketCard from './TicketCard';
import { groupTickets, sortTickets } from '../utils/utils';
import './KanbanBoard.css';
import AddIcon from '../assets/add.svg';
import DotMenu from '../assets/dot-menu.svg';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
	const groupedTickets = useMemo(() => groupTickets(tickets, users, grouping), [tickets, users, grouping]);

	return (
		<div className='kanban-board'>
			{Object.entries(groupedTickets).map(([group, tickets]) => (
				<div key={group} className='kanban-column'>
					<div className='title-wrap'>
						<div className='content-left'>
							<span className='icon'></span>
							<h2 className='title'>{group}</h2>
							<span className='count'>{tickets.length}</span>
						</div>
						<div className='content-right'>
							<span className='icon'>
								<img src={AddIcon} alt='add icon' />
							</span>
							<span className='icon'>
								<img src={DotMenu} alt='dots icon' />
							</span>
						</div>
					</div>
					{sortTickets(tickets, sorting).map((ticket) => (
						<TicketCard key={ticket.id} ticket={ticket} />
					))}
				</div>
			))}
		</div>
	);
};

export default KanbanBoard;
