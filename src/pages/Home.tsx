import { useState } from 'react';
import reactLogo from '../assets/react.svg';

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Barend Nieuwoudt</h1>
      <div className='card'>
        <p>
          Website In Progress.
        </p>
      </div>
    </div>
  );
};
