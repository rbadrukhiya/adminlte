import Menu from "./menu"
import { useEffect  , useState} from "react"
import axios from "axios";

function Comment() {
    const [view_comment, set_view_comment] = useState([]);
    
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

    const handleSwitch = (id, e) => {
        if (e === true) {
            axios.post('http://localhost/admin-panel/comment-switch.php', {
                id: id,
                status: 1
            })
                .then(function (res) {
                    console.log(res)
                })
        } else {
            axios.post('http://localhost/admin-panel/comment-switch.php', {
                id: id,
                status: 0
            })
        }
    }

    
    useEffect(() => {
        view_comment.map((i, k) => {
            document.getElementById('custom-switch' + k).checked = (i.status == 1) ? true : false;
        })
    }, [view_comment])

    function del(i)
    {
            const d_id = i

            axios.post('http://localhost/admin-panel/comment-delete.php', {
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
            <div classname="hold-transition sidebar-mini">
                <div className="wrapper">
                    <Menu />
                    <div className="content-wrapper">
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Comment</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Comment</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        <section className="content">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Comment</h3>
                                </div>
                                <div className="card-body">
                                    <table id="example2" className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>U_id</th>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Comment</th>
                                                <th>Status</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                    
                                            {
                                                view_comment.map((i , q)=>{
                                                    return(
                                                        <>
                                                        <tr>
                                                        <td>{i.u_id}</td>
                                                        <td>{i.id}</td>
                                                        <td>{i.name}</td>
                                                        <td>{i.comment}</td>
                                                        <td>
                                                            {/* {i.status} */}
                                                            <div class="custom-control custom-switch">
                                                                                <input type="checkbox" style={{ color: 'red', backgroundColor: 'blue' }} id={"custom-switch" + q}
                                                                                    onChange={(j) => {
                                                                                        handleSwitch(i.id, j.target.checked)
                                                                                    }} className="custom-control-input" />
                                                                                <label class="custom-control-label" htmlFor={"custom-switch" + q}></label>
                                                                            </div></td>
                                                        <td><a href={`/comment-edit/${i.id}`} style={{color:'black' , textDecoration:'none' , textTransform:'capitalize'}}> edit</a></td>
                                                        <td><a href="#" onClick={()=> del(i.id)} style={{color:'black' , textDecoration:'none' , textTransform:'capitalize'}}> delete</a></td>
                                                        </tr>
                                                        </>
                                                    )     
                                                })
                                            }
                                        </tbody>

                                    </table>
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
                    {/* Control Sidebar */}
                    <aside className="control-sidebar control-sidebar-dark">
                        {/* Control sidebar content goes here */}
                    </aside>
                    {/* /.control-sidebar */}
                </div>
            </div>
        </>
    )
}
export default Comment