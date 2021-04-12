import React from "react";
import About from "./About";
// 홈

class Home extends React.Component {
  testrender(i: String) {
    return <About text={i} />;
  }
  render() {
    return <div className="contents">{this.testrender("hello, world!")}</div>;
  }
}

export default Home;
