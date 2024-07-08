(function ($) {
  "use strict";

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  // Single Bar Chart
  var ctx4 = $("#bar-chart").get(0).getContext("2d");
  var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],

      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .3)",
            "#157AFF",
            "rgba(0, 156, 255, .3)",
          ],
          data: [55, 49, 44, 35, 28, 50, 45, 40, 48, 35, 40, 35, 40, 58, 50],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
})(jQuery);
