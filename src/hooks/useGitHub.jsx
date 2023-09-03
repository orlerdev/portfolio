import { useEffect, useState } from 'react';
import axios from 'axios';

const token = import.meta.env.VITE_GITHUB;

const useGitHub = (username) => {
  const [contributionsData, setContributionsData] = useState(null);
  const [reposCount, setReposCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `
      query GetUserContributions($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
            repositories {
              totalCount
            }
          }
        }
    `;

    const headers = {
      Authorization: `Bearer ${token}`
    };

    const fetchData = async () => {
      try {
        const res = await axios.post('https://api.github.com/graphql', { query, variables: { username } }, { headers });
        const user = res.data.data.user;
        console.log('API Response:', res.data);
        console.log('GitHub User:', user);

        const weeks = res.data.data.user.contributionsCollection.contributionCalendar.weeks;

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = new Date(currentYear, currentDate.getMonth(), 1, 0, 0, 0);
        const last3Months = new Date(currentYear, currentDate.getMonth() - 3, 1, 0, 0, 0);
        const last6Months = new Date(currentYear, currentDate.getMonth() - 6, 1, 0, 0, 0);
        const lastYear = new Date(currentYear - 1, currentDate.getMonth(), 1, 0, 0, 0);

        const contributionsData = {
          currentMonth: 0,
          last3Months: 0,
          last6Months: 0,
          lastYear: 0
        };

        weeks.forEach(week => {
          week.contributionDays.forEach(day => {
            const date = new Date(day.date);
            if (date.getTime() >= lastYear.getTime()) {
              contributionsData.lastYear += day.contributionCount;
            }
            if (date.getTime() >= last6Months.getTime()) {
              contributionsData.last6Months += day.contributionCount;
            }
            if (date.getTime() >= last3Months.getTime()) {
              contributionsData.last3Months += day.contributionCount;
            }
            if (date.getTime() >= currentMonth.getTime()) {
              contributionsData.currentMonth += day.contributionCount;
            }
          })
        })

        setReposCount({ total: user.repositories.totalCount });
        setContributionsData(contributionsData);
        console.log('Repo count:', reposCount);
        setLoading(false);
      } catch (error) {
        console.error('API Error:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return { contributionsData, reposCount, loading, error };
};
export default useGitHub;