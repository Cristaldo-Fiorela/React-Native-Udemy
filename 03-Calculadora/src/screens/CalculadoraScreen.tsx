import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
    };

    const armarNumero = ( numeroTexto: string ) => {

        // No aceptar doble punto
        if(numero.includes('.') && numeroTexto === '.') return;

        if( numero.startsWith('0') || numero.startsWith('-0')) {

            // punto decimal
            if ( numeroTexto === '.') {
                setNumero( numero + numeroTexto );

                // evaluar si es otro cero y hay un punto

            } else if ( numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroAnterior);

                // Evaluar si es diferende de 0 y no tiene un punto
            } else if ( numeroTexto !== '0' && !numero.includes('.')) {
                setNumero( numeroTexto );

                // Evitar el 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero( numero );
            } else {
                setNumero( numero + numeroTexto );
            }    

        } else {
            setNumero( numero + numeroTexto );
        }

    };

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero( numero.replace('-', ''));
        } else {
            setNumero( '-' + numero );
        }
    };

    const btnDel = () => {
        /*
        1. Tomar la variable contenedora del numero actual
        2. con slice indicar en el 1er parametro la posicion basada la extraccion y 2do el indice en el que termina la extraccion

        A TENER EN CUENTA:
        no debe quedar un - solo cuando el num es negativo.
        una vez llegado a el final debe "limpiar" y volver a 0
        */
        // if ( numero.includes('-')) {
        //     setNumero( numero.slice(0, -1));
        // }

        console.log(numero.length)
        setNumero( numero.slice(0, -1));
        
        if(numero.length === 1 ) {
            limpiar();
        }
        if(numero.length === 2 && numero.includes('-')) {
            limpiar();
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
                <BotonCalc texto='del' color="#9B9B9B" accion={ btnDel }/>
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
                <BotonCalc texto='.' accion={ armarNumero }/>
                <BotonCalc texto='=' color="#FF9427" accion={ limpiar }/>
            </View>
        </View>
    )
}

export default CalculadoraScreen;