import "./App.css";
import React, { Component } from "react";
import marked from "marked";

const initialState =
  "Ini paragraf\n**ini text tebal**\n> ini block quotes!\n# ini heading 1\n## ini heading 2\n\n- list item 1\n- list item 2\n\n[visit my github](https://github.com/fajriawansu)\n\nIni inline: `<div></div>`\n\n Ini block of code:\n\n```\n\tlet x =1;\n\tlet y=2;\n\tz=x+y\n\n```\n\n![logo react](https://goo.gl/Umyytc)";

class App extends Component {
  state = {
    text: initialState,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    console.log(text);

    return (
      <div className="App container">
        <h1 className="text-center">Convert Your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <h5>Enter your text here: </h5>
            <textarea
              id="editor"
              className="form-control p-2"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h5>Result: </h5>
            <div
              className="preview rounded p-2"  id="preview"
              dangerouslySetInnerHTML={{ __html: marked(text, {breaks: true}) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
