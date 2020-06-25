import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-6 p-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <h1 className="text-green-500 text-lg font-bold p-3">About</h1>
        <div className="bg-gray-400 p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
    </>
  );
};
