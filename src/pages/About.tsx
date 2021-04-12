import React from "react";

interface Props {
  text: String;
}
interface State {
  test: number;
}

class About extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { test: 1 };
  }
  clickBtn = () => {
    this.setState({ test: this.state.test + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.state.test}</p>
        <button onClick={this.clickBtn}>버튼</button>
      </div>
    );
  }
}

export default About;
