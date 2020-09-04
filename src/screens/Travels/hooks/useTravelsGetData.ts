import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { ChangeDriverTasks } from '../../../redux/actions/TravelActions';

//Provicional
import TravelController from '../../../redux/reducers/Travel/metadata';
import { MapController } from '../../../redux/reducers/Map/metadata';

const markerTest : MapController.IMarker[] = [
  {
    title : 'Marker de Prueba',
    coordinate : {
      latitude : -12.0464,
      longitude : -77.0428
    },
    information : {
      name : 'Ruta 17 , Calle Principal 146',
      ubication : 'Casilla Postal 18-209, Lima Urbanizacion Corpac San Isidro',
      date : 'Lunes, Febrero 26 del 2020',
      detailState : 'completed',
    }
  }
]

const provitionalData : TravelController.ITravel[] = [
  {
    title : 'San Juan de Lurigancho',
    date : 'Asignado el 16 de enero de 2020',
    link : 'Map',
    state : 'completed',
    markers : markerTest
  },
  {
    title : 'San Juan de Lurigancho',
    date : 'Asignado el 16 de enero de 2020',
    link : 'Map',
    state : 'completed',
    markers : []
  },
  {
    title : 'San Juan de Lurigancho',
    date : 'Asignado el 16 de enero de 2020',
    link : 'Map',
    state : 'pendient',
    markers : []
  },
  {
    title : 'San Juan de Lurigancho',
    date : 'Asignado el 16 de enero de 2020',
    link : 'Map',
    state : 'pendient',
    markers : []
  }
]

const useTravelsGetData = () => {
  const dispatch = useDispatch();
  const { tasks , isTasksLoading } = useSelector(({ travels }) => travels);

  useEffect(() => {
    //Accion de traer las tareas del chofer (firebase) ...
    dispatch(ChangeDriverTasks(provitionalData));
  },[]);

  return {
    travels : tasks,
    isTasksLoading
  }
}

export default useTravelsGetData;