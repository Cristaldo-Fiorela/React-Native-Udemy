
const TiposBasicos = () => {

    const nombre: string = 'Fiorela';
    const edad: number = 25;
    const estaActivo: boolean = true;

    const poderes: string[] = ['volar', 'ver el futuro'];
    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            {poderes.join(', ')}
        </>
    )
}

export default TiposBasicos