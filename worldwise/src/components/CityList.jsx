import { useOutletContext } from 'react-router-dom';
import Spinner from './Spinner';
import Message from './Message';
import CityItem from './CityItem';
import styles from './CityList.module.css';

export default function CityList() {
  const [cities, isLoading] = useOutletContext();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
