angular
    .module('hgnApp',['ngRoute', 'LocalStorageModule'])
    .config(function($routeProvider) {
        $routeProvider
        .when("/page2/:apartmentId", {
            templateUrl : "page2.html",
            controller : "page2Crtl"
        })    
        .when("/home", {
            templateUrl : "home.html",
            controller : "homeCrtl"
        })
        .when("/insertpage", {
            templateUrl : "insertpage.html",
            controller : "insertCtrl"
        });
    })
    .controller('MainCtrl', function($scope) {
        console.log('This is a log from controller')
    })
    .controller('InputTexttoFilter',function($scope){

        $scope.addtext = function(textProduct){
            $scope.textProduct.push($scope)
        }

    })
    .controller('page2Crtl', function ($http,$scope,$routeParams) {
        $scope.msg = "page2Crtl";
        $scope.apartmentId = $routeParams.apartmentId;

        $http.get('/dataset.json').then(function(data){
            $scope.products = data.data;
            console.log($scope.products)

            for(var product of $scope.products){

                console.log(product.apartmentId)
                console.log($scope.apartmentId)

                if(product.apartmentId == $scope.apartmentId){
                    $scope.product = product
                    console.log(product)
                }
            }

            if(!$scope.product){
                $scope.isPagenotfound = true;
            }
        })



    })
    .controller('homeCrtl', function ($http,$scope) {
        
        $scope.products = [];

        $http.get('/dataset.json').then(function(data){
            $scope.products = data.data;
            console.log(data)
        })
    })
    .controller('insertCtrl', function($scope, localStorageService) {
        //...set
        $scope.inputName = "";
        $scope.submit = function(key, val,key, val,key, val){
            console.log(key);
            console.log(val);
            localStorageService.set(key, val,key, val,key, val);
            console.log(localStorageService.get(key));
            
        }
        //...
      })

   

    