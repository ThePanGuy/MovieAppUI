import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext";
import Header from "./Header";
import Movies from "./Movies";

export default function Home() {

    return (
        <Movies/>
    )
}
