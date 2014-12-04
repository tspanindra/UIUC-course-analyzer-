jsPlumb.ready(function() {

	var instance = jsPlumb.getInstance({
		// default drag options
		DragOptions : { cursor: 'pointer', zIndex:2000 },
		// the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
		// case it returns the 'labelText' member that we set on each connection in the 'init' method below.
		ConnectionOverlays : [
			//[ "Arrow", { location:1 } ]
		],
		Container:"flowchart-demo"
	});

	// this is the paint style for the connecting lines..
	var connectorPaintStyle = {
		lineWidth:4,
		strokeStyle:"#999",
		joinstyle:"round",
		outlineColor:"white",
		outlineWidth:2
	},
	// .. and this is the hover style. 
	connectorHoverStyle = {
		lineWidth:4,
		strokeStyle:"#999",
		outlineWidth:2,
		outlineColor:"white"
	},
	endpointHoverStyle = {
		fillStyle:"#216477",
		strokeStyle:"#216477"
	},
	// the definition of source endpoints (the small blue ones)
	sourceEndpoint = {
		endpoint:"Dot",
		paintStyle:{ 
			strokeStyle:"#000000",
			fillStyle:"transparent",
			radius:0.1,
			lineWidth:0.1 
		},				
		isSource:true,
		connector:[ "Flowchart", { stub:[0, 0], gap:0,cornerRadius:3, alwaysRespectStubs:true } ],								                
		connectorStyle:connectorPaintStyle,
		hoverPaintStyle:endpointHoverStyle,
		maxConnections:10,
		connectorHoverStyle:connectorHoverStyle,
        dragOptions:{}
	},		
	// the definition of target endpoints (will appear when the user drags a connection) 
	targetEndpoint = {
		endpoint:"Dot",					
		paintStyle:{ fillStyle:"#7AB02C",radius:0.1},
		hoverPaintStyle:endpointHoverStyle,
		maxConnections:10,
		dropOptions:{ hoverClass:"hover", activeClass:"active" },
		isTarget:true	
	},			
	init = function(connection) {			
		//connection.getOverlay("label").setLabel(connection.sourceId.substring(15) + "-" + connection.targetId.substring(15));
		connection.bind("editCompleted", function(o) {
			if (typeof console != "undefined")
				console.log("connection edited. path is now ", o.path);
		});
	};			

	var _addEndpoints = function(toId, sourceAnchors, targetAnchors) {
			for (var i = 0; i < sourceAnchors.length; i++) {
				var sourceUUID = toId + sourceAnchors[i];
				instance.addEndpoint(toId, sourceEndpoint, { anchor:sourceAnchors[i], uuid:sourceUUID });						
			}
			for (var j = 0; j < targetAnchors.length; j++) {
				var targetUUID = toId + targetAnchors[j];
				instance.addEndpoint(toId, targetEndpoint, { anchor:targetAnchors[j], uuid:targetUUID });						
			}
		};

	// suspend drawing and initialise.
	instance.doWhileSuspended(function() {
		_addEndpoints("CS100", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS103", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS357", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS125", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS498-PRO", ["BottomCenter","RightMiddle","LeftMiddle"], ["TopCenter","LeftMiddle"]);
		_addEndpoints("CS173", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS225", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS450", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS373", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS410", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS411", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS233", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS465", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS418", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS466", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS412", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS241", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS467", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS419", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS473", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS426", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS431", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS423", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS438", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS424", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS242", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS440", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS461", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS498-SCI", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS498-AMC", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS477", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS424", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS425", ["BottomCenter","LeftMiddle"], ["TopCenter","RightMiddle"]);
		_addEndpoints("CS429", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS427", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS446", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS460", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS428", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS498-OSP", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
					
		// listen for new connections; initialise them the same way we initialise the connections at startup.
		instance.bind("connection", function(connInfo, originalEvent) { 
			init(connInfo.connection);
		});			
					
		// make all the window divs draggable						
		//instance.draggable(jsPlumb.getSelector(".flowchart-demo .item"), { grid: [20, 20] });		
		// THIS DEMO ONLY USES getSelector FOR CONVENIENCE. Use your library's appropriate selector 
		// method, or document.querySelectorAll:
		//jsPlumb.draggable(document.querySelectorAll(".item"), { grid: [20, 20] });
        
		// connect a few up
		instance.connect({uuids:["CS100BottomCenter", "CS125TopCenter"], editable:true});
		instance.connect({uuids:["CS125BottomCenter", "CS173TopCenter"], editable:true});
		instance.connect({uuids:["CS173BottomCenter", "CS373TopCenter"], editable:true});
		instance.connect({uuids:["CS426BottomCenter", "CS477TopCenter"], editable:true});
		instance.connect({uuids:["CS431BottomCenter", "CS424TopCenter"], editable:true});
		instance.connect({uuids:["CS103BottomCenter", "CS225TopCenter"], editable:true});
		instance.connect({uuids:["CS225BottomCenter", "CS233TopCenter"], editable:true});
		instance.connect({uuids:["CS233BottomCenter", "CS241TopCenter"], editable:true});
		instance.connect({uuids:["CS241BottomCenter", "CS242TopCenter"], editable:true});
		instance.connect({uuids:["CS242BottomCenter", "CS427TopCenter"], editable:true});
		instance.connect({uuids:["CS427BottomCenter", "CS428TopCenter"], editable:true});
		instance.connect({uuids:["CS428BottomCenter", "CS498-OSPTopCenter"], editable:true});
		instance.connect({uuids:["CS410BottomCenter", "CS412TopCenter"], editable:true});
		instance.connect({uuids:["CS440BottomCenter", "CS446TopCenter"], editable:true});
		instance.connect({uuids:["CS461BottomCenter", "CS460TopCenter"], editable:true});
		instance.connect({uuids:["CS465BottomCenter", "CS467TopCenter"], editable:true});
		instance.connect({uuids:["CS467BottomCenter", "CS498-SCITopCenter"], editable:true});
		instance.connect({uuids:["CS418BottomCenter", "CS419TopCenter"], editable:true});
		instance.connect({uuids:["CS466BottomCenter", "CS473TopCenter"], editable:true});
		instance.connect({uuids:["CS473BottomCenter", "CS498-AMCTopCenter"], editable:true});
		instance.connect({uuids:["CS357BottomCenter", "CS498-PROTopCenter"], editable:true});
		instance.connect({uuids:["CS498-PROBottomCenter", "CS450TopCenter"], editable:true});
		instance.connect({uuids:["CS424BottomCenter", "CS425TopCenter"], editable:true});
		
		
		instance.connect({uuids:["CS125RightMiddle", "CS225TopCenter"], editable:true});
		instance.connect({uuids:["CS241RightMiddle", "CS440TopCenter"], editable:true});
		instance.connect({uuids:["CS241RightMiddle", "CS461TopCenter"], editable:true});
		instance.connect({uuids:["CS225RightMiddle", "CS465TopCenter"], editable:true});
		instance.connect({uuids:["CS225RightMiddle", "CS418TopCenter"], editable:true});
		instance.connect({uuids:["CS225RightMiddle", "CS466TopCenter"], editable:true});
		instance.connect({uuids:["CS242RightMiddle", "CS429TopCenter"], editable:true});
		
		//instance.connect({uuids:["CS103BottomCenter", "CS498-PROLeftMiddle"], editable:true});
		
		instance.connect({uuids:["CS241LeftMiddle", "CS423TopCenter"], editable:true});
		instance.connect({uuids:["CS241LeftMiddle", "CS438TopCenter"], editable:true});
		instance.connect({uuids:["CS225LeftMiddle", "CS410TopCenter"], editable:true});
		instance.connect({uuids:["CS225LeftMiddle", "CS411TopCenter"], editable:true});
		
		instance.connect({uuids:["CS438BottomCenter", "CS425RightMiddle"], editable:true});
		instance.connect({uuids:["CS411BottomCenter", "CS412LeftMiddle"], editable:true});
		
		//
        
		//
		// listen for clicks on connections, and offer to delete connections on click.
		//
		instance.bind("click", function(conn, originalEvent) {
			if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
				jsPlumb.detach(conn); 
		});	
		
		instance.bind("connectionDrag", function(connection) {
			console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
		});		
		
		instance.bind("connectionDragStop", function(connection) {
			console.log("connection " + connection.id + " was dragged");
		});

		instance.bind("connectionMoved", function(params) {
			console.log("connection " + params.connection.id + " was moved");
		});
	});

	jsPlumb.fire("jsPlumbDemoLoaded", instance);
	
});