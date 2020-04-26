import React, {useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal }]);
  }

  const removeGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList 
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <GoalItem
          id={itemData.item.id}
          onDelete={removeGoal}
          title={itemData.item.value}/>)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  }
});
