import "./App.css";
import responseMovies from "./mocks/results.json";
import responseError from "./mocks/no-results.json";
import { ShowMovies, NotMovies } from "./components/Movies";

function App() {
  const movies = responseMovies?.Search;
  const hasMovies = responseMovies?.Response === "True";

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = new window.FormData(event.target);
    const query = fields.get("query");
    console.log(query);
  };

  return (
    <div>
      <header className="page">
        <h1>Find your movie</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="movieInput"
            name="query"
            placeholder="Star Wars, A Monster Calls..."
          ></input>
          <button>Search</button>
        </form>
      </header>
      <main className="body">
        {hasMovies ? <ShowMovies movies={movies} /> : <NotMovies />}
      </main>
    </div>
  );
}

export default App;
