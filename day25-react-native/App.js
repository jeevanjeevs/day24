import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: '50%',
    height: 100,
    marginBottom: 10,
  },
  firstBox: {
    marginTop: 50,
    backgroundColor: 'grey',
  },
  expandedBox: {
    width: '100%',
  },
  boxColors: ['coral', 'green', 'blue', 'orange', 'slategrey'],
});

export default function App() {
  const [enlargedBoxes, setEnlargedBoxes] = useState([false, false, false, false, false]);

  const pressHandler = (index) => {
    const newEnlargedBoxes = [...enlargedBoxes];
    newEnlargedBoxes[index] = !newEnlargedBoxes[index];
    setEnlargedBoxes(newEnlargedBoxes);
  };

  return (
    <View>
      <TouchableHighlight onPress={() => pressHandler(0)}>
        <View
          style={[
            styles.box,
            styles.firstBox,
            enlargedBoxes[0] && styles.expandedBox,
            { backgroundColor: enlargedBoxes[0] ? 'backgroundColor' : styles.boxColors[0] },
          ]}
        ></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => pressHandler(1)}>
        <View
          style={[
            styles.box,
            { backgroundColor: styles.boxColors[1] },
            enlargedBoxes[1] && styles.expandedBox,
          ]}
        ></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => pressHandler(2)}>
        <View
          style={[
            styles.box,
            { backgroundColor: styles.boxColors[2] },
            enlargedBoxes[2] && styles.expandedBox,
          ]}
        ></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => pressHandler(3)}>
        <View
          style={[
            styles.box,
            { backgroundColor: styles.boxColors[3] },
            enlargedBoxes[3] && styles.expandedBox,
          ]}
        ></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => pressHandler(4)}>
        <View
          style={[
            styles.box,
            { backgroundColor: styles.boxColors[4] },
            enlargedBoxes[4] && styles.expandedBox,
          ]}
        ></View>
      </TouchableHighlight>
    </View>
  );
}
