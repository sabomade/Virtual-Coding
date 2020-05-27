function myFunction() {
  event.preventDefault();

  var ans = [];
  for (let index = 1; index < 3; index++) {
    var verb = $("#" + index)
      .val()
      .trim();
    ans.push(verb);
  }
  console.log(ans);
  for (let index = 0; index < ans.length; index++) {
    var id = index + 1;
    console.log(id);
    $("#story-" + id).text(ans[index]);
  }
}
