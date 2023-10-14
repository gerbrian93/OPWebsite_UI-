import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './sidebar.css';

const CollapsibleSidebar = ({ isCollapsed, setIsCollapsed }) => {
 //const [isCollapsed, setIsCollapsed] = useState(true);
  const [blogTitles, setBlogTitles] = useState([]);

  useEffect(() => {
   fetch('/omnipresentpodcast/blog')
     .then(response => response.json())
     .then(data => setBlogTitles(data));
 }, []);

  return (
    <div className="barAndButton">
      <div className="barbtn" onClick={() => setIsCollapsed(!isCollapsed)} >
        {isCollapsed ? "->" : "<-"}
      </div>
      <div className="sidebar"
        style={{
          display: isCollapsed ? "none" : "block",
          
        }}
      >
        <form><input type="text"></input><input type="button" value="search"></input></form>
         
        {blogTitles.map((data, index) => (
            <div className={"blogTitles"} key={index}>
               <Link className="title" to={`/blog/post/${data.id}`}>{data.title}</Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
