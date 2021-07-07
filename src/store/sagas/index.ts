import appSagas from '../appReducer/sagas';
import authSagas from '../authReducer/sagas';

export default [...appSagas, ...authSagas];
