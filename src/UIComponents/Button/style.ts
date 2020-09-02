import styled from 'styled-components/native'

const ButtonU = styled.TouchableOpacity`
	width:${ props=>props.width }
	flex:${ props=> props.flex || 1 }
`
const ContentButton = styled.View`
	width:${props=>props.width};
	
`

export { ButtonU , ContentButton }