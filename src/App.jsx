import { useState } from 'react'
import './App.css'
import Navbar from './Components/Allhome/Navbar/Navbar'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Smartwatches from './Pages/Smartwatches/Smartwatches'
import Earbuds from './Pages/Earbuds/Earbuds'
import Support from './Pages/Support/Support'
import Vision from './Pages/Vision/Vision'
import Footer from './Components/Allhome/Footer/Footer'
import Amoled from './Pages/Amoled'
import Bestsellers from './Pages/Bestsellers'
import Newlaunch from './Pages/Newlaunch'
import Showitem from './Pages/Showitem'
import Showitem1 from './Pages/Showitem1'
import Buynow1 from './Components/Allothers/Buynow1/Buynow1'
import Advenrure from './Pages/Advenrure'
import Lifestyle from './Pages/Lifestyle/Lifestyle'
import Productivity from './Pages/Productivity/Productivity'

function App() {
  const location = useLocation()
  const isBuynowPage = location.pathname.match(/^\/showitem\/[^/]+\/buynow$/);


  return (
    <div className='App'>
      {!isBuynowPage && <Navbar  />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/smart-watches' element={<Smartwatches />} />
        <Route path='/earbuds' element={<Earbuds />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/support' element={<Support />} />
        <Route path='/amoled' element={<Amoled />} />
        <Route path='/bestsellers' element={<Bestsellers />} />
        <Route path='/newlaunch' element={<Newlaunch />} />
        <Route path='/earbuds' element={<Earbuds />} />
        <Route path='/showitem/:id' element={<Showitem />} />
        <Route path='/showitem2/:id' element={<Showitem1 />} />
        <Route path='/showitem/:id/buynow' element={<Buynow1 />} />
        <Route path='/adventure' element={<Advenrure/>} />
        <Route path='/lifestyle' element={<Lifestyle/>} />
        <Route path='/productivity' element={<Productivity/>} />
      </Routes>
      {!isBuynowPage && <Footer />}
    </div>
  )
}

export default App
