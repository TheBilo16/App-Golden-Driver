import TravelController from "./metadata";

const markerTest : any = [
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

const initialState : TravelController.IStore = {
  tasks : [
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
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default reducer;