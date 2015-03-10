angular.module('starter.controllers', [])

.controller('MessageCtrl', function($scope, $http) {
	$scope.texto_mensagem = "Valor mensagem";

	$scope.buscarMensagem = function(){
		$http.get('http://192.168.1.32/retornos_ionic/buscar_mensagem.php').
		  success(function(data, status, headers, config) {
		    $scope.texto_mensagem = data.mensagem;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    $scope.texto_mensagem = "Novo valor mensagem2";
		});
	};

	$scope.enviarMensagem = function(){

		var number 	= 91415800;
        var message = $scope.texto_mensagem;

        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error 	= function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);

	};
});
