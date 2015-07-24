/* 
 * Código disponivel em: 
 * view-source:http://elcio.com.br/ajax/mascara/
 */
/* Máscaras ER */
function mascara(o, f) {
    v_obj = o;
    v_fun = f;

    setTimeout("execmascara()", 1);
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value);
}

function leech(v){
    v=v.replace(/o/gi,"0");
    v=v.replace(/i/gi,"1");
    v=v.replace(/z/gi,"2");
    v=v.replace(/e/gi,"3");
    v=v.replace(/a/gi,"4");
    v=v.replace(/s/gi,"5");
    v=v.replace(/t/gi,"7");
    return v;
}

/* 
 * @param {string} numero
 * @returns {unresolved}
 */
function soNumeros(numero) {
    return numero.replace(/\D/g, "");
}

/*
 * @param {strin} tel
 * @returns {unresolved}
 */
function telefone(tel) {
    tel = tel.replace(/\D/g, "");                 //Remove tudo o que não é dígito
    tel = tel.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    tel = tel.replace(/(\d{4})(\d)/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return tel;
}


/*
 * @param {strin} cpf
 * @returns {cpf@call;replace.cpf}
 */
function cpf(cpf) {
    cpf = cpf.replace(/\D/g, "");                    //Remove tudo o que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

    return cpf;
}

/*
 * @param {type} cep
 * @returns {cep@call;replace.cep}
 */
function cep(cep) {
    cep = cep.replace(/D/g, "");                //Remove tudo o que não é dígito
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2"); //Esse é tão fácil que não merece explicações
    return cep;
}

/*
 * @param {type} cnpj
 * @returns {cnpj@call;replace.cnpj}
 */
function cnpj(cnpj) {
    cnpj = cnpj.replace(/\D/g, "");                           //Remove tudo o que não é dígito
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");             //Coloca ponto entre o segundo e o terceiro dígitos
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");           //Coloca uma barra entre o oitavo e o nono dígitos
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");              //Coloca um hífen depois do bloco de quatro dígitos
    return cnpj;
}

/*
 * @param {type} algarismo
 * @returns {unresolved}
 */
function romanos(algarismo) {
    algarismo = algarismo.toUpperCase();             //Maiúsculas
    algarismo = algarismo.replace(/[^IVXLCDM]/g, ""); //Remove tudo o que não for I, V, X, L, C, D ou M

    //Essa é complicada! Copiei daqui: http://www.diveintopython.org/refactoring/refactoring.html

    while (algarismo.replace(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/, "") !== "")
        algarismo = algarismo.replace(/.$/, "");

    return algarismo;
}

/*
 * @param {type} url
 * @returns {String}
 */
function site(url) {
    //Esse sem comentarios para que você entenda sozinho ;-)
    url = url.replace(/^http:\/\/?/, "");
    dominio = url;
    caminho = "";

    if (url.indexOf("/") > -1) {
        dominio = url.split("/")[0];
    }

    caminho = url.replace(/[^\/]*/, "");
    dominio = dominio.replace(/[^\w\.\+-:@]/g, "");
    caminho = caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g, "");
    caminho = caminho.replace(/([\?&])=/, "$1");

    if (caminho !== "") {
        dominio = dominio.replace(/\.+$/, "");
    }
    url = "http://" + dominio + caminho;

    return url;
}