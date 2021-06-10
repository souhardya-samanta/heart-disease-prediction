import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, TextInput, RadioButton, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Slider from '@react-native-community/slider';
export const Predict = () => {
  const [sex, setSex] = React.useState(1);
  const [chestPain, setChestPain] = React.useState(1);
  const [fastBp, setFastBp] = React.useState(1);
  const [recg, setRecg] = React.useState(0);
  const [exAngia, setExAngia] = React.useState(1);
  const [slope, setSlope] = React.useState(0);
  const [fluoro, setFluoro] = React.useState(0);
  const [thal, setThal] = React.useState(0);
  const [age, setAge] = React.useState('');
  const [restBp, setRestBp] = React.useState('');
  const [serum, setSerum] = React.useState('');
  const [maxHr, setMaxHr] = React.useState('');
  const [old, setOld] = React.useState('');
  return (
    <View style={styles.main}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scroll}
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
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Age"
          keyboardType={'numeric'}
          value={age}
          onChangeText={v => setAge(v)}
        />
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
              <RadioButton.Android color="#6400EE" value={1} />
            </View>
            <View style={styles.row}>
              <Text>Atypical Angia</Text>
              <RadioButton.Android color="#6400EE" value={2} />
            </View>
            <View style={styles.row}>
              <Text>Non-angial Pain</Text>
              <RadioButton.Android color="#6400EE" value={3} />
            </View>
            <View style={styles.row}>
              <Text>Asymptomatic</Text>
              <RadioButton.Android color="#6400EE" value={4} />
            </View>
          </RadioButton.Group>
        </Card>
        <View style={styles.smallGap} />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Resting BP"
          placeholder="mmHg"
          keyboardType={'numeric'}
          value={restBp}
          onChangeText={v => setRestBp(v)}
        />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Serum Cholesterol level"
          placeholder="mm/dL"
          keyboardType={'numeric'}
          value={serum}
          onChangeText={v => setSerum(v)}
        />
        <View style={styles.smallGap} />
        <Card style={styles.otherCard}>
          <Text style={styles.headText}>
            Is fasting blood sugar more than 120 mg/dL ?
          </Text>
          <RadioButton.Group
            onValueChange={newValue => setFastBp(newValue)}
            value={fastBp}>
            <View style={styles.row}>
              <Text>Yes</Text>
              <RadioButton.Android color="#6400EE" value={1} />
            </View>
            <View style={styles.row}>
              <Text>No</Text>
              <RadioButton.Android color="#6400EE" value={0} />
            </View>
          </RadioButton.Group>
        </Card>
        <View style={styles.smallGap} />
        <Card style={styles.otherCard}>
          <Text style={styles.headText}>
            Resting Electrocardiographic results
          </Text>
          <RadioButton.Group
            onValueChange={newValue => setRecg(newValue)}
            value={recg}>
            <View style={styles.row}>
              <Text>Normal</Text>
              <RadioButton.Android color="#6400EE" value={0} />
            </View>
            <View style={styles.row}>
              <Text>ST segment deviations & T wave (ST-T) alterations</Text>
              <RadioButton.Android color="#6400EE" value={1} />
            </View>
            <View style={styles.row}>
              <Text>Left Ventricular Hypertrophy (LVH) ECG</Text>
              <RadioButton.Android color="#6400EE" value={2} />
            </View>
          </RadioButton.Group>
        </Card>
        <View style={styles.smallGap} />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Max. Heart Rate"
          keyboardType={'numeric'}
          value={maxHr}
          onChangeText={v => setMaxHr(v)}
        />
        <View style={styles.smallGap} />
        <Card style={styles.otherCard}>
          <Text style={styles.headText}>Exercise induced angia ?</Text>
          <RadioButton.Group
            onValueChange={newValue => setExAngia(newValue)}
            value={exAngia}>
            <View style={styles.row}>
              <Text>Yes</Text>
              <RadioButton.Android color="#6400EE" value={1} />
            </View>
            <View style={styles.row}>
              <Text>No</Text>
              <RadioButton.Android color="#6400EE" value={0} />
            </View>
          </RadioButton.Group>
        </Card>
        <View style={styles.smallGap} />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Oldpeak"
          placeholder="ST depression induced by exercise relative to rest"
          keyboardType={'numeric'}
          value={old}
          onChangeText={v => setOld(v)}
        />
        <View style={styles.smallGap} />
        <Card style={styles.otherCard}>
          <Text style={styles.headText}>
            The slope of the peak exercise ST Segment
          </Text>
          <RadioButton.Group
            onValueChange={newValue => setSlope(newValue)}
            value={slope}>
            <View style={styles.row}>
              <Text>Up sloping</Text>
              <RadioButton.Android color="#6400EE" value={1} />
            </View>
            <View style={styles.row}>
              <Text>Flat</Text>
              <RadioButton.Android color="#6400EE" value={2} />
            </View>
            <View style={styles.row}>
              <Text>Down sloping</Text>
              <RadioButton.Android color="#6400EE" value={3} />
            </View>
          </RadioButton.Group>
        </Card>
        <View style={styles.smallGap} />
        <Card style={styles.otherCard}>
          <Text style={styles.headText}>
            Number of major blood vessels coloured by Fluoroscopy
          </Text>
          <Text style={styles.fluoroText}>{fluoro}</Text>
          <Slider
            minimumValue={0}
            maximumValue={3}
            step={1}
            value={fluoro}
            onValueChange={setFluoro}
            minimumTrackTintColor="#6400EE"
            maximumTrackTintColor="#000000"
            thumbTintColor="#6400EE"
          />
        </Card>
        <View style={styles.smallGap} />
        <Card style={styles.otherCard}>
          <Text style={styles.headText}>Thalassemia type</Text>
          <RadioButton.Group
            onValueChange={newValue => setThal(newValue)}
            value={thal}>
            <View style={styles.row}>
              <Text>Normal</Text>
              <RadioButton.Android color="#6400EE" value={0} />
            </View>
            <View style={styles.row}>
              <Text>Fixed Defect</Text>
              <RadioButton.Android color="#6400EE" value={1} />
            </View>
            <View style={styles.row}>
              <Text>Reversible Defect</Text>
              <RadioButton.Android color="#6400EE" value={2} />
            </View>
          </RadioButton.Group>
        </Card>
      </KeyboardAwareScrollView>
      <Button
        disabled={
          !age.trim() ||
          !restBp.trim() ||
          !serum.trim() ||
          !maxHr.trim() ||
          !old.trim()
        }
        style={styles.button}
        mode="contained"
        onPress={() =>
          console.log([
            parseFloat(age),
            parseFloat(sex),
            parseFloat(chestPain),
            parseFloat(restBp),
            parseFloat(serum),
            parseFloat(fastBp),
            parseFloat(recg),
            parseFloat(maxHr),
            parseFloat(exAngia),
            parseFloat(old),
            parseFloat(slope),
            parseFloat(fluoro),
            parseFloat(thal),
          ])
        }>
        SUBMIT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
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
  scroll: {
    padding: 5,
  },
  fluoroText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#6400EE',
    paddingVertical: 10,
  },
  button: {
    borderRadius: 0,
    height: 40,
  },
});
