import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import seedColors from './Helpers/seedColors';
import { generatePalette } from './Helpers/colorHelpers';

import Palette from './Palette/Palette';
import SingleColorPalette from './Palette/SingleColorPalette';
import NewPaletteForm from './PaletteForm/NewPaletteForm';
import PaletteList from './Home/PaletteList';
import SignUpPage from './SignUp/index';
import LoginPage from './Login';
import Page from "./Page";

import firebase from "firebase";
import "firebase/auth";

class App extends Component {
  constructor(props) {
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors,
      index: 0
    };
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id
    })
  }

  savePalette(newPalette) {
    this.setState(
      {palettes: [...this.state.palettes, newPalette]},
      this.syncLocalStorage  
    )
  }

  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    )
  }

  deletePalette(id) {
    let filteredPalettes = this.state.palettes.filter((palette) => (palette.id !== id))
    this.setState(
      {palettes: filteredPalettes},
      this.syncLocalStorage
    )
  }

  render() {
    console.log(this.state.palettes);
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
                        <NewPaletteForm
                          palette={this.state.palettes[1]}
                          savePalette={this.savePalette}
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
                        <NewPaletteForm
                          palette={this.findPalette(routeProps.match.params.id)}
                          savePalette={this.savePalette}
                          saveEditedPalette={this.savePalette}
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
                          palettes={this.state.palettes}
                          deletePalette={this.deletePalette}
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
                          palette={generatePalette(this.findPalette(routeProps.match.params.id))}
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
                          colorId={routeProps.match.params.colorId}
                          palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
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
                  path={"/login"}
                  render={(routeProps) =>
                    (
                      <Page>
                        <LoginPage/>
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

export default App;
