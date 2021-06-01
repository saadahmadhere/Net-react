const Blogs = (props) =>{
    return(
        <div className="blog-page">
             <h1>{props.title}</h1>
             {props.blogs.map((blog) =>(
            <div>
               <div className="blog-preview" key = {blog.id}>
                   <h2>{blog.title}</h2>
                   <p> Written by: {blog.author}</p>
                   <button onClick= {()=>(props.deleteHandler(blog.id))}>Delete blog</button>
               </div>
                <hr />
            </div>
           ))}
        </div>
    );
}

export default Blogs;