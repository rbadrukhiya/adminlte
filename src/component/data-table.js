import Menu from "./menu"
import { useEffect, useState } from "react"
import axios from "axios";
import Form from 'react-bootstrap/Form';
function Data_table() {
    const [user, setuser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/admin-panel/view.php')
            .then(function (response) {
                setuser(response.data.phpresult)
                // console.log(user);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])

    const handleSwitch = (id, e) => {
        if (e === true) {
            axios.post('http://localhost/admin-panel/switch.php', {
                id: id,
                status: 1
            })
                .then(function (res) {
                    console.log(res)
                })
        } else {
            axios.post('http://localhost/admin-panel/switch.php', {
                id: id,
                status: 0
            })
        }
    }


    useEffect(() => {
        user.map((i, k) => {
            document.getElementById('custom-switch' + k).checked = (i.status == 1) ? true : false;
        })
    }, [user])


    function del(i) {
        const d_id = i
        axios.post('http://localhost/admin-panel/delete.php', {
            del_id: d_id,
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        window.location.reload();

    }

    return (
        <>
            <div className="wrapperr">
                <Menu />
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>DataTables</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">DataTables</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                                        </div>
                                        <div className="card-body">
                                            <table id="example2" className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Title</th>
                                                        <th>Description</th>
                                                        <th>Image</th>
                                                        <th>Delete</th>
                                                        <th>Edit</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        user.map((i, q) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{i.id}</td>
                                                                        <td>{i.title}</td>
                                                                        <td>{i.description}</td>
                                                                        <td><img src={`http://localhost/admin-panel/image/${i.image}`} height='100px' width='150px' style={{ objectFit: 'contain' }} className="img-fluid img" /></td>
                                                                        <td><a href="#" onClick={() => del(i.id)} style={{color:'black' , textDecoration:'none' , textTransform:'capitalize'}}>delete</a></td>
                                                                        <td><a href={`/edit/${i.id}`}style={{color:'black' , textDecoration:'none' , textTransform:'capitalize'}}> edit</a></td>
                                                                        <td>
                                                                            {/* {i.status} */}
                                                                            <div class="custom-control custom-switch">
                                                                                <input type="checkbox" style={{ color: 'red', backgroundColor: 'blue' }} id={"custom-switch" + q}
                                                                                    onChange={(j) => {
                                                                                        handleSwitch(i.id, j.target.checked)
                                                                                    }} className="custom-control-input" />
                                                                                <label class="custom-control-label" htmlFor={"custom-switch" + q}></label>
                                                                            </div>
                                                                        </td>

                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>
                <aside className="control-sidebar control-sidebar-dark">
                </aside>
            </div>


        </>
    )
}
export default Data_table