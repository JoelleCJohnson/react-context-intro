import { useContext } from "react"
import { UserContext } from "../App"


export default function Header() {
    const { userState } = useContext(UserContext)
    const UserInfo = useContext(UserContext)
    
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        {/* <a href="/contact">Contact Us</a> */}
                    </li>
                </ul>
            </nav>
        </header>)
}