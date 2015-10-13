google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Type', 'Amount',],
        ['Ringtones', 66],
        ['Permanent Download', 2577],
        ['Streaming', 1867]
      ]);

      var options = {
        title: 'Digital Music Revenues',
        chartArea: {width: '50%'},
        hAxis: {
          title: '$ in Millions',
          minValue: 0
        },
        vAxis: {
          title: '2014'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('barChart'));

      chart.draw(data, options);
    }