import { useState,useEffect } from 'react';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
function App(){ 
  const [loading,setLoading] = useState(true);

  useEffect(function(){
    setTimeout(function(){
     setLoading(false)
    },5000)
  },[])

  return(
   <div>
      {
        loading === true ? <Loader/>:
        <Layout>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/> */}
          </Routes>
        </Layout>
      }
   </div>
  )
} 

export default App