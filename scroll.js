$(document).ready(function() {
    $('a[href^="#"]').click(function () { 
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top ;
      
        $('html').animate( { scrollTop: destination }, 1100 );
      
      return false;
    });
  
  });


  $('.btn-leave').click(function() {
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '6da7b6b397ba7f9b5b45874334b086d7-us4',
        'message': {
          'from_email': 'shteniovych7@gmail.com',
          'to': [
              {
                'email': 'vasya7@i.ua',
                'name': 'RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'GGG!',
          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
        }
      }
     }).done(function(response) {
      console.log('sdfsaf');
       console.log(response); // if you're into that sorta thing
     });
  });