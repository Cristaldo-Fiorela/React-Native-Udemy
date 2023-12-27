import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0')
    };

    const armarNumero = ( numeroTexto: string ) => {
        setNumero( numero + numeroTexto );
    };

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero( numero.replace('-', ''));
        } else {
            setNumero( '-' + numero );
        }
    };

    return (
        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
            <Text 
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit // boolean true
            >{ numero }</Text>


            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='C' color="#9B9B9B" accion={ limpiar } />
                <BotonCalc texto='+/-' color="#9B9B9B" accion={ positivoNegativo }/>
                <BotonCalc texto='del' color="#9B9B9B" accion={ limpiar }/>
                <BotonCalc texto='%' color="#FF9427" accion={ limpiar }/>
            </View>

            {/* FILA DE BOTONES 1 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='7' accion={ armarNumero }/>
                <BotonCalc texto='8' accion={ armarNumero }/>
                <BotonCalc texto='9' accion={ armarNumero }/>
                <BotonCalc texto='x' color="#FF9427" accion={ limpiar }/>
            </View>

            {/* FILA DE BOTONES 2 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='4' accion={ armarNumero }/>
                <BotonCalc texto='5' accion={ armarNumero }/>
                <BotonCalc texto='6' accion={ armarNumero }/>
                <BotonCalc texto='-' color="#FF9427" accion={ limpiar }/>
            </View>

            {/* FILA DE BOTONES 3 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='1' accion={ armarNumero }/>
                <BotonCalc texto='2' accion={ armarNumero }/>
                <BotonCalc texto='3' accion={ armarNumero }/>
                <BotonCalc texto='+' color="#FF9427" accion={ limpiar }/>
            </View>

            {/* FILA DE BOTONES 4 */}
            <View style={ styles.fila }>
                {/* Boton */}
                <BotonCalc texto='0' accion={ armarNumero } ancho/>
                <BotonCalc texto='.' accion={ limpiar }/>
                <BotonCalc texto='=' color="#FF9427" accion={ limpiar }/>
            </View>
        </View>
    )
}

export default CalculadoraScreen;