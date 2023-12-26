import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'black',
        flex: 1,
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
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
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    boton: {
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        height: 80,
        marginHorizontal: 10,
        justifyContent: 'center',
        width: 80,
    },
    botonTexto: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
        padding: 10,
        textAlign: 'center',
    },

});

export default styles;