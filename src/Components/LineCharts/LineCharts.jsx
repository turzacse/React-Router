import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const LineCharts = () => {
    const studentData = [
        { id: 1, name: "John", mathMarks: 85, physicsMarks: 78, chemistryMarks: 90 },
        { id: 2, name: "Alice", mathMarks: 72, physicsMarks: 65, chemistryMarks: 80 },
        { id: 3, name: "Bob", mathMarks: 94, physicsMarks: 88, chemistryMarks: 92 },
        { id: 4, name: "Emma", mathMarks: 68, physicsMarks: 75, chemistryMarks: 70 },
        { id: 5, name: "David", mathMarks: 78, physicsMarks: 70, chemistryMarks: 85 },
        { id: 6, name: "Sophia", mathMarks: 91, physicsMarks: 84, chemistryMarks: 94 },
        { id: 7, name: "Oliver", mathMarks: 88, physicsMarks: 82, chemistryMarks: 91 },
        { id: 8, name: "Mia", mathMarks: 76, physicsMarks: 68, chemistryMarks: 78 },
        { id: 9, name: "Noah", mathMarks: 89, physicsMarks: 86, chemistryMarks: 93 },
        { id: 10, name: "Lily", mathMarks: 93, physicsMarks: 90, chemistryMarks: 95 }
      ];
      
    return (
        <div>
            <h2 className='text-xl font-medium mb-10'>This the line Chart of the Math and Physics marks of 10 student</h2>
            
            <LineChart width={600} height={300} data={studentData}>
              <Line type="monotone" dataKey="mathMarks" stroke="red" />

              <Line type="monotone" dataKey="physicsMarks" stroke="green" />
              <CartesianGrid></CartesianGrid>
              <XAxis dataKey='name'></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default LineCharts;