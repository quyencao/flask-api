angular.module('app')
    .controller('accountMaintainanceController', ['$scope', '$uibModalInstance', 'accountService',
                                'selectedAccount', 'action',
        function ($scope, $uibModalInstance, accountService, selectedAccount, action) {
        $scope.account = selectedAccount;
        $scope.action = action;
        $scope.title = action ? 'Create New Account' : 'Edit ' + selectedAccount.account_number;

        $scope.save = function () {
            if(action) {
                // Create
                accountService.createAccount($scope.account, $scope.actionSuccessComplete, $scope.actionErrorComplete);
            } else {
                // Update
                accountService.updateAccount($scope.account, $scope.actionSuccessComplete, $scope.actionErrorComplete);
            }
        };

        $scope.actionSuccessComplete = function(response, status) {
            $uibModalInstance.close($scope.account)
        };

        $scope.actionErrorComplete = function() {

        };

        $scope.close = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }]);