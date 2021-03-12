//Обязательное поле
export const requiredField = (value) => {
  if (value) return undefined;

  return "Filed is required";
};

//creator валидатора. Передаем параметр и он возвращает валидатор. 
//Каждый раз возвращает новую функцию
export const maxLengthCreator = ( maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length  is ${maxLength} symbols`;
    return undefined; 
  };


