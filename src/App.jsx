import { Route, Routes } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import ListUser from './components/pages/user/Index'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './components/pages/dashboard/Index'
import Role from './components/pages/role/Index'
import CreateUser from './components/pages/user/CreateUser'
import CreateRole from './components/pages/role/CreateRole'
import EditUser from './components/pages/user/EditUser'
import EditRole from './components/pages/role/EditRole'

function App() {
  return (
    <>
      <Wrapper>
        <div className='wrapper'>
          <Navbar />
          {/* main side container */}
          <Sidebar />
          {/* akhir main side container */}
          {/* <!-- Content Wrapper. Contains page content --> */}
          <div className='content-wrapper'>
            {/* <!-- Content Header (Page header) --> */}
            <Routes>
              <Route path='/' element={<Dashboard />} exact />
              <Route path='/users' element={<ListUser />} />
              <Route path='/Roles' element={<Role />} />
              <Route path='/create-user' element={<CreateUser />} />
              <Route path='/edit-user' element={<EditUser />} />
              <Route path='/create-role' element={<CreateRole />} />
              <Route path='/edit-role' element={<EditRole />} />
            </Routes>

            {/* <!-- /.content --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}

          {/* footer */}
          <Footer />
        </div>
      </Wrapper>
    </>
  )
}

export default App
