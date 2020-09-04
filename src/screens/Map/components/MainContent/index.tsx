import React, { useEffect } from 'react';
import MapView , { Marker } from 'react-native-maps';
import { MapTravel } from './styles'

//Redux
import { useSelector , shallowEqual , useDispatch } from 'react-redux';
import { changeBusStopInformation } from '../../../../redux/actions/MapActions';
import { MapController } from '../../../../redux/reducers/Map/metadata';
import { useRoute } from '@react-navigation/native';

const MainContent = () => {
  //Hooks
  const { params } = useRoute();

  //Redux
  const dispatch = useDispatch();
  const { map , travels } = useSelector(store => store, shallowEqual);

  //Data
  const { mapScreen : { state } } = map;
  const { tasks } = travels;

  //Actions
  const ActivateModalBusStopDetail = (busStop : MapController.IBusStopDetail) => {
    if(state === 'bottom-btn') return;
    dispatch(changeBusStopInformation(busStop));
  };

  useEffect(() => {
    
  },[]);

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
    {
      tasks[params?.id].markers.map((v,i) => (
        <Marker 
          key={i}
          title={v.title}
          coordinate={v.coordinate}
          onPress={() => ActivateModalBusStopDetail(v.information)}
        />
      ))
    }
  </MapTravel>
  )
}

export default MainContent;