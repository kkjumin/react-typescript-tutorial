import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import SideMenu from "./components/common/SideMenu";
import About2 from "./pages/About2";
import Home from "./pages/Home";

interface StateType {
  mainMenuList: Array<Object>;
}
interface PropsType {}
class App extends React.Component<PropsType, StateType> {
  constructor(props: PropsType | Readonly<PropsType>) {
    super(props);
    this.state = {
      mainMenuList: [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <section className="contents-area">
            <SideMenu menuList={this.state.mainMenuList} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About2 />
              </Route>
            </Switch>
          </section>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
