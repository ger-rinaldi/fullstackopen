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

const Total = ({ totalExercises }) => {
  return (
    <p>
      {' '}
      <b>total of {totalExercises} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      {course.parts.map((e) => {
        return <Part key={e.id} partInfo={e} />;
      })}
      <Total
        totalExercises={course.parts.reduce((a, e) => a + e.exercises, 0)}
      />
    </div>
  );
};

export default Course;
