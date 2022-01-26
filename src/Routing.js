import React from 'react'
import VerifyAccount from './Components/verifyAccount/verifyAccount'
import CreateAccount from './Components/createAccount/createAcoount'
import SigninEmail from './Components/signIn/emailEnter'
import SigninPass from './Components/signIn/passEnter'
import ChangePass from './Components/signIn/changePass'
import {Route} from "react-router-dom"

function Routing() {
    return (
        <div>
            <Route path="/" exact>
                <CreateAccount/>
            </Route>
            <Route path="/verifyAccount">
                <VerifyAccount/>
            </Route>
            <Route path="/signin">
                <SigninEmail/>
            </Route>
            <Route path="/signinPass">
                <SigninPass/>
            </Route>
            <Route path="/changePass">
                <ChangePass/>
            </Route>
        </div>
    )
}

export default Routing
