function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
 
  // Close the drop opdown menu if the user clicks outside of it
$("dropdownBtn").click(function(event) {
  if (!event.target.matches('.dropdownBtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}); 