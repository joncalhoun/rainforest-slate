---
includes:
  - jon
---

# Authentication

> Authenticate by setting your API key

```ruby
require 'rainforest'
Rainforest.api_key = 'your-api-key'
```

```python
import rainforest
rainforest.API_KEY = "your-api-key"
```

```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key";
```

```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";
?>
```


> Make sure to replace `your-api-key` with your API key.

Rainforest uses API keys to allow access to the API. You can find your API key in the [integrations](https://app.rnfrst.com/settings/integrations) section of Rainforest.
