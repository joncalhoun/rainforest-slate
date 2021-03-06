# Pagination

> Retrieve the second page

```ruby
require 'rainforest'
Rainforest.api_key = 'your-api-key'

runs_pg_2 = Rainforest::Run.all(:page => 2)
```


```python
import rainforest
rainforest.API_KEY = "your-api-key"

runs_pg_2 = rainforest.Run.all(params={
    'page': 2
})
```


```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key";

Rainforest.Run.all({ page: 2 }).then(function(runs) {
  // Use the runs
});
```



```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$runsPg2 = \Rainforest\Run::all(["page" => 2]);
?>
```


> Set the page size

```ruby
require 'rainforest'
Rainforst.api_key = 'your-api-key'

runs = Rainforest::Run.all(:page_size => 25)
```


```python
import rainforest
rainforest.API_KEY = "your-api-key"

runs = rainforest.Run.all(params={
    'page_size': 25
})
```


```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key";

Rainforest.Run.all({ page_size: 25 }).then(function(runs) {
  // Handle the runs.
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$runsPg2 = \Rainforest\Run::all( ["page_size" => 25] );
?>
```

Nearly all API calls used to list a resource support pagination. To specify your page simply pass in the `page` parameter.

You can also set the `page_size` to determine how many resources will be included in each page. For example
