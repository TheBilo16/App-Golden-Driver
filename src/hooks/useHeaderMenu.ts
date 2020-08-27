import { useNavigation , DrawerActions } from "@react-navigation/native"

const useHeaderMenu = () => {
  const navigation = useNavigation();

  const openDrawerMenu = () : void => navigation.dispatch(DrawerActions.openDrawer());
  
  const openChatMenu = () => {
    //Actions...
  }

  return {
    openDrawerMenu,
    openChatMenu
  }
}

export default useHeaderMenu;