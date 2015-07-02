function validaTelefoneCelular(telefone) {
    if (telefone.value.length == 0) {
        telefone.value = '(' + telefone.value;
    }
    if (telefone.value.length == 3) {
        telefone.value = telefone.value + ') ';
    }

    if (telefone.value.length == 9) {
        telefone.value = telefone.value + '-';
    }
    if (telefone.value.length == 14) {
        telefone.value.replace("-", "");
        telefone.value = telefone.value.replace("-", "");
        //
        telefone.value = telefone.value.substr(0, 10) + "-" + telefone.value.substr(10, telefone.value.lengt);
    }

}

//-----------------------------------
function soLetras(e)
{
    var expressao;

    expressao = /[0-9]/;

    if (expressao.test(String.fromCharCode(e.keyCode)))
    {
        return false;
    }
    else
    {
        return true;
    }
}
//------------------------------------
function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58))
        return true;
    else {
        if (tecla == 8 || tecla == 0)
            return true;
        else
            return false;
    }
}
//--------------------------------------
function validaCEP(obj) {
    if (obj.value.length == 5) {
        obj.value = obj.value + '-';
    }
    //    ---
    obj.value = obj.value.substring(0, 9);
}
//-----------------------------------
//---- DATA ----
$(function () {
    $('#DataNascimento').datetimepicker({
        locale: 'pt-BR',
        disabledTimeIntervals: false,
        format: 'L'
    });
});

//------------------------------------------
//Formatação e validação:
function mascara_Validacao_Data(campoData) {
    if (campoData.value.length == 2) {
        campoData.value = campoData.value + '/'
    }
    if (campoData.value.length == 5) {
        campoData.value = campoData.value + '/';
    }
}
//--------------------------------------------
function Cancelar(pagina) {
    var confirmacao = confirm("Você deseja mesmo cancelar?");

    if (confirmacao) {
        window.location.href = pagina;
    }

    else {
        stay;
    }

}
