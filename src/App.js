import './App.css';
import Navbar from './components/header/navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
//import AboutPage from './components/pages/AboutPage.jsx'
import ContactPage from './components/pages/ContactPage.jsx';
import BlogPage from './components/pages/BlogPage.jsx';
import AdminPage from './components/admin/AdminPage.jsx';
import AddBlogPage from './components/admin/AddBlogPage.jsx';
//import MeteorShower from './components/animation/MeteorShower.jsx'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
       
       
        <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/> }/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="blog/post/:id" element={<BlogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>  
            <Route path="/administration" element= { <AdminPage/> }/>
            <Route path="/administration/addblog" element={<><AdminPage/><AddBlogPage/></>}/>
            <Route path="/administration/deleteblog" element={<><AdminPage/></>}/> 
            <Route path="/administration/modifyblog" element={<><AdminPage/></>}/>
        </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
