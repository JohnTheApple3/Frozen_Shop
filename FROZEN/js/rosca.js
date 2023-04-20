$(document).ready(function(){

    $(document).ready(function(){
        $duration = 10;
        $('.seconds').text($duration);
        $('.popup-wrap').fadeIn(1500);

        $myTimer = setInterval(function(){ startTimer() }, 1000);
        $('.popup .btn-close').on("click",function(){
            clearInterval($myTimer);
            $('.popup-wrap').fadeOut(500);
        });
        
        function startTimer(){
            $duration--;
            $('.seconds').text($duration);
            if($duration==0){
                clearInterval($myTimer);
                $('.popup-wrap').fadeOut(500);
            }
        }
    });
    
});