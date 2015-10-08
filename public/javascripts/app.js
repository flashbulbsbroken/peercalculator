$(function () {

    $('.equals').on('click', function () {

        var num1 = $('.firstNum').val();
        var num2 = $('.secondNum').val();
        console.log(num1, num2);
        var op = $('.selected').data('op');
        var thing = [num1,num2];
        $.ajax({
            type:"post",
            url:'/math/' + op,
            data: {num1:num1,num2:num2},
            beforeSend: function(something){
                console.log(something);
            },
            success:function(res){
            console.log(res);
                $('.answer').html(res);
            }
        });

    });

    $('.opBtn').on('click', function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        $('.operation').html($(this).data('symbol'));
    })




});