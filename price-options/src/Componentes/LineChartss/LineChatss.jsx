import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LineChatss = () => {

    const subjectMarks = [
  { id: 1, subject: "Mathematics", marks: 95 },
  { id: 2, subject: "Physics", marks: 88 },
  { id: 3, subject: "Chemistry", marks: 82 },
  { id: 4, subject: "Biology", marks: 91 },
  { id: 5, subject: "English", marks: 85 },
  { id: 6, subject: "Bangla", marks: 78 },
  { id: 7, subject: "ICT", marks: 92 },
  { id: 8, subject: "General Science", marks: 87 },
  { id: 9, subject: "History", marks: 74 },
  { id: 10, subject: "Geography", marks: 80 }
];

    return (
        <div>
            <LineChart width={600} height={400} data={subjectMarks}>
                <XAxis dataKey='subject'></XAxis>
                <YAxis dataKey='marks'></YAxis>
                <Line dataKey='marks' stroke='yellow'></Line>
                <Line dataKey='id' stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default LineChatss;