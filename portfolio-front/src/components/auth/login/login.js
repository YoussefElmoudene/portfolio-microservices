import * as React from "react";
import {useEffect, useState} from "react";
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {login} from "../../../auth/auth";
import {isUserLoggedIn} from "../../../auth/utils";

function Login(props) {
    const isAuth = isUserLoggedIn()
    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('admin')

    useEffect(() => {
        if (isAuth) {
            window.location.href = 'about-me'
        }
    })
    const signIn = async (email, password) => {
        login(email, password).then(data => {
            console.log(data)
        }, error => {
            console.error(error)
        })
    }
    return (<div className="w-full p-1 md:p-32 h-screen items-center flex flex-col">
        <Card title="Login">
            <div className="flex min-w-[300px] md:min-w-[500px] items-center gap-2 flex-col">

                <div className="flex w-full flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <InputText placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="flex w-full flex-col gap-2">
                    <label htmlFor="username">Password</label>
                    <InputText type="password" placeholder="Password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="flex w-full my-3 flex-col items-center">
                    <Button
                        onClick={e => signIn(email, password)}
                        label="login" severity="success"/>
                </div>

            </div>
        </Card>
    </div>);
}


export default Login;
