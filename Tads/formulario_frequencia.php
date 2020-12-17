<body class ="">
<!-- <h1>Pesquisa</h1>
<form method="POST" action="pesquisar.php">
	
	<div class="row">

		<div class="col-2 form-group">
			<label for="pesquisa">Pesquisar :</label>
			<input type="text" id="pesquisa" name="pesquisa" class="form-control" onkeyup = "buscar($('#pesquisa').val());" />
		</div>
		<div class="col-2 form-group">
			<button type="button" class="btn btn-info botoes" onclick="buscar($('#pesquisa').val());">Pesquisar</button>
		</div>
	</div>
</form>-->

<form method="POST" action = "salvar.php">
<div class="container">
	<div class="row">
		
		<div class="col-4 form-group">
			<label for="turma">Turma:</label>
			<select type="text" name="turma" value="" class="form-control">
				<option value="exemplo">Exemplo</option>
			</select>
		</div>
		
		<div class="col-4 form-group">
			<label for="data">Data:</label>
			<input type="date" name="data" value="" class="form-control"/>
		</div>
		
		<!--<div class="col-2 form-group">
			<input type="hidden" name="id" value="" />
			<button type="button" class="btn btn-primary botons btn-block">Editar</button>
		</div>-->

		<div class="col-4 form-group">
			<input type="hidden" name="id" value="" />
			<button type="submit" class="btn btn-success botons btn-block">Salvar</button>
		</div>
	</div>
		
</div>
</form>

</body>