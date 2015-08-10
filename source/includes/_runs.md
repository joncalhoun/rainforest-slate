# Runs

## The Run Object

```ruby
#<Rainforest::Run:0x3fdb69576b04 id=4268> Attributes: {
  "browsers": [
    {"name":"android_phone_landscape","state":"disabled","description":"Android Phone Landscape","category":"phone"},
    {"name":"android_phone_portrait","state":"disabled","description":"Android Phone Portrait","category":"phone"},
    {"name":"android_tablet_landscape","state":"disabled","description":"Android Tablet Landscape","category":"tablet"},
    {"name":"android_tablet_portrait","state":"disabled","description":"Android Tablet Portrait","category":"tablet"},
    {"name":"chrome","state":"enabled","description":"Google Chrome","category":"browser"},
    {"name":"firefox","state":"enabled","description":"Mozilla Firefox","category":"browser"},
    {"name":"ie8","state":"enabled","description":"Microsoft Internet Explorer 8","category":"browser"},
    {"name":"ie9","state":"enabled","description":"Microsoft Internet Explorer 9","category":"browser"},
    {"name":"ie10","state":"disabled","description":"Microsoft Internet Explorer 10","category":"browser"},
    {"name":"ie11","state":"disabled","description":"Microsoft Internet Explorer 11","category":"browser"},
    {"name":"safari","state":"enabled","description":"Apple Safari","category":"browser"}
  ],
  "created_at": "2013-11-14T04:52:14Z",
  "current_progress": {"percent":100,"total":5,"complete":5,"eta":{"seconds":0,"ts":"2015-07-27T18:33:20.841+00:00"},"no_result":0,"passed":0,"failed":1},
  "description": null,
  "environment": {"id":1144,"created_at":"2013-11-05T02:17:14Z","name":"Staging","default":true,"webhook":null,"webhook_enabled":null,"site_environments":[{"id":744,"created_at":"2013-11-05T02:17:14Z","site_id":860,"environment_id":1144,"url":"http://apibits.com"}]},
  "filters": null,
  "frontend_url": "https://app.rnfrst.com/runs/4268",
  "id": 4268,
  "log_url": null,
  "real_cost_to_run": 5,
  "result": "failed",
  "sample_test_titles": [
    "super awesome test"
  ],
  "state": "complete",
  "state_details": {"name":"complete","is_final_state":true},
  "stats": {"total_time_for_one_person":4675.0,"total_time_for_rainforest":2610.763738,"total_rainforest_overhead":13.591364,"speed_up":1.79},
  "timestamps": {"complete":"2013-11-14T05:35:45.022Z","in_progress":"2013-11-14T04:52:27.847Z","validating":"2013-11-14T04:52:28.003Z","created_at":"2013-11-14T04:52:14.252Z"},
  "total_failed_tests": 1,
  "total_no_result_tests": 0,
  "total_passed_tests": 0,
  "total_tests": 1
}
```



```javascript
{ id: 31459,
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
     eta: { seconds: 0, ts: '2015-08-03T18:43:19.832+00:00' },
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
     { name: 'android_phone_portrait',
       state: 'disabled',
       description: 'Android Phone Portrait',
       category: 'phone' },
     { name: 'android_tablet_landscape',
       state: 'disabled',
       description: 'Android Tablet Landscape',
       category: 'tablet' },
     { name: 'android_tablet_portrait',
       state: 'disabled',
       description: 'Android Tablet Portrait',
       category: 'tablet' },
     { name: 'chrome',
       state: 'enabled',
       description: 'Google Chrome',
       category: 'browser' },
     { name: 'firefox',
       state: 'disabled',
       description: 'Mozilla Firefox',
       category: 'browser' },
     { name: 'ie8',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 8',
       category: 'browser' },
     { name: 'ie9',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 9',
       category: 'browser' },
     { name: 'ie10',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 10',
       category: 'browser' },
     { name: 'ie11',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 11',
       category: 'browser' },
     { name: 'safari',
       state: 'disabled',
       description: 'Apple Safari',
       category: 'browser' } ],
  filters: { tests: [ 17790 ] },
  log_url: null,
  description: null,
  frontend_url: 'https://app.rainforestqa.com/runs/31459',
  total_tests: 1,
  total_passed_tests: 1,
  total_failed_tests: 0,
  total_no_result_tests: 0,
  real_cost_to_run: 1,
  sample_test_titles: [ 'Customer Logos' ] }
```

```php
object(Rainforest\Run)#13 (23) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-07T18:35:42Z"
  ["current_progress"]=>
  array(7) {
    ["percent"]=>
    int(0)
    ["total"]=>
    int(0)
    ["complete"]=>
    int(0)
    ["eta"]=>
    array(2) {
      ["seconds"]=>
      int(1800)
      ["ts"]=>
      string(29) "2015-08-07T19:05:42.563+00:00"
    }
    ["no_result"]=>
    int(0)
    ["passed"]=>
    int(0)
    ["failed"]=>
    int(0)
  }
  ["description"]=>
  NULL
  ["environment"]=>
  array(7) {
    ["id"]=>
    int(4904)
    ["created_at"]=>
    string(20) "2015-08-04T19:46:42Z"
    ["name"]=>
    string(12) "new env name"
    ["default"]=>
    bool(true)
    ["webhook"]=>
    string(0) ""
    ["webhook_enabled"]=>
    NULL
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
  }
  ["filters"]=>
  array(1) {
    ["tests"]=>
    array(1) {
      [0]=>
      int(17793)
    }
  }
  ["frontend_url"]=>
  string(39) "https://app.rainforestqa.com/runs/32353"
  ["id"]=>
  int(32353)
  ["log_url"]=>
  string(114) "https://tala.rainforestqa.com/api/v1/logs/32353?expires_at=1438976142&sig=b74537e65925b50cbbf71681f168598f8a86ec08"
  ["real_cost_to_run"]=>
  int(0)
  ["result"]=>
  string(9) "no_result"
  ["sample_test_titles"]=>
  array(0) {
  }
  ["state"]=>
  string(6) "queued"
  ["state_details"]=>
  array(2) {
    ["name"]=>
    string(6) "queued"
    ["is_final_state"]=>
    bool(false)
  }
  ["stats"]=>
  array(4) {
    ["total_time_for_one_person"]=>
    float(0)
    ["total_time_for_rainforest"]=>
    float(14400)
    ["total_rainforest_overhead"]=>
    float(0)
    ["speed_up"]=>
    float(0)
  }
  ["timestamps"]=>
  array(1) {
    ["created_at"]=>
    string(24) "2015-08-07T18:35:42.530Z"
  }
  ["total_failed_tests"]=>
  int(0)
  ["total_no_result_tests"]=>
  int(0)
  ["total_passed_tests"]=>
  int(0)
  ["total_tests"]=>
  int(0)
  ...}
}
```


TODO: Fill this in.

Attributes |           |
---------- | --------- |
**browsers** <div class="attr attr-type">string</div> | TODO: Add some info about `browsers`
**created_at** <div class="attr attr-type">string</div> | TODO: Add some info about `created_at`
**current_progress** <div class="attr attr-type">string</div> | TODO: Add some info about `current_progress`
**description** <div class="attr attr-type">string</div> | TODO: Add some info about `description`
**environment** <div class="attr attr-type">string</div> | TODO: Add some info about `environment`
**filters** <div class="attr attr-type">string</div> | TODO: Add some info about `filters`
**frontend_url** <div class="attr attr-type">string</div> | TODO: Add some info about `frontend_url`
**id** <div class="attr attr-type">string</div> | TODO: Add some info about `id`
**log_url** <div class="attr attr-type">string</div> | TODO: Add some info about `log_url`
**real_cost_to_run** <div class="attr attr-type">string</div> | TODO: Add some info about `real_cost_to_run`
**result** <div class="attr attr-type">string</div> | TODO: Add some info about `result`
**sample_test_titles** <div class="attr attr-type">string</div> | TODO: Add some info about `sample_test_titles`
**state** <div class="attr attr-type">string</div> | TODO: Add some info about `state`
**state_details** <div class="attr attr-type">string</div> | TODO: Add some info about `state_details`
**stats** <div class="attr attr-type">string</div> | TODO: Add some info about `stats`
**timestamps** <div class="attr attr-type">string</div> | TODO: Add some info about `timestamps`
**total_failed_tests** <div class="attr attr-type">string</div> | TODO: Add some info about `total_failed_tests`
**total_no_result_tests** <div class="attr attr-type">string</div> | TODO: Add some info about `total_no_result_tests`
**total_passed_tests** <div class="attr attr-type">string</div> | TODO: Add some info about `total_passed_tests`
**total_tests** <div class="attr attr-type">string</div> | TODO: Add some info about `total_tests`



## Create a Run

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

run = Rainforest::Run.create(
  :tags => ["www", "api"]
)
# or
test_ids = [2818]
run = Rainforest::Run.create(
  :tests => test_ids
)
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var tags = ["www"];
Rainforest.Run.create({
  tags: tags
}).then(function(run) {
  // Run created successfully
}).catch(function(e) {
  // Handle the error
});

// or

var test_ids = [2818];
Rainforest.Run.create({
  tests: test_ids
}).then(function(run) {
  // Run created successfully
}).catch(function(e) {
  // Handle the error
});
```

```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$run = \Rainforest\Run::create([
    "tags" => ["www", "api"]
]);

#or

$testIds = [17793];
$run = \Rainforest\Run::create([
  "tests" => $testIds
]);

?>
```

> Example Response

```ruby
#<Rainforest::Run:0x3fd87005e244 id=31061> Attributes: {
  "browsers": [
    {"name":"android_phone_landscape","state":"disabled","description":"Android Phone Landscape","category":"phone"},
    {"name":"android_phone_portrait","state":"disabled","description":"Android Phone Portrait","category":"phone"},
    {"name":"android_tablet_landscape","state":"disabled","description":"Android Tablet Landscape","category":"tablet"},
    {"name":"android_tablet_portrait","state":"disabled","description":"Android Tablet Portrait","category":"tablet"},
    {"name":"chrome","state":"disabled","description":"Google Chrome","category":"browser"},
    {"name":"firefox","state":"disabled","description":"Mozilla Firefox","category":"browser"},
    {"name":"ie8","state":"disabled","description":"Microsoft Internet Explorer 8","category":"browser"},
    {"name":"ie9","state":"disabled","description":"Microsoft Internet Explorer 9","category":"browser"},
    {"name":"ie10","state":"disabled","description":"Microsoft Internet Explorer 10","category":"browser"},
    {"name":"ie11","state":"disabled","description":"Microsoft Internet Explorer 11","category":"browser"},
    {"name":"safari","state":"disabled","description":"Apple Safari","category":"browser"}
  ],
  "created_at": "2015-07-28T16:52:55Z",
  "current_progress": {"percent":0,"total":0,"complete":0,"eta":{"seconds":1800,"ts":"2015-07-28T17:22:55.215+00:00"},"no_result":0,"passed":0,"failed":0},
  "description": null,
  "environment": {"id":1144,"created_at":"2013-11-05T02:17:14Z","name":"Staging","default":true,"webhook":null,"webhook_enabled":null,"site_environments":[{"id":744,"created_at":"2013-11-05T02:17:14Z","site_id":860,"environment_id":1144,"url":"http://blog.apibits.com"}]},
  "filters": {"tags":["www"]},
  "frontend_url": "https://app.rnfrst.com/runs/31061",
  "id": 31061,
  "log_url": null,
  "real_cost_to_run": 0,
  "result": "no_result",
  "sample_test_titles": [

  ],
  "state": "queued",
  "state_details": {"name":"queued","is_final_state":false},
  "stats": {"total_time_for_one_person":0.0,"total_time_for_rainforest":14400.0,"total_rainforest_overhead":0.0,"speed_up":0.0},
  "timestamps": {"created_at":"2015-07-28T16:52:55.126Z"},
  "total_failed_tests": 0,
  "total_no_result_tests": 0,
  "total_passed_tests": 0,
  "total_tests": 0,
  "requested_tests": [
    2181
  ]
}
```



```javascript
{ id: 31921,
  created_at: '2015-08-03T18:47:18Z',
  environment:
   { id: 4859,
     created_at: '2015-07-28T14:58:34Z',
     name: 'Production',
     default: true,
     webhook: '',
     webhook_enabled: null,
     site_environments: [ [Object] ] },
  state: 'queued',
  state_details: { name: 'queued', is_final_state: false },
  result: 'no_result',
  current_progress:
   { percent: 0,
     total: 0,
     complete: 0,
     eta: { seconds: 1800, ts: '2015-08-03T19:17:18.130+00:00' },
     no_result: 0,
     passed: 0,
     failed: 0 },
  timestamps: { created_at: '2015-08-03T18:47:18.087Z' },
  stats:
   { total_time_for_one_person: 0,
     total_time_for_rainforest: 14400,
     total_rainforest_overhead: 0,
     speed_up: 0 },
  browsers:
   [ { name: 'android_phone_landscape',
       state: 'disabled',
       description: 'Android Phone Landscape',
       category: 'phone' },
     { name: 'android_phone_portrait',
       state: 'disabled',
       description: 'Android Phone Portrait',
       category: 'phone' },
     { name: 'android_tablet_landscape',
       state: 'disabled',
       description: 'Android Tablet Landscape',
       category: 'tablet' },
     { name: 'android_tablet_portrait',
       state: 'disabled',
       description: 'Android Tablet Portrait',
       category: 'tablet' },
     { name: 'chrome',
       state: 'disabled',
       description: 'Google Chrome',
       category: 'browser' },
     { name: 'firefox',
       state: 'disabled',
       description: 'Mozilla Firefox',
       category: 'browser' },
     { name: 'ie8',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 8',
       category: 'browser' },
     { name: 'ie9',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 9',
       category: 'browser' },
     { name: 'ie10',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 10',
       category: 'browser' },
     { name: 'ie11',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 11',
       category: 'browser' },
     { name: 'safari',
       state: 'disabled',
       description: 'Apple Safari',
       category: 'browser' } ],
  requested_tests: [ 17790, 17793 ],
  filters: { tags: [ 'www' ] },
  log_url: null,
  description: null,
  frontend_url: 'https://app.rainforestqa.com/runs/31921',
  total_tests: 0,
  total_passed_tests: 0,
  total_failed_tests: 0,
  total_no_result_tests: 0,
  real_cost_to_run: 0,
  sample_test_titles: [] }
```

```php
object(Rainforest\Run)#13 (23) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-07T18:35:42Z"
  ["current_progress"]=>
  array(7) {
    ["percent"]=>
    int(0)
    ["total"]=>
    int(0)
    ["complete"]=>
    int(0)
    ["eta"]=>
    array(2) {
      ["seconds"]=>
      int(1800)
      ["ts"]=>
      string(29) "2015-08-07T19:05:42.563+00:00"
    }
    ["no_result"]=>
    int(0)
    ["passed"]=>
    int(0)
    ["failed"]=>
    int(0)
  }
  ["description"]=>
  NULL
  ["environment"]=>
  array(7) {
    ["id"]=>
    int(4904)
    ["created_at"]=>
    string(20) "2015-08-04T19:46:42Z"
    ["name"]=>
    string(12) "new env name"
    ["default"]=>
    bool(true)
    ["webhook"]=>
    string(0) ""
    ["webhook_enabled"]=>
    NULL
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
  }
  ["filters"]=>
  array(1) {
    ["tests"]=>
    array(1) {
      [0]=>
      int(17793)
    }
  }
  ["frontend_url"]=>
  string(39) "https://app.rainforestqa.com/runs/32353"
  ["id"]=>
  int(32353)
  ["log_url"]=>
  string(114) "https://tala.rainforestqa.com/api/v1/logs/32353?expires_at=1438976142&sig=b74537e65925b50cbbf71681f168598f8a86ec08"
  ["real_cost_to_run"]=>
  int(0)
  ["result"]=>
  string(9) "no_result"
  ["sample_test_titles"]=>
  array(0) {
  }
  ["state"]=>
  string(6) "queued"
  ["state_details"]=>
  array(2) {
    ["name"]=>
    string(6) "queued"
    ["is_final_state"]=>
    bool(false)
  }
  ["stats"]=>
  array(4) {
    ["total_time_for_one_person"]=>
    float(0)
    ["total_time_for_rainforest"]=>
    float(14400)
    ["total_rainforest_overhead"]=>
    float(0)
    ["speed_up"]=>
    float(0)
  }
  ["timestamps"]=>
  array(1) {
    ["created_at"]=>
    string(24) "2015-08-07T18:35:42.530Z"
  }
  ["total_failed_tests"]=>
  int(0)
  ["total_no_result_tests"]=>
  int(0)
  ["total_passed_tests"]=>
  int(0)
  ["total_tests"]=>
  int(0)
  ...}
}
```


TODO: Fill this in.


Arguments |           |
--------- | --------- |
**tags** <div class="attr attr-required">required</div> <div class="attr attr-type">array</div> | The tags you would like to create a run with. *NOTE*: This is only required when `tests` is not provided.
**tests** <div class="attr attr-required">required</div> <div class="attr attr-type">array</div> | The ids of tests you would like to create runs with. *NOTE*: This is only required when `tags` is not provided.


## Retrieve a Run

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 31061
run = Rainforest::Run.retrieve(id)
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 31921;
Rainforest.Run.retrieve(id).then(function(run) {
  // Use the run
}).catch(function(e) {
  // Handle the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 32353;
$run = \Rainforest\Run::retrieve( $id );
?>
```

> Example Response

```ruby
#<Rainforest::Run:0x3fd87005e244 id=31061> Attributes: {
  "browsers": [
    {"name":"android_phone_landscape","state":"disabled","description":"Android Phone Landscape","category":"phone"},
    {"name":"android_phone_portrait","state":"disabled","description":"Android Phone Portrait","category":"phone"},
    {"name":"android_tablet_landscape","state":"disabled","description":"Android Tablet Landscape","category":"tablet"},
    {"name":"android_tablet_portrait","state":"disabled","description":"Android Tablet Portrait","category":"tablet"},
    {"name":"chrome","state":"disabled","description":"Google Chrome","category":"browser"},
    {"name":"firefox","state":"disabled","description":"Mozilla Firefox","category":"browser"},
    {"name":"ie8","state":"disabled","description":"Microsoft Internet Explorer 8","category":"browser"},
    {"name":"ie9","state":"disabled","description":"Microsoft Internet Explorer 9","category":"browser"},
    {"name":"ie10","state":"disabled","description":"Microsoft Internet Explorer 10","category":"browser"},
    {"name":"ie11","state":"disabled","description":"Microsoft Internet Explorer 11","category":"browser"},
    {"name":"safari","state":"disabled","description":"Apple Safari","category":"browser"}
  ],
  "created_at": "2015-07-28T16:52:55Z",
  "current_progress": {"percent":0,"total":0,"complete":0,"eta":{"seconds":1800,"ts":"2015-07-28T17:22:55.215+00:00"},"no_result":0,"passed":0,"failed":0},
  "description": null,
  "environment": {"id":1144,"created_at":"2013-11-05T02:17:14Z","name":"Staging","default":true,"webhook":null,"webhook_enabled":null,"site_environments":[{"id":744,"created_at":"2013-11-05T02:17:14Z","site_id":860,"environment_id":1144,"url":"http://blog.apibits.com"}]},
  "filters": {"tags":["www"]},
  "frontend_url": "https://app.rnfrst.com/runs/31061",
  "id": 31061,
  "log_url": null,
  "real_cost_to_run": 0,
  "result": "no_result",
  "sample_test_titles": [

  ],
  "state": "queued",
  "state_details": {"name":"queued","is_final_state":false},
  "stats": {"total_time_for_one_person":0.0,"total_time_for_rainforest":14400.0,"total_rainforest_overhead":0.0,"speed_up":0.0},
  "timestamps": {"created_at":"2015-07-28T16:52:55.126Z"},
  "total_failed_tests": 0,
  "total_no_result_tests": 0,
  "total_passed_tests": 0,
  "total_tests": 0,
  "requested_tests": [
    2181
  ]
}
```



```javascript
{ id: 31921,
  created_at: '2015-08-03T18:47:18Z',
  environment:
   { id: 4859,
     created_at: '2015-07-28T14:58:34Z',
     name: 'Production',
     default: true,
     webhook: '',
     webhook_enabled: null,
     site_environments: [ [Object] ] },
  state: 'queued',
  state_details: { name: 'queued', is_final_state: false },
  result: 'no_result',
  current_progress:
   { percent: 0,
     total: 0,
     complete: 0,
     eta: { seconds: 1800, ts: '2015-08-03T19:17:18.130+00:00' },
     no_result: 0,
     passed: 0,
     failed: 0 },
  timestamps: { created_at: '2015-08-03T18:47:18.087Z' },
  stats:
   { total_time_for_one_person: 0,
     total_time_for_rainforest: 14400,
     total_rainforest_overhead: 0,
     speed_up: 0 },
  browsers:
   [ { name: 'android_phone_landscape',
       state: 'disabled',
       description: 'Android Phone Landscape',
       category: 'phone' },
     { name: 'android_phone_portrait',
       state: 'disabled',
       description: 'Android Phone Portrait',
       category: 'phone' },
     { name: 'android_tablet_landscape',
       state: 'disabled',
       description: 'Android Tablet Landscape',
       category: 'tablet' },
     { name: 'android_tablet_portrait',
       state: 'disabled',
       description: 'Android Tablet Portrait',
       category: 'tablet' },
     { name: 'chrome',
       state: 'disabled',
       description: 'Google Chrome',
       category: 'browser' },
     { name: 'firefox',
       state: 'disabled',
       description: 'Mozilla Firefox',
       category: 'browser' },
     { name: 'ie8',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 8',
       category: 'browser' },
     { name: 'ie9',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 9',
       category: 'browser' },
     { name: 'ie10',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 10',
       category: 'browser' },
     { name: 'ie11',
       state: 'disabled',
       description: 'Microsoft Internet Explorer 11',
       category: 'browser' },
     { name: 'safari',
       state: 'disabled',
       description: 'Apple Safari',
       category: 'browser' } ],
  requested_tests: [ 17790, 17793 ],
  filters: { tags: [ 'www' ] },
  log_url: null,
  description: null,
  frontend_url: 'https://app.rainforestqa.com/runs/31921',
  total_tests: 0,
  total_passed_tests: 0,
  total_failed_tests: 0,
  total_no_result_tests: 0,
  real_cost_to_run: 0,
  sample_test_titles: [] }
```


```php
object(Rainforest\Run)#13 (23) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-07T18:35:42Z"
  ["current_progress"]=>
  array(7) {
    ["percent"]=>
    int(0)
    ["total"]=>
    int(0)
    ["complete"]=>
    int(0)
    ["eta"]=>
    array(2) {
      ["seconds"]=>
      int(1800)
      ["ts"]=>
      string(29) "2015-08-07T19:05:42.563+00:00"
    }
    ["no_result"]=>
    int(0)
    ["passed"]=>
    int(0)
    ["failed"]=>
    int(0)
  }
  ["description"]=>
  NULL
  ["environment"]=>
  array(7) {
    ["id"]=>
    int(4904)
    ["created_at"]=>
    string(20) "2015-08-04T19:46:42Z"
    ["name"]=>
    string(12) "new env name"
    ["default"]=>
    bool(true)
    ["webhook"]=>
    string(0) ""
    ["webhook_enabled"]=>
    NULL
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
  }
  ["filters"]=>
  array(1) {
    ["tests"]=>
    array(1) {
      [0]=>
      int(17793)
    }
  }
  ["frontend_url"]=>
  string(39) "https://app.rainforestqa.com/runs/32353"
  ["id"]=>
  int(32353)
  ["log_url"]=>
  string(114) "https://tala.rainforestqa.com/api/v1/logs/32353?expires_at=1438976142&sig=b74537e65925b50cbbf71681f168598f8a86ec08"
  ["real_cost_to_run"]=>
  int(0)
  ["result"]=>
  string(9) "no_result"
  ["sample_test_titles"]=>
  array(0) {
  }
  ["state"]=>
  string(6) "queued"
  ["state_details"]=>
  array(2) {
    ["name"]=>
    string(6) "queued"
    ["is_final_state"]=>
    bool(false)
  }
  ["stats"]=>
  array(4) {
    ["total_time_for_one_person"]=>
    float(0)
    ["total_time_for_rainforest"]=>
    float(14400)
    ["total_rainforest_overhead"]=>
    float(0)
    ["speed_up"]=>
    float(0)
  }
  ["timestamps"]=>
  array(1) {
    ["created_at"]=>
    string(24) "2015-08-07T18:35:42.530Z"
  }
  ["total_failed_tests"]=>
  int(0)
  ["total_no_result_tests"]=>
  int(0)
  ["total_passed_tests"]=>
  int(0)
  ["total_tests"]=>
  int(0)
  ...}
}
```


TODO: Fill this in.


Arguments |           |
--------- | --------- |
**id** <div class="attr attr-required">required</div> <div class="attr attr-type">integer</div> | The id of the run you want to retrieve.


## List all Runs

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

runs = Rainforest::Run.all

# The list is enumerable and works similarly to a array
runs.each do |run|
  # work with a run
end

runs[0] # The first run in the list
runs.length # the number of runs returned
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

Rainforest.Run.all().then(function(runs) {
  _.each(runs.data, function(run) {
    // Use the run
  });
}).catch(function(e) {
  // Hande the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$runs = \Rainforest\Run::all();

# The list is enumerable and works similarly to an array
foreach( $runs->data as $run ) {
  # work with an Run
}

$runs->data[0]; # The first Run in the list
count( $runs->data ); # the number of Runs returned
?>
```

> Example Response

```ruby
#<Rainforest::ApiList[Rainforest::Run]:0x3ff73d57a598> Data: [
  "#<Rainforest::Run:0x3ff73d577dac id=31061>",
  "#<Rainforest::Run:0x3ff73d661bb4 id=906>"
]


```



```javascript
{ data:
   [ { id: 31921,
       created_at: '2015-08-03T18:47:18Z',
       environment:
        { id: 4859,
          created_at: '2015-07-28T14:58:34Z',
          name: 'Production',
          default: true,
          webhook: '',
          webhook_enabled: null,
          site_environments: [ [Object] ] },
       state: 'queued',
       state_details: { name: 'queued', is_final_state: false },
       result: 'no_result',
       current_progress:
        { percent: 0,
          total: 0,
          complete: 0,
          eta: { seconds: 1800, ts: '2015-08-03T19:17:18.130+00:00' },
          no_result: 0,
          passed: 0,
          failed: 0 },
       timestamps: { created_at: '2015-08-03T18:47:18.087Z' },
       stats:
        { total_time_for_one_person: 0,
          total_time_for_rainforest: 14400,
          total_rainforest_overhead: 0,
          speed_up: 0 },
       browsers:
        [ { name: 'android_phone_landscape',
            state: 'disabled',
            description: 'Android Phone Landscape',
            category: 'phone' },
          {...},
          {...} ],
       requested_tests: [ 17790, 17793 ],
       filters: { tags: [ 'www' ] },
       log_url: null,
       description: null,
       frontend_url: 'https://app.rainforestqa.com/runs/31921',
       total_tests: 0,
       total_passed_tests: 0,
       total_failed_tests: 0,
       total_no_result_tests: 0,
       real_cost_to_run: 0,
       sample_test_titles: [] } ] }
```

```php
array(1) {
  [0]=>
  object(Rainforest\Run)#14 (23) {
    ["browsers"]=>
    array(11) {
      [0]=>
      array(4) {
        ["name"]=>
        string(23) "android_phone_landscape"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(23) "Android Phone Landscape"
        ["category"]=>
        string(5) "phone"
      }
      [1]=>
      array(4) {
        ["name"]=>
        string(22) "android_phone_portrait"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(22) "Android Phone Portrait"
        ["category"]=>
        string(5) "phone"
      }
      [2]=>
      array(4) {
        ["name"]=>
        string(24) "android_tablet_landscape"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(24) "Android Tablet Landscape"
        ["category"]=>
        string(6) "tablet"
      }
      [3]=>
      array(4) {
        ["name"]=>
        string(23) "android_tablet_portrait"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(23) "Android Tablet Portrait"
        ["category"]=>
        string(6) "tablet"
      }
      [4]=>
      array(4) {
        ["name"]=>
        string(6) "chrome"
        ["state"]=>
        string(7) "enabled"
        ["description"]=>
        string(13) "Google Chrome"
        ["category"]=>
        string(7) "browser"
      }
      [5]=>
      array(4) {
        ["name"]=>
        string(7) "firefox"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(15) "Mozilla Firefox"
        ["category"]=>
        string(7) "browser"
      }
      [6]=>
      array(4) {
        ["name"]=>
        string(3) "ie8"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(29) "Microsoft Internet Explorer 8"
        ["category"]=>
        string(7) "browser"
      }
      [7]=>
      array(4) {
        ["name"]=>
        string(3) "ie9"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(29) "Microsoft Internet Explorer 9"
        ["category"]=>
        string(7) "browser"
      }
      [8]=>
      array(4) {
        ["name"]=>
        string(4) "ie10"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(30) "Microsoft Internet Explorer 10"
        ["category"]=>
        string(7) "browser"
      }
      [9]=>
      array(4) {
        ["name"]=>
        string(4) "ie11"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(30) "Microsoft Internet Explorer 11"
        ["category"]=>
        string(7) "browser"
      }
      [10]=>
      array(4) {
        ["name"]=>
        string(6) "safari"
        ["state"]=>
        string(8) "disabled"
        ["description"]=>
        string(12) "Apple Safari"
        ["category"]=>
        string(7) "browser"
      }
    }
    ["created_at"]=>
    string(20) "2015-08-07T18:35:42Z"
    ["current_progress"]=>
    array(7) {
      ["percent"]=>
      int(100)
      ["total"]=>
      int(1)
      ["complete"]=>
      int(1)
      ["eta"]=>
      array(2) {
        ["seconds"]=>
        int(0)
        ["ts"]=>
        string(29) "2015-08-07T18:44:38.561+00:00"
      }
      ["no_result"]=>
      int(0)
      ["passed"]=>
      int(0)
      ["failed"]=>
      int(1)
    }
    ["description"]=>
    NULL
    ["environment"]=>
    array(7) {
      ["id"]=>
      int(4904)
      ["created_at"]=>
      string(20) "2015-08-04T19:46:42Z"
      ["name"]=>
      string(12) "new env name"
      ["default"]=>
      bool(true)
      ["webhook"]=>
      string(0) ""
      ["webhook_enabled"]=>
      NULL
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
    }
    ["filters"]=>
    array(1) {
      ["tests"]=>
      array(1) {
        [0]=>
        int(17793)
      }
    }
    ["frontend_url"]=>
    string(39) "https://app.rainforestqa.com/runs/32353"
    ["id"]=>
    int(32353)
    ["log_url"]=>
    string(114) "https://tala.rainforestqa.com/api/v1/logs/32353?expires_at=1438976678&sig=2c516a6ba267af5729b65c1d7e814a8f6b6e7299"
    ["real_cost_to_run"]=>
    int(2)
    ["result"]=>
    string(6) "failed"
    ["sample_test_titles"]=>
    array(1) {
      [0]=>
      string(22) "Log in as regular user"
    }
    ["state"]=>
    string(8) "complete"
    ["state_details"]=>
    array(2) {
      ["name"]=>
      string(8) "complete"
      ["is_final_state"]=>
      bool(true)
    }
    ["stats"]=>
    array(4) {
      ["total_time_for_one_person"]=>
      float(603)
      ["total_time_for_rainforest"]=>
      float(227.470485)
      ["total_rainforest_overhead"]=>
      float(0.730798)
      ["speed_up"]=>
      float(2.65)
    }
    ["timestamps"]=>
    array(4) {
      ["complete"]=>
      string(24) "2015-08-07T18:39:30.006Z"
      ["in_progress"]=>
      string(24) "2015-08-07T18:35:43.266Z"
      ["validating"]=>
      string(24) "2015-08-07T18:35:42.837Z"
      ["created_at"]=>
      string(24) "2015-08-07T18:35:42.530Z"
    }
    ["total_failed_tests"]=>
    int(1)
    ["total_no_result_tests"]=>
    int(0)
    ["total_passed_tests"]=>
    int(0)
    ["total_tests"]=>
    int(1)
    ...}
    ...
  }
  ```

TODO: Fill this in.


## Abort a Run

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 31061
response = Rainforest::Run.abort(id) # or .delete(id)
# or
run = Rainforest::Run.retrieve(id)
run.abort # or .delete
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 31061;
Rainforest.Run.abort(id).then(function(run) {
  // Run was aborted
}).catch(function(e) {
  // Handle the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 32353;

$run = \Rainforest\Run::abort( $id ); # or ::delete( $id )

# or

$run = \Rainforest\Run::retrieve($id);
$run->abort(); #or ->delete()
?>
```


> Example Response

```ruby
#<Rainforest::Run:0x3fd87006c6dc id=31061> Attributes: {
  "browsers": [
    {"name":"android_phone_landscape","state":"disabled","description":"Android Phone Landscape","category":"phone"},
    {"name":"android_phone_portrait","state":"disabled","description":"Android Phone Portrait","category":"phone"},
    {"name":"android_tablet_landscape","state":"disabled","description":"Android Tablet Landscape","category":"tablet"},
    {"name":"android_tablet_portrait","state":"disabled","description":"Android Tablet Portrait","category":"tablet"},
    {"name":"chrome","state":"enabled","description":"Google Chrome","category":"browser"},
    {"name":"firefox","state":"enabled","description":"Mozilla Firefox","category":"browser"},
    {"name":"ie8","state":"disabled","description":"Microsoft Internet Explorer 8","category":"browser"},
    {"name":"ie9","state":"disabled","description":"Microsoft Internet Explorer 9","category":"browser"},
    {"name":"ie10","state":"disabled","description":"Microsoft Internet Explorer 10","category":"browser"},
    {"name":"ie11","state":"disabled","description":"Microsoft Internet Explorer 11","category":"browser"},
    {"name":"safari","state":"disabled","description":"Apple Safari","category":"browser"}
  ],
  "created_at": "2015-07-28T16:52:55Z",
  "current_progress": {"percent":0,"total":2,"complete":0,"eta":{"seconds":1800,"ts":"2015-07-28T17:25:59.042+00:00"},"no_result":1,"passed":0,"failed":0},
  "description": null,
  "environment": {"id":1144,"created_at":"2013-11-05T02:17:14Z","name":"Staging","default":true,"webhook":null,"webhook_enabled":null,"site_environments":[{"id":744,"created_at":"2013-11-05T02:17:14Z","site_id":860,"environment_id":1144,"url":"http://blog.apibits.com"}]},
  "filters": {"tags":["www"]},
  "frontend_url": "https://app.rnfrst.com/runs/31061",
  "id": 31061,
  "log_url": null,
  "real_cost_to_run": 2,
  "result": "no_result",
  "sample_test_titles": [
    "Jon's Test"
  ],
  "state": "aborted",
  "state_details": {"name":"aborted","is_final_state":true},
  "stats": {"total_time_for_one_person":0.0,"total_time_for_rainforest":4.874452,"total_rainforest_overhead":4.874452,"speed_up":0.0},
  "timestamps": {"in_progress":"2015-07-28T16:53:00.024Z","validating":"2015-07-28T16:52:57.487Z","created_at":"2015-07-28T16:52:55.126Z"},
  "total_failed_tests": 0,
  "total_no_result_tests": 1,
  "total_passed_tests": 0,
  "total_tests": 1,
  "requested_tests": null
}
```



```javascript
{ id: 31921,
  created_at: '2015-08-03T18:47:18Z',
  environment:
   { id: 4859,
     created_at: '2015-07-28T14:58:34Z',
     name: 'Production',
     default: true,
     webhook: '',
     webhook_enabled: null,
     site_environments: [ [Object] ] },
  state: 'aborted',
  state_details: { name: 'aborted', is_final_state: true },
  result: 'no_result',
  current_progress:
   { percent: 0,
     total: 0,
     complete: 0,
     eta: { seconds: 1800, ts: '2015-08-03T19:17:18.130+00:00' },
     no_result: 0,
     passed: 0,
     failed: 0 },
  timestamps: { created_at: '2015-08-03T18:47:18.087Z' },
  stats:
   { total_time_for_one_person: 0,
     total_time_for_rainforest: 14400,
     total_rainforest_overhead: 0,
     speed_up: 0 },
  browsers:
   [ { name: 'android_phone_landscape',
       state: 'disabled',
       description: 'Android Phone Landscape',
       category: 'phone' },
     {...},
     {...} ],
  requested_tests: [ 17790, 17793 ],
  filters: { tags: [ 'www' ] },
  log_url: null,
  description: null,
  frontend_url: 'https://app.rainforestqa.com/runs/31921',
  total_tests: 0,
  total_passed_tests: 0,
  total_failed_tests: 0,
  total_no_result_tests: 0,
  real_cost_to_run: 0,
  sample_test_titles: [] }
```

```php
object(Rainforest\Run)#13 (23) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["state"]=>
      string(8) "disabled"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-07T18:35:42Z"
  ["current_progress"]=>
  array(7) {
    ["percent"]=>
    int(0)
    ["total"]=>
    int(0)
    ["complete"]=>
    int(0)
    ["eta"]=>
    array(2) {
      ["seconds"]=>
      int(1800)
      ["ts"]=>
      string(29) "2015-08-07T19:05:42.563+00:00"
    }
    ["no_result"]=>
    int(0)
    ["passed"]=>
    int(0)
    ["failed"]=>
    int(0)
  }
  ["description"]=>
  NULL
  ["environment"]=>
  array(7) {
    ["id"]=>
    int(4904)
    ["created_at"]=>
    string(20) "2015-08-04T19:46:42Z"
    ["name"]=>
    string(12) "new env name"
    ["default"]=>
    bool(true)
    ["webhook"]=>
    string(0) ""
    ["webhook_enabled"]=>
    NULL
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
  }
  ["filters"]=>
  array(1) {
    ["tests"]=>
    array(1) {
      [0]=>
      int(17793)
    }
  }
  ["frontend_url"]=>
  string(39) "https://app.rainforestqa.com/runs/32353"
  ["id"]=>
  int(32353)
  ["log_url"]=>
  string(114) "https://tala.rainforestqa.com/api/v1/logs/32353?expires_at=1438976142&sig=b74537e65925b50cbbf71681f168598f8a86ec08"
  ["real_cost_to_run"]=>
  int(0)
  ["result"]=>
  string(9) "no_result"
  ["sample_test_titles"]=>
  array(0) {
  }
  ["state"]=>
  string(6) "queued"
  ["state_details"]=>
  array(2) {
    ["name"]=>
    string(6) "queued"
    ["is_final_state"]=>
    bool(false)
  }
  ["stats"]=>
  array(4) {
    ["total_time_for_one_person"]=>
    float(0)
    ["total_time_for_rainforest"]=>
    float(14400)
    ["total_rainforest_overhead"]=>
    float(0)
    ["speed_up"]=>
    float(0)
  }
  ["timestamps"]=>
  array(1) {
    ["created_at"]=>
    string(24) "2015-08-07T18:35:42.530Z"
  }
  ["total_failed_tests"]=>
  int(0)
  ["total_no_result_tests"]=>
  int(0)
  ["total_passed_tests"]=>
  int(0)
  ["total_tests"]=>
  int(0)
  ...}
}
```

TODO: Fill this in.


## List a Run's Tests

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 905
run = Rainforest::Run.retrieve(id)
tests = run.associated_tests.all
# or
tests = Rainforest::Run.new(id).associated_tests.all
```



```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 31459;
Rainforest.Run.retrieve(id).then(function(run) {
  // Get tests for this run
  return run.associatedTests().all();
}).then(function(tests) {
  _.each(tests.data, function(test) {
    // Work with each test
  });
}).catch(function(e) {
  // Handle errors
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 32353;

$run = \Rainforest\Run::retrieve( $id );
$tests = $run->associatedTests()->all();

# The list is enumerable and works similarly to an array
foreach( $tests->data as $test  ) {
  # work with an runs
}

$tests->data[0]; # The first test in the list
count( $tests->data ); # the number of tests returned
?>
```


> Example Response

```ruby
#<Rainforest::ApiList[Rainforest::Test]:0x3fd86fdf11f0> Data: [
  "#<Rainforest::Test:0x3fd86fdf0bc4 id=2181>"
]

```



```javascript
{ data:
   [ { id: 17790,
       created_at: '2015-07-28T15:10:06Z',
       test_id: 17790,
       site_id: 860,
       title: 'Customer Logos',
       state: 'complete',
       result: 'passed',
       start_uri: '/',
       description: 'Make sure all customer logos link to their websites correctly.',
       run_mode: 'default',
       quality: 'acceptable',
       editable: false,
       browsers:
        [ { id: 770858,
            created_at: '2015-07-28T15:10:07Z',
            name: 'chrome',
            description: 'Google Chrome',
            category: 'browser',
            result: 'passed',
            state: 'complete' } ],
       tags: [ 'www' ],
       step_count: 1,
       dry_run_url: null }
```

```php
array(1) {
  [0]=>
  object(Rainforest\Test)#17 (22) {
    ["browsers"]=>
    array(1) {
      [0]=>
      array(7) {
        ["id"]=>
        int(786900)
        ["created_at"]=>
        string(20) "2015-08-07T18:35:42Z"
        ["name"]=>
        string(6) "chrome"
        ["description"]=>
        string(13) "Google Chrome"
        ["category"]=>
        string(7) "browser"
        ["result"]=>
        string(6) "failed"
        ["state"]=>
        string(8) "complete"
      }
    }
    ["created_at"]=>
    string(20) "2015-08-07T18:35:42Z"
    ["deletable"]=>
    NULL
    ["deleted"]=>
    NULL
    ["description"]=>
    string(0) ""
    ["dry_run_url"]=>
    NULL
    ["editable"]=>
    bool(false)
    ["elements"]=>
    NULL
    ["has_been_dry_run"]=>
    NULL
    ["id"]=>
    int(17793)
    ["last_run"]=>
    NULL
    ["result"]=>
    string(6) "failed"
    ["run_mode"]=>
    string(7) "default"
    ["site_id"]=>
    int(860)
    ["start_uri"]=>
    string(1) "/"
    ["step_count"]=>
    int(2)
    ["tags"]=>
    array(0) {
    }
    ["test_id"]=>
    int(17793)
    ["title"]=>
    string(22) "Log in as regular user"
    }
  }
}
```

TODO: Fill this in.
