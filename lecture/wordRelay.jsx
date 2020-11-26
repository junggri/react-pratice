const React = require("react");

class WordRelay extends React.Component {
  state = {
    word: "제로초",
    value: "",
    result: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({ result: "딩도앵", word: this.state.value, value: "" });
      this.input.focus();
    } else {
      this.setState({
        result: "떙",
        value: "",
      });
    }
  };

  onChangeInputs = (e) => {
    this.state({ value: e.target.value });
  };
  input;

  onRefInput = () => {};

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInputs} />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
