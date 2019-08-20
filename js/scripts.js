$(document).ready(function(){
  $("form#stress_none").submit(function(event){
    event.preventDefault();
      $("#links").hide();
      var effects = 0;
      var symptoms = 0;
      var copingMechanisms = 0;

      $("input:checkbox[name=stress-effects]:checked").each(function(){
        effects += 1 ;
      });


      $("input:checkbox[name=stress-symptoms]:checked").each(function(){
        symptoms += 1 ;
      });


      $("input:checkbox[name=stress-coping]:checked").each(function(){
        copingMechanisms += 1;
      });

      console.log("effects =" + effects);
      console.log("symptoms =" + symptoms);
      console.log("coping =" + copingMechanisms);

      if( effects + symptoms - copingMechanisms >= 4){
        $("#links").show();

      }




  });
});
