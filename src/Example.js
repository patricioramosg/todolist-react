import './App.css';
import { useState } from 'react';

const App = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (evento) => {
        setUser({
            ...user,
            [evento.target.name]: evento.target.value
        })
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        console.log("envio formulario", user)
    }

    return <div>
        <form
            onSubmit={handleSubmit}
            className="row g-3 d-flex justify-content-center mt-5">
            <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name='email'
                    value={user.email}
                    className="form-control"
                    id="staticEmail2"
                    placeholder='Email' />
            </div>
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input
                    onChange={handleChange}
                    name='password'
                    value={user.password}
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Password" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Iniciar Sesion</button>
            </div>
        </form>
    </div>
};


export default App;