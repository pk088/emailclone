import { useEffect, useState } from "react";
import "./App.css";
import Msg from "./components/Msg";
import axios from "axios";

function App() {


  const url = "https://flipkart-email-mock.vercel.app/";

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    axios.get(url)
      .then((response) => setData(response.data.list))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // console.log(data[0].from);
  return (
    <div className="App">
      <nav>
        <p>Filter By:</p>
        <button>Unread</button>
        <button>Read</button>
        <button>Favorites</button>
      </nav>
      {data.map((d, index) => (
        <div key={index}>
          <Msg data={d} />
          {/* <h1>{d.id}</h1> */}
        </div>
      ))}
    </div>
  );
}

export default App;
