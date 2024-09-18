export const groupTickets = (tickets, users, grouping) => {
	return tickets.reduce((acc, ticket) => {
		let group;

		switch (grouping) {
			case 'Status':
				group = ticket.status || 'No Status';
				break;

			case 'User':
				const user = users.find((u) => u.id === ticket.userId);
				group = user ? user.name : 'Unassigned';
				break;

			case 'Priority':
				const priorityLevels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
				group = priorityLevels[ticket.priority] || 'No priority';
				break;

			default:
				group = 'Others';
		}

		acc[group] = acc[group] ? [...acc[group], ticket] : [ticket];
		return acc;
	}, {});
};

export const sortTickets = (tickets, sorting) => {
	if (sorting === 'Priority') {
		return [...tickets].sort((a, b) => b.priority - a.priority);
	}
	if (sorting === 'Title') {
		return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
	}
	return tickets;
};
