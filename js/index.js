function cep_calculate(){
    $('#card-cep').hide();
    $('.progress').show();
    let cep = document.getElementById('cep').value;

    $.ajax({
        url:`https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(res){
            let datas = [
                res.logradouro,
                res.complemento,
                res.bairro,
                res.localidade,
                res.uf
            ];
            //innerHTML com jQuery
            $('#titulo-cep').html(`CEP: ${cep}`);
            $('#logradouro').html(datas[0]);
            $('#complemento').html(datas[1]);
            $('#bairro').html(datas[2]);
            $('#localidade').html(datas[3]);
            $('#uf').html(datas[4]);
            $('.progress').hide();
            $('#card-cep').show();
        }
    });
}

