//Este trecho do codigo configura todos os inputs com a classe 'datas' para ativar o plugin do DatePicker
//Com a configuração do projeto.
$(document).ready(function () {
    var elementoData = $('.datas');

    elementoData.datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
});