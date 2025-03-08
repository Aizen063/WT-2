import React, { useState } from "react";

function Faculty() {
    const [facultyList, setFacultyList] = useState([
        { id: 1, name: "abc", branch: "cse", email: "abc@gmail.com" },
        { id: 2, name: "xyz", branch: "cse", email: "ac@gmail.com" },
        { id: 3, name: "xyz", branch: "cse", email: "ac@gmail.com" },
        { id: 4, name: "xyz", branch: "cse", email: "ac@gmail.com" },
        { id: 5, name: "xyz", branch: "cse", email: "ac@gmail.com" }
    ]);
    
    const [newFaculty, setNewFaculty] = useState({ name: "", department: "", branch: "", email: "" });
    const [editing, setEditing] = useState(false);
    const [currentFaculty, setCurrentFaculty] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFaculty({ ...newFaculty, [name]: value });
    };

    const addFaculty = () => {
        if (newFaculty.name && newFaculty.department && newFaculty.branch && newFaculty.email) {
            setFacultyList([...facultyList, { id: Date.now(), ...newFaculty }]);
            setNewFaculty({ name: "", department: "", branch: "", email: "" });
        }
    };

    const deleteFaculty = (id) => {
        setFacultyList(facultyList.filter((faculty) => faculty.id !== id));
    };

    const editFaculty = (faculty) => {
        setEditing(true);
        setCurrentFaculty(faculty);
        setNewFaculty(faculty);
    };

    const updateFaculty = () => {
        setFacultyList(facultyList.map((faculty) => (faculty.id === currentFaculty.id ? newFaculty : faculty)));
        setEditing(false);
        setNewFaculty({ name: "", branch: "", email: ""});
        setCurrentFaculty(null);
    };

    return (
        <div className="container">
            <h2>{editing ? "Edit Faculty" : "Add Faculty"}</h2>
            <input type="text" name="name" placeholder="Name" value={newFaculty.name} onChange={handleInputChange} />
            <input type="text" name="branch" placeholder="Branch" value={newFaculty.branch} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={newFaculty.email} onChange={handleInputChange} />
            <button onClick={editing ? updateFaculty : addFaculty}>{editing ? "Update" : "Add"}</button>
            
            <div className="row">
                {facultyList.map((faculty) => (
                    <div className="card col-7" style={{ width: "18rem" }} key={faculty.id}>
                        <div className="card-body">
                            <h5 className="card-title">{faculty.id}</h5>
                            <h5 className="card-title">{faculty.name}</h5>
                            <p className="card-text">branch: {faculty.branch}</p>
                            <p className="card-text">Email: {faculty.email}</p>
                            <button className="btn btn-primary" onClick={() => editFaculty(faculty)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteFaculty(faculty.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faculty;