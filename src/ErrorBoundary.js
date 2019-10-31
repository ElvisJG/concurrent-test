import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className='error'>
          {' '}
          <span role='img' aria-label='Skull'>
            ☠️
          </span>{' '}
          Something went wrong: {this.state.error.message}{' '}
          <span role='img' aria-label='Skull'>
            ☠️
          </span>
        </h1>
      );
    }

    return this.props.children;
  }
}
