import React from "react";
import About from "./About";
// 홈

class Home extends React.Component {
  testrender(i: number) {
    return <About />;
  }
  render() {
    return (
      <div className="contents">
        Home
        {this.testrender(1)}
        {this.testrender(2)}
      </div>
    );
  }
}

export default Home;
