import React from 'react'
import HomeComponent from "../../components/home";
import Menu from "../../components/partials/Menu";


export default class HomePage extends React.Component {

  render() {
    return (
      <>
        <Menu/>
        <HomeComponent/>
      </>
    )
  }
}
