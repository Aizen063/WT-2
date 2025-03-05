import React, { useState } from "react";

function Feculty() {
    const [feculty, setFeculty] = useState([
        { id: 1, name: "abc", branch: "cse", email: "abc@gmail.com" },
        { id: 2, name: "xyz", branch: "cse", email: "ac@gmail.com" },
        { id: 3, name: "xyz", branch: "cse", email: "ac@gmail.com" },
        { id: 4, name: "xyz", branch: "cse", email: "ac@gmail.com" },
        { id: 5, name: "xyz", branch: "cse", email: "ac@gmail.com" }
    ]);

    const deleteFeculty = (id) => {
        setFeculty(feculty.filter((fec) => fec.id !== id));
    };

    return (
        <div className="container">
            <div className="row">
                {feculty.map((fec) => (
                    <div className="card col-3" style={{ width: "18rem" }} key={fec.id}>
                        <div className="card-body">
                            <h5 className="card-title">{fec.id}</h5>
                            <h5 className="card-title">{fec.name}</h5>
                            <p className="card-text">{fec.branch}</p>
                            <p className="card-text">{fec.email}</p>
                            <button className="btn btn-danger" onClick={() => deleteFeculty(fec.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feculty;