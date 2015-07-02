$(function () {
    $('#DataInicial1').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataFinal1').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataInicial1').on("dp.change", function (e) {
        $('#DataFinal1').data("DateTimePicker").minDate(e.date);
    });
    $('#DataFinal1').on("dp.change", function (e) {
        $('#DataInicial1').maxDate(e.date);
    });
});

$(function () {
    $('#DataInicial2').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataFinal2').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataInicial2').on("dp.change", function (e) {
        $('#DataFinal2').data("DateTimePicker").minDate(e.date);
    });
    $('#DataFinal2').on("dp.change", function (e) {
        $('#DataInicial2').maxDate(e.date);
    });
});

$(function () {
    $('#DataInicial3').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataFinal3').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataInicial3').on("dp.change", function (e) {
        $('#DataFinal3').data("DateTimePicker").minDate(e.date);
    });
    $('#DataFinal3').on("dp.change", function (e) {
        $('#DataInicial3').maxDate(e.date);
    });
});

$(function () {
    $('#DataInicial4').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataFinal4').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
    $('#DataInicial4').on("dp.change", function (e) {
        $('#DataFinal4').data("DateTimePicker").minDate(e.date);
    });
    $('#DataFinal4').on("dp.change", function (e) {
        $('#DataInicial4').maxDate(e.date);
    });
});