import { useEffect, useState } from 'react';
import axios from 'axios';

const token = import.meta.env.VITE_GITHUB;

const useContributions = (username, year, startMonth) => {
  const [contributionsData, setContributionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let query = `
          query GetContributions($username: String!, $year: String!, $startMonth: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionsByDate(from: "$year-01-01T00:00:00Z", to: "$year-12-31T00:00:00Z") {
                  totalCount
                }
              }
            }
          }
        `;
        if (startMonth) {
        query += `
          contributionsByDateLast3Months: contributionsByDate(from: "$startMonth-01T00:00:00Z", to: "$year-12-31T23:59:59Z") {
            totalCount
          }
        `;
      }

        const headers = {
          Authorization: `Bearer ${token}`
        };

        const res = await axios.post('https://api.github.com/graphql', { query, variables: { username, year, startMonth } }, { headers });
        const data = res.data.data;

        const contributionsYear = data.user.contributionsCollection.contributionsByDate[0].totalCount;
        const contributions3Months = data.user.contributionsCollection.contributionsByDate[1].totalCount || 0;

        setContributionsData({contributionsYear, contributions3Months});
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, [username, year, startMonth]);

  return { contributionsData, loading, error}
};
export default useContributions;