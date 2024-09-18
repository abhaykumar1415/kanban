import { API_BASE_URL } from './constants'; // Import the base URL from constants
import { ASSIGNMENT } from './constants';

export const fetchTicketsAndUsers = async (signal) => {
	const endpoint = `${API_BASE_URL}/${ASSIGNMENT}`; // Dynamically build the URL

	const response = await fetch(endpoint, { signal });

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();
	return {
		tickets: data.tickets,
		users: data.users,
	};
};
