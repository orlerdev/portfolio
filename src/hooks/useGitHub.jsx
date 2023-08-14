import {useEffect, useState} from 'react';
import axios from 'axios';

const token = import.meta.env.VITE_GITHUB;

const useGitHub = (username) => {
	const [contributions, setContributions] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const query = `
		{
			user(login: "${username}") {
				contributionsCollection {
					contributionCalendar {
						totalContributions
							weeks {
								contributionDays {
									contributionCount
									date
								}
							}
						}
					}
				}
		}
		`;

		const headers = {
			Authorization: `Bearer ${token}`
		};

		const fetchData = async () => {
			try {
				const res = await axios.post('https://api.github.com/graphql', {query}, {headers});
				setContributions(res.data.data.user.contributionsCollection.contributionCalendar);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();

	}, [username]);

	return {contributions, loading, error};
};

export default useGitHub;