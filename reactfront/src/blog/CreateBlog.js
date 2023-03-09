import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompCreateblog = () => {
    const [title , setTitile]=useState('')
    const [content , setContent] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content: content})
        navigate('/')
    }

    return (
        <div>
            <h3>vista POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={ (e) => setTitile(e.target.value)}
                        type='text'
                        className="form-control"
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Content</label>
                    <input
                        value={content}
                        onChange={ (e) => setContent(e.target.value)}
                        type='text'
                        className="form-control"
                    />
                </div>
                <button type='submit' className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default CompCreateblog