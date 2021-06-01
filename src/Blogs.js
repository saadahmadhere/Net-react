const Blogs = (props) =>{
    return(
        <div className="blog-page">
             {props.blogs.map((blog) =>(
            <div>
               <div className="blog-preview">
                   <h2>{blog.title}</h2>
                   <p> Written by: {blog.author}</p>
               </div>
                <hr />
            </div>
           ))}
        </div>
    );
}

export default Blogs;