"use strict";

cfpSpeakerAppModule.controller('LostPasswordCtrl', ['$scope', 'AnonymousService', function($scope, AnonymousService) {
    $scope.model = { email : null };

    $scope.lostPassword = function() {
        
        AnonymousService.lostPassword($scope.model.email)

            .success(function () {
                $scope.feedback = {
                    type: 'info',
                    message: 'Nous venons de vous envoyer un email à l\'adresse spécifiée. Vérifiez vos mails'
                }

            })
            .error(function () {
                $scope.feedback = {
                    type: 'error',
                    message: 'Désolé, nous ne connaissons pas cette adresse email.'
                }
            });

    };
}]);
