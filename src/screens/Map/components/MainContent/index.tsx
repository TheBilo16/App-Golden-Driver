import React from 'react';
import MapView , { Marker } from 'react-native-maps';
import { MapTravel } from './styles'

//Redux
import { useSelector , shallowEqual , useDispatch } from 'react-redux';
import { changeBusStopInformation } from '../../../../redux/actions/MapActions';
import { MapController } from '../../../../redux/reducers/Map/metadata';

const MainContent = () => {
  const { 
    map : { mapScreen : { state } },
    travels : { tasks }
  } = useSelector(store => store, shallowEqual);

  const dispatch = useDispatch();

  const ActivateModalBusStopDetail = (busStop : MapController.IBusStopDetail) => {
    if(state === 'bottom-btn') return;
    dispatch(changeBusStopInformation(busStop));
  };

  const GetMarkers = () => tasks.map(v => v.markers);

  return (
    <MapTravel
      as={MapView}
      initialRegion={{
        latitude: -12.0464,
        longitude: -77.0428,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
    {GetMarkers().map((v,i) => (
      <Marker 
        key={i}
        title={v.title}
        coordinate={v.coordinate}
        onPress={() => ActivateModalBusStopDetail(v.information)}
      />
    ))}
  </MapTravel>
  )
}

export default MainContent;