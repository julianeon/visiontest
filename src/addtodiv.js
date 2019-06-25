class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      commandHistory:[],
      terminalOutput: [],
      value:'',

    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  
  renderTerminalOutput = () => {
    return this.state.terminalOutput.map(t => (
      <div style={{display: 'flex'}}>{t}</div>
    )).reverse()
  }
  
  handleChange(e) {
      this.setState({
        value: e.target.value
      });
  }
  keyPress(e){
    if(e.keyCode === 13){
      console.log(e.target.value);
      var newArray = this.state.commandHistory;
      newArray.push(e.target.value);
      //console.log(newArray);
      this.setState({
        commandHistory:newArray,
        terminalOutput: [e.target.value, ...this.state.terminalOutput],
        value:''
      });

      // var terminalOutput=document.getElementById('terminalOutput');
      // terminalOutput.append(e.target.value+ &carr;);
      //terminalOutput.append(``);
      console.log(terminalOutput);
      console.log(this.state.commandHistory);
    }
  }

      
  render() {
    return (
      <div className="Terminal">
        <div className="controls">
          <span className="red"></span><span className="yellow"></span><span className="green"></span>
        </div>
        <div className="Input-Terminal">
          <span className="machine-name">root@user:~ calc<br/>

          &nbsp;Type "help","12+34", "12+34*76" for more information</span>
          <div id="terminalOutput">{this.renderTerminalOutput()}</div>&nbsp;<span> >>> </span> &nbsp;
          <input value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}  id="terminalInput" ></input>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
