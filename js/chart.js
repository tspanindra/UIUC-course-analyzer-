/* For Official Flowchart Only */
jsPlumb.ready(function() {

	var instanc = jsPlumb.getInstance({
		// default drag options
		DragOptions : { cursor: 'pointer', zIndex:2000 },
		// the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
		// case it returns the 'labelText' member that we set on each connection in the 'init' method below.
		ConnectionOverlays : [
			[ "Arrow", { location:1, width:10, length:10 } ]
		],
		Container:"flowchart-demo"
	});

	// this is the paint style for the connecting lines..
	var connectorPaintStyle = {
		lineWidth:3.5,
		strokeStyle:"#EE0",
		joinstyle:"round",
		outlineColor:"white",
		outlineWidth:-1
	},
	// .. and this is the hover style. 
	connectorHoverStyle = {
		lineWidth:3.5,
		strokeStyle:"#FF0",
		outlineWidth:1,
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
				instanc.addEndpoint(toId, sourceEndpoint, { anchor:sourceAnchors[i], uuid:sourceUUID });						
			}
			for (var j = 0; j < targetAnchors.length; j++) {
				var targetUUID = toId + targetAnchors[j];
				instanc.addEndpoint(toId, targetEndpoint, { anchor:targetAnchors[j], uuid:targetUUID });						
			}
		};

	// suspend drawing and initialise.
	instanc.doWhileSuspended(function() {
		_addEndpoints("CS125", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS173", ["BottomCenter","LeftMiddle","TopRight"], ["TopCenter", "RightMiddle"]);
		_addEndpoints("CS225", ["BottomCenter","LeftMiddle", "RightMiddle","BottomLeft","BottomRight"], ["TopCenter","TopLeft"]);
		_addEndpoints("CS233", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS241", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS242", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS357", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS373", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter","TopRight"]);
		_addEndpoints("CS473", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS421", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS210", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);

										
        
		// connect a few up

		instanc.connect({uuids:["CS125BottomCenter", "CS173TopCenter"] });
		instanc.connect({uuids:["CS173TopRight", "CS225TopLeft"] });
		instanc.connect({uuids:["CS225BottomCenter", "CS233TopCenter"] });
		instanc.connect({uuids:["CS233BottomCenter", "CS241TopCenter"] });
		instanc.connect({uuids:["CS241BottomCenter", "CS242TopCenter"] });
		instanc.connect({uuids:["CS225BottomLeft", "CS373TopRight"] });
		instanc.connect({uuids:["CS373BottomCenter", "CS421TopCenter"] });
		instanc.connect({uuids:["CS373BottomCenter", "CS473LeftMiddle"] });
		instanc.connect({uuids:["CS225BottomRight", "CS210TopCenter"] });


	});

	jsPlumb.fire("jsPlumbDemoLoaded", instanc);
	
});

/* For Survey Data*/
jsPlumb.ready(function() {

	var instance = jsPlumb.getInstance({
		// default drag options
		DragOptions : { cursor: 'pointer', zIndex:2000 },
		// the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
		// case it returns the 'labelText' member that we set on each connection in the 'init' method below.
		ConnectionOverlays : [
			[ "Arrow", { location:1, width:10, length:10 } ]
		],
		Container:"flowchart-demo"
	});

	// this is the paint style for the connecting lines..
	var connectorPaintStyle = {
		lineWidth:3.5,
		strokeStyle:"#08F",
		joinstyle:"round",
		outlineColor:"white",
		outlineWidth:-1
	},
	// .. and this is the hover style. 
	connectorHoverStyle = {
		lineWidth:3.5,
		strokeStyle:"#08F",
		outlineWidth:1,
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
										
        
		// connect a few up
		instance.connect({uuids:["CS100BottomCenter", "CS125TopCenter"] });
		instance.connect({uuids:["CS125BottomCenter", "CS173TopCenter"] });
		instance.connect({uuids:["CS173BottomCenter", "CS373TopCenter"] });
		instance.connect({uuids:["CS426BottomCenter", "CS477TopCenter"] });
		instance.connect({uuids:["CS431BottomCenter", "CS424TopCenter"] });
		instance.connect({uuids:["CS103BottomCenter", "CS225TopCenter"] });
		instance.connect({uuids:["CS225BottomCenter", "CS233TopCenter"] });
		instance.connect({uuids:["CS233BottomCenter", "CS241TopCenter"] });
		instance.connect({uuids:["CS241BottomCenter", "CS242TopCenter"] });
		instance.connect({uuids:["CS242BottomCenter", "CS427TopCenter"] });
		instance.connect({uuids:["CS427BottomCenter", "CS428TopCenter"] });
		instance.connect({uuids:["CS428BottomCenter", "CS498-OSPTopCenter"] });
		instance.connect({uuids:["CS411BottomCenter", "CS412TopCenter"] });
		instance.connect({uuids:["CS440BottomCenter", "CS446TopCenter"] });
		instance.connect({uuids:["CS461BottomCenter", "CS460TopCenter"] });
		instance.connect({uuids:["CS465BottomCenter", "CS467TopCenter"] });
		instance.connect({uuids:["CS467BottomCenter", "CS498-SCITopCenter"] });
		instance.connect({uuids:["CS418BottomCenter", "CS419TopCenter"] });
		instance.connect({uuids:["CS466BottomCenter", "CS473TopCenter"] });
		instance.connect({uuids:["CS473BottomCenter", "CS498-AMCTopCenter"] });
		instance.connect({uuids:["CS357BottomCenter", "CS498-PROTopCenter"] });
		instance.connect({uuids:["CS498-PROBottomCenter", "CS450TopCenter"] });
		instance.connect({uuids:["CS424BottomCenter", "CS425TopCenter"] });
		
		
		instance.connect({uuids:["CS125RightMiddle", "CS225TopCenter"] });
		instance.connect({uuids:["CS241RightMiddle", "CS461TopCenter"] });
		instance.connect({uuids:["CS241RightMiddle", "CS440TopCenter"] });
		instance.connect({uuids:["CS225RightMiddle", "CS465TopCenter"] });
		instance.connect({uuids:["CS225LeftMiddle", "CS466TopCenter"] });
		instance.connect({uuids:["CS225LeftMiddle", "CS418TopCenter"] });
		instance.connect({uuids:["CS242RightMiddle", "CS429TopCenter"] });

		
		instance.connect({uuids:["CS241LeftMiddle", "CS438TopCenter"] });
		instance.connect({uuids:["CS241LeftMiddle", "CS423TopCenter"] });
		instance.connect({uuids:["CS225RightMiddle", "CS411TopCenter"] });
		instance.connect({uuids:["CS225RightMiddle", "CS410TopCenter"] });
		
		instance.connect({uuids:["CS438BottomCenter", "CS425RightMiddle"] });
		instance.connect({uuids:["CS410BottomCenter", "CS412LeftMiddle"] });


	});

	jsPlumb.fire("jsPlumbDemoLoaded", instance);
	
});


/* For Repeated Parts */
jsPlumb.ready(function() {

	var instan = jsPlumb.getInstance({
		// default drag options
		DragOptions : { cursor: 'pointer', zIndex:2000 },
		// the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
		// case it returns the 'labelText' member that we set on each connection in the 'init' method below.
		ConnectionOverlays : [
			[ "Arrow", { location:1, width:10, length:10 } ]
		],
		Container:"flowchart-demo"
	});

	// this is the paint style for the connecting lines..
	var connectorPaintStyle = {
		lineWidth:3.5,
		strokeStyle:"#33FF00",
		joinstyle:"round",
		outlineColor:"white",
		outlineWidth:-1
	},
	// .. and this is the hover style. 
	connectorHoverStyle = {
		lineWidth:3.5,
		strokeStyle:"#33FF00",
		outlineWidth:1,
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
				instan.addEndpoint(toId, sourceEndpoint, { anchor:sourceAnchors[i], uuid:sourceUUID });						
			}
			for (var j = 0; j < targetAnchors.length; j++) {
				var targetUUID = toId + targetAnchors[j];
				instan.addEndpoint(toId, targetEndpoint, { anchor:targetAnchors[j], uuid:targetUUID });						
			}
		};

	// suspend drawing and initialise.
	instan.doWhileSuspended(function() {
		_addEndpoints("CS125", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS173", ["BottomCenter","LeftMiddle","TopRight"], ["TopCenter", "RightMiddle"]);
		_addEndpoints("CS225", ["BottomCenter","LeftMiddle", "RightMiddle","BottomLeft","BottomRight"], ["TopCenter","TopLeft"]);
		_addEndpoints("CS233", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS241", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);
		_addEndpoints("CS242", ["BottomCenter","LeftMiddle", "RightMiddle"], ["TopCenter"]);


										
        
		// connect a few up

		instan.connect({uuids:["CS125BottomCenter", "CS173TopCenter"] });
		instan.connect({uuids:["CS225BottomCenter", "CS233TopCenter"] });
		instan.connect({uuids:["CS233BottomCenter", "CS241TopCenter"] });
		instan.connect({uuids:["CS241BottomCenter", "CS242TopCenter"] });




	});

	jsPlumb.fire("jsPlumbDemoLoaded", instan);
	
});