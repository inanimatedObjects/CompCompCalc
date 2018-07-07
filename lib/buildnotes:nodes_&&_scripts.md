state change fundamentals:
  operativeFunction(currentStateRootDOMObject) => newCurrentStateRootDOMObject

  var operativeFunction = (rootNode) => {
    var manualPropertyUpserts = userEntry
    var programmaticPropertyUpserts = runFunctions

    var changeState = (manualPropertyUpserts, programmaticPropertyUpserts ) => {


    }
  }



# RUN SCRIPT > CLIENT BROWSER
  ## client > server : HTTP GET request
    |=> GET(request, callback);
    | <!-- request expected to return -->
    | /~ 200   <!--//  expected status code return -->
    | /~ HTMLDocument   <!--// root DOM Node returned in request.body -->


#LOAD RESPONSE.BODY DATA INTO CLIENT BROWSER
  ##  client-only : load global variables && run scripts
  <!-- declare and assign variables -->
    |~ let rootNode = DOMObject
    |
    |~ let stateDiffs = [elementSelectors, eventListeners, changeFunctions]
    |
    |~ const watch = (state, stateDiffs) => stateDiffs ? return changeState(this) : return; }
    |
    |~ const changeState = (state, selectors, data) => {
    |   <!-- starting node list & node properties -->
    |     let startState = state;
    |   <!--// declare variables/run scripts/change properties -->
    |     const func = (nodeId, newArgs) => { return endState; }
    |   <!-- updated node list & node properties -->
    |     state = endState;
    |  <!--  return new state  -->
    |   return state;
    |  }

  <!-- render html  -->
    |=> window.getElementByID(request.body).innerHTML


# RUN SCRIPTS > CLIENT BROWSER
  ## client-only : user interacts with DOM
    |=> if (watch(stateDiffs)) => { changeState(args).innerHTML; }

  ## client>server : HTTP request
    |=> GET(request, callback);
    |=> POST(request, callback);






|~   STATE | OBJECT | NOUN       //=> DOM state at the URL address
|=>  NEW STATE | OBJECT | NOUN    //=> DOM model-> document = [noun, noun-props, noun-verbs]
  <!-- load page -->
  |~   STATE | OBJECT | NOUN        //~   state[0] = html = {[ <head props=header>, <body props=<body/>]}
  |=>  NEW STATE | OBJECT | NOUN    //~   let state = state[start]
                                    //~   const script = (state, selector, selectorFunction) => {
                                            currentState = state
                                            enter = request.body.data
                                            update = selectorFunction(selector)
                                            exit = remove(!body.div.data)
                                          }
                                    //=>  state = state[end] = script(state[start])
                                    //~   return state

    |~   STATE | OBJECT | NOUN                //=>
    |=>  NEW STATE | OBJECT | NOUN            //=>
      |~   STATE | OBJECT | NOUN              //=> noun-props [noun='<header/>', non  =/>, <body/>]
      |=>  NEW STATE | OBJECT | NOUN          //=>
        |~   STATE | OBJECT | NOUN            //=>
        |=>  NEW STATE | OBJECT | NOUN        //=>
          |~   STATE | OBJECT | NOUN          //=>
          |=>  NEW STATE | OBJECT | NOUN      //=>
            |~   STATE | OBJECT | NOUN        //=>
            |=>  NEW STATE | OBJECT | NOUN    //=>
              |~   STATE | OBJECT | NOUN      //=>
              |=>  NEW STATE | OBJECT | NOUN  //=>






  |=> function ChangeState (presentState){    <!--|=>   -->
        <!-- prexisting nouns -->
        var this.state = presentState

        <!-- new nouns -->
        var diffStateObj = [new nouns] = [ obj[0], obj[1], ...., obj[n][nounKey:<noun adjective=props>[n]  ];

        <!-- operative function -->
        var changeState = ([ <noun>,<noun adjective=props>, {verb(<noun>)} ])
