import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../../constants/styles';

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 4,
      borderRadius: 15,
      height: (deviceHeight * 60) / 100,
      width: (deviceWidth * 90) / 100,
      overflow: 'hidden',
    },
    closeButton: {
        color: 'white',
        fontFamily: PoppinsSemiBold,
        fontSize: 20,
    },
    addressTxt: {
        color: 'black',
        fontFamily: PoppinsRegular,
    },
    addr: {
        color: 'black',
        fontFamily: PoppinsMedium,
        fontSize: 16,
      },
    modalView: {
        backgroundColor: 'white',
        width: (deviceWidth * 90) / 100,
        borderRadius: 10,
        padding: (deviceWidth * 3) / 100,
        marginTop: (deviceHeight * 2) / 100,
      },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  export default styles;
