import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const users = [
        {
            id : "1",
            name : "Shad Decker",
            position : "System Architect",
            office : "Edinburgh",
            age : "61",
            startdate : "2011/04/25",
            salary : "320,800"
        },
        {
            id : "2",
            name : "Shad Decker",
            position : "System Architect",
            office : "Edinburgh",
            age : "61",
            startdate : "2011/04/25",
            salary : "320,800"
        },
        {
            id : "3",
            name : "Shad Decker",
            position : "System Architect",
            office : "Edinburgh",
            age : "61",
            startdate : "2011/04/25",
            salary : "320,800"
        },
        {
            id : "4",
            name : "Shad Decker",
            position : "System Architect",
            office : "Edinburgh",
            age : "61",
            startdate : "2011/04/25",
            salary : "320,800"
        }
    ]
  return (
    // <!-- Begin Page Content -->
    <div class="container-fluid">

    {/* <!-- Page Heading --> */}
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link to="/portal/Create-User" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
    </div>


    {/* <!-- DataTales Example --> */}
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            users.map((user,index)=>{
                                  return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.office}</td>
                            <td>{user.age}</td>
                            <td>{user.startdate}</td>
                            <td>${user.salary}</td>
                            <td>
                                <Link to={`/Portal/Users/${user.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>
                                <button className='btn btn-sm btn-primary mr-2'>Edit</button>
                                <button className='btn btn-sm btn-danger mr-2'>Delete</button>
                            </td>
                        </tr>
                                  )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
// <!-- /.container-fluid -->
  )
}

export default Users