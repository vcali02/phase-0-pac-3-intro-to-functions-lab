function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
        //  block of code to be executed if condition1 is true
      } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
        //  block of code to be executed if the condition1 is false and condition2 is true
      } else if (string === "Let's have dinner together!"){
        return "I would love to!";
        //  block of code to be executed if the condition1 is false and condition2 is false
      }
  }
  