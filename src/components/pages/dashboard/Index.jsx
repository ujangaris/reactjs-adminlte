import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0'>Dashboard</h1>
            </div>
            {/* <!-- /.col --> */}
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item active'>Dashboard</li>
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
        <div className='container-fluid'>
          {/* <!-- Small boxes (Stat box) --> */}
          <div className='row'>
            <div className='col-lg-3 col-6'>
              {/* <!-- small box --> */}
              <div className='small-box bg-info'>
                <div className='inner text-center'>
                  <h3>150</h3>
                  <span className='fas fa-users'></span>
                  <p>User Registration</p>
                </div>
                <div className='icon'>
                  <i className='ion ion-bag'></i>
                </div>
                <Link to='/users' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </Link>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className='col-lg-3 col-6'>
              {/* <!-- small box --> */}
              <div className='small-box bg-success'>
                <div className='inner text-center'>
                  <h3>2</h3>
                  <span className='fas fa-key'></span>
                  <p>Role</p>
                </div>
                <div className='icon'>
                  <i className='ion ion-stats-bars'></i>
                </div>
                <Link to='/roles' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </Link>
              </div>
            </div>

            {/* <!-- ./col --> */}
          </div>

          {/* <!-- Main row --> */}

          {/* <!-- /.row (main row) --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              <h3>Last logged in users</h3>
            </div>

            <div className='card-tools'>
              {/* <div
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
              </div> */}
            </div>
          </div>
          {/* <!-- /.card-header --> */}
          <div className='card-body table-responsive p-0'>
            <table className='table table-hover text-nowrap'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Last Loggin At</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
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
                    John Doe <br />
                    <span className='badge bg-primary'>Admin</span>
                  </td>

                  <td>john@gmail.com</td>
                  <td>2023-06-05 20:02:35</td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
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
                    Alexander Pierce <br />
                    <span className='badge bg-success'>user</span>
                  </td>

                  <td>alex@gmail.com</td>
                  <td>2023-06-05 20:02:35</td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
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
                    Bob Doe <br />
                    <span className='badge bg-success'>user</span>
                  </td>

                  <td>bob@gmail.com</td>
                  <td>2023-06-05 20:02:35</td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
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
                    Mike Doe <br />
                    <span className='badge bg-success'>user</span>
                  </td>

                  <td>miki@gmail.com</td>
                  <td>2023-06-05 20:02:35</td>
                  <td className='text-center'>
                    <a className='btn btn-primary btn-sm mx-1' href='#'>
                      <i className='fas fa-eye mx-1'></i>
                      View
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

export default Dashboard
