import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {

    const {id} = useParams(); //This helps to get the route parameter.useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>
    const {item: blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id)
    const history = useHistory();

    const deleteHandler = ()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <h1> Loading...</h1>}
            {error && <h1>Error Message</h1>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick = {deleteHandler}>Delete blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;