import React from 'react'
import TodayTAppoinments from './Admin/Appoinments/TodayTAppoinments'
import { useEffect, useState,} from 'react';
import { useParams } from 'react-router';
const Record = () => {

    const id = useParams(); 

    return ( 
        <div>
            <h1>Patient Record </h1> 
            <h1>Patient Record </h1>
            <h1>Patient Record </h1>

        </div>
    )
}

export default Record
