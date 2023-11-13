import {post} from "../utilities/fetch";
import {login, loginHandler} from "../operations/authOperation";
import React, {ChangeEvent, useState} from "react";

export default function Home() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const submit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginHandler(formData.username, formData.password);
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
                <button type={'submit'}>Login</button>
            </form>
        </>
    )
}
