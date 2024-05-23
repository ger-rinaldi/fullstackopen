import { useState, useEffect } from 'react';

const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler}>{text}</button>
);

const AnecdoteDisplay = ({ title, anecdote, points }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{anecdote}</p>
      <p>has {points} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(anecdotes.map(() => 0));
  const [mostVotedIndex, setMostVotedIndex] = useState(0);
  const [noVotes, setNoVotes] = useState(true);

  useEffect(() => {
    const index = Math.floor(Math.random() * anecdotes.length);
    console.log(index);
    setSelected(index);
  }, [anecdotes.length]);

  return (
    <div>
      <AnecdoteDisplay
        title='Anecdote of the day'
        anecdote={anecdotes[selected]}
        points={points[selected]}
      />

      <Button
        text='vote'
        clickHandler={() => {
          const pointsCopy = [...points];

          pointsCopy[selected] += 1;

          setPoints(pointsCopy);

          setMostVotedIndex(
            pointsCopy[selected] >= pointsCopy[mostVotedIndex]
              ? selected
              : mostVotedIndex
          );

          if (noVotes) {
            setNoVotes(false);
          }
        }}
      />

      <Button
        text='next anecdote'
        clickHandler={() => {
          let nextIndex = selected + 1;

          if (nextIndex > anecdotes.length - 1) {
            nextIndex = 0;
          }

          console.log(nextIndex);
          setSelected(nextIndex);
        }}
      />

      <AnecdoteDisplay
        title='Anecdote with most votes'
        anecdote={
          !noVotes ? anecdotes[mostVotedIndex] : 'No votes have been cast yet'
        }
        points={!noVotes ? points[mostVotedIndex] : 0}
      />
    </div>
  );
};

export default App;
