	$(document).ready(function() {


    var chart = new CanvasJS.Chart("chartContainer3",
    {
      theme: "theme3",
      title:{
        text: "Курс Китайского Юаня к Рублю за период 2013 - 2016г."
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
        { x: new Date(2013, 00, 1), y: 10 },
        { x: new Date(2013, 01, 1), y: 10.6 },
        { x: new Date(2013, 02, 1), y: 10.7 },
        { x: new Date(2013, 03, 1), y: 10.6 },
        { x: new Date(2013, 04, 1), y: 10.9 },
        { x: new Date(2013, 05, 1), y: 10.1 },
        { x: new Date(2013, 06, 1), y: 10.6 },
        { x: new Date(2013, 07, 1), y: 10.8 },
        { x: new Date(2013, 08, 1), y: 11 },
        { x: new Date(2013, 09, 1), y: 11.2 },
        { x: new Date(2013, 10, 1), y: 11.4 },
        { x: new Date(2013, 11, 1), y: 11.5 },
        { x: new Date(2014, 00, 1), y: 11.3 },
        { x: new Date(2014, 00, 1), y: 11.7 },
        { x: new Date(2014, 01, 1), y: 12.1 },
        { x: new Date(2014, 02, 1), y: 12.1 },
        { x: new Date(2014, 03, 1), y: 12.2 },
        { x: new Date(2014, 04, 1), y: 12.6 },
        { x: new Date(2014, 05, 1), y: 12.9 },
        { x: new Date(2014, 06, 1), y: 12.2 },
        { x: new Date(2014, 07, 1), y: 12.3 },
        { x: new Date(2014, 08, 1), y: 12.1 },
        { x: new Date(2014, 09, 1), y: 11.8 },
        { x: new Date(2014, 10, 1), y: 11.8 },
        { x: new Date(2014, 11, 1), y: 11.6 },
        { x: new Date(2015, 00, 1), y: 12.2 },
        { x: new Date(2015, 01, 1), y: 11.8 },
        { x: new Date(2015, 02, 1), y: 12.2 },
        { x: new Date(2015, 03, 1), y: 11.6 },
        { x: new Date(2015, 04, 1), y: 10.9 },
        { x: new Date(2015, 05, 1), y: 12 },
        { x: new Date(2015, 06, 1), y: 11.4 },
        { x: new Date(2015, 07, 1), y: 11.6 },
        { x: new Date(2015, 08, 1), y: 11.1 },
        { x: new Date(2015, 09, 1), y: 10.6 },
        { x: new Date(2015, 10, 1), y: 10.9 },
        { x: new Date(2015, 11, 1), y: 10.4 },
        { x: new Date(2016, 00, 1), y: 10.5 },
        { x: new Date(2016, 01, 1), y: 10.3 },
        { x: new Date(2016, 02, 1), y: 10.2 },
        ]
      }
      ]
    });
chart.render();

$(".m3").click(function(){
  $("#chartContainer3").css({"display":"block"});
  $(".body-graf").css({"height":"600"});
  $("#chartContainer1").css({"display":"none"});
  $("#chartContainer2").css({"display":"none"});
  $("#chartContainer4").css({"display":"none"});
});
});