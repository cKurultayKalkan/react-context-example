import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated : false
  };

  toggleAuth= ()=> {
    this.setState({
      isAuthenticated:!this.state.isAuthenticated
    })
  };

  render() {
    const {toggleAuth} = this;
    return (
      <AuthContext.Provider value={{...this.state,toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
