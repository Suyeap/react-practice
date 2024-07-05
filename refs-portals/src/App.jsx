import Player from './components/Player.jsx';
import TImerChallenge from "./components/TImerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TImerChallenge title="Easy" targetTime={1} />
          <TImerChallenge title="Not easy " targetTime={5} />
          <TImerChallenge title="Getting tough" targetTime={10} />
          <TImerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
