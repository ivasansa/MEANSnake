var socket = io.connect('http://localhost:3000');
socket.on('user', function (data) {
    console.log(data);
//    $('#'+data.user.posicio).css({"background-color": "green"});
    socket.emit('my other event', { my: 'data' });
});

//$(function(){
//
//
//    $(document).keydown(function(e) {
//        switch(e.which) {
//            case 37: // left
//
//            break;
//
//            case 38: // up
//            break;
//
//            case 39: // right
//            break;
//
//            case 40: // down
//            break;
//
//            default: return; // exit this handler for other keys
//        }
//        e.preventDefault(); // prevent the default action (scroll / move caret)
//    });
//
//
//        var u = $("#po").val();
////        console.log(u);
//        var s = "#";
////        console.log(s);
//        $(s).css({"background-color": "green"});
//});
