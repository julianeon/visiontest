import React from 'react';
import styled from 'styled-components';

const Impact = styled.h1`
font-family: 'Monoton', cursive;
`
const Container = styled.div`
padding-left: 10px;
`

const Fontly = styled.div`
display: flex;
font-size: ${props => (props.count)};
`

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
	terminalOutput: [],
	value:'',
	count: 1000,
    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  
  renderTerminalOutput = () => {
      return this.state.terminalOutput.map((t,i) => (
	      <Fontly count={this.state.count*(i+1)+"px"}>{t}</Fontly>
    )).reverse()
  }
  
  handleChange(e) {
      this.setState({
        value: e.target.value
      });
  }
  keyPress(e){
    if(e.keyCode === 13){
      this.setState({
          terminalOutput: [e.target.value, ...this.state.terminalOutput],
          value:'',
	  count: this.state.count/2+1,
      });

    }
  }

      
  render() {
    return (
      <Container>
          <Impact>Vision Test</Impact>
          <div id="terminalOutput">{this.renderTerminalOutput()}</div><span> ◕w◕ </span>
          <input value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}  id="terminalInput" ></input>
      </Container>
    );
  }
}

export default App;
