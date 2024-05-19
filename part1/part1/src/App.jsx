const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ partsInfoArray }) => {
  return partsInfoArray.map((partInfo, index) => {
    return (
      <p key={index}>
        {partInfo.name} {partInfo.exercises}
      </p>
    );
  });
};

const Total = ({ exercisesTotalPerPart }) => {
  return (
    <p>
      Number of exercises{" "}
      {exercisesTotalPerPart.reduce((sum, value) => sum + value, 0)}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const partsInfoArray = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content partsInfoArray={partsInfoArray} />
      <Total
        exercisesTotalPerPart={partsInfoArray.map((part) => part.exercises)}
      />
    </div>
  );
};

export default App;
