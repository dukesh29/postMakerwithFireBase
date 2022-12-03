import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import AddForm from "./containers/AddForm/AddForm";
import EditPost from "./containers/EditPost/EditPost";
import PostBodyFull from "./containers/PostBodyFull/PostBodyFull";
import './App.css';

function App() {


  return (
    <div className="App d-flex flex-column gap-3">
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path='/' element={(
            <Home/>
          )}/>
          <Route path='/add' element={(
            <AddForm/>
          )}/>
          <Route path='/about' element={(
            <About/>
          )}/>
          <Route path='/contacts' element={(
            <Contacts/>
          )}/>
          <Route path='/posts/:id/edit' element={(
            <EditPost/>
          )}/>
          <Route path='/posts/:id' element={(
            <PostBodyFull/>
          )}/>
        </Routes>
      </main>
      <footer className="bg-dark py-3">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
