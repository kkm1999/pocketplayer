export const formatTime = (timeInSeconds) => {
    const result = new Date(Math.round(timeInSeconds) * 1000)
      .toISOString()
      .substring(11, 19);
    
    if (+result.substring(0, 2) > 0) {
      return result;
    } else {
      return result.substring(3);
    }
  };
  
  