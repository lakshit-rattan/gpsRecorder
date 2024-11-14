import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth, PoppinsMedium, PoppinsRegular } from '../../constants/styles';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: 'rgba(51, 181, 239, 1)',
      height: (deviceHeight * 7) / 100,
    },
    headerText: {
      color: 'rgba(139, 139, 139, 1)',
      paddingVertical: (deviceHeight * 1.5) / 100,
      backgroundColor: 'rgba(240, 240, 240, 1)',
      paddingLeft: (deviceWidth * 3) / 100,
      fontSize: 16,
      fontFamily: PoppinsRegular,
    },
    cloud: {
      width: 125,
      height: 125,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: (deviceHeight * 20) / 100,
    },
    WelcomeTextContainer: {
      alignItems: 'center',
    },
    WelcomeText: {
      color: 'black',
      fontSize: 24,
      fontWeight: '500',
      fontFamily: PoppinsMedium,
    },
    emptyStoreText: {
      color: 'rgba(139, 139, 139, 1)',
      paddingTop: (deviceHeight * 1) / 100,
      fontSize: 16,
      fontFamily: PoppinsRegular,
    },
    circle: {
      position: 'absolute',
      right: 0,
      bottom: 50,
      borderRadius: 50,
    },
    addButton: {
      width: 80,
      height: 80,
    },
    itemContainer: {
      paddingVertical: (deviceHeight * 3) / 100,
      paddingHorizontal: (deviceWidth * 3) / 100,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    coordinateText: {
      color: 'black',
      fontSize: 16,
      fontFamily: PoppinsRegular,
      paddingLeft: (deviceWidth * 3) / 100,
      maxWidth: (deviceWidth * 50) / 100,
    },
    oneDriveCloud: {
      width: 30,
      height: 25,
    },
    deleteImage: {
      width: 23,
      height: 23,
    },
  });

  export default styles;
