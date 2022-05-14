import React from 'react';

function Home() {
  return (
    <div className="container text-center home-section">
      <h1>Welcome To Food's Kitchen</h1>
      <a
        className="btn btn-primary btn-large btn-md btn-sm"
        id="menu-button"
        href="/menu"
        role="button"
      >
        Go To Menu
      </a>
    </div>
  );
}

export default Home;
