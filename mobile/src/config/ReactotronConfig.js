import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AssyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AssyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect({
      enabled: true,
      host: '192.168.0.2',
      port: 9090,
    });

  tron.clear();

  console.tron = tron;
}
