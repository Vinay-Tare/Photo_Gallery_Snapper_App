import { useState, createContext } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Main from './components/MainComponent';
import axios from "axios";
export const AppContext = createContext();

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const doSearch = (query) => {
    setLoading(true);
    axios
      .get(
        "https://api.flickr.com/services/rest/",
        {
          params: { 
            method: "flickr.photos.search",
            api_key: process.env.REACT_APP_FLICKER_API_KEY,
            tags: query,
            per_page: 24,
            format: "json",
            nojsoncallback: 1
          }
        }
      )
      .then((api_response) => {
        setImages(api_response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Error Occured While Fetching Requested Data From API Endpoint",
          error
        );
      });
  };
  
  return (
    <AppContext.Provider value={{ images, loading, doSearch }}>
      <HashRouter>
        <Main />
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
