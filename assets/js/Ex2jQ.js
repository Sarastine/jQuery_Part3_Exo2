var count = 0;
$("#ButtonUp").click(function() {
   count++;
   $("#Counter").html(count);
});
$("#ButtonDown").click(function() {
   count--;
   $("#Counter").html(count);
});