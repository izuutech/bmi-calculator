import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Define types for BMI calculation
export type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export interface BMIResult {
  value: string;
  category: BMICategory;
}

export interface UserData {
  age: string;
  weight: string;
  height: string;
  sex: 'male' | 'female';
}

export interface Recipe {
  name: string;
  description: string;
  videoId: string;
  videoUrl: string;
}

export interface HomeScreenProps {
  navigation: any; // Would import proper type from @react-navigation
}

export type RootStackParamList = {
  Home: undefined;
  Recipe: {bmiCategory: BMICategory};
};

export type RecipeScreenRouteProp = RouteProp<RootStackParamList, 'Recipe'>;
export type RecipeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Recipe'
>;

export interface RecipeScreenProps {
  route: RecipeScreenRouteProp;
  navigation: RecipeScreenNavigationProp;
}
