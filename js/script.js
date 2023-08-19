/*
alert("MERDEKA!!!")
// Script to update current date
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('id-ID', options);
document.getElementById('current-date').textContent = "Pada hari " + formattedDate
*/

        const thankYouButton = document.getElementById("thankYouButton");

        thankYouButton.addEventListener("click", function() {
            const currentDate = new Date();
            const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            const formattedDate = currentDate.toLocaleDateString("id-ID", options);

            alert(`Terima kasih telah mengunjungi kami pada hari ${formattedDate}`);
        });


