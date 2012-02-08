$("a.button").on('click', function(e){
        var eingabe = $(this).html();

        if ( eingabe == '=' ) {
            $("div#display p").html( eval($("div#display p").html()) );
        } else if ( eingabe == 'CE' ) {
            $("div#display p").html( "&nbsp;" );
        } else {
            if ( $("div#display p").html() == '&nbsp;' ) {
                $("div#display p").html( "" );
            }
            $("div#display p").append( eingabe );
        }
});
