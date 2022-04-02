function newItem(){

//1. Add new item to list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
  } else {
    $('#list').append(li);
  }
  //2. Cross item out toggle
  function cressOut() {
    li.toggleClass("strike");
}

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });
//3. Add delete button

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  $('#input').keypress(function(event){
  let keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    alert('You pressed a "enter" key in the textbox. Screenshoot your list beefore it is lost forever!!!');
  }
});

     crossOutButton.on("click", deleteListItem);
     function deleteListItem() {
      li.addClass("delete")
    }
   $('#list').sortable();
}
