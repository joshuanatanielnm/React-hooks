import React, {useState} from 'react';

export default function Counter() {
  const [state, setState] = useState({
    like:0,
    dislike:0
  });
  const handlelike = () =>{
    setState(prev => ({
      like: prev.like + 1
    }))
  }
  const handleTripleLike = () => {
    handlelike();
    handlelike();
    handlelike();
  }
  return (
    <div>
      <p>
        <button onClick={handlelike}> Like </button>
        <span> {state.like} </span>
      </p>
      <p>
        <button onClick={handleTripleLike}> Triple Like</button>
        <span> {state.like}</span>
      </p>
    </div>
  );
}
