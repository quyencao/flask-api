(function(){

    angular.module('app')
           .controller('accountController', ['$scope', '$http', accountController])

    function accountController($scope, $http) {
        $scope.accounts = []
        $scope.account_info = {}
        $scope.account_number = undefined
        $scope.account_update_create = false
        $scope.account_index = 0
        $scope.search_criteria = {}

        $scope.save = function() {
            if($scope.account_number !== undefined) {
                // Update
                $http({
                    method: 'PUT',
                    url: '/account/' + $scope.account_number,
                    data: $scope.account_info
                }).then(function(response) {
                    $scope.accounts[$scope.account_index] = Object.assign({}, $scope.account_info)
                    $scope.hideModal()
                }, function(error) {
                    console.log(error)
                })
            } else {
               // Create
               $http({
                    method: 'POST',
                    url: '/accounts',
                    data: $scope.account_info
               }).then(function(response) {
                    $scope.hideModal()
               }, function(error) {
                    console.log(error)
               })
            }
        }

        $scope.showModal = function(index) {
            if(index !== undefined){
                $scope.account_update_create = true
                $scope.account_info = Object.assign({}, $scope.accounts[index])
                $scope.account_number = $scope.account_info.account_number
                $scope.account_index = index
            } else {
                $scope.account_update_create = false
                $scope.account_info = {}
                $scope.account_number = undefined
            }
            $('#account-modal').modal('show')
        }

        $scope.hideModal = function() {
            $scope.account_info = {}
            $('#account-modal').modal('hide')
        }

        $scope.loadAccount = function() {
            $http({
                method: 'GET',
                url: '/accounts'
            }).then(function(response) {
                $scope.accounts = response.data.data
                $scope.pagination = response.data.pagination
            }, function(error) {
                console.log(error)
            })
        }

        $scope.deleteAccount = function(index) {
            account = $scope.accounts[index]

            $http({
                method: 'DELETE',
                url: '/account/' + account.account_number
            }).then(function(response) {
                $scope.loadAccount()
            }, function(error) {
                console.log(error)
            })
        }

        $scope.getRange = function(last) {
            range = [];

            for(let i = 1; i <= last; i++) {
                range.push(i);
            }

            return range;
        }

        $scope.getPage = function(page) {

            $http({
                method: 'GET',
                url: '/accounts',
                params: {page: page}
            }).then(function(response) {
                $scope.accounts = response.data.data
                $scope.pagination = response.data.pagination
            }, function(error) {
                console.log(error)
            })
        }

        $scope.searchAccount = function() {
            $http({
                method: 'GET',
                url: '/accounts',
            }).then(function(response) {
                $scope.accounts = response.data.data
                $scope.pagination = response.data.pagination
            }, function(error) {
                console.log(error)
            })

        }

        $scope.loadAccount()
    }

}())

