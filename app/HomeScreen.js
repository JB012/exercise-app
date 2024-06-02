import React from 'react'
import { useState } from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, Pressable} from 'react-native'
import exercises from './exercises.json'

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');
  
  function filterSearch(item) {
    if (search === "" || item.fields.Exercise.toLowerCase().includes(search.toLowerCase())) {
      return(
      <View style={styles.itemContainer}>
        <Pressable onPress={() => navigation.navigate("DetailScreen", {data: item})}><Text>{item.fields.Exercise}</Text></Pressable>
      </View>
      );
    }
  }

  return (
  <View style={{flex: 1}}>
    <TextInput
    placeholder='Type here...'
    value={search}
    onChangeText={setSearch}
    clearButtonMode='always'
    style={styles.searchBox}
    autoCorrect={false}
    />
    <FlatList
    data={exercises}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => filterSearch(item)}
    />

  </View>
)
}

const styles = StyleSheet.create({
  searchBox: {
    borderColor:'#ccc',
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:20,
    paddingVertical:10
  },
  itemContainer: {
    backgroundColor:'#c4e8f2',
    borderColor:'#c4e8f2',
    borderWidth:3,
    borderRadius:8,
    padding:5,
    margin:10
  }
})


export default HomeScreen