import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Images from './Images'


function DetailScreen({navigation, route}) {
    //Include commas for arrays that have multiple strings.
    function handleText(textArr) {
        let text = "";
        for (let i = 0; i < textArr.length; i++) {
            if (i === textArr.length - 1) {
                text += textArr[i];
            }
            else {
                text += textArr[i] + ', ';
            }
        }
        return text;
    }

    function minorMuscleExists(item) {
      if (item.fields["Minor Muscle"]) {
        return (<Text>Minor Muscle: {handleText(item.fields["Minor Muscle"])}</Text>)
      }
    }

    function notesExists(item) {
      if (item.fields["Notes"]) {
        return (<Text>Notes: {item.fields["Notes"]}</Text>)
      }
    }

    function modificationExists(item) {
      if (item.fields["Modifications"]) {
        return (<Text>Modifications: {item.fields["Modifications"]}</Text>)
      }
    }

    const item = route.params.data;
    const imgFileName = item.fields.Example[0]["filename"];

  return (
    <View style={{flex:1}}>
        <Text>Equipment: {handleText(item.fields["Equipment"])}</Text>
        <Text>Exercise Type: {handleText(item.fields["Exercise Type"])}</Text>
        <Text>Major Muscle: {handleText(item.fields["Major Muscle"])}</Text>
        {minorMuscleExists(item)}
        {notesExists(item)}
        {modificationExists(item)}
        <Image style={styles.imageContainer}
        source={Images[imgFileName]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width:'70%',
    height:'40%'
  }

});

export default DetailScreen