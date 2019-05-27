import React from "react";
import { Router, Route, Switch } from "react-router-dom"; // To implement React-Router Functionalities

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import "../CSS/index.css";
import history from "../history";
class App extends React.Component {
  render() {
    return (
      <div className="parent-div ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              {/* Switch is used To avoid the conflict of new and show route*/}
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
