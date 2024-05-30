const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Part = ({ partInfo }) => {
  return (
    <p>
      {partInfo.name} {partInfo.exercises}
    </p>
  );
};

const Content = ({ partsInfoArray }) => {
  return partsInfoArray.map((partInfo, index) => {
    return <Part key={index} partInfo={partInfo} />;
  });
};

const Total = ({ exercisesTotalPerPart: totalExercises }) => {
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content partsInfoArray={course.parts} />
      <Total
        exercisesTotalPerPart={course.parts.reduce(
          (sum, part) => sum + part.exercises,
          0
        )}
      />
    </div>
  );
};

export default App;
