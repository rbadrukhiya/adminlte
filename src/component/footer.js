import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="footer ">
                <div className="container">
                    <div className="row justify-content-between row-cols-sm-3 align-items-center">
                        <div className="col-auto">
                            <div className="first">
                                <ul className="list-unstyled">
                                    <li className='mb-3'> <img src={require('../img/logo.png')} style={{ height: 'auto', width: '50px' }} alt="" /></li>
                                    <li className="mb-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, </li>
                                    <li> <i class="fa-solid fa-phone me-3"></i>123_456_789</li>
                                    <li><i class="fa-solid fa-envelope me-3"></i>email@gmail.com</li>
                                    <li></li>


                                </ul>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="first">
                                <ul className="list-unstyled">
                                    <h5>Quick Links</h5>
                                    <li>Event</li>
                                    <li>Contact</li>
                                    <li>Galaries</li>
                                    <li>T&c</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="first">
                                <ul className="list-unstyled">
                                    <h5 cl>Contact us</h5>
                                    <div className='d-flex '>
                                        <li className='me-2'><i class="fa-brands fa-facebook  border border-1 p-1"></i></li>
                                        <li className='me-2'><i class="fa-brands fa-instagram border border-1 p-1"></i></li>
                                        <li className='me-2'><i class="fa-brands fa-twitter border border-1 p-1"></i></li>
                                        <li className='me-2'><i class="fa-brands fa-linkedin-in border border-1 p-1"></i>    </li>
                                    </div>
                                    <Button className='mt-3' style={{ backgroundColor: '#033669', width: '120px', border: '1px solid ' }} onClick={handleShow}>
                                        Contact us
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Contact us</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="name@example.com"
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="exampleForm.ControlTextarea1"
                                                >
                                                    <Form.Label> textarea</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-auto" style={{ color: '#000', padding: '15px' }}>
                            <i class="fa-solid fa-copyright"></i>  2023 All Rights Reserved by Badrukhiya Ravi
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer