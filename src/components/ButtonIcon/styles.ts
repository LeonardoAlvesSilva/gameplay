import{StyleSheet} from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:{
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
    },
    iconWrapp:{
       width: 56,
         height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRightWidth:1,
        borderColor: theme.colors.line
    },


});