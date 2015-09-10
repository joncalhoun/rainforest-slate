# Tests

## The Test Object

```ruby
#<Rainforest::Test:0x3fd86d602270 id=17790> Attributes: {
  "browsers": [
    {"name":"android_phone_landscape","description":"Android Phone Landscape","category":"phone","state":"disabled"},
    {"name":"android_phone_portrait","description":"Android Phone Portrait","category":"phone","state":"disabled"},
    {"name":"android_tablet_landscape","description":"Android Tablet Landscape","category":"tablet","state":"disabled"},
    {"name":"android_tablet_portrait","description":"Android Tablet Portrait","category":"tablet","state":"disabled"},
    {"name":"chrome","description":"Google Chrome","category":"browser","state":"enabled"},
    {"name":"firefox","description":"Mozilla Firefox","category":"browser","state":"disabled"},
    {"name":"ie8","description":"Microsoft Internet Explorer 8","category":"browser","state":"disabled"},
    {"name":"ie9","description":"Microsoft Internet Explorer 9","category":"browser","state":"disabled"},
    {"name":"ie10","description":"Microsoft Internet Explorer 10","category":"browser","state":"disabled"},
    {"name":"ie11","description":"Microsoft Internet Explorer 11","category":"browser","state":"disabled"},
    {"name":"safari","description":"Apple Safari","category":"browser","state":"disabled"}
  ],
  "created_at": "2015-07-28T15:02:00Z",
  "deletable": true,
  "deleted": false,
  "description": "Make sure all customer logos link to their websites correctly.",
  "dry_run_url": "https://tester.rainforestqa.com/tester/dry_run/vUu916ScjlWRwZbITsVnRg?turkSubmitTo=%2Fthanks",
  "editable": true,
  "has_been_dry_run": true,
  "id": 17790,
  "last_run": {"id":31459,"created_at":"2015-07-28T15:10:06Z","state":"complete"},
  "result": "passed",
  "run_mode": "default",
  "site_id": 860,
  "start_uri": "/",
  "step_count": 1,
  "tags": [
    "www"
  ],
  "test_id": 17790,
  "title": "Customer Logos",
  "quality": "acceptable"
}
```


```python
<rainforest.Test object: {'step_count': 1, 'has_been_dry_run': False, 'elements': [{u'redirection': True, u'created_at': u'2015-09-10T00:49:36Z', u'type': u'step', u'id': 61688, u'element': {u'action': u"Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.", u'created_at': u'2015-09-10T00:49:36Z', u'browsers': None, u'id': 53265, u'response': u'Were you redirected to the dashboard?'}}], 'description': None, 'tags': [], 'deleted': False, 'editable': True, 'created_at': u'2015-09-10T00:49:36Z', 'title': u'Login into an account', 'site_id': 860, 'last_run': None, 'run_mode': u'default', 'start_uri': u'/login', 'browsers': [{u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_landscape', u'description': u'Android Phone Landscape'}, {u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_portrait', u'description': u'Android Phone Portrait'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_landscape', u'description': u'Android Tablet Landscape'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_portrait', u'description': u'Android Tablet Portrait'}, {u'category': u'browser', u'state': u'enabled', u'name': u'chrome', u'description': u'Google Chrome'}, {u'category': u'browser', u'state': u'enabled', u'name': u'firefox', u'description': u'Mozilla Firefox'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie8', u'description': u'Microsoft Internet Explorer 8'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie9', u'description': u'Microsoft Internet Explorer 9'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie10', u'description': u'Microsoft Internet Explorer 10'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie11', u'description': u'Microsoft Internet Explorer 11'}, {u'category': u'browser', u'state': u'disabled', u'name': u'safari', u'description': u'Apple Safari'}], 'dry_run_url': u'https://tester.rainforestqa.com/tester/dry_run/M31F-V3mF8M8U7rBLCEhMg?turkSubmitTo=%2Fthanks', 'result': u'no_result', 'test_id': 20091, 'id': 20091, 'deletable': True}>
```


```javascript
{ id: 17793,
  created_at: '2015-07-28T15:40:19Z',
  test_id: 17793,
  site_id: 860,
  title: 'Log in',
  result: 'no_result',
  start_uri: '/',
  description: '',
  run_mode: 'default',
  has_been_dry_run: false,
  quality: 'no_data',
  deleted: false,
  deletable: false,
  editable: true,
  browsers:
   [ { name: 'android_phone_landscape',
       description: 'Android Phone Landscape',
       category: 'phone',
       state: 'disabled' },
     { name: 'android_phone_portrait',
       description: 'Android Phone Portrait',
       category: 'phone',
       state: 'disabled' },
     { name: 'android_tablet_landscape',
       description: 'Android Tablet Landscape',
       category: 'tablet',
       state: 'disabled' },
     { name: 'android_tablet_portrait',
       description: 'Android Tablet Portrait',
       category: 'tablet',
       state: 'disabled' },
     { name: 'chrome',
       description: 'Google Chrome',
       category: 'browser',
       state: 'enabled' },
     { name: 'firefox',
       description: 'Mozilla Firefox',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie8',
       description: 'Microsoft Internet Explorer 8',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie9',
       description: 'Microsoft Internet Explorer 9',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie10',
       description: 'Microsoft Internet Explorer 10',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie11',
       description: 'Microsoft Internet Explorer 11',
       category: 'browser',
       state: 'disabled' },
     { name: 'safari',
       description: 'Apple Safari',
       category: 'browser',
       state: 'disabled' } ],
  tags: [],
  step_count: 2,
  dry_run_url: 'https://tester.rainforestqa.com/tester/dry_run/RtCylRPOCee0oVMjl1KW4Q?turkSubmitTo=%2Fthanks',
  last_run:
   { id: 31921,
     created_at: '2015-08-03T18:47:18Z',
     state: 'aborted' } }
```

```php
object(Rainforest\Test)#13 (22) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(8) "disabled"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-06T18:22:58Z"
  ["deletable"]=>
  bool(true)
  ["deleted"]=>
  bool(false)
  ["description"]=>
  NULL
  ["dry_run_url"]=>
  string(92) "https://tester.rainforestqa.com/tester/dry_run/EPEPO0ZZb34DbtCxNcMEEQ?turkSubmitTo=%2Fthanks"
  ["editable"]=>
  bool(true)
  ["elements"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(56324)
      ["created_at"]=>
      string(20) "2015-08-06T18:22:58Z"
      ["redirection"]=>
      bool(true)
      ["type"]=>
      string(4) "step"
      ["element"]=>
      array(5) {
        ["id"]=>
        int(49208)
        ["created_at"]=>
        string(20) "2015-08-06T18:22:58Z"
        ["action"]=>
        string(116) "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button."
        ["response"]=>
        string(37) "Were you redirected to the dashboard?"
        ["browsers"]=>
        NULL
      }
    }
  }
  ["has_been_dry_run"]=>
  bool(false)
  ["id"]=>
  int(18315)
  ["last_run"]=>
  NULL
  ["result"]=>
  string(9) "no_result"
  ["run_mode"]=>
  string(7) "default"
  ["site_id"]=>
  int(860)
  ["start_uri"]=>
  string(6) "/login"
  ["step_count"]=>
  int(1)
  ["tags"]=>
  array(0) {
  }
  ["test_id"]=>
  int(18315)
  ["title"]=>
  string(20) "Log in to an account"
  }
}
```

TODO: Fill this in.

Attributes |           |
---------- | --------- |
**browsers** <div class="attr attr-type">string</div> | TODO: Add some info about `browsers`
**created_at** <div class="attr attr-type">string</div> | TODO: Add some info about `created_at`
**deletable** <div class="attr attr-type">string</div> | TODO: Add some info about `deletable`
**deleted** <div class="attr attr-type">string</div> | TODO: Add some info about `deleted`
**description** <div class="attr attr-type">string</div> | TODO: Add some info about `description`
**dry_run_url** <div class="attr attr-type">string</div> | TODO: Add some info about `dry_run_url`
**editable** <div class="attr attr-type">string</div> | TODO: Add some info about `editable`
**elements** <div class="attr attr-type">array</div> | TODO: Add some info about `elements`
**has_been_dry_run** <div class="attr attr-type">string</div> | TODO: Add some info about `has_been_dry_run`
**id** <div class="attr attr-type">string</div> | TODO: Add some info about `id`
**last_run** <div class="attr attr-type">string</div> | TODO: Add some info about `last_run`
**result** <div class="attr attr-type">string</div> | TODO: Add some info about `result`
**run_mode** <div class="attr attr-type">string</div> | TODO: Add some info about `run_mode`
**site_id** <div class="attr attr-type">string</div> | TODO: Add some info about `site_id`
**start_uri** <div class="attr attr-type">string</div> | TODO: Add some info about `start_uri`
**step_count** <div class="attr attr-type">string</div> | TODO: Add some info about `step_count`
**tags** <div class="attr attr-type">string</div> | TODO: Add some info about `tags`
**test_id** <div class="attr attr-type">string</div> | TODO: Add some info about `test_id`
**title** <div class="attr attr-type">string</div> | TODO: Add some info about `title`
**state** <div class="attr attr-type">string</div> | TODO: Add some info about `state`
**quality** <div class="attr attr-type">string</div> | TODO: Add some info about `quality`



## Create a Test

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

test = Rainforest::Test.create(
  :start_uri => "/login",
  :title => "Log in to an account",
  :elements => [
    {
      :type => "step",
      :redirection => true,
      :element => {
        :action => "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.",
        :response => "Were you redirected to the dashboard?"
      }
    }
  ]
)
```


```python
import rainforest
rainforest.API_KEY = "your-api-key"

test = rainforest.Test.create(params={
    'start_uri': "/login",
    'title': "Login into an account",
    'elements': [{
        'type': "step",
        'redirection': True,
        'element': {
            'action': "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.",
            'response': "Were you redirected to the dashboard?"
        }
    }]
})
```


```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

Rainforest.Test.create({
  start_uri: "/login",
  title: "Log in to an account",
  elements: [
    {
      type: "step",
      redirection: true,
      element: {
        action: "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.",
        response: "Were you redirected to the dashboard?"
      }
    }
  ]
}).then(function(test) {
  // The test was created
}).catch(function(e) {
  // Handle errors
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$test = \Rainforest\Test::create([
    "start_uri" => "/login",
    "title" => "Log in to an account",
    "elements" => [
      [
        "type" => "step",
        "redirection" => true,
        "element" => [
          "action" => "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.",
          "response" => "Were you redirected to the dashboard?"
        ]
      ]
    ]
]);
?>
```

> Example Response

```ruby
#<Rainforest::Test:0x3ff930d38a74 id=17609> Attributes: {
  "browsers": [
    {"name":"android_phone_landscape","description":"Android Phone Landscape","category":"phone","state":"enabled"},
    {"name":"android_phone_portrait","description":"Android Phone Portrait","category":"phone","state":"enabled"},
    {"name":"android_tablet_landscape","description":"Android Tablet Landscape","category":"tablet","state":"enabled"},
    {"name":"android_tablet_portrait","description":"Android Tablet Portrait","category":"tablet","state":"enabled"},
    {"name":"chrome","description":"Google Chrome","category":"browser","state":"enabled"},
    {"name":"firefox","description":"Mozilla Firefox","category":"browser","state":"enabled"},
    {"name":"ie8","description":"Microsoft Internet Explorer 8","category":"browser","state":"enabled"},
    {"name":"ie9","description":"Microsoft Internet Explorer 9","category":"browser","state":"enabled"},
    {"name":"ie10","description":"Microsoft Internet Explorer 10","category":"browser","state":"enabled"},
    {"name":"ie11","description":"Microsoft Internet Explorer 11","category":"browser","state":"enabled"},
    {"name":"safari","description":"Apple Safari","category":"browser","state":"disabled"}
  ],
  "created_at": "2015-07-28T17:34:38Z",
  "deletable": true,
  "deleted": false,
  "description": null,
  "dry_run_url": "https://tester.rnfrst.com/tester/dry_run/kcVBInd0jUW_ELLk4NHTYg?turkSubmitTo=%2Fthanks",
  "editable": true,
  "has_been_dry_run": false,
  "id": 17609,
  "last_run": null,
  "result": "no_result",
  "run_mode": "default",
  "site_id": 860,
  "start_uri": "/login",
  "step_count": 1,
  "tags": [

  ],
  "test_id": 17609,
  "title": "Log in to an account",
  "quality": "no_data",
  "elements": [
    {"id":54913,"created_at":"2015-07-28T17:34:39Z","redirection":true,"type":"step","element":{"id":47999,"created_at":"2015-07-28T17:34:39Z","action":"Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.","response":"Were you redirected to the dashboard?","browsers":null}}
  ],
  "attached_to": null
}
```


```python
<rainforest.Test object: {'step_count': 1, 'has_been_dry_run': False, 'elements': [{u'redirection': True, u'created_at': u'2015-09-10T00:49:36Z', u'type': u'step', u'id': 61688, u'element': {u'action': u"Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.", u'created_at': u'2015-09-10T00:49:36Z', u'browsers': None, u'id': 53265, u'response': u'Were you redirected to the dashboard?'}}], 'description': None, 'tags': [], 'deleted': False, 'editable': True, 'created_at': u'2015-09-10T00:49:36Z', 'title': u'Login into an account', 'site_id': 860, 'last_run': None, 'run_mode': u'default', 'start_uri': u'/login', 'browsers': [{u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_landscape', u'description': u'Android Phone Landscape'}, {u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_portrait', u'description': u'Android Phone Portrait'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_landscape', u'description': u'Android Tablet Landscape'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_portrait', u'description': u'Android Tablet Portrait'}, {u'category': u'browser', u'state': u'enabled', u'name': u'chrome', u'description': u'Google Chrome'}, {u'category': u'browser', u'state': u'enabled', u'name': u'firefox', u'description': u'Mozilla Firefox'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie8', u'description': u'Microsoft Internet Explorer 8'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie9', u'description': u'Microsoft Internet Explorer 9'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie10', u'description': u'Microsoft Internet Explorer 10'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie11', u'description': u'Microsoft Internet Explorer 11'}, {u'category': u'browser', u'state': u'disabled', u'name': u'safari', u'description': u'Apple Safari'}], 'dry_run_url': u'https://tester.rainforestqa.com/tester/dry_run/M31F-V3mF8M8U7rBLCEhMg?turkSubmitTo=%2Fthanks', 'result': u'no_result', 'test_id': 20091, 'id': 20091, 'deletable': True}>
```


```javascript
{ id: 18036,
  created_at: '2015-08-03T22:55:25Z',
  test_id: 18036,
  site_id: 860,
  title: 'Log in to an account',
  result: 'no_result',
  start_uri: '/login',
  description: null,
  run_mode: 'default',
  has_been_dry_run: false,
  quality: 'no_data',
  deleted: false,
  deletable: true,
  editable: true,
  browsers:
   [ { name: 'android_phone_landscape',
       description: 'Android Phone Landscape',
       category: 'phone',
       state: 'enabled' },
     { name: 'android_phone_portrait',
       description: 'Android Phone Portrait',
       category: 'phone',
       state: 'enabled' },
     { name: 'android_tablet_landscape',
       description: 'Android Tablet Landscape',
       category: 'tablet',
       state: 'enabled' },
     { name: 'android_tablet_portrait',
       description: 'Android Tablet Portrait',
       category: 'tablet',
       state: 'enabled' },
     { name: 'chrome',
       description: 'Google Chrome',
       category: 'browser',
       state: 'enabled' },
     { name: 'firefox',
       description: 'Mozilla Firefox',
       category: 'browser',
       state: 'enabled' },
     { name: 'ie8',
       description: 'Microsoft Internet Explorer 8',
       category: 'browser',
       state: 'enabled' },
     { name: 'ie9',
       description: 'Microsoft Internet Explorer 9',
       category: 'browser',
       state: 'enabled' },
     { name: 'ie10',
       description: 'Microsoft Internet Explorer 10',
       category: 'browser',
       state: 'enabled' },
     { name: 'ie11',
       description: 'Microsoft Internet Explorer 11',
       category: 'browser',
       state: 'enabled' },
     { name: 'safari',
       description: 'Apple Safari',
       category: 'browser',
       state: 'disabled' } ],
  tags: [],
  elements:
   [ { id: 55766,
       created_at: '2015-08-03T22:55:26Z',
       redirection: true,
       type: 'step',
       element: [Object] } ],
  step_count: 1,
  dry_run_url: 'https://tester.rainforestqa.com/tester/dry_run/gHUL9tAGqspvqzp9IckGFA?turkSubmitTo=%2Fthanks',
  last_run: null }
```


```php
object(Rainforest\Test)#13 (22) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(8) "disabled"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-06T18:22:58Z"
  ["deletable"]=>
  bool(true)
  ["deleted"]=>
  bool(false)
  ["description"]=>
  NULL
  ["dry_run_url"]=>
  string(92) "https://tester.rainforestqa.com/tester/dry_run/EPEPO0ZZb34DbtCxNcMEEQ?turkSubmitTo=%2Fthanks"
  ["editable"]=>
  bool(true)
  ["elements"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(56324)
      ["created_at"]=>
      string(20) "2015-08-06T18:22:58Z"
      ["redirection"]=>
      bool(true)
      ["type"]=>
      string(4) "step"
      ["element"]=>
      array(5) {
        ["id"]=>
        int(49208)
        ["created_at"]=>
        string(20) "2015-08-06T18:22:58Z"
        ["action"]=>
        string(116) "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button."
        ["response"]=>
        string(37) "Were you redirected to the dashboard?"
        ["browsers"]=>
        NULL
      }
    }
  }
  ["has_been_dry_run"]=>
  bool(false)
  ["id"]=>
  int(18315)
  ["last_run"]=>
  NULL
  ["result"]=>
  string(9) "no_result"
  ["run_mode"]=>
  string(7) "default"
  ["site_id"]=>
  int(860)
  ["start_uri"]=>
  string(6) "/login"
  ["step_count"]=>
  int(1)
  ["tags"]=>
  array(0) {
  }
  ["test_id"]=>
  int(18315)
  ["title"]=>
  string(20) "Log in to an account"
  }
}
```

TODO: Fill this in.


Arguments |           |
--------- | --------- |
**start_uri** <div class="attr attr-required">required</div> <div class="attr attr-type">string</div> | TODO: Fill this in.


## Retrieve a Test

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 905
test = Rainforest::Test.retrieve(id)
```


```python
import rainforest
rainforest.API_KEY = "your-api-key"

id = 20091
test = rainforest.Test.retrieve(id)
```


```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 17793;
Rainforest.Test.retrieve(id).then(function(test) {
  // Use the test
}).catch(function(e) {
  // Handle errors
});
```

```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 18315;
$test = \Rainforest\Test::retrieve( $id );
?>
```

> Example Response

```ruby
#<Rainforest::Test:0x3ff931d22ac0 id=17609> Attributes: {
  "browsers": [
    {"name":"android_phone_landscape","description":"Android Phone Landscape","category":"phone","state":"enabled"},
    {"name":"android_phone_portrait","description":"Android Phone Portrait","category":"phone","state":"enabled"},
    {"name":"android_tablet_landscape","description":"Android Tablet Landscape","category":"tablet","state":"enabled"},
    {"name":"android_tablet_portrait","description":"Android Tablet Portrait","category":"tablet","state":"enabled"},
    {"name":"chrome","description":"Google Chrome","category":"browser","state":"enabled"},
    {"name":"firefox","description":"Mozilla Firefox","category":"browser","state":"enabled"},
    {"name":"ie8","description":"Microsoft Internet Explorer 8","category":"browser","state":"enabled"},
    {"name":"ie9","description":"Microsoft Internet Explorer 9","category":"browser","state":"enabled"},
    {"name":"ie10","description":"Microsoft Internet Explorer 10","category":"browser","state":"enabled"},
    {"name":"ie11","description":"Microsoft Internet Explorer 11","category":"browser","state":"enabled"},
    {"name":"safari","description":"Apple Safari","category":"browser","state":"disabled"}
  ],
  "created_at": "2015-07-28T17:34:38Z",
  "deletable": true,
  "deleted": false,
  "description": null,
  "dry_run_url": "https://tester.rnfrst.com/tester/dry_run/kcVBInd0jUW_ELLk4NHTYg?turkSubmitTo=%2Fthanks",
  "editable": true,
  "has_been_dry_run": true,
  "id": 17609,
  "last_run": null,
  "result": "no_result",
  "run_mode": "default",
  "site_id": 860,
  "start_uri": "/login",
  "step_count": 1,
  "tags": [

  ],
  "test_id": 17609,
  "title": "Log in to an account",
  "quality": "no_data",
  "elements": [
    {"id":54913,"created_at":"2015-07-28T17:34:39Z","redirection":true,"type":"step","element":{"id":47999,"created_at":"2015-07-28T17:34:39Z","action":"Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.","response":"Were you redirected to the dashboard?","browsers":null}}
  ],
  "attached_to": [

  ]
}
```


```python
<rainforest.Test object: {'step_count': 1, 'has_been_dry_run': False, 'elements': [{u'redirection': True, u'created_at': u'2015-09-10T00:49:36Z', u'type': u'step', u'id': 61688, u'element': {u'action': u"Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.", u'created_at': u'2015-09-10T00:49:36Z', u'browsers': None, u'id': 53265, u'response': u'Were you redirected to the dashboard?'}}], 'description': None, 'tags': [], 'deleted': False, 'editable': True, 'created_at': u'2015-09-10T00:49:36Z', 'title': u'Login into an account', 'site_id': 860, 'last_run': None, 'run_mode': u'default', 'start_uri': u'/login', 'browsers': [{u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_landscape', u'description': u'Android Phone Landscape'}, {u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_portrait', u'description': u'Android Phone Portrait'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_landscape', u'description': u'Android Tablet Landscape'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_portrait', u'description': u'Android Tablet Portrait'}, {u'category': u'browser', u'state': u'enabled', u'name': u'chrome', u'description': u'Google Chrome'}, {u'category': u'browser', u'state': u'enabled', u'name': u'firefox', u'description': u'Mozilla Firefox'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie8', u'description': u'Microsoft Internet Explorer 8'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie9', u'description': u'Microsoft Internet Explorer 9'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie10', u'description': u'Microsoft Internet Explorer 10'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie11', u'description': u'Microsoft Internet Explorer 11'}, {u'category': u'browser', u'state': u'disabled', u'name': u'safari', u'description': u'Apple Safari'}], 'dry_run_url': u'https://tester.rainforestqa.com/tester/dry_run/M31F-V3mF8M8U7rBLCEhMg?turkSubmitTo=%2Fthanks', 'result': u'no_result', 'test_id': 20091, 'id': 20091, 'deletable': True}>
```


```javascript
{ id: 17793,
  created_at: '2015-07-28T15:40:19Z',
  test_id: 17793,
  site_id: 860,
  title: 'Log in',
  result: 'no_result',
  start_uri: '/',
  description: '',
  run_mode: 'default',
  has_been_dry_run: false,
  quality: 'no_data',
  deleted: false,
  deletable: false,
  editable: true,
  browsers:
   [ { name: 'android_phone_landscape',
       description: 'Android Phone Landscape',
       category: 'phone',
       state: 'disabled' },
     { name: 'android_phone_portrait',
       description: 'Android Phone Portrait',
       category: 'phone',
       state: 'disabled' },
     { name: 'android_tablet_landscape',
       description: 'Android Tablet Landscape',
       category: 'tablet',
       state: 'disabled' },
     { name: 'android_tablet_portrait',
       description: 'Android Tablet Portrait',
       category: 'tablet',
       state: 'disabled' },
     { name: 'chrome',
       description: 'Google Chrome',
       category: 'browser',
       state: 'enabled' },
     { name: 'firefox',
       description: 'Mozilla Firefox',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie8',
       description: 'Microsoft Internet Explorer 8',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie9',
       description: 'Microsoft Internet Explorer 9',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie10',
       description: 'Microsoft Internet Explorer 10',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie11',
       description: 'Microsoft Internet Explorer 11',
       category: 'browser',
       state: 'disabled' },
     { name: 'safari',
       description: 'Apple Safari',
       category: 'browser',
       state: 'disabled' } ],
  tags: [],
  step_count: 2,
  dry_run_url: 'https://tester.rainforestqa.com/tester/dry_run/RtCylRPOCee0oVMjl1KW4Q?turkSubmitTo=%2Fthanks',
  last_run:
   { id: 31921,
     created_at: '2015-08-03T18:47:18Z',
     state: 'aborted' } }
```

```php
object(Rainforest\Test)#13 (22) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(8) "disabled"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-06T18:22:58Z"
  ["deletable"]=>
  bool(true)
  ["deleted"]=>
  bool(false)
  ["description"]=>
  NULL
  ["dry_run_url"]=>
  string(92) "https://tester.rainforestqa.com/tester/dry_run/EPEPO0ZZb34DbtCxNcMEEQ?turkSubmitTo=%2Fthanks"
  ["editable"]=>
  bool(true)
  ["elements"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(56324)
      ["created_at"]=>
      string(20) "2015-08-06T18:22:58Z"
      ["redirection"]=>
      bool(true)
      ["type"]=>
      string(4) "step"
      ["element"]=>
      array(5) {
        ["id"]=>
        int(49208)
        ["created_at"]=>
        string(20) "2015-08-06T18:22:58Z"
        ["action"]=>
        string(116) "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button."
        ["response"]=>
        string(37) "Were you redirected to the dashboard?"
        ["browsers"]=>
        NULL
      }
    }
  }
  ["has_been_dry_run"]=>
  bool(false)
  ["id"]=>
  int(18315)
  ["last_run"]=>
  NULL
  ["result"]=>
  string(9) "no_result"
  ["run_mode"]=>
  string(7) "default"
  ["site_id"]=>
  int(860)
  ["start_uri"]=>
  string(6) "/login"
  ["step_count"]=>
  int(1)
  ["tags"]=>
  array(0) {
  }
  ["test_id"]=>
  int(18315)
  ["title"]=>
  string(20) "Log in to an account"
  }
}
```

TODO: Fill this in.


Arguments |           |
--------- | --------- |
**id** <div class="attr attr-required">required</div> <div class="attr attr-type">integer</div> | The id of the test you want to retrieve.


## Update a Test

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

# TODO: Fill this in
id = 17609
test = Rainforest::Test.update(id, :title => "New Test Title")
# or
test = Rainforest::Test.retrieve(id)
test.title = "New Test Title"
test.save
```


```python
import rainforest
rainforest.API_KEY = "your-api-key"

id = 20091
test = rainforest.Test.update(id, params={'title': "New test title"})
```


```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 17793;
Rainforest.Test.update(id, {
  title: "Log in as regular user"
}).then(function(test) {
  // The test was updated
}).catch(function(e) {
  // Handle errors
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 18315;

$test = \Rainforest\Test::update($id, ["name" => "New Test Title"]);

# or

$test = \Rainforest\Test::retrieve($id);
$test->name = "New Test Title";
$test->save();
?>
```

> Example Response

```ruby
#<Rainforest::Test:0x3ff73d6c9d18 id=13> Attributes: {
}
```


```python
<rainforest.Test object: {'step_count': 1, 'has_been_dry_run': False, 'elements': [{u'redirection': True, u'created_at': u'2015-09-10T00:49:36Z', u'type': u'step', u'id': 61688, u'element': {u'action': u"Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button.", u'created_at': u'2015-09-10T00:49:36Z', u'browsers': None, u'id': 53265, u'response': u'Were you redirected to the dashboard?'}}], 'description': None, 'tags': [], 'deleted': False, 'editable': True, 'created_at': u'2015-09-10T00:49:36Z', 'title': u'New test title', 'site_id': 860, 'last_run': None, 'run_mode': u'default', 'start_uri': u'/login', 'browsers': [{u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_landscape', u'description': u'Android Phone Landscape'}, {u'category': u'phone', u'state': u'enabled', u'name': u'android_phone_portrait', u'description': u'Android Phone Portrait'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_landscape', u'description': u'Android Tablet Landscape'}, {u'category': u'tablet', u'state': u'enabled', u'name': u'android_tablet_portrait', u'description': u'Android Tablet Portrait'}, {u'category': u'browser', u'state': u'enabled', u'name': u'chrome', u'description': u'Google Chrome'}, {u'category': u'browser', u'state': u'enabled', u'name': u'firefox', u'description': u'Mozilla Firefox'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie8', u'description': u'Microsoft Internet Explorer 8'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie9', u'description': u'Microsoft Internet Explorer 9'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie10', u'description': u'Microsoft Internet Explorer 10'}, {u'category': u'browser', u'state': u'enabled', u'name': u'ie11', u'description': u'Microsoft Internet Explorer 11'}, {u'category': u'browser', u'state': u'disabled', u'name': u'safari', u'description': u'Apple Safari'}], 'dry_run_url': u'https://tester.rainforestqa.com/tester/dry_run/M31F-V3mF8M8U7rBLCEhMg?turkSubmitTo=%2Fthanks', 'result': u'no_result', 'test_id': 20091, 'id': 20091, 'deletable': True}>
```


```javascript
{ id: 17793,
  created_at: '2015-07-28T15:40:19Z',
  test_id: 17793,
  site_id: 860,
  title: 'Log in as regular user',
  result: 'no_result',
  start_uri: '/',
  description: '',
  run_mode: 'default',
  has_been_dry_run: false,
  quality: 'no_data',
  deleted: false,
  deletable: false,
  editable: true,
  browsers:
   [ { name: 'android_phone_landscape',
       description: 'Android Phone Landscape',
       category: 'phone',
       state: 'disabled' },
     { name: 'android_phone_portrait',
       description: 'Android Phone Portrait',
       category: 'phone',
       state: 'disabled' },
     { name: 'android_tablet_landscape',
       description: 'Android Tablet Landscape',
       category: 'tablet',
       state: 'disabled' },
     { name: 'android_tablet_portrait',
       description: 'Android Tablet Portrait',
       category: 'tablet',
       state: 'disabled' },
     { name: 'chrome',
       description: 'Google Chrome',
       category: 'browser',
       state: 'enabled' },
     { name: 'firefox',
       description: 'Mozilla Firefox',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie8',
       description: 'Microsoft Internet Explorer 8',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie9',
       description: 'Microsoft Internet Explorer 9',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie10',
       description: 'Microsoft Internet Explorer 10',
       category: 'browser',
       state: 'disabled' },
     { name: 'ie11',
       description: 'Microsoft Internet Explorer 11',
       category: 'browser',
       state: 'disabled' },
     { name: 'safari',
       description: 'Apple Safari',
       category: 'browser',
       state: 'disabled' } ],
  tags: [],
  elements:
   [ { id: 55284,
       created_at: '2015-07-28T15:41:03Z',
       redirection: true,
       type: 'step',
       element: [Object] },
     { id: 55285,
       created_at: '2015-07-28T15:41:49Z',
       redirection: true,
       type: 'step',
       element: [Object] } ],
  step_count: 2,
  dry_run_url: 'https://tester.rainforestqa.com/tester/dry_run/RtCylRPOCee0oVMjl1KW4Q?turkSubmitTo=%2Fthanks',
  last_run:
   { id: 31921,
     created_at: '2015-08-03T18:47:18Z',
     state: 'aborted' } }
```

```php
object(Rainforest\Test)#13 (23) {
  ["browsers"]=>
  array(11) {
    [0]=>
    array(4) {
      ["name"]=>
      string(23) "android_phone_landscape"
      ["description"]=>
      string(23) "Android Phone Landscape"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [1]=>
    array(4) {
      ["name"]=>
      string(22) "android_phone_portrait"
      ["description"]=>
      string(22) "Android Phone Portrait"
      ["category"]=>
      string(5) "phone"
      ["state"]=>
      string(7) "enabled"
    }
    [2]=>
    array(4) {
      ["name"]=>
      string(24) "android_tablet_landscape"
      ["description"]=>
      string(24) "Android Tablet Landscape"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [3]=>
    array(4) {
      ["name"]=>
      string(23) "android_tablet_portrait"
      ["description"]=>
      string(23) "Android Tablet Portrait"
      ["category"]=>
      string(6) "tablet"
      ["state"]=>
      string(7) "enabled"
    }
    [4]=>
    array(4) {
      ["name"]=>
      string(6) "chrome"
      ["description"]=>
      string(13) "Google Chrome"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [5]=>
    array(4) {
      ["name"]=>
      string(7) "firefox"
      ["description"]=>
      string(15) "Mozilla Firefox"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [6]=>
    array(4) {
      ["name"]=>
      string(3) "ie8"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 8"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [7]=>
    array(4) {
      ["name"]=>
      string(3) "ie9"
      ["description"]=>
      string(29) "Microsoft Internet Explorer 9"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [8]=>
    array(4) {
      ["name"]=>
      string(4) "ie10"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 10"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [9]=>
    array(4) {
      ["name"]=>
      string(4) "ie11"
      ["description"]=>
      string(30) "Microsoft Internet Explorer 11"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(7) "enabled"
    }
    [10]=>
    array(4) {
      ["name"]=>
      string(6) "safari"
      ["description"]=>
      string(12) "Apple Safari"
      ["category"]=>
      string(7) "browser"
      ["state"]=>
      string(8) "disabled"
    }
  }
  ["created_at"]=>
  string(20) "2015-08-06T18:22:58Z"
  ["deletable"]=>
  bool(true)
  ["deleted"]=>
  bool(false)
  ["description"]=>
  NULL
  ["dry_run_url"]=>
  string(92) "https://tester.rainforestqa.com/tester/dry_run/EPEPO0ZZb34DbtCxNcMEEQ?turkSubmitTo=%2Fthanks"
  ["editable"]=>
  bool(true)
  ["elements"]=>
  array(1) {
    [0]=>
    array(5) {
      ["id"]=>
      int(56324)
      ["created_at"]=>
      string(20) "2015-08-06T18:22:58Z"
      ["redirection"]=>
      bool(true)
      ["type"]=>
      string(4) "step"
      ["element"]=>
      array(5) {
        ["id"]=>
        int(49208)
        ["created_at"]=>
        string(20) "2015-08-06T18:22:58Z"
        ["action"]=>
        string(116) "Type 'test@apibits.com' into the email field, and 'password123' into the password field, then hit the log in button."
        ["response"]=>
        string(37) "Were you redirected to the dashboard?"
        ["browsers"]=>
        NULL
      }
    }
  }
  ["has_been_dry_run"]=>
  bool(false)
  ["id"]=>
  int(18315)
  ["last_run"]=>
  NULL
  ["result"]=>
  string(9) "no_result"
  ["run_mode"]=>
  string(7) "default"
  ["site_id"]=>
  int(860)
  ["start_uri"]=>
  string(6) "/login"
  ["step_count"]=>
  int(1)
  ["tags"]=>
  array(0) {
  }
  ["test_id"]=>
  int(18315)
  ["title"]=>
  string(20) "Log in to an account"
  }
}
```

TODO: Fill this in.


Arguments |           |
--------- | --------- |
**id** <div class="attr attr-required">required</div> <div class="attr attr-type">integer</div> | The id of the test you want to update.

## List all Tests

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

tests = Rainforest::Test.all

# The list is enumerable and works similarly to a array
tests.each do |test|
  # work with a test
end

tests[0] # The first test in the list
tests.length # the number of tests returned
```


```python
import rainforest
rainforest.API_KEY = "your-api-key"

tests = rainforest.Test.all()
for test in tests:
    # work with a test

tests[0] # the first test in the list
len(tests) # the number of tests returned
```


```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

Rainforest.Test.all().then(function(tests) {
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

$tests = \Rainforest\Test::all();

# The list is enumerable and works similarly to an array
foreach( $tests->data as $test ) {
  # work with an Test
}

$tests->data[0]; # The first Test in the list
count( $tests->data ); # the number of Tests returned
?>
```


> Example Response

```ruby
#<Rainforest::ApiList[Rainforest::Test]:0x3ff73d57a598> Data: [
  "#<Rainforest::Test:0x3ff73d577dac id=905>",
  "#<Rainforest::Test:0x3ff73d661bb4 id=2181>"
]


```


```python
<rainforest.apibits.ApiList object (class Test): [<rainforest.Test object: {'step_count': 1, 'has_been_dry_run': True, 'elements': None, 'description': u'Make sure all customer logos link to their websites correctly.', 'tags': [u'www'], 'deleted': False, 'editable': True, 'created_at': u'2015-07-28T15:02:00Z', 'title': u'Customer Logos', 'site_id': 860, 'last_run': {u'created_at': u'2015-08-31T17:26:34Z', u'id': 34370, u'state': u'aborted'}, 'run_mode': u'default', 'start_uri': u'/', 'browsers': [{u'category': u'phone', u'state': u'disabled', u'name': u'android_phone_landscape', u'description': u'Android Phone Landscape'}, {u'category': u'phone', u'state': u'disabled', u'name': u'android_phone_portrait', u'description': u'Android Phone Portrait'}, {u'category': u'tablet', u'state': u'disabled', u'name': u'android_tablet_landscape', u'description': u'Android Tablet Landscape'}, {u'category': u'tablet', u'state': u'disabled', u'name': u'android_tablet_portrait', u'description': u'Android Tablet Portrait'}, {u'category': u'browser', u'state': u'enabled', u'name': u'chrome', u'description': u'Google Chrome'}, {u'category': u'browser', u'state': u'disabled', u'name': u'firefox', u'description': u'Mozilla Firefox'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie8', u'description': u'Microsoft Internet Explorer 8'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie9', u'description': u'Microsoft Internet Explorer 9'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie10', u'description': u'Microsoft Internet Explorer 10'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie11', u'description': u'Microsoft Internet Explorer 11'}, {u'category': u'browser', u'state': u'disabled', u'name': u'safari', u'description': u'Apple Safari'}], 'dry_run_url': u'https://tester.rainforestqa.com/tester/dry_run/vUu916ScjlWRwZbITsVnRg?turkSubmitTo=%2Fthanks', 'result': u'no_result', 'test_id': 17790, 'id': 17790, 'deletable': True}>, <rainforest.Test object: {'step_count': 2, 'has_been_dry_run': False, 'elements': None, 'description': u'', 'tags': [], 'deleted': False, 'editable': True, 'created_at': u'2015-07-28T15:40:19Z', 'title': u'Log in as regular user', 'site_id': 860, 'last_run': {u'created_at': u'2015-08-07T18:35:42Z', u'id': 32353, u'state': u'complete'}, 'run_mode': u'default', 'start_uri': u'/', 'browsers': [{u'category': u'phone', u'state': u'disabled', u'name': u'android_phone_landscape', u'description': u'Android Phone Landscape'}, {u'category': u'phone', u'state': u'disabled', u'name': u'android_phone_portrait', u'description': u'Android Phone Portrait'}, {u'category': u'tablet', u'state': u'disabled', u'name': u'android_tablet_landscape', u'description': u'Android Tablet Landscape'}, {u'category': u'tablet', u'state': u'disabled', u'name': u'android_tablet_portrait', u'description': u'Android Tablet Portrait'}, {u'category': u'browser', u'state': u'enabled', u'name': u'chrome', u'description': u'Google Chrome'}, {u'category': u'browser', u'state': u'disabled', u'name': u'firefox', u'description': u'Mozilla Firefox'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie8', u'description': u'Microsoft Internet Explorer 8'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie9', u'description': u'Microsoft Internet Explorer 9'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie10', u'description': u'Microsoft Internet Explorer 10'}, {u'category': u'browser', u'state': u'disabled', u'name': u'ie11', u'description': u'Microsoft Internet Explorer 11'}, {u'category': u'browser', u'state': u'disabled', u'name': u'safari', u'description': u'Apple Safari'}], 'dry_run_url': u'https://tester.rainforestqa.com/tester/dry_run/RtCylRPOCee0oVMjl1KW4Q?turkSubmitTo=%2Fthanks', 'result': u'failed', 'test_id': 17793, 'id': 17793, 'deletable': True}>]>
```


```javascript
//TODO: Add node samples
#<Rainforest::ApiList[Rainforest::Test]:0x3ff73d57a598> Data: [
  "#<Rainforest::Test:0x3ff73d577dac id=905>",
  "#<Rainforest::Test:0x3ff73d661bb4 id=2181>"
]


```

```php
array(2) {
  [0]=>
  object(Rainforest\Test)#14 (22) {
    ["browsers"]=>
    array(11) {
      [0]=>
      array(4) {
        ["name"]=>
        string(23) "android_phone_landscape"
        ["description"]=>
        string(23) "Android Phone Landscape"
        ["category"]=>
        string(5) "phone"
        ["state"]=>
        string(7) "enabled"
      }
      [1]=>
      array(4) {
        ["name"]=>
        string(22) "android_phone_portrait"
        ["description"]=>
        string(22) "Android Phone Portrait"
        ["category"]=>
        string(5) "phone"
        ["state"]=>
        string(7) "enabled"
      }
      [2]=>
      array(4) {
        ["name"]=>
        string(24) "android_tablet_landscape"
        ["description"]=>
        string(24) "Android Tablet Landscape"
        ["category"]=>
        string(6) "tablet"
        ["state"]=>
        string(7) "enabled"
      }
      [3]=>
      array(4) {
        ["name"]=>
        string(23) "android_tablet_portrait"
        ["description"]=>
        string(23) "Android Tablet Portrait"
        ["category"]=>
        string(6) "tablet"
        ["state"]=>
        string(7) "enabled"
      }
      [4]=>
      array(4) {
        ["name"]=>
        string(6) "chrome"
        ["description"]=>
        string(13) "Google Chrome"
        ["category"]=>
        string(7) "browser"
        ["state"]=>
        string(7) "enabled"
      }
      [5]=>
      array(4) {
        ["name"]=>
        string(7) "firefox"
        ["description"]=>
        string(15) "Mozilla Firefox"
        ["category"]=>
        string(7) "browser"
        ["state"]=>
        string(7) "enabled"
      }
      [6]=>
      array(4) {
        ["name"]=>
        string(3) "ie8"
        ["description"]=>
        string(29) "Microsoft Internet Explorer 8"
        ["category"]=>
        string(7) "browser"
        ["state"]=>
        string(7) "enabled"
      }
      [7]=>
      array(4) {
        ["name"]=>
        string(3) "ie9"
        ["description"]=>
        string(29) "Microsoft Internet Explorer 9"
        ["category"]=>
        string(7) "browser"
        ["state"]=>
        string(7) "enabled"
      }
      [8]=>
      array(4) {
        ["name"]=>
        string(4) "ie10"
        ["description"]=>
        string(30) "Microsoft Internet Explorer 10"
        ["category"]=>
        string(7) "browser"
        ["state"]=>
        string(7) "enabled"
      }
      [9]=>
      array(4) {
        ["name"]=>
        string(4) "ie11"
        ["description"]=>
        string(30) "Microsoft Internet Explorer 11"
        ["category"]=>
        string(7) "browser"
        ["state"]=>
        string(7) "enabled"
      }
      [10]=>
      array(4) {
        ["name"]=>
        string(6) "safari"
        ["description"]=>
        string(12) "Apple Safari"
        ["category"]=>
        string(7) "browser"
        ["state"]=>
        string(8) "disabled"
      }
    }
    ["created_at"]=>
    string(20) "2015-07-28T15:44:47Z"
    ["deletable"]=>
    bool(true)
    ["deleted"]=>
    bool(false)
    ["description"]=>
    NULL
    ["dry_run_url"]=>
    string(92) "https://tester.rainforestqa.com/tester/dry_run/MrjvNbeT6SILCphmsKLE7Q?turkSubmitTo=%2Fthanks"
    ["editable"]=>
    bool(true)
    ["elements"]=>
    NULL
    ["has_been_dry_run"]=>
    bool(false)
    ["id"]=>
    int(17795)
    ["last_run"]=>
    NULL
    ["result"]=>
    string(9) "no_result"
    ["run_mode"]=>
    string(7) "default"
    ["site_id"]=>
    int(860)
    ["start_uri"]=>
    string(1) "/"
    ["step_count"]=>
    int(3)
    ["tags"]=>
    array(0) {
    }
    ["test_id"]=>
    int(17795)
    ["title"]=>
    string(13) "Create a test"
  ...},
  {...}
}
```


TODO: Fill this in.


## Delete a Test

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 906
response = Rainforest::Test.delete(id)
# or
test = Rainforest::Test.retrieve(id)
test.delete
```


```python
import rainforest
rainforest.API_KEY = "your-api-key"

id = 20091
test = rainforest.Test.retrieve(id)
test.delete()
```


```javascript
var Rainforest = require('rainforestqa');
Rainforest.apiKey = "your-api-key"

var id = 18036;
Rainforest.Test.delete(id).then(function(test) {
  // Test was deleted
}).catch(function(e) {
  // Handle the error
});
```


```php
<?php
require_once('/path/to/rainforest-php/init.php');
\Rainforest\Rainforest::$apiKey = "your-api-key";

$id = 18315;

$test = \Rainforest\Test::retrieve($id);
$test->delete();
?>
```

> Example Response

```ruby
{}
```


```python
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



## List a Test's History

> Example Request

```ruby
require 'rainforest'
Rainforest.api_key = "your-api-key"

id = 13
test = Rainforest::Test.retrieve(id)
runs = test.history
# or
runs = Rainforest::Environment.new(id).history

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

var id = 17790;
Rainforest.Test.retrieve(id).then(function(test) {
  return test.history();
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

$id = 18315;

$test = \Rainforest\Test::retrieve( $id );
$runs = $test->history();

# The list is enumerable and works similarly to an array
foreach( $runs->data as $run ) {
  # work with an runs
}

$runs->data[0]; # The first run in the list
count( $runs->data ); # the number of runs returned
?>
```

> Example Response

```ruby
#<Rainforest::ApiList[Rainforest::Run]:0x3ff73d6a52ec> Data: [
  "#<Rainforest::Run:0x3ff73d678e90 id=4138>",
  "#<Rainforest::Run:0x3ff73d661bb4 id=4242>"
]


```



```javascript
{ data:
   [ { id: 319318,
       created_at: '2015-08-03T18:47:18Z',
       run_id: 31921,
       browsers:
        [ { id: 779162,
            created_at: '2015-08-03T18:47:18Z',
            name: 'chrome',
            result: 'passed',
            state: 'complete' } ] },
     {...},
     {...} ] }
```

```php
array(2) {
  [0]=>
  object(Rainforest\Run)#16 (23) {
    ["browsers"]=>
    array(1) {
      [0]=>
      array(5) {
        ["id"]=>
        int(779162)
        ["created_at"]=>
        string(20) "2015-08-03T18:47:18Z"
        ["name"]=>
        string(6) "chrome"
        ["result"]=>
        string(6) "passed"
        ["state"]=>
        string(8) "complete"
      }
    }
    ["created_at"]=>
    string(20) "2015-08-03T18:47:18Z"
    ["current_progress"]=>
    NULL
    ["description"]=>
    NULL
    ["environment"]=>
    NULL
    ["filters"]=>
    NULL
    ["frontend_url"]=>
    NULL
    ["id"]=>
    int(319318)
    ["log_url"]=>
    NULL
    ["real_cost_to_run"]=>
    NULL
    ["result"]=>
    NULL
    ["sample_test_titles"]=>
    NULL
    ["state"]=>
    NULL
    ["state_details"]=>
    NULL
    ["stats"]=>
    NULL
    ["timestamps"]=>
    NULL
    ["total_failed_tests"]=>
    NULL
    ["total_no_result_tests"]=>
    NULL
    ["total_passed_tests"]=>
    NULL
    ["total_tests"]=>
    NULL
    ...},
    {...}
  }
  ```

A test's history is a list of runs associated with that test.

TODO: Finish this.
