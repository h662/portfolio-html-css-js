const API_KEY = "f9cd232dbbb4ca1f4cf80eb8468af216";

const introduceArray = [
  "안녕하세요, 프론트엔드 개발자 h662입니다.",
  "저는 자바스크립트와 솔리디티를 사용해 개발을 해왔습니다.",
  "도전하는 것을 좋아합니다. 잘 부탁드립니다!",
];
let introduceIndex = 0;

function onClickIntroduce() {
  const introduceMessage = document.querySelector(".introduceMessage");

  introduceIndex++;

  if (introduceIndex === introduceArray.length) {
    introduceIndex = 0;
  }

  introduceMessage.innerText = introduceArray[introduceIndex];
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cityTemp = document.querySelector(".cityTemp");

        cityTemp.innerText = data.name + ", " + parseInt(data.main.temp) + "℃";
      });
  },
  () => alert("Location access not allowed.")
);
