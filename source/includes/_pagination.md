# Pagination

> Retrieve the second page

```ruby
require 'rainforest'
Rainforest.api_key = 'your-api-key'

runs_pg_2 = Rainforest::Run.all(:page => 2)
```

```php
#TODO: Add php samples
require 'rainforest'
Rainforest.api_key = 'your-api-key'

runs_pg_2 = Rainforest::Run.all(:page => 2)
```

```javascript
//TODO: Add node samples
require 'rainforest'
Rainforest.api_key = 'your-api-key'

runs_pg_2 = Rainforest::Run.all(:page => 2)
```

```python
#TODO: Add python samples
require 'rainforest'
Rainforest.api_key = 'your-api-key'

runs_pg_2 = Rainforest::Run.all(:page => 2)
```

> Set the page size

```ruby
require 'rainforest'
Rainforst.api_key = 'your-api-key'

runs = Rainforest::Run.all(:page_size => 25)
```

```php
#TODO: Add php samples
require 'rainforest'
Rainforst.api_key = 'your-api-key'

runs = Rainforest::Run.all(:page_size => 25)
```

```javascript
//TODO: Add node samples
require 'rainforest'
Rainforst.api_key = 'your-api-key'

runs = Rainforest::Run.all(:page_size => 25)
```

```python
#TODO: Add python samples
require 'rainforest'
Rainforst.api_key = 'your-api-key'

runs = Rainforest::Run.all(:page_size => 25)
```

Nearly all API calls used to list a resource support pagination. To specify your page simply pass in the `page` parameter.

You can also set the `page_size` to determine how many resources will be included in each page. For example
