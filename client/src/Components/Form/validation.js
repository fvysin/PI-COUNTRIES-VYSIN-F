const validation = (input) => {
    const errors = {};
  
    if (!input.name) {
      errors.name = "Required field";
    } else if (!/^[A-Za-z\s]+$/.test(input.name)) {
      errors.name = "Name can only contain letters and spaces.";
    } else if (input.name.length < 3) {
      errors.name = "The length can't be less than 3 words";
    }
    else if (input.name.length > 20) {
      errors.name = "The length can't be more than 20 words";
    }
  
    if (!input.difficulty) {
      errors.difficulty = "Difficulty is required.";
    } else if (input.difficulty < 1 || input.difficulty > 5) {
      errors.difficulty = "The difficulty range can only be from 1 to 5";
    }
  
    if (input.duration < 1 || input.duration > 24) {
      errors.duration = "The duration must be between 1 and 24 hours";
    }
  
    if (!input.season) {
      errors.season = "Season is required.";
    }
  
    if (!input.countries || input.countries.length === 0) {
      errors.countries = "At least one country is required.";
    }
  
    return errors;
  };

  export default validation