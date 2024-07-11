import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const BASE_URL = 'http://localhost:8000';

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <div>
      <Outlet context={[cities, isLoading]} />
    </div>
  );
}
