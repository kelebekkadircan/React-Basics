import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
// import { Link } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";




function App() {

  const [users, setUsers] = useState('')



  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {

        // const uid = user.uid; 
        setUsers(user)

      } else {


      }
    });

  }, [])


  return (
    <>
      <Router>
        {users?.accessToken && < Navbar />}
        <Routes>

          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Home users={users} />} />

        </Routes>
      </Router>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />



    </>

  )
}

export default App;
