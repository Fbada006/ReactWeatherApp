class WeatherCondition {
  icon: String;
  message: String;
  backgroundColor: String;

  constructor(icon: String, message: String, backgroundColor: String) {
    this.icon = icon;
    this.message = message;
    this.backgroundColor = backgroundColor;
  }
}

export const weatherType = {
  ThunderStorm: new WeatherCondition("zap", "It could get noisy", "#000000"),
  Drizzle: new WeatherCondition("cloud-rain", "It might rain a little", "#36454F"),
  Rain: new WeatherCondition("umbrella", "You will need an umbrella", "#0000FF"),
  Snow: new WeatherCondition("cloud-snow", "Let's build a snow man", "#7f6065"),
  Clear: new WeatherCondition("sun", "It is perfect t-shirt weather", "#e47200"),
  Clouds: new WeatherCondition("cloud", "You could live in the clouds", "#363636"),
  Haze: new WeatherCondition("wind", "It might be a bit damp", "#58586e"),
  Mist: new WeatherCondition("align-justify", "It might be hard to see", "#3e3e37"),
};
