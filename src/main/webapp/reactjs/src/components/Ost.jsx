import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from 'react-bootstrap/Table';

const URL = "http://localhost:8080/detail"
const Ost = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(response => {
                console.log('response', response);
                setDetail(response);
            })
    }, []);
    console.log('detail', detail);
    return (
        <div style=
            {{
                background: '#8baba3',
            }}
        >
            <Table striped bordered hover variant="dark"
                style={{
                    marginTop: "100px",
                    marginBottom: "245px",
                    display: "inline-table",
                    width: "800px"
                }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Anime Name</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody >
                    {detail.map((ost) => (
                        <tr>
                            <td>{ost.id}</td>
                            <td>{ost.name}</td>
                            <td><a href={ost.ostLink} target="_blank">{ost.ostTitle}</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Ost;