import React from 'react';

import * as S from './styled';

const Home = ({navigation}) => {

    return (
        <S.StyledView>
            <S.StyledText>This app was created as a final project in the Bootcamp of Decola Tech.</S.StyledText>  
            <S.StyledButtonContainer onPress={() => navigation.navigate('Flashlight')}>
                <S.StyledButtonText>Go to Flashlight</S.StyledButtonText>
            </S.StyledButtonContainer>
              
        </S.StyledView>    
    );
};

export default Home;