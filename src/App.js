import { useState,useEffect } from 'react';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
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
          <Home/>
        </Layout>
      }
   </div>
  )
} 

export default App