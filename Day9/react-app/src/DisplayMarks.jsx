import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
    const students=[
        {name: "niharika", roll: 110,m1:100,m2:100,m3:100},
        {name: "Rahul", roll: 111,m1:100,m2:100,m3:100},
        {name: "Rohit", roll: 112,m1:100,m2:100,m3:100},
        {name: "niharika" ,roll: 113,m1:100,m2:100,m3:100},
        {name: "niharika" ,roll: 114,m1:100,m2:100,m3:100}
    ]
  return (
    <div>{students.map((student,index)=>(<Marks key={index}
    name={student.name}
    roll={student.roll}
    m1={student.m1}
    m2={student.m2}
    m3={student.m3}
    />))}
    </div>
  );
};

export default DisplayMarks;