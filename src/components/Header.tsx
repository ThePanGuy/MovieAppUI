import React from 'react';
import {useAuth} from "./AuthContext";

const Header: React.FunctionComponent = () => {
    const auth = useAuth();

    const logout = (e:React.MouseEvent) => {
        e.preventDefault();
        auth?.logout();
    }

    const headerActions = () => {
        if (auth?.access_token) {
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