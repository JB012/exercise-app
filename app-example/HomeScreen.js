import React from 'react'
import { SearchBar } from 'react-native-screens'
import { useState } from 'react'

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');
    return (
    <SearchBar 
    placeholder='Type here...'
    value={search}
    onChangeText={setSearch}
    />
  )
}

export default HomeScreen