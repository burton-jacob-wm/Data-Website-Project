google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Sales', 'Amount'],
        ['Digital Sales',     46],
        ['Physical Sales',      46],
        ['Performances',  6],
        ['Other', 2]
    ]);

    var options = {
        title: 'Music Industry',
        width: 500,
        height: 250,
        fontSize: 16
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}