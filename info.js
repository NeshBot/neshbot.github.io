$(document).ready(function(){
$.getJSON('https://api.maath.ga/get/data/286259539529957388/', function(data) {
    $('#info').html('Uptime: '+data.uptime+ ' <br> Servidores: '+data.guilds)
});
});
