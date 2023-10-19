const bookDay = document.querySelector("#bookDay"); 
const bookTime = document.querySelector("#bookTime");
const makeBookingButton = document.querySelector("#makeBookingButton");

makeBookingButton.addEventListener('click', checkAvailability);

function checkAvailability() {
    let bookDayVar = bookDay.value;
    let bookTimeVar = bookTime.value;

    bookingDetails=new Object();
    bookingDetails.bookDay=bookDayVar;
    bookingDetails.bookTime=bookTimeVar;
    
    sendBooking(bookingDetails);
    console.log(bookDayVar + bookTimeVar);
    alert("Your Booking Was Made Succesfully");

};




