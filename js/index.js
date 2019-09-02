$ ( document).ready(function() {
  $('.image-section').hide();
  $('.previewImage').hide();
  $('#btn-upload').hide();
  $('#prediction').hide();
  $('#predictionButton').hide();
  $('.loader').hide();




  function preview_image(event)
  {
   var reader = new FileReader();
   reader.onload = function() {
    var output = document.getElementById('previewImage');
    output.src = reader.result;
    console.log(reader.result)
  //    url=
   }
   reader.readAsDataURL(event.target.files[0]);
  }


  $("#imageUpload").change(function () {
    $('#btn-upload').show();
    $('.image-section').hide();
    $('#prediction').hide();
    $('#predictionButton').hide();
    $('.loader').hide();
    // readURL(this);
  });

  $("#btn-upload").click(function (){
    $('.image-section').show();
    $('#predictionButton').show();
    $('.loader').hide();
  });

  const img = document.getElementById('previewImage');

  // lOADING Coco
  $('#predictionButton').click(function(){
    $('.loader').show();
    cocoSsd.load().then(model => {

        // detect objects in the image.
        model.detect(img).then(predictions => {
          console.log('Predictions: ', predictions);
          console.log(predictions[0].class);
          $('.loader').hide();
          $('#prediction').html(`Result:  ${predictions[0].class}`);
          $('#prediction').show();

        });
      });
  })
});
