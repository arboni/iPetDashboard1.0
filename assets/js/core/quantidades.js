var petshop = require ("https://petshop-java.herokuapp.com/agendaFuncionario");



 var url="https://petshop-java.herokuapp.com/agendaFuncionario";

  //  Initiate curl
 var ch = curl_init();
// Will return the response, if false it print the response
curl_setopt(ch, CURLOPT_RETURNTRANSFER, true);
// Set the url
curl_setopt(ch, CURLOPT_URL,url);
// Execute
var result = curl_exec(ch);
// Closing
curl_close(ch);

// Will dump a beauty json :3
var_dump(json_decode(result, true));

result = file_get_contents(url);
// Will dump a beauty json :3
var_dump(json_decode(result, true));

result=getdata("https://petshop-java.herokuapp.com/agendaFuncionario");