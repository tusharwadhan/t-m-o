import { React, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableData1, TableData2, TableData3, TableData4, TableData5, TableData6 } from "../comps/getOrder"
import { Link } from 'react-router-dom';
import Popup from './Popup';

function Home() {
    const [show, setShow] = useState(false);
    const [table, setTable] = useState();

    return (
        <>
            <Link to='/about' id='first' hidden={true}>first</Link>
            <Link to='/home' id='second' hidden={true}>second</Link>
            <br />
            <div className='container'>
                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 01
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(1); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData1 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green'>Receipt</Button>
                        <Button variant="outline-success" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 02
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(2); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData2 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green'>Receipt</Button>
                        <Button variant="outline-success" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 03
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(3); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData3 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green'>Receipt</Button>
                        <Button variant="outline-success" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <br />

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 04
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(4); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData4 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green'>Receipt</Button>
                        <Button variant="outline-success" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 05
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(5); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData5 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green'>Receipt</Button>
                        <Button variant="outline-success" className='btn-right green'>Pay Bill</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Header as="h5" className='text'>
                        Table 06
                        <Button variant="outline-primary" className='btn-right' onClick={() =>{setTable(6); setShow(true)}}>Add</Button>
                    </Card.Header>
                    <Card.Body className='card-text'>
                        <Card.Text>
                            <TableData6 />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" className='btn-left green'>Receipt</Button>
                        <Button variant="outline-success" className='btn-right green' >Pay Bill</Button>
                    </Card.Footer>
                </Card>
            </div>

            <Popup
                table={table}
                show={show}
                onHide={() => setShow(false)}
            />
        </>
    )
}

export default Home
