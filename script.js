function AlumnosController($scope){

	$scope.alumnos=[
		{nombre:"Victor Hugo Lopez", telefono:"123456", curso:"Android"},
		{nombre:"Luis Adrian", telefono:"9898756", curso:"Java"},
		{nombre:"Neivy Orozco", telefono:"565656", curso:"JQuery"},
		{nombre:"Daniela Lopez", telefono:"478909", curso:"AngularJs"},
	];

	$scope.Save=function(){
		$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});
		$scope.formVisibility=false;
		console.log($scope.formVisibility);
	}

	$scope.ShowForm=function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	}
}

