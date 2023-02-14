import { useState, useEffect } from 'react'
import './land.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import * as React from 'react';
// import '..audio/'
// import audio from '../audio/mixkit-melodic-classic-door-bell-111.wav'
// import audio from '../audio/LH829XQ-bell-dings.mp3'
import audio from '../audio/mixkit-alert-bells-echo-765.wav'
import Footer from './footer';




function Home() {
    const play = new Audio(audio)
    const [user, setuser] = useState([])
    const [status_1, setstatus] = useState([])
    const [likes, setlikes] = useState([])
    const [loader, setloader] = useState(false)

    useEffect(() => {
        axios.get('http://localhost/admin-panel/view.php')
            .then(function (response) {
                setstatus(response.data.phpresult)
                setloader(true)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost/admin-panel/like-view.php')
            .then(function (response) {
                setlikes(response.data.phpresult)
                // console.log(likes);

            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    function like(i) {

        play.play();
        document.getElementById(`icon-${i}`).style.color = 'blue'
        // alert(a)/ins

        axios.post('http://localhost/admin-panel/like-insert.php', {
            'id': i
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // if (loader) {
        return (
            <>
                <div className="landing-page">
                <nav className="menu-nav p-2">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-auto">
                                <div className="email d-flex">
                                    <h6><i class="fa-solid fa-envelope me-2"></i>email@gmail.com</h6>
                                    <h6><i class="fa-solid fa-phone ms-3 me-2"></i>+ 123 456 789</h6>
                                </div>
                            </div>
                            <div className="col-auto">
                            <ul className='d-flex list-unstyled'>
                                        <li><a href="#" className='me-3'>
                                            <i class="fa-brands fa-facebook"></i>
                                        </a></li>
                                        <li><a href="#" className='me-3'>
                                            <i class="fa-brands fa-instagram"></i>
                                        </a></li>
                                        <li><a href="#" className='me-3'>
                                            <i class="fa-brands fa-twitter"></i>
                                        </a></li>
                                        <li><a href="#" className='me-3'>
                                            <i class="fa-brands fa-linkedin"></i></a></li>
                                    </ul>
                            </div>
                        </div>
                        
                    </div>
                </nav>
                    <header style={{backgroundColor:'#0F6292'}}>
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
                                            <li>
                                                <a href="#" className='me-5'>
                                                    HOME
                                                    <i class="fa-solid fa-angle-down ms-2" style={{fontSize:'14px'}}></i></a></li>
                                            <li><a href="#" className='me-5'>BLOG<i class="fa-solid fa-angle-down ms-2" style={{fontSize:'14px'}}></i></a></li>
                                            <li><a href="#" className='me-5'>GALLERY<i class="fa-solid fa-angle-down ms-2" style={{fontSize:'14px'}}></i></a></li>
                                            <li><a href="#" className='me-5'>CONTACT<i class="fa-solid fa-angle-down ms-2" style={{fontSize:'14px'}}></i></a></li>
                                            <li><a href="#" className='me-5'>ABOUT<i class="fa-solid fa-angle-down ms-2" style={{fontSize:'14px'}}></i></a></li>
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
                   
                    <div className="container ">

                        <div className="blog-card">
                            <div className="row  row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1" >
                                {
                                    status_1.map((i) => {
                                        if (i.status == 1) {
                                            return (
                                                <>
                                                    <div className="col-auto mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                                        <Card style={{ width: '18rem' }}>
                                                            <div className="row p-2 justify-content-between">
                                                                <div className="col-auto">
                                                                    {/* <Card.Footer> */}
                                                                    <small className="text-muted">september 14 , 2022</small>
                                                                    {/* </Card.Footer> */}
                                                                </div>
                                                                <div className="col-auto">
                                                                    {/* <Card.Footer> */}
                                                                    <small className="text-muted">:</small>
                                                                    {/* </Card.Footer> */}
                                                                </div>
                                                            </div>

                                                            <Card.Img variant="top" src={`http://localhost/admin-panel/image/${i.image}`} className='img-fluid' alt='something wrong' />
                                                            <Card.Body>
                                                                <Card.Text>
                                                                    <p className='blog-title'>
                                                                        {i.title}
                                                                    </p>
                                                                </Card.Text>
                                                                <Card.Text>
                                                                    <p className='text-left blog-desc'>
                                                                        {i.description}
                                                                    </p>
                                                                </Card.Text>
                                                                <a href={`/single/${i.id}`} style={{ textDecoration: 'none', color: 'black' }}>

                                                                    {/* <Button variant="primary"> Go somewhere</Button> */}
                                                                    Readmore...
                                                                </a>

                                                            </Card.Body>
                                                            <Card.Footer>
                                                                <div className="row justify-content-between">
                                                                    {/* <div className="col-auto"> */}

                                                                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                                                                    {/* </div> */}
                                                                    <div className="col-auto like">
                                                                        <button className='btn' onClick={() => { like(i.id) }}>
                                                                            <i class="fa-solid fa-thumbs-up" id={`icon-${i.id}`}></i>
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-auto m-0 p-0">
                                                                        {
                                                                            likes.map((q) => {
                                                                                if (i.id == q.u_id)
                                                                                    return (
                                                                                        <>
                                                                                            <p>{q.likes} likes</p>
                                                                                        </>
                                                                                    )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </Card.Footer>
                                                        </Card>

                                                    </div>
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    // }
    // else {
    //     return (
    //         <>
    //             <div class="preloader">
    //                 <div class="load-1"></div>
    //                 <div class="load-2"></div>
    //                 <div class="load-3"></div>
    //                 <div class="load-4"></div>
    //                 <div class="load-5"></div>
    //             </div>
    //         </>
    //     )

    // }

}
export default Home