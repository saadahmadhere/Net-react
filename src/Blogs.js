const Blogs = (props) =>{
    return(
        <div className="blog-page">
             {props.item.map((blog) =>(
               <div className="blog-preview">
                   <h2>{blog.title}</h2>
                   <p> Written by: {blog.author}</p>
                   <hr />
               </div>
           ))}
        </div>
    );
}

export default Blogs;