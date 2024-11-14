import {
    Alert,
    FlatList,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {useDispatch, useSelector} from 'react-redux';
  import {
    addCoordinates,
    deleteCoordinates,
  } from '../../redux/reducers/CoordinatesReducer';
  import {Coordinates, HomeScreenProps} from '../../types/types';
  import {addLocation, getAddress} from '../../services/LocationService';
  import {deviceHeight} from '../../constants/styles';
import styles from './styles';
import { MapModal } from '../../components';

  const HomeScreen: React.FC<HomeScreenProps> = () => {
    const [selectedCoordinate, setSelectedCoordinate] =
      useState<Coordinates | null>(null);

    const coordinatesList = useSelector(
      (state: any) => state.CoordinatesReducer.coordinates,
    );
    const [modalVisible, setModalVisible] = useState(false);
    const [address, setAddress] = useState<string>('');

    const dispatch = useDispatch();

    //Function to fetch location of device
    const findLocation = async () => {
      try {
        const newCoordinates: Coordinates | undefined = await addLocation(
          coordinatesList,
        );
        if (newCoordinates) {
          dispatch(addCoordinates(newCoordinates)); //dispatching coordinates list into redux store
        }
      } catch (error: any) {
        if (
          error.message === 'Location permission was not granted.' ||
          error.message === 'User denied access to location services.'
        )
          Alert.alert(
            'Location Access Denied',
            'Location permissions is required to use this app. Please allow location access through settings.',
          );
      }
    };

    //Function to delete a particular coordinate from list
    const deleteLocation = (id: number) => {
      dispatch(deleteCoordinates(id));
    };

    //Rendering List
    const renderList = ({item}: {item: Coordinates}): React.JSX.Element => {
      //Function to fetch address on clicking Coordinates
      const handlePress = async () => {
        try {
          const fetchedAddress = await getAddress(item);
          //Incase any issue with API key, or no address found in google maps for the coordinates
          if (fetchedAddress.length === 0) {
            Alert.alert('Error','Could not fetch address for this location');
            return;
          }
          setAddress(fetchedAddress);
          setSelectedCoordinate(item);
          setModalVisible(true);
        } catch (error) {
          console.warn('Error fetching address:', error);
          Alert.alert('Error','Something went wrong. Please try again.');
        }
      };

      return (
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/images/OneDriveCloud.png')}
              style={styles.oneDriveCloud}
            />
            <TouchableOpacity onPress={handlePress}>
              <Text numberOfLines={1} style={styles.coordinateText}>
                {item.latitude.toFixed(8)},{item.longitude.toFixed(8)}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => deleteLocation(item.id)}>
            <Image
              source={require('../../../assets/images/Delete.png')}
              style={styles.deleteImage}
            />
          </TouchableOpacity>
        </View>
      );
    };

    const renderEmptyComponent = () => (
      <View>
        <Image
          source={require('../../../assets/images/cloud.png')}
          style={styles.cloud}
        />
        <View style={styles.WelcomeTextContainer}>
          <Text style={styles.WelcomeText}>Welcome to GPS Store</Text>
          <Text style={styles.emptyStoreText}>Your GPS store is empty</Text>
        </View>
      </View>
    );

    //---------------------PARENT RENDER---------------------------//

    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'#F0F0F0'}
        />
        <View>
          <View style={styles.header} />
          <Text style={styles.headerText}>Coordinates</Text>
        </View>
        <View>
          <FlatList
            data={coordinatesList}
            renderItem={renderList}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={renderEmptyComponent}
            contentContainerStyle={{paddingBottom: (deviceHeight * 15) / 100}}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity style={styles.circle} onPress={findLocation}>
          <Image
            source={require('../../../assets/images/PlusIcon.png')}
            style={styles.addButton}
          />
        </TouchableOpacity>
        <MapModal
          isMapOpened={modalVisible}
          onClose={() => setModalVisible(false)}
          selectedCoordinate={selectedCoordinate}
          address={address}
        />
      </View>
    );
  };

  export default HomeScreen;
