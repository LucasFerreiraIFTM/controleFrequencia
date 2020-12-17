
 var firebaseConfig = {
  apiKey: "AIzaSyDdOYvMAl6Si2L9YtoZBswpnJXBHxOJFRY",
  authDomain: "gerenciadorfrequencia.firebaseapp.com",
  databaseURL: "https://gerenciadorfrequencia.firebaseio.com",
  projectId: "gerenciadorfrequencia",
  storageBucket: "gerenciadorfrequencia.appspot.com",
  messagingSenderId: "565291545010",
  appId: "1:565291545010:web:d747592ad5cfc372d274ab",
  measurementId: "G-3WK1M46SEG"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
  

   var var_lista = document.getElementById("div_lista");
   var dados = "";
   var db = firebaseRef = firebase.database().ref().child("Professores");
   db.once('value',function(snapshot){
      var adicionado = snapshot.val();
      for(i in adicionado) {
        dados = "<table>" + "<tr><td>"+adicionado[i].nome+"</td><td>"+adicionado[i].cpf+"</td><td>"+adicionado[i].email+"</td> </tr>"  + dados;
      }
     var_lista.innerHTML = dados;
   })

   
   var var_lista_turma = document.getElementById("div_listar_turmas");
   var dados_turma = "";
   var db2 = firebaseRef = firebase.database().ref().child("Turma");
   db2.once('value',function(snapshot){
      var turmas = snapshot.val();
      console.log(turmas)
      for(i in turmas) {
        dados_turma = "<table>" + "<tr><td>"+turmas[i].nome+"</td><td>"+turmas[i].semestre+"</td><td>"+turmas[i].ano+"</td><td>"+turmas[i].professor+" </td></tr> </table>"  + dados_turma;
      }
      var_lista_turma.innerHTML = dados_turma;
   })

   var var_lista2 = document.getElementById("div_listar_alunos");
   var dados2 = "";
   var db3 = firebaseRef = firebase.database().ref().child("Alunos");
   db3.once('value',function(snapshot){
      var adicionado = snapshot.val();
      for(i in adicionado) {
        dados2 = "<table>" + "<tr><td>"+adicionado[i].nome+"</td><td>"+adicionado[i].cpf+"</td><td>"+adicionado[i].email+"</td> <td> "+adicionado[i].matricula+"</td> <td> "+adicionado[i].turma+"</td></tr>"  + dados2;
      }
     var_lista2.innerHTML = dados2;
   })
   




  

