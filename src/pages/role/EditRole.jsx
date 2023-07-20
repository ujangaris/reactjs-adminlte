import React from 'react'
import { Link } from 'react-router-dom'

const EditRole = () => {
  return (
    <>
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Edit Role</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <Link to='/roles'>Role</Link>
                </li>
                <li className='breadcrumb-item active'>Edit Role</li>
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
              <div className='card card-success'>
                <div className='card-header'>
                  <h3 className='card-title'>
                    Form <small>Edit Role</small>
                  </h3>
                </div>
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form id='quickForm'>
                  <div className='card-body'>
                    <div className='form-group'>
                      <label htmlFor='role'>Name Role</label>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Enter name role'
                      />
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                  <div className='card-footer'>
                    <Link className='btn btn-secondary mx-1' to='/roles'>
                      <span className='fas fa-arrow-left'>Back</span>
                    </Link>
                    <button type='submit' className='btn btn-success'>
                      Updaate Role
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

export default EditRole
