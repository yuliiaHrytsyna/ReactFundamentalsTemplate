const getTwoDigitsValue = (value) => (value < 10 ? `0${value}` : String(value));

export const getCourseDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  duration = `${getTwoDigitsValue(hours)}:${getTwoDigitsValue(minutes)} hour${
    hours !== 1 ? "s" : ""
  }`;

  return duration;
};
