import React from "react";
import './AdminPage.css';
import { NavLink } from 'react-router-dom';

const AdminPage = () => {


   return(
      // <div className="master"> 
         
      //    <form>
      //       <div className="form-container">
      //          <label for="blog-body">Blog Body:</label>
      //          <p>Title: <input type="text"></input></p>
      //          <p>Body:<textarea className="blog-body" name="blogBody" placeholder="Write your blog here..."></textarea></p>
      //       </div>
      //    </form>
      // </div>
      <nav className="navbar">
      <ul className="items">
        <li>
          <NavLink to="/administration/addblog" >Add</NavLink>
        </li>
        <li>
          <NavLink to="/administration/deleteblog" >Delete</NavLink>
        </li>
        <li>
          <NavLink to="/administration/modifyblog" >Modify</NavLink>
        </li>
      </ul>
    </nav>
   );

}
export default AdminPage;