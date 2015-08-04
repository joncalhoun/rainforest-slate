
$(function (global) {
  'use strict';

  var current_api_key = "your-api-key";

  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
  }

  var getApiKeyUrl = function() {
    return $.urlParam('api_key');
  };

  var getApiKeyInput = function() {
    return $("#input-api-key").val();
  };

  var updateApiKeys = function(api_key) {

    if ( api_key ) {
      var regex = new RegExp("(\"|')"+current_api_key+"(\"|')", "g");
      current_api_key = api_key;

      $.each($('pre'), function(index, value) {
        $(value).html($(value).html().replace(regex, "'"+api_key+"'"));
      });
    }
  }

  // Check url for api key on load
  $(updateApiKeys(getApiKeyUrl()));

  // Watch api input field for api updates
  $("#input-api-key").keyup( function(){
    $(updateApiKeys(getApiKeyInput()));
  });

});
