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

> Example Response

```ruby
#<Rainforest::ApiList[Rainforest::Environment]:0x3ff73d57a598> Data: [
  "#<Rainforest::Environment:0x3ff73d577dac id=13>",
  "#<Rainforest::Environment:0x3ff73d661bb4 id=18>"
]


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

> Example Response

```ruby
{}

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

> Example Response

```ruby
<Rainforest::ApiList[Rainforest::Run]:0x3ff73d6a52ec> Data: [
  "#<Rainforest::Run:0x3ff73d678e90 id=4138>",
  "#<Rainforest::Run:0x3ff73d661bb4 id=4242>"
]


```

TODO: Fill this in.
