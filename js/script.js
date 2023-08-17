alert("MERDEKA!!!")
// Script to update current date
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('id-ID', options);
document.getElementById('current-date').textContent = "Pada hari " + formattedDate
