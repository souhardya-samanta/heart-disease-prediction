import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card, TextInput, RadioButton} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export const Predict = () => {
  const [sex, setSex] = React.useState(1);
  const [chestPain, setChestPain] = React.useState(0);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.main}
      keyboardShouldPersistTaps={'handled'}>
      <View style={styles.smallGap} />
      <Card style={styles.card}>
        <Text style={styles.headText}>
          Please enter the following details as tested by a trusted healthcare
          professional. The following data will be evaluated to find wether an
          individual has heart disease or not.
        </Text>
      </Card>
      <View style={styles.smallGap} />
      <TextInput mode="outlined" style={styles.textInput} label="Age" />
      <View style={styles.smallGap} />
      <Card style={styles.otherCard}>
        <Text style={styles.headText}>Sex</Text>
        <RadioButton.Group
          onValueChange={newValue => setSex(newValue)}
          value={sex}>
          <View style={styles.row}>
            <Text>Male</Text>
            <RadioButton.Android color="#6400EE" value={1} />
          </View>
          <View style={styles.row}>
            <Text>Female</Text>
            <RadioButton.Android color="#6400EE" value={0} />
          </View>
        </RadioButton.Group>
      </Card>
      <View style={styles.smallGap} />
      <Card style={styles.otherCard}>
        <Text style={styles.headText}>Chest pain type</Text>
        <RadioButton.Group
          onValueChange={newValue => setChestPain(newValue)}
          value={chestPain}>
          <View style={styles.row}>
            <Text>Typical Angia</Text>
            <RadioButton.Android color="#6400EE" value={0} />
          </View>
          <View style={styles.row}>
            <Text>Atypical Angia</Text>
            <RadioButton.Android color="#6400EE" value={1} />
          </View>
          <View style={styles.row}>
            <Text>Non-angial Pain</Text>
            <RadioButton.Android color="#6400EE" value={2} />
          </View>
          <View style={styles.row}>
            <Text>Asymptomatic</Text>
            <RadioButton.Android color="#6400EE" value={3} />
          </View>
        </RadioButton.Group>
      </Card>
      <View style={styles.smallGap} />
      <TextInput
        mode="outlined"
        style={styles.textInput}
        label="Resting BP"
        placeholder="mmHg"
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 5,
  },
  card: {
    padding: 5,
    elevation: 4,
  },
  headText: {
    color: '#626262',
  },
  smallGap: {
    height: 10,
  },
  textInput: {
    height: 45,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otherCard: {
    padding: 5,
  },
});
