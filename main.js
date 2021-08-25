$( function() {
    var moneyBox,
        totalMonth,
        totalDay,
        accumulation,
        spend;

    //calculator

    $('input').keyup(function () {

        //income inputs:
        var incomeSalary = +($('#income-salary').val()),
            incomeFreelance = +($('#income-freelance').val()),
            incomeExtra1 = +($('#income-extra-1').val()),
            incomeExtra2 = +($('#income-extra-2').val());

        //costs inputs:
        var costsFlat = +($('#costs-flat').val()),
            costsHouseServices = +($('#costs-house-services').val()),
            costsTransport = +($('#costs-transport').val()),
            costsCredit = +($('#costs-credit').val());

        var incomeMonth = incomeSalary + incomeFreelance + incomeExtra1 + incomeExtra2,//income month
            costsMonth = costsFlat + costsHouseServices + costsTransport + costsCredit;//costs month

        $('#total-month').val(incomeMonth - costsMonth);
        totalMonth = $('#total-month').val();// total month

        calculation();
    });

    function calculation(){
        $('#accumulation').val(+((totalMonth - (totalMonth - moneyBox * totalMonth / 100))));
        accumulation = $('#accumulation').val();

        $('#spend').val(+(totalMonth - accumulation));
        spend = $('#spend').val();

        $('#total-day').val(+($('#spend').val() / 30).toFixed(0));
        totalDay = $('#total-day').val();// total day

        $('#total-year').val(+(accumulation * 12));
    }

    //init slider
    $( "#slider-range" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
            $( "#precent" ).val( ui.value + '%');
            moneyBox = +($( "#precent" ).val().replace('%',''));
            calculation();
        }
    });
    $( "#precent" ).val( $( "#slider-range" ).slider( "value" ) + '%');
} );