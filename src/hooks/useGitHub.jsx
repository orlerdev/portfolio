import { useEffect, useState } from 'react';
import axios from 'axios';

const token = import.meta.env.VITE_GITHUB;

const useGitHub = (username) => {
  // const [contributions, setContributions] = useState(null);
  const [contributionsData, setContributionsData] = useState([]);
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
          }
        }
    `;

    const headers = {
      Authorization: `Bearer ${token}`
    };

    const fetchData = async () => {
      try {
        const res = await axios.post('https://api.github.com/graphql', { query, variables: { username } }, { headers });
        const weeks = res.data.data.user.contributionsCollection.contributionCalendar.weeks;

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        let last3MonthsMonth = currentMonth - 2;
        let last3MonthsYear = currentYear;

        if (last3MonthsMonth < 0) {
          last3MonthsMonth += 12;
          last3MonthsYear -= 1;
        }

        const last3Months = new Date(last3MonthsMonth, last3MonthsYear);
        const last6Months = new Date(currentYear, currentMonth - 5);
        const lastYear = new Date(currentYear - 1, currentMonth);

        const contributionsData = {
          currentMonth: 0,
          last3Months: 0,
          last6Months: 0,
          lastYear: 0
        };

        weeks.forEach(week => {
          week.contributionDays.forEach(day => {
            const date = new Date(day.date);
            if (date >= lastYear) {
              contributionsData.lastYear += day.contributionCount;
              if (date >= last6Months) {
                contributionsData.last6Months += day.contributionCount;
                if (date >= last3Months) {
                  contributionsData.last3Months += day.contributionCount;
                  if (date >= currentMonth) {
                    contributionsData.currentMonth += day.contributionCount;
                  }
                }
              }
            }
          });
        });

        setContributionsData(contributionsData);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, [username]);

  return { contributionsData, loading, error };
};

export default useGitHub;