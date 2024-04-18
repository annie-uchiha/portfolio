// 1. Create a rectangle and make it move to all edges of the page after a btn has been clicked

$(() => {
  $("#moveBtn").on("click", function () {
    const element = $("#movingElement");
    const windowHeight = $(window).height();
    const windowWidth = $(window).width();
    const originalPosition = {
      top: windowHeight / 2 - 25,
      left: windowWidth / 2 - 25,
    };

    // Move up
    element.animate({ top: 0 }, 3000, () => {
      // Move right
      element.animate({ left: windowWidth - element.width() }, 3000, () => {
        // Move down
        element.animate({ top: windowHeight - element.height() }, 3000, () => {
          // Move left
          element.animate(
            { left: originalPosition.left, top: originalPosition.top },
            3000
          );
        });
      });
    });
  });
});

/* 3. Create a simple to-do list. Allow users to add and remove tasks.
Each task should have a checkbox to mark as complete. Change style of row when task is complete.*/

$(() => {
  function addTask(taskText) {
    $("#taskList").append(
      '<li><input type="checkbox" class="taskCheckbox">' + taskText + "</li>"
    );
  }

  function removeCompletedTasks() {
    $("#taskList .taskCheckbox:checked").parent().remove();
  }

  $("#taskList").on("change", ".taskCheckbox", function () {
    $(this).parent().toggleClass("completed");
  });

  $("#addTaskBtn").click(function () {
    var taskText = $("#taskInput").val().trim();
    if (taskText !== "") {
      addTask(taskText);
      $("#taskInput").val("");
    }
  });

  $("#removeCompletedBtn").click(function () {
    removeCompletedTasks();
  });
});

//List of items and on hover details on each row
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    const details = item.querySelector(".details");
    item.addEventListener("mouseenter", () => {
      details.style.display = "block";
    });
    item.addEventListener("mouseleave", () => {
      details.style.display = "none";
    });
  });
});

