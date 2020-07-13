import React from 'react';
import './App.css';

function Buttons(props){
    // const {homeTouchdown, homeFieldGoal, awayFieldGoal, awayTouchdown} = props
    const {updateScore} = props

    return (
      //   <section className="buttons">
      //   <div className="homeButtons">

      //     {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      //     <button onClick={homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
      //     <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
      //   </div>
      //   <div className="awayButtons">
      //     <button onClick={awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
      //     <button onClick={awayFieldGoal}className="awayButtons__fieldGoal">Away Field Goal</button>
      //   </div>
      // </section>
      <section className="buttons">
      <div className="homeButtons">

        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button onClick={()=>updateScore('Home',7)} className="homeButtons__touchdown">Home Touchdown</button>
        <button onClick={()=>updateScore('Home',3)} className="homeButtons__fieldGoal">Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button onClick={()=>updateScore('Away',7)} className="awayButtons__touchdown">Away Touchdown</button>
        <button onClick={()=>updateScore('Away',3)}className="awayButtons__fieldGoal">Away Field Goal</button>
      </div>
    </section>
    )
}

export default Buttons;