import React from 'react';
import ListPizza from './components/ListPizza';
import Header from './components/Header';
import items from './data/data';
import users from './data/UserData';
import ButtonAdd from './components/ButtonAdd'


export default class App extends React.Component {
  render() {
    return (
      <>
        {/* user pode ser mudado até 5, modificando entre os integrantes do grupo */}
        <Header user={users[0]} />
        <ListPizza items={items}></ListPizza>
        <ButtonAdd/>
     </>
    )
  }
}