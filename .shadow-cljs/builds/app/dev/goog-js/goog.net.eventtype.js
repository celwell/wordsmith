["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/eventtype.js"],"~:js","goog.provide(\"goog.net.EventType\");\n/** @enum {string} */ goog.net.EventType = {COMPLETE:\"complete\", SUCCESS:\"success\", ERROR:\"error\", ABORT:\"abort\", READY:\"ready\", READY_STATE_CHANGE:\"readystatechange\", TIMEOUT:\"timeout\", INCREMENTAL_DATA:\"incrementaldata\", PROGRESS:\"progress\", DOWNLOAD_PROGRESS:\"downloadprogress\", UPLOAD_PROGRESS:\"uploadprogress\"};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Common events for the network classes.\n */\n\n\ngoog.provide('goog.net.EventType');\n\n\n/**\n * Event names for network events\n * @enum {string}\n */\ngoog.net.EventType = {\n  COMPLETE: 'complete',\n  SUCCESS: 'success',\n  ERROR: 'error',\n  ABORT: 'abort',\n  READY: 'ready',\n  READY_STATE_CHANGE: 'readystatechange',\n  TIMEOUT: 'timeout',\n  INCREMENTAL_DATA: 'incrementaldata',\n  PROGRESS: 'progress',\n  // DOWNLOAD_PROGRESS and UPLOAD_PROGRESS are special events dispatched by\n  // goog.net.XhrIo to allow binding listeners specific to each type of\n  // progress.\n  DOWNLOAD_PROGRESS: 'downloadprogress',\n  UPLOAD_PROGRESS: 'uploadprogress'\n};\n","~:compiled-at",1606342193365,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.eventtype.js\",\n\"lineCount\":3,\n\"mappings\":\"AAmBAA,IAAAC,QAAA,CAAa,oBAAb,CAAA;AAOA,sBAAAD,IAAAE,IAAAC,UAAA,GAAqB,CACnBC,SAAU,UADS,EAEnBC,QAAS,SAFU,EAGnBC,MAAO,OAHY,EAInBC,MAAO,OAJY,EAKnBC,MAAO,OALY,EAMnBC,mBAAoB,kBAND,EAOnBC,QAAS,SAPU,EAQnBC,iBAAkB,iBARC,EASnBC,SAAU,UATS,EAanBC,kBAAmB,kBAbA,EAcnBC,gBAAiB,gBAdE,CAArB;;\",\n\"sources\":[\"goog/net/eventtype.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Common events for the network classes.\\n */\\n\\n\\ngoog.provide('goog.net.EventType');\\n\\n\\n/**\\n * Event names for network events\\n * @enum {string}\\n */\\ngoog.net.EventType = {\\n  COMPLETE: 'complete',\\n  SUCCESS: 'success',\\n  ERROR: 'error',\\n  ABORT: 'abort',\\n  READY: 'ready',\\n  READY_STATE_CHANGE: 'readystatechange',\\n  TIMEOUT: 'timeout',\\n  INCREMENTAL_DATA: 'incrementaldata',\\n  PROGRESS: 'progress',\\n  // DOWNLOAD_PROGRESS and UPLOAD_PROGRESS are special events dispatched by\\n  // goog.net.XhrIo to allow binding listeners specific to each type of\\n  // progress.\\n  DOWNLOAD_PROGRESS: 'downloadprogress',\\n  UPLOAD_PROGRESS: 'uploadprogress'\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"net\",\"EventType\",\"COMPLETE\",\"SUCCESS\",\"ERROR\",\"ABORT\",\"READY\",\"READY_STATE_CHANGE\",\"TIMEOUT\",\"INCREMENTAL_DATA\",\"PROGRESS\",\"DOWNLOAD_PROGRESS\",\"UPLOAD_PROGRESS\"]\n}\n"]