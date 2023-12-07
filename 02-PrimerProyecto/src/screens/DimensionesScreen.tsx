import React from 'react';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';

/*  Obteniendo las dimensiones de la pantalla actual con el Hook de react native
! Al traerlas desde la pantalla esta info no va a cambiar independientemente de si el telefono este en horizontal o vertical.
* const dimensions = Dimensions.get('window');
* const { width, height } = dimensions;
*/

const DimensionesScreen = () => {

    // Hook que expone el ancho y alto de la pantalla en base dependiendo de si el telefono esta en horizontal o vertical
    const {width, height} = useWindowDimensions();

    return (
        <View>
            <View style={ styles.container }>
                <View style={ styles.cajaNaranja }></View>
                <View style={{ 
                        ...styles.cajaMorada,
                        width: width * 0.6
                    }}></View>
                <Text style={ styles.title}>W: { width }, H: { height }</Text>
            </View>
        </View>
    )
}

export default DimensionesScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    }
});