import React, {useEffect} from 'react';
import {
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {SplashScreenProps} from '../../types/types';
import {requestLocationAuthorization} from '../../services/LocationService';
import styles from './styles';

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    requestLocationAuthorization(); //Requesting location permissions

    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/animations/SplashScreenAnimation.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

export default SplashScreen;

