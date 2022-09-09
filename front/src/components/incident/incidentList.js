import '../../style/component/incidentList.css'

import React, { useState, useEffect } from "react";
import axios from "axios";

import IncidentElement from './incident'
import TableHeader from './tableHeader';

const IncidentList = function() {
    const [getIncidents, setGetIncients] = useState([]);

        useEffect(() => {
            async function fetchIncidents() {
                const URL = "http://localhost:8080/incident";
                try {
                    const res = await axios.get(URL);
                    setGetIncients(res.data.incident);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchIncidents();
        },[]);
        // console.log(getIncidents);
    // });
    return(
        <div className='table'>
            <TableHeader />
            <div className='scrollableTable'>
                {getIncidents.map((incident, index) => (
                    <IncidentElement key={index} incident={incident} />
                ))}
            </div>
        </div>
    );

}


export default IncidentList