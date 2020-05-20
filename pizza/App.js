import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import ListPizza from './components/ListPizza'
import Header from './components/Header'
import items from './data/data'
import user from './data/UserData'


export default class App extends React.Component{
  render(){
    return(
     <View>
       <Header user={user.users[1]}/>
    
      <ListPizza items={items}></ListPizza>
     </View>
    )
  }
}