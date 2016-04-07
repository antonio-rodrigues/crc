//(function(){
// must be xposed to global scope

  function isUndefined(value){
    // Obtain `undefined` value that's
    //  guaranteed to not have been re-assigned
    var undefined = void(0);
    return value === undefined;
  }
  
  // add more util funcs here
var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input ) {
  var label	    = input.nextElementSibling,
      labelVal  = label.innerHTML;

  input.addEventListener( 'change', function( e ) {
    var fileName = '';
    fileName = e.target.value.split( '\\' ).pop();
    console.log('fileName: ', fileName);
    if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });

  // Firefox focus bug fix
  input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
  input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
});

//}());