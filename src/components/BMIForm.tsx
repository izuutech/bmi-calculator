import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from '../assets/styles';
import {UserData} from '../types';

interface BMIFormProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  handleCalculate: () => void;
}

const BMIForm: React.FC<BMIFormProps> = ({
  userData,
  setUserData,
  handleCalculate,
}) => {
  const sexOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  const handleChange = (name: keyof UserData, value: string) => {
    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userData.age}
        onChangeText={text => handleChange('age', text)}
        placeholder="Enter your age"
        accessibilityLabel="Age input"
      />

      <Text style={styles.label}>Weight (kg)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userData.weight}
        onChangeText={text => handleChange('weight', text)}
        placeholder="Enter weight in kg"
        accessibilityLabel="Weight input in kilograms"
      />

      <Text style={styles.label}>Height (cm)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userData.height}
        onChangeText={text => handleChange('height', text)}
        placeholder="Enter height in cm"
        accessibilityLabel="Height input in centimeters"
      />

      <Text style={styles.label}>Sex</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.dropdownPlaceholder}
        selectedTextStyle={styles.dropdownSelectedText}
        inputSearchStyle={styles.dropdownInputSearch}
        iconStyle={styles.dropdownIcon}
        data={sexOptions}
        search={false}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Select sex"
        value={userData.sex}
        onChange={item => handleChange('sex', item.value)}
        accessibilityLabel="Gender selection dropdown"
      />

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={handleCalculate}
        accessibilityRole="button"
        accessibilityLabel="Calculate BMI button">
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BMIForm;
