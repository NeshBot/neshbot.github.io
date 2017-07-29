$(document).ready(function(){
$.getJSON('https://ajax.service.maath.ga/data.php?id=286259539529957388', function(data) {
    $('#info').html('NeshBot foi criado por '+data.brag+ ' <br> Site criado por: '+data.mete)
});
});
