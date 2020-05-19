import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import ListPizza from './components/ListPizza'

//Valores dos cards. Pode ser um JSON. caso queiram podemos mudar depois. Falta incluir imagem e o nome do usuário
const items = [
    {namePizza : 'André', value : '35.60', price : '35.60', description : 'Muito boa, '},
    {namePizza : 'André', value : '35.60', price : '35.60', description : 'Muito boa, '},
    {namePizza : 'André', value : '35.60', price : '35.60', description : 'Muito boa, '},
    {namePizza : 'André', value : '35.60', price : '35.60', description : 'Muito boa, '}
]


export default class App extends React.Component{
  render(){
    return(
     <View>
      <ListPizza items={items}></ListPizza>
     </View>
    )
  }
}