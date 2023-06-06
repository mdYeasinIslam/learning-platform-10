import React, { createContext, useEffect, useState } from 'react';

export const DataShare = createContext()
const InsideContext = ({ children }) => {
    const [data, setData] = useState([])
    const [getParams,setParams]  = useState(null)
    const getdata = (param) => {
        setData([...data, param])
        setParams(param)
        // console.log(data)
    }

    // console.log(getParams)
    const dataInfo = { data, getdata }
    return (
        <DataShare.Provider value={dataInfo}>
            {children}
        </DataShare.Provider>
    );
};

export default InsideContext;