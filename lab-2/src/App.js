import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// Check URL
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
      const restTour = tours.filter((el) => el.id !== id);
      setTours(restTour);
    };
  const fetchTours = async () => {
    setloading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours)
    setloading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

if (tours.length === 0) {
      return (
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={fetchTours}>
              Refresh
            </button>
          </div>
        </main>
      );
    }

  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>
  );
}

export default App;