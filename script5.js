let userCard = prompt("Введите номер вашей карты", "12345678911245");
let userCard1 = userCard.slice(10, 14);

alert(`Номер вашей карты: **********${userCard1}`);

document.write(`Номер вашей карты: **********${userCard1}`);
