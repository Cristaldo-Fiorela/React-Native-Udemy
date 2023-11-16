import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        return () => {
            cargarUsuarios();
        }
    }, [])


    const cargarUsuarios = async() => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });

        if(resp.data.data.length > 0) {
            setUsuarios( resp.data.data);
            paginaRef.current ++;
        } else {
            alert('No hay mas registros');
        }
    }

    return {
        usuarios,
        cargarUsuarios,
    }
}

export default useUsuarios