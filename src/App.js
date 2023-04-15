import Row from "./Row";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import requests from "./request";
import Banner from "./Banner";

function App() {
  return (
    <>
      <div className="App"></div>
      <Banner />
      {/* <Slider /> */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default App;
