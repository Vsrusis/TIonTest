$(document).ready(function() {


    var chart = new CanvasJS.Chart("chartContainer1",
    {
      theme: "theme3",
      title:{
        text: "Курс Доллора к Рублю за период 2013 - 2016г."
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
        { x: new Date(2013, 00, 1), y: 33 },
        { x: new Date(2013, 01, 1), y: 33},
        { x: new Date(2013, 02, 1), y: 30 },
        { x: new Date(2013, 03, 1), y: 30 },
        { x: new Date(2013, 04, 1), y: 31 },
        { x: new Date(2013, 05, 1), y: 31 },
        { x: new Date(2013, 06, 1), y: 31 },
        { x: new Date(2013, 07, 1), y: 32 },
        { x: new Date(2013, 08, 1), y: 32 },
        { x: new Date(2013, 09, 1), y: 33 },
        { x: new Date(2013, 10, 1), y: 32 },
        { x: new Date(2013, 11, 1), y: 32 },
        { x: new Date(2014, 00, 1), y: 35 },
        { x: new Date(2014, 00, 1), y: 36 },
        { x: new Date(2014, 01, 1), y: 35 },
        { x: new Date(2014, 02, 1), y: 35 },
        { x: new Date(2014, 03, 1), y: 34 },
        { x: new Date(2014, 04, 1), y: 33 },
        { x: new Date(2014, 05, 1), y: 35 },
        { x: new Date(2014, 06, 1), y: 36 },
        { x: new Date(2014, 07, 1), y: 39 },
        { x: new Date(2014, 08, 1), y: 43 },
        { x: new Date(2014, 09, 1), y: 49 },
        { x: new Date(2014, 10, 1), y: 56 },
        { x: new Date(2014, 11, 1), y: 68 },
        { x: new Date(2015, 00, 1), y: 61 },
        { x: new Date(2015, 01, 1), y: 58 },
        { x: new Date(2015, 02, 1), y: 51 },
        { x: new Date(2015, 03, 1), y: 52 },
        { x: new Date(2015, 04, 1), y: 55 },
        { x: new Date(2015, 05, 1), y: 58 },
        { x: new Date(2015, 06, 1), y: 66 },
        { x: new Date(2015, 07, 1), y: 66 },
        { x: new Date(2015, 08, 1), y: 64 },
        { x: new Date(2015, 09, 1), y: 66 },
        { x: new Date(2015, 10, 1), y: 72 },
        { x: new Date(2015, 11, 1), y: 75 },
        { x: new Date(2016, 00, 1), y: 79 },
        { x: new Date(2016, 01, 1), y: 75 },
        { x: new Date(2016, 02, 1), y: 68 },
        ]
      } 
      ]
    });
chart.render();
$(".m1").click(function(){
  $("#chartContainer1").css({"display":"block"});
  $(".body-graf").css({"height":"600"});
  $("#chartContainer2").css({"display":"none"});
  $("#chartContainer3").css({"display":"none"});
  $("#chartContainer4").css({"display":"none"});
});
});


