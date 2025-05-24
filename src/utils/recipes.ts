import {Recipe, BMICategory} from '../types';

const recipes: Record<BMICategory, Recipe[]> = {
  underweight: [
    {
      name: 'High-Calorie Protein Smoothie',
      description:
        'This nutrient-dense smoothie is packed with healthy calories and protein to help with healthy weight gain.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Avocado Toast with Eggs',
      description:
        'A simple yet calorie-rich breakfast option with healthy fats and proteins.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ],
  normal: [
    {
      name: 'Balanced Quinoa Salad',
      description:
        'A perfectly balanced meal with proteins, carbs, and healthy fats to maintain your weight.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Grilled Chicken with Vegetables',
      description:
        'Lean protein with a variety of colorful vegetables for a balanced diet.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ],
  overweight: [
    {
      name: 'Low-Calorie Vegetable Soup',
      description:
        'A filling yet low-calorie soup packed with nutrients to support healthy weight loss.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Grilled Fish with Steamed Vegetables',
      description:
        'Lean protein with fiber-rich vegetables for a satisfying, low-calorie meal.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ],
  obese: [
    {
      name: 'Detox Green Smoothie',
      description:
        'A nutrient-packed smoothie to kickstart a healthier eating pattern.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Baked Chicken with Roasted Vegetables',
      description:
        'A healthy, low-carb meal option that is satisfying and nutritious.',
      videoId: 'dQw4w9WgXcQ',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ],
};

export const getRecipeByCategory = (
  category: BMICategory,
  getRelated = false,
): Recipe | Recipe[] => {
  const categoryRecipes = recipes[category] || recipes.normal;
  if (getRelated) {
    // Return all except the first one as related recipes
    return categoryRecipes.slice(1);
  }
  return categoryRecipes[0];
};
