import React , { useState, useEffect }from 'react';
import { TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import LogoIconOn from '../../assets/icons/eco-light.png';
import LogoIconOff from '../../assets/icons/eco-light-off.png';
import LogoDio from '../../assets/icons/logo-dio.png';
import LogoDioWhite from '../../assets/icons/logo-dio-white.png';

import * as S from './styled';

const Flashlight = () => {

    const [toggle, setToggle] = useState(false);

    // function for OnPress in the TouchableOpacity
    const handleOnPress = () => setToggle(oldToggle => !oldToggle);
    
    useEffect(() =>{
        // Turn On the flash of phone
        Torch.switchState(toggle);
    }, [toggle]);

    useEffect(()=>{
        const subscription = RNShake.addListener(()=>{
            setToggle(oldToggle => !oldToggle);
        });
        // dismount subscription
        return () => subscription.remove();
    },[]);

    return (
        <S.StyledView toggle={toggle}>
            <TouchableOpacity onPress={handleOnPress}>
                <S.StyledImageIcon toggle={toggle} source={toggle ? LogoIconOff : LogoIconOn}/>
                <S.StyledImageLogo toggle ={toggle} source={toggle ? LogoDioWhite : LogoDio} />
            </TouchableOpacity>    
        </S.StyledView>    
    );
};

export default Flashlight;