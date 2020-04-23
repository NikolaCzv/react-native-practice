import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHanlder = enteredText => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add Course Goal"
        style={styles.inputField}
        onChangeText={goalInputHanlder}
        value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
          <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
          </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputField: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  }
});
