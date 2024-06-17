import "../styles.css";

export enum TemperatureScale {
  CELCIUS = "°C",
  FAHRENHEIT = "°F",
}

export type TTemperature = {
  scale: TemperatureScale;
  temperature: string;
};

type TTemperatureInputProps = {
  scale: TemperatureScale;
  value: string;
  onChange: (value: string) => void;
};

export const TemperatureInput = ({ scale, value, onChange }: TTemperatureInputProps) => {
  
  
 return (
    <fieldset className="card-temperature">
      <label className="label-temperature">
        Введите температуру в {scale}:
        <input
          className="input-temperature"
          name="name"
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
};