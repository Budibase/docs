# Action

Actions are how you integrate custom backend code into your Budibase application. Actions are used to run behaviours. Actions have the following properties:

* Name. Should be unique. It is how your action is identified and called. In Budibase-web, your action will be callable via a URL in the format `POST /api/actions/<action name>` 
* Behaviour Source. The name of the javascript module that the behaviour resides in
* Behaviour Name. The name of the behaviour to run
* Initial Options. A default argument for the behaviour. The caller of the action can supply a partially completed argument, which will be completed by these Initial Options

