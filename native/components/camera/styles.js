
import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../Theme'

const { width: winWidth, height: winHeight } = Dimensions.get('screen');

export default StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: theme.primary,
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: theme.primary,
        borderColor: "transparent",
    },
});