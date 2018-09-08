document.getElementById('Upload_file').addEventListener('change', Uploading);

//Wgrywanie pliku tekstowego

function Uploading() {
  var plik = document.getElementById('Upload_file').files[0];

  var reader = new FileReader();
  reader.onload = function() {
    var contents = reader.result;

    console.log(reader.result.substring(0));
  }
  reader.readAsText(plik);
}
