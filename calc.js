$(document).ready(function(){
    var nb1=0;
    var nb2=0;
    var res=0;
    $("#plus").click(function(){
        nb1=parseInt($("#nb1").val());
        nb2=parseInt($("#nb2").val());
        if(nb1>50000 ){
            $("#errornb1").text("nb1>50000");
            $("#errornb1").css("display","block");
            $("#errornb1").animate({opacity: 0.25,
                left: "+=50",
                height: "toggle"},2000,function(){

            });

        }else if(nb2>50000){
            $("#errornb2").text("nb1>50000");
            $("#errornb2").css("display","block");

        }else{
            res=nb1+nb2;
            $("#result").val(res);
        }
        
    });

});