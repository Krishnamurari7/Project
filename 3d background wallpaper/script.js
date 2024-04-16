function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourRotation = (hours % 12) * 30 + minutes / 2;
    const minuteRotation = minutes * 6 + seconds / 10;
    const secondRotation = seconds * 6;
  
    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");
  
    hourHand.style.transform = `rotateZ(${hourRotation}deg)`;
    minuteHand.style.transform = `rotateZ(${minuteRotation}deg)`;
    secondHand.style.transform = `rotateZ(${secondRotation}deg)`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  