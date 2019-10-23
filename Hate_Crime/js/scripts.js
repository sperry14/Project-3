$(document).ready(function() {
    $('#hate-table').DataTable( {
        "ajax": 'data.txt',
    } );
    buildChart();
    loadData();
} );
