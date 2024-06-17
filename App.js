import { Platform } from 'react-native';
import MapView from 'react-native-maps';
import MapViewWeb from '@react-native-maps/web';

const MyMapView = Platform.OS === 'web' ? MapViewWeb : MapView;

export default function App() {
  return (
    <View style={styles.container}>
      <MyMapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"Marker Title"}
          description={"Marker Description"}
        />
      </MyMapView>
    </View>
  );
}