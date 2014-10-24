object-merge-override
=====================

Merge object properties from multiple objects into one object. I used this to merge config objects. Example:

You can configure via: commandline args, config file, default config.

The default config provides default values for everything. The values can be overriden by config file or commandline args.
If a key is undefined in the commandline args (not set), object-merge-override checks in the config file and, as the last
option, falls back onto the default config. You can pass as much objects as you like. Keys that are undefined in higher
precedence objects are taken from lower precedence objects.

The tests might provide you with some better information on how object-merge-override works.

usage
=====
```
require merge_override('object-merge-override');

mergedObject = new merge_override({1: commandlineArgs, 2: configFile, 3: defaultConfig});
```



