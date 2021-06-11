import { useParams } from "react-router";

const BlogDetails = () => {

const {id} = useParams(); //This helps to get the route parameter.useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>
    return ( 
        <div className="blog-details">
            <h1> Blog Details- {id}</h1>
        </div>
     );
}
 
export default BlogDetails;