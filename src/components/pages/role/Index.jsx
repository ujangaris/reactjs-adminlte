import React from 'react'
import { Link } from 'react-router-dom'

const Role = () => {
  return (
    <>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0'>All Roles</h1>
            </div>
            {/* <!-- /.col --> */}
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='breadcrumb-item active'>Role</li>
              </ol>
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
      {/* <!-- /.content-header --> */}

      {/* <!-- Main content --> */}
      <section className='content'>
        {/* <!-- /.container-fluid --> */}
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              <Link
                to='/create-role'
                type='button'
                className='btn btn-block btn-success btn-sm'
              >
                Add Role <span className='fas fa-plus'></span>
              </Link>
            </div>

            <div className='card-tools'>
              <div
                className='input-group input-group-sm'
                style={{ width: '150px' }}
              >
                <input
                  type='text'
                  name='table_search'
                  className='form-control float-right'
                  placeholder='Search'
                />

                <div className='input-group-append'>
                  <button type='submit' className='btn btn-default'>
                    <i className='fas fa-search'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.card-header --> */}
          <div className='card-body table-responsive p-0'>
            <table className='table table-hover text-nowrap'>
              <thead className='text-center'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td>#</td>

                  <td>
                    <span className='badge bg-primary'> Admin </span>
                  </td>

                  <td>2023-06-05 20:02:35</td>
                  <td className='text-center'>
                    <a className='btn btn-info btn-sm mx-1' href='#'>
                      <i className='fas fa-pencil-alt mx-1'></i>
                      Edit
                    </a>
                    <a className='btn btn-danger btn-sm' href='#'>
                      <i className='fas fa-trash  mx-1'></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>

                  <td>
                    <span className='badge bg-success'> User </span>
                  </td>

                  <td>2023-06-05 20:02:35</td>
                  <td className='text-center'>
                    <a className='btn btn-info btn-sm mx-1' href='#'>
                      <i className='fas fa-pencil-alt mx-1'></i>
                      Edit
                    </a>
                    <a className='btn btn-danger btn-sm' href='#'>
                      <i className='fas fa-trash  mx-1'></i>
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='card-footer clearfix'>
            <nav aria-label='Page navigation example '>
              <ul className='pagination justify-content-end'>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    Previous
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    1
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    3
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- /.card-body --> */}
        </div>
      </section>
    </>
  )
}

export default Role
