import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {

    const[title,setTitle] = useState('')
    const[body, setBody] = useState('')
    const[author, setAuthor] = useState('mario')
    const[isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const blog = {title,body,author}
        setIsPending(true)

        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers: {'Content-Type':'application/json'}, //this shows what type of content is being sent with the request.
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            history.push('/')
        })
    }
    return(
        <div className='create'>
            <h1> Create your blog here.</h1>
            <form onSubmit = {handleSubmit}>
                <label>Blog title:</label>
                <input type="text"
                value = {title}
                onChange ={(event) => setTitle(event.target.value) }
                required 
                autoFocus
                />
                <label>Body:</label>
                <textarea 
                value = {body}
                onChange = {(event)=> setBody(event.target.value)}
                required />
                <label>Author:</label>
                <select 
                value = {author}
                onChange = {(event)=> setAuthor(event.target.author)}
                >
                    <option value="mario" >Mario</option>
                    <option value="luigi" selected>Luigi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default CreateBlog;