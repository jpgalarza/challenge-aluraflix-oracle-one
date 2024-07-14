import data from '../data/data.json';

export const validations = (target) => {
  const { name } = target;

  if(name == "title") {
    return titleValidation(target);
  }

  if(name === 'category') {
    return categoryValidation(target);
  }

  if(name === 'image' || name === 'video') {
    return urlValidation(target);
  }

  if(name == "description") {
    return descriptionValidation(target);
  }
};


const titleValidation = (target) => {
  const value = target.value.trim();

  if (value.length < 2 || value.length > 50) {
    target.setCustomValidity('error');
  }
};


const categoryValidation = (target) => {
  const value = target.value.trim();

  if(!data.categories.some(category => category.id === value)) {
    target.setCustomValidity('error');
  }
}


const urlValidation = (target) => {
  const pattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;
  const value = target.value.trim();

  if (value === '' || !pattern.test(value)) {
    target.setCustomValidity('error');
  }
};


const descriptionValidation = (target) => {
  const value = target.value.trim();

  if (value === '' || value.length < 10 || value.length > 300) {
    target.setCustomValidity('error');
  }
};

