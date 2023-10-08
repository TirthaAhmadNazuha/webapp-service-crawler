import { BaseComponent } from 'amber';

class Page404 extends BaseComponent {
  render() {
    return (
      <div className="page">
        <header>
          <h1>404</h1>
          <h2>Not Found!</h2>
        </header>
      </div>
    );
  }
}

export default Page404;
