import store from './store';
import Routing from './routes/Routing'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routing />
      </BrowserRouter>    
    </Provider>
  );
}

export default App;
