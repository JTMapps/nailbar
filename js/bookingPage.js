function checkAvailability() {
    let bookDayVar = $("#bookDay").val();
    let bookTimeVar = $("#bookTime").val();

    bookingDetails=new Object();
    bookingDetails.bookDay=bookDayVar;
    bookingDetails.bookTime=bookTimeVar;
    
    console.log(bookDayVar + bookTimeVar);
    sendBooking(bookingDetails);
    alert("Your Booking Was Made Succesfully");
};

$("#makeBookingButton").click(checkAvailability);




