# Errors

```ruby
# Errors can be caught using begin/rescue
begin
  # do something that returns an error
rescue Rainforest::ApiError => err
  # work with the error
  # Most data from the request can be accessed from the error
  err.code # http response code
  err.body # http response body (no parsing)
  err.json # http response body (parsed as json)

  err.api_method # returns the Rainforest::ApiMethod used to execute the API call.
end
```

```javascript
// The node library uses bluebird for promises. See https://github.com/petkaantonov/bluebird#error-handling for more info.
Rainforest.Environment.retrieve("invalid-id").then(function(env) {
  // we wont get here with an invalid id
}).catch(function(err) {
  // Handle the error
  console.log(err.apiMethod.response.code); // http response code
  console.log(err.apiMethod.response.body); // raw response body
  console.log(err.json); // json parsed response body

  console.log(err.apiMethod); // returns the ApiMethod used to execute the API call.
});
```

```php
#TODO-PHP -> Figure out how this works and if it works.. Pretty sure I still need to extend the ApiError Class here
<?
# Errors can be caught using try/catch
try {
  # do something that returns an error
} catch (Exception $e) {
  # work with the error
  # Most data from the request can be accessed from the error
  $e->code # http response code
  $e->body # http response body (no parsing)
  $e->json # http response body (parsed as json)

  $e->api_method # returns the Rainforest::ApiMethod used to execute the API call.
}
?>
```
The Rainforest API uses the following error codes:

Code | Meaning
---- | -------
400 | Bad Request -- Your request has something wrong with it
401 | Unauthorized -- Your API key is wrong
404 | Not Found -- The specified resource could not be found
405 | Method Not Allowed -- You tried to access a resource with an invalid method
410 | Gone -- The resource requested has been removed from our servers
50X | Internal Server Error -- We had a problem with our server. If this persists please contact us.


