const StudentCard = ({ name, age, roll, className, day }) => {
  return (
    <div className="bg-blue-200 shadow-lg hight-400px top-10px width-250px border-radius-15px display-flex flex-direction: column  p-6 max-w-sm mx-auto hover:shadow-2x1 transition duration-300">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Roll Number: {roll}</p>
      <p className="text-gray-600">Class: {className}</p>
      <p className="text-gray-600">Day: {day}</p> 
    </div>
  );
};

export default StudentCard;

