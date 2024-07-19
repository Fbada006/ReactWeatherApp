import {useEffect, useState} from "react";
import Geolocation from "@react-native-community/geolocation";
import {WEATHER_API_KEY} from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherForecast | null>(null);
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      );
      const data: WeatherForecast = await res.json();
      setWeather(data);
    } catch (error) {
      setError(`Could not fetch weather`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Geolocation.requestAuthorization(
      () => {},
      error => {
        setError("Permission to access location was denied");
        return;
      },
    );

    Geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      error => {
        setError(`Error getting the current location ${error.message}`);
      },
    );

    (async () => {
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};

export interface WeatherForecast {
  city: City;
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
}

// New interface for the city object
export interface City {
  id: string;
  name: string;
  country: string;
  population: number;
  sunrise: number;
  sunset: number;
  coord: Coord;
}

// New interface for the coordinate object
export interface Coord {
  lat: number;
  lon: number;
}

// New interface for the main weather details
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

// New interface for individual weather conditions
export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// New interface for the wind details
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
  direction: string;
}

// New interface for cloud details
export interface Clouds {
  all: number;
}

// New interface for the listItem array elements
export interface ListItem {
  dt: number;
  main: Main;
  weather: WeatherCondition[];
  base: string;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt_txt: string;
}
