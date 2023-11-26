import React from 'react';
import {useAuth} from "./AuthContext";
import {useNavigate} from "react-router-dom";

interface Props {
    loggedIn?: boolean
}

const Header: React.FunctionComponent<Props> = ({loggedIn = true}) => {
    const auth = useAuth();
    const navigate = useNavigate();

    const logout = (e: React.MouseEvent) => {
        e.preventDefault();
        auth?.logout();
        navigate('/login');

    }

    const headerActions = () => {
        if (loggedIn) {
            return <a href={"/"} className={'header-log-out'} onClick={logout}>Log Out</a>;
        } else {
            return <p className={'header-log-in'}>Log In or <a href="/sign-up">Sign Up</a></p>;
        }
    }

    return (
        <div className={'header'}>
            <h1 className={'header-title'}>MovieRama</h1>
            {headerActions()}
        </div>
    )
};

export default Header;