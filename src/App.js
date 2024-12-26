import { Provider } from 'react-redux';
import Body from './components/Body';
import appSore from './utils/appStore';

function App() {
  return (
    <Provider store={appSore}>
      <Body/>
      </Provider>
  );
}

export default App;
