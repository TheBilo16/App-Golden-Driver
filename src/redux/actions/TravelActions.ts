import TravelController from "../reducers/Travel/metadata"

const TYPES = {
  UPDATE_DRIVER_TASKS : 'update-driver-tasks'
}

const ChangeDriverTasks = (tasks : TravelController.ITravel[]) => ({
  type : TYPES.UPDATE_DRIVER_TASKS,
  payload : tasks
})

export {
  ChangeDriverTasks
}

export default TYPES;