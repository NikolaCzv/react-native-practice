import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHanlder = enteredText => {
        setEnteredGoal(enteredText);
      }

    return  <View style={styles.inputContainer}>
                <TextInput
                placeholder="Add Course Goal"
                style={styles.inputField}
                onChangeText={goalInputHanlder}
                value={enteredGoal}/>
                <Button title="ADD" onPress={() => props.addGoalHandler(enteredGoal)}/>
            </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
      }
})

export default GoalInput;