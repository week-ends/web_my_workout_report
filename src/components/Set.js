import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReps } from "../modules/routines";
import "./Set.scss";

function Set({ workoutItemName, set, index }) {
  console.log(workoutItemName, set, index);
  const setIndex = index + 1;
  //전역
  const weight = useSelector(state => state.counter.number);
  const reps = set.reps;
  console.log(reps);
  //로컬
  const [repsCount, setRepsCount] = useState(0);

  //모듈로 액션 보내기
  const dispatch = useDispatch();

  const onAddReps = (workoutItemName, setIndex, repsCount, weight) => {
    dispatch(addReps(workoutItemName, setIndex, repsCount, weight));
  };

  //로컬 함수
  const clickAddReps = () => {
    setRepsCount(repsCount + 1);

    console.log("reps", reps);
    console.log("repsCount", repsCount);
    console.log("weight", weight);
    onAddReps(workoutItemName, setIndex, repsCount, weight);
    console.log("reps", reps);
    console.log("repsCount", repsCount);
  };

  return (
    <>
      <div className="Button" onClick={clickAddReps}>
        {reps}
      </div>
    </>
  );
}

export default Set;
