	$(document).ready(function() {


    var chart = new CanvasJS.Chart("chartContainer2",
    {
      theme: "theme3",
      title:{
        text: "Курс Евро к Рублю за период 2013 - 2016г."
      },
      animationEnabled: true,
      axisX: {
        valueFormatString: "MMMY",
        interval:4,
        intervalType: "month"
      },
      axisY:{
        includeZero: false   
      },
      data: [
      {        
        type: "line",
        lineThickness: 2,
        dataPoints: [
        { x: new Date(2013, 00, 1), y: 40 },
        { x: new Date(2013, 01, 1), y: 40},
        { x: new Date(2013, 02, 1), y: 42 },
        { x: new Date(2013, 03, 1), y: 43 },
        { x: new Date(2013, 04, 1), y: 39 },
        { x: new Date(2013, 05, 1), y: 44 },
        { x: new Date(2013, 06, 1), y: 43 },
        { x: new Date(2013, 07, 1), y: 42 },
        { x: new Date(2013, 08, 1), y: 43 },
        { x: new Date(2013, 09, 1), y: 44 },
        { x: new Date(2013, 10, 1), y: 43 },
        { x: new Date(2013, 11, 1), y: 45 },
        { x: new Date(2014, 00, 1), y: 48 },
        { x: new Date(2014, 01, 1), y: 47 },
        { x: new Date(2014, 02, 1), y: 46 },
        { x: new Date(2014, 03, 1), y: 49 },
        { x: new Date(2014, 04, 1), y: 47 },
        { x: new Date(2014, 05, 1), y: 46 },
        { x: new Date(2014, 06, 1), y: 51 },
        { x: new Date(2014, 07, 1), y: 61 },
        { x: new Date(2014, 08, 1), y: 76 },
        { x: new Date(2014, 09, 1), y: 80 },
        { x: new Date(2014, 10, 1), y: 81 },
        { x: new Date(2014, 11, 1), y: 69 },
        { x: new Date(2015, 00, 1), y: 76 },
        { x: new Date(2015, 01, 1), y: 74 },
        { x: new Date(2015, 02, 1), y: 63 },
        { x: new Date(2015, 03, 1), y: 60 },
        { x: new Date(2015, 04, 1), y: 55 },
        { x: new Date(2015, 05, 1), y: 53 },
        { x: new Date(2015, 06, 1), y: 61 },
        { x: new Date(2015, 07, 1), y: 76 },
        { x: new Date(2015, 08, 1), y: 73 },
        { x: new Date(2015, 09, 1), y: 70 },
        { x: new Date(2015, 10, 1), y: 76 },
        { x: new Date(2015, 11, 1), y: 79 },
        { x: new Date(2016, 00, 1), y: 76 },
        { x: new Date(2016, 01, 1), y: 73 },
        { x: new Date(2016, 02, 1), y: 72 },
        ]
      }
      ]
    });
chart.render();

$(".m2").click(function(){
  $("#chartContainer2").css({"display":"block"});
  $(".body-graf").css({"height":"600"});
  $("#chartContainer1").css({"display":"none"});
  $("#chartContainer3").css({"display":"none"});
  $("#chartContainer4").css({"display":"none"});
});
});