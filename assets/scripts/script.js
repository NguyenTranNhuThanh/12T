const randomizeBtn = document.getElementById('randomizeBtn');
const resultDiv = document.getElementById('result');

const results = [
  {
    text: " Năng lượng tái tạo - Tương lai xanh của nhân loại",
    image: "/12T/assets/images/drone.jpg"
  },
  {
    text: "Dược phẩm và y tế - Cải thiện chất lượng cuộc sống",
    image: "/12T/assets/images/hospital.jpg"
  },
  {
    text: "Vật liệu Nano - Tương lai của Công nghiệp",
    image: "/12T/assets/images/nano.png"
  },
  {
    text: "Công nghệ thực phẩm - Đáp ứng nhu cầu của người tiêu dùng",
    image: "/12T/assets/images/food.jpg"
  },
  
];

randomizeBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * results.length);
  const randomResult = results[randomIndex];

  resultDiv.innerHTML = `
    <h2 style="color: red">${randomResult.text}</h2>
    <img src="${randomResult.image}" alt="${randomResult.text}">
  `;
});
