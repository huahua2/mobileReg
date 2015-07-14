 $(function() {
        $(".close-btn").click(function() {
            $(".navbar-fixed-bottom").hide();
        });
        $("input[type=text],input[type=password]").focus(function() {
            $("#tips").removeClass('tips-err').hide();
        });
        var isClick = false;
        $("#btn_reg").click(function(event) {

            if (!isClick) {
                isClick=true;
                var obj=$("input[type=text],input[type=password]");
                $.each(obj,function() {
                    var _val = $(this).val();
                    if (_val == "") {
                    	$("#tips").removeClass('tips-err').hide();
                       var p= $(this).attr("placeholder")
                        setTimeout(function() {
                           $("#tips").addClass('tips-err').show().html(p);
                            isClick=false;
                        }, 100);
                        return false;
                    }else	isClick=false;  

                });
            }
        });
    })