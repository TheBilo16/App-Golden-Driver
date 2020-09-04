import { useDispatch } from 'react-redux';
import { setInitialState,  changeAlertBoxState, changeTravelState } from '../../../redux/actions/MapActions';
import { activateDrawerGesture } from '../../../redux/actions/ConfigurationActions';
import { useEffect } from 'react';

const useMap = () => {
  const dispatch = useDispatch();

  const QuestionAccept = () => {
    dispatch(changeAlertBoxState(false));
    dispatch(changeTravelState('in-process'));
  }

  const QuestionCancel = () => dispatch(changeAlertBoxState(false));

  useEffect(() => {
    dispatch(activateDrawerGesture(false));

    return () => {
      dispatch(setInitialState());
      dispatch(activateDrawerGesture(true));
    }
  },[]);

  return {
    QuestionAccept,
    QuestionCancel
  }
}

export default useMap;