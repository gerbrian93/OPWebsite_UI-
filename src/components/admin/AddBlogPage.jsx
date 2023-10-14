import React from 'react';

const AddBlogPage = () => {

return(

      <div className="master"> 
         
         <form id="addblogform">
            <div className="form-container">
               
               <p>Title:&nbsp;<input type="text"></input></p>
               <p>Author:&nbsp;<input type="text"></input></p>
               
               <p>Body&nbsp;<textarea className="blog-body" name="blogBody" placeholder="Write your blog here..."></textarea></p>
               <p>Date:&nbsp;<input type="date"></input></p>
               <p>Image Link:&nbsp;<input type="url"></input></p>
               <p>Height:&nbsp; <select><option>1</option><option>2</option><option>3</option></select> </p>
               <p>Width:&nbsp;<select><option>1</option><option>2</option><option>3</option></select> </p>
               
               <button type="submit" form="addblogform" value="Submit">Submit</button>
            </div>
         </form>
      </div>
);

}

export default AddBlogPage;
