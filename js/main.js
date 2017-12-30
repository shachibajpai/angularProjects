var app = angular.module("myApp", ['ngRoute','ngStorage']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/page1.html',
            controller: 'page1Controller'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'abtController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'cntController'
        })
        .when('/cake', {
            templateUrl: 'pages/cake.html',
            controller: 'cakeController'
        })
        .when('/noodle', {
            templateUrl: 'pages/noodle.html',
            controller: 'noController'
        })
        .when('/starter', {
            templateUrl: 'pages/starter.html',
            controller: 'stController'
        })
        .when('/curry', {
            templateUrl: 'pages/curry.html',
            controller: 'stController'
        })
         .otherwise({
            redirectTo: '/' // provide a redirection URL - maybe a 404 page not found template
        });
});

var images=[];
app.controller('page1Controller',function($scope){

});
app.controller('abtController',function($scope){
$scope.m="Welcome to our site about cooking with whole, natural foods. We highlight recipes from favorite cookbooks, as well as recipes we write for you - inspired by ingredients that intersect our life, travels, and everyday interests.";
});
app.controller('cntController',function($scope){
$scope.m="You can contact us: 9535689741";
});
app.controller('cakeController',function($scope,$http,$localStorage){
		// $scope.caRev=$localStorage.t1;
		$scope.review_list=[];
		$scope.reve	=[{"review":"cake was tasty","id":0}];
		
		
	$http({	
		method: 'GET',
		url: 'js/data.json'
	}).success( function (response){
		$scope.images=response.cakes;
		console.log($scope.images);

		$scope.fun=function(n){
			console.log(n);
			console.log(n.cake);
			$scope.disp="true";
			$scope.display="true";
			$scope.x=n.cake.name;
			$scope.y=n.cake.img;
			$scope.z=n.cake.ing;
			$scope.u=n.cake.recepie;
		}
        
        $scope.selecteditem=function(i){
        	console.log(i);
        	$scope.cakeId=i;
        	console.log($scope.cakeId)
        }

		$scope.send=function(s){
			console.log(s)

			$scope.reve_n=[];
			$localStorage.t1=$scope.reve;
			if($localStorage.t1){
				$scope.reve_n=$localStorage.t1;				
				$scope.reve_n.push({"review":$scope.r,"id": $scope.cakeId});
				$localStorage.t1=$scope.reve_n;	
				}
			else{
				$localStorage.t1=$scope.reve;
				// delete($localStorage.t1);
			}

			console.log($scope.reve_n)
		}
		
		$scope.reviews=function(selectedCake){
			$scope.selectedReviewList = [];
			if ($localStorage.t1) {
				$scope.review_list=$localStorage.t1;
			}
			else{
				$scope.review_list=[];
			}
			if ($scope.review_list.length>0) {
				for (var i =0;i< $scope.review_list.length;  i++) {
					//$scope.review_list[i];
					//console.log($scope.review_list[i])
					if($scope.review_list[i].id == selectedCake.id)
					{
						$scope.selectedReviewList.push({"review":$scope.review_list[i].review});
						console.log($scope.selectedReviewList);
					}
					
				};
			}
			else{
				console.log("no reviews found");
			}

		}
	
	
	})
});
app.controller('noController',function($scope,$http,$localStorage){
	$scope.noRev=$localStorage.t2;
	$scope.review_list=[];
	$scope.reve	=[{"review":"tasty noodles","id":0}];
	$http({	
		method: 'GET',
		url: 'js/data.json'
	}).success( function (response){
		$scope.images=response.noodles;
		console.log($scope.images);

		$scope.fun=function(n){
			console.log(n);
			$scope.disp="true";
			$scope.display="true";
			$scope.x=n.noodle.name;
			$scope.y=n.noodle.img;
			$scope.z=n.noodle.ing;
			$scope.u=n.noodle.recepie;
		}

		$scope.selecteditem=function(i){
        	console.log(i);
        	$scope.noodleId=i;
        	console.log($scope.noodleId)
        }

		$scope.send=function(s){
			console.log(s)
			$scope.reve_no=[];
			if($localStorage.t2){
				$scope.reve_no=$localStorage.t2;				
				$scope.reve_no.push({"review":$scope.n,"id":$scope.noodleId});
				$localStorage.t2=$scope.reve_no;
				
			}
			else{
				$localStorage.t2=$scope.reve;
				// delete($localStorage.t2);
			}

			console.log($scope.reve_no)
		}
		
			$scope.reviews=function(selectedNoodle){
			$scope.selectedReviewList = [];
			if ($localStorage.t2) {
				$scope.review_list=$localStorage.t2;
			}
			else{
				$scope.review_list=[];
			}
			if ($scope.review_list.length>0) {
				for (var i =0;i< $scope.review_list.length;  i++) {
					//$scope.review_list[i];
					//console.log($scope.review_list[i])
					if($scope.review_list[i].id == selectedNoodle.id)
					{
						$scope.selectedReviewList.push({"review":$scope.review_list[i].review});
						console.log($scope.selectedReviewList);
					}
					
				};
			}
			else{
				console.log("no reviews found");
			}

		}
	})
	
	
	
});
app.controller('stController',function($scope,$http,$localStorage){
	$scope.stRev=$localStorage.t3;
		$scope.review_list=[];
		$scope.reve	=[{"review":"starter was tasty","id":0}];
	
	$http({	
		method: 'GET',
		url: 'js/data.json'
	}).success( function (response){
		$scope.images=response.starter;
		console.log($scope.images)
	
	$scope.fun=function(n){
			console.log(n);
			console.log(n.st);
			$scope.disp="true";
			$scope.display="true";
			$scope.x=n.st.name;
			$scope.y=n.st.img;
			$scope.z=n.st.ing;
			$scope.u=n.st.recepie;
		}

		$scope.selecteditem=function(i){
        	console.log(i);
        	$scope.stId=i;
        	console.log($scope.stId)
        }

        $scope.send=function(s){
			console.log(s)

			$scope.reve_n=[];
			$localStorage.t3=$scope.reve;
			if($localStorage.t3){
				$scope.reve_n=$localStorage.t3;				
				$scope.reve_n.push({"review":$scope.r,"id": $scope.stId});
				$localStorage.t3=$scope.reve_n;	
				}
			else{
				$localStorage.t3=$scope.reve;
				// delete($localStorage.t1);
			}

			console.log($scope.reve_n)
		}
		
		$scope.reviews=function(selectedSt){
			$scope.selectedReviewList = [];
			if ($localStorage.t3) {
				$scope.review_list=$localStorage.t3;
			}
			else{
				$scope.review_list=[];
			}
			if ($scope.review_list.length>0) {
				for (var i =0;i< $scope.review_list.length;  i++) {
					//$scope.review_list[i];
					//console.log($scope.review_list[i])
					if($scope.review_list[i].id == selectedSt.id)
					{
						$scope.selectedReviewList.push({"review":$scope.review_list[i].review});
						console.log($scope.selectedReviewList);
					}
					
				};
			}
			else{
				console.log("no reviews found");
			}

		}
	})
	
	
	
});
app.controller('cuController',function($scope,$http,$localStorage){
	$scope.stRev=$localStorage.t4;
		$scope.review_list=[];
		$scope.reve	=[{"review":"curry was tasty","id":0}];	
	$http({	
		method: 'GET',
		url: 'js/data.json'
	}).success( function (response){
		$scope.images=response.curry;
		console.log($scope.images);

		$scope.fun=function(n){
			console.log(n);
			console.log(n.cu);
			$scope.disp="true";
			$scope.display="true";
			$scope.x=n.cu.name;
			$scope.y=n.cu.img;
			$scope.z=n.cu.ing;
			$scope.u=n.cu.recepie;
		}

		$scope.selecteditem=function(i){
        	console.log(i);
        	$scope.cuId=i;
        	console.log($scope.cuId)
        }

		$scope.send=function(s){
			console.log(s)

			$scope.reve_n=[];
			$localStorage.t4=$scope.reve;
			if($localStorage.t4){
				$scope.reve_n=$localStorage.t4;				
				$scope.reve_n.push({"review":$scope.r,"id": $scope.cuId});
				$localStorage.t4=$scope.reve_n;	
				}
			else{
				$localStorage.t4=$scope.reve;
				// delete($localStorage.t1);
			}

			console.log($scope.reve_n)
		}
		
		$scope.reviews=function(selectedCu){
			$scope.selectedReviewList = [];
			if ($localStorage.t4) {
				$scope.review_list=$localStorage.t4;
			}
			else{
				$scope.review_list=[];
			}
			if ($scope.review_list.length>0) {
				for (var i =0;i< $scope.review_list.length;  i++) {
					//$scope.review_list[i];
					//console.log($scope.review_list[i])
					if($scope.review_list[i].id == selectedCu.id)
					{
						$scope.selectedReviewList.push({"review":$scope.review_list[i].review});
						console.log($scope.selectedReviewList);
					}
					
				};
			}
			else{
				console.log("no reviews found");
			}

		}
	})
	
	
	
});
