import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const username = loggedInUser?.name || 'User';

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className="bg-black px-4 sm:px-8 py-5 flex justify-between items-end w-full">
      <div className="text-left">
        <h1 className="text-base sm:text-lg text-white">Hello</h1>
        <span className="text-lg sm:text-2xl font-bold text-white">{username} 👋</span>
      </div>
      <button
        onClick={logout}
        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm sm:text-base"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
