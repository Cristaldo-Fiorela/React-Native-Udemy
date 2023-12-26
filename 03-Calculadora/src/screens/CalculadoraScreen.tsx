import React from 'react';
import { Text, View } from 'react-native';
import styles from '../theme/appTheme';

const CalculadoraScreen = () => {
    return (
        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.resultadoPequeno }>1,500.00</Text>
            <Text style={ styles.resultado }>1,500.00</Text>


            <View style={ styles.fila }>
                {/* Boton */}
                <View style={ styles.boton }>
                    <Text style={ styles.botonTexto }>C</Text>
                </View>

                <View style={ styles.boton }>
                    <Text style={ styles.botonTexto }>C</Text>
                </View>

                <View style={ styles.boton }>
                    <Text style={ styles.botonTexto }>C</Text>
                </View>

                <View style={ styles.boton }>
                    <Text style={ styles.botonTexto }>C</Text>
                </View>

            </View>
        </View>
    )
}

export default CalculadoraScreen;