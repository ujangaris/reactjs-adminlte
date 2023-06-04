import { Route, Routes } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import ListUser from './components/pages/user/ListUser'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

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
              <Route path='/users' element={<ListUser />} />
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
