import { useEffect, useState } from 'react';
import axios from 'axios';

const token = import.meta.env.VITE_GITHUB;

const useGitHub = (username) => {
  // const [contributions, setContributions] = useState(null);
  const [monthlyContributions, setMonthlyContributions] = useState([]);
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

    // const fetchData = async () => {
    // 	try {
    // 		const res = await axios.post('https://api.github.com/graphql', {query}, {headers});
    // 		setContributions(res.data.data.user.contributionsCollection.contributionCalendar);
    // 		setLoading(false);
    // 	} catch (error) {
    // 		setError(error);
    // 		setLoading(false);
    // 	}
    // };

    const fetchData = async () => {
      try {
        const res = await axios.post('https://api.github.com/graphql', { query }, { headers });
        const contributionDays = res.data.data.user.contributionsCollection.contributionsCalendar.weeks.flatMap(week => week.contributionDays);
        const contributionsByMonth = {};
        contributionDays.forEach(day => {
          const date = new Date(day.date);
          const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
          if (!contributionsByMonth[monthYear]) {
            contributionsByMonth[monthYear] = 0;
          }
          contributionsByMonth[monthYear] += day.contributionCount;
        });

        setMonthlyContributions(contributionsByMonth);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return { monthlyContributions, loading, error };
};

export default useGitHub;