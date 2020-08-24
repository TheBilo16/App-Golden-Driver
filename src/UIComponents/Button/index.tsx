import React, { FC } from 'react'
import { View , Button , StyleSheet } from 'react-native';
import {ContentButton} from './style'

interface buttonRequired {
    width? : number | string,
    text : string,
    onPress() : void,
    color? : string
}


const ButtonU : FC<buttonRequired> = ( {width,text,onPress,color} ) => {

    const styles = StyleSheet.create({
        buttonStyle : {
            width ,
        }
    })

    return(
        <View style={styles.buttonStyle} >
            <Button
                title = {text}
                onPress = {onPress}
                color = {color}
            /> 
        </View>
    )
}

ButtonU.defaultProps = {
    width : "100%",
    color : "teal",
}

export default ButtonU;