import {
  Appearance,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  darkMapStyle,
  deviceColorScheme,
  deviceHeight,
} from '../../constants/styles';
import {MapModalProps} from '../../types/types';
import styles from './styles';

//MODAL TO RENDER MAPS
const MapModal: React.FC<MapModalProps> = props => {
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === 'dark');

  useEffect(() => {
    const listener = Appearance.addChangeListener(({colorScheme}) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => listener.remove();
  }, []);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.isMapOpened}
      onRequestClose={props.onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <MapView
            provider={PROVIDER_GOOGLE} // This makes Google Maps the provider
            customMapStyle={isDarkMode ? darkMapStyle : []}
            region={{
              latitude: props.selectedCoordinate?.latitude ?? 0,
              longitude: props.selectedCoordinate?.longitude ?? 0,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            style={styles.map}>
            <Marker
              coordinate={{
                latitude: props.selectedCoordinate?.latitude ?? 0,
                longitude: props.selectedCoordinate?.longitude ?? 0,
              }}
            />
          </MapView>
        </View>
        <View
          style={styles.modalView}>
          <Text
            style={styles.addr}>
            Address
          </Text>
          <Text style={styles.addressTxt}>
            {props.address}
          </Text>
        </View>
        <TouchableOpacity
          onPress={props.onClose}
          style={{marginTop: (deviceHeight * 2) / 100}}>
          <Text
            style={styles.closeButton}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MapModal;
