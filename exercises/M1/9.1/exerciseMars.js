// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log("Returned planet: ", mars),4000) ;
// };

// getPlanet(); // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 500);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback, error) => {
  const timeDelay = messageDelay();
  setTimeout(() => {
    const temperature = getMarsTemperature();
    const message = `Mars temperature is: ${temperature} degree Celsius`;
    const attempt = Math.random() >= 0.5;
    if(attempt) {
      error('Robot is busy');
    }
    else {
      console.log(message);
      setTimeout(() => callback(temperature), timeDelay);  
    }
    }, timeDelay);
}

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, handleError); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo