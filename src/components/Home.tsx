import {post} from "../utilities/fetch";
import {login, loginHandler} from "../operations/authOperation";
import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const submit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginHandler(formData.username, formData.password)
            .then(() => navigate('/movies'))
            .catch(reason => console.log(reason));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
            <h1>Movie App Home Page</h1>
            <form onSubmit={submit}>
                <input name={'username'} type={'text'} value={formData.username} onChange={handleChange} placeholder={'Username'}/>
                <input name={'password'} type={'password'} value={formData.password} onChange={handleChange} placeholder={'Password'}/>
                <button>Login</button>
            </form>
        </>
    )
}
