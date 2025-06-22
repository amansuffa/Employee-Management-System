import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default Privateroute;
