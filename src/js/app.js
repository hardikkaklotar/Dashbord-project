$('body').on('click', '.hamburgur', function() {
    $(".sidebar").addClass("active")
    $(".serchbar").removeClass("active")
});
$('body').on('click', '.close', function() {
    $(".sidebar").removeClass("active")
    
});

$('body').on('click', '.serch-icon', function() {
    $(".serchbar").toggleClass("active")
    $(".sidebar").removeClass("active")
});


/* CHART---------------------*/ 


var options = {
    series: [{
    name: 'series1',
    data: [11, 32, 45, 32, 34, 52, 41]
}, {
    name: 'series2',
    data: [31, 40, 28, 51, 42, 109, 100]
  }],
    chart: {
    height: 270,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


/* CHART2 ---------------------*/ 


var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
   
  }],
    chart: {
    type: 'bar',
    height: 222
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '25%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  
 
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();



  /* CHART3 -------------*/

  var options = {
    series: [60],
    chart: {
    height: 206,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Total Score'],
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();


