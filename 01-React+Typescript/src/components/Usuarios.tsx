import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        // llamado a la API
        reqResApi.get<ReqResListado>('/users')
            .then (res => {
                setUsuarios(res.data.data);
            })
            .catch(err => console.log(err))
    }, [])

    const renderItem = (usuario: Usuario) => {
        const {id, first_name, last_name, email, avatar} = usuario;

        return (
            <tr key={id}>
                <td>
                    <img 
                    src={avatar} 
                    alt={first_name}
                    style={{
                        width: 35,
                        borderRadius: 100
                    }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }
    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( usuario => renderItem(usuario))
                    }
                </tbody>
            </table>

            <button
                className='btn btn-primary'
            >
                Siguiente
            </button>
        </>
    )
}

export default Usuarios