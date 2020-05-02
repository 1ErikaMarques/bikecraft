if(window.SimpleSlide){
    
new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides,5000 é 5 segundos
});

new SimpleSlide({
    slide: "portfolio", 
    time: 5000, 
    nav:true // gera botoes para passar o slide
});

}

if(window.SimpleAnime){
new SimpleAnime();

}

if(window.SimpleForm){
new SimpleForm({
    form: ".formphp", // seletor do formulário,definimos no html
    button: "#enviar", // seletor do botão,é o id que definimos no html
    erro: "<div id='form-erro'><h2>Um erro ocorreu,tente para o email contato@bikcraft.com.</h2></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}
