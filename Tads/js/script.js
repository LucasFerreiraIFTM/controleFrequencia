
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
   var dados_professores = "";
   var db = firebaseRef = firebase.database().ref().child("Professores");
   db.on('value',function(snapshot){
      var professores = snapshot.val();
      dados_professores = "<table class='table table-striped'>";
      dados_professores = dados_professores  + "<thead><tr><th>Nome</th><th>CPF</th><th>Email</th><th>Editar</th><th>Excluir</th></tr></thead> <tbody>";
      for(i in professores) {
        console.log(i);
        dados_professores = dados_professores + "<tr class='ropdown-menu'><td>"+professores[i].nome+"</td><td>"+professores[i].cpf+"</td ><td>"+professores[i].email+"</td><td style='display:none;' 'id='identificador' >"+i+" </td> <td> <a  onclick="+""+"editarProf('"+i+"'); class='btn btn-warning'> Editar</a></td><td> <a  onclick="+""+"deletProf('"+i+"'); class='btn btn-danger'> Apagar</a></td> </tr>";
      }
        dados_professores =  dados_professores + "</tbody></table>";
   
        var_lista.innerHTML = dados_professores;
   })

   
   function editarProf(teste){
    const fb = firebase.database().ref();


      email = document.getElementById("email").value;
      cpf = document.getElementById("cpf").value;
      nome = document.getElementById("nome").value;

      data={email,cpf,nome}
      fb.child('Professores/'+teste).update(data);
      console.log(teste);
  }
  function deletProf(teste){
    const fb = firebase.database().ref();
    fb.child('Professores/'+teste).remove()
  }

   
  var var_lista_turma = document.getElementById("div_listar_turmas");
   var dados_turma = "";
   var db2 = firebaseRef = firebase.database().ref().child("Turma");
   db2.on('value',function(snapshot){
      var turmas = snapshot.val();
      dados_turma = "<table class='table table-striped'>";
      dados_turma = dados_turma  + "<thead><tr><th>Nome</th><th>Semestre</th><th>Ano</th><th>Professor</th><th>Editar</th><th>Excluir</th></tr></thead> <tbody>";
      for(i in turmas) {
        dados_turma = dados_turma + "<tr class='ropdown-menu'><td>"+turmas[i].nome+"</td><td>"+turmas[i].semestre+"</td><td>"+turmas[i].ano+"</td><td>"+turmas[i].professor+"<td style='display:none;' id='identificador' >"+i+" </td> <td> <a  onclick="+""+"editarTurm('"+i+"'); class='btn btn-warning'> Editar</a></td><td> <a  onclick="+""+"deletTurm('"+i+"'); class='btn btn-danger'> Apagar</a></td> </tr>  " ;
      }
      dados_turma =  dados_turma + "</tbody></table>";
      var_lista_turma.innerHTML = dados_turma;
   })
   function editarTurm(teste){
    const fb = firebase.database().ref();


      semestre = document.getElementById("semestre").value;
      ano = document.getElementById("ano").value;
      nome = document.getElementById("nome").value;
      professor = document.getElementById("professor").value;

      data={ano,semestre,nome,professor}
      fb.child('Turma/'+teste).update(data);
      console.log(teste);
  }
  function deletTurm(teste){
    const fb = firebase.database().ref();
    fb.child('Turma/'+teste).remove()
  }

  var var_lista2 = document.getElementById("div_listar_alunos");
   var dados2 = "";
   var db3 = firebaseRef = firebase.database().ref().child("Alunos");
   db3.on('value',function(snapshot){
      var adicionado = snapshot.val();
      dados_aluno = "<table class='table table-striped'>";
      dados_aluno = dados_aluno  + "<thead><tr><th>Nome</th><th>CPF</th><th>Email</th><th>Matricula</th><th>Editar</th><th>Excluir</th></tr></thead> <tbody>";
      for(i in adicionado) {
        dados_aluno = dados_aluno + "<tr class='ropdown-menu'><td>"+adicionado[i].nome+"</td><td>"+adicionado[i].cpf+"</td><td>"+adicionado[i].Email+"</td> <td> "+adicionado[i].matricula+"</td> <td> <a  onclick="+""+"editarAluno('"+i+"'); class='btn btn-warning'> Editar</a></td><td> <a  onclick="+""+"deletAluno('"+i+"'); class='btn btn-danger'> Apagar</a></td> </tr>  "  ;
      }
      dados_aluno = dados_aluno + "</tbody></table>";
     var_lista2.innerHTML = dados_aluno ;
   })
   
   function editarAluno(teste){
    const fb = firebase.database().ref();

      Email = document.getElementById("email").value;
      nome = document.getElementById("nome").value;
      matricula = document.getElementById("matricula").value;
      cpf = document.getElementById("cpf").value;

      data={cpf,Email,nome,matricula}
      fb.child('Alunos/'+teste).update(data);
      console.log(teste);
  }
  function deletAluno(teste){
    const fb = firebase.database().ref();
    fb.child('Alunos/'+teste).remove()
  }



  var selectTurmas = document.getElementById("turma");
   var dadosT = "<select><option></option>";
   var dbTurma = firebaseRef = firebase.database().ref().child("Turma");
   dbTurma.on('value',function(snapshot){
      var turmas = snapshot.val();
      for(i in turmas) {
        dadosT = dadosT + "<option>"+turmas[i].nome+"</option>";
      }
      dadosT = dadosT+ "</select>";
      selectTurmas.innerHTML = dadosT;
   })
  

  var selectProfessores = document.getElementById("professor");
   var dadosP = "<select><option></option>";
   var dbProfessor = firebaseRef = firebase.database().ref().child("Professores");
   dbProfessor.on('value',function(snapshot){
      var professores = snapshot.val();
      for(i in professores) {
        dadosP = dadosP + "<option>"+professores[i].nome+"</option>";
      }
      dadosP = dadosP+ "</select>";
      console.log(dadosP)
      selectProfessores.innerHTML = dadosP;
   })
$(document).ready(function(){


    $("#cpf").mask("000.000.000-00", { placeholder: "___.___.___-__"});


});



function validar(){


    var cpf = $("#cpf").cleanVal();



    if (cpf.length != 11) {

        alert("Digite 11 digitos para o CPF!")

    }

}

  

function salvarF(){
  data = document.getElementById("data").value;
	turma = document.getElementById("turma").value;
	nome_aluno = document.getElementById("nome_aluno").value;
  freq = document.getElementById("freq").value;
  var adc = {};
  adc[data] = freq;
	var db9 = firebaseRef =  firebase.database().ref().child("Alunos");
	db9.on('value',function(snapshot){
		var alunos = snapshot.val();
		for(i in alunos) {		
			if(alunos[i].nome == nome_aluno){
        db9.child(i+"/frequencia/"+turma+"/").update(adc)
			}
		}
	})
}

function BuscarF(){
	turma = document.getElementById("turma").value;
  nome_aluno = document.getElementById("nome_aluno").value;
  var var_lista_freq= document.getElementById("listar_frequencia");
  var dados = "<table class='table table-striped'>";
  dados = dados + "<thead><tr><th>Data</th><th>Situação</th><th>Excluir</th></thead><tbody>";
	var db9 = firebaseRef =  firebase.database().ref().child("Alunos");
	db9.once('value',function(snapshot){
		var alunos = snapshot.val();
		for(i in alunos) {		
			if(alunos[i].nome == nome_aluno){
        for(j in alunos[i].frequencia) {
            if(j == turma){
              for(k in alunos[i].frequencia[j]){
                console.log("chave "+ i )
                console.log("dia "+ k)
                console.log("materia "+ k )
                dados = dados + "<tr class='ropdown-menu'><td>"+k+"</td><td>"+alunos[i].frequencia[j][k]+"</td><td> <a  onclick="+""+"deletFreq('"+k+"','"+j+"','"+i+"'); class='btn btn-danger'> Apagar</a></td> </tr>  " ;
              }
              
            }
        }
			}
    }
    dados = dados + "</tbody></table>";
    var_lista_freq.innerHTML = dados;
	})
}

function deletFreq(dia,materia, chave){
  console.log(dia+"  "+chave+"  "+materia)
  const fb = firebase.database().ref();
  fb.child('Alunos/'+chave+"/frequencia/"+materia+"/"+dia).remove()
}

function criarUsuario(email){
  window.alert(email)
  password = '123456';
  firebase.auth().createUserWithEmailAndPassword("qwer@hotmail.com", password)
  .then((user) => {
      window.alert("Usuario criado");
    })
    .catch((error) => {
      window.alert("Usuario não criado");
    });
}