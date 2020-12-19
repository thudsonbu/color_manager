import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { generatePalette } from './Helpers/colorHelpers';

import Palette from './Palette/Palette';
import SingleColorPalette from './Palette/SingleColorPalette';
import NewPaletteForm from './PaletteForm/NewPaletteForm';
import PaletteList from './Home/PaletteList';
import SignUpPage from './SignUp/index';
import SignInPage from './SignIn';
import Page from "./Page";

import { withFirebase } from './Firebase'

class App extends Component {
  constructor(props) {
    super(props)
    // const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: [],
      index: 0,
      authUser: null
    };
    this.saveNewPalette = this.saveNewPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.getPalettes = this.getPalettes.bind(this);
  }

  componentDidMount() {
    this.authlistener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser: authUser })
        : this.setState({ authUser: null })
      },
    );
    this.getPalettes();
    console.log(this.props);
  }

  componentWillUnmount() {
    this.authlistener();
  }

  getPalettes(){
    this.props.firebase.getPalettes()
      .then((palettes) => {
          let palettesArray = []
          palettes.forEach((palette) => {
            palettesArray.push(palette);
          })
          this.setState({
            palettes: palettesArray
          })
        }
      )
      .catch((error) => {
          console.log(error);
        }
      );
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id
    })
  }

  saveNewPalette(newPalette) {
    this.props.firebase.saveNewPalette(newPalette)
      .then(() => {
        console.log("Save Succesful");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveEditedPalette(editedPalette, id) {
    this.props.firebase.saveEditedPalette(editedPalette, id)
      .then(() => {
        console.log("Save Succesful");
      })
      .catch((error) => {
        console.log(error);
      });
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
                          authUser={this.state.authUser}
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
                          authUser={this.state.authUser}
                          palette={this.findPalette(routeProps.match.params.id)}
                          savePalette={this.savePalette}
                          saveEditedPalette={this.saveEditedPalette}
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
                          authUser={this.state.authUser}
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
                          authUser={this.state.authUser}
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
