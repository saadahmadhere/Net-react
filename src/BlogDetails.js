import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams(); //This helps to get the route parameter.useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>
    const {item: blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id)
    return ( 
        <div className="blog-details">
            {isPending && <h1> Loading...</h1>}
            {error && <h1>Error Message</h1>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;