import { useState, useEffect } from "react";

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5174/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>PS5 Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
            <p>Developer: {game.developer}</p>
            <p>Release Date: {game.releaseDate}</p>
            <p>Genre: {game.genre}</p>
            <p>Rating: {game.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
