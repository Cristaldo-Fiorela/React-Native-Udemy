import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: null | string;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginActionPayload = {
    username: string;
    nombre: string;
}

// a diferencia de las interfaces, es mas dificil el expandir los tipos que creamos.
// no generan codigo de js
type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload };

// los reducer deben retornar siempre un tipo de estado igual a mi inicial state
// el state no debe mutarse/modificarse
const authReducer = ( state: AuthState, action: AuthAction ): AuthState  => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        
        case 'login':
            const { nombre, username} = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username,
            }

        default:
            return state;
    }
}

const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'});
        }, 1500);
    }, []); // <= dependencia donde indicamos ejecucion
    
    const login = () => {
        dispatch({
            type: 'login', 
            payload:  {
                nombre: 'Fiorela',
                username: 'Strider'
            }
        });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }


    if( validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            { 
            (token)
                ? <div className="alert alert-success"> Autenticado como: { nombre } </div>
                : <div className="alert alert-danger"> No autenticado </div>
            }

            {
                (token) 
                ? (
                    <button
                        className="btn btn-danger"
                        onClick={ logout }
                    >
                        Logout
                    </button>
                )
                : (

                    <button
                        className="btn btn-primary"
                        onClick={ login }
                    >
                        Login
                    </button>
                )
            }

        </>
    )
}

export default Login