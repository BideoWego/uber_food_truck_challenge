// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

var displayFlashMessage = function(message, type) {
  type = type || 'info';
  $('#flash-message').alert('close');
  var flashMessage = '<div id="flash-message" class="alert alert-' + type +'">' +
                        message +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + 
                          '<span aria-hidden="true">&times;</span>' + 
                        '</button>' +
                      '</div>';
  $($('body')[0]).prepend(flashMessage);
  $('#flash-message').alert();
};
