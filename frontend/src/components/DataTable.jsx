// src/components/DataTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from 'simple-datatables';
import 'simple-datatables/dist/style.css';

const DataTableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/items/')
            .then(response => {
                setData(response.data);
                const table = new DataTable("#myTable");
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <table id="myTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTableComponent;
