angular.module("TODOList", []);
angular.module("TODOList").controller("listaCtrl", function ($scope) {
	$scope.tarefas = [{nome: "Acordar", checked: true}, {nome: "Estudar", checked: true}, {nome: "Dormir", checked: false}];	
	
	$scope.numberConcluidas = function () {
		var cont = 0;
		for(var i = 0; i<$scope.tarefas.length; i++){
			if($scope.tarefas[i].checked){
				cont++;
			}
		}
		return cont;
	}

	$scope.concluidas = $scope.numberConcluidas();

	$scope.addTarefa = function() {
	 	var tarefa = $scope.novaTarefa;
	 	if(!tarefa){
	 		alert("Digite um nome para sua tarefa!");
	 	} else {
	 		$scope.tarefas.push({nome: tarefa, checked: false});
		}
	 }
	 $scope.rmvTarefa = function (index){
	 	if($scope.tarefas[index].checked){
	 		$scope.concluidas--;	
	 	}
	 	$scope.tarefas.splice(index, 1);
	 }

	 $scope.zerarLista = function () {
	 	for (var i = $scope.tarefas.length - 1; i >= 0; i--) {
	 		$scope.rmvTarefa(i);
	 	}
	 }
	 
});

function mudarCor() {
	var cor = document.getElementById('cabecalho');
	var cores = ["#DC143C", "#4682B4", "#FA8072", "#7FFFD4", "#00FF7F","#4B0082", "#696969"];
	cor.style.backgroundColor = cores[Math.floor(Math.random()*cores.length)];
	var cor2 = document.getElementById("corpo");
	cor2.style.backgroundColor = cores[Math.floor(Math.random()*cores.length)];
}

function mudarFonte(){
	var fonte = document.getElementById('corpo');
	var fontes = ["Trebuchet MS","Arial", "Verdana", "Tahoma", "Sans-serif", "Times New Roman", "Georgia"];
	fonte.style.fontFamily = fontes[Math.floor(Math.random()*fontes.length)];
}
