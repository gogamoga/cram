cram.js plugins
===============




Notes
-----
* plugin must create a simplified AMD [`define()`](https://github.com/amdjs/amdjs-api/wiki/AMD#examples-) that exports a value

* plugins must export `compile` function - if this is not present, then [plugin is a runtime plugin only!](https://github.com/cujojs/cram/blob/216e3109777f8baa5c269e8fae4dd34eda931bbe/lib/transform/amdFromPlugin.js#L13)

