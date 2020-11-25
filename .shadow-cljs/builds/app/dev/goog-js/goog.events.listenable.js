["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/listenable.js"],"~:js","goog.provide(\"goog.events.Listenable\");\ngoog.provide(\"goog.events.ListenableKey\");\n/**\n * @suppress {extraRequire}\n */\ngoog.require(\"goog.events.EventId\");\ngoog.forwardDeclare(\"goog.events.EventLike\");\ngoog.forwardDeclare(\"goog.events.EventTarget\");\n/** @interface */ goog.events.Listenable = function() {\n};\n/** @const @type {string} */ goog.events.Listenable.IMPLEMENTED_BY_PROP = \"closure_listenable_\" + (Math.random() * 1e6 | 0);\n/**\n * @param {function(new:goog.events.Listenable,...)} cls\n */\ngoog.events.Listenable.addImplementation = function(cls) {\n  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;\n};\n/**\n * @param {Object} obj\n * @return {boolean}\n */\ngoog.events.Listenable.isImplementedBy = function(obj) {\n  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);\n};\n/**\n * @param {(string|!goog.events.EventId<EVENTOBJ>)} type\n * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener\n * @param {boolean=} opt_useCapture\n * @param {SCOPE=} opt_listenerScope\n * @return {!goog.events.ListenableKey}\n * @template SCOPE, EVENTOBJ\n */\ngoog.events.Listenable.prototype.listen;\n/**\n * @param {(string|!goog.events.EventId<EVENTOBJ>)} type\n * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener\n * @param {boolean=} opt_useCapture\n * @param {SCOPE=} opt_listenerScope\n * @return {!goog.events.ListenableKey}\n * @template SCOPE, EVENTOBJ\n */\ngoog.events.Listenable.prototype.listenOnce;\n/**\n * @param {(string|!goog.events.EventId<EVENTOBJ>)} type\n * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener\n * @param {boolean=} opt_useCapture\n * @param {SCOPE=} opt_listenerScope\n * @return {boolean}\n * @template SCOPE, EVENTOBJ\n */\ngoog.events.Listenable.prototype.unlisten;\n/**\n * @param {!goog.events.ListenableKey} key\n * @return {boolean}\n */\ngoog.events.Listenable.prototype.unlistenByKey;\n/**\n * @param {goog.events.EventLike} e\n * @return {boolean}\n */\ngoog.events.Listenable.prototype.dispatchEvent;\n/**\n * @param {string=} opt_type\n * @return {number}\n */\ngoog.events.Listenable.prototype.removeAllListeners;\n/**\n * @return {goog.events.Listenable}\n */\ngoog.events.Listenable.prototype.getParentEventTarget;\n/**\n * @param {(string|!goog.events.EventId<EVENTOBJ>)} type\n * @param {boolean} capture\n * @param {EVENTOBJ} eventObject\n * @return {boolean}\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.fireListeners;\n/**\n * @param {(string|!goog.events.EventId)} type\n * @param {boolean} capture\n * @return {!Array<!goog.events.ListenableKey>}\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.getListeners;\n/**\n * @param {(string|!goog.events.EventId<EVENTOBJ>)} type\n * @param {function(this:SCOPE,EVENTOBJ):(boolean|undefined)} listener\n * @param {boolean} capture\n * @param {SCOPE=} opt_listenerScope\n * @return {goog.events.ListenableKey}\n * @template SCOPE, EVENTOBJ\n */\ngoog.events.Listenable.prototype.getListener;\n/**\n * @param {(string|!goog.events.EventId<EVENTOBJ>)=} opt_type\n * @param {boolean=} opt_capture\n * @return {boolean}\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.hasListener;\n/** @interface */ goog.events.ListenableKey = function() {\n};\n/** @private @type {number} */ goog.events.ListenableKey.counter_ = 0;\n/**\n * @return {number}\n */\ngoog.events.ListenableKey.reserveKey = function() {\n  return ++goog.events.ListenableKey.counter_;\n};\n/** @type {(Object|goog.events.Listenable|goog.events.EventTarget)} */ goog.events.ListenableKey.prototype.src;\n/** @type {string} */ goog.events.ListenableKey.prototype.type;\n/** @type {(function(?):?|{handleEvent:function(?):?}|null)} */ goog.events.ListenableKey.prototype.listener;\n/** @type {boolean} */ goog.events.ListenableKey.prototype.capture;\n/** @type {(Object|undefined)} */ goog.events.ListenableKey.prototype.handler;\n/** @type {number} */ goog.events.ListenableKey.prototype.key;\n","~:source","// Copyright 2012 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview An interface for a listenable JavaScript object.\n * @author chrishenry@google.com (Chris Henry)\n */\n\ngoog.provide('goog.events.Listenable');\ngoog.provide('goog.events.ListenableKey');\n\n/** @suppress {extraRequire} */\ngoog.require('goog.events.EventId');\n\ngoog.forwardDeclare('goog.events.EventLike');\ngoog.forwardDeclare('goog.events.EventTarget');\n\n\n\n/**\n * A listenable interface. A listenable is an object with the ability\n * to dispatch/broadcast events to \"event listeners\" registered via\n * listen/listenOnce.\n *\n * The interface allows for an event propagation mechanism similar\n * to one offered by native browser event targets, such as\n * capture/bubble mechanism, stopping propagation, and preventing\n * default actions. Capture/bubble mechanism depends on the ancestor\n * tree constructed via `#getParentEventTarget`; this tree\n * must be directed acyclic graph. The meaning of default action(s)\n * in preventDefault is specific to a particular use case.\n *\n * Implementations that do not support capture/bubble or can not have\n * a parent listenable can simply not implement any ability to set the\n * parent listenable (and have `#getParentEventTarget` return\n * null).\n *\n * Implementation of this class can be used with or independently from\n * goog.events.\n *\n * Implementation must call `#addImplementation(implClass)`.\n *\n * @interface\n * @see goog.events\n * @see http://www.w3.org/TR/DOM-Level-2-Events/events.html\n */\ngoog.events.Listenable = function() {};\n\n\n/**\n * An expando property to indicate that an object implements\n * goog.events.Listenable.\n *\n * See addImplementation/isImplementedBy.\n *\n * @type {string}\n * @const\n */\ngoog.events.Listenable.IMPLEMENTED_BY_PROP =\n    'closure_listenable_' + ((Math.random() * 1e6) | 0);\n\n\n/**\n * Marks a given class (constructor) as an implementation of\n * Listenable, so that we can query that fact at runtime. The class\n * must have already implemented the interface.\n * @param {function(new:goog.events.Listenable,...)} cls The class constructor.\n *     The corresponding class must have already implemented the interface.\n */\ngoog.events.Listenable.addImplementation = function(cls) {\n  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;\n};\n\n\n/**\n * @param {Object} obj The object to check.\n * @return {boolean} Whether a given instance implements Listenable. The\n *     class/superclass of the instance must call addImplementation.\n */\ngoog.events.Listenable.isImplementedBy = function(obj) {\n  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);\n};\n\n\n/**\n * Adds an event listener. A listener can only be added once to an\n * object and if it is added again the key for the listener is\n * returned. Note that if the existing listener is a one-off listener\n * (registered via listenOnce), it will no longer be a one-off\n * listener after a call to listen().\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\n *     method.\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\n *     (defaults to false).\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {!goog.events.ListenableKey} Unique key for the listener.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.listen;\n\n\n/**\n * Adds an event listener that is removed automatically after the\n * listener fired once.\n *\n * If an existing listener already exists, listenOnce will do\n * nothing. In particular, if the listener was previously registered\n * via listen(), listenOnce() will not turn the listener into a\n * one-off listener. Similarly, if there is already an existing\n * one-off listener, listenOnce does not modify the listeners (it is\n * still a once listener).\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\n *     method.\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\n *     (defaults to false).\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {!goog.events.ListenableKey} Unique key for the listener.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.listenOnce;\n\n\n/**\n * Removes an event listener which was added with listen() or listenOnce().\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\n *     method.\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\n *     (defaults to false).\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call\n *     the listener.\n * @return {boolean} Whether any listener was removed.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.unlisten;\n\n\n/**\n * Removes an event listener which was added with listen() by the key\n * returned by listen().\n *\n * @param {!goog.events.ListenableKey} key The key returned by\n *     listen() or listenOnce().\n * @return {boolean} Whether any listener was removed.\n */\ngoog.events.Listenable.prototype.unlistenByKey;\n\n\n/**\n * Dispatches an event (or event like object) and calls all listeners\n * listening for events of this type. The type of the event is decided by the\n * type property on the event object.\n *\n * If any of the listeners returns false OR calls preventDefault then this\n * function will return false.  If one of the capture listeners calls\n * stopPropagation, then the bubble listeners won't fire.\n *\n * @param {goog.events.EventLike} e Event object.\n * @return {boolean} If anyone called preventDefault on the event object (or\n *     if any of the listeners returns false) this will also return false.\n */\ngoog.events.Listenable.prototype.dispatchEvent;\n\n\n/**\n * Removes all listeners from this listenable. If type is specified,\n * it will only remove listeners of the particular type. otherwise all\n * registered listeners will be removed.\n *\n * @param {string=} opt_type Type of event to remove, default is to\n *     remove all types.\n * @return {number} Number of listeners removed.\n */\ngoog.events.Listenable.prototype.removeAllListeners;\n\n\n/**\n * Returns the parent of this event target to use for capture/bubble\n * mechanism.\n *\n * NOTE(chrishenry): The name reflects the original implementation of\n * custom event target (`goog.events.EventTarget`). We decided\n * that changing the name is not worth it.\n *\n * @return {goog.events.Listenable} The parent EventTarget or null if\n *     there is no parent.\n */\ngoog.events.Listenable.prototype.getParentEventTarget;\n\n\n/**\n * Fires all registered listeners in this listenable for the given\n * type and capture mode, passing them the given eventObject. This\n * does not perform actual capture/bubble. Only implementors of the\n * interface should be using this.\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The type of the\n *     listeners to fire.\n * @param {boolean} capture The capture mode of the listeners to fire.\n * @param {EVENTOBJ} eventObject The event object to fire.\n * @return {boolean} Whether all listeners succeeded without\n *     attempting to prevent default behavior. If any listener returns\n *     false or called goog.events.Event#preventDefault, this returns\n *     false.\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.fireListeners;\n\n\n/**\n * Gets all listeners in this listenable for the given type and\n * capture mode.\n *\n * @param {string|!goog.events.EventId} type The type of the listeners to fire.\n * @param {boolean} capture The capture mode of the listeners to fire.\n * @return {!Array<!goog.events.ListenableKey>} An array of registered\n *     listeners.\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.getListeners;\n\n\n/**\n * Gets the goog.events.ListenableKey for the event or null if no such\n * listener is in use.\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The name of the event\n *     without the 'on' prefix.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener The\n *     listener function to get.\n * @param {boolean} capture Whether the listener is a capturing listener.\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {goog.events.ListenableKey} the found listener or null if not found.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.getListener;\n\n\n/**\n * Whether there is any active listeners matching the specified\n * signature. If either the type or capture parameters are\n * unspecified, the function will match on the remaining criteria.\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>=} opt_type Event type.\n * @param {boolean=} opt_capture Whether to check for capture or bubble\n *     listeners.\n * @return {boolean} Whether there is any active listeners matching\n *     the requested type and/or capture phase.\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.hasListener;\n\n\n\n/**\n * An interface that describes a single registered listener.\n * @interface\n */\ngoog.events.ListenableKey = function() {};\n\n\n/**\n * Counter used to create a unique key\n * @type {number}\n * @private\n */\ngoog.events.ListenableKey.counter_ = 0;\n\n\n/**\n * Reserves a key to be used for ListenableKey#key field.\n * @return {number} A number to be used to fill ListenableKey#key\n *     field.\n */\ngoog.events.ListenableKey.reserveKey = function() {\n  return ++goog.events.ListenableKey.counter_;\n};\n\n\n/**\n * The source event target.\n * @type {Object|goog.events.Listenable|goog.events.EventTarget}\n */\ngoog.events.ListenableKey.prototype.src;\n\n\n/**\n * The event type the listener is listening to.\n * @type {string}\n */\ngoog.events.ListenableKey.prototype.type;\n\n\n/**\n * The listener function.\n * @type {function(?):?|{handleEvent:function(?):?}|null}\n */\ngoog.events.ListenableKey.prototype.listener;\n\n\n/**\n * Whether the listener works on capture phase.\n * @type {boolean}\n */\ngoog.events.ListenableKey.prototype.capture;\n\n\n/**\n * The 'this' object for the listener function's scope.\n * @type {Object|undefined}\n */\ngoog.events.ListenableKey.prototype.handler;\n\n\n/**\n * A globally unique number to identify the key.\n * @type {number}\n */\ngoog.events.ListenableKey.prototype.key;\n","~:compiled-at",1606342193346,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.listenable.js\",\n\"lineCount\":117,\n\"mappings\":\"AAmBAA,IAAAC,QAAA,CAAa,wBAAb,CAAA;AACAD,IAAAC,QAAA,CAAa,2BAAb,CAAA;AAGA;;;AAAAD,IAAAE,QAAA,CAAa,qBAAb,CAAA;AAEAF,IAAAG,eAAA,CAAoB,uBAApB,CAAA;AACAH,IAAAG,eAAA,CAAoB,yBAApB,CAAA;AA+BA,kBAAAH,IAAAI,OAAAC,WAAA,GAAyBC,QAAQ,EAAG;CAApC;AAYA,6BAAAN,IAAAI,OAAAC,WAAAE,oBAAA,GACI,qBADJ,IAC8BC,IAAAC,OAAA,EAD9B,GAC8C,GAD9C,GACqD,CADrD;AAWA;;;AAAAT,IAAAI,OAAAC,WAAAK,kBAAA,GAA2CC,QAAQ,CAACC,GAAD,CAAM;AACvDA,KAAAC,UAAA,CAAcb,IAAAI,OAAAC,WAAAE,oBAAd,CAAA,GAA4D,IAA5D;AADuD,CAAzD;AAUA;;;;AAAAP,IAAAI,OAAAC,WAAAS,gBAAA,GAAyCC,QAAQ,CAACC,GAAD,CAAM;AACrD,SAAO,CAAC,EAAEA,GAAF,IAASA,GAAA,CAAIhB,IAAAI,OAAAC,WAAAE,oBAAJ,CAAT,CAAR;AADqD,CAAvD;AAsBA;;;;;;;;AAAAP,IAAAI,OAAAC,WAAAQ,UAAAI,OAAA;AAwBA;;;;;;;;AAAAjB,IAAAI,OAAAC,WAAAQ,UAAAK,WAAA;AAgBA;;;;;;;;AAAAlB,IAAAI,OAAAC,WAAAQ,UAAAM,SAAA;AAWA;;;;AAAAnB,IAAAI,OAAAC,WAAAQ,UAAAO,cAAA;AAgBA;;;;AAAApB,IAAAI,OAAAC,WAAAQ,UAAAQ,cAAA;AAYA;;;;AAAArB,IAAAI,OAAAC,WAAAQ,UAAAS,mBAAA;AAcA;;;AAAAtB,IAAAI,OAAAC,WAAAQ,UAAAU,qBAAA;AAmBA;;;;;;;AAAAvB,IAAAI,OAAAC,WAAAQ,UAAAW,cAAA;AAaA;;;;;;AAAAxB,IAAAI,OAAAC,WAAAQ,UAAAY,aAAA;AAiBA;;;;;;;;AAAAzB,IAAAI,OAAAC,WAAAQ,UAAAa,YAAA;AAeA;;;;;;AAAA1B,IAAAI,OAAAC,WAAAQ,UAAAc,YAAA;AAQA,kBAAA3B,IAAAI,OAAAwB,cAAA,GAA4BC,QAAQ,EAAG;CAAvC;AAQA,+BAAA7B,IAAAI,OAAAwB,cAAAE,SAAA,GAAqC,CAArC;AAQA;;;AAAA9B,IAAAI,OAAAwB,cAAAG,WAAA,GAAuCC,QAAQ,EAAG;AAChD,SAAO,EAAEhC,IAAAI,OAAAwB,cAAAE,SAAT;AADgD,CAAlD;AASA,uEAAA9B,IAAAI,OAAAwB,cAAAf,UAAAoB,IAAA;AAOA,sBAAAjC,IAAAI,OAAAwB,cAAAf,UAAAqB,KAAA;AAOA,gEAAAlC,IAAAI,OAAAwB,cAAAf,UAAAsB,SAAA;AAOA,uBAAAnC,IAAAI,OAAAwB,cAAAf,UAAAuB,QAAA;AAOA,kCAAApC,IAAAI,OAAAwB,cAAAf,UAAAwB,QAAA;AAOA,sBAAArC,IAAAI,OAAAwB,cAAAf,UAAAyB,IAAA;;\",\n\"sources\":[\"goog/events/listenable.js\"],\n\"sourcesContent\":[\"// Copyright 2012 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview An interface for a listenable JavaScript object.\\n * @author chrishenry@google.com (Chris Henry)\\n */\\n\\ngoog.provide('goog.events.Listenable');\\ngoog.provide('goog.events.ListenableKey');\\n\\n/** @suppress {extraRequire} */\\ngoog.require('goog.events.EventId');\\n\\ngoog.forwardDeclare('goog.events.EventLike');\\ngoog.forwardDeclare('goog.events.EventTarget');\\n\\n\\n\\n/**\\n * A listenable interface. A listenable is an object with the ability\\n * to dispatch/broadcast events to \\\"event listeners\\\" registered via\\n * listen/listenOnce.\\n *\\n * The interface allows for an event propagation mechanism similar\\n * to one offered by native browser event targets, such as\\n * capture/bubble mechanism, stopping propagation, and preventing\\n * default actions. Capture/bubble mechanism depends on the ancestor\\n * tree constructed via `#getParentEventTarget`; this tree\\n * must be directed acyclic graph. The meaning of default action(s)\\n * in preventDefault is specific to a particular use case.\\n *\\n * Implementations that do not support capture/bubble or can not have\\n * a parent listenable can simply not implement any ability to set the\\n * parent listenable (and have `#getParentEventTarget` return\\n * null).\\n *\\n * Implementation of this class can be used with or independently from\\n * goog.events.\\n *\\n * Implementation must call `#addImplementation(implClass)`.\\n *\\n * @interface\\n * @see goog.events\\n * @see http://www.w3.org/TR/DOM-Level-2-Events/events.html\\n */\\ngoog.events.Listenable = function() {};\\n\\n\\n/**\\n * An expando property to indicate that an object implements\\n * goog.events.Listenable.\\n *\\n * See addImplementation/isImplementedBy.\\n *\\n * @type {string}\\n * @const\\n */\\ngoog.events.Listenable.IMPLEMENTED_BY_PROP =\\n    'closure_listenable_' + ((Math.random() * 1e6) | 0);\\n\\n\\n/**\\n * Marks a given class (constructor) as an implementation of\\n * Listenable, so that we can query that fact at runtime. The class\\n * must have already implemented the interface.\\n * @param {function(new:goog.events.Listenable,...)} cls The class constructor.\\n *     The corresponding class must have already implemented the interface.\\n */\\ngoog.events.Listenable.addImplementation = function(cls) {\\n  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;\\n};\\n\\n\\n/**\\n * @param {Object} obj The object to check.\\n * @return {boolean} Whether a given instance implements Listenable. The\\n *     class/superclass of the instance must call addImplementation.\\n */\\ngoog.events.Listenable.isImplementedBy = function(obj) {\\n  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);\\n};\\n\\n\\n/**\\n * Adds an event listener. A listener can only be added once to an\\n * object and if it is added again the key for the listener is\\n * returned. Note that if the existing listener is a one-off listener\\n * (registered via listenOnce), it will no longer be a one-off\\n * listener after a call to listen().\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\\n *     method.\\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\\n *     (defaults to false).\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {!goog.events.ListenableKey} Unique key for the listener.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.listen;\\n\\n\\n/**\\n * Adds an event listener that is removed automatically after the\\n * listener fired once.\\n *\\n * If an existing listener already exists, listenOnce will do\\n * nothing. In particular, if the listener was previously registered\\n * via listen(), listenOnce() will not turn the listener into a\\n * one-off listener. Similarly, if there is already an existing\\n * one-off listener, listenOnce does not modify the listeners (it is\\n * still a once listener).\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\\n *     method.\\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\\n *     (defaults to false).\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {!goog.events.ListenableKey} Unique key for the listener.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.listenOnce;\\n\\n\\n/**\\n * Removes an event listener which was added with listen() or listenOnce().\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\\n *     method.\\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\\n *     (defaults to false).\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call\\n *     the listener.\\n * @return {boolean} Whether any listener was removed.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.unlisten;\\n\\n\\n/**\\n * Removes an event listener which was added with listen() by the key\\n * returned by listen().\\n *\\n * @param {!goog.events.ListenableKey} key The key returned by\\n *     listen() or listenOnce().\\n * @return {boolean} Whether any listener was removed.\\n */\\ngoog.events.Listenable.prototype.unlistenByKey;\\n\\n\\n/**\\n * Dispatches an event (or event like object) and calls all listeners\\n * listening for events of this type. The type of the event is decided by the\\n * type property on the event object.\\n *\\n * If any of the listeners returns false OR calls preventDefault then this\\n * function will return false.  If one of the capture listeners calls\\n * stopPropagation, then the bubble listeners won't fire.\\n *\\n * @param {goog.events.EventLike} e Event object.\\n * @return {boolean} If anyone called preventDefault on the event object (or\\n *     if any of the listeners returns false) this will also return false.\\n */\\ngoog.events.Listenable.prototype.dispatchEvent;\\n\\n\\n/**\\n * Removes all listeners from this listenable. If type is specified,\\n * it will only remove listeners of the particular type. otherwise all\\n * registered listeners will be removed.\\n *\\n * @param {string=} opt_type Type of event to remove, default is to\\n *     remove all types.\\n * @return {number} Number of listeners removed.\\n */\\ngoog.events.Listenable.prototype.removeAllListeners;\\n\\n\\n/**\\n * Returns the parent of this event target to use for capture/bubble\\n * mechanism.\\n *\\n * NOTE(chrishenry): The name reflects the original implementation of\\n * custom event target (`goog.events.EventTarget`). We decided\\n * that changing the name is not worth it.\\n *\\n * @return {goog.events.Listenable} The parent EventTarget or null if\\n *     there is no parent.\\n */\\ngoog.events.Listenable.prototype.getParentEventTarget;\\n\\n\\n/**\\n * Fires all registered listeners in this listenable for the given\\n * type and capture mode, passing them the given eventObject. This\\n * does not perform actual capture/bubble. Only implementors of the\\n * interface should be using this.\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The type of the\\n *     listeners to fire.\\n * @param {boolean} capture The capture mode of the listeners to fire.\\n * @param {EVENTOBJ} eventObject The event object to fire.\\n * @return {boolean} Whether all listeners succeeded without\\n *     attempting to prevent default behavior. If any listener returns\\n *     false or called goog.events.Event#preventDefault, this returns\\n *     false.\\n * @template EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.fireListeners;\\n\\n\\n/**\\n * Gets all listeners in this listenable for the given type and\\n * capture mode.\\n *\\n * @param {string|!goog.events.EventId} type The type of the listeners to fire.\\n * @param {boolean} capture The capture mode of the listeners to fire.\\n * @return {!Array<!goog.events.ListenableKey>} An array of registered\\n *     listeners.\\n * @template EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.getListeners;\\n\\n\\n/**\\n * Gets the goog.events.ListenableKey for the event or null if no such\\n * listener is in use.\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The name of the event\\n *     without the 'on' prefix.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener The\\n *     listener function to get.\\n * @param {boolean} capture Whether the listener is a capturing listener.\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {goog.events.ListenableKey} the found listener or null if not found.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.getListener;\\n\\n\\n/**\\n * Whether there is any active listeners matching the specified\\n * signature. If either the type or capture parameters are\\n * unspecified, the function will match on the remaining criteria.\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>=} opt_type Event type.\\n * @param {boolean=} opt_capture Whether to check for capture or bubble\\n *     listeners.\\n * @return {boolean} Whether there is any active listeners matching\\n *     the requested type and/or capture phase.\\n * @template EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.hasListener;\\n\\n\\n\\n/**\\n * An interface that describes a single registered listener.\\n * @interface\\n */\\ngoog.events.ListenableKey = function() {};\\n\\n\\n/**\\n * Counter used to create a unique key\\n * @type {number}\\n * @private\\n */\\ngoog.events.ListenableKey.counter_ = 0;\\n\\n\\n/**\\n * Reserves a key to be used for ListenableKey#key field.\\n * @return {number} A number to be used to fill ListenableKey#key\\n *     field.\\n */\\ngoog.events.ListenableKey.reserveKey = function() {\\n  return ++goog.events.ListenableKey.counter_;\\n};\\n\\n\\n/**\\n * The source event target.\\n * @type {Object|goog.events.Listenable|goog.events.EventTarget}\\n */\\ngoog.events.ListenableKey.prototype.src;\\n\\n\\n/**\\n * The event type the listener is listening to.\\n * @type {string}\\n */\\ngoog.events.ListenableKey.prototype.type;\\n\\n\\n/**\\n * The listener function.\\n * @type {function(?):?|{handleEvent:function(?):?}|null}\\n */\\ngoog.events.ListenableKey.prototype.listener;\\n\\n\\n/**\\n * Whether the listener works on capture phase.\\n * @type {boolean}\\n */\\ngoog.events.ListenableKey.prototype.capture;\\n\\n\\n/**\\n * The 'this' object for the listener function's scope.\\n * @type {Object|undefined}\\n */\\ngoog.events.ListenableKey.prototype.handler;\\n\\n\\n/**\\n * A globally unique number to identify the key.\\n * @type {number}\\n */\\ngoog.events.ListenableKey.prototype.key;\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"forwardDeclare\",\"events\",\"Listenable\",\"goog.events.Listenable\",\"IMPLEMENTED_BY_PROP\",\"Math\",\"random\",\"addImplementation\",\"goog.events.Listenable.addImplementation\",\"cls\",\"prototype\",\"isImplementedBy\",\"goog.events.Listenable.isImplementedBy\",\"obj\",\"listen\",\"listenOnce\",\"unlisten\",\"unlistenByKey\",\"dispatchEvent\",\"removeAllListeners\",\"getParentEventTarget\",\"fireListeners\",\"getListeners\",\"getListener\",\"hasListener\",\"ListenableKey\",\"goog.events.ListenableKey\",\"counter_\",\"reserveKey\",\"goog.events.ListenableKey.reserveKey\",\"src\",\"type\",\"listener\",\"capture\",\"handler\",\"key\"]\n}\n"]