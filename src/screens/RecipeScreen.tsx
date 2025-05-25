import React from 'react';
import {View, ScrollView, Text, Linking, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {getRecipeByCategory} from '../utils/recipes';
import RecipeCard from '../components/RecipeCard';
import {styles} from '../assets/styles';
import {Recipe, RecipeScreenProps} from '../types';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RecipeScreen: React.FC<RecipeScreenProps> = ({route, navigation}) => {
  const {bmiCategory} = route.params;
  const recipe = getRecipeByCategory(bmiCategory) as Recipe;
  const relatedRecipes = getRecipeByCategory(bmiCategory, true) as Recipe[];

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header with Back Button */}
      <View style={styles.recipeHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Go back"
          accessibilityRole="button">
          <Icon name="arrow-back" size={24} color="#4CAF50" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  );
};

export default RecipeScreen;
