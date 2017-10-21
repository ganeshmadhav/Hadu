function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var app = angular.module('haduApp',[]);
app.controller('profiledata', function ($scope, $http) {
    $scope.albumdata = [];
    $scope.changeAlbum = function(item) {
        $http({method: "GET", url: "hadu.php", params: {"type":"album", "value":$scope.searchAlbum}})
       .then(
           function(response){
             // success callback
               $scope.albumdata = response;
           }, 
           function(response){
             // failure call back
               alert('failed');
           }
        );
    }
     $scope.changeArtist = function(item) {
        $http({method: "GET", url: "hadu.php", params: {"type":"artist", "value":$scope.searchArtist}})
       .then(
           function(response){
             // success callback
               $scope.artistdata = response;
           }, 
           function(response){
             // failure call back
               alert('failed');
           }
        );
    }
     $scope.elementClick = function(item) {
         $http({method: "GET", url: "hadu.php", params: {"type":"albuminfo", "value":item}})
       .then(
           function(response){
             // success callback
               $scope.albuminfo = response;
               $http({method: "GET", url: "hadu.php", params: {"type":"tracksinfo", "value":$scope.albuminfo.data.album[0].idAlbum}})
               .then(
                   function(response){
                     // success callback
                       $scope.tracksinfo = response;
                       //alert($scope.albuminfo.data.album[0].strDescriptionEN);

                   }, 
                   function(response){
                     // failure call back
                       alert('failed');
                   }
                );
               
           }, 
           function(response){
             // failure call back
               alert('failed');
           }
        );
         
     }
    $scope.houseusers;
});