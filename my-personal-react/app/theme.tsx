import { StyleSheet } from 'react-native';



export const theme = StyleSheet.create({
    header: {
        backgroundColor: '#200040',
    },
    tabBar: {
        backgroundColor: '#200040',
    },
    container: {
        flex: 1,
        backgroundColor: '#200040',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
    text: {
        color: '#fff',
    },
    pressable: {
        borderRadius: 12, // 圆角矩形
        overflow: "hidden",
        paddingVertical: 12,
        paddingHorizontal: 18,
        marginVertical: 6,

    },
});