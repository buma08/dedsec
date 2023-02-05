import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home'
import FeedBackPage from './pages/FeedBack'
import NotesPage from './pages/Notes'
import WriteUpPage from './pages/WriteUp'
import AdminPage from './pages/Admin'
import './css/App.css'
function App() {


  return (
    <>
    <Router>

    <Routes>
      <Route path='/admin' element={<AdminPage></AdminPage>}></Route>
      <Route path='/writeup' element={<WriteUpPage></WriteUpPage>}></Route>
      <Route path='Notes' element={<NotesPage></NotesPage>}></Route>
      <Route path='/feedback' element={<FeedBackPage></FeedBackPage>}></Route>
      <Route path='/' element={<HomePage></HomePage>}></Route>
    </Routes>

    </Router>
    </>
  )
}

export default App
