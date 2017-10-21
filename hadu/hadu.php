<?php  
if(isset($_GET["type"]) && $_GET["type"] == 'album'){
$request = 'http://www.theaudiodb.com/api/v1/json/195003/searchalbum.php?a='.urlencode($_GET["value"]);
}
if(isset($_GET["type"]) && $_GET["type"] == 'artist'){
$request = 'http://www.theaudiodb.com/api/v1/json/195003/searchalbum.php?s='.urlencode($_GET["value"]);
}
if(isset($_GET["type"]) && $_GET["type"] == 'albuminfo'){
$request = 'http://www.theaudiodb.com/api/v1/json/195003/album.php?m='.urlencode($_GET["value"]);
}
if(isset($_GET["type"]) && $_GET["type"] == 'tracksinfo'){
$request = 'http://www.theaudiodb.com/api/v1/json/195003/track.php?m='.urlencode($_GET["value"]);
}
 $response  = file_get_contents($request);            
    $jsonobj  = json_decode($response);
    echo $response;
?>