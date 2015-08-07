# Schedules

## The Schedule Object

```ruby
#<Rainforest::Schedule:0x3fdcc6185a3c id=4> Attributes: {
  "created_at": "2015-03-25T00:19:56Z",
  "filters": {"tests":["all"]},
  "id": 4,
  "repeat_rules": [
    {"id":8,"created_at":"2015-03-25T00:19:56Z","day":"wednesday","time":"01:01"},
    {"id":7,"created_at":"2015-03-25T00:19:56Z","day":"monday","time":"01:01"},
    {"id":6,"created_at":"2015-03-25T00:19:56Z","day":"sunday","time":"01:01"}
  ]
}
```



```javascript
{ id: 193,
  created_at: '2015-08-03T22:41:38Z',
  repeat_rules:
   [ { id: 919,
       created_at: '2015-08-03T22:41:38Z',
       day: 'tuesday',
       time: '10:00' },
     { id: 918,
       created_at: '2015-08-03T22:41:38Z',
       day: 'sunday',
       time: '01:00' } ],
  filters: { tags: [ 'www' ] } }
```

```php
object(Rainforest\Schedule)#13 (7) {
  ["created_at"]=>
  string(20) "2015-08-07T18:06:32Z"
  ["filters"]=>
  array(1) {
    ["tags"]=>
    array(1) {
      [0]=>
      string(3) "www"
    }
  }
  ["id"]=>
  int(218)
  ["repeat_rules"]=>
  array(2) {
    [0]=>
    array(4) {
      ["id"]=>
      int(955)
      ["created_at"]=>
      string(20) "2015-08-07T18:06:32Z"
      ["day"]=>
      string(7) "tuesday"
      ["time"]=>
      string(5) "10:00"
    }
    [1]=>
    array(4) {
      ["id"]=>
      int(954)
      ["created_at"]=>
      string(20) "2015-08-07T18:06:32Z"
      ["day"]=>
      string(6) "sunday"
      ["time"]=>
      string(5) "01:00"
    }
  }
}
```

TODO: Fill this in.

Attributes |           |
---------- | --------- |
**created_at** <div class="attr attr-type">string</div> | TODO: Add some info about `created_at`
**filters** <div class="attr attr-type">string</div> | TODO: Add some info about `filters`
**id** <div class="attr attr-type">string</div> | TODO: Add some info about `id`
**repeat_rules** <div class="attr attr-type">string</div> | TODO: Add some info about `repeat_rules`


## Create a Schedule

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

schedule = Rainforest::Schedule.create(
  :filters => {
    :tags => ["www"]
  },
  :repeat_rules => [
    {
      :day => "sunday",
      :time => "01:00"
    },
    {
      :day => "tuesday",
      :time => "10:00"
    }
  ]
)
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

Rainforest.Schedule.create({
  filters: {
    tags: ["www"]
  },
  repeat_rules: [
    {
      day: "sunday",
      time: "01:00"
    },
    {
      day: "tuesday",
      time: "10:00"
    }
  ]
}).then(function(schedule) {
  // Use schedule
}).catch(function(e) {
  // Handle the error
});

```


```php
<?php
require(dirname(__FILE__) . '/../init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$schedule = \Rainforest\Schedule::create([
    "filters" => [
    "tags" => ["www"]
  ],
  "repeat_rules" => [
    [
      "day" => "sunday",
      "time" => "01:00"
    ],
    [
      "day" => "tuesday",
      "time" => "10:00"
    ]
  ]
]);
?>
```

> Example Response

```ruby
#<Rainforest::Schedule:0x3fd870165f98 id=222> Attributes: {
  "created_at": "2015-07-28T17:01:43Z",
  "filters": {"tags":["www"]},
  "id": 222,
  "repeat_rules": [
    {"id":945,"created_at":"2015-07-28T17:01:43Z","day":"tuesday","time":"10:00"},
    {"id":944,"created_at":"2015-07-28T17:01:43Z","day":"sunday","time":"01:00"}
  ]
}
```



```javascript
{ id: 193,
  created_at: '2015-08-03T22:41:38Z',
  repeat_rules:
   [ { id: 919,
       created_at: '2015-08-03T22:41:38Z',
       day: 'tuesday',
       time: '10:00' },
     { id: 918,
       created_at: '2015-08-03T22:41:38Z',
       day: 'sunday',
       time: '01:00' } ],
  filters: { tags: [ 'www' ] } }
```

```php
object(Rainforest\Schedule)#13 (7) {
  ["created_at"]=>
  string(20) "2015-08-07T18:06:32Z"
  ["filters"]=>
  array(1) {
    ["tags"]=>
    array(1) {
      [0]=>
      string(3) "www"
    }
  }
  ["id"]=>
  int(218)
  ["repeat_rules"]=>
  array(2) {
    [0]=>
    array(4) {
      ["id"]=>
      int(955)
      ["created_at"]=>
      string(20) "2015-08-07T18:06:32Z"
      ["day"]=>
      string(7) "tuesday"
      ["time"]=>
      string(5) "10:00"
    }
    [1]=>
    array(4) {
      ["id"]=>
      int(954)
      ["created_at"]=>
      string(20) "2015-08-07T18:06:32Z"
      ["day"]=>
      string(6) "sunday"
      ["time"]=>
      string(5) "01:00"
    }
  }
}
```

TODO: Fill this in.


Arguments |           |
--------- | --------- |
**filters** <div class="attr attr-required">required</div> <div class="attr attr-type">array</div> | TODO: Fill this in.
**repeat_rules** <div class="attr attr-required">required</div> <div class="attr attr-type">array</div> | TODO: Fill this in.


## Retrieve a Schedule

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 222
schedule = Rainforest::Schedule.retrieve(id)
```



```javascript
//TODO: Add node samples
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 193;
Rainforest.Schedule.retrieve(id).then(function(schedule) {
  // Use the retrieved schedule
}).catch(function(e) {
  // Handle errors
});
```


```php
<?php
require(dirname(__FILE__) . '/../init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 218;
$schedule = \Rainforest\Schedule::retrieve( $id );
?>
```

> Example Response

```ruby
#<Rainforest::Schedule:0x3fd870165f98 id=222> Attributes: {
  "created_at": "2015-07-28T17:01:43Z",
  "filters": {"tags":["www"]},
  "id": 222,
  "repeat_rules": [
    {"id":945,"created_at":"2015-07-28T17:01:43Z","day":"tuesday","time":"10:00"},
    {"id":944,"created_at":"2015-07-28T17:01:43Z","day":"sunday","time":"01:00"}
  ]
}
```



```javascript
{ id: 193,
  created_at: '2015-08-03T22:41:38Z',
  repeat_rules:
   [ { id: 919,
       created_at: '2015-08-03T22:41:38Z',
       day: 'tuesday',
       time: '10:00' },
     { id: 918,
       created_at: '2015-08-03T22:41:38Z',
       day: 'sunday',
       time: '01:00' } ],
  filters: { tags: [ 'www' ] } }
```

```php
object(Rainforest\Schedule)#13 (7) {
  ["created_at"]=>
  string(20) "2015-08-07T18:06:32Z"
  ["filters"]=>
  array(1) {
    ["tags"]=>
    array(1) {
      [0]=>
      string(3) "www"
    }
  }
  ["id"]=>
  int(218)
  ["repeat_rules"]=>
  array(2) {
    [0]=>
    array(4) {
      ["id"]=>
      int(955)
      ["created_at"]=>
      string(20) "2015-08-07T18:06:32Z"
      ["day"]=>
      string(7) "tuesday"
      ["time"]=>
      string(5) "10:00"
    }
    [1]=>
    array(4) {
      ["id"]=>
      int(954)
      ["created_at"]=>
      string(20) "2015-08-07T18:06:32Z"
      ["day"]=>
      string(6) "sunday"
      ["time"]=>
      string(5) "01:00"
    }
  }
}
```


TODO: Fill this in.


Arguments |           |
--------- | --------- |
**id** <div class="attr attr-required">required</div> <div class="attr attr-type">integer</div> | The id of the schedule you want to retrieve.


## Update a Schedule

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 222
repeat_rules = [{:day => "monday", :time => "12:00"}]
schedule = Rainforest::Schedule.update(id, :repeat_rules => repeat_rules)
# or
schedule = Rainforest::Schedule.retrieve(id)
schedule.repeat_rules = repeat_rules
schedule.save
```



```javascript
//TODO: Add node samples
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 193;
var repeat_rules = [{day: "monday", time: "12:00"}];
Rainforest.Schedule.update(id, {
  repeat_rules: repeat_rules
}).then(function(schedule) {
  // Use the updated schedule
}).catch(function(e) {
  // Handle errors
});
```


```php
<?php
require(dirname(__FILE__) . '/../init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 218;
$repeatRules = [["day" => "monday", "time" => "12:00"]];

$schedule = \Rainforest\Schedule::update($id, ["repeat_rules" => $repeatRules]);

# or

$schedule = \Rainforest\Schedule::retrieve($id);
$schedule->repeat_rules = $repeatRules;
$schedule->save();
?>
```


> Example Response

```ruby
#<Rainforest::Schedule:0x3fd8701bddec id=222> Attributes: {
  "created_at": "2015-07-28T17:01:43Z",
  "filters": {"tags":["www"]},
  "id": 222,
  "repeat_rules": [
    {"id":946,"created_at":"2015-07-28T17:06:08Z","day":"monday","time":"12:00"}
  ]
}
```



```javascript
{ id: 193,
  created_at: '2015-08-03T22:41:38Z',
  repeat_rules:
   [ { id: 920,
       created_at: '2015-08-03T22:47:28Z',
       day: 'monday',
       time: '12:00' } ],
  filters: { tags: [ 'www' ] } }
```

```php
object(Rainforest\Schedule)#13 (7) {
  ["created_at"]=>
  string(20) "2015-08-07T18:06:32Z"
  ["filters"]=>
  array(1) {
    ["tags"]=>
    array(1) {
      [0]=>
      string(3) "www"
    }
  }
  ["id"]=>
  int(218)
  ["repeat_rules"]=>
  array(1) {
    [0]=>
    array(4) {
      ["id"]=>
      int(957)
      ["created_at"]=>
      string(20) "2015-08-07T18:16:52Z"
      ["day"]=>
      string(6) "monday"
      ["time"]=>
      string(5) "12:00"
    }
  }
}
```

TODO: Fill this in.


Arguments |           |
--------- | --------- |
**id** <div class="attr attr-required">required</div> <div class="attr attr-type">integer</div> | The id of the schedule you want to update.
**repeat_rules** <div class="attr attr-type">array[repeat_rule]</div> | TODO: Fill this in.
**filters** <div class="attr attr-type">hash</div> | TODO: Fill this in.

## List all Schedules

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

schedules = Rainforest::Schedule.all

# The list is enumerable and works similarly to a array
schedules.each do |schedule|
  # work with a schedule
end

schedules[0] # The first schedule in the list
schedules.length # the number of schedules returned
```



```javascript
//TODO: Add node samples
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

Rainforest.Schedule.all().then(function(schedules) {
  _.each(schedules.data, function(schedule) {
    // Handle each schedule
  });
}).catch(function(e) {
  // Handle errors
});
```



```php
<?php
require(dirname(__FILE__) . '/../init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$schedules = \Rainforest\Schedule::all();

# The list is enumerable and works similarly to an array
foreach( $schedules->data as $schedule ) {
  # work with an Schedule
}

$schedules->data[0]; # The first Schedule in the list
count( $schedules->data ); # the number of Schedules returned
?>
```

> Example Response

```ruby
#<Rainforest::ApiList[Rainforest::Schedule]:0x3ff73d57a598> Data: [
  "#<Rainforest::Schedule:0x3ff73d577dac id=905>",
  "#<Rainforest::Schedule:0x3ff73d661bb4 id=906>"
]


```



```javascript
{ data:
   [ { id: 193,
       created_at: '2015-08-03T22:41:38Z',
       repeat_rules:
        [ { id: 919,
            created_at: '2015-08-03T22:41:38Z',
            day: 'tuesday',
            time: '10:00' },
          { id: 918,
            created_at: '2015-08-03T22:41:38Z',
            day: 'sunday',
            time: '01:00' } ],
       filters: { tags: [ 'www' ] } },
     {...},
     {...} ] }
```

```php
array(2) {
  [0]=>
  object(Rainforest\Schedule)#14 (7) {
    ["created_at"]=>
    string(20) "2015-08-07T18:06:32Z"
    ["filters"]=>
    array(1) {
      ["tags"]=>
      array(1) {
        [0]=>
        string(3) "www"
      }
    }
    ["id"]=>
    int(218)
    ["repeat_rules"]=>
    array(1) {
      [0]=>
      array(4) {
        ["id"]=>
        int(958)
        ["created_at"]=>
        string(20) "2015-08-07T18:17:44Z"
        ["day"]=>
        string(6) "monday"
        ["time"]=>
        string(5) "12:00"
      }
    }
 ...},
{...}
}
```

TODO: Fill this in.


## Delete a Schedule

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 223
response = Rainforest::Schedule.delete(id)
# or
schedule = Rainforest::Schedule.retrieve(id)
schedule.delete
```



```javascript
//TODO: Add node samples
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 193;
Rainforest.Schedule.delete(id).then(function(schedule) {
  // The schedule returned was deleted
  prettyPrint(schedule);
}).catch(function(e) {
  // Handle errors
  console.log(e);
});
```



```php
<?php
require(dirname(__FILE__) . '/../init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 218;

$schedule = \Rainforest\Schedule::delete( $id );

# or

$schedule = \Rainforest\Schedule::retrieve($id);
$schedule->delete();
?>
```


> Example Response

```ruby
#<Rainforest::Schedule:0x3ff930ff8930 id=223> Attributes: {
  "created_at": "2015-07-28T17:11:54Z",
  "filters": {"tags":["www"]},
  "id": 223,
  "repeat_rules": [
    {"id":950,"created_at":"2015-07-28T17:11:54Z","day":"tuesday","time":"10:00"},
    {"id":949,"created_at":"2015-07-28T17:11:54Z","day":"sunday","time":"01:00"}
  ]
}

```



```javascript
{ id: 193,
  created_at: '2015-08-03T22:41:38Z',
  repeat_rules:
   [ { id: 920,
       created_at: '2015-08-03T22:47:28Z',
       day: 'monday',
       time: '12:00' } ],
  filters: { tags: [ 'www' ] } }
```


```php
object(Rainforest\Schedule)#13 (7) {
  ["created_at"]=>
  string(20) "2015-08-07T18:06:32Z"
  ["filters"]=>
  array(1) {
    ["tags"]=>
    array(1) {
      [0]=>
      string(3) "www"
    }
  }
  ["id"]=>
  int(218)
  ["repeat_rules"]=>
  array(1) {
    [0]=>
    array(4) {
      ["id"]=>
      int(958)
      ["created_at"]=>
      string(20) "2015-08-07T18:17:44Z"
      ["day"]=>
      string(6) "monday"
      ["time"]=>
      string(5) "12:00"
    }
  }
}
```

TODO: Fill this in.


