import React from 'react';
import { Text, View } from 'react-native';
import styles from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

const CalculadoraScreen = () => {
    return (
        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.resultadoPequeno }>1,500.00</Text>
            <Text style={ styles.resultado }>1,500.00</Text>


            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='C' color="#9B9B9B"/>
                <BotonCalc texto='+/-' color="#9B9B9B"/>
                <BotonCalc texto='del' color="#9B9B9B"/>
                <BotonCalc texto='/' color="#FF9427"/>
            </View>

            {/* FILA DE BOTONES 1 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='7'/>
                <BotonCalc texto='8'/>
                <BotonCalc texto='9'/>
                <BotonCalc texto='x' color="#FF9427"/>
            </View>

            {/* FILA DE BOTONES 2 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='4'/>
                <BotonCalc texto='5'/>
                <BotonCalc texto='6'/>
                <BotonCalc texto='-' color="#FF9427"/>
            </View>

            {/* FILA DE BOTONES 3 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='1'/>
                <BotonCalc texto='2'/>
                <BotonCalc texto='3'/>
                <BotonCalc texto='+' color="#FF9427"/>
            </View>

            {/* FILA DE BOTONES 4 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='0' ancho/>
                <BotonCalc texto='.'/>
                <BotonCalc texto='=' color="#FF9427"/>
            </View>
        </View>
    )
}

export default CalculadoraScreen;