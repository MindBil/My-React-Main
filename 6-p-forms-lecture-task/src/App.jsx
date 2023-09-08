import { useState } from 'react';

const App = () => {
  const [friendFirstName, setFriendFirstName] = useState('');
  const [friendLastName, setFriendLastName] = useState('');
  const [yearsOfFriendship, setYearsOfFriendship] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFriendCheck = () => {
    if (parseInt(yearsOfFriendship) > 10) {
      alert('Friends for life');
    } else {
      alert('We are good friends');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginEmail('');
    setLoginPassword('');
  };

  return (
    <div>
      <div>
        <h2>Best Friend Checker</h2>
        <input
          type="text"
          placeholder="Vardasss"
          value={friendFirstName}
          onChange={(e) => setFriendFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pavarde"
          value={friendLastName}
          onChange={(e) => setFriendLastName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Years of Friendship"
          value={yearsOfFriendship}
          onChange={(e) => setYearsOfFriendship(e.target.value)}
        />
        <button onClick={handleFriendCheck}>Check</button>
      </div>

      <div>
        <h2>Login Form</h2>
        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {isLoggedIn && <p>Successfully logged in</p>}
      </div>
    </div>
  );
};

export default App;
