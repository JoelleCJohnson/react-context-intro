import { useContext } from "react"
import { UserContext } from "../App"

export default function Login() {
    const { userState, setUserState } = useContext(UserContext)

const handleFormSubmit = (e) => {
    e.preventDefault()
    
    const formData = {
        email: e.target.email.value,
        password: e.target.password.value
    }

    setUserState(formData)

}

    return (
        <form action="submit" onSubmit={handleFormSubmit}>
            <label htmlFor="email">
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label htmlFor="">
                Password:
                <input type="password" name="password"/>
            </label>
            <br />
            <button type="submit">Log in</button>
        </form>
    )
}