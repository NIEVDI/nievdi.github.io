jQuery('document').ready(function () {

   jQuery('button').on('click', function () {
      var a, b, c
      a = jQuery('#a').val()
      b = jQuery('#b').val()


      a = parseInt(a)
      b = parseInt(b)

      c = a + b

      alert(c)
   })

})