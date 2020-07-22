//Default active on home
$("#s1").addClass("active");

/*
Smooth scrolling
*/
$("#s1").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top - 65
    },
    1000
  );
  return false;
});

$("#s2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top - 100
    },
    1000
  );
  return false;
});

$("#s3").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#skills").offset().top - 100
    },
    1000
  );
  return false;
});

$("#s4").click(function () {
  $(this).addClass("active");
  $("html, body").animate(
    {
      scrollTop: $("#portfolio").offset().top - 100
    },
    1000
  );
  return false;
});

$("#s5").click(function () {
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top - 100
      },
      1000
    );
    return false;
  });

/*
Using jquery waypoints to change active on scroll
*/
$("#about").waypoint(
  function () {
    $(".navbar-collapse ul li").children().removeClass("active");
    $("#s2").addClass("active");
  },
  { offset: 101 }
);

$("#skills").waypoint(
  function () {
    $(".navbar-collapse ul li").children().removeClass("active");
    $("#s3").addClass("active");
  },
  { offset: 101 }
);

$("#portfolio").waypoint(
  function () {
    $(".navbar-collapse ul li").children().removeClass("active");
    $("#s4").addClass("active");
  },
  { offset: 101 }
);

$("#contact").waypoint(
    function () {
      $(".navbar-collapse ul li").children().removeClass("active");
      $("#s5").addClass("active");
    },
    { offset: 101 }
  );

$("#home").waypoint(
  function () {
    $(".navbar-collapse ul li").children().removeClass("active");
    $("#s1").addClass("active");
  },
  { offset: 0 }
);

