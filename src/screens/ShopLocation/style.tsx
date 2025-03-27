import {Platform, StyleSheet} from 'react-native';
import {Padding, Radius, Screen_Dimensions, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapViewContainer: {
    flex: 1,
  },
  backContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 65 : 20,
    left: 15,
  },
  locationContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: Padding.BOTTOM,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    backgroundColor: 'white',
    padding: Padding.SMALL,
    borderRadius: Radius.SMALL,
  },
  markerText: {
    color: 'black',
    fontWeight: 'bold',
  },
  cardListContainer: {
    padding: Padding.DEFAULT,
  },
  cardContainer: {
    padding: Padding.DEFAULT,
    width: Screen_Dimensions.WIDTH,
  },
  card: {
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
