	$(document).ready(function() {


    var chart = new CanvasJS.Chart("chartContainer4",
    {
      theme: "theme3",
      title:{
        text: "Курс Японской Иены к Рублю за период 2013 - 2016г."
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
        { x: new Date(2013, 00, 1), y: 0.52 },
        { x: new Date(2013, 01, 1), y: 0.53},
        { x: new Date(2013, 02, 1), y: 0.50 },
        { x: new Date(2013, 03, 1), y: 0.50 },
        { x: new Date(2013, 04, 1), y: 0.51 },
        { x: new Date(2013, 05, 1), y: 0.51 },
        { x: new Date(2013, 06, 1), y: 0.51 },
        { x: new Date(2013, 07, 1), y: 0.52 },
        { x: new Date(2013, 08, 1), y: 0.52 },
        { x: new Date(2013, 09, 1), y: 0.53 },
        { x: new Date(2013, 10, 1), y: 0.52 },
        { x: new Date(2013, 11, 1), y: 0.52 },
        { x: new Date(2014, 00, 1), y: 0.55 },
        { x: new Date(2014, 00, 1), y: 0.56 },
        { x: new Date(2014, 01, 1), y: 0.55 },
        { x: new Date(2014, 02, 1), y: 0.55 },
        { x: new Date(2014, 03, 1), y: 0.54 },
        { x: new Date(2014, 04, 1), y: 0.53 },
        { x: new Date(2014, 05, 1), y: 0.55 },
        { x: new Date(2014, 06, 1), y: 0.65 },
        { x: new Date(2014, 07, 1), y: 0.62 },
        { x: new Date(2014, 08, 1), y: 0.67 },
        { x: new Date(2014, 09, 1), y: 0.69 },
        { x: new Date(2014, 10, 1), y: 0.66 },
        { x: new Date(2014, 11, 1), y: 0.68 },
        { x: new Date(2015, 00, 1), y: 0.51 },
        { x: new Date(2015, 01, 1), y: 0.58 },
        { x: new Date(2015, 02, 1), y: 0.51 },
        { x: new Date(2015, 03, 1), y: 0.52 },
        { x: new Date(2015, 04, 1), y: 0.65 },
        { x: new Date(2015, 05, 1), y: 0.68 },
        { x: new Date(2015, 06, 1), y: 0.66 },
        { x: new Date(2015, 07, 1), y: 0.66 },
        { x: new Date(2015, 08, 1), y: 0.64 },
        { x: new Date(2015, 09, 1), y: 0.66 },
        { x: new Date(2015, 10, 1), y: 0.62 },
        { x: new Date(2015, 11, 1), y: 0.65 },
        { x: new Date(2016, 00, 1), y: 0.61 },
        { x: new Date(2016, 01, 1), y: 0.68 },
        { x: new Date(2016, 02, 1), y: 0.61 },
        ]
      }
      ]
    });
chart.render();

$(".m4").click(function(){
  $("#chartContainer4").css({"display":"block"});
  $(".body-graf").css({"height":"600"});
  $("#chartContainer1").css({"display":"none"});
  $("#chartContainer2").css({"display":"none"});
  $("#chartContainer3").css({"display":"none"});
});
});