import { AsyncStorage } from 'react-native';

//REDUX
import { useDispatch } from 'react-redux';
import { updateRouteState } from '../redux/actions/RouterActions';


const useDrawerActions = (navigation) => {

  const dispatch = useDispatch();

  //Navegar entre pestañas
  const NavigateToScreen = (link : string) : void => navigation.navigate(link);
  
  //Cerrar Sesion
  const CloseSession = async () => {
    await AsyncStorage.removeItem('choferID');
    const d = await AsyncStorage.getItem('dataChofer');
    let data = JSON.parse(d!);
    data.outSession = '00:00:00'
    console.log(data)
    await AsyncStorage.mergeItem('dataChofer',JSON.stringify(data));
    console.log('Cierre de session finalizado');
    dispatch(updateRouteState('no-auth'))
    console.log('Close Sesion');
  }

  return {
    NavigateToScreen,
    CloseSession
  }
}

export default useDrawerActions;