import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
    textAlign: 'center',
  },

  /* BMI Form Specific Styles */
  formContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#A0A0A0',
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#2E2E2E',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#252525',
    fontSize: 16,
    color: '#E0E0E0',
  },

  /* Dropdown Styles */
  dropdown: {
    height: 50,
    borderColor: '#2E2E2E',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#252525',
  },
  dropdownPlaceholder: {
    fontSize: 16,
    color: '#707070',
  },
  dropdownSelectedText: {
    fontSize: 16,
    color: '#E0E0E0',
  },
  dropdownInputSearch: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#252525',
    color: '#E0E0E0',
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    tintColor: '#4CAF50',
  },

  /* Button Styles */
  calculateButton: {
    backgroundColor: '#388E3C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // Recipe Screen Styles
  recipeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  backButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '500',
  },
  recipeContainer: {
    paddingBottom: 30,
  },
  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  recipeDescription: {
    fontSize: 16,
    marginBottom: 20,
    color: '#B0B0B0',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#4CAF50',
  },
  videoContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  // Related Recipes
  relatedRecipeCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  relatedRecipeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#E0E0E0',
  },
  relatedRecipeDescription: {
    fontSize: 14,
    color: '#A0A0A0',
  },

  //  dropdown menu styles
  dropdownContainer: {
    backgroundColor: '#252525',
    borderColor: '#2E2E2E',
    borderWidth: 1,
    borderRadius: 8,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#E0E0E0',
  },
});
