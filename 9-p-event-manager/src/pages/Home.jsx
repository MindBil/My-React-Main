import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { mockEvent, mockEvent2 } from "../mocks/event";
import "./Home.scss";
import EventCard from "../components/EventCard";

const Home = () => {
  const [events, setEvents] = useState([mockEvent, mockEvent2]);

  return (
    <div>
      <NavigationBar />
      <div className="home-container">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;