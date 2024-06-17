import { useState } from "react";
import {
  TTemperature,
  TemperatureInput,
  TemperatureScale,
} from "./components/TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "./components/utils";

/*Необходимо поднять общее состояние этих компонентов 
в компонент App и дописать нужные обработчики событий так, 
чтобы при изменении значения температуры в одном поле ввода 
обновлялось значение температуры в другом поле ввода. */
export const App = () => {
  const [value, setValue] = useState<TTemperature>({
    scale: TemperatureScale.CELCIUS,
    temperature: "",
  });

  const handleCelsiusChange = (temperature: string) => {
    setValue({ scale: TemperatureScale.CELCIUS, temperature });
  };

  const handleFahrenheitChange = (temperature: string) => {
    setValue({ scale: TemperatureScale.FAHRENHEIT, temperature });
  };

  const celsiusValue =
    value.scale === TemperatureScale.CELCIUS
      ? value.temperature
      : tryConvert(value.temperature, toCelsius);

  const fahrenheitValue =
    value.scale === TemperatureScale.FAHRENHEIT
      ? value.temperature
      : tryConvert(value.temperature, toFahrenheit);

  return (
    <div className="page">
      <h1>Конвертер температуры</h1>
      <div className="content">
        <TemperatureInput
          scale={TemperatureScale.CELCIUS}
          value={celsiusValue}
          onChange={handleCelsiusChange}
        />
        <TemperatureInput
          scale={TemperatureScale.FAHRENHEIT}
          value={fahrenheitValue}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};
