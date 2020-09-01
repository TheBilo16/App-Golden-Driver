import { useNavigation , DrawerActions } from "@react-navigation/native"

const useHeaderMenu = () => {
  const navigation = useNavigation();

  const openDrawerMenu = () : void => navigation.dispatch(DrawerActions.openDrawer());
  
  const openChatMenu = () => {
    navigation.navigate('Chat');
  }

  return {
    openDrawerMenu,
    openChatMenu
  }
}

export default useHeaderMenu;