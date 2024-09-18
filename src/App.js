import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import { fetchTicketsAndUsers } from './utils/apiUtils'; // Import the utility function
import './App.css';

const App = () => {
	const [tickets, setTickets] = useState([]);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [grouping, setGrouping] = useState('Status');
	const [sorting, setSorting] = useState('Priority');

	useEffect(() => {
		const controller = new AbortController();

		const getData = async () => {
			try {
				const { tickets, users } = await fetchTicketsAndUsers(controller.signal);
				setTickets(tickets);
				setUsers(users);
				setLoading(false);
			} catch (error) {
				if (error.name !== 'AbortError') {
					setError(error.message);
					setLoading(false);
				}
			}
		};

		getData(); // Fetch data on mount

		return () => controller.abort(); // Cleanup
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className='App'>
			<Header grouping={grouping} sorting={sorting} onGroupingChange={setGrouping} onSortingChange={setSorting} />
			<KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
		</div>
	);
};

export default App;
