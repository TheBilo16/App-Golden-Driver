const useDrawerActions = (navigation) => {
  //Navegar entre pestañas
  const NavigateToScreen = (link : string) : void => navigation.navigate(link);

  //Cerrar Sesion
  const CloseSession = () => {
    console.log('Close Sesion');
  }

  return {
    NavigateToScreen,
    CloseSession
  }
}

export default useDrawerActions;