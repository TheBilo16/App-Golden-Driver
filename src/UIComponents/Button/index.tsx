import React, { FC } from 'react'
import { View, Button } from 'react-native';
import { ContentButton } from './style'



interface buttonRequired {
    width?: number | string,
    text: string,
    onPress(): void,
    color?: string
}


const ButtonU: FC<buttonRequired> = ({ width, text, onPress, color }) => {

    return (
        <ContentButton width={width}>
            <Button
                title={text}
                onPress={onPress}
                color={color}
            />
        </ContentButton>
    )
}

ButtonU.defaultProps = {
    width: "100%",
    color: "teal",                              
}

export default ButtonU;