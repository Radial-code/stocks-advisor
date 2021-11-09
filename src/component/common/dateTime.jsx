const GetTime = (date) => {
  let timeInMs = new Date() - new Date(date);
  const timeInhours = timeInMs / 3600000;

  if (timeInhours / 24 > 30) {
    return Math.floor(timeInhours / 24 / 30) + " month ago";
  } else if (timeInhours >= 24) {
    return Math.floor(timeInhours / 24) + " days ago";
  } else if (timeInhours > 1) {
    return Math.floor(timeInhours) + " hr ago";
  } else if (timeInhours < 1 && timeInhours > 0.1) {
    return Math.floor(timeInhours.toFixed(2) * 60) + " min ago";
  } else if (timeInhours < 0.1) {
    return "Just now";
  }
  return timeInhours;
};

export default GetTime;
