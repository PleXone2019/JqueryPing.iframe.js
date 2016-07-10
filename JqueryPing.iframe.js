/**
 * Created by jiangbo on 16/7/10.
 */


var Ping = function () {
};

Ping.prototype.urlArr = new Array();
Ping.prototype.check = function (u) {

    $("<iframe style='display: none' width='1' height='1' id='PingFrame'></iframe>").appendTo('body');
    $("#PingFrame").attr("src", u);

};

Ping.prototype.ping = function () {
    var arr = this.urlArr;
    for(var i =0; i < arr.length; i++){
        //console.log(arr[i]);
        this.check("http://" + arr[i]);
    }


};

