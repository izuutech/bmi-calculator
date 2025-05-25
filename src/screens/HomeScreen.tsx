import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Alert} from 'react-native';
import BMIForm from '../components/BMIForm';
import ResultDisplay from '../components/ResultDisplay';
import {calculateBMI, getBMICategory} from '../utils/bmiCalculator';
import {styles} from '../assets/styles';
import {UserData, BMIResult, HomeScreenProps, BMICategory} from '../types';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [bmiData, setBmiData] = useState<BMIResult | null>(null);
  const [userData, setUserData] = useState<UserData>({
    age: '',
    weight: '',
    height: '',
    sex: 'male',
  });

  const handleCalculate = () => {
    const {weight, height, age} = userData;

    if (!weight || !height) {
      Alert.alert('Error', 'Please enter both weight and height');
      return;
    }
    if (isNaN(Number(weight)) || isNaN(Number(age)) || isNaN(Number(height))) {
      Alert.alert('Error', 'Weight, age and height must be a number');
      return;
    }

    const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
    const category = getBMICategory(bmi);

    setBmiData({
      value: bmi.toFixed(1),
      category,
    });
  };

  const handleRecipeNavigation = () => {
    if (!bmiData) {
      Alert.alert('Error', 'Please calculate your BMI first');
      return;
    }
    navigation.navigate('Recipe', {bmiCategory: bmiData.category});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        accessible={true}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="BMI Calculator Screen">
        <Text style={styles.title}>BMI Calculator</Text>

        <BMIForm
          userData={userData}
          setUserData={setUserData}
          handleCalculate={handleCalculate}
        />

        {bmiData && (
          <ResultDisplay
            bmiData={bmiData}
            onRecipePress={handleRecipeNavigation}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
