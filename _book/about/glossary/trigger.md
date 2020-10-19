# Trigger

Triggers are used to automatically run actions, after certain application events. A full list of application events can be found in [https://github.com/Budibase/budibase-core/blob/master/src/common/events.js](https://github.com/Budibase/budibase-core/blob/master/src/common/events.js)

Triggers have the following properties:

* Action Name. The action to run
* Event Name. The event that will trigger the action
* Condition. A javascript expression, used to determine whether the action should be run or not
* Options Creator. A javascript expression used to create the behaviour "options" i.e. the argument to the behaviour

