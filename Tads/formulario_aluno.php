<body class ="">


<form method="POST" > 
		
	<div class="container">	
		
		<div class="col-6 form-group">
			<label for="nome" class = "label">Escolha uma opçao:</label>
			<div>
				<input type="radio" name="escolha" id="turma" value = "escolha"  checked = "checked" onchange = "mostrarDiv ();"/> Salvar Aluno
				<input type="radio" name="escolha" id="aluno" value = "escolha" onchange = "mostrarDiv ();"/> Cadastrar Turma
			</div>
		</div>
		
		<div class="container" style="display: none;" id="divAluno">
			<div class="row">
				
				<!--<div class="col-4 form-group">
					<label for="nome">Nome:</label>
					<input type="text" name="nome2" id="nome2" class="form-control"/>
				</div>-->

				<div class="col-4 form-group">
					<label for="nome">Nome:</label>
					<select type="text" name="nome" id="selectAlunos" class="form-control">
						<option value=""></option>
					</select>
				</div>
				
				<div class="col-4 form-group">
					<label for="turma">Turma:</label>
					<select type="text" name="turma" id="turma2" class="form-control">
						<option value=""></option>
					</select>
				</div>
				<div class="col-4 form-group">
					<input type="hidden" name="id" value="id" />
					<button onclick="AdicionarTurma();" id="editarAluno" class="btn btn-success botons btn-block">Salvar</button>
				</div>
			</div>
			
		</div>
		
		
		<div class="container" style=""id="divTurma">
			<div class="row">
				
				<div class="col-8 form-group">
					<label for="nome">Nome:</label>
					<input type="text" name="nome" id="nome" class="form-control"/>
				</div>
				<div class="col-4 form-group">
					<label for="matricula">Matrícula:</label>
					<input type="text" name="matricula" id="matricula" class="form-control"/>
				</div>
			</div>
			<div class="row">
				
				<div class="col-6 form-group">
					<label for="email">E-mail:</label>
					<input type="text" name="email" id="email" class="form-control"/>
				</div>
				<div class="col-6 form-group">
					<label for="cpf">CPF:</label>
					<input type="text" name="cpf" id="cpf" class="form-control" />
				</div>
			</div>
			<div class = "row">
			<div class="col-4 form-group">
					<input type="hidden" name="id" value="id" />
					<button onclick="loginA();" id="login" type="button"  class="btn btn-success botons btn-block">Salvar</button>
				</div>
			</div>
		</div>
	</div>	
</form>

	
</body>

<script>
	
	function loginA(){
		nome = document.getElementById("nome").value;
		matricula = document.getElementById("matricula").value;
		email = document.getElementById("email").value;
		cpf = document.getElementById("cpf").value;
		password = 123456;
		var alunoDB = firebase.database().ref("Alunos");
		var aluno = { "nome": nome, "matricula": matricula,  "Email": email, "cpf": cpf};
		alunoDB.push(aluno);
		document.getElementById("nome").value="";
		document.getElementById("matricula").value="";
		document.getElementById("email").value="";
		document.getElementById("cpf").value="";
		window.alert("Aluno salvo com sucesso!")	
		criarUsuario(email);


	}
	
</script>

<script>

function mostrarDiv (){
	
	
	if(document.getElementById("aluno").checked){
		document.getElementById("divAluno").style = "";
	}
	else{
		document.getElementById("divAluno").style = "display: none";
	}
	
	if(document.getElementById("turma").checked){
		document.getElementById("divTurma").style = "";
	}
	else{
		document.getElementById("divTurma").style = "display: none";	
	}
}
</script>

<script> 
function criarUsuario(email){
	password = gerarPassword();

	window.alert(password);
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
		//window.alert("criou usuario");
	}, function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		//window.alert(errorMessage);
	});
}

function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}


</script>
