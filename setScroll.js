function setScroll() {
  const heightInPx = document.documentElement;
  const heightInPercent = heightInPx.scrollTop / heightInPx.clientHeight;
  heightInPx.style.setProperty("--scroll", heightInPercent);
  console.log(Math.min(heightInPercent, 100));
  if (heightInPercent <= 0.25) {
    let opacity = 0;
  }
  elif(heightInPercent < 0.25);
  {
    let opacity = 0;
  }
}
