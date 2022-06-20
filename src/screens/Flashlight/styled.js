import styled from 'styled-components/native';

export const StyledView= styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.toggle === true ? "black": "white"};

`
export const StyledText = styled.Text`
    color: white;

`
export const StyledImageIcon = styled.Image`
    resize-mode: contain;
    align-self: center;
    width: 150px;
    height: 150px;
    tint-color: ${props => props.toggle === true ? "white": "null"};
    
`

export const StyledImageLogo = styled.Image`
    resize-mode: contain;
    align-self: center;
    width: 250px;
    height: 250px;
    
    
`