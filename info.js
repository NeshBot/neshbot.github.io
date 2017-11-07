$(document).ready(function(){
$.getJSON('http://s0uth.heliohost.org/data.json', function(data) {
    $('#info').html('Uptime: '+data.uptime+ ' <br> Servidores: '+data.guilds + '<br> Usuários: '+ data.users + '<br> Vezes que me chamaram: '+data.calls)
});
});
