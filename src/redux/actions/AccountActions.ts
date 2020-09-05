import  AccountController from '../reducers/Account/metadata';


const TYPES = {
  UPDATE_DATA : 'update-data'
}

const updateDataChofer = ( newData : AccountController.IAccount ) => ({
  type : TYPES.UPDATE_DATA,
  payload : newData
})


export {
  updateDataChofer
}

export default TYPES;