import React from 'react'
import { Link } from 'react-router-dom'

const ListUser = () => {
  console.log(import.meta.env.VITE_SOME_KEY) // 123
  return (
    <>
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>All User</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='breadcrumb-item active'>Users</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>

      {/* <!-- Main content --> */}
      <section className='content'>
        {/* <!-- Default box --> */}
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              <Link
                to='/create-user'
                type='button'
                className='btn btn-block btn-success btn-sm'
              >
                Add User <span className='fas fa-plus'></span>
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
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>183</td>
                  <td>
                    John Doe <br />
                    <span className='badge bg-primary'>Admin</span>
                  </td>
                  <td className=''>
                    <img
                      alt='Avatar'
                      className='table-avatar'
                      src='../../dist/img/avatar.png'
                      style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                      }}
                    />
                  </td>

                  <td>
                    <span className='badge bg-success'>Active</span>
                  </td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
                    </a>
                    <Link to='/edit-user' className='btn btn-info btn-sm mx-1'>
                      <i className='fas fa-pencil-alt mx-1'></i>
                      Edit
                    </Link>
                    <a className='btn btn-danger btn-sm' href='#'>
                      <i className='fas fa-trash  mx-1'></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>
                    Alexander Pierce <br />
                    <span className='badge bg-success'>user</span>
                  </td>
                  <td>
                    <img
                      alt='Avatar'
                      className='table-avatar'
                      src='../../dist/img/avatar2.png'
                      style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                      }}
                    />
                  </td>

                  <td>
                    <span className='badge bg-danger'>Not Active</span>
                  </td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
                    </a>
                    <Link to='/edit-user' className='btn btn-info btn-sm mx-1'>
                      <i className='fas fa-pencil-alt mx-1'></i>
                      Edit
                    </Link>
                    <a className='btn btn-danger btn-sm' href='#'>
                      <i className='fas fa-trash  mx-1'></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>
                    Bob Doe <br />
                    <span className='badge bg-success'>user</span>
                  </td>
                  <td>
                    <img
                      alt='Avatar'
                      className='table-avatar'
                      src='../../dist/img/avatar3.png'
                      style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                      }}
                    />
                  </td>

                  <td>
                    <span className='badge bg-success'>Active</span>
                  </td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
                    </a>
                    <Link to='/edit-user' className='btn btn-info btn-sm mx-1'>
                      <i className='fas fa-pencil-alt mx-1'></i>
                      Edit
                    </Link>
                    <a className='btn btn-danger btn-sm' href='#'>
                      <i className='fas fa-trash  mx-1'></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>
                    Mike Doe <br />
                    <span className='badge bg-success'>user</span>
                  </td>
                  <td>
                    <img
                      alt='Avatar'
                      className='table-avatar'
                      src='../../dist/img/avatar4.png'
                      style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                      }}
                    />
                  </td>

                  <td>
                    <span className='badge bg-danger'>Not Active</span>
                  </td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
                    </a>
                    <Link to='/edit-user' className='btn btn-info btn-sm mx-1'>
                      <i className='fas fa-pencil-alt mx-1'></i>
                      Edit
                    </Link>
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
        {/* <!-- /.card --> */}
      </section>
    </>
  )
}

export default ListUser
