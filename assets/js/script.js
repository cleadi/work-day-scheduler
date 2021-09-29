/*
  Pseudocode:
    - Add hourly events to a work day planner and save (to local storage) so that the events persist even upon refresh
      - When the page opens, the current day is displayed at the top of the calender (in the header)
      - Scrolling down shows timeblocks for standard business hours
      - Each timeblock color coded to indicate whether or not the event is past, present, or future
      - Clicking into a timeblock allows the user to enter an event and upon clicking the save button, the event is saved in local storage
      - Finally, when the page is refreshed, the event persists
*/

var now = moment();
$("#currentDay").text("Today is: " + (now.format("dddd, MMMM Do YYYY")));

var saveBtn = $("class=saveBtn");
var allTaskNotes = [];

saveBtn.on("click", function () {
  $(".task-box").each(function () {
    allTaskNotes.push.this.val(); // this is meant to --> add each value to the allTaskNotes array --> using stringify & parse somehow
  });
});

localStorage.setItem(".task-box", allTaskNotes);

var score = localStorage.getItem("score");
localStorage.setItem("score", userPointsTotal);
