import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Palette from './Palette/Palette';
import SingleColorPalette from './Palette/SingleColorPalette';
import PaletteForm from './PaletteForm/PaletteForm';
import PaletteList from './PaletteList/PaletteList';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import Page from "./Page";

import { withFirebase } from './Firebase';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      palettes: [],
      authUser: null,
      state: "",
      error: ""
    };
  }

  componentDidMount() {

    this.authListener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser: authUser
         })
        : this.setState({ authUser: null })
      },
    );

    const defaultPalettes = this.props.firebase.db.collection('defeaultpalettes');
    this.dbListener = defaultPalettes.onSnapshot(palettes => {
        let palettesArray = []
        palettes.forEach((palette) => {
          palettesArray.push(palette);
        })
        this.setState({
          palettes: palettesArray,
          error: ""
        })
      },
      error => {
        console.log(error);
        this.setState({
          error: "Database Connection Error"
        })
    });
  }

  componentWillUnmount() {
    this.authListener();
    this.dbListener();
  }

  render() {
    return (
      <Route 
        className='background'
        style={{height: "100%"}}
        render={({location}) => (
        <TransitionGroup style={{height: "100%"}}>
          <CSSTransition key={location.key} classNames='page' timeout={1000}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) =>
                    (
                      <Page>
                        <PaletteForm
                          authUser={this.state.authUser}
                          firebase={this.props.firebase}
                          palette={this.state.palettes[1]}
                          editing={false}
                          {...routeProps}
                          palettes={this.state.palettes}
                        />
                      </Page>
                    )
                  }
                />
                <Route
                  exact
                  path="/palette/edit/:id"
                  render={(routeProps) =>
                    (
                      <Page>
                        <PaletteForm
                          authUser={this.state.authUser}
                          firebase={this.props.firebase}
                          paletteID={routeProps.match.params.id}
                          editing={true}
                          {...routeProps}
                          palettes={this.state.palettes}
                        />
                      </Page>
                    )
                  }
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) =>
                    (
                      <Page>
                        <PaletteList
                          authUser={this.state.authUser}
                          firebase={this.props.firebase}
                          palettes={this.state.palettes}
                          error={this.state.error}
                          {...routeProps}
                        />
                      </Page>
                    )
                  }
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) =>
                    (
                      <Page>
                        <Palette
                          authUser={this.state.authUser}
                          firebase={this.props.firebase}
                          paletteID={routeProps.match.params.id}
                        />
                      </Page>
                    )
                  }
                />
                <Route
                  path={"/palette/:paletteId/:colorId"}
                  render={(routeProps) =>
                    (
                      <Page>
                        <SingleColorPalette
                          authUser={this.state.authUser}
                          firebase={this.props.firebase}
                          colorId={routeProps.match.params.colorId}
                          paletteID={routeProps.match.params.paletteId}
                        />
                      </Page>
                    )
                  }
                />
                <Route
                  path={"/signup"}
                  render={(routeProps) =>
                    (
                      <Page>
                        <SignUpPage/>
                      </Page>
                    )
                  }
                />
                <Route
                  path={"/signin"}
                  render={(routeProps) =>
                    (
                      <Page>
                        <SignInPage/>
                      </Page>
                    )
                  }
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
      )}/>
    );
  }
}

export default withFirebase(App);