function mascara_Validacao_Data_01(campoData) {
    //MÁSCARA:
    if (campoData.value.length == 2) {
        campoData.value = campoData.value + '/'
    }
    if (campoData.value.length == 5) {
        campoData.value = campoData.value + '/';
    }
    //----- COMPARAÇÃO DATAS:

    if (campoData.value.length == 10) {
        var data_1 = document.getElementById("data1").value;
        var data_2 = document.getElementById("data2").value;
        //
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
function mascara_Validacao_Data_02(campoData) {
    //MÁSCARA:
    if (campoData.value.length == 2) {
        campoData.value = campoData.value + '/'
    }
    if (campoData.value.length == 5) {
        campoData.value = campoData.value + '/';
    }
    //----- COMPARAÇÃO DATAS:

    if (campoData.value.length == 10) {
        var data_1 = document.getElementById("data3").value;
        var data_2 = document.getElementById("data4").value;
        //
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

function mascara_Validacao_Data_03(campoData) {
    //MÁSCARA:
    if (campoData.value.length == 2) {
        campoData.value = campoData.value + '/'
    }
    if (campoData.value.length == 5) {
        campoData.value = campoData.value + '/';
    }
    //----- COMPARAÇÃO DATAS:

    if (campoData.value.length == 10) {
        var data_1 = document.getElementById("data5").value;
        var data_2 = document.getElementById("data6").value;
        //
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

function mascara_Validacao_Data_04(campoData) {
    //MÁSCARA:
    if (campoData.value.length == 2) {
        campoData.value = campoData.value + '/'
    }
    if (campoData.value.length == 5) {
        campoData.value = campoData.value + '/';
    }
    //----- COMPARAÇÃO DATAS:

    if (campoData.value.length == 10) {
        var data_1 = document.getElementById("data7").value;
        var data_2 = document.getElementById("data8").value;
        //
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