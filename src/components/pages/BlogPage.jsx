import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./blogpage.css";
import CollapsibleSidebar from './sidebar.jsx';

const BlogPage = () => {
  const { id } = useParams();
  const [selectedBlogData, setSelectedBlogData] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);


  useEffect(() => {
    if (id) {
      fetch('/omnipresentpodcast/blog/post/' + id)
        .then(response => response.json())
        .then(data => setSelectedBlogData(data))
        .catch(error => console.error('Error fetching blog data:', error));
    }
  }, [id]);

 

  return (
    <>
      <CollapsibleSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
      {selectedBlogData ? (
        <>
         <div className="content" isCollapsed={isCollapsed} style={{marginLeft: isCollapsed ? '8%': '24%'}}>
         <img src={selectedBlogData.imglink} height={selectedBlogData.height} width={selectedBlogData.width} alt="=<"></img>
            <h1>{selectedBlogData.title}</h1>
            <h3>By:&nbsp;{selectedBlogData.author}</h3>
            <h4>Date:&nbsp;{selectedBlogData.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: selectedBlogData.body }}></div>
            {/* <p>{selectedBlogData.body}</p> */}
         </div>
        </>
      ) : (
        <h2>Select a blog to view.</h2>
      )}
    </>
  );
}

export default BlogPage;


