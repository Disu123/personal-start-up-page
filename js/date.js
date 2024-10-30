function showDate() {

const date = new Date();

let day = String(date.getDate()).padStart(2, '0');
let month = String(date.getMonth() + 1).padStart(2, '0');
let year = date.getFullYear();

let fullDate = `${day}-${month}-${year}`;
document.getElementById('date').textContent = fullDate;

};
showDate();
