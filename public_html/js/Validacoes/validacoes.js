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

//--------------------------------------
function validaCEP(obj) {
    if (obj.value.length == 5) {
        obj.value = obj.value + '-';
    }
    //    ---
    obj.value = obj.value.substring(0, 9);
}

//------------------------------------------
//Formatação e validação:
function mascara_Validacao_Data(campoData, data1, data2) {
    //MÁSCARA:
    if (campoData.value.length == 2) {
        campoData.value = campoData.value + '/'
    }
    if (campoData.value.length == 5) {
        campoData.value = campoData.value + '/';
    }
    //----- COMPARAÇÃO DATAS:

    if (campoData.value.length == 10) {
        var data_1 = data1.value;
        var data_2 = data2.value;

        var Compara01 = parseInt(data_1.split("/")[2].toString() + data_1.split("/")[1].toString() + data_1.split("/")[0].toString());
        var Compara02 = parseInt(data_2.split("/")[2].toString() + data_2.split("/")[1].toString() + data_2.split("/")[0].toString());
        //
        if ((Compara01 < Compara02) || (Compara01 == Compara02)) {

        } else {

            alert("Data final deve ser maior que a inicial!");
            campoData.value = "";
        }
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