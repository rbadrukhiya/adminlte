import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import * as React from 'react';
import Footer from "./footer";



function Single() {
    const [data, setdata] = useState([]);
    const [name, setname] = useState('');
    const [comment, setcomment] = useState('');
    const [view_comment, set_view_comment] = useState([]);
    const [date, setdate] = useState()
    const [cnt, setcnt] = useState()
    // var a=0
    var status = 1;
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost/admin-panel/view.php`)
            .then(function (response) {
                setdata(response.data.phpresult)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        var today = new Date()
        setdate(today.toDateString())
        console.log(date)

    })

    useEffect(() => {
        axios.get('http://localhost/admin-panel/comment-view.php')
            .then(function (response) {
                // console.log(response)
                set_view_comment(response.data.data)
                // console.log(view_comment);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    var a = 0;
    useEffect(() => {
        view_comment.map((i) => {
            if (i.status == 1 && i.u_id == id) {
                a = a + 1
                setcnt(a)
            }
        })
    }, [view_comment])


    function submit(e) {
        e.preventDefault();
        axios.post('http://localhost/admin-panel/comment.php', {
            name: name,
            comment: comment,
            u_id: id,
            status: status,
            date: date

        })
            .then(function (response) {
                console.log(response)
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (

        <>

            <div className="main-single-blog">
                <nav className="menu-nav p-2">
                    <div className="container">
                        <div className="row justify-content-between d-flex align-items-center">
                            <div className="col-auto">
                                <div className="email d-flex">
                                    <h6><i class="fa-solid fa-envelope me-2"></i>email@gmail.com</h6>
                                    <h6><i class="fa-solid fa-phone ms-3 me-2"></i>+ 123 456 789</h6>
                                </div>
                            </div>
                            <div className="col-auto">
                                <ul className='d-flex list-unstyled'>
                                    <li><a href="#" className='me-3'>
                                        <i class="fa-brands fa-facebook" style={{ color: '#fff' }}></i>
                                    </a></li>
                                    <li><a href="#" className='me-3'>
                                        <i class="fa-brands fa-instagram" style={{ color: '#fff' }}></i>
                                    </a></li>
                                    <li><a href="#" className='me-3'>
                                        <i class="fa-brands fa-twitter" style={{ color: '#fff' }}></i>
                                    </a></li>
                                    <li><a href="#" className='me-3'>
                                        <i class="fa-brands fa-linkedin" style={{ color: '#fff' }}></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
                <header>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <div className="img ">
                                    <img src={require('../img/logo.png')} className='img-fluid mt-4' alt="" />
                                </div>
                            </div>
                            <div className="col-auto d-none d-md-block">
                                <div className="menu">
                                    <ul className='d-flex list-unstyled'>
                                        <li><a href="/" className='me-5'>HOME <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '14px' }}></i></a></li>
                                        <li><a href="/" className='me-5'>BLOG <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '14px' }}></i></a></li>
                                        <li><a href="#" className='me-5'>GALLERY <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '14px' }}></i></a></li>
                                        <li><a href="#" className='me-5'>CONTACT <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '14px' }}></i></a></li>
                                        <li><a href="#" className='me-5'>ABOUT <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '14px' }}></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto d-md-none">
                                <div className="toggle">
                                    <i class="fa-solid fa-bars"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>
                <div className="breadcrumb">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-auto">
                                <div className="breadcrumb-part">
                                    {
                                        data.map((i) => {
                                            if (i.id == id) {
                                                return (
                                                    <>
                                                        {i.title}
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="bread">
                                    {
                                        data.map((i) => {
                                            if (i.id == id) {
                                                return (
                                                    <>
                                                        Home / {i.title}
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    data.map((i) => {
                        if (i.id == id) {
                            return (
                                <>
                                    <div className="single">
                                        <div className="container mt-3">
                                            <div className="row">
                                                <div className="title">
                                                    {/* <p style={{ color: 'black', textAlign: 'left' , fontSize:'30px' }}>{i.title}</p> */}
                                                </div>
                                                <div className="col-12">
                                                    <div className="img mt-2 mb-3">
                                                        <img src={`http://localhost/admin-panel/image/${i.image}`} className='rounded-2 ' alt="" />
                                                    </div>
                                                    <p style={{ textAlign: 'left', marginLeft: '70px' }}> <i class="fa-solid fa-comment"></i> {cnt}   <i class="fa-solid fa-share-nodes ms-5"></i></p>
                                                </div>
                                                <div className="col-auto">

                                                    <div className="description">
                                                        <p className=" text-left " style={{ fontSize: '30px', fontWeight: '500' }}> description : </p> <p style={{ color: 'black', textAlign: 'left' }} className='mb-3'>{i.description}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-auto">

                                            </div>
                                        </div>
                                    </div>




                                </>
                            )
                        }
                    })
                }
                <div className="comment-view">

                    {
                        view_comment.map((i) => {
                            if (i.status == 1 && i.u_id == id)
                                return (
                                    <>
                                        <div className="row ms-5 mt-3">
                                            <div className="col-4">
                                                <Card>
                                                    <Card.Body>
                                                        <p>{i.comment}</p>
                                                        <footer className="blockquote-footer">
                                                            Written bY... <cite title="Source Title">Mr . {i.name}</cite>
                                                        </footer>
                                                    </Card.Body>
                                                    <Card.Footer >
                                                        <small>
                                                            <div className="row justify-content-between">
                                                                <div className="col-auto text-muted" >{i.date} </div>
                                                                {/* <div className="col-auto text-muted">{cnt}</div> */}
                                                            </div>
                                                        </small>
                                                    </Card.Footer>
                                                </Card>
                                            </div>
                                        </div>
                                    </>
                                )
                        })
                    }
                </div>


                <div className="row justify-content-between   align-items-center mt-5 ms-5 ">
                    <div className="col-auto comment p-3 comment-section">

                        <Form className="">
                            <h1 style={{ color: '#000' }}>Leave a Comment...</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={(e) => setname(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Comment :</Form.Label>
                                <Form.Control type="text" placeholder="comment" name="comment" onChange={(e) => setcomment(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={submit}>
                                Submit
                            </Button>

                        </Form>

                        {/* <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <h1 style={{ color: '#fff' }}>Add Comment...</h1><br/>
                              <TextField id="outlined-basic" label="name"  variant="outlined" type='text' onChange={(e)=>setname(e.target.value)}/><br/>

                         <TextField id="filled-basic" label="comment" variant="filled" type='text' onChange={(e)=>setcomment(e.target.value)}/><br/>
                            <Button variant="primary" type="submit" onClick={submit}>
                                Submit
                            </Button>
                        </Box> */}
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default Single