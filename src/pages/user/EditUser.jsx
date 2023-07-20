import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const EditUser = () => {
  // drag end drop image
  useEffect(() => {
    const dropzone = document.getElementById('dropzone')
    const fileInput = document.getElementById('fileInput')
    const uploadedImage = document.getElementById('uploadedImage')

    const handleDragOver = (e) => {
      e.preventDefault()
      dropzone.classList.add('highlight')
    }

    const handleDragLeave = () => {
      dropzone.classList.remove('highlight')
    }

    const handleDrop = (e) => {
      e.preventDefault()
      dropzone.classList.remove('highlight')
      const file = e.dataTransfer.files[0]
      displayImage(file)
    }

    const handleInputChange = (e) => {
      const file = e.target.files[0]
      displayImage(file)
    }

    dropzone.addEventListener('dragover', handleDragOver)
    dropzone.addEventListener('dragleave', handleDragLeave)
    dropzone.addEventListener('drop', handleDrop)
    fileInput.addEventListener('change', handleInputChange)

    return () => {
      dropzone.removeEventListener('dragover', handleDragOver)
      dropzone.removeEventListener('dragleave', handleDragLeave)
      dropzone.removeEventListener('drop', handleDrop)
      fileInput.removeEventListener('change', handleInputChange)
    }
  }, [])
  // preview image
  const displayImage = (file) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = function (e) {
        const uploadedImage = document.getElementById('uploadedImage')
        uploadedImage.src = e.target.result
        uploadedImage.style.display = 'block'
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <>
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Edit User</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <Link to='/users'>User</Link>
                </li>
                <li className='breadcrumb-item active'>Edit User</li>
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
            <div className='col-md-8'>
              {/* <!-- jquery validation --> */}

              <div className='card card-primary'>
                <div className='card-header'>
                  <h3 className='card-title'>User Info</h3>
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
                        placeholder='Enter Password'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='confirmPassword'>Confirm Password</label>
                      <input
                        type='password'
                        name='confirm-password'
                        className='form-control'
                        id='confirm-password'
                        placeholder='Enter Confirm Password'
                      />
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                </form>
              </div>
              {/* <!-- /.card --> */}
            </div>
            <div className='col-md-4'>
              {/* <!-- jquery validation --> */}

              <div className='card card-primary'>
                <div className='card-header'>
                  <h3 className='card-title'>Select Role And Status</h3>
                </div>
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form id='quickForm'>
                  <div className='card-body'>
                    <div className='form-group'>
                      <label>Select Role</label>
                      <select className='form-control'>
                        <option>Admin</option>
                        <option>User </option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='status' className='mx-1'>
                        Status :
                      </label>
                      <input
                        type='checkbox'
                        id='toggle-two'
                        data-style='ios slow'
                        data-size='small'
                        data-height='5'
                        data-offstyle='danger'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='status' className='mx-1'>
                        Upload Image :
                      </label>
                      <div
                        id='dropzone'
                        className='dropzone'
                        onClick={() =>
                          document.getElementById('fileInput').click()
                        }
                      >
                        <input
                          type='file'
                          id='fileInput'
                          style={{ display: 'none' }}
                        />
                        <h1>
                          <span className='fas fa-file-upload'></span>
                        </h1>
                        <p>Drag and drop image here, or click to select</p>
                      </div>
                      <img
                        id='uploadedImage'
                        src=''
                        alt=''
                        className='img-fluid mt-3'
                        style={{ display: 'none' }}
                      />
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                  <div className='card-footer'>
                    <Link className='btn btn-secondary mx-1' to='/users'>
                      <span className='fas fa-arrow-left'>Back</span>
                    </Link>
                    <button type='submit' className='btn btn-primary'>
                      Update User
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

export default EditUser
