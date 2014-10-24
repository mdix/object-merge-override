object-merge-override
=====================
Merge object properties from multiple objects into one object. I used this to merge config objects. 

Example:
========
You can configure via: commandline args, config file, default config.

The default config provides default values for everything. The values can be overriden by config file or commandline args.
If a key is undefined in the commandline args (not set), object-merge-override checks in the config file and, as the last
option, falls back onto the default config. You can pass as much objects as you like. Keys that are undefined in higher
precedence objects are taken from lower precedence objects.

The tests might provide you with some better information on how object-merge-override works.

usage
=====
Install via: `npm install --save object-merge-override`

Then use it in your script:
```
require merge_override('object-merge-override');

mergedObject = new merge_override({1: commandlineArgs, 2: configFile, 3: defaultConfig});
```
The object keys (numbers) mark the precedence. If a key is defined in the object of '1' (called commandlineArgs in this example), all following values are ignored (from the objects 2 and 3). If the key is undefined, merge_override checks object '2' (configFile) and so on...  



