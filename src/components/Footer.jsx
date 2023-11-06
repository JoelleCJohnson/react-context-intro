import { UserContext } from "../App"
import { useContext } from "react"

export default function Footer(){
const UserInfo = useContext(UserContext)
const today = new Date()
const thisYear = today.getFullYear()

    return(
        <footer className="container">
            <hr />
            <small>
            User ID: {UserInfo._id}. Copyright © {thisYear} Joelle Johnson | All rights reserved. 
            </small>
        </footer>
    )
}