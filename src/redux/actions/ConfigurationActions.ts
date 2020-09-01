const TYPES = {
  CHANGE_DRAWER_GESTURE : 'change-drawer-gesture'
}

const activateDrawerGesture = (drawerGesture : boolean) => ({
  type : TYPES.CHANGE_DRAWER_GESTURE,
  payload : drawerGesture
})

export {
  activateDrawerGesture
}

export default TYPES;