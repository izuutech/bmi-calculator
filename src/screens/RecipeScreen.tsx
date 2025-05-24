import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, Linking} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {getRecipeByCategory} from '../utils/recipes';
import RecipeCard from '../components/RecipeCard';
import {styles} from '../assets/styles';
import {Recipe, BMICategory, RecipeScreenProps} from '../types';

// interface RecipeScreenProps {
//   route: {
//     params: {
//       bmiCategory: BMICategory;
//     };
//   };
// }

const RecipeScreen: React.FC<RecipeScreenProps> = ({route}) => {
  const {bmiCategory} = route.params;
  const recipe = getRecipeByCategory(bmiCategory);
  const relatedRecipes = getRecipeByCategory(bmiCategory, true);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.recipeContainer}
      accessible={true}
      accessibilityLabel="Recipe Screen">
      <Text style={styles.recipeTitle}>{recipe.name}</Text>
      <Text style={styles.recipeDescription}>{recipe.description}</Text>

      <Text style={styles.sectionTitle}>Cooking Video</Text>
      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={220}
          play={false}
          videoId={recipe.videoId}
          webViewProps={{
            accessible: true,
            accessibilityLabel: `YouTube video demonstrating how to cook ${recipe.name}`,
          }}
        />
      </View>

      <Text style={styles.sectionTitle}>Related Recipes</Text>
      {relatedRecipes.map((item, index) => (
        <RecipeCard
          key={index}
          recipe={item}
          onPress={() => Linking.openURL(item.videoUrl)}
        />
      ))}
    </ScrollView>
  );
};

export default RecipeScreen;
