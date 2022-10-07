import { Component } from "react"
import "./App.css"
import { Route, Routes, Navigate } from 'react-router-dom'
import IndexPage from "../IndexPage/IndexPage"
import FormPage from "../FormPage/FormPage"

export default class App extends Component {
  render() {
    return(
      <main className="App">
        Test
        <Routes>
          <Route path='/tickets' element={<IndexPage />}/>
          <Route path='/new' element={<FormPage />}/>
          <Route path="*" element={<Navigate to="/tickets" replace />}/>
        </Routes>
      </main>
    ) 
  }
}
