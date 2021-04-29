import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h2>Add a Doctor</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" placeholder="Name" name="email"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" placeholder="name" name="name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Upload a image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;