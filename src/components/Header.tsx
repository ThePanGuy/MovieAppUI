import React from 'react';

const Header: React.FunctionComponent = () => {
    return (
        <div className={'header'}>
            <h1 className={'header-title'}>MovieRama</h1>
            <p className={'header-log-in'}>Log In or <a href="/sign-up">Sign Up</a></p>
        </div>
    )
};

export default Header;