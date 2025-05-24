import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BMIResult} from '../types';

interface ResultDisplayProps {
  bmiData: BMIResult;
  onRecipePress: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  bmiData,
  onRecipePress,
}) => {
  // Get color based on BMI category
  const getBMIColor = (): string => {
    switch (bmiData.category) {
      case 'underweight':
        return '#FFA500'; // Orange
      case 'normal':
        return '#4CAF50'; // Green
      case 'overweight':
        return '#FFC107'; // Yellow
      case 'obese':
        return '#F44336'; // Red
      default:
        return '#2196F3'; // Blue (fallback)
    }
  };

  // Get recommendation message based on BMI category
  const getRecommendationMessage = (): string => {
    switch (bmiData.category) {
      case 'underweight':
        return 'Consider calorie-dense, nutrient-rich foods';
      case 'normal':
        return 'Maintain your healthy eating habits!';
      case 'overweight':
        return 'Try balanced meals with portion control';
      case 'obese':
        return 'Focus on nutrient-dense, lower-calorie options';
      default:
        return 'Check out these recommended recipes';
    }
  };

  // Capitalize first letter of category
  const formattedCategory =
    bmiData.category.charAt(0).toUpperCase() + bmiData.category.slice(1);

  return (
    <View
      style={styles.resultContainer}
      accessible={true}
      accessibilityLabel={`Your BMI is ${
        bmiData.value
      }, categorized as ${formattedCategory}. ${getRecommendationMessage()}`}>
      <Text style={styles.resultTitle}>Your BMI Result</Text>

      <View style={styles.bmiValueContainer}>
        <Text style={[styles.bmiValue, {color: getBMIColor()}]}>
          {bmiData.value}
        </Text>
        <Text style={styles.bmiUnit}>kg/m²</Text>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryLabel}>Category:</Text>
        <Text style={[styles.categoryValue, {color: getBMIColor()}]}>
          {formattedCategory}
        </Text>
      </View>

      <Text style={styles.recommendationText}>
        {getRecommendationMessage()}
      </Text>

      <TouchableOpacity
        style={[styles.recipeButton, {backgroundColor: getBMIColor()}]}
        onPress={onRecipePress}
        accessibilityRole="button"
        accessibilityLabel="View recommended recipes based on your BMI result">
        <Text style={styles.buttonText}>Recipes for You</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  bmiValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  bmiValue: {
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 6,
  },
  bmiUnit: {
    fontSize: 16,
    color: '#666',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 16,
    marginRight: 6,
    color: '#555',
  },
  categoryValue: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  recommendationText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    color: '#444',
    lineHeight: 22,
  },
  recipeButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ResultDisplay;
