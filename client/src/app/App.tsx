import { AppRouter } from './router/App-router';
import { GlobalStore, GlobalStoreContext } from './store';

function App() {
  return (
    <GlobalStoreContext.Provider value={new GlobalStore()}>
      <AppRouter />
    </GlobalStoreContext.Provider>
  );
}

export default App;
