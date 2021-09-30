/*
  Pseudocode:
    - Add hourly events to a work day planner and save (to local storage) so that the events persist even upon refresh
      - When the page opens, the current day is displayed at the top of the calender (in the header)
      - Scrolling down shows timeblocks for standard business hours
      - Each timeblock color coded to indicate whether or not the event is past, present, or future
      - Clicking into a timeblock allows the user to enter an event and upon clicking the save button, the event is saved in local storage
      - Finally, when the page is refreshed, the event persists
*/

var currentTime = moment();
$("#currentDay").text("Today is: " + (currentTime.format("dddd, MMMM Do YYYY")));

var saveBtn = $(".saveBtn");

var allTaskNotes = [];

saveBtn.on("click", function () {
  allTaskNotes = [];
  $(".task-box").each(function () { 
    var noteText = $(this).val();
    allTaskNotes.push(noteText);
  });
  localStorage.setItem("task-box", JSON.stringify(allTaskNotes));
});

function storedNotes() {
  allTaskNotes = JSON.parse(localStorage.getItem("task-box"));
  $(".task-box").each(function (i) {
    $(this).text(allTaskNotes[i]);
  })
}

storedNotes();
