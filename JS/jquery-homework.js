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
