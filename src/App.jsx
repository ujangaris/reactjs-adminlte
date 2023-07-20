import Wrapper from "./components/Wrapper";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Wrapper>
        <div className="wrapper">
          <Navbar />
          {/* main side container */}
          <Sidebar />
          {/* akhir main side container */}
          {/* <!-- Content Wrapper. Contains page content --> */}
          <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item active">/</li>
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
            <Outlet />
          </div>
          {/* <!-- /.content-wrapper --> */}

          {/* footer */}
          <Footer />
        </div>
      </Wrapper>

      {/* <!-- /.content --> */}
    </>
  );
}

export default App;
