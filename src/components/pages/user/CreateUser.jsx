import React from 'react'
import { Link } from 'react-router-dom'

const CreateUser = () => {
  return (
    <>
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Add User</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <Link to='/users'>User</Link>
                </li>
                <li className='breadcrumb-item active'>Add User</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            {/* <!-- left column --> */}
            <div className='col-md-12'>
              {/* <!-- jquery validation --> */}
              <div className='card card-primary'>
                <div className='card-header'>
                  <h3 className='card-title'>
                    Form <small>Add User</small>
                  </h3>
                </div>
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form id='quickForm'>
                  <div className='card-body'>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail1'>Name</label>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Enter name'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail1'>Email address</label>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        placeholder='Enter email'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputPassword1'>Password</label>
                      <input
                        type='password'
                        name='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Password'
                      />
                    </div>
                    <div className='form-group'>
                      <label>Select</label>
                      <select className='form-control'>
                        <option>Admin</option>
                        <option>User </option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                  <div className='card-footer'>
                    <button type='submit' className='btn btn-primary'>
                      Add user
                    </button>
                  </div>
                </form>
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/.col (left) --> */}
            {/* <!-- right column --> */}
            <div className='col-md-6'></div>
            {/* <!--/.col (right) --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
    </>
  )
}

export default CreateUser
