
$(document).on("click", "#botaocalc", function(){    
      var sexo = $('#sexo').val();
      var peso = parseFloat($('#peso').val());
      var altura = parseFloat($('#altura').val());
      var idade = parseFloat($('#idade').val());
      var atividade = parseFloat($('#atividade').val());
      
     if (sexo == "fm")
     {
       var pesoConta = 9.6 * peso;
       var alturaConta = 1.8 * altura;
       var idadeConta = 4.7 * idade;
       var resultado = atividade  * (655 + pesoConta + alturaConta + idadeConta);
     }
     else if (sexo== "masc"){
       var pesoConta = 13.7 * peso;
       var alturaConta = 5 * altura;
       var idadeConta = 6.8 * idade;
       var resultado = atividade  * (66 + pesoConta + alturaConta + idadeConta);
     }
      $("#result").val(resultado);
});