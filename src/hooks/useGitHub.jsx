import {useEffect, useState} from 'react';
import axios from 'axios';

const useGitHub = (username) => {
  const [contributionsData, setContributionsData] = useState(null);
  const [reposCount, setReposCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://us-central1-portfolio-7e0ed.cloudfunctions.net/api/fetch-github/${username}`);
        const data = res.data;
        setContributionsData(data.contributionsData);
        setReposCount(data.reposCount);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return {contributionsData, reposCount, loading, error};
};
export default useGitHub;