import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHanlder = enteredText => {
        setEnteredGoal(enteredText);
    };

    const onAddGoal = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    };

    const cancelButtonHandler = () => {
        
    };

    return  <Modal visible={props.visible} animationType="slide">
                <View style={styles.inputContainer}>
                    <TextInput
                    placeholder="Add Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHanlder}
                    value={enteredGoal}/>
                    <View style={styles.buttonHolder}>
                        <View style={styles.button}>
                            <Button
                                title="CANCEL"
                                color='red'
                                onPress={props.onCancel}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="ADD"
                                onPress={onAddGoal}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flex: 1
      },
      input: {
          width: '80%',
          borderColor: 'black',
          borderWidth: 0.5,
          padding: 10,
          marginBottom: 10
      },
      buttonHolder: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%'
      },
      button: {
          width: '40%'
      }
});

export default GoalInput;