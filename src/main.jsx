import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,Navigate} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx' 
import Registration from './components/Registration.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Uploadhistory from './components/Uploadhistory.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route index element={<Navigate to='/home'/>}/>
      <Route path='home' element={ <ProtectedRoute><Home/></ProtectedRoute> }/>
      <Route path='uploadhistory' element={ <ProtectedRoute><Uploadhistory/></ProtectedRoute> }/>

      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='registration' element={<Registration/>}/>
        
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>,
)