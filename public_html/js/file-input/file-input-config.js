$('#anexos').fileinput({
    'language': 'pt-BR',
    'allowedFileExtensions': ['pdf', 'img', 'jpg'],
    'uploadUrl': "http://localhost:80/PIT&RIT/public_html/uploads/uploads.php",
    'uploadAsync': false,
    'showPreview': false,
    'showUpload': true,
    'elErrorContainer': "#blocoDeExibicaoErrosUpload",
    'maxFileCount': 1,
    'minImageWidth': 50,
    'minImageHeight': 50,
    'maxImageWidth': 300,
    'maxImageHeight': 300,
    'uploadExtraData': function () {
        return {
            userid: $('#descricao').val()
        };
    }
});