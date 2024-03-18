import React, { useState, createContext } from 'react';

export const fileContext = createContext([]);
    
export const FileProvider = ({children}) => {
    const [file, setFile] = useState([
        {
        id: 1,
        name: 'firstasdjkahsaskakskdjasjkdjkakjsssssssssssssskjskkdasd aasdasdakslk',
        positionx: null,
        positiony: null,
    },
    {
        id: 2,
        name: 'second',
        positionx: null,
        positiony: null,
    },
    {
        id: 3,
        name: 'third',
        positionx: null,
        positiony: null,
    }]);

    return (
    <fileContext.Provider value = {{file, setFile}}>
        {children}
    </fileContext.Provider>
    );
}

