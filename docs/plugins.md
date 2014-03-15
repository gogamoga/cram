authoring cram.js plugins
=========================




Notes
-----
* plugin must create a simplified AMD [`define()`](https://github.com/amdjs/amdjs-api/wiki/AMD#examples-) that exports a value

* plugins must export `compile` function - if this is not present, then [plugin is a runtime plugin only!](https://github.com/cujojs/cram/blob/216e3109777f8baa5c269e8fae4dd34eda931bbe/lib/transform/amdFromPlugin.js#L13)
* example plugins for [curl](https://github.com/cujojs/curl/tree/master/src/curl/cram) and [wire](https://github.com/cujojs/wire/blob/master/builder/cram.js)

