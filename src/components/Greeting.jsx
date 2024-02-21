import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
      <h2 style={{ fontSize: '24px' }}>{greeting}</h2>
    </div>
  );
};

export default Greeting;