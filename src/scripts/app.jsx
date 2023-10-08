import { Await, StateComponent, usingState } from 'amber';
import '../styles/index.sass';
import BottomAppbar from './components/bottom-appbar';
import HomePage from './pages/home-page';
import Page404 from './pages/page-404';

const routes = {
  '/': HomePage,
  '*': Page404,
  async find() {
    return await (this[window.location.pathname] || this['*']);
  },
  active: null
};

const App = class extends StateComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="app">
        <Await resolve={routes.find()}>
          {(Component) => {
            routes.active = usingState(<Component />);
            return routes.active[0];
          }}
        </Await>
        <BottomAppbar />
      </div >
    );
  }
};

window.addEventListener('pagechange', async (event) => {
  const Component = await routes.find();
  routes.active[1](<Component />);
});
window.addEventListener('popstate', (event) => {
  console.log('popstate', event.state);
});

export default App;
