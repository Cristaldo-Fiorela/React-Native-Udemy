// * Interfaces
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

const ObjetosLiterales = () => {

    // Objeto literal
    const persona: Persona = {
        nombreCompleto: 'Fiorela',
        edad: 25,
        direccion: {
            pais: 'Argentina',
            casaNo: 119
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>            
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default ObjetosLiterales