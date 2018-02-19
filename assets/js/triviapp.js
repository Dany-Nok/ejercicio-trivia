$(document).ready(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  /* $('.modal').modal();
  $('select').material_select(); */

  $(document).ready(function() {
    $('.refresh').click(function() {
      location.reload();
    })
  })

  fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=boolean');
  .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);


    })

});