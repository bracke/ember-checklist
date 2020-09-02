# Ember-checklist

A checklist component for N:M relationships in Ember.

## Sample Usage
```
{{ember-checklist collection=model.jobs selected=model.employee.jobs property="displayName"}}
```
## Properties

* collection: (Required) The list of possible objects
* selected: (Required) The objects you want shown/updated
* columns: (Optional, Default: 1) Allows the list to be split into columns
* property: (Optional) Specifies the property name to display

# Dummy Site

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `cd tests/dummy/app`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
