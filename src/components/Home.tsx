import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext";
import Header from "./Header";

export default function Home() {
    const { login } = useAuth()!;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        debugger
        try {
            await login(formData.username, formData.password);
        } catch {
            console.log("catch block")
            return;
        }
        console.log("moved on anyway")
        // navigate('/movies');
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
            <Header/>
            <form onSubmit={submit}>
                <input name={'username'} type={'text'} value={formData.username} onChange={handleChange} placeholder={'Username'}/>
                <input name={'password'} type={'password'} value={formData.password} onChange={handleChange} placeholder={'Password'}/>
                <button>Login</button>
            </form>
        </>
    )
}
