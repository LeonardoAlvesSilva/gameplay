import React from "react";
import{
    Text,
    Image,
    View,
    TouchableOpacity

} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import {styles} from './styles';

export function ButtonIcon(){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapp}>
                <Image source={DiscordImg} style={styles.iconWrapp} />
            </View>

            <Text style={styles.title}>
            Entre com Discord
            </Text>
        </TouchableOpacity>
        
    );
}