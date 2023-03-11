const DAY_IN_SECONDS = 86400;

const secondsToString = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days && `${days}d`} ${hours % 24 && `${hours % 24}h`} ${
    minutes % 60 && `${minutes % 60}m`
  } ${seconds % 60 && `${seconds % 60}s`}`;
};

const secondsToDays = (seconds: number): number => {
  return seconds / DAY_IN_SECONDS;
};
export { secondsToString, secondsToDays };
