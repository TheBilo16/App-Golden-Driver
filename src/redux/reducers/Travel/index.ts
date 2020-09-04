import TravelController from "./metadata";

const initialState : TravelController.IStore = {
  tasks : [
    {
      title : 'San Juan de Lurigancho',
      date : 'Asignado el 16 de enero de 2020',
      link : 'Map',
      state : 'completed'
    },
    {
      title : 'San Juan de Lurigancho',
      date : 'Asignado el 16 de enero de 2020',
      link : 'Map',
      state : 'completed'
    },
    {
      title : 'San Juan de Lurigancho',
      date : 'Asignado el 16 de enero de 2020',
      link : 'Map',
      state : 'pendient'
    },
    {
      title : 'San Juan de Lurigancho',
      date : 'Asignado el 16 de enero de 2020',
      link : 'Map',
      state : 'pendient'
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