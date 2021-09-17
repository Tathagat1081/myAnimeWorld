import React, { useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

const URL = "http://localhost:8080/favourites"
const Favourites=()=>{
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
                    </tr>
                </thead>
                <tbody >
                    {detail.map((favourites) => (
                        <tr>
                            <td>{favourites.id}</td>
                            <td>{favourites.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default Favourites;