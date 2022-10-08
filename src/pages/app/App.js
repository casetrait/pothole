import { Component } from "react"
import "./App.css"
import { Route, Routes, Navigate } from 'react-router-dom'
import IndexPage from "../IndexPage/IndexPage"
import FormPage from "../FormPage/FormPage"
import HomePage from "../HomePage/HomePage"

export default class App extends Component {
  render() {
    return(
      <main className="App">
        <Routes>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/tickets' element={<IndexPage />}/>
          <Route path='/new' element={<FormPage />}/>
          <Route path="*" element={<Navigate to="/home" replace />}/>
        </Routes>
      </main>
    ) 
  }
}
