import React, {useState} from "react";
import { Button, SafeAreaView, Text, View, FlatList, Switch } from "react-native";



const data = [
  {id: 0, name: "cafe.exe", isFavorite: true},
  {id: 1, name: "KafaKafe", isFavorite: false},
  {id: 2, name: "BugG", isFavorite: false},
  {id: 3, name: "Rock'n Code", isFavorite: true},
  {id: 4, name: "do(drink)", isFavorite: false},
  {id: 5, name: "esc", isFavorite: false},
]

function App(){
  const [coffeeList, setCoffeeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavortiesChange(isFavoriteSelected){
    setShowOnlyFavorites(isFavoriteSelected)
    isFavoriteSelected ? setCoffeeList(coffeeList.filter((cafe)=> 
    cafe.isFavorite)) : setCoffeeList(data);
  }

  const [counter, setCounter] = useState(0)
  function increaseCounter(){
    setCounter(counter+1)
  }
  function decreaseCounter(){
    setCounter(counter-1)
  }
  function reload(){
    setCounter(counter-counter)
  }
  return(
    <SafeAreaView>
      <Text style={{fontSize:40, textAlign:'center', color:'black', backgroundColor:'orange', borderRadius:10, margin:20, borderWidth:6, borderColor:'black', fontWeight:'bold'}}>Counter: {counter}</Text>
      <View style={{margin:10}}>
      <Button title="INCREASE" onPress={increaseCounter}/>
      <Button title="DECREASE" onPress={decreaseCounter}/>
      <Button title="RELOAD" onPress={reload}/>
      </View>
      <View style={{margin: 10,}}>
        <Text style={{fontSize:25, fontWeight:"bold", color:"black"}}>Show Only Favorites</Text>
      </View>
      <Switch style={{marginRight:340}} value={showOnlyFavorites} onValueChange={onFavortiesChange}/>
      <FlatList data={coffeeList} renderItem={({item})=><Text style={{fontSize:25, fontWeight:"bold", color:"black", textAlign:"center"}}>{item.name}</Text>}/>
    </SafeAreaView>
  )
}

export default App