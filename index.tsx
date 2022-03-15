import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {
  SlideWrapper,
  ContentWrapper,
  ContentHed,
  ContentRedirect,
} from './style.js';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      hed: 'Black Overlay having background Image',
      redirect: 'Click to see more',
      link: 'Google.com',
    };
  }

  render() {
    return (
      <div>
        <SlideWrapper>
          <ContentWrapper>
            <ContentHed>{this.state.hed}</ContentHed>
            <ContentRedirect>{this.state.redirect}</ContentRedirect>
          </ContentWrapper>
        </SlideWrapper>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
