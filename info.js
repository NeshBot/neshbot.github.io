$(document).ready(function(){
$.getJSON('https://ajax.service.maath.ga/data.php?id=286259539529957388', function(data) {
    $('#info').html('Uptime: '+data.uptime+ ' \nServidores: '+data.guilds)
});
});
