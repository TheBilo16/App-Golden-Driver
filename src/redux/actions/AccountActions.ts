const TYPES = {
  UPDATE_DATA : 'update-data',
  UPDATE_BUSINESS : 'update-businnes',
  UPDATE_CREATION_DATE : 'update-creation-date',
  UPDATE_DATE_OF_BIRTH : 'update-date-of-birth',
  UPDATE_DIRECTION:'update-direction',
  UPDATE_DOCUMENT_IMAGE:'update-document-image',
  UPDATE_LAST_NAME:'update-last-name',
  UPDATE_NAME:'update-name'
}

const updateData = ( newData : object ) => ({
  type : TYPES.UPDATE_DATA,
  payload : newData
})

const updateBusiness = (businnes:string) => ({
  type : TYPES.UPDATE_BUSINESS,
  payload : businnes
})

const updateCreationDate = (creationDate:Date) => ({
  type : TYPES.UPDATE_CREATION_DATE,
  payload : creationDate
})

//Agregar otros actualizadores de estado
// ....

// ....

export {
  updateBusiness,
  updateCreationDate,
}

export default TYPES;