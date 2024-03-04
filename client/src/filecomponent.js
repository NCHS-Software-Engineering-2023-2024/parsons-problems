import React, { useState } from 'react';

export const UploadComponent = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('file', file);
        
        try {
            const res = await fetch('http://localhost:3000/', {
                method: 'POST',
                body: formData,
                
            });
            
            console.log(res.ok);
        }
        catch (error){
            console.error('upload error');
        }
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "file" accept = ".txt, .java, .py" onChange = {handleFileChange} />
            <button type = "submit">Upload</button>
        </form>
    );
  };
