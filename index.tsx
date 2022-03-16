import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import {
  SlideWrapper,
  ContentWrapper,
  ContentHed,
  ContentLink,
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
      hed: 'The 125 Best Met Gala Looks of All Time',
      redirect: 'Explore all the looks in the Red Carpet Gallery »',
      link: 'https://www.vogue.com/slideshow/met-gala-2021-red-carpet-live-celebrity-fashion',
    };
  }

  render() {
    return (
      <SlideWrapper>
        <ContentLink href={this.state.link} target="_self">
          <ContentWrapper>
            <ContentHed>{this.state.hed}</ContentHed>
            <ContentRedirect>{this.state.redirect}</ContentRedirect>
          </ContentWrapper>
        </ContentLink>
      </SlideWrapper>
    );
  }
}

render(<App />, document.getElementById('root'));
