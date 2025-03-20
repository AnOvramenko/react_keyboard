import React /*{ useEffect, useState }*/ from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<State> {
  state = {
    pressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            {`The last pressed key is [${this.state.pressedKey}]`}
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
