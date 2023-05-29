function dailyTask() {
    "use strict";
    
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();
    let dateString = `${month}/${day}/${year}`;
    document.getElementById("date").textContent = dateString;

    var addButton = document.getElementById("addButton");
    var textInput = document.getElementById("textInput");
    var checkList = document.getElementById("checkList");

    addButton.addEventListener("click", function() {
        var textDescription = textArea.value;
        if (textDescription) {
          var taskItem = document.createElement("div");
          taskItem.className = "task";
          var checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          var taskText = document.createTextNode(textDescription);
          taskItem.appendChild(checkbox);
          taskItem.appendChild(taskText);
          checkList.appendChild(taskItem);
          textArea.value = "";
        }
      });

      var clearButton = document.getElementById("clearButton");
      clearButton.addEventListener("click", function() {
      checkList.innerHTML = "";
      });
}
  
  document.addEventListener("DOMContentLoaded", dailyTask);
