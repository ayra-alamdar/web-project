import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";


import LoginPage from './LoginPage'
import StudentHome from './StudentHome'


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000')
      const data = await res.json()
      setData(data)
    }
    fetchData();
}, [])

  return (
    <>
      <Router>
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/StudentHome" element={<StudentHome />} />
          </Routes>
      </Router>


      {/* <div className="container mt-4">
        <h1>Items</h1>
        <ul>
          {data.items && data.items.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div> */}
    </>
  )
}

export default App
