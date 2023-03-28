export const formatTime = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  return minutes + ":" + remainingSeconds;
};
