import { Link } from "react-router-dom"

const Blogs = (props) =>{
    return(
        <div className="blog-page">
             <h1>{props.title}</h1>
             {props.blogs.map((blog) =>(
            <div key={blog.id}>
               <div className="blog-preview" >
                <Link to = {'blogs/'+blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by: {blog.author}</p>    
                </Link>
               </div>
                <hr />
            </div>
           ))}
        </div>
    );
}

export default Blogs;