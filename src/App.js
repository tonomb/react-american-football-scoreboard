//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(7)
  const [awayScore, setAwayScore] = useState(0)

  function homeTouchdown(e){
    setHomeScore(homeScore + 7);
  }

  function homeFieldGoal(e){
    setHomeScore(homeScore + 3)
  }
  function awayTouchdown(e){
    setAwayScore(awayScore + 7);
  }

  function awayFieldGoal(e){
    setAwayScore(awayScore + 3)
  }

function updateScore(team, score){
  
    if(team === 'Home'){
      debugger
      setHomeScore(homeScore + score)
    } else if(team === 'Away'){
      setAwayScore(awayScore + score)
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
          <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      {/* <Buttons homeFieldGoal={homeFieldGoal} awayFieldGoal={awayFieldGoal} homeTouchdown={homeTouchdown} awayTouchdown={awayTouchdown} /> */}
      <Buttons updateScore={updateScore} />
    </div>
  );
}

export default App;
