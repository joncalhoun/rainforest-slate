# Environments

## The Environment Object

```ruby
#<Rainforest::Environment:0x3ff73d710894 id=1> Attributes: {
  "created_at": "2015-03-18T01:13:52Z",
  "default": true,
  "id": 1,
  "name": "testing 123",
  "site_environments": [
    {"id":17,"created_at":"2015-07-01T01:08:51Z","site_id":10,"environment_id":1,"url":"http://www.test.com"},
    {"id":1,"created_at":"2015-03-18T01:13:52Z","site_id":1,"environment_id":1,"url":"https://www.apibits-test.com"}
  ],
  "webhook": "",
  "webhook_enabled": null
}
```



```javascript
{ id: 4871,
  created_at: '2015-08-02T00:01:39Z',
  name: 'my testing environment',
  default: false,
  webhook: '',
  webhook_enabled: null,
  site_environments:
   [ { id: 5609,
       created_at: '2015-08-02T00:01:39Z',
       site_id: 860,
       environment_id: 4871,
       url: 'http://www.example.org' } ] }
```


```php
object(Rainforest\Environment)#13 (10) {
  ["created_at"]=>
  string(20) "2015-08-04T19:46:42Z"
  ["default"]=>
  bool(true)
  ["id"]=>
  int(4904)
  ["name"]=>
  string(11) "testing 123"
  ["site_environments"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(5652)
      ["created_at"]=>
      string(20) "2015-08-04T19:46:42Z"
      ["site_id"]=>
      int(860)
      ["environment_id"]=>
      int(4904)
      ["url"]=>
      string(22) "http://www.example.org"
    }
  }
  ["webhook"]=>
  string(0) ""
  ["webhook_enabled"]=>
  NULL
}
```





TODO: Fill this in.

Attributes |           |
---------- | --------- |
**id** <div class="attr attr-type">string</div> | TODO: Add some info about the created_at attribute
**created_at** <div class="attr attr-type">datetime</div> | TODO: Add some info about the attribute
**default** <div class="attr attr-type">boolean</div> | TODO: Add some info about the attribute
**name** <div class="attr attr-type">string</div> | TODO: Add some info about the attribute
**site_environments** | TODO: Add some info about the attribute
**webhook** <div class="attr attr-type">string</div> | TODO: Add some info about the attribute
**webhook_enabled** <div class="attr attr-type">boolean</div> | TODO: Add some info about the attribute


## Create an Environment

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

env = Rainforest::Environment.create(
  :default => false,
  :name => "my testing environment"
)
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

Rainforest.Environment.create({
  default: false,
  name: "my testing environment"
}).then(function(env) {
  // Use env
}).catch(function(e) {
  // Handle the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$env = \Rainforest\Environment::create([
  "default" => false,
  "name" => "my testing environment"
]);
?>
```

> Example Response

```ruby
#<Rainforest::Environment:0x3ff73d6c9d18 id=13> Attributes: {
  "created_at": "2015-07-22T18:16:25Z",
  "default": false,
  "id": 13,
  "name": "my testing environment",
  "site_environments": [
    {"id":24,"created_at":"2015-07-22T18:16:25Z","site_id":1,"environment_id":13,"url":"http://www.example.org"},
    {"id":23,"created_at":"2015-07-22T18:16:25Z","site_id":10,"environment_id":13,"url":"http://www.example.org"}
  ],
  "webhook": "",
  "webhook_enabled": null
}
```



```javascript
{ id: 4871,
  created_at: '2015-08-02T00:01:39Z',
  name: 'my testing environment',
  default: false,
  webhook: '',
  webhook_enabled: null,
  site_environments:
   [ { id: 5609,
       created_at: '2015-08-02T00:01:39Z',
       site_id: 860,
       environment_id: 4871,
       url: 'http://www.example.org' } ] }
```

```php
object(Rainforest\Environment)#13 (10) {
  ["created_at"]=>
  string(20) "2015-08-04T19:22:40Z"
  ["default"]=>
  bool(false)
  ["id"]=>
  int(4903)
  ["name"]=>
  string(22) "my testing environment"
  ["site_environments"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(5651)
      ["created_at"]=>
      string(20) "2015-08-04T19:22:40Z"
      ["site_id"]=>
      int(860)
      ["environment_id"]=>
      int(4903)
      ["url"]=>
      string(22) "http://www.example.org"
    }
  }
  ["webhook"]=>
  string(0) ""
  ["webhook_enabled"]=>
  NULL
}
```

TODO: Fill this in.


Arguments |           |
--------- | --------- |
**name** <div class="attr attr-required">required</div> <div class="attr attr-type">string</div> | The name you want to use for this environment.
**default** <div class="attr attr-type">boolean</div> | Whether or not this environment should be the default environment.
**webhook** <div class="attr attr-type">string</div> | TODO: Fill this in.
**webhook_enabled** <div class="attr attr-type">boolean</div> | TODO: Fill this in.


## Retrieve an Environment

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 13
env = Rainforest::Environment.retrieve(id)
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 4817;
Rainforest.Environment.retrieve(id).then(function(env) {
  // Use env
}).catch(function(e) {
  // Handle the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 4904;
$env = \Rainforest\Environment::retrieve( $id );
?>
```


> Example Response

```ruby
#<Rainforest::Environment:0x3ff73d6c9d18 id=13> Attributes: {
  "created_at": "2015-07-22T18:16:25Z",
  "default": false,
  "id": 13,
  "name": "my testing environment",
  "site_environments": [
    {"id":24,"created_at":"2015-07-22T18:16:25Z","site_id":1,"environment_id":13,"url":"http://www.example.org"},
    {"id":23,"created_at":"2015-07-22T18:16:25Z","site_id":10,"environment_id":13,"url":"http://www.example.org"}
  ],
  "webhook": "",
  "webhook_enabled": null
}
```



```javascript
{ id: 4871,
  created_at: '2015-08-02T00:01:39Z',
  name: 'my testing environment',
  default: false,
  webhook: '',
  webhook_enabled: null,
  site_environments:
   [ { id: 5609,
       created_at: '2015-08-02T00:01:39Z',
       site_id: 860,
       environment_id: 4871,
       url: 'http://www.example.org' } ] }
```



```php
object(Rainforest\Environment)#13 (10) {
  ["created_at"]=>
  string(20) "2015-08-04T19:46:42Z"
  ["default"]=>
  bool(true)
  ["id"]=>
  int(4904)
  ["name"]=>
  string(11) "testing 123"
  ["site_environments"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(5652)
      ["created_at"]=>
      string(20) "2015-08-04T19:46:42Z"
      ["site_id"]=>
      int(860)
      ["environment_id"]=>
      int(4904)
      ["url"]=>
      string(22) "http://www.example.org"
    }
  }
  ["webhook"]=>
  string(0) ""
  ["webhook_enabled"]=>
  NULL
}
```

TODO: Fill this in.


Arguments |           |
--------- | --------- |
**id** <div class="attr attr-required">required</div> <div class="attr attr-type">integer</div> | The id of the environment you want to retrieve.


## Update an Environment

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 13
env = Rainforest::Environment.update(id, :name => "new env name")
# or
env = Rainforest::Environment.retrieve(id)
env.name = "new env name"
env.save
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 4871;
Rainforest.Environment.update(id, {
  name: "new env name"
}).then(function(env) {
  // Use env
}).catch(function(e) {
  // Handle the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 4904;

$env = \Rainforest\Environment::update( $id, ["name" => "new env name"] );

# or

$env = \Rainforest\Environment::retrieve( $id );
$env->name = "new env name";
$env->save();
?>
```


> Example Response

```ruby
#<Rainforest::Environment:0x3ff73d6c9d18 id=13> Attributes: {
  "created_at": "2015-07-22T18:16:25Z",
  "default": false,
  "id": 13,
  "name": "my testing environment",
  "site_environments": [
    {"id":24,"created_at":"2015-07-22T18:16:25Z","site_id":1,"environment_id":13,"url":"http://www.example.org"},
    {"id":23,"created_at":"2015-07-22T18:16:25Z","site_id":10,"environment_id":13,"url":"http://www.example.org"}
  ],
  "webhook": "",
  "webhook_enabled": null
}
```



```javascript
{ id: 4871,
  created_at: '2015-08-02T00:01:39Z',
  name: 'my testing environment',
  default: false,
  webhook: '',
  webhook_enabled: null,
  site_environments:
   [ { id: 5609,
       created_at: '2015-08-02T00:01:39Z',
       site_id: 860,
       environment_id: 4871,
       url: 'http://www.example.org' } ] }

```


```php
object(Rainforest\Environment)#13 (10) {
  ["created_at"]=>
  string(20) "2015-08-04T19:46:42Z"
  ["default"]=>
  bool(true)
  ["id"]=>
  int(4904)
  ["name"]=>
  string(12) "new env name"
  ["site_environments"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(5652)
      ["created_at"]=>
      string(20) "2015-08-04T19:46:42Z"
      ["site_id"]=>
      int(860)
      ["environment_id"]=>
      int(4904)
      ["url"]=>
      string(22) "http://www.example.org"
    }
  }
  ["webhook"]=>
  string(0) ""
  ["webhook_enabled"]=>
  NULL
}
  ```
TODO: Fill this in.


Arguments |           |
--------- | --------- |
**id** <div class="attr attr-required">required</div> <div class="attr attr-type">integer</div> | The id of the environment you want to retrieve.
**name** <div class="attr attr-type">integer</div> | The new name for the environment.



## List all Environments

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

envs = Rainforest::Environment.all

# The list is enumerable and works similarly to an array
envs.each do |env|
  # work with an environment
end

envs[0] # The first environment in the list
envs.length # the number of environments returned
```



```javascript
var _ = require('lodash');
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

Rainforest.Environment.all().then(function(envs) {
  _.each(envs.data, function(env) {
    // Work with each env
  });
}).catch(function(e) {
  // Handle error
});
```



```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$envs = \Rainforest\Environment::all();

# The list is enumerable and works similarly to an array
foreach( $envs->data as $env ) {
  # work with an environment
}

$envs->data[0]; # The first environment in the list
count( $envs->data ); # the number of environments returned
?>
```


> Example Response

```ruby
#<Rainforest::ApiList[Rainforest::Environment]:0x3ff73d57a598> Data: [
  "#<Rainforest::Environment:0x3ff73d577dac id=13>",
  "#<Rainforest::Environment:0x3ff73d661bb4 id=18>"
]


```



```javascript
{ data:
   [ { id: 4866,
       created_at: '2015-08-01T23:56:19Z',
       name: 'my testing environment',
       default: false,
       webhook: '',
       webhook_enabled: null,
       site_environments:
        [ { id: 5604,
            created_at: '2015-08-01T23:56:19Z',
            site_id: 860,
            environment_id: 4866,
            url: 'http://www.example.org' } ] },
      {...},
      {...} ] }
```


```php
object(Rainforest\ApiList)#13 (5) {
  ["data"]=>
  array(2) {
    [0]=>
    object(Rainforest\Environment)#14 (11) {
      ["created_at"]=>
      string(20) "2013-11-05T02:17:14Z"
      ["default"]=>
      bool(true)
      ["id"]=>
      int(1144)
      ["name"]=>
      string(7) "Staging"
      ["site_environments"]=>
      array(1) {
        [0]=>
        array(5) {
          ["id"]=>
          int(744)
          ["created_at"]=>
          string(20) "2013-11-05T02:17:14Z"
          ["site_id"]=>
          int(860)
          ["environment_id"]=>
          int(1144)
          ["url"]=>
          string(25) "http://blog.accordive.com"
        }
      }
       ...},
      {...},
      {...}
    ]}
```

TODO: Fill this in.


## Delete an Environment

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 13
response = Rainforest::Environment.delete(id)
# or
env = Rainforest::Environment.retrieve(id)
env.delete
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 13;
Rainforest.Environment.delete(id).then(function() {
  // Environment was deleted successfully
}).catch(function(e) {
  // Handle the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 4904;

$env = \Rainforest\Environment::delete( $id );

# or

$env = \Rainforest\Environment::retrieve( $id );
$env->delete();
?>
```



> Example Response

```ruby
{}
```



```javascript
{}
```

```php
array(0) {
}
```

TODO: Fill this in.


## List an Environment's Runs

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 13
env = Rainforest::Environment.retrieve(id)
runs = env.runs.all
# or
runs = Rainforest::Environment.new(id).runs.all

# The list is enumerable and works similarly to an array
runs.each do |run|
  # work with an run
end

runs[0] # The first run in the list
runs.length # the number of runs
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 4859;
Rainforest.Environment.retrieve(id).then(function(env) {
  // Get the runs from the environment
  return env.runs().all();
}).then(function(runs) {
  _.each(runs.data, function(run) {
    // Do something with each run
  });
}).catch(function(e) {
  // Handle the error
});
```

```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 4904;

$env = \Rainforest\Environment::retrieve( $id );
$runs = $env->runs()->all();
?>
```


> Example Response

```ruby
<Rainforest::ApiList[Rainforest::Run]:0x3ff73d6a52ec> Data: [
  "#<Rainforest::Run:0x3ff73d678e90 id=4138>",
  "#<Rainforest::Run:0x3ff73d661bb4 id=4242>"
]


```



```javascript
{ data:
   [ { id: 31459,
       created_at: '2015-07-28T15:10:06Z',
       environment:
        { id: 4859,
          created_at: '2015-07-28T14:58:34Z',
          name: 'Production',
          default: true,
          webhook: '',
          webhook_enabled: null,
          site_environments: [ [Object] ] },
       state: 'complete',
       state_details: { name: 'complete', is_final_state: true },
       result: 'passed',
       current_progress:
        { percent: 100,
          total: 1,
          complete: 1,
          eta: { seconds: 0, ts: '2015-08-02T01:42:34.511+00:00' },
          no_result: 0,
          passed: 1,
          failed: 0 },
       timestamps:
        { complete: '2015-07-28T15:12:06.065Z',
          in_progress: '2015-07-28T15:10:07.870Z',
          validating: '2015-07-28T15:10:07.068Z',
          created_at: '2015-07-28T15:10:06.391Z' },
       stats:
        { total_time_for_one_person: 288,
          total_time_for_rainforest: 119.667975,
          total_rainforest_overhead: 1.473634,
          speed_up: 2.41 },
       browsers:
        [ { name: 'android_phone_landscape',
            state: 'disabled',
            description: 'Android Phone Landscape',
            category: 'phone' },
          {...},
          {...} ],
       filters: { tests: [ 17790 ] },
       log_url: null,
       description: null,
       frontend_url: 'https://app.rainforestqa.com/runs/31459',
       total_tests: 1,
       total_passed_tests: 1,
       total_failed_tests: 0,
       total_no_result_tests: 0,
       real_cost_to_run: 1,
       sample_test_titles: [ 'Customer Logos' ] },
       {...},
       {...} ] }
```

```php
object(Rainforest\ApiList)#16 (5) {
  ["data"]=>
  array(0) {
  }
  ["klass"]=>
  string(3) "Run"
  ["client"]=>
  object(Rainforest\DefaultClient)#1 (12) {
    ["clientStats"]=>
    object(Rainforest\ClientStatsEndpoint)#2 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["environments"]=>
    object(Rainforest\EnvironmentsEndpoint)#3 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["generators"]=>
    object(Rainforest\GeneratorsEndpoint)#4 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["integrations"]=>
    object(Rainforest\IntegrationsEndpoint)#5 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["runs"]=>
    object(Rainforest\RunsEndpoint)#6 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["schedules"]=>
    object(Rainforest\SchedulesEndpoint)#7 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["siteEnvironments"]=>
    object(Rainforest\SiteEnvironmentsEndpoint)#8 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["sites"]=>
    object(Rainforest\SitesEndpoint)#9 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["tests"]=>
    object(Rainforest\TestsEndpoint)#10 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["users"]=>
    object(Rainforest\UsersEndpoint)#11 (2) {
      ["client"]=>
      *RECURSION*
      ["parent"]=>
      NULL
    }
    ["headers"]=>
    array(3) {
      ["Accept"]=>
      string(16) "application/json"
      ["Content-Type"]=>
      string(16) "application/json"
      ["CLIENT_TOKEN"]=>
      string(32) "985de0ba7d0820912a33aa696a77319d"
    }
    ["params"]=>
    array(0) {
    }
  }
  ["apiMethod"]=>
  object(Rainforest\ApiMethod)#15 (9) {
    ["path"]=>
    string(23) "/environments/4901/runs"
    ["method"]=>
    string(3) "get"
    ["params"]=>
    array(0) {
    }
    ["headers"]=>
    array(5) {
      ["user_agent"]=>
      string(73) "Rainforest/{Rainforest::getApiVersion()} Rainforest/{Rainforest::VERSION}"
      ["Content-Type"]=>
      string(16) "application/json"
      ["CLIENT_TOKEN"]=>
      string(32) "985de0ba7d0820912a33aa696a77319d"
      ["x_paid_client_user_agent"]=>
      string(124) "{"bindings_version":"0.0.1","lang":"php","lang_version":"5.4.42","platform":"Unknown","publisher":"paid","uname":"no uname"}"
      ["Accept"]=>
      string(16) "application/json"
    }
    ["responseBody"]=>
    string(2) "[]"
    ["responseCode"]=>
    int(200)
    ["error"]=>
    NULL
    ["apiKey"]=>
    NULL
    ["apiBase"]=>
    string(29) "https://app.rnfrst.com/api/1/"
  }
}
```

TODO: Fill this in.
