import React, { useState } from "react";

function Student() {
    const [students, setStudents] = useState([
        { id: 1, name: "abc", branch: "cse", enroll: 112346, email: "abc@gmail.com" },
        { id: 2, name: "xyz", branch: "cse", enroll: 123456, email: "ac@gmail.com" },
        { id: 3, name: "xyz", branch: "cse", enroll: 123456, email: "ac@gmail.com" },
        { id: 4, name: "xyz", branch: "cse", enroll: 123456, email: "ac@gmail.com" },
        { id: 5, name: "xyz", branch: "cse", enroll: 123456, email: "ac@gmail.com" }
    ]);

    const deleteStudent = (id) => {
        setStudents(students.filter((stu) => stu.id !== id));
    };

    return (
        <div className="container">
            <div className="row">
                {students.map((stu) => (
                    <div className="card col-7" style={{ width: "18rem" }} key={stu.id}>
                        <div className="card-body">
                            <h5 className="card-title">{stu.id}</h5>
                            <h5 className="card-title">{stu.name}</h5>
                            <p className="card-text">{stu.branch}</p>
                            <p className="card-text">{stu.enroll}</p>
                            <p className="card-text">{stu.email}</p>
                            <button className="btn btn-danger" onClick={() => deleteStudent(stu.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Student;