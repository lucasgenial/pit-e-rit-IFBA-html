/*
 * Arquivo de Configuração do Plugin Form Validation
 */
/* global valida */

$(document).ready(function () {

    /**
     * FORMULÁRIO DE CADASTRO DE PROFISSIONAIS
     * */
    $('#formCadProfissional').formValidation({
        // Indicar o framework que vai ser trabalhado
        // Pode ser: bootstrap, foundation, pure, semantic, uikit
        locale: 'pt_BR',
        framework: 'bootstrap',
        icon: {
            required: 'glyphicon glyphicon-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nome: {
                row: '.col-md-7',
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'O campo nome é obrigratório'
                    },
                    stringLength: {
                        min: 6,
                        max: 50,
                        message: 'valores entre 6 E 50 CARACTERES'
                    },
                    regexp: {
                        //Contribuição Professor Diogo Novais
                        //Solução da validação dos espaços no input text
                        //regexp: /^[a-zA-Z]+\s([a-zA-Z]+)+$/
                        regexp: /^([a-zA-Z]+)+((\s[a-zA-Z]+)|(\s[a-zA-Z]+)\.)+$/
                    }
                }
            },
            cpf: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'Obrigratório'
                    },
                    
                    regexp: {
                        regexp: /^\d{3}\.\d{3}\.\d{3}\-\d{2,3}$/,
                        message: 'Fora do Padrão'
                    },
                    
                    //Necessário para validar o CPF
                    id: {
                        enabled: true,
                        country: 'BR',
                        message: 'O CPF é inválido'
                    }
                }
            },
            cep: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /^\d{2}\.\d{3}\-\d{3,4}$/,
                        message: 'Fora do Padrão'
                    }
                }
            },
            cidade: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'valores entre 3 e 30 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\./\s/]+$/
                    }
                }
            },
            bairro: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'valores entre 3 e 30 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\./\s/]+$/
                    }
                }
            },
            nomeLogradouro: {
                row: '.col-md-7',
                icon: false,
                validators: {
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'valores entre 3 e 30 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\./\s/]+$/
                    }
                }
            },
            numero: {
                row: '.col-md-2',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /[0-9]+$/,
                        message: 'Apenas números'
                    }
                }
            },
            telefone: {
                row: '.col-md-4',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /^\(\d{2}\)\d{4,5}\-\d{4,5}$/,
                        message: 'Fora do Padrão'
                    }
                }
            },
            celular: {
                row: '.col-md-4',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /^(\(\d{2}\)\d{4}\-\d{4,5})|(\(\d{2}\)\d{5}\-\d{4,5})+$/,
                        message: 'Fora do Padrão'
                    }
                }
            },
            email: {
                row: '.col-md-4',
                icon: false,
                selector: '.emailPrincipal',
                validators: {
                    emailAddress: {
                        message: 'O formato do email é invalido'
                    },
                    notEmpty: {
                        message: 'Obrigratório'
                    },
                    regexp: {
                        regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/,
                        message:'O formato do email é invalido'
                    }
                }
            },
            matricula: {
                row: '.col-md-2',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /[0-9]+$/,
                        message: 'Apenas números'

                    }
                }
            }
        }
    })
    
    //Desabilita o Botão Submit caso os dados não sejam validados
    .on('success.field.fv', function (e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    })
    
    //Mostra apenas uma mensagem de erro de cada vez
    .on('err.validator.fv', function(e, data) {
        // $(e.target)    --> O campo do elemento
        // data.fv        --> A instância FormValidation
        // data.field     --> O nome do campo
        // data.element   --> O campo do elemento
        // data.validator --> O nome validador atual

        data.element
            .data('fv.messages')
            // Ocultar todas as mensagens
            .find('.help-block[data-fv-for="' + data.field + '"]').hide()
            // Mostrar apenas mensagem associada validador atual
            .filter('[data-fv-validator="' + data.validator + '"]').show();
    })
    
    //Função necessária para validar o CPF
    .on('input keyup', '[name="cpf"]', function() {
        switch ($(this).val().length) {
            case 11:
            default:
                $('#formCadProfissional')
                    .formValidation('enableFieldValidators', 'yourId', true, 'id')
                    .formValidation('revalidateField', 'yourId');
                break;
        }
    })
    
    //Necessário para colocar as mascaras nos campos
    .find('[name="cep"]').mask('99.999-999').end()
    .find('[name="cpf"]').mask('999.999.999-99').end()
    .find('[name="telefone"]').mask('(00)0000-0000').end()
    
    //Adiciona a Mascara de Acordo ao 'nono' digito;
    .find('[name="celular"]').mask(
        function SPMaskBehavior(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00)00000-0000' : '(00)0000-00000';
        },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        }
    );


    /**
     * FORMULÁRIO DE ALTERAÇÃO DE PERFIL
     * */
    $('#formPerfil').formValidation({
        locale: 'pt_BR',
        framework: 'bootstrap',
        icon: {
            required: 'glyphicon glyphicon-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nome: {
                row: '.col-md-7',
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'O campo nome é obrigratório'
                    },
                    stringLength: {
                        min: 6,
                        max: 50,
                        message: 'valores entre 6 E 50 CARACTERES'
                    },
                    regexp: {
                        //Contribuição Professor Diogo Novais
                        //Solução da validação dos espaços no input text
                        //regexp: /^[a-zA-Z]+\s([a-zA-Z]+)+$/
                        regexp: /^([a-zA-Z]+)+((\s[a-zA-Z]+)|(\s[a-zA-Z]+)\.)+$/
                    }
                }
            },
            
            cpf: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'Obrigratório'
                    },
                    
                    regexp: {
                        regexp: /^\d{3}\.\d{3}\.\d{3}\-\d{2,3}$/,
                        message: 'Fora do Padrão'
                    },
                    
                    //Necessário para validar o CPF
                    id: {
                        enabled: true,
                        country: 'BR',
                        message: 'O CPF é inválido'
                    }
                }
            },
            
            cep: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /^\d{2}\.\d{3}\-\d{3,4}$/,
                        message: 'Fora do Padrão'
                    }
                }
            },
            
            cidade: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'valores entre 3 e 30 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\./\s/]+$/
                    }
                }
            },
            
            bairro: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'valores entre 3 e 30 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\./\s/]+$/
                    }
                }
            },
            
            nomeLogradouro: {
                row: '.col-md-7',
                icon: false,
                validators: {
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'valores entre 3 e 30 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\./\s/]+$/
                    }
                }
            },
            
            numero: {
                row: '.col-md-2',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /[0-9]+$/,
                        message: 'Apenas números'
                    }
                }
            },
            
            telefone: {
                row: '.col-md-4',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /^\(\d{2}\)\d{4,5}\-\d{4,5}$/,
                        message: 'Fora do Padrão'
                    }
                }
            },
            
            celular: {
                row: '.col-md-4',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /^(\(\d{2}\)\d{4}\-\d{4,5})|(\(\d{2}\)\d{5}\-\d{4,5})+$/,
                        message: 'Fora do Padrão'
                    }
                }
            },
            
            email: {
                row: '.col-md-4',
                icon: false,
                selector: '.emailPrincipal',
                validators: {
                    emailAddress: {
                        message: 'O formato do email é invalido'
                    },
                    notEmpty: {
                        message: 'Obrigratório'
                    },
                    regexp: {
                        regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/,
                        message:'O formato do email é invalido'
                    }
                }
            },
            
            matricula: {
                row: '.col-md-2',
                icon: false,
                validators: {
                    regexp: {
                        regexp: /[0-9]+$/,
                        message: 'Apenas números'

                    }
                }
            },
            
            senhaNova: {
                row: '.col-md-4',
                icon: false,
                validators: {
                    identical: {
                        field: 'confirmeSenhaNova',
                        message: 'Senhas Diferentes'
                    }
                }
            },
            
            confirmeSenhaNova: {
                row: '.col-md-4',
                icon: false,
                validators: {
                    identical: {
                        field: 'senhaNova',
                        message: 'Senhas Diferentes'
                    }
                }
            }
        }
    })
    
    //Desabilita o Botão Submit caso os dados não sejam validados
    .on('success.field.fv', function (e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    })
    
    //Mostra apenas uma mensagem de erro de cada vez
    .on('err.validator.fv', function(e, data) {
        // $(e.target)    --> O campo do elemento
        // data.fv        --> A instância FormValidation
        // data.field     --> O nome do campo
        // data.element   --> O campo do elemento
        // data.validator --> O nome validador atual

        data.element
            .data('fv.messages')
            // Ocultar todas as mensagens
            .find('.help-block[data-fv-for="' + data.field + '"]').hide()
            // Mostrar apenas mensagem associada validador atual
            .filter('[data-fv-validator="' + data.validator + '"]').show();
    })
    
    //Função necessária para validar o CPF
    .on('input keyup', '[name="cpf"]', function() {
        switch ($(this).val().length) {
            case 11:
            default:
                $('#formPerfil')
                    .formValidation('enableFieldValidators', 'yourId', true, 'id')
                    .formValidation('revalidateField', 'yourId');
                break;
        }
    })
    
    //Necessário para colocar as mascaras nos campos
    .find('[name="cep"]').mask('99.999-999').end()
    .find('[name="cpf"]').mask('999.999.999-99').end()
    .find('[name="telefone"]').mask('(00)0000-0000').end()
    
    //Adiciona a Mascara de Acordo ao 'nono' digito;
    .find('[name="celular"]').mask(
        function SPMaskBehavior(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00)00000-0000' : '(00)0000-00000';
        },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        }
    );

    /**
     * FORMULÁRIO DE CADASTRO 
     * */
    $('#formCadastroPIT').formValidation({
        locale: 'pt_BR',
        framework: 'bootstrap',
        icon: {
            required: 'glyphicon glyphicon-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            semestre: {
                row: '.col-md-3',
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'Obrigratório'
                    }
                }
            },
            ano: {
                row: '.col-md-2',
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'Obrigratório'
                    },
                    regexp: {
                        regexp: /[0-9]+$/,
                        message: 'somente números'
                    }
                }
            }
        }
    }).on('success.field.fv', function (e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    }).on('err.form.fv', function (e) {
        // Active the panel element containing the first invalid element
        var $form = $(e.target),
                validator = $form.data('formCadastroPIT'),
                $invalidField = validator.getInvalidFields().eq(-1),
                $collapse = $invalidField.parents('.collapse');
        $collapse.collapse('show');
    });
});