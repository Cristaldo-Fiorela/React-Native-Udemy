import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'black',
        flex: 1,
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
    },
    resultado: {
        color: 'white',
        fontSize: 60, 
        textAlign: 'right',
    },
    resultadoPequeno: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30, 
        textAlign: 'right',
    },
    boton: {
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        width: 80,
    },
    botonTexto: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    }
});

export default styles;