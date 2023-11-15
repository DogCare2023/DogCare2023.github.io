(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCE1F4").s().p("AnFO8QmEh3jrkuQgUAdgrAoQhFBAhWAtQkJCLlJhbQglgVhhheQiHiDg7h2QAGARiShSIiShVIJXj+IA9gEQBKgCA+AHQDGAWATBkQgRhogyhfQhljBjCAPQAQgmAIgPQAeg1AsgeQCIhgDkCQQAAANAbAbQApApAQAVQBNBngXCbQAIgIA4gSQBQgaBggSQESgzB2BHQAUAQDgEOQgDiFhCh+QiEj8k5AiQgGgHAFhWQAHhsAdhmQBZlAEBhzQAAAEA+gPQBRgSA+AOQDUAyASGiQAAADAjgLQAsgNAfgBQBwgDAICNIAogmQA2gxA3gnQCwh8BbA2QgEgBAZARQAoAbAhAdQBuBhAMBrIgHhTQgOhrgjhaQhwkckPgFQAIgDBJg0QBsg9BqgIQFcgYDhIgQgEgLAshKQA1hcBGhFQDWjYD5BpQAEAMAdAFQA6AKAFACQBiAbArBrQAHAQBiCqIBiCnIA/AiQBHAvAoBDQCADUjoFJQikBzjrBVQnVCqmGh8IAAAAIAAAAQAEACkwgbQhZBhieBnQk+DNldAfIgKABQiKAAi7g6g");
	this.shape.setTransform(266.686,184.8025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AN+N1IAYAQQAgATAnASQB+A5CZAYQHsBOJLkbQACgCAdgTQAggUAagbQBWhbA+jHQgIhrgxhXQhiiujTA7IAAh9QgIibgrh+QiLmWmwAzQgPgUgaghQg2hFg4gvQi4icifBvQg3iGijiQQlIkioAgPQggABg9AKQh/AVh/BCQmiDYktJmQglgXhDgeQiKg9iIADQm/AJkuKhQgQgFgkgFQhLgLhAANQjVAugeEnQAAARAVAtQAdA9AvAyQCPCYD0gPQAHAZAZAyQAkBIAwBAQCQDADCAvQgDgCBPgLQBugPBUgTQErhEBJiDQgEAMBPBFQBdBRB7BNQFhDfEeAAQAAAcB6gYQCCgaCdhAQC5hMCKhjQCnh3BEiEg");
	this.shape_1.setTransform(258.4027,141.2216);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJV1QkdAAlijfQh6hNhehRQhPhFAEgMQhJCDkrBEQhUAThuAPQhPALAEACQjDgviQjAQgvhAglhIQgZgygHgZQjzAPiQiYQgugygdg9QgWgtAAgRQAeknDVguQBBgNBKALQAkAFARAFQEtqhG/gJQCIgDCKA9QBEAeAkAXQEupmGhjYQCAhCB+gVQA9gKAggBQIAAPFJEiQCiCQA3CGQCfhvC4CcQA4AvA2BFIApA1QGwgzCLGWQArB+AICbIAAB9QDTg7BiCuQAyBXAHBrQg9DHhXBbQgaAbgfAUQgeATgCACQpLEbnshOQiZgYh+g5QgngSgggTIgXgQQhFCEimB3QiLBji5BMQidBAiCAaQg4ALgfAAQgjAAAAgPg");
	this.shape_2.setTransform(258.4,141.2217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(-1,-1,518.8,287.2), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCE1F4").s().p("AnVMkQmRhjjzj/QgVAYgsAiQhIA2hZAmQkRB0lUhMQgkgPhmhRQiNhvg9hjQAHAOiXhFIiXhHIJrjWIA/gDQBNgCBAAGQDNASAUBVQgRhYg1hQQhpijjHANQAQggAIgMQAfgtAtgZQCNhRDrB5QAAAMAcAWQArAjAQASQBQBWgXCCQAIgGA6gPQBSgXBjgPQEcgrB6A8QAVANDnDkQgDhwhEhqQiIjVlEAeQgGgHAFhIQAHhbAehWQBckNEKhhQgBADBBgMQBTgPBAAMQDcAqASFfQAAADAkgJQAugLAggBQBzgCAKB2IAogfQA4gqA5ghQC2hpBeAuQgEgBAaAPQAqAXAhAYQB3BWAJBeQgCh8g6h4QhzjvkZgFQAJgDBLgqQBwg0BugGQFngUDqHJQgEgJAsg/QA3hNBIg7QDei1ECBZQAEAKAdAEIBCAKQBkAWAuBaQAGAOBmCPIBlCNIBBAcQBKAoApA4QCECzjwEVQioBgj0BIQnlCPmShpIgBAAQgJABktgWQhcBSikBWQlJCuloAaIgJAAQiPAAjDgxg");
	this.shape.setTransform(275.7169,155.5603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AOcLpIBiAsQCCAwCfAVQH9BBJejuQACgCAfgQQAggQAbgXQBahNBAioQgIhZgzhKQhmiSjaAyIAAhqQgJiCgshqQiQlVm+ArQgQgRgbgcQg4g7g5gnQi+iDilBdQg4hwiph6QlTj0oRgNQgiABg/AJQiDASiEA3QmvC1k4IGQglgUhGgZQiOgziNACQnPAIk3I2QgRgEgmgFQhNgJhCALQjcAmggD5QAAAOAWAmQAeAzAxArQCUB/D8gMQAHAUAaArQAlA8AyA2QCVCiDJAoQgEgCBSgJQBygNBWgQQE1g5BMhvQgFALBSA6QBhBEB/BBQFtC8EnAAQAAAXB/gUQCGgWCig2QG8iUCFjSg");
	this.shape_1.setTransform(267.1789,118.8525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMSYQknAAlti8Qh/hBhhhEQhRg6AEgLQhMBvk1A5QhWAQhyANQhSAJAEACQjJgoiViiQgyg2glg8QgagrgHgUQj8AMiUh/QgxgrgegzQgWgmAAgOQAgj5DcgmQBCgLBNAJQAmAFARAEQE3o2HPgIQCNgCCOAzQBGAZAlAUQE4oGGvi1QCEg3CDgSQA/gJAigBQIRANFTD0QCpB6A4BwQClhdC+CDQA5AnA4A7IArAtQG+grCQFVQAsBqAJCCIAABqQDagyBmCSQAzBKAIBZQhACohaBNQgbAXggAQQgfAQgCACQpeDun9hBQifgViCgwIhigsQiFDSm8CUQiiA2iGAWQg7AKgfAAQglAAAAgNg");
	this.shape_2.setTransform(267.175,118.8526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-1,-1,536.4,241.9), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCE1F4").s().p("ApjR5QoLiOk9lqQgaAig6AwQheBNh0A2QllCmm7htQgxgYiEhxQi2idhQiNQAIATjEhhQhigxhkg1IMokxQCDgMCHAOQD0AXAqBnIgNg4QgchbgqhHQiJjokFASIAgg/QAog/A7glQC5hzEyCtQAAAQAlAgQA3AxAVAaQBoB7geC6QALgKBLgWQBsggCAgVQFzg+CeBWQAbATEuFEIgOhjQgYh2g3hdQixkvmmAqQgIgJAHhnQAJiBAnh7QB4l/FaiJQgBAGAWgFIA+gOQBugWBTARQEeA8AYH0QAAADAvgMQA8gQAqgBQCWgDAMCoQALgLAqgiQBJg8BLguQDtiVB6BBQgGgBAjAUQA3AhArAiQCXB3APCCIgKhnQgUiBgvhrQiXlVlvgGIAcgRQAqgbApgVQCRhKCQgIQHUgdExKLQgGgNA6haQBIhtBfhUQEgkBFQB9QAGAOAmAGIBWAPQCDAfA7CBQAIAUCFDLICDDIIBWAoQBgA5A1BPQCtD/k5GKQjcCKk+BmQp4DLoNiUIgBAAQgJAAmLgeQh4B0jWB7QmsD2nXAlIgKAAQi8AAj9hEg");
	this.shape.setTransform(359.4999,221.318);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AS1QkIAgATQArAXA1AVQCqBFDPAdQKXBdMXlTQADgDAngWQAqgYAkghQB0hsBTjvQgKh/hChpQiEjRkcBIIACgnQABg2gDg6QgMi5g6iXQhSjUijhtQjMiJlBAhQAAAEg3hEQhJhThLg4Qj3i6jXCEQgCgFgLgTQgUgigegoQhdh+iKhsQm6lcqygSQgsABhTANQiqAZisBPQozECmWLgQACADgkgSQg3gcgzgUQi5hKi4AEQkIAEjnCjQkjDNjgG8QAHAEhOgPQhkgOhXARQkeA2gqFiQAAAUAdA2QAnBJBAA7QDBC2FIgSQAJAdAiA9QAxBWBBBNQDCDmEGA4QgFgCBqgNQCUgSBygXQGThSBjidQgGAPBrBTQB+BhClBcQHcELGBAAQAAAiClgdQCvgfDUhNQD5hbC7h2QDgiOBcifg");
	this.shape_1.setTransform(348.3533,169.0977);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhjaJQmAAAndkLQilhch+hhQhrhTAGgPQhjCdmTBSQhyAXiUASQhpANAEACQkFg4jDjmQhAhNgyhWQgig9gIgdQlJASjBi2Qg/g7gohJQgdg2AAgUQAqliEfg2QBWgRBkAOQBPAPgIgEQDgm8EjjNQDnijEIgEQC4gEC5BKQA0AUA2AcQAkASgCgDQGWrgI0kCQCrhPCrgZQBSgNAsgBQKyASG6FcQCKBsBdB+QAfAoAUAiIAMAYQDXiED4C6QBKA4BJBTQA4BEgBgEQFBghDMCJQCjBtBSDUQA6CXAMC5QADA6gBA2IgCAnQEchICEDRQBCBpAKB/QhTDvh0BsQgjAhgrAYQgnAWgDADQsXFTqXhdQjPgdiqhFQg1gVgqgXIghgTQhcCfjgCOQi6B2j6BbQjTBNivAfQhNANgpAAQgwAAAAgSg");
	this.shape_2.setTransform(348.35,169.0978);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-1,-1,698.7,343.7), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ABFAAQAAAUgUAPQgVAPgcAAQgcAAgUgPQgUgPAAgUQAAgTAUgPQAUgPAcAAQAcAAAVAPQAUAPAAATg");
	this.shape.setTransform(19.775,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAjQgUgPAAgUQAAgUAUgOQAUgOAcAAQAcAAAVAOQAUAOAAAUQAAAUgUAPQgVAPgcAAQgcAAgUgPg");
	this.shape_1.setTransform(19.775,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("ADWAAQAABGg/AxQg+AyhZAAQhYAAg+gyQg/gxAAhGQAAhFA/gxQA+gyBYAAQBZAAA+AyQA/AxAABFg");
	this.shape_2.setTransform(29.85,24.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AiWB3Qg/gxAAhGQAAhFA/gxQA/gyBXAAQBYAAA/AyQA/AxAABFQAABGg/AxQg/AyhYAAQhXAAg/gyg");
	this.shape_3.setTransform(29.85,24.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AEqAAQAABkhXBHQhXBGh8AAQh6AAhYhGQhXhHAAhkQAAhjBXhHQBYhHB6AAQB8AABXBHQBXBHAABjg");
	this.shape_4.setTransform(29.825,24.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003FAA").s().p("AjSCrQhXhHAAhkQAAhjBXhHQBYhGB6AAQB8AABXBGQBXBHAABjQAABkhXBHQhXBGh8AAQh6AAhYhGg");
	this.shape_5.setTransform(29.825,24.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-1,-1,61.7,50.3), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ABKAAQAAAUgWAPQgWAPgeAAQgeAAgWgPQgVgPAAgUQAAgTAVgPQAWgPAeAAQAeAAAWAPQAWAPAAATg");
	this.shape.setTransform(18.35,18.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0AjQgVgOAAgVQAAgTAVgPQAXgPAdAAQAfAAAVAPQAWAPAAATQAAAVgWAOQgVAOgfAAQgeAAgWgOg");
	this.shape_1.setTransform(18.35,18.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AjkgoIgBAIQgGBSApA5QBJBkDFgcQgLAGAfgLQAcgJAYgRQBPg4ADhpQgMg3gtgwQhahhipApQgRAAgrAZQg9AkgWA4");
	this.shape_2.setTransform(33.1625,26.1786);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjCBrQgpg5AGhSIABgIIgBgPQAWg4A9gkQArgZARAAQCpgpBaBhQAtAwAMA3QgDBphPA4QgYARgcAJQgfALALgGQgsAGgkAAQiFAAg5hOg");
	this.shape_3.setTransform(33.1617,26.1786);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("ABSEBIA4gRQBAgaAsgnQCNh7h0jQQAAAAgSgRQgagZghgSQhxg9izAWQhCAVg8AvQh5BfAbCDQAAAAAPApQAVAvAkAmQByB3DWgbg");
	this.shape_4.setTransform(32.3708,26.1845);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003FAA").s().p("Aj2ClQgkgmgVgvIgPgpQgbiDB5hfQA8gvBCgVQCzgWBxA9QAhASAaAZIASARQB0DQiNB7QgsAnhAAaIg4ARQgnAFgkAAQigAAhdhhg");
	this.shape_5.setTransform(32.3708,26.1845);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-1,-1,66.8,54.4), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AKPsdQiiAzjMBvQmWDfjREtQhiCXhhC6QjCFygQDJIBqgaQgGg5AyiLQBlkWEambQgCADAtg1QA9hCBHhCQDmjSD1hpIEVhng");
	this.shape.setTransform(117.5784,102.1133);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A51111").s().p("AoIDiQBii6BhiXQDRktGXjeQDMhvCigzIBKBSIkWBoQj0BojmDTQhIBBg9BDIgqAxQkaGbhlEXQgyCLAGA4IhrAaQARjIDBlzg");
	this.shape_1.setTransform(117.425,102.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AIQsQICEApQh2AViiBDQlFCFjbDlQhbBbhfCNQi9EXgkEIIgUEpQgZgXgWgYQgsgvAOAAQADAAAMhaQARh8AahoQBblvDTjoQAAABA1g8QBHhKBWhIQETjjFBhvg");
	this.shape_2.setTransform(81.4024,82.2911);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A51111").s().p("Ap5LfQgsgvANAAQADAAANhbQARh7AZhoQBblxDTjmIA2g7QBHhLBWhHQESjkFBhuIAjgJICDApQh2AUiiBDQlECGjcDlQhbBbheCMQi+EYgjEIIgVEpQgYgXgWgYg");
	this.shape_3.setTransform(80.5915,82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("ARaAAQAADOhYC8QhUC1iaCMQiaCLjIBNQjQBQjiAAQjhAAjQhQQjIhNiaiLQiaiMhUi1QhYi8AAjOQAAjNBYi8QBUi1CaiMQCaiMDIhNQDQhPDhAAQDiAADQBPQDIBNCaCMQCaCMBUC1QBYC8AADNg");
	this.shape_4.setTransform(111.4,101.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E01E1E").s().p("AmxOkQjHhOibiLQiaiMhUi1QhYi9AAjNQAAjNBYi8QBUi1CaiMQCbiMDHhMQDQhQDhAAQDiAADQBQQDHBMCbCMQCaCMBVC1QBXC8AADNQAADNhXC9QhVC1iaCMQibCLjHBOQjQBPjiAAQjhAAjQhPg");
	this.shape_5.setTransform(111.4,101.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-1,-1,224.8,204.2), null);


(lib.sentimiento = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOB8QgbgIgRgYQgFgJADgKQADgKAIgFQAJgFAJADQAKADAFAIQAFAIAJACQAHACAHgEQAFgEABgHQACgGgFgEIgFgDIgFgBIgGAAIgFgBQgOgCgMgIQgWgNgKgWQgKgUABgZQABgZAMgUQAPgaAbgJQAbgKAaAOQARAIAKAQQAKAQABASQABARgFASQgDAKgIAFQgJAFgKgDQgJgCgFgJQgGgJAEgJIACgIIAAgBIAAgBIAAgGIAAgCIAAgBIAAgDIgBgCIgBgEIgBgBIgBgCIgBgBIgBgCIgFgEIgFgCIgBAAIgCgBQgIAAgIAFQgJAIgEAPIgBABIAAACIAAABIAAADIAAAJIAAABIAAABIAAABIAAACIADAJIABACIABAEIACADIABABIACACIABACIABABIABABIABAAIABABIACABIABABIACAAIAGACIAIABIAHABQAPACAKAIQARAMAFAUQAGATgIATQgHATgRAMQgRALgTAAQgHAAgJgCg");
	this.shape.setTransform(47.9038,13.571);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZCBQgRgFgNgMQgWgVgIgjQgIgjABgkQABgYAGgVQAGgUAOgRQAOgSAVgKIAFgCQAVgHASAFQATAEAPANQAQAMAKASQAKASAEATQAIAigGAlQgHAmgUAcQgZAggdAGQgIACgHAAQgJAAgKgDgAgMhQQgIADgHAJQgHAJgEAKQgHAVABAdQACAXAGAWQAHAYAKAJQALAJANgIQAOgIALgTQALgUADgZQACgYgGgWQgFgWgOgNQgKgJgLAAQgFAAgHACg");
	this.shape_1.setTransform(30.0594,13.2758);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATB/QgJgFgDgKIgCgIIgHgNQgGgHgIgHIgIgFIAAAQIAAAQQAAAJgFAGQgFAGgHACQgHABgHgBQgHgCgFgGQgFgGgBgJIgBhkIgChkIAAgHIABgCIAAgBQACgFADgDIAAAAIACgCQAFgEAFgBQANgEAKgCQAKgCAMAAQAMgBAKADQAMACAKAGQAaAQAMAfQAMAggGAfQgDAQgKAPQgKAPgQAIIgLAFQAWAWAHAcQACAKgEAIQgFAIgKADIgHABQgFAAgGgDgAgbhPIABBXIACAAIADAAIABAAIALAAIAFgBIACAAIAIgCIAEgBIAAAAIABgBIAEgCIACgBIABAAIACgBIABgDIABAAIAEgGIAAgDIACgHIAAAAIABgBIAAgDIAAgDIAAgHIAAgDIgEgOIgCgEIgBgDIgEgHIgBgCIgBgBIgCgDIgDgCIgCgCIgBgBIACABIgBAAIgDgCIgDgCIgCAAIgCgBIgCgBIgBAAIgEAAQgJAAgKACg");
	this.shape_2.setTransform(11.8239,13.3389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATB/QgJgFgDgKIgCgIIgHgNQgGgHgIgHIgIgFIAAAQIAAAQQAAAJgFAGQgFAGgHACQgHABgHgBQgHgCgFgGQgFgGgBgJIgBhkIgChkIAAgHIABgCIAAgBQACgFADgDIAAAAIACgCQAFgEAFgBQANgEAKgCQAKgCAMAAQAMgBAKADQAMACAKAGQAaAQAMAfQAMAggGAfQgDAQgKAPQgKAPgQAIIgLAFQAWAWAHAcQACAKgEAIQgFAIgKADIgHABQgFAAgGgDgAgbhPIABBXIACAAIADAAIABAAIALAAIAFgBIACAAIAIgCIAEgBIAAAAIABgBIAEgCIACgBIABAAIACgBIABgDIABAAIAEgGIAAgDIACgHIAAAAIABgBIAAgDIAAgDIAAgHIAAgDIgEgOIgCgEIgBgDIgEgHIgBgCIgBgBIgCgDIgDgCIgCgCIgBgBIACABIgBAAIgDgCIgDgCIgCAAIgCgBIgCgBIgBAAIgEAAQgJAAgKACg");
	this.shape_3.setTransform(-5.3261,13.3389);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpB9IgHgBQgHgBgGgFQgFgFgBgHIgBgFIAAgCIABgBIgChiIgChhIAAgBIAAgBIABgGQABgKAIgFQAJgFAJACIBTAAQAKAAAHAHQAHAIAAAKQABAJgIAIQgHAHgKAAIgfgBIgfAAIABBNIAeAAIAfAAQAKAAAHAHQAGAHABAKQAAAHgDAFQgEAGgFADQgGAEgGAAIgfAAIgdAAIABAaIBDAAQAKAAAGAHQAHAHABAKQAAAGgDAGQgEAFgGAEQgFADgGAAg");
	this.shape_4.setTransform(-21.9219,13.3964);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3CAQgHgBgFgGQgFgGgBgJIgBhlIgChjIAAgHIABgDIAAAAQACgFADgDIAAgBIACgBQAFgFAFgBQANgEAKgBQAKgCAMgBQAMAAAKACQAMACAKAHQAaAPAMAgQAMAfgGAfQgBALgGAKQgFALgIAIQgJAJgKAGIgHADIgIADIgIACIgHABIgHABIgIAAIgIABIgIAAIAAAQIABARIAAAPQAAAJgFAGQgFAGgHABIgHABIgHgBgAgbhOIABBYIAGgBIALAAIAFAAIACAAIAIgCIAEgBIAAgBIABAAIAEgCIACgBIABgCIACAAIABgCIABgBIAEgGIAAgCIACgHIAAgBIABAAIAAgEIAAgDIAAgHIAAgCIgEgOIgCgFIgBgDIgEgGIgBgCIgBgCIgCgCIgDgDIgCgCIgBgBIACACIgBgBIgDgCIgDgBIgCgBIgCgBIgCAAIgBAAIAAgBIgEAAQgJAAgKACg");
	this.shape_5.setTransform(-38.3761,13.1833);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOB8QgbgIgRgYQgFgJADgKQADgKAIgFQAJgFAJADQAKADAFAIQAFAIAJACQAHACAHgEQAFgEABgHQACgGgFgEIgFgDIgFgBIgGAAIgFgBQgOgCgMgIQgWgNgKgWQgKgUABgZQABgZAMgUQAPgaAbgJQAbgKAaAOQARAIAKAQQAKAQABASQABARgFASQgDAKgIAFQgJAFgKgDQgJgCgFgJQgGgJAEgJIACgIIAAgBIAAgBIAAgGIAAgCIAAgBIAAgDIgBgCIgBgEIgBgBIgBgCIgBgBIgBgCIgFgEIgFgCIgBAAIgCgBQgIAAgIAFQgJAIgEAPIgBABIAAACIAAABIAAADIAAAJIAAABIAAABIAAABIAAACIADAJIABACIABAEIACADIABABIACACIABACIABABIABABIABAAIABABIACABIABABIACAAIAGACIAIABIAHABQAPACAKAIQARAMAFAUQAGATgIATQgHATgRAMQgRALgTAAQgHAAgJgCg");
	this.shape_6.setTransform(153.4038,-20.629);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZCBQgRgFgNgMQgWgVgIgjQgIgjABgkQABgYAGgVQAGgUAOgRQAOgSAVgKIAFgCQAVgHASAFQATAEAPANQAQAMAKASQAKASAEATQAIAigGAlQgHAmgUAcQgZAggdAGQgIACgHAAQgJAAgKgDgAgMhQQgIADgHAJQgHAJgEAKQgHAVABAdQACAXAGAWQAHAYAKAJQALAJANgIQAOgIALgTQALgUADgZQACgYgGgWQgFgWgOgNQgKgJgLAAQgFAAgHACg");
	this.shape_7.setTransform(135.5594,-20.9242);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggB9QgJAAgHgHQgHgHgBgKIgBhlIgChlQAAgJAFgGQAFgGAHgCQAHgBAHABQAHACAFAGQAFAGABAJIABBZIACBZIAsAAQAJAAAGAFQAGAFABAHQABAHgBAHQgCAHgGAFQgFAFgJAAg");
	this.shape_8.setTransform(119.7125,-20.9375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag4B9QgGgCgEgCQgEgDgDgFQgDgFAAgGIgBhiIgChgIAAgJQAAgKAHgHQAHgGAIAAQAIAAAIAFQAIAFACAJQAmA6ASAgIACADIABADIACACIgBgeIAAghIgBgeQAAgJAFgGQAFgGAHgCQAHgBAHABQAHACAFAGQAGAGAAAJIABBkIACBmQAAAJgGAHQgGAGgIABQgIABgHgEQgIgDgDgIQgEgEgDgFQgVg3gYgqIgLgTIABA6IABA6QAAAGgDAFQgCAFgFADQgEACgFACIgFAAIgFAAg");
	this.shape_9.setTransform(93.8625,-20.8023);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjB2QgHgHAAgKQACgXAAgaIgeAAIgcAAIgBAvQAAAJgFAGQgFAGgIACQgHABgHgBQgHgCgFgGQgFgGAAgJIABglIAAgtIACgkQAEg8AegaQAUgSAagBQAaAAATAUQAOAPAFAcQAEAYADAfQAEA0gDA3QgBAHgDAFQgDAGgFADQgGADgGAAQgKAAgIgHgAADhMQgaAFgDA5IgBASIA3gBIgCgTQgDgggEgNQgEgPgKAAIgCAAg");
	this.shape_10.setTransform(75.7516,-20.6506);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATB/QgJgFgDgKIgCgIIgHgNQgGgHgIgHIgIgFIAAAQIAAAQQAAAJgFAGQgFAGgHACQgHABgHgBQgHgCgFgGQgFgGgBgJIgBhkIgChkIAAgHIABgCIAAgBQACgFADgDIAAAAIACgCQAFgEAFgBQANgEAKgCQAKgCAMAAQAMgBAKADQAMACAKAGQAaAQAMAfQAMAggGAfQgDAQgKAPQgKAPgQAIIgLAFQAWAWAHAcQACAKgEAIQgFAIgKADIgHABQgFAAgGgDgAgbhPIABBXIACAAIADAAIABAAIALAAIAFgBIACAAIAIgCIAEgBIAAAAIABgBIAEgCIACgBIABAAIACgBIABgDIABAAIAEgGIAAgDIACgHIAAAAIABgBIAAgDIAAgDIAAgHIAAgDIgEgOIgCgEIgBgDIgEgHIgBgCIgBgBIgCgDIgDgCIgCgCIgBgBIACABIgBAAIgDgCIgDgCIgCAAIgCgBIgCgBIgBAAIgEAAQgJAAgKACg");
	this.shape_11.setTransform(58.7239,-20.8611);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCB8IgKgEQgEgCgDgFQgDgFAAgHIgBhlIgChlQAAgJAFgGQAFgGAHgBQAHgCAGACQAHABAFAGQAFAGABAJIABBlIACBlQAAAHgDAFQgCAFgFACIgJAEIgFABIgEgBg");
	this.shape_12.setTransform(45.975,-20.7875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEB8QgHgBgFgGQgFgGAAgJIgChYIgChYIgTAAIgTABQgKAAgHgHQgHgHgBgLQAAgJAIgIQAHgHAKAAIApAAIAtgBIApgBQAKAAAHAHQAHAIABAKQAAAJgIAHQgHAIgKAAIgpAAIADCxQAAAJgFAGQgEAGgIABIgHABIgGgBg");
	this.shape_13.setTransform(33.575,-20.6125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag4B9QgGgCgEgCQgEgDgDgFQgDgFAAgGIgBhiIgChgIAAgJQAAgKAHgHQAHgGAIAAQAIAAAIAFQAIAFACAJQAmA6ASAgIACADIABADIACACIgBgeIAAghIgBgeQAAgJAFgGQAFgGAHgCQAHgBAHABQAHACAFAGQAGAGAAAJIABBkIACBmQAAAJgGAHQgGAGgIABQgIABgHgEQgIgDgDgIQgEgEgDgFQgVg3gYgqIgLgTIABA6IABA6QAAAGgDAFQgCAFgFADQgEACgFACIgFAAIgFAAg");
	this.shape_14.setTransform(15.6625,-20.8023);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgpB9IgHgBQgHgBgGgFQgFgFgBgHIgBgFIAAgCIABgBIgChiIgChhIAAgBIAAgBIABgGQABgKAIgFQAJgFAJACIBTAAQAKAAAHAHQAHAIAAAKQABAJgIAIQgHAHgKAAIgfgBIgfAAIABBNIAeAAIAfAAQAKAAAHAHQAGAHABAKQAAAHgDAFQgEAGgFADQgGAEgGAAIgfAAIgdAAIABAaIBDAAQAKAAAGAHQAHAHABAKQAAAGgDAGQgEAFgGAEQgFADgGAAg");
	this.shape_15.setTransform(-1.2719,-20.8036);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOB8QgbgIgRgYQgFgJADgKQADgKAIgFQAJgFAJADQAKADAFAIQAFAIAJACQAHACAHgEQAFgEABgHQACgGgFgEIgFgDIgFgBIgGAAIgFgBQgOgCgMgIQgWgNgKgWQgKgUABgZQABgZAMgUQAPgaAbgJQAbgKAaAOQARAIAKAQQAKAQABASQABARgFASQgDAKgIAFQgJAFgKgDQgJgCgFgJQgGgJAEgJIACgIIAAgBIAAgBIAAgGIAAgCIAAgBIAAgDIgBgCIgBgEIgBgBIgBgCIgBgBIgBgCIgFgEIgFgCIgBAAIgCgBQgIAAgIAFQgJAIgEAPIgBABIAAACIAAABIAAADIAAAJIAAABIAAABIAAABIAAACIADAJIABACIABAEIACADIABABIACACIABACIABABIABABIABAAIABABIACABIABABIACAAIAGACIAIABIAHABQAPACAKAIQARAMAFAUQAGATgIATQgHATgRAMQgRALgTAAQgHAAgJgCg");
	this.shape_16.setTransform(-17.7462,-20.629);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpB9IgHgBQgHgBgGgFQgFgFgBgHIgBgFIAAgCIABgBIgChiIgChhIAAgBIAAgBIABgGQABgKAIgFQAJgFAJACIBTAAQAKAAAHAHQAHAIAAAKQABAJgIAIQgHAHgKAAIgfgBIgfAAIABBNIAeAAIAfAAQAKAAAHAHQAGAHABAKQAAAHgDAFQgEAGgFADQgGAEgGAAIgfAAIgdAAIABAaIBDAAQAKAAAGAHQAHAHABAKQAAAGgDAGQgEAFgGAEQgFADgGAAg");
	this.shape_17.setTransform(-42.7719,-20.8036);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOB8QgbgIgRgYQgFgJADgKQADgKAIgFQAJgFAJADQAKADAFAIQAFAIAJACQAHACAHgEQAFgEABgHQACgGgFgEIgFgDIgFgBIgGAAIgFgBQgOgCgMgIQgWgNgKgWQgKgUABgZQABgZAMgUQAPgaAbgJQAbgKAaAOQARAIAKAQQAKAQABASQABARgFASQgDAKgIAFQgJAFgKgDQgJgCgFgJQgGgJAEgJIACgIIAAgBIAAgBIAAgGIAAgCIAAgBIAAgDIgBgCIgBgEIgBgBIgBgCIgBgBIgBgCIgFgEIgFgCIgBAAIgCgBQgIAAgIAFQgJAIgEAPIgBABIAAACIAAABIAAADIAAAJIAAABIAAABIAAABIAAACIADAJIABACIABAEIACADIABABIACACIABACIABABIABABIABAAIABABIACABIABABIACAAIAGACIAIABIAHABQAPACAKAIQARAMAFAUQAGATgIATQgHATgRAMQgRALgTAAQgHAAgJgCg");
	this.shape_18.setTransform(-59.2462,-20.629);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZCBQgRgFgNgMQgWgVgIgjQgIgjABgkQABgYAGgVQAGgUAOgRQAOgSAVgKIAFgCQAVgHASAFQATAEAPANQAQAMAKASQAKASAEATQAIAigGAlQgHAmgUAcQgZAggdAGQgIACgHAAQgJAAgKgDgAgMhQQgIADgHAJQgHAJgEAKQgHAVABAdQACAXAGAWQAHAYAKAJQALAJANgIQAOgIALgTQALgUADgZQACgYgGgWQgFgWgOgNQgKgJgLAAQgFAAgHACg");
	this.shape_19.setTransform(-86.4906,-20.9242);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAyB5QgHgHAAgLIAAiQIgDAGQgHATgNAHQgQAJgPgIQgQgJgIgRIgHgOIAAAGIAAAGIAACLQAAAJgFAGQgFAGgHABQgHABgHgBQgHgCgFgGQgFgFAAgJIAAhZIAAhYQAAgNACgJQABgJAHgIQAHgHAKgDQAKgCAJADQAIACAHAFQAHAFAFAIIAJAOIAIAPIAAACIAAACQAIgTAKgOQAHgJAIgGQAHgGALgCQAKgDAKAGQAGADAEAFIAGAKQACAEABAIIABAMIAAAOIAAAMIAACdQAAALgHAHQgIAGgJAAQgJAAgIgGgAA+hPIAAAAIAAgBIAAABgAAqhUIABgEIgBAEg");
	this.shape_20.setTransform(-107.025,-21.1141);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZCBQgRgFgNgMQgWgVgIgjQgIgjABgkQABgYAGgVQAGgUAOgRQAOgSAVgKIAFgCQAVgHASAFQATAEAPANQAQAMAKASQAKASAEATQAIAigGAlQgHAmgUAcQgZAggdAGQgIACgHAAQgJAAgKgDgAgMhQQgIADgHAJQgHAJgEAKQgHAVABAdQACAXAGAWQAHAYAKAJQALAJANgIQAOgIALgTQALgUADgZQACgYgGgWQgFgWgOgNQgKgJgLAAQgFAAgHACg");
	this.shape_21.setTransform(-127.3906,-20.9242);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgOB2QgQgHgMgPQgNgPgGgTQgHgSgDgTQgDgTACgRQAEg0AcgdQAbgdAvgCQAKgBAHAIQAIAHAAAKQAAAHgEAFQgDAGgGADQgFADgHAAQgiACgNAaQgRAgAIAmIAEAPIADAIIABACIABABQAGAPAHAGIADADIAEACIAFABIADAAIACAAQAGAAAEgDIACgBIABgBIABgBIABgBIABAAQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgRAQgWAEIgOABQgOAAgOgGg");
	this.shape_22.setTransform(-144.8734,-20.9766);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7ADA7A").s().p("AqfKwQk2g5jvhnQjvhniDiHQiHiKAAiYQAAiXCHiLQCDiGDvhnQDvhnE2g5QFBg7FeAAQFfAAFBA7QE2A5DvBnQDvBnCDCGQCHCLAACXQAACYiHCKQiDCHjvBnQjvBnk2A5QlAA7lgAAQleAAlBg7g");
	this.shape_23.setTransform(0.075,0.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FCFCFC").p("AdoK/QAABFgoAxQgoAxg5AAMg29AAAQg5AAgogxQgogxAAhFIAA19QAAhFAogxQAogxA5AAMA29AAAQA5AAAoAxQAoAxAABFg");
	this.shape_24.setTransform(-3.475,0.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#56B220").s().p("A7eNmQg5AAgogxQgogxAAhFIAA19QAAhFAogxQAogxA5AAMA29AAAQA5AAAoAxQAoAxAABFIAAV9QAABFgoAxQgoAxg5AAg");
	this.shape_25.setTransform(-3.475,0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOCFQgegIgSgaQgFgJADgLQADgLAJgFQAJgGAKADQAKADAHAJQAFAIAJADQAIACAHgFQAGgEABgHQACgHgFgEIgFgDIgGgBIgGAAIgGgBQgPgDgNgIQgXgOgLgYQgLgWABgaQABgbAMgWQARgbAdgLQAdgKAdAPQASAIAKASQALARABATQACATgGATQgDALgJAFQgKAGgKgDQgKgDgGgKQgGgKAEgJIACgIIAAgCIABAAIAAgHIAAgCIAAgCIgBgCIAAgDIgCgEIAAgBIgCgCIgBgBIgBgCIgGgFIgFgCIAAAAIgDgBQgIAAgJAGQgKAIgFAQIAAABIAAACIAAABIgBAEIAAAJIAAABIAAACIABABIAAACIACAJIACADIABAEIADADIABACIABABIACACIABABIABABIABABIABABIACABIABAAIADABIAGACIAJABIAHABQAQADALAIQASANAGAVQAGAVgIAVQgIAUgSANQgTAMgTAAQgJAAgJgDg");
	this.shape_26.setTransform(51.59,31.4099);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbCLQgSgFgOgOQgXgXgJglQgJgmABgmQABgbAHgWQAGgVAQgTQAOgTAXgLIAFgCQAXgHATAFQAVAEAQAOQARANALATQALATAEAVQAJAkgHAoQgIAqgWAdQgaAjgfAHQgJACgHAAQgLAAgKgDgAgNhWQgIADgIAJQgIAKgEALQgHAWABAfQACAZAGAZQAHAZAMAKQALAKAOgJQAQgIALgVQAMgWADgbQADgagHgYQgFgXgQgOQgKgKgMAAQgGAAgHADg");
	this.shape_27.setTransform(32.3724,31.1263);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAVCJQgKgGgDgKIgDgJQgDgIgEgGQgHgIgIgHIgJgGIAAASIAAARQABAKgGAGQgFAHgIABQgHACgIgCQgIgBgFgHQgGgHAAgJIgChsIgChrIABgIIABgDIAAAAIAAAAQACgFADgEIAAAAIACgCQAFgFAGgBIAYgGQALgCANAAQANgBALACQANADAKAHQAdAQAMAiQANAigGAiQgDASgLAQQgLAQgRAIIgMAGQAYAXAHAeQADALgFAJQgFAJgLADIgHABQgGAAgGgDgAgdhWIACBfIACAAIACAAIACgBIAMAAIAFAAIACAAIAJgCIAEgCIAAABIAGgEIACgBIABAAIABgCIACgCIABgBIAEgGIABgDIACgHIAAgBIAAgBIAAgDIAAgDIAAgIIAAgDIgEgPIgCgFIgBgDIgEgHIgCgCIABAAIgCgCIgCgCIgCgDIgDgDIgBAAIACABIgBAAIgDgCIgEgCIgBAAIgDgCIgCAAIgBgBIgFAAQgJAAgLACg");
	this.shape_28.setTransform(12.7447,31.1538);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVCJQgKgGgDgKIgDgJQgDgIgEgGQgHgIgIgHIgJgGIAAASIAAARQABAKgGAGQgFAHgIABQgHACgIgCQgIgBgFgHQgGgHAAgJIgChsIgChrIABgIIABgDIAAAAIAAAAQACgFADgEIAAAAIACgCQAFgFAGgBIAYgGQALgCANAAQANgBALACQANADAKAHQAdAQAMAiQANAigGAiQgDASgLAQQgLAQgRAIIgMAGQAYAXAHAeQADALgFAJQgFAJgLADIgHABQgGAAgGgDgAgdhWIACBfIACAAIACAAIACgBIAMAAIAFAAIACAAIAJgCIAEgCIAAABIAGgEIACgBIABAAIABgCIACgCIABgBIAEgGIABgDIACgHIAAgBIAAgBIAAgDIAAgDIAAgIIAAgDIgEgPIgCgFIgBgDIgEgHIgCgCIABAAIgCgCIgCgCIgCgDIgDgDIgBAAIACABIgBAAIgDgCIgEgCIgBAAIgDgCIgCAAIgBgBIgFAAQgJAAgLACg");
	this.shape_29.setTransform(-5.7053,31.1538);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgtCHIgHgBQgIgCgFgFQgGgFgBgIIgBgGIAAgBIAAgBIgBhqIgChpIAAgBIAAgBIABgGQABgLAJgGQAJgFAKACIBZABQALAAAHAHQAIAIAAALQABAKgIAIQgIAIgLAAIgigBIggAAIABBTIAgAAIAhAAQAKAAAIAIQAHAHABALQAAAHgDAGQgEAGgGAEQgGADgHAAIghABIgfAAIAAAbIBIAAQALAAAHAIQAIAHABALQgBAHgDAGQgEAGgGAEQgGAEgHAAg");
	this.shape_30.setTransform(-23.6,31.2359);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag7CKQgIgBgFgHQgGgHAAgJIgChsIgChrIABgIIABgDIAAAAIAAAAQACgFADgEIAAAAIACgCQAFgFAGgBIAYgGQALgCANAAQANgBALACQANADAKAHQAdAQAMAiQANAigGAiQgCALgFAMQgGALgJAJQgJAJgLAGIgIAEIgIADQgDABgFABIgIABIgIABIgIABIgJAAIgJABIABAQIAAATIAAAQQABAKgGAGQgFAHgIABIgIABIgHgBgAgdhUIACBfIAGgBIAMAAIAFAAIACAAIAJgCIAEgCIAAABIAGgEIACgBIABgBIABgBIACgCIABgBIAEgGIABgDIACgHIAAgBIAAgBIAAgDIAAgDIAAgIIAAgDIgEgPIgCgFIgBgDIgEgHIgCgCIABAAIgCgCIgCgCIgCgDIgDgDIgBAAIACABIgBAAIgDgCIgEgCIgBAAIgDgCIgCAAIgBAAIAAgBIgFAAQgJAAgLACg");
	this.shape_31.setTransform(-41.3053,30.9982);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOCFQgegIgSgaQgFgJADgLQADgLAJgFQAJgGAKADQAKADAHAJQAFAIAJADQAIACAHgFQAGgEABgHQACgHgFgEIgFgDIgGgBIgGAAIgGgBQgPgDgNgIQgXgOgLgYQgLgWABgaQABgbAMgWQARgbAdgLQAdgKAdAPQASAIAKASQALARABATQACATgGATQgDALgJAFQgKAGgKgDQgKgDgGgKQgGgKAEgJIACgIIAAgCIABAAIAAgHIAAgCIAAgCIgBgCIAAgDIgCgEIAAgBIgCgCIgBgBIgBgCIgGgFIgFgCIAAAAIgDgBQgIAAgJAGQgKAIgFAQIAAABIAAACIAAABIgBAEIAAAJIAAABIAAACIABABIAAACIACAJIACADIABAEIADADIABACIABABIACACIABABIABABIABABIABABIACABIABAAIADABIAGACIAJABIAHABQAQADALAIQASANAGAVQAGAVgIAVQgIAUgSANQgTAMgTAAQgJAAgJgDg");
	this.shape_32.setTransform(165.19,-5.4401);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbCLQgSgFgOgOQgXgXgJglQgJgmABgmQABgbAHgWQAGgVAQgTQAOgTAXgLIAFgCQAXgHATAFQAVAEAQAOQARANALATQALATAEAVQAJAkgHAoQgIAqgWAdQgaAjgfAHQgJACgHAAQgLAAgKgDgAgNhWQgIADgIAJQgIAKgEALQgHAWABAfQACAZAGAZQAHAZAMAKQALAKAOgJQAQgIALgVQAMgWADgbQADgagHgYQgFgXgQgOQgKgKgMAAQgGAAgHADg");
	this.shape_33.setTransform(145.9724,-5.7237);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgiCHQgKAAgIgIQgHgHgBgLIgBhtIgChtQAAgJAFgHQAFgGAIgCQAIgCAHACQAIACAFAGQAGAHAAAJIACBgIABBgIAwAAQAKAAAGAFQAHAGABAHQABAIgBAIQgCAHgGAGQgGAFgKAAg");
	this.shape_34.setTransform(128.8875,-5.7875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag9CGQgFgBgFgDQgEgDgEgFQgDgGAAgHIgBhoIgChpIAAgJQAAgLAHgHQAIgGAJgBQAJAAAIAFQAIAGACAKQApA+AUAjIACACIACAEIABACIAAggIgBgkIgBggQAAgKAGgGQAFgHAHgCQAIgBAIABQAIACAFAHQAFAGABAKIABBsIACBtQAAALgGAGQgHAHgIABQgJABgIgEQgIgDgEgJQgEgEgCgGQgYg7gZgsIgMgVIAAA+IACA+QAAAHgDAGQgDAFgFADQgEADgGABIgFABIgGgBg");
	this.shape_35.setTransform(101.0625,-5.6271);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAmB/QgIgIABgKQABgZAAgcIggAAIgeAAIgBAzQAAAJgGAHQgFAGgIACQgIABgHgBQgIgCgFgGQgFgHAAgJIAAgpIABgwIACgnQAEhAAggcQAWgUAbAAQAdgBAUAWQAPARAFAdIAIA8QAFA4gEA7QgBAHgDAGQgDAGgGADQgGAEgHAAQgLAAgIgIgAADhRQgcAEgDA9IgBAUIA7gBIgCgUQgDgjgEgOQgFgQgKAAIgDABg");
	this.shape_36.setTransform(81.5971,-5.4522);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAVCJQgKgGgDgKIgDgJQgDgIgEgGQgHgIgIgHIgJgGIAAASIAAARQABAKgGAGQgFAHgIABQgHACgIgCQgIgBgFgHQgGgHAAgJIgChsIgChrIABgIIABgDIAAAAIAAAAQACgFADgEIAAAAIACgCQAFgFAGgBIAYgGQALgCANAAQANgBALACQANADAKAHQAdAQAMAiQANAigGAiQgDASgLAQQgLAQgRAIIgMAGQAYAXAHAeQADALgFAJQgFAJgLADIgHABQgGAAgGgDgAgdhWIACBfIACAAIACAAIACgBIAMAAIAFAAIACAAIAJgCIAEgCIAAABIAGgEIACgBIABAAIABgCIACgCIABgBIAEgGIABgDIACgHIAAgBIAAgBIAAgDIAAgDIAAgIIAAgDIgEgPIgCgFIgBgDIgEgHIgCgCIABAAIgCgCIgCgCIgCgDIgDgDIgBAAIACABIgBAAIgDgCIgEgCIgBAAIgDgCIgCAAIgBgBIgFAAQgJAAgLACg");
	this.shape_37.setTransform(63.2447,-5.6962);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCCGQgGgBgFgDQgEgDgEgFQgCgGAAgHIgChtIgChsQAAgKAFgGQAFgHAIgCQAIgBAGABQAIACAGAHQAFAGAAAKIACBsIACBtQAAAHgDAGQgCAFgFADQgFADgFABIgGABIgEgBg");
	this.shape_38.setTransform(49.5,-5.6125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgECGQgIgCgFgGQgGgHAAgJIgChfIgBhfIgVABIgVAAQgLAAgHgHQgIgIAAgLQgBgLAIgHQAIgIALAAIAsgBIAxgBIAsAAQALAAAHAHQAIAIAAALQABAKgIAIQgIAIgLAAIgsABIADC+QAAAJgFAHQgFAGgIACIgHAAIgHAAg");
	this.shape_39.setTransform(36.175,-5.4125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag9CGQgFgBgFgDQgEgDgEgFQgDgGAAgHIgBhoIgChpIAAgJQAAgLAHgHQAIgGAJgBQAJAAAIAFQAIAGACAKQApA+AUAjIACACIACAEIABACIAAggIgBgkIgBggQAAgKAGgGQAFgHAHgCQAIgBAIABQAIACAFAHQAFAGABAKIABBsIACBtQAAALgGAGQgHAHgIABQgJABgIgEQgIgDgEgJQgEgEgCgGQgYg7gZgsIgMgVIAAA+IACA+QAAAHgDAGQgDAFgFADQgEADgGABIgFABIgGgBg");
	this.shape_40.setTransform(16.8625,-5.6271);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgtCHIgHgBQgHgCgHgFQgFgFgBgIIgBgGIAAgBIAAgBIgChqIgBhpIAAgBIAAgBIAAgGQACgLAJgGQAJgFAKACIBZABQALAAAHAHQAIAIAAALQABAKgIAIQgJAIgKAAIghgBIghAAIABBTIAgAAIAhAAQALAAAHAIQAHAHABALQAAAHgDAGQgEAGgGAEQgGADgHAAIghABIggAAIABAbIBIAAQALAAAHAIQAIAHAAALQAAAHgDAGQgDAGgHAEQgGAEgHAAg");
	this.shape_41.setTransform(-1.35,-5.6141);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgOCFQgegIgSgaQgFgJADgLQADgLAJgFQAJgGAKADQAKADAHAJQAFAIAJADQAIACAHgFQAGgEABgHQACgHgFgEIgFgDIgGgBIgGAAIgGgBQgPgDgNgIQgXgOgLgYQgLgWABgaQABgbAMgWQARgbAdgLQAdgKAdAPQASAIAKASQALARABATQACATgGATQgDALgJAFQgKAGgKgDQgKgDgGgKQgGgKAEgJIACgIIAAgCIABAAIAAgHIAAgCIAAgCIgBgCIAAgDIgCgEIAAgBIgCgCIgBgBIgBgCIgGgFIgFgCIAAAAIgDgBQgIAAgJAGQgKAIgFAQIAAABIAAACIAAABIgBAEIAAAJIAAABIAAACIABABIAAACIACAJIACADIABAEIADADIABACIABABIACACIABABIABABIABABIABABIACABIABAAIADABIAGACIAJABIAHABQAQADALAIQASANAGAVQAGAVgIAVQgIAUgSANQgTAMgTAAQgJAAgJgDg");
	this.shape_42.setTransform(-19.11,-5.4401);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgsCHIgIgBQgHgCgHgFQgFgFgBgIIgBgGIAAgBIABgBIgDhqIgBhpIAAgBIgBgBIABgGQACgLAJgGQAJgFAKACIBaABQAKAAAIAHQAHAIABALQAAAKgIAIQgJAIgJAAIgigBIgiAAIACBTIAgAAIAhAAQALAAAHAIQAIAHAAALQAAAHgEAGQgDAGgGAEQgGADgHAAIghABIggAAIABAbIBJAAQAKAAAIAIQAHAHAAALQAAAHgDAGQgEAGgGAEQgGAEgGAAg");
	this.shape_43.setTransform(-46.05,-5.6141);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOCFQgegIgSgaQgFgJADgLQADgLAJgFQAJgGAKADQAKADAHAJQAFAIAJADQAIACAHgFQAGgEABgHQACgHgFgEIgFgDIgGgBIgGAAIgGgBQgPgDgNgIQgXgOgLgYQgLgWABgaQABgbAMgWQARgbAdgLQAdgKAdAPQASAIAKASQALARABATQACATgGATQgDALgJAFQgKAGgKgDQgKgDgGgKQgGgKAEgJIACgIIAAgCIABAAIAAgHIAAgCIAAgCIgBgCIAAgDIgCgEIAAgBIgCgCIgBgBIgBgCIgGgFIgFgCIAAAAIgDgBQgIAAgJAGQgKAIgFAQIAAABIAAACIAAABIgBAEIAAAJIAAABIAAACIABABIAAACIACAJIACADIABAEIADADIABACIABABIACACIABABIABABIABABIABABIACABIABAAIADABIAGACIAJABIAHABQAQADALAIQASANAGAVQAGAVgIAVQgIAUgSANQgTAMgTAAQgJAAgJgDg");
	this.shape_44.setTransform(-63.76,-5.4401);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbCLQgSgFgOgOQgXgXgJglQgJgmABgmQABgbAHgWQAGgVAQgTQAOgTAXgLIAFgCQAXgHATAFQAVAEAQAOQARANALATQALATAEAVQAJAkgHAoQgIAqgWAdQgaAjgfAHQgJACgHAAQgLAAgKgDgAgNhWQgIADgIAJQgIAKgEALQgHAWABAfQACAZAGAZQAHAZAMAKQALAKAOgJQAQgIALgVQAMgWADgbQADgagHgYQgFgXgQgOQgKgKgMAAQgGAAgHADg");
	this.shape_45.setTransform(-93.0776,-5.7237);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AA2CCQgIgHAAgMIAAibIgDAHQgHAUgPAIQgRAJgQgJQgRgJgJgTIgHgOIAAAGIAAAGIAACVQAAAKgFAHQgGAGgHACQgIABgIgBQgIgCgFgGQgFgHAAgKIAAhfIAAhfQAAgOACgKQACgKAHgHQAHgIALgDQALgDAKADQAIADAIAFQAHAGAGAIIAKAPIAIARIAAACIAAABQAIgTAMgQQAHgKAIgGQAIgGAMgDQALgDAKAGQAHAEAEAFIAHALQACAFABAIIABANIAAAOIAAANIAACqQAAAMgIAHQgIAHgKAAQgKAAgIgHgABChVIABAAIAAAAIAAgBIgBABgAAthbIABgDIgBADg");
	this.shape_46.setTransform(-115.225,-5.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbCLQgSgFgOgOQgXgXgJglQgJgmABgmQABgbAHgWQAGgVAQgTQAOgTAXgLIAFgCQAXgHATAFQAVAEAQAOQARANALATQALATAEAVQAJAkgHAoQgIAqgWAdQgaAjgfAHQgJACgHAAQgLAAgKgDgAgNhWQgIADgIAJQgIAKgEALQgHAWABAfQACAZAGAZQAHAZAMAKQALAKAOgJQAQgIALgVQAMgWADgbQADgagHgYQgFgXgQgOQgKgKgMAAQgGAAgHADg");
	this.shape_47.setTransform(-137.1276,-5.7237);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPB/QgSgHgNgRQgNgQgIgUQgGgUgEgUQgDgUACgSQAFg5AegfQAdgfAzgDQAKAAAIAIQAIAIAAALQAAAHgEAGQgEAGgFADQgGADgHABQglACgPAcQgSAiAJApIAEAQIAEAJIABACIAAABQAIAQAHAHIADADIAFACIAFABIACAAIAEAAQAFAAAFgDIABgBIACgCIABgBIACAAIAAgBQAIgHALAAQAKAAAIAHQAHAIABALQAAALgIAHQgTARgXAEIgPACQgPAAgPgHg");
	this.shape_48.setTransform(-155.95,-5.8291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25,p:{scaleX:1,scaleY:1,x:-3.475,y:0.025}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:-3.475,y:0.025}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:0.075,y:0.025}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25,p:{scaleX:1.0765,scaleY:1.0765,x:-3.9348,y:0.0394}},{t:this.shape_24,p:{scaleX:1.0765,scaleY:1.0765,x:-3.9348,y:0.0394}},{t:this.shape_23,p:{scaleX:1.0765,scaleY:1.0765,x:-0.048,y:0.0488}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-94.6,417,189.3);


(lib.recreacion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3B8IgJgEQgEgCgDgFQgDgFAAgHIgDjCQgBgEABgEQAAgLAGgGQAHgGAJAAQAIgBAIAFQAHAGACAJQAhAzAWAnIABACIADAGIgCheQAAgIAGgHQAEgGAHgBQAGgCAIACQAHABAFAGQAFAHAAAIIAEDKQAAAKgHAGQgGAHgHAAQgHACgJgEQgHgEgDgHQgEgFgCgFQgXg4gVgoIgLgTIABBzQAAAHgCAFQgCAFgFACQgDADgGABIgFABIgFgBg");
	this.shape.setTransform(77.55,26.4548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYCBQgQgEgNgNQgWgWgHgiQgJgkACgjQAAgYAHgVQAGgUANgRQANgSAVgKIAFgCQAVgHARAFQATAEAPANQAOALALATQAKATAEASQAHAigGAlQgGAmgVAcQgYAggcAHQgIABgGAAQgJAAgKgDgAgLhQQgIADgHAJQgHAJgDAKQgHAVABAdQABAXAGAWQAGAYALAJQALAJAMgHQAPgJAJgTQAMgUACgZQADgZgGgVQgFgWgPgNQgJgJgLAAQgFAAgGACg");
	this.shape_1.setTransform(58.8396,26.3462);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCB8QgGgBgEgDQgEgCgDgFQgCgFAAgHIgDjKQAAgIAEgHQAFgGAHgBQAGgCAHACQAHABAFAGQAFAHAAAIIADDKQABAHgDAFQgDAFgEACIgJAEIgFABIgEgBg");
	this.shape_2.setTransform(45.35,26.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOB2QgPgHgMgPQgNgPgGgTQgGgQgDgVQgDgUACgPQAEg1AbgdQAagcAugDQAKAAAHAHQAHAIAAAJQAAAHgDAFQgDAFgGAEQgFADgHAAQghADgNAZQgQAgAIAmIAEAPIACAIIABADIABAAQAHAQAGAGIADACIAEACIAFABIAFAAQAFAAAFgDIABgBIABgBIABgBIABAAIABgBQAIgHAJAAQAJAAAHAHQAHAHAAAKQAAAKgHAHQgQAQgWAEIgOABQgNAAgOgGg");
	this.shape_3.setTransform(34.3469,26.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAiB2QgHgHABgKQABgaAAgXIg4AAIgBAvQAAAIgFAHQgFAGgHACQgIABgGgBQgHgCgFgGQgFgGAAgJIADh2QAEg8AdgaQAUgSAZgBQAZAAATAUQAOAQAEAbQADASAEAlQAEA1gDA2IgDAMQgDAGgGADQgFADgHAAQgJAAgIgHgAADhLQgaADgDA6IAAASIA1gBIgBgTQgEgdgDgQQgEgPgJAAIgDABg");
	this.shape_4.setTransform(17.96,26.5994);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoB9IgHgBQgGgBgGgFQgFgFgBgIIgBgFIAAgBIAAgBIgDjEIAAgBIAAgBIAAgFQACgKAIgFQAIgFAJABIBRABQAKAAAHAHQAGAHABAKQAAAKgHAHQgIAIgJAAIg8gBIABBNIA7AAQAJAAAHAHQAGAHABAKQAAAHgDAFQgDAFgGAEQgFADgGAAIg6ABIAAAZIBBAAQAKAAAHAHQAHAHAAAKQABAHgEAFQgDAGgGADQgFAEgHAAg");
	this.shape_5.setTransform(1.86,26.4577);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATB/QgKgFgCgKIgCgHQgDgIgEgGQgHgIgGgFIgJgGIABAhQAAAJgFAFQgFAGgHACQgGABgIgBQgGgCgGgGQgFgGAAgIIgDjJIAAgHIABgCIAAgBIAFgIIAAAAIACgCQAFgFAFAAIAWgGIAVgCQANgBAJADQAKACALAGQAaAQALAfQAMAfgFAgQgDAQgKAPQgKAPgQAIIgLAFQAWAWAHAcQACAKgEAIQgFAIgKADIgGACQgGAAgFgEgAgahPIABBXIAXgBIAIgBIAFgDIgBABIAFgDIACgBIABAAQABgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAIABAAIADgGIABgDIACgGIAAgCIAAgDIAAgNIgFgSIgHgMIABAAIgCgBIgEgFIgCgCIgBgBIAAAAIgCgBIgDgCIgBAAIgDgBIgCgBIgFAAIgDAAQgIAAgHACg");
	this.shape_6.setTransform(-14.3636,26.3806);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOB2QgPgHgMgPQgNgPgGgTQgGgQgDgVQgDgUACgPQAEg1AbgdQAagcAugDQAKAAAHAHQAHAIAAAJQAAAHgDAFQgDAFgGAEQgFADgHAAQghADgNAZQgQAgAIAmIAEAPIACAIIABADIABAAQAHAQAGAGIADACIAEACIAFABIAFAAQAFAAAFgDIABgBIABgBIABgBIABAAIABgBQAIgHAJAAQAJAAAHAHQAGAGABALQAAAKgHAHQgQAQgWAEIgOABQgNAAgOgGg");
	this.shape_7.setTransform(-30.3531,26.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoB9IgHgBQgGgBgGgFQgGgGAAgHIgBgFIgDjHIAAgBIABgFQABgLAIgEQAIgFAKABIBQABQAKAAAHAHQAHAHAAAKQAAAJgHAIQgHAIgKAAIg8gBIABBNIA7AAQAJAAAHAHQAHAIAAAJQABAHgEAFQgCAFgGAEQgFADgHAAIg6ABIAAAZIBCAAQAJAAAHAHQAGAGABALQAAAHgDAFQgDAGgGADQgFAEgGAAg");
	this.shape_8.setTransform(-45.625,26.4577);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATB/QgKgFgCgKIgCgHQgDgIgEgGQgGgHgHgGIgJgGIABAhQAAAJgFAFQgFAGgHACQgGABgIgBQgHgCgEgGQgFgFgBgJIgDjJQgBgDABgEIABgCIABgBQABgFADgDIAAAAIACgCQAFgEAFgBIAWgGIAWgCQAMgBAJADQALACAKAGQAaAQALAfQAMAfgFAgQgDARgKAOQgLAPgPAIIgKAFQAWAWAGAcQACAJgEAJQgEAIgKADIgHACQgGAAgFgEgAgahPIABBXIAGAAIASgBIAHgBIALgGIABAAIADgEIABAAIADgGIABgDIACgIIAAgQIgDgOIgJgQIABAAIgBgBIgEgFIgEgDIACACIgHgFIgBAAIgCgBIgDgBIgFAAIgDAAQgIAAgHACg");
	this.shape_9.setTransform(-61.8636,26.3806);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAiB2QgHgIABgJQABgaAAgXIg4AAIgBAvQAAAIgFAHQgFAGgHACQgIABgGgBQgHgCgFgGQgFgGAAgJIADh2QAEg8AdgaQAUgSAZgBQAZAAATAUQAOAQAEAbQADASAEAlQAEA1gDA2QgBAHgCAFQgDAGgGADQgFADgHAAQgJAAgIgHgAADhLQgaAEgDA5IAAASIA1gBIgBgTQgEgdgDgQQgEgPgJAAIgDABg");
	this.shape_10.setTransform(130.86,-16.6006);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfB9QgIAAgIgHQgGgHgBgKIgDjKQAAgJAEgGQAGgGAGgCQAHgBAHABQAHACAFAGQAEAFABAKIADCyIArAAQAIAAAHAFQAFAEACAIQABAHgBAHQgCAIgGAEQgFAFgJAAg");
	this.shape_11.setTransform(116.5875,-16.8875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag3B8QgFgBgEgDQgEgCgDgFQgCgEgBgIIgDjCQgBgEABgEQAAgLAHgGQAGgGAJAAQAIgBAIAFQAHAFACAKQAoA/APAbIAFAIIgCheQAAgJAEgGQAGgGAGgBQAIgCAGACQAHABAFAGQAFAGABAJIACDKQABAKgHAGQgFAHgIAAQgHACgIgEQgIgEgDgHQgEgFgCgFQgWg4gWgoIgLgTIABBzQAAAIgCAEQgCAFgFACIgJAEIgFABIgFgBg");
	this.shape_12.setTransform(91.25,-16.7452);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoB9IgHgBQgGgBgGgFQgGgGAAgHIgBgFIgDjHIAAgBIABgFQABgLAIgEQAIgFAKABIBQABQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAIgKAAIg8gBIABBNIA7AAQAJAAAHAHQAHAIAAAJQABAGgEAGQgDAFgFAEQgFADgHAAIg6ABIAAAZIBCAAQAJAAAHAHQAGAGABALQAAAHgDAFQgDAGgGADQgFAEgGAAg");
	this.shape_13.setTransform(74.725,-16.7423);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiB2QgHgHABgKQABgaAAgXIg5AAIAAAvQAAAIgFAHQgFAGgHACQgIABgGgBQgHgCgFgGQgFgGAAgJIADh2QADg7AegbQAUgSAZgBQAZAAATAUQAOAQAEAbQADASAEAlQAEA1gDA2QAAAGgEAGQgDAGgFADQgFADgHAAQgJAAgIgHgAADhLQgaADgDA6IAAASIA1gBIgBgTQgEgdgDgQQgEgPgJAAIgDABg");
	this.shape_14.setTransform(48.66,-16.6006);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCB8QgGgBgDgDQgEgCgDgFQgDgFAAgHIgDjKQAAgJAFgGQAEgGAHgBQAHgCAGACQAHABAFAGQAFAHAAAIIADDKQAAAIgCAEQgDAFgEACIgJAEIgFABIgEgBg");
	this.shape_15.setTransform(36.325,-16.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOB2QgQgHgMgPQgLgPgHgTQgGgSgDgTQgDgTABgQQAFg1AbgdQAagcAugDQAKAAAHAHQAHAIAAAJQAAAGgDAGQgEAGgFADQgFADgHAAQghADgNAZQgQAgAIAmIADAPIADAIIABADIABAAQAGAPAHAHIADACIAEACIAFABIAFAAQAGgBADgCIADgCIABgBIABAAIABgBQAHgHAJAAQAJAAAIAHQAHAGAAALQAAAKgHAHQgQAQgWAEIgOABQgNAAgOgGg");
	this.shape_16.setTransform(25.3017,-16.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag3B8IgJgEQgFgCgCgFQgDgFAAgHIgDjCQgBgEABgEQAAgLAHgGQAGgGAJAAQAIgBAIAFQAHAGACAJQAhAzAWAnIABACIACADIABADIgBheQAAgJAFgGQAEgGAHgBQAHgCAHACQAHABAFAGQAFAHAAAIIADDKQAAALgFAFQgHAHgHAAQgHACgIgEQgIgEgDgHQgEgFgCgFQgWg4gWgoIgLgTIACBzQAAAHgDAFQgCAFgEACQgEADgGABIgFABIgFgBg");
	this.shape_17.setTransform(8.525,-16.7398);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAiB2QgHgHAAgKQACgagBgXIg4AAIAAAvQgBAJgFAGQgFAGgHACQgHABgHgBQgHgCgEgGQgFgGAAgJIABhSQAAgSACgSQADg7AegbQAUgSAYgBQAaAAATAUQANAPAFAcQAEAdACAaQAGA1gEA2QgBAHgDAFQgDAGgFADQgFADgHAAQgJAAgIgHgAAChLQgZAEgDA5IgBASIA2gBIgCgTQgEgjgDgKQgDgPgKAAIgDABg");
	this.shape_18.setTransform(-9.0908,-16.6006);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEB8QgGgBgGgGQgFgHAAgIIgDiwIgmABQgKAAgGgHQgGgHgCgKQAAgLAIgGQAGgIAKAAIB9gCQAIAAAIAHQAHAHAAALQAAAKgHAHQgIAHgIAAIgpABIADCwQAAAKgEAFQgEAGgIABIgHABIgGgBg");
	this.shape_19.setTransform(-25.1,-16.5625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASB/QgIgFgDgKIgCgHQgEgJgDgFQgGgHgIgGIgIgGIAAAhQABAJgFAFQgGAGgGACQgHABgHgBQgHgCgFgGQgEgFgBgJIgDjJIAAgHIABgCIAAgBIAFgIIAAAAIABgCQAGgFAEAAIAWgGIAWgCQANgBAJADQALACAKAGQAZAQAMAfQAMAggGAfQgCAQgLAPQgJAPgQAIIgLAFQAWAWAHAcQACAKgFAIQgEAIgKADIgGACQgGAAgGgEgAgahPIABBXIAVgBIACAAIAIgBIALgGIABAAIADgEIABAAIAEgJIABgGIABgCIAAgDIAAgDIAAgKIgEgOIgDgHIgGgKIgGgHIgCgBIADACIgIgFIgBAAIgCgBIgCgBIgFAAIgEAAQgHAAgHACg");
	this.shape_20.setTransform(-41.5944,-16.8194);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYCCQgQgFgNgNQgVgVgJgjQgIglACgiQABgZAFgUQAGgTAOgSQANgSAVgKIAFgCQAVgHARAFQATAEAPANQAOALALATQAKATAEASQAHAigGAlQgHAngUAbQgYAggcAHQgIABgGAAQgJAAgKgCgAgMhQQgHADgHAJQgHAJgDAKQgHAVABAdQABAZAGAUQAGAYALAJQAKAJANgHQAPgJAJgTQAMgUACgZQADgXgHgXQgFgWgOgNQgJgJgLAAQgFAAgHACg");
	this.shape_21.setTransform(-59.9609,-16.8615);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag2CAQgGgBgGgGQgFgGAAgJIgDjIIAAgHIABgDIAAAAIAFgIIAAgBIACgBQAFgFAEgBIAXgFIAVgDQANgBAJADQALACAKAHQAZAPAMAgQAMAggFAfQgDAMgEAJQgGAKgIAJQgIAJgKAFIgOAGIgIACIgHABIgHABIgIAAIgIABIgHAAIAAAwQABAJgFAGQgFAGgHABIgHABIgHgBgAgahOIABBYIAXgBIAIgCIAFgCIgBABIAHgEIABgBIADgDIABgBIADgGIABgCIABgHIABgBIAAgEIAAgCIAAgKIgFgTIgHgLIABAAIgCgCIgGgHIgCgBIADACIgHgEIgCAAIgCgCIgCAAIgFAAIgFgBQgHAAgGACg");
	this.shape_22.setTransform(-77.5742,-16.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAxB5QgIgGAAgMIAAiQIgCAGQgHAUgNAGQgPAJgPgIQgPgJgJgRIgGgNIAACWQAAAJgFAGQgFAGgHABQgEABgKgBQgGgBgGgGQgEgGAAgJIAAixQAAgNABgJQADgJAGgIQAHgHAJgCQAJgDAKADQAIACAHAFQAHAGAFAHIAQAdIAAACIAAACQAHgRALgQQAHgKAHgFQAIgGAJgCQALgCAJAFIAKAIIAGAKQACAFABAHIABAMIAAC3QAAAMgIAGQgHAGgJAAQgJAAgHgGg");
	this.shape_23.setTransform(-96.525,-17.0536);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCB8QgGgBgEgDQgDgCgDgFQgDgFAAgHIgDjKQAAgIAEgHQAFgGAHgBQAGgCAHACQAHABAFAGQAFAHAAAIIAEDKQAAAHgDAFQgDAFgEACIgJAEIgFABIgEgBg");
	this.shape_24.setTransform(-110.5,-16.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7ADA7A").s().p("AqfKxQk2g6jvhnQjvhniDiGQiHiLgBiYQABiXCHiLQCDiGDvhnQDvhnE2g5QFBg7FeAAQFfAAFBA7QE2A5DvBnQDvBnCDCGQCHCLABCXQgBCYiHCLQiECGjuBnQjvBnk2A6QlBA6lfAAQleAAlBg6g");
	this.shape_25.setTransform(3.55,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FCFCFC").p("AdoK/QAABFgoAxQgoAxg5AAMg29AAAQg5AAgogxQgogxAAhFIAA19QAAhFAogxQAogxA5AAMA29AAAQA5AAAoAxQAoAxAABFg");
	this.shape_26.setTransform(0.025,0.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#56B220").s().p("A7eNmQg5AAgogxQgogxAAhFIAA19QAAhFAogxQAogxA5AAMA29AAAQA5AAAoAxQAoAxAABFIAAV9QAABFgoAxQgoAxg5AAg");
	this.shape_27.setTransform(0.025,0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATB/QgKgFgCgKIgCgHQgDgIgEgGQgGgHgHgGIgJgGIABAhQAAAJgFAFQgFAGgHACQgGABgIgBQgHgCgEgGQgFgFgBgJIgDjJQgBgDABgEIABgCIABgBQABgFADgDIAAAAIACgCQAFgEAFgBIAWgGIAWgCQAMgBAJADQALACAKAGQAaAQALAfQAMAfgFAgQgDARgKAOQgLAPgPAIIgKAFQAWAWAGAcQACAJgEAJQgEAIgKADIgHACQgGAAgFgEgAgahPIABBXIAYgBIAHgBIALgGIABAAIADgEIABAAIADgGIABgDIACgIIAAgQIgDgOIgJgQIABAAIgBgBIgEgFIgEgDIACACIgHgFIgBAAIgCgBIgDgBIgFAAIgDAAQgIAAgHACg");
	this.shape_28.setTransform(-70.5435,46.5483,1.1389,1.1389);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASB/QgIgFgDgKIgCgHQgEgJgDgFQgGgHgIgGIgIgGIAAAhQABAJgFAFQgGAGgGACQgHABgHgBQgHgCgFgGQgEgFgBgJIgDjJIAAgHIABgCIAAgBIAFgIIAAAAIABgCQAGgFAEAAIAWgGIAWgCQANgBAJADQALACAKAGQAZAQAMAfQAMAggGAfQgCAQgLAPQgJAPgQAIIgLAFQAWAWAHAcQACAKgFAIQgEAIgKADIgGACQgGAAgGgEgAgahPIABBXIAXgBIAIgBIALgGIABAAIADgEIABAAIAEgJIABgGIABgCIAAgDIAAgDIAAgKIgEgOIgDgHIgGgKIgGgHIgCgBIADACIgIgFIgBAAIgCgBIgCgBIgFAAIgEAAQgHAAgHACg");
	this.shape_29.setTransform(-47.4595,-2.6509,1.1389,1.1389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27,p:{scaleX:1,scaleY:1,x:0.025,y:0.025}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:0.025,y:0.025}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:3.55,y:0}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:-110.5,y:-16.725}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:-96.525,y:-17.0536}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:-77.5742,y:-16.975}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:-59.9609,y:-16.8615}},{t:this.shape_20},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:-25.1,y:-16.5625}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:-9.0908,y:-16.6006}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:8.525,y:-16.7398}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:25.3017,y:-16.925}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:36.325,y:-16.725}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:48.66,y:-16.6006}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:74.725,y:-16.7423}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:91.25,y:-16.7452}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:116.5875,y:-16.8875}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:130.86,y:-16.6006}},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:-45.625,y:26.4577}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:-30.3531,y:26.275}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-14.3636,y:26.3806}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:1.86,y:26.4577}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:17.96,y:26.5994}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:34.3469,y:26.275}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:45.35,y:26.475}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:58.8396,y:26.3462}},{t:this.shape,p:{scaleX:1,scaleY:1,x:77.55,y:26.4548}}]}).to({state:[{t:this.shape_27,p:{scaleX:1.1388,scaleY:1.1388,x:-0.1467,y:16.5513}},{t:this.shape_26,p:{scaleX:1.1388,scaleY:1.1388,x:-0.1467,y:16.5513}},{t:this.shape_25,p:{scaleX:1.1389,scaleY:1.1389,x:3.9541,y:16.5043}},{t:this.shape_24,p:{scaleX:1.1389,scaleY:1.1389,x:-125.934,y:-2.5433}},{t:this.shape_23,p:{scaleX:1.1389,scaleY:1.1389,x:-110.0183,y:-2.9175}},{t:this.shape_22,p:{scaleX:1.1389,scaleY:1.1389,x:-88.4359,y:-2.828}},{t:this.shape_21,p:{scaleX:1.1389,scaleY:1.1389,x:-68.3766,y:-2.6988}},{t:this.shape_29},{t:this.shape_19,p:{scaleX:1.1389,scaleY:1.1389,x:-28.6745,y:-2.3583}},{t:this.shape_18,p:{scaleX:1.1389,scaleY:1.1389,x:-10.4421,y:-2.4017}},{t:this.shape_17,p:{scaleX:1.1389,scaleY:1.1389,x:9.62,y:-2.5602}},{t:this.shape_16,p:{scaleX:1.1389,scaleY:1.1389,x:28.7264,y:-2.7711}},{t:this.shape_15,p:{scaleX:1.1389,scaleY:1.1389,x:41.2806,y:-2.5433}},{t:this.shape_14,p:{scaleX:1.1389,scaleY:1.1389,x:55.3285,y:-2.4017}},{t:this.shape_13,p:{scaleX:1.1389,scaleY:1.1389,x:85.0132,y:-2.563}},{t:this.shape_12,p:{scaleX:1.1389,scaleY:1.1389,x:103.833,y:-2.5663}},{t:this.shape_11,p:{scaleX:1.1389,scaleY:1.1389,x:132.6892,y:-2.7284}},{t:this.shape_10,p:{scaleX:1.1389,scaleY:1.1389,x:148.9437,y:-2.4017}},{t:this.shape_28},{t:this.shape_8,p:{scaleX:1.1389,scaleY:1.1389,x:-52.0498,y:46.6362}},{t:this.shape_7,p:{scaleX:1.1389,scaleY:1.1389,x:-34.6571,y:46.4281}},{t:this.shape_6,p:{scaleX:1.1389,scaleY:1.1389,x:-16.4471,y:46.5483}},{t:this.shape_5,p:{scaleX:1.1389,scaleY:1.1389,x:2.0294,y:46.6362}},{t:this.shape_4,p:{scaleX:1.1389,scaleY:1.1389,x:20.3652,y:46.7975}},{t:this.shape_3,p:{scaleX:1.1389,scaleY:1.1389,x:39.0278,y:46.4281}},{t:this.shape_2,p:{scaleX:1.1389,scaleY:1.1389,x:51.5589,y:46.6559}},{t:this.shape_1,p:{scaleX:1.1389,scaleY:1.1389,x:66.9218,y:46.5091}},{t:this.shape,p:{scaleX:1.1389,scaleY:1.1389,x:88.2305,y:46.6329}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-87.9,433.9,204.5);


(lib.juegos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNCCQgbgIgQgaQgFgJADgKQACgLAIgEQAJgGAJADQAJACAGAKQAGAIAIACQAGACAHgEQAFgFACgGQABgHgEgEIgFgDIgGgBIgKgBQgOgCgMgJQgVgOgKgXQgKgWABgZQAAgZAMgXQAPgbAbgKQAagKAaAOQARAJAKARQAKASAAARQACAUgFASQgDAKgJAFQgIAGgKgDQgJgDgFgKQgFgJADgKIACgIIAAgBIAAgLIAAgCIAAgCIgCgEIgCgFIgCgCIgFgEIgFgDIAAAAIgDAAQgHgBgIAGQgJAIgEAQIgBAIIAAAJIAAACIAAACIAAABIADAKIACAGIADADIAAACIACABIABACIABABIABABIABABIABABIABABIACAAIACABIAOADIAHABQAOADAKAHQARAOAFAUQAFAVgHAUQgHAUgRAMQgRAMgRAAQgIAAgJgDg");
	this.shape.setTransform(141.9411,1.3139);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYCIQgRgFgNgNQgVgXgIglQgIgjABgnQABgbAGgUQAGgWAOgSQANgSAVgLIAFgCQAUgHASAEQATAFAPANQAPANAKATQAKASAEAVQAIAkgHAnQgHApgTAcQgYAigdAHQgIACgHAAQgJAAgJgDgAgMhVQgHADgIAKQgHAKgDAKQgHAWACAeQAAAYAHAZQAHAaAKAIQAKAKANgIQAPgKAJgUQALgUADgbQADgagGgXQgFgWgPgPQgJgJgLAAQgFAAgHACg");
	this.shape_1.setTransform(124.4391,1.0169);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATCGQgJgGgDgKIgCgIIgHgOQgHgJgHgGIgIgGIAAAjQABAJgFAHQgGAGgGACQgHABgHgBQgGgCgGgGQgFgIAAgIIgEjTIABgIIAAgCIABgBIAEgIIAAgBIACgBQAFgFAFgBIAWgGIAWgDQANgBAJADQAKACALAHQAaARAMAhQALAjgFAfQgCARgLAQQgKAQgQAIIgLAGQAWAXAHAdQACAKgEAJQgFAJgKADIgGACQgGAAgFgEgAgbhUIACBdIAEAAIACgBIAKAAIAFgBIACAAIAIgBIAFgDIAEgCIACgBIABAAIADgEIABgBIADgGIABgDIACgIIAAgRIgFgUIgHgMIABAAIgCgBIgBgDIgFgFIgBgBIgCgBIgDgCQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBIgFgCIgEAAIgDAAQgGAAgKACg");
	this.shape_2.setTransform(106.514,1.052);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATCGQgJgFgDgKIgCgJQgDgHgEgHQgGgIgHgGIgJgGIAAAiQABAKgFAGQgFAHgHABQgHACgHgCQgGgBgGgHQgFgHAAgJIgDjTIAAgHIABgDIAAgBQACgFADgDIAAAAIABgCQAFgFAFgBIAWgGIAWgCQANgBAJADQAKACALAHQAaAQAMAhQAMAhgGAiQgDARgKAQQgKAQgPAIIgLAFQAWAYAGAdQADAKgFAJQgFAJgJADIgHABQgGAAgFgEgAgahTIABBcIAEAAIACAAIAKgBIAFAAIACAAIAIgCIAEgCIAFgDIACgBIABAAIADgEIABAAIADgGIABgDIACgHIAAgCIAAgRIgDgOIgCgFIgHgMIABAAIgFgHIgDgCIgBgBIACACIgEgDIgDgCIgBAAIgGgCIgEAAIgDAAQgHAAgIACg");
	this.shape_3.setTransform(89.6989,1.0404);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpCEIgGgBQgHgBgGgGQgFgFgBgIIAAgFIgDjSIgBgBIABgGQACgLAIgFQAIgFAJACIBRAAQALAAAGAIQAGAHABALQABAKgIAIQgHAIgKAAIg8gBIABBRIA7AAQAKAAAHAIQAHAIAAAJQAAAHgDAGQgEAHgFADQgFADgHAAIg6ABIAAAbIBCAAQAKAAAGAHQAHAHABALQAAAHgDAGQgEAFgFAEQgGAEgGAAg");
	this.shape_4.setTransform(73.375,1.1233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag2CHQgGgBgGgHQgFgFgBgLIgDjSIABgIIAAgCIABgBIAEgIIAAgBIACgBQAFgGAFAAIAWgHIAWgCQANgBAJADQAIABANAIQAaAQAMAiQALAhgFAhQgCAKgFAMQgFALgIAJQgHAJgMAGIgHAEIgHACIgIACIgOADIgXABIAAAyQAAALgEAFQgGAHgGABIgHABIgHgBgAgbhSIACBcIAGAAIAKgBIAFAAIACAAIAIgBIAFgDIAEgDIACgBIABgBQACgCABAAIABgBIADgGIABgDIACgHIAAgBIAAgEIAAgNQgBgIgDgHIgBgFIgHgMIABAAIgCgCIgEgFIgCgCIgCgBIgBgBIgEgCQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgEgBIgBAAIAAgBIgEAAIgCAAQgHAAgKACgAAIhOIgBgBIADACg");
	this.shape_5.setTransform(57.2031,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjB8QgIgHABgLIABg0Ig5ABIAAAyQgBAJgFAGQgFAHgHABQgGACgIgCQgGgBgFgHQgFgHAAgIIABhXQAAgTACgTQADg/AegcQAUgTAZgBQAZAAATAVQAOARAFAcIAGA7QAFA3gDA5QgBAIgDAFQgDAGgFADQgFAEgHAAQgKAAgHgIgAADhQQgaAFgDA8IAAATIA1gBIgBgUQgDgggEgQQgEgPgJAAIgDAAg");
	this.shape_6.setTransform(30.46,1.2744);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATCGQgIgFgEgKIgCgJQgDgHgEgHQgGgIgHgGIgJgGIABAiQAAALgFAFQgFAHgHABQgHACgHgCQgHgBgFgHQgEgGgBgKIgDjTIAAgHIABgEQABgFAEgDIAAAAIABgCQAFgFAFgBIAXgGIAWgCQAMgBAJADQAKACALAHQAbAQALAhQAMAhgGAiQgDARgKAQQgKAQgPAIIgLAFQAWAYAGAdQADAKgFAJQgFAJgJADIgHABQgGAAgFgEgAgahTIABBcIAEAAIACAAIAKgBIAFAAIACAAIAIgCIAEgCIAFgDIACgBIABAAIADgEIABAAIADgGIABgDIACgHIAAgCIAAgDIABgDIgBgLIgDgOIgDgIIgEgHIgBgCIgFgHIgDgCIgBgBIACACIgEgDIgDgCQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgBIgDgBIgBAAIgEAAIgCAAQgHAAgJACg");
	this.shape_7.setTransform(13.7489,1.0404);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAjB8QgIgHABgLQABgbAAgZIg5ABIAAAyQgBAJgFAGQgGAHgGABQgHACgHgCQgGgBgFgHQgFgGAAgJIADh9QADg/AegcQATgTAagBQAZAAATAVQAOAQAEAdQAEAUADAnQAFA3gDA5QgBAHgDAGQgDAGgFADQgFAEgHAAQgKAAgHgIgAADhQQgaAFgDA8IgBATIA2gBIgBgUQgEglgDgLQgEgPgJAAIgDAAg");
	this.shape_8.setTransform(-3.69,1.2744);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2CHQgHgBgFgHQgFgFgBgLIgDjSIABgIIAAgCIABgBIAEgIIAAgBIACgBQAFgGAFAAIAWgHIAWgCQANgBAJADQAJACAMAHQAaAQALAiQAMAggFAiQgCALgFALQgGAMgHAIQgHAJgMAGIgHAEIgHACIgIACIgHACIgfACIABAyQAAALgEAFQgGAHgGABIgHABIgHgBgAgbhSIACBcIAGAAIAKgBIAFAAIACAAIAIgBIAEgCIAFgEIACgBIABgBIADgCIABgBIADgGIABgDIABgHIABgBIAAgEIAAgNIgFgUIgHgMIABAAIgCgCIgEgFIgCgCIgCgBIADACIgEgDIgEgCQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgBAAIAAgBIgEAAIgCAAQgHAAgKACg");
	this.shape_9.setTransform(-20.2469,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNCCQgcgIgPgaQgFgHACgMQADgLAIgEQAIgGAKADQAJADAGAJQAFAHAIADQAHACAHgEQAFgEABgHQACgHgFgEIgEgDIgGgBIgKgBQgOgCgMgJQgUgNgLgYQgKgVABgaQABgbALgVQAPgbAbgKQAagKAaAOQARAJAJARQAKAQABATQACARgFAVQgEAKgIAFQgJAGgJgDQgJgDgFgKQgGgJAEgKIACgIIAAgBIAAgLIgBgEIgBgEIgEgHIgFgEIgFgDIAAAAIgDAAQgHgBgIAGQgJAIgEAQIgBAEIAAAEIAAAJIAAAFIACAKIABACIAEAHIABACIABABIACACIAEAEIADABIACABIAGACIAPACQAOADAKAHQAQANAGAVQAFAVgHAUQgHATgRANQgRAMgSAAQgIAAgIgDg");
	this.shape_10.setTransform(-46.2089,1.3262);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYCIQgSgFgMgNQgVgWgIgmQgJglACglQABgZAGgWQAGgWANgSQAOgTAVgKIAEgCQAVgHASAEQATAFAPANQAPANAKATQAKATAEAUQAIAigHApQgGAogVAdQgYAigcAHQgIACgGAAQgKAAgJgDgAgMhVQgHADgIAKQgHAKgDAKQgHAUABAgQACAbAFAWQAHAZALAJQAKAKAMgIQAPgJAKgVQAMgWACgZQADgYgHgZQgFgWgOgPQgJgJgLAAQgFAAgHACg");
	this.shape_11.setTransform(-63.7406,1.0169);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcB6QgTgJgMgSQgSgcgFgyQgBgSACgWQADgWAHgSQAHgUANgPQANgQASgIQATgIASAAQATgBATAKQASAKAGASQAHARgEAXQgCAJgJAGQgJAFgJgDQgIgCgFgJQgFgJACgKIAAgIIAAgCIgBgBQgDgDgJgCQgLgCgLAEQgJAEgIAIQgMANgGAeIgDAWQAZgOAYADQALABAIAEQAJADAJAFQAJAFAGAIQAHAHAFAKQAHAPgBASQAAATgKAOQgJAQgSAJQgRAKgUABIgFAAQgQAAgQgJgAACAhQgHABgIAEQgKAFgGAFQAFAOAGAJQAFAHAJADQAIADAIgBQAIgBAIgGIAEgEIAEgGIABgFIAAgFIAAgCQgDgHgCgCQgGgHgIgDQgHgCgFAAIgEAAg");
	this.shape_12.setTransform(-82.7222,1.0585);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpCEIgHgBQgGgBgGgGQgFgEgBgJIgBgFIAAgBIABgBIgDjPIgBgBIAAgBIABgGQABgLAIgFQAJgFAJACIBRAAQAKAAAHAIQAHAHAAALQAAALgHAHQgHAIgKAAIg8gBIABBRIA7AAQAJAAAHAIQAHAHABAKQAAAHgDAGQgEAHgFADQgFADgHAAIg7ABIABAbIBCAAQAKAAAGAHQAHAHAAALQABAHgEAGQgDAFgGAEQgFAEgGAAg");
	this.shape_13.setTransform(-99.1969,1.1233);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AguBxQgSgQgGgZQgGgaAAggIABh4QAAgJAFgHQAFgHAHgBIAOAAQAHABAFAHQAFAHgBAJIAACBQAAAgAIAOQAEAGAGADQAGADAFgBQAHgCAGgGQAFgGADgHQADgHABgKIACgSIACiCQAAgIAFgIQAFgGAHgBQAHgCAHACQAHABAFAGQAEAHAAAJIgBB2QAAAhgHAYQgHAYgSASQgUATgYABIgDAAQgXAAgUgSg");
	this.shape_14.setTransform(-116.225,1.215);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRCCQgLgDgJgHQgJgIgFgLQgDgHgCgIIgBgeQAAgJAFgHQAFgHAGgBQAIgBAHABQAHABAFAHQAEAGAAAKIAAARIABAFIADACIACAAIABABIACAAQADAAABgCIADgBIACgCIABgBIACgLIgEirQAAgJAFgHQAFgGAGgBQAHgCAIACQAGABAFAGQAFAHABAJIADCcQAAAJAAAMQgBAKgDALQgFAPgLAKQgMAKgOAEIgNACQgIAAgIgCg");
	this.shape_15.setTransform(-131.95,1.1567);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7ADA7A").s().p("AqfKwQk2g4jvhoQjvhniDiGQiIiLAAiYQAAiWCIiLQCDiHDvhnQDvhnE2g5QFBg6FegBQFfABFBA6QE2A5DvBnQDvBnCDCHQCHCLAACWQAACYiHCLQiDCGjvBnQjvBok2A4QlBA6lfAAQleAAlBg6g");
	this.shape_16.setTransform(3.55,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FCFCFC").p("AdoK/QAABFgoAxQgoAxg5AAMg29AAAQg5AAgogxQgogxAAhFIAA19QAAhFAogxQAogxA5AAMA29AAAQA5AAAoAxQAoAxAABFg");
	this.shape_17.setTransform(0.025,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#56B220").s().p("A7eNmQg5AAgogyQgogwAAhGIAA18QAAhEAogxQAogyA5AAMA29AAAQA5AAAoAyQAoAxAABEIAAV8QAABGgoAwQgoAyg5AAg");
	this.shape_18.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18,p:{scaleX:1,scaleY:1,x:0.025,y:0}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:0.025,y:0}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:3.55,y:0}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:-131.95,y:1.1567}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:-116.225,y:1.215}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:-99.1969,y:1.1233}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:-82.7222,y:1.0585}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:-63.7406,y:1.0169}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:-46.2089,y:1.3262}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:-20.2469,y:0.9}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:-3.69,y:1.2744}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:13.7489,y:1.0404}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:30.46,y:1.2744}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:57.2031,y:0.9}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:73.375,y:1.1233}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:89.6989,y:1.0404}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:106.514,y:1.052}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:124.4391,y:1.0169}},{t:this.shape,p:{scaleX:1,scaleY:1,x:141.9411,y:1.3139}}]}).to({state:[{t:this.shape_18,p:{scaleX:1.0832,scaleY:1.0832,x:-0.1455,y:-0.013}},{t:this.shape_17,p:{scaleX:1.0832,scaleY:1.0832,x:-0.1455,y:-0.013}},{t:this.shape_16,p:{scaleX:1.0832,scaleY:1.0832,x:3.7378,y:-0.0155}},{t:this.shape_15,p:{scaleX:1.0832,scaleY:1.0832,x:-143.0408,y:1.0375}},{t:this.shape_14,p:{scaleX:1.0832,scaleY:1.0832,x:-126.0069,y:1.1006}},{t:this.shape_13,p:{scaleX:1.0832,scaleY:1.0832,x:-107.5614,y:1.0013}},{t:this.shape_12,p:{scaleX:1.0832,scaleY:1.0832,x:-89.7155,y:0.9311}},{t:this.shape_11,p:{scaleX:1.0832,scaleY:1.0832,x:-69.1538,y:0.886}},{t:this.shape_10,p:{scaleX:1.0832,scaleY:1.0832,x:-50.1629,y:1.221}},{t:this.shape_9,p:{scaleX:1.0832,scaleY:1.0832,x:-22.0399,y:0.7594}},{t:this.shape_8,p:{scaleX:1.0832,scaleY:1.0832,x:-4.1049,y:1.165}},{t:this.shape_7,p:{scaleX:1.0832,scaleY:1.0832,x:14.7856,y:0.9115}},{t:this.shape_6,p:{scaleX:1.0832,scaleY:1.0832,x:32.8877,y:1.165}},{t:this.shape_5,p:{scaleX:1.0832,scaleY:1.0832,x:61.8568,y:0.7594}},{t:this.shape_4,p:{scaleX:1.0832,scaleY:1.0832,x:79.3748,y:1.0013}},{t:this.shape_3,p:{scaleX:1.0832,scaleY:1.0832,x:97.0575,y:0.9115}},{t:this.shape_2,p:{scaleX:1.0832,scaleY:1.0832,x:115.2721,y:0.924}},{t:this.shape_1,p:{scaleX:1.0832,scaleY:1.0832,x:134.6892,y:0.886}},{t:this.shape,p:{scaleX:1.0832,scaleY:1.0832,x:153.6481,y:1.2078}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-95.2,412.8,190.4);


(lib.fondo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AA/AAQAAASgTANQgSANgaAAQgZAAgSgNQgTgNAAgSQAAgSATgMQASgNAZAAQAaAAASANQATAMAAASg");
	this.shape.setTransform(382.95,839.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1AEAE").s().p("AgrAfQgTgNAAgSQAAgSATgMQASgNAZAAQAaAAASANQATAMAAASQAAASgTANQgSANgaAAQgZAAgSgNg");
	this.shape_1.setTransform(382.95,839.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("ABBAAQAAAZgTASQgTARgbAAQgaAAgTgRQgTgSAAgZQAAgXATgTQATgRAaAAQAbAAATARQATATAAAXg");
	this.shape_2.setTransform(159.95,879.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAD0D0").s().p("AgtAqQgUgRABgZQgBgYAUgSQATgRAaAAQAbAAATARQAUASgBAYQABAZgUARQgTASgbAAQgaAAgTgSg");
	this.shape_3.setTransform(159.95,879.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("ABEAAQAAAZgUASQgUARgcAAQgbAAgUgRQgTgSAAgZQAAgYATgSQAUgRAbAAQAcAAAUARQAUASAAAYg");
	this.shape_4.setTransform(389.7,828.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAD0D0").s().p("AgvArQgTgSgBgZQABgYATgSQAUgRAbAAQAcAAATARQAVASgBAYQABAZgVASQgTARgcAAQgbAAgUgRg");
	this.shape_5.setTransform(389.7,828.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("AAyAAQAAAVgPAQQgPAPgUAAQgUAAgPgPQgOgQAAgVQAAgVAOgPQAPgPAUAAQAUAAAPAPQAPAPAAAVg");
	this.shape_6.setTransform(371.9,828.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAD0D0").s().p("AgjAlQgOgQAAgVQAAgVAOgPQAPgPAUAAQAUAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgUAAQgUAAgPgPg");
	this.shape_7.setTransform(371.9,828.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("AA+AAQAAAUgSAOQgSAOgaAAQgZAAgSgOQgSgOAAgUQAAgSASgOQASgPAZAAQAaAAASAPQASAOAAASg");
	this.shape_8.setTransform(174.425,885.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C1AEAE").s().p("AgrAhQgSgNAAgUQAAgTASgNQASgOAZgBQAaABASAOQASANAAATQAAAUgSANQgSAPgaAAQgZAAgSgPg");
	this.shape_9.setTransform(174.425,885.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C1AEAE").s().p("AgDAAQAAgQADAAQAEAAAAAQQAAARgEAAQgDAAAAgRg");
	this.shape_10.setTransform(406,834.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AxXIDQhwgRhfg7Qi+h3Bbi/QgEAABVhqQAGgLABgNQACgbgcgPQhChDgRhaQgii0D3hqQAdgPA1gJQBqgSBoAkQBoAkBrBXQA1ArAhAlITrAAIC6iMIA1geQBEgiBGgNQDfgpCnCwQAAgHAUAmQAVApAGArQAVCIiDBhQACACgBAbQAFAeAbAHIAbAZQAeAgAPAnQAyB8hvCJQg/A9hmAhQjOBDjGiQQgEADiqh/IzwgLIi2CSQghAXgkASQhfAwhaAAQgUAAgTgCg");
	this.shape_11.setTransform(281.0282,845.2718);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AA9AAQAAATgSANQgRANgaAAQgYAAgSgNQgSgOAAgSQAAgSASgNQASgNAYAAQAaAAARANQASANAAASg");
	this.shape_12.setTransform(402,840.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAD0D0").s().p("AgqAgQgSgOAAgSQAAgSASgNQASgNAYAAQAaAAARANQASANAAASQAAATgSANQgRANgaAAQgYAAgSgNg");
	this.shape_13.setTransform(402,840.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AA5AAQAAAUgQAOQgRAOgYAAQgXAAgQgOQgRgOAAgUQAAgSARgOQAQgPAXAAQAYAAARAPQAQAOAAASg");
	this.shape_14.setTransform(174.425,873.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAD0D0").s().p("AgnAiQgRgOAAgUQAAgTARgOQAQgOAXABQAYgBARAOQAQAOAAATQAAAUgQAOQgRANgYAAQgXAAgQgNg");
	this.shape_15.setTransform(174.425,873.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AAcAAQAAAKgJAHQgIAHgLAAQgLAAgIgHQgIgHAAgKQAAgJAIgHQAIgHALAAQALAAAIAHQAJAHAAAJg");
	this.shape_16.setTransform(1426.15,500.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C1AEAE").s().p("AgSARQgJgHABgKQgBgJAJgHQAHgHALAAQALAAAIAHQAJAHgBAJQABAKgJAHQgIAHgLAAQgLAAgHgHg");
	this.shape_17.setTransform(1426.15,500.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("AAdAAQAAAOgIAJQgJAKgMAAQgLAAgIgKQgJgJAAgOQAAgMAJgKQAIgKALAAQAMAAAJAKQAIAKAAAMg");
	this.shape_18.setTransform(1327.6,521.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAD0D0").s().p("AgTAXQgJgJAAgOQAAgMAJgKQAIgKALAAQAMAAAIAKQAJAKAAAMQAAAOgJAJQgIAKgMAAQgLAAgIgKg");
	this.shape_19.setTransform(1327.6,521.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("AAeAAQAAAOgJAJQgJAKgMAAQgLAAgJgKQgJgJAAgOQAAgMAJgKQAJgKALAAQAMAAAJAKQAJAKAAAMg");
	this.shape_20.setTransform(1429.125,494.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAD0D0").s().p("AgUAXQgJgJAAgOQAAgMAJgKQAJgKALAAQAMAAAJAKQAJAKAAAMQAAAOgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_21.setTransform(1429.125,494.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("AAWAAQAAAMgHAIQgFAIgKAAQgIAAgGgIQgHgIAAgMQAAgKAHgJQAGgIAIAAQAKAAAFAIQAHAJAAAKg");
	this.shape_22.setTransform(1421.25,494.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAD0D0").s().p("AgOAUQgHgIAAgMQAAgKAHgJQAGgIAIAAQAKAAAFAIQAHAJAAAKQAAAMgHAIQgFAIgKAAQgIAAgGgIg");
	this.shape_23.setTransform(1421.25,494.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("AAcAAQAAALgIAHQgIAIgMAAQgLAAgIgIQgIgHAAgLQAAgKAIgHQAIgIALAAQAMAAAIAIQAIAHAAAKg");
	this.shape_24.setTransform(1334,525.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C1AEAE").s().p("AgTASQgIgHAAgLQAAgKAIgHQAJgIAKAAQAMAAAHAIQAJAHgBAKQABALgJAHQgHAIgMAAQgKAAgJgIg");
	this.shape_25.setTransform(1334,525.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C1AEAE").s().p("AgBAAQAAgJABAAQACAAAAAJQAAAJgCAAQgBAAAAgJg");
	this.shape_26.setTransform(1436.325,497.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AnqEYQgygJgqggQhUhBAohoQgBAAASgdIATgdQADgGAAgGQABgPgMgIQgegkgHgxQgPhiBtg6QgBABAlgOQAvgKAuAUQAuATAvAwQAYAXAOAUIIsAAIBThMIAXgRQAegSAfgHQBigXBKBgQAAgDAJAUQAJAWADAYQAJBKg6A1QABABAAAOQACAQAMAEIAMAOQANASAHAVQAWBDgxBKQgcAhgtATQhbAkhYhOQgBABhLhFIovgGIhFBFQgQARgaAQQgpAagoAAIgRgBg");
	this.shape_27.setTransform(1381.1207,503.6191);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AAbAAQAAAKgIAHQgIAHgLAAQgKAAgIgHQgIgHAAgKQAAgJAIgHQAIgHAKAAQALAAAIAHQAIAHAAAJg");
	this.shape_28.setTransform(1434.575,501.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAD0D0").s().p("AgSARQgIgHAAgKQAAgJAIgHQAIgHAKAAQALAAAIAHQAIAHAAAJQAAAKgIAHQgIAHgLAAQgKAAgIgHg");
	this.shape_29.setTransform(1434.575,501.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("AAZAAQAAALgHAHQgIAIgKAAQgJAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAJAAQAKAAAIAIQAHAHAAAKg");
	this.shape_30.setTransform(1334,518.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAD0D0").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_31.setTransform(1334,518.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("ABpBkQgdgPhLgQQhHgNgFgCQjCgvALgvQADgPAXgNQALgHAKgEQCOgmB8AhQA/ARAiAYIBlBQQgaAFgfAKQhAAVgbAbg");
	this.shape_32.setTransform(993.3777,840.0207);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4F45B").s().p("AAEBFQhGgNgFgCQjDgvALgvQADgPAXgNIAVgLQCPgmB8AhQA+ARAiAYIBmBQQgaAFggAKQg/AVgbAbQgdgPhMgQg");
	this.shape_33.setTransform(993.0456,840.0207);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").p("AEMAAQAAAnhPAcQhOAchvAAQhuAAhOgcQhPgcAAgnQAAgmBPgcQBOgcBuAAQBvAABOAcQBPAcAAAmg");
	this.shape_34.setTransform(1030.675,852.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCFCFC").s().p("Ai8BDQhPgcAAgnQAAgmBPgcQBOgcBuAAQBvAABOAcQBPAcAAAmQAAAnhPAcQhOAchvAAQhuAAhOgcg");
	this.shape_35.setTransform(1030.675,852.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").p("ACOAeQgbAVg2ARQhqAkiCgNQg9gPgVgZQgqgzDIgzIDQgqIApAUQA0AUA2AIg");
	this.shape_36.setTransform(996.0192,866.2877);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4F45B").s().p("AiqBbQg9gPgVgZQgqgzDHgzIDQgqIApAUQA0AUA3AIIhyBLQgcAVg2ARQhNAahbAAQghAAgigDg");
	this.shape_37.setTransform(995.5848,866.2992);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").p("Ah3BUQgQADgJACIgFABQgFABgCABIACgBQACgBADAAAh3BUIhIg9QgGgJgDgNQgIgZALgVQAihEDJAHQBNAEAsASQBaAjhYBMIgrA5QgkgEgwgCQhegFg7ALg");
	this.shape_38.setTransform(1030.669,835.2792);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F4F45B").s().p("AAiBZQhegEg7ALIhIg9QgGgJgDgNQgIgZALgWQAihDDJAHQBNAEAsARQBaAkhYBMIgrA5QgkgFgwgCg");
	this.shape_39.setTransform(1030.669,834.1171);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").p("AB1g3IApAIQAwALAeAMQBhAohyAsQgjALg8ACQh3AFh3gnIiahJIAwgJQA3gLAigSQDxANAHAEg");
	this.shape_40.setTransform(1067.0822,864.9496);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4F45B").s().p("Ah4AmIiahJIAxgIQA3gMAhgSQDyAOAGADIAqAIQAvALAfANQBgAnhxAtQgkAKg7ADIgbABQhpAAhrgkg");
	this.shape_41.setTransform(1067.6422,864.9531);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").p("AkMgbICegbIA4gGQBFgFA9AAQDCACAfA/QgCAUgqARQhVAjjGgHQAGgBkRgQIAYgVQAUgbgTgbg");
	this.shape_42.setTransform(1083.3154,852.6891);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4F45B").s().p("AgeBBQAGgBkQgQIAYgVQAUgbgTgbICegaIgCgBIA6gGQBFgFA9AAQDCACAeA/QgBAUgrARQhGAdiTAAIhCgBg");
	this.shape_43.setTransform(1083.675,852.6891);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").p("Aj/AQIAdgUQAmgZAugTQCUg9CyAQIAiAIQAlAMANAPQAnAwjdBAQABABhkATIhzAXQgHgJgWgMQgqgZhGgOg");
	this.shape_44.setTransform(1069.9817,840.0861);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F4F45B").s().p("AieBMQgrgZhGgOIAPgVIAcgUQAmgZAvgTQCTg9CzAQIAiAIQAlAMAMAPQAoAwjeBAQACABhkATIh0AXQgHgJgVgMg");
	this.shape_45.setTransform(1070.1489,840.0598);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").p("ACjg5IAYAXQAZAbAEAXQALBLjRAIIgBAAQhMAChBgRQiDggA5hVIBihCIA6AFQBEADA8gGg");
	this.shape_46.setTransform(1031.7264,871.4503);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4F45B").s().p("Ah8BUQiDggA5hVIBihCIA6AFQBEADA8gGIBNAoIAYAXQAZAbAEAXQALBLjRAIIgBAAIgNABQhEAAg8gQg");
	this.shape_47.setTransform(1031.7264,871.4563);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").p("ACDhGQhdgJhlAEQjLAIgsBDIABAMQAGAPAWANQBFAoDJgDIBegFQBjgGAWgFIBrgUIgEhNg");
	this.shape_48.setTransform(975.352,852.9274);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4F45B").s().p("AkZAoQgVgNgGgPIgCgMQAshDDLgIQBmgEBdAJICvAiIAEBNIhqAUQgWAFhkAGIhdAFIggAAQivAAhAglg");
	this.shape_49.setTransform(975.35,852.9274);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").p("AB1CFQgfgVhUgVQhOgRgFgCQjWg/ALg+QAEgTAZgSQAYgOgBAAQCdgzCJAsQBFAWAmAgIBvBpQgcAHgjAOQhGAcgeAkg");
	this.shape_50.setTransform(446.523,932.5811);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E8184E").s().p("AAFBbQhOgRgGgCQjWg/AMg+QAEgTAZgSQAYgOgBAAQCdgzCJAsQBFAWAlAgIBwBpQgdAHgjAOQhFAcgeAkQgggVhTgVg");
	this.shape_51.setTransform(446.2707,932.5811);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").p("AEnAAQAAA0hXAlQhVAkh7AAQh6AAhVgkQhXglAAg0QAAgzBXglQBVglB6AAQB7AABVAlQBXAlAAAzg");
	this.shape_52.setTransform(487.75,948.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E1F4EA").s().p("AjQBZQhWglAAg0QAAgzBWglQBXglB5AAQB6AABXAlQBWAlAAAzQAAA0hWAlQhXAkh6AAQh5AAhXgkg");
	this.shape_53.setTransform(487.75,948.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").p("ACeAoQgeAbg7AXQh1AviPgRQhDgUgYghQguhDDchEIDlg3IAtAZQA5AcA9AJg");
	this.shape_54.setTransform(450.715,967.0114);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E8184E").s().p("Ai8B4QhDgUgXghQgvhDDdhEIDlg3IAtAZQA5AcA8AJIh9BlQgfAbg7AXQhVAihkAAQgkAAgngEg");
	this.shape_55.setTransform(450.3701,967.0276);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").p("AiiB8QgIACgDAAIAEAAQADgBAEgBgAiCB1QgBAAAAAAQgBAAgBAAIgdAHAiCB1IhQhRQgZgtASgtQAmhaDeAKQBSAEAzAYQBjAvhhBlIgvBLQgogGg1gDQhogGhAAPg");
	this.shape_56.setTransform(487.6988,925.7268);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E8184E").s().p("AAmB2QhogGhAAOIhQhQQgZguASgtQAmhZDeAJQBSAEAzAYQBjAvhhBlIgvBMQgogGg1gDg");
	this.shape_57.setTransform(487.6988,924.7794);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").p("AB/hKIAuALQA0AOAiARQBqA1h9A6QgnAOhCADQiDAHiEg0IiphhIA1gLQA9gPAlgYQEKASAHAEg");
	this.shape_58.setTransform(528.0498,965.5061);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E8184E").s().p("AiEAzIiqhhIA1gLQA9gPAlgYQELASAHAEIAuALQA0AOAhARQBrA1h+A6QgnAOhBADIgeABQh0AAh1gug");
	this.shape_59.setTransform(528.4945,965.5111);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").p("AkmgkICugkIA+gIQBMgHBDABQDWACAiBUQgCAZgvAYQheAujagKQAHAAktgWQAQgKALgSQAWgjgVgkg");
	this.shape_60.setTransform(545.691,949.3004);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E8184E").s().p("AghBVQAHAAktgWQAQgKALgSQAWgjgVgkICugjIgBgBIA/gIQBMgHBDABQDWACAiBUQgCAZgvAYQhOAmikAAQghAAglgCg");
	this.shape_61.setTransform(546.175,949.3004);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").p("AkZAVQAKgLAVgQQAqggAzgaQCjhRDFAVQgBABAmALQApAPANAUQAsA/j0BVQABABhuAaIh/AeQgIgMgXgQQgwgghNgTg");
	this.shape_62.setTransform(531.1003,932.6597);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E8184E").s().p("AiuBkQgwgghNgTIARgcQAKgLAVgPQAqghAzgZQCjhSDFAWIAlALQApAQANATQAsBAj0BVIhtAbIh/AeQgIgNgXgQg");
	this.shape_63.setTransform(531.2361,932.6256);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").p("ACzhLIAbAeQAcAkAEAeQAMBkjmALIgCAAQhTABhIgVQiQgqA+hyIBshWIBAAFQBLAEBCgIg");
	this.shape_64.setTransform(490.5589,973.8473);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E8184E").s().p("AiJBwQiQgrA+hxIBshXIBAAGQBLAEBCgIIBVA2IAbAeQAcAkAEAeQAMBjjmALIgCAAIgLABQhNAAhDgUg");
	this.shape_65.setTransform(490.5589,973.855);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").p("ACRhcQhngNhvAGQjhAKgwBYIACAQQAGAVAYARQBNA1DdgFQDHgKAmgKIB2gbIgFhmg");
	this.shape_66.setTransform(426.8292,949.6086);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E8184E").s().p("Ak2A1QgYgRgGgVIgCgQQAwhYDhgKQBvgGBnANIDBAsIAFBmIh2AbQgmAKjHAKIgiABQjBAAhHgxg");
	this.shape_67.setTransform(426.825,949.6086);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").p("ABXBdQgYgOg/gPQg6gMgEgCQiigrAJgsQADgNATgNQAJgGAIgDQB3gkBnAfQA0APAcAXIBUBJQgVAFgbAKQg0ATgXAZg");
	this.shape_68.setTransform(1137.4057,668.8342);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C62FF7").s().p("AADBAQg6gMgEgCQiigsAJgrQADgOATgMQAJgGAIgEQB3gjBnAeQA0AQAcAWIBUBKQgVAFgbAJQg0AUgXAZQgYgPg/gOg");
	this.shape_69.setTransform(1137.1262,668.8703);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").p("ADfAAQAAAlhBAZQhCAahcAAQhbAAhCgaQhBgZAAglQAAgjBBgaQBCgaBbAAQBcAABCAaQBBAaAAAjg");
	this.shape_70.setTransform(1168.4,680.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E1F4EA").s().p("AicA+QhCgZAAglQAAgkBCgZQBBgaBbAAQBcAABCAaQBAAZABAkQgBAlhAAZQhCAahcAAQhbAAhBgag");
	this.shape_71.setTransform(1168.4,680.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").p("AB2AcQgXATgsAQQhZAhhrgMQgzgOgRgXQgjgvCmgvICsgnIAiASQArATAuAHg");
	this.shape_72.setTransform(1139.6274,693.1226);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C62FF7").s().p("AiNBUQgzgOgRgXQgjgvCmgvICsgnIAiASQArATAuAHIhfBGQgXATgsAQQhBAYhLAAQgbAAgdgDg");
	this.shape_73.setTransform(1139.2453,693.1368);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").p("AhiBWIg8g5QgFgIgDgMQgGgXAJgUQAcg/CnAHQBBAEAjAQQBLAhhJBGIgkA1QgegEgngCQhPgFgwALIgdAG");
	this.shape_74.setTransform(1168.3989,663.6848);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C62FF7").s().p("AAdBTQhPgFgwALIg8g5QgFgIgDgMQgGgXAJgUQAcg/CnAHQBBAEAjAQQBLAhhJBGIgkA1QgegEgngCg");
	this.shape_75.setTransform(1168.3989,663.39);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").p("ABhgzIAjAHQAnAKAZAMQBRAlhfApQgdAJgyADQhjAEhjgkIiAhEIAogHQAugLAcgRQDJANAFADg");
	this.shape_76.setTransform(1197.2572,691.8954);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C62FF7").s().p("AhkAkIiAhEIAogHQAugLAcgRQDJANAFACIAjAIQAnAKAZAMQBRAlhfAoQgdAKgyADIgVAAQhYAAhZggg");
	this.shape_77.setTransform(1197.7515,691.8997);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").p("Agsg3QA5gFAzAAQChACAZA6QgBASgjAQQhHAhikgHQAFAAjjgPIAUgUQARgZgQgYICDgZg");
	this.shape_78.setTransform(1212.1363,680.5349);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C62FF7").s().p("AgYA8IjegPIAUgUQAQgZgPgYICDgZIgBAAIAwgGQA5gFAyAAQCiACAZA6QgBASgkAQQg6Abh6AAIg2gBg");
	this.shape_79.setTransform(1212.45,680.5349);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").p("AjUAPIAYgSQAggXAmgSQB7g5CUAPIAcAIQAfALAKAOQAhAsi4A7QADAAhVATIhgAVQgGgJgRgLQgkgWg6gNg");
	this.shape_80.setTransform(1201.0584,668.8977);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C62FF7").s().p("AiEBGQgjgWg6gNIAMgUIAYgSQAfgXAngSQB6g5CUAPIAdAIQAfALAKAOQAhAsi4A7IhSATIhgAVQgGgJgSgLg");
	this.shape_81.setTransform(1201.2009,668.8688);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").p("ACHg0IAVAVQAUAZADAVQAKBFiuAIIgBAAQg/ABg2gOQhtgeAvhPIBSg9IAwAEQA5ADAxgGg");
	this.shape_82.setTransform(1169.2644,697.8963);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C62FF7").s().p("AhnBOQhtgeAvhPIBSg8IAwAEQA5ACAxgFIBAAmIAVAVQAUAZADAVQAKBFiuAIIgBAAIgIAAQg6AAgzgOg");
	this.shape_83.setTransform(1169.2644,697.9032);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").p("ABthAQhOgJhTAEQipAHglA+IACALQAEAOASAMQA6AlCngDIBOgFQBSgFASgEIBZgTIgEhHg");
	this.shape_84.setTransform(1122.4528,680.7639);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C62FF7").s().p("AjpAlQgTgMgEgOIgBgLQAkg+CpgHQBTgEBOAJICSAfIADBHIhZATQgRAEhTAFIhOAFIgcAAQiQAAg0gig");
	this.shape_85.setTransform(1122.45,680.7639);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").p("ABXBCQgYgKg/gLQg9gIgEgCQikgfAJgeQADgJAUgJQAJgFAIgCQB4gaBpAWQA1ALAcAQIBWA0QgWADgbAHQg1AOgXASg");
	this.shape_86.setTransform(1506.6542,715.8155);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2FBEEA").s().p("AADAtQg7gIgEgCQikgfAJgeQADgJATgJIASgHQB4gaBoAWQA1ALAdAQIBVA0QgWADgaAHQg2AOgXASQgYgKhAgLg");
	this.shape_87.setTransform(1506.2016,715.8155);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").p("ADiAAQAAAahCASQhDAShdAAQhcAAhDgSQhCgSAAgaQAAgZBCgSQBDgSBcAAQBeAABCASQBCASAAAZg");
	this.shape_88.setTransform(1537.925,723.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E1F4EA").s().p("AifAsQhCgSAAgaQAAgZBCgSQBDgSBcAAQBeAABCASQBCASAAAZQAAAahCASQhDAShdAAQhcAAhDgSg");
	this.shape_89.setTransform(1537.925,723.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").p("AB2AUQgYANgtAMQhZAXhugJQgzgJgSgRQgjghCoghICvgcIAjANQAsAOAuAFg");
	this.shape_90.setTransform(1508.9633,733.0173);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2FBEEA").s().p("AiQA7QgzgJgSgRQgjghCoghICvgcIAjANQAsAOAuAFIhgAxQgYANgtAMQhAARhMAAQgcAAgfgDg");
	this.shape_91.setTransform(1508.3661,733.0246);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").p("AhkA8Ig9goQgFgGgDgIQgGgQAJgOQAdgsCpAEQA/ACAnAMQBMAYhKAxIgkAmQgfgDgogCQhPgDgyAHIgdAF");
	this.shape_92.setTransform(1537.4489,712.2013);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2FBEEA").s().p("AAdA6QhPgDgyAHIg9goQgFgGgDgIQgGgQAJgOQAdgsCpAEQA/ACAnAMQBMAYhKAxIgkAmQgfgDgogCg");
	this.shape_93.setTransform(1537.4489,712.0041);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").p("ABlgkIBlAUQBRAahfAdQgeAHgzACQhkADhlgaIiBgvIAogGQAvgIAcgLQDMAIAFADg");
	this.shape_94.setTransform(1568.3588,732.1638);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2FBEEA").s().p("AhlAZIiCgvIApgGQAugIAdgLQDLAIAGADIBkAUQBSAahgAdQgeAHgyACIgVAAQhZAAhbgXg");
	this.shape_95.setTransform(1569.1263,732.1658);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").p("ABDgqQCkABAZApQgBANgkAMQhIAXingFQAFgBjmgKIAVgOQARgSgQgRICFgSg");
	this.shape_96.setTransform(1582.1492,724.0946);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2FBEEA").s().p("AgZArQAFgBjmgKIAUgOQARgSgQgRICGgRIgCgBICfgHQCjABAaApQgCANgjAMQg7ASh8AAIg4AAg");
	this.shape_97.setTransform(1582.65,724.0946);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").p("AjWALIAYgNQAggQAngNQB9goCWAKIAdAGQAfAIALAKQAhAfi7AqQACAAhVANIhhAPQgGgGgSgIQgkgQg7gJg");
	this.shape_98.setTransform(1571.0152,715.8333);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2FBEEA").s().p("AiFAyQgkgQg7gJIAMgOIAYgNQAggQAngNQB9goCWAKIAdAGQAfAIALAKQAhAfi7AqIhTANIhhAPQgGgGgSgIg");
	this.shape_99.setTransform(1571.2481,715.8169);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").p("ACKglIAUAPQAVASADAOQAKAyiwAFIgCAAQg/ABg3gLQhvgVAwg3IBTgrIAxADQA5ACAygEg");
	this.shape_100.setTransform(1538.8475,736.4254);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2FBEEA").s().p("AhoA3QhvgVAwg3IBTgrIAxADQA5ACAygEIBCAaIAUAPQAVASADAOQAKAyiwAFIgCAAIgLAAQg5AAgygKg");
	this.shape_101.setTransform(1538.8475,736.4292);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").p("ABvgtQhPgGhVACQisAGglArIACAIQAFAKASAIQA6AaCqgCIBPgDQBUgEASgDIBagNIgEgyg");
	this.shape_102.setTransform(1491.3008,724.2704);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2FBEEA").s().p("AjtAaQgSgIgFgKIgBgIQAlgrCrgGQBVgCBPAGICUAWIADAyIhaANQgSADhUAEIhPADIgYAAQiWAAg2gYg");
	this.shape_103.setTransform(1491.3,724.2704);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").p("ABSBKQgWgLg8gMQg4gKgEgBQiZgjAIgjQADgKASgKQAJgFAIgDQBwgdBiAZQAxAMAbASIBQA7QgUAEgZAIQgyAPgWAUg");
	this.shape_104.setTransform(1182.9808,506.4087);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E8184E").s().p("AADAzIg7gLQiagjAJgjQADgKASgKIAQgIQBxgdBiAZQAxAMAbASIBQA7QgVAEgZAIQgyAPgVAUQgXgLg8gMg");
	this.shape_105.setTransform(1182.6277,506.4087);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").p("ADTAAQAAAeg+AUQg9AUhYAAQhXAAg+gUQg9gVAAgdQAAgcA9gVQA+gUBXAAQBYAAA9AUQA+AVAAAcg");
	this.shape_106.setTransform(1212.35,515.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E1F4EA").s().p("AiUAyQg/gVABgdQgBgcA/gVQA9gUBXAAQBYAAA9AUQA/AVgBAcQABAeg/AUQg9AVhYgBQhXABg9gVg");
	this.shape_107.setTransform(1212.35,515.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").p("ABvAWQgWAPgqAOQhUAahmgKQgwgLgRgSQghglCegmICkggIAgAPQApAPArAFg");
	this.shape_108.setTransform(1186.0268,525.7168);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E8184E").s().p("AiHBDQgwgLgQgSQgiglCegmICkggIAhAPQApAPArAFIhaA4QgWAPgqAOQg9AThIAAQgaAAgcgDg");
	this.shape_109.setTransform(1185.557,525.7271);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").p("AheBEIgbAFAheBEIg5gtQgEgGgDgKQgGgSAIgQQAbgyCfAFQA6ACAlAOQBIAahGA4IgiArQgdgEglgBQhKgEgvAIg");
	this.shape_110.setTransform(1212.3573,502.2687);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E8184E").s().p("AAbBCQhKgDgvAIIg5gtQgEgHgDgKQgGgSAIgQQAbgyCfAGQA6ACAlANQBIAahGA5IgiAqQgdgDglgCg");
	this.shape_111.setTransform(1212.3573,502.0478);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").p("ABegpIAhAGQAlAIAYAKQBMAdhZAhQgcAIgvABQhfAEhegdIh5g2IAmgGQArgJAbgNQC/AKAFACg");
	this.shape_112.setTransform(1240.956,524.8959);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E8184E").s().p("AhfAdIh5g2IAmgGQArgJAbgNQC/AKAFACIAhAGQAlAIAYAKQBMAdhZAhQgcAIgvABIgXAAQhSAAhUgZg");
	this.shape_113.setTransform(1241.57,524.8989);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").p("AA9gwQCaABAYAvQgCAPghANQhEAaicgGQAFAAjXgMIATgQQAQgUgPgTIB8gVg");
	this.shape_114.setTransform(1253.8632,515.798);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E8184E").s().p("AgYAwQAGAAjYgMIATgQQAQgUgPgTIB9gUIgBgBICTgIQCaABAYAvQgCAPghANQg4AVh0AAIg0gBg");
	this.shape_115.setTransform(1254.25,515.798);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").p("AjJAMIAXgPQAegSAlgOQB0guCNAMIAbAHQAdAIAKALQAfAkivAvQADAAhRAPIhbARQgFgHgRgJQgigSg3gKg");
	this.shape_116.setTransform(1243.3582,506.4484);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E8184E").s().p("Ah9A4QghgSg4gKIAMgQIAWgPQAegSAlgOQB1guCMAMIAbAHQAeAIAJALQAgAkivAvIhOAPIhbARQgGgHgRgJg");
	this.shape_117.setTransform(1243.5403,506.4248);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").p("ACBgqIATARQAUAUADARQAIA4ikAGIgBAAQg8ABg0gMQhngYAtg/IBNgxIAuADQA2ACAvgEg");
	this.shape_118.setTransform(1214.3496,529.5741);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E8184E").s().p("AhiA/QhngYAtg/IBNgxIAuADQA2ACAvgEIA9AeIATARQAUAUADARQAIA4ikAGIgBAAIgKAAQg2AAgwgLg");
	this.shape_119.setTransform(1214.3496,529.5789);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").p("ABogzQhKgHhPADQihAGgjAxIABAJQAFALARAKQA3AeCfgDIBKgEQBOgEARgEIBVgPIgEg4g");
	this.shape_120.setTransform(1168.6797,515.9686);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E8184E").s().p("AjeAeQgRgKgFgLIgBgJQAjgxChgGQBPgDBKAHICKAZIAEA4IhVAPQgRAEhOAEIhKAEIgcAAQiIAAgygbg");
	this.shape_121.setTransform(1168.675,515.9686);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").p("ABbBYQgZgNhBgOQg+gMgEgBQipgqAJgpQADgNAUgMQAKgFAIgEQB8giBsAdQA3APAdAVIBYBGQgWAFgcAJQg3ATgYAXg");
	this.shape_122.setTransform(1170.347,976.4825);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2FBEEA").s().p("AAEA9IhCgNQipgqAJgpQADgNAUgMIASgJQB8giBsAdQA3APAdAVIBYBGQgWAFgcAJQg3ATgYAXQgZgNhBgOg");
	this.shape_123.setTransform(1170.0247,976.4825);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").p("ADpAAQAAAjhEAYQhEAZhhAAQhgAAhEgZQhEgYAAgjQAAgiBEgYQBFgZBfAAQBhAABEAZQBEAYAAAig");
	this.shape_124.setTransform(1202.775,987.35);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E1F4EA").s().p("AikA7QhEgYAAgjQAAghBEgZQBFgZBfABQBhgBBEAZQBEAZAAAhQAAAjhEAYQhEAYhhAAQhgAAhEgYg");
	this.shape_125.setTransform(1202.775,987.35);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").p("AB7AbQgYASgvAPQhcAfhxgLQg1gNgSgWQgkgsCtgtIC1glIAkARQAtASAwAGg");
	this.shape_126.setTransform(1172.6974,999.5439);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2FBEEA").s().p("AiVBPQg1gNgSgWQgkgsCtgtIC1glIAkARQAtATAwAGIhkBCQgYASgvAQQhCAXhPAAQgdAAgfgEg");
	this.shape_127.setTransform(1172.2578,999.5556);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").p("AhnBRIg/g1QgFgIgDgMQgHgWAKgSQAdg8CvAHQBAACApAQQBPAfhNBDIgmAyQgfgEgpgCQhSgDgzAJIgfAG");
	this.shape_128.setTransform(1202.2744,971.664);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2FBEEA").s().p("AAeBOQhSgDgzAJIg/g1QgFgIgDgMQgHgWAKgSQAdg8CvAHQBAACApAQQBPAfhNBDIgmAyQgfgEgpgCg");
	this.shape_129.setTransform(1202.2744,971.393);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").p("ABngxIAkAHQApAKAbALQBUAjhjAnQgfAJg0ACQhoAEhngiIiHhAIAqgHQAwgLAegPQDSALAGADg");
	this.shape_130.setTransform(1234.3957,998.3924);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2FBEEA").s().p("AhoAiIiHhAIAqgHQAwgLAegPQDSALAGADIAkAHQApAKAbALQBUAjhjAnQgfAJg0ACIgWAAQhbAAhegeg");
	this.shape_131.setTransform(1234.9529,998.3958);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").p("AjogXICJgYIAxgFQA8gGA1ABQCpABAaA4QgBARglAPQhKAfisgGQAFgBjtgOIAVgTQARgXgQgXg");
	this.shape_132.setTransform(1248.5703,987.6043);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2FBEEA").s().p("AgaA5QAFgBjtgOIAVgTQASgXgRgXICKgYIgCAAIAygFQA8gGA1ABQCpABAbA4QgCARglAPQg9AaiBAAIg4gBg");
	this.shape_133.setTransform(1248.925,987.6043);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").p("AjdAOIAZgSQAhgVAogRQCAg2CcAOIAdAIQAgAKALANQAiAqjAA4QAAABhWARIhkAUQgHgIgSgKQglgWg9gMg");
	this.shape_134.setTransform(1236.9614,976.5211);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#2FBEEA").s().p("AiKBDQglgVg9gNIANgTIAZgRQAhgWApgRQCAg2CbAPIAeAHQAgALALANQAiAqjBA4IhVASIhlAUQgGgIgTgLg");
	this.shape_135.setTransform(1237.1302,976.4965);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").p("ACOgxIAVAUQAWAYADATQAJBCi1AIIgCAAQhBABg5gOQhygdAxhLIBWg5IAyADQA8ADAzgFg");
	this.shape_136.setTransform(1203.7099,1004.098);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2FBEEA").s().p("AhsBKQhygcAxhLIBWg6IAyAEQA8ADAzgGIBEAkIAVAUQAWAYADAUQAJBCi1AHIgCAAIgIABQg9AAg1gOg");
	this.shape_137.setTransform(1203.7099,1004.1033);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").p("ABzg9QhRgIhYADQiyAHgmA7IACAKQAFAOATALQA8AjCvgDIBSgEQBWgFATgEIBdgSIgEhEg");
	this.shape_138.setTransform(1154.6259,987.8084);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2FBEEA").s().p("Aj0AjQgTgLgFgOIgCgKQAmg7CygHQBYgDBRAIICYAdIAEBEIhdASQgTAEhWAFIhSAEIgaABQiZAAg4ghg");
	this.shape_139.setTransform(1154.625,987.8084);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").p("ABdCAQgZgUhCgUQg+gRgEgCQiqg8AJg8QADgTAVgRQAJgJAJgFQB8gxBtArQA3AVAdAfIBZBmQgXAGgcAOQg3AagYAjg");
	this.shape_140.setTransform(1414.8431,859.163);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C62FF7").s().p("AAEBYQg+gRgFgCQipg8AJg8QADgTAVgRQAJgJAJgFQB8gxBtArQA3AVAdAfIBYBmQgWAGgcAOQg3AagYAjQgZgUhCgUg");
	this.shape_141.setTransform(1414.6499,859.163);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").p("ADrAAQAAAyhFAjQhFAkhhAAQhgAAhFgkQhEgjAAgyQAAgxBEgkQBFgjBgAAQBhAABFAjQBFAkAAAxg");
	this.shape_142.setTransform(1447.6,874.95);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E1F4EA").s().p("AilBWQhFgkAAgyQAAgxBFgjQBFgkBgAAQBhAABFAkQBEAjAAAxQAAAyhEAkQhFAjhhAAQhgAAhFgjg");
	this.shape_143.setTransform(1447.6,874.95);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").p("AB+AmQgYAagvAXQhdAthygRQg1gSgSghQglhACvhBIC1g2IAkAZQAtAaAwAJg");
	this.shape_144.setTransform(1417.1684,892.6581);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C62FF7").s().p("AiVBzQg2gSgSghQglhACvhBIC2g2IAkAZQAtAaAwAJIhkBhQgYAagvAXQhDAhhPAAQgdAAgfgFg");
	this.shape_145.setTransform(1416.9021,892.6812);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").p("AhoB2Ig/hOQgUgsAPgrQAehXCvAKQBCAEAoAXQBPAthNBiIgmBJQgfgGgqgDQhSgGg0AOIgeAJ");
	this.shape_146.setTransform(1447.552,852.0438);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C62FF7").s().p("AAeByQhSgGg0AOIg/hOQgUgsAPgsQAehWCvAJQBCAEAoAXQBPAuhNBhIgmBJQgfgFgqgDg");
	this.shape_147.setTransform(1447.552,851.653);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").p("ABlhHIAkAKQAqAOAaAQQBVAzhkA4QgfAOg0ADQhoAGhpgyIiGhdIAqgLQAwgPAegXQDTARAGAFg");
	this.shape_148.setTransform(1478.1723,890.9552);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C62FF7").s().p("AhpAxIiHhdIAqgLQAxgPAdgXQDTARAGAFIAlAKQApAOAbAQQBUAzhjA4QgfAOg1ADIgXABQhcAAhdgtg");
	this.shape_149.setTransform(1478.5153,890.9621);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").p("AjpgiICKgjIAxgIQA8gHA1ABQCqACAbBRQgBAYgmAXQhKAtitgKQAFAAjvgVQAMgKAJgRQASgigQgig");
	this.shape_150.setTransform(1493.6255,875.3019);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C62FF7").s().p("AgaBSQAFAAjvgVQANgKAIgRQATgigRgiICKgjIgBAAIAygIQA9gHA0ABQCrACAbBRQgCAYglAXQg+AliBAAQgcAAgdgCg");
	this.shape_151.setTransform(1494,875.3019);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").p("AjgAUIAZgZQAiggAogYQCChPCcAVQAAAAAdALQAhAPALATQAiA9jCBSQABAAhXAaIhlAdQgGgMgTgQQglgfg9gSg");
	this.shape_152.setTransform(1482.0616,859.2335);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C62FF7").s().p("AiLBhQglgfg9gSIAMgbIAZgaQAigfAogZQCChOCcAUIAdAMQAhAOALATQAiA9jCBSQABABhXAZIhlAdQgGgMgTgPg");
	this.shape_153.setTransform(1482.1604,859.1878);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").p("ACPhIIAVAdQAWAiADAdQAKBgi3ALIgBAAQhCACg6gVQhygpAyhtIBVhUIAzAGQA8AEA0gIg");
	this.shape_154.setTransform(1448.5492,899.2438);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C62FF7").s().p("AhtBsQhygpAyhtIBVhUIAzAFQA8AEA0gIIBEA0IAVAdQAWAjADAdQAKBgi3AKIgBABIgKAAQg8AAg2gTg");
	this.shape_155.setTransform(1448.5492,899.2551);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").p("ABzhZQhRgMhYAFQizAKgmBVIABAQQAFAUATAQQA9AzCwgEIBSgHQBXgHATgGIBdgaIgDhig");
	this.shape_156.setTransform(1399.1768,875.6067);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C62FF7").s().p("Aj2AzQgTgQgFgUIgBgQQAmhVCzgKQBYgFBRAMICaArIADBiIhdAaQgTAGhXAHIhSAHIgbAAQiaAAg4gvg");
	this.shape_157.setTransform(1399.175,875.6067);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").p("ABVBZQgXgOg+gOQg5gLgEgCQifgqAJgpQADgNATgMQAJgGAIgDQB0giBlAdQAzAPAcAVIBSBHQgVAEgaAKQg0ASgWAYg");
	this.shape_158.setTransform(476.2707,652.7398);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F4F45B").s().p("AADA9Ig9gNQifgqAJgpQADgNATgMQAJgGAIgDQB0giBlAdQAzAPAcAVIBSBHQgVAEgaAKQg0ASgWAYQgXgOg+gOg");
	this.shape_159.setTransform(475.9758,652.7398);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").p("ADaAAQAAAjg/AZQhBAYhaAAQhaAAhAgYQg/gZAAgjQAAgiA/gYQBAgZBaAAQBaAABBAZQA/AYAAAig");
	this.shape_160.setTransform(506.65,663.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FCFCFC").s().p("AiaA8QhAgZAAgjQAAgiBAgZQBAgYBaAAQBbAABAAYQA/AZABAiQgBAjg/AZQhAAYhbAAQhaAAhAgYg");
	this.shape_161.setTransform(506.65,663.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").p("AB0AbQgXASgsAPQhWAghqgMQgxgNgSgWQgigtCjgtICqglIAhARQAqASAtAHg");
	this.shape_162.setTransform(478.4226,675.9653);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F4F45B").s().p("AiLBQQgxgNgSgWQgigtCjgtICqglIAhARQAqASAtAHIhdBDQgXASgsAPQg/AXhKAAQgbAAgcgDg");
	this.shape_163.setTransform(478.0316,675.9788);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").p("AhgBSIgdAGAhgBSIg7g2QgFgIgDgMQgGgWAJgTQAcg8CjAHQBAAEAjAPQBJAfhIBDIgjAzQgdgEgngCQhNgEgvAKg");
	this.shape_164.setTransform(506.6364,647.8129);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F4F45B").s().p("AAcBPQhNgEgvAKIg7g2QgFgIgDgMQgGgWAJgTQAcg8CjAHQBAAEAjAPQBJAfhIBDIgjAzQgdgEgngCg");
	this.shape_165.setTransform(506.6364,647.5182);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").p("ABggxIAiAHQAnAKAYALQBPAjhdAnQgdAJgwADQhhAEhhgjIh+hAIAngIQAtgKAcgQQDFAMAFADg");
	this.shape_166.setTransform(536.2837,674.7918);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F4F45B").s().p("AhhAiIh+hAIAngIQAtgKAcgQQDFAMAFADIAiAHQAnAKAYALQBPAjhdAnQgdAJgwADIgVAAQhWAAhXgfg");
	this.shape_167.setTransform(536.7892,674.7958);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").p("AjagXICBgZIAugEQA4gGAxABQCfABAZA4QgCARgiAQQhGAfihgHQAFAAjegOIATgTQARgYgQgXg");
	this.shape_168.setTransform(549.5767,663.9293);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F4F45B").s().p("AgYA5QAEAAjegOIAUgTQARgYgQgXICBgYIgCAAIAwgFQA3gGAyABQCfABAZA4QgCARgiAQQg6AZh5AAIg0gBg");
	this.shape_169.setTransform(549.9,663.9293);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").p("AjPAOIAXgRQAfgWAmgRQB4g3CSAPIAbAHQAfALAKANQAgAqi1A5QABAAhRASIheAUQgGgIgRgLQgjgVg5gNg");
	this.shape_170.setTransform(538.6865,652.7753);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F4F45B").s().p("AiBBDQgjgVg5gNIAMgSIAYgSQAfgWAlgRQB5g2CRAOIAcAIQAeAKAKANQAgAri0A4IhQASIhfAUQgGgIgRgLg");
	this.shape_171.setTransform(538.8409,652.7476);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").p("ACFgyIAUAUQAUAZADATQAJBDiqAHIgBAAQg+ABg1gOQhrgcAuhMIBQg6IAvAEQA4ADAxgGg");
	this.shape_172.setTransform(507.5063,680.5472);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F4F45B").s().p("AhlBLQhrgdAuhLIBQg6IAvADQA4ADAxgFIA/AkIAUAUQAUAYADAUQAJBCiqAIIgBAAIgIAAQg5AAgygNg");
	this.shape_173.setTransform(507.5063,680.5533);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").p("ABrg9QhMgIhSADQimAHgkA7IACALQAEANASAMQA5AjCjgDIBNgFQBRgFASgEIBWgSIgDhEg");
	this.shape_174.setTransform(461.5513,664.1374);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F4F45B").s().p("AjkAkQgTgMgEgNIgCgLQAkg7CmgHQBSgDBMAIICPAdIADBEIhWASQgSAEhRAFIhNAFIgcAAQiMAAgzggg");
	this.shape_175.setTransform(461.55,664.1374);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CADF22").s().p("Ah1BQIgIgSQg1hNCYgpQBKgUBXgEQAdBsiKAlQg5AQg/AAIgXgBg");
	this.shape_176.setTransform(255.04,377.7528);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CADF22").s().p("AnuHBQg5gLgggcQg/AkhWgIQgrgDgfgMQgsgqBbhNQAtgnA2geQhbgUgSghQgIgQAJgMQjKhPBohBQA0gfBcgRQgmgtBJgdIBQgVQg1iECFgOQAqgFA3AIIAuAJQgmgfBUglIBdgfQAmgJBZAcIBRAeQgPg7BpgsQAhgNApgLIAigIQBEgFA9A6QATASARAXIAMATQBNglBRAcQAZAJAXAOIARANQCyg+BaAdQAdAJAQARIAKAQQA/AniYBPQgvAYhAAaIg1AUQBIAGANAmQAEAMgCAOIgDALQDFA9iBBFQgoAWhEAUQgiAKgaAGQgTA1h/gIQg/gEg8gOQgmBZh0gUQg5gKgygcQhpC/iDAJQhBAFgsgiQhiBGhcAAQgWAAgWgEg");
	this.shape_177.setTransform(163.2454,299.0055);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B8CD0F").s().p("AgzIqQhJgRhKglIg8giQgsAWhLgUIhCgZQiQAohRg4QgogcgMgkQhDBliKACQhFABg4gTQhugngOhTQgHgqAQgiQhXgRhFglQgigSgSgPIADAAIgNgCQhWgPgpgyQgVgZgDgXQAAhCClgZQBTgMBSABQgmg+A2g4QAbgcAigQQBgg4CDAUQBBAKAuAWQATgaA6gKQAdgFAZAAQCoidBTAOQApAHAIAmQCBgaBuAhQA3AQAdAVQAJg6CNglQBIgTBFgHQAYhXCjgeQBSgPBNACQCaAngbBuQgJAjgZAlIgYAeQCCgLBLA7QAlAdAMAfQCoiGCzAqQBZAWA4AwQB4BGhPBNQgYAZgqAWIglARQDnAVhBBaQgVAcgvAfIgsAaQjOBEirggQg2gKgrgSIghgRIhVAbQAiDFkIAtQhSAOhmgDIhWgGQhlB8idAAQg0AAg6gNg");
	this.shape_178.setTransform(353.6735,388.6242);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#B8CD0F").s().p("AylPKQhCgdgkguQgsA7h1gGQg7gDgygOQhIA7h1ABQg6ABgtgMQhlhfBPgxQAZgQAogJIAigGQgJgWATgiIAVgdQhlARhTgZQgpgMgVgQQg6hPA+gzQATgQAdgMIAZgIQgYgoBmg4IBqgwQg6gGgHgoQgEgUAIgTQgiADhTgYQgpgMgjgMQhzhHAPhGQAIgjAfgWQBNg6ChArQAzAOA0AWIArAUQgOgUAhgeIAjgbQg6gjAIhFQAEgiAQgbQArg7BqAGQAhACAjAIIAdAHQgUgTAfgNIAjgIQhNgfA6hFQAdgiAsgcQgiAOhxgEQg5gBgygFQhvgqApgZQAUgNAqgFIAAg/Qg6gnAAgyQAAgYAMgRQA1g1BHAOQAWAFAWALIARAKQBNgJAqA8QANASAIAXIAGAUQBbgXBaAeQAcAJAZANIATALQA6gtBJgNIA+gFQgwgtAXhHQALgkAVgbQBNgcBkAYIBVAfQBSglBDAlQAVAMARARIANAQQAJgXBdgfIBagbQB9hlCJAPQBGAIAsAcQBkhwBmAEQAzADAfAYQAJg6BhgRQAwgJAuAEQB9ARgTBrQgHAigTAnIgTAgQCQgGBZA4QAbASATAVIANASQAUgOBJgHQAkgEAhgBQgFg+BLgkQAmgSAmgGQCCAGAZBMQAIAYgEAcIgFAXQA1gRBLAkQAlASAbAWQBFgkBNgkQDPAIAZBSQAHAagLAeIgNAZQg5BUitAYQg2AIg7ABIgVgBIADAFQBSBriYA/QgwAThBANIg3AJQgdB2iOALQgtAEgygIIgqgIQhSByirgaQhVgNhFgkQhNAGhhg6QgwgdgggeQgwAqg2gTQgUgHgPgNQBHBHh0AmQg+AVhPAFQCCAzACB7QAAAngMApIgMAiQhWBfhVgUQgqgKgZgdQhRCBhyAJQg4AEgpgVQgOAthyACQg4ABg2gIQAiA2hEAaQghANgpACQB0B4hGB4QgiA8g6AkQhbA2hmgYQgzgMghgWQhXA0hSAAQg2AAgzgWg");
	this.shape_179.setTransform(227.8853,291.3771);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#80B40B").s().p("AL+XKQhEgPhEgoIg3glQhuBMh2guQgkgOghgZIgagWQjTBriKg9QhFgegbg0QimBchugyQg3gZgWgsQizAehBhUQgggpAEgwQhAAUg2gUQgbgKgOgOIg9ByQg3BuiyAOQhZAHhOgPQhzgZAShUQAJgqAgglQhNAWhIgWQgkgLgUgQQjXAigThHQgKgjAhgqQg2AnhWgHQgrgDgggLQhNg2ANhVQAHgqAVggQg2AIgbg8QgOgegCgfQhtAphxgXQg4gLgjgTQiKAPhOgYQgngMgLgPQhqhGBYhKQAcgXAsgVIAmgQQjHhdA5g+QARgTApgOIAmgKQh6hnBhhCQAfgVAxgPIAqgKQiahCgzh9QgZg+AFgxQA5hqCigTQAygGA3AEIAtAFQgEhNBegKQAdgDAkAEIAdAFQgzhjBXglQAbgLAmgEIAggCQjWh7AliMQAThFA9gtQCHhlCdATQAxAHAuARIAkAQQA9hPA1geQA9ghAtAdQAOAKAMAOIAIANQBIhzCggGQAxgCA1AKIArAJQg1hXB5hhQA8gxBHggQE+g6BvBLQAjAXAKAiIADAeQCohgDGAkQBjASBBAlQC/hGCDBHQBCAjAbAyQAmhPB/AAQBAAAA3AQQA1gDAoBEIAeBFQCQgyBwA2QA4AbAbAlQBpg4BVAJQAqAEAVAQQFRgRALCJQAEArgeA1IgeAsQEqAtjLCbQhAAxhqA1IheAsQBDgLArA2QAVAbAIAdQBNgOA1AVQAbALAMANQA6gkBgADQAwACAkAJQCCAyiFB3QgpAmg/AnIg2AgQAiAAAcAkQAPASAHASQAwg7B7gDQA+gCA0AKQCQBEhNB6QgYAngrAnIgnAgQCfgqA8A3QAeAcgCAkQAwgwB+gVQBAgLA2gBQB9AngqBhQgOAegcAgIgaAaQBlAGA0ArQAaAVAGAUQgFCViJATQgqAGgzgIIgqgJQgKCHh3AgQglAJgsgBIgkgEQh0CmjfAsQhFANhJAAIg6gDQAnCVitAIQg2AChFgMIg6gMIAACCQg1CujGgrQg+gNhFgiIg4geQhmCsigAAQgmAAgogJg");
	this.shape_180.setTransform(292.109,335.835);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#669F08").s().p("AEuX+QhdgbhNg4Ig7gyQnDCXkvhcQhfgdhFgxQgigZgQgTQiZBliagbQhNgOgughQokCjjEikQg+gzgShOQgKgnADgcQltgzhVi6Qgag7AFhBQACggAIgVQoHgsAeiwQAKg2A/g9IA+gzQithaBFg+QAWgUArgPIAngKQithEBshMQAhgYA6gVIAzgRQlHkeDAhuQA8gjBpgMIBdgGQgKgtBogSIBqgJQgnhDBFgyQAjgYAqgMQj5lhEUhBQBXgVCBALIBvAPQA6hrBcgGQAdgCAdAIIAXAIQA6gyCZgeICPgTQDTkTEdArQCOAVBkBNQBphEDUAOQBpAHBVAUQDKgtB2A6QA8AeATAmQCthxCaBRQBNAoAqA/QCGAABdAbQAuAOATANQKqidDzEoQBLBdAXB/QAHAoABAmIgBAeQE9AzBKCbQAkBNgbBEQCHALAAApQAAAMgOAOIgNAMQJ6BUgHEcQgDBZhCBjQgVAegYAcIgVAWQD5CngfCAQgYBmjIBJQiPA0jZAgIi8AVQgJBwimBRQgzAag9ATIgzAOQgdFnoHAEQiiACjAgjIifgiQj0CmjeAAQhVAAhRgYg");
	this.shape_181.setTransform(313.1821,346.015);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CADF22").s().p("Ag1ApQgXgyBBgbQAggNAlgDQANBHg8AYQgSAHgXACIgUABg");
	this.shape_182.setTransform(1351.6346,395.675);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CADF22").s().p("AjVElQgPgEgNgLIgKgKQgbAYgmgGIgggKQgSgbAngzQATgZAXgUQgngNgIgVQgDgKAEgIQhXg0AtgqQAWgUAogLQgRgeAggTQAQgJATgEQgXhWA5gKQAdgFAhANQgRgUAlgYQASgNAWgIQAQgFAmASQAUAKAPAKQgGgnAtgcQAWgPAYgGQAdgEAbAmQANATAIAUQAhgYAjATQARAJALAOQBNgpAnAUQATAJAEASQAbAZhBA0IhHAuQAfAEAGAYIgBAYQBVAog3AtQgSAOgdAOIgaAKQgIAig3gFIg1gMQgQA7gygNQgQgFgRgKIgOgKQgsB8g5AGQgRACgRgKIgNgLQgqAugnAAQgKAAgKgDg");
	this.shape_183.setTransform(1312.002,344.2743);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B8CD0F").s().p("AoBJ5QgSgMgPgTIgLgSQgTAngygEIgvgMQgfAngzABIgsgHQgsg+AighQARgQAagEQgEgOAIgWQAEgLAFgIQgrALgkgQIgbgTQgZgzAbgiQANgRASgGQgKgaAsglQAWgSAYgNQgZgEgDgaQgCgNADgNQgOACgkgPIghgQQgxguAGguQAEgXANgOQAhgmBGAcQAjAOAcAWQgGgNAOgTQAHgKAIgIQgZgWADgtQACgXAHgRQATgnAtAEQAXACATAJQgIgNANgHQAHgEAIgCQghgUAYgtQANgWATgSQgPAJgxgDIgugEQgvgbARgRQAJgIASgDIAAgpQgZgaAAggQAAgQAFgLQAXgjAfAJQAPAFALAMQAhgGASAnQAJAUADAUQAngOAnATQAUAJALANQAZgeAggIQAQgFAKACQgUgehsgvIhogpQAhgSArAQQAWAIAPAMQAjgYCTAYQBJAMBDARQAEgOhOgVIhPgSQA2hCA8ALQAeAFATASQArhJAsADQAWABANAQQAEgmApgLQAVgFAUACQA2ALgJBGQgCAWgJAZIgIAVQA+gDCdAkQBOASBBATQANgOA5gDQgCgYgegSIAsAQQBAAZA1AYQAXgLAgAYQARALALAOIA/guQBaAFAKA1QAEARgFAUIgGAQQgZA3hKAQIg7AFIACADQAkBGhCApQgUANgdAIIgYAGQgMBNg9AHQgUADgVgFIgSgGQgkBKhJgQQgYgGgYgOIgTgMQghADgqglIgjgnQgUAcgYgNIgTgSQAlAyg1AaQgQAIgYAGIgUADQA4AhABBRQAAAZgFAbIgGAWQglA+glgNQgLgEgKgLIgIgLQgiBVgxAFQgPACgPgGIgMgHQgGAegxABIgwgEQAPAigdARIggAKQAyBPgeBPQgJAYgQAWIgPAQQgnAjgsgPIgkgXQgmAjgjAAQgYAAgWgPgAGVoBIAfAFQAjAKAVAMQgygSglgJg");
	this.shape_184.setTransform(1339.9343,339.3155);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#80B40B").s().p("AFLPIQgdgKgegaIgXgYQgwAxgzgeQgPgJgPgQIgLgPQhbBGg7goQgSgMgOgWIgJgTQhIA8gwghQgOgKgLgTIgIgQQhNAUgcg3QgJgRgCgXQgCgLABgIQgcAOgXgNIgSgQIgaBKQgYBIhNAJQgYADgagDIgWgFQgygQAIg3QAEgbAOgZQghAPgfgPIgZgRQhdAWgIguQgEgXAPgcQgYAaglgEIgggKQghgjAFg4QADgbAJgVQgXAFgMgnQgGgTgBgVQgvAbgxgPIgngUQg7AKgigQIgWgRQgtguAmgwQATgYAcgPQhWg9AYgoQANgUAdgIQg1hDArgsQAVgVAfgJQhCgrgWhRQgLgoACggQAYhGBGgMQAjgGAeAIQgBgzAogGQAUgDAVAHQgWhBAlgYQATgMAXABQhdhQARhbQAIguAagdQA6hCBEAMQAiAHAXATQAagzAXgTQAagWAUATQAKAKAEAOQAfhMgxgDQgPgBgWAGIgSAGQgXg5A0g/QAbggAegVQCJgmAwAxQAYAZgDAgQBJg/BVAYQArAMAcAYQBTguA4AuQAdAXALAgQARgzA2AAQAbAAAYAKQAXgCARAtIANAtQA+ghCmAkQBTARBHAYQAtgkAlAGQASADAJAKQCSgLAFBZQABAcgMAjIgNAdQCAAdhYBlQgbAgguAjIgoAcQAdgHASAjQAJASADATQAhgJAYAOQALAHAFAJQAZgYAqACQAVABAPAGQA4Ahg5BOQgSAYgbAaIgYAVQAPAAAMAXQAHAMADAMQAVgnA1gCQAagBAXAGQA+AsghBQQgKAZgTAaIgRAVQBFgcAZAkQANASgBAYQAVgfA3gOQAbgHAXgBQA2AZgSA/QgFAUgNAVIgLARQAsAEAWAcQALAOADANQgCBhg7ANQgTAEgWgFIgSgGQgEBYgzAUQgQAHgTgBIgQgDQgyBshgAdQgeAJgfAAIgZgCQAQBhhKAFQgYACgdgIIgZgIIAABVQgXBxhVgcQgbgIgegWIgYgUQgsBxhGAAQgQAAgRgGg");
	this.shape_185.setTransform(1367.6346,368.3274);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#669F08").s().p("ACBPqQgogSghgkIgaghQjCBjiDg8QgpgTgdghIgWgcQhCBBhCgRQgVgGgTgNIgOgMQjsBqhUhrQgbghgIgzQgEgZABgTQieghgkh6QgSg8ANg3QjggdANhyQAHg5Azg0QhKg6AdgpQAPgVAegJQhKgsAugyQAXgYAmgQQiNi7BThHQAqgkBGABQgFgdAtgMQAXgGAXAAQgRgsAeggQAPgQASgHQhsjnB4grQA8gVBRAZQAZhGAogEQAUgCAPALQAYghgzgTIg5gMQBci0B6AcQA+AOArAyQAtgsBcAJQAtAEAlANQBXgdAzAmQAaATAIAZQBLhJBCA1QAiAaARApQBdAAENAjQEmhmBpDBQA0BhgGB1QCJAhAfBlQAKAggCAiIgEAdQA6AHAAAbQAAAIgFAJIgGAIQESA2gEC6QgBA6gcBAIgdA1QDDDGjFBsQg+AiheAVIhRAOQgEBJhHA1QgXARgaAMIgWAJQgMDrjgADQhGABhTgXIhFgWQhpBshgAAQgkAAgkgPg");
	this.shape_186.setTransform(1376.8056,374.9709);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CADF22").s().p("AhaAwQgmg7BugfQA1gPA+gDQAVBShkAcQgeAIgnADIghAAg");
	this.shape_187.setTransform(908.1856,447.85);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CADF22").s().p("AliFWQgagFgWgNIgRgMQgsAcg/gGIg1gLQgfggBBg8QAhgdAmgXQhBgPgNgZQgEgIACgIIADgGQiRg7BKgyQAmgYBCgNQgcgiA1gWQAagLAggFQgmhkBfgLQAwgGA3APQgcgYA9gcQAegOAkgJQAcgHA/AWQAgAKAaAMQgKgtBLghQAmgRAogHQAwgFAsAtQAWAWANAXQA3gcA6AWQAdALASAQQCAgvBBAWQAgALAHAUQAtAehtA8Ih2A2QA0AEAJAdIAAAdQCNAuhcA1QgdAQgxAPIgrAMQgOAphbgGIhZgOQgbBEhTgPQgagFgcgNIgXgLQhLCRheAHQgdACgcgMIgWgMQhFA1hCAAQgQAAgQgDg");
	this.shape_188.setTransform(842.2307,387.8933);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B8CD0F").s().p("AgkGmQg0gOg2gcIgrgaQgfARg2gPIgvgTQhoAeg6gqQgSgOgLgTIgIgQQgwBNhkABQgfABgggHIgbgHQhPgegKg/QgDgUAFgVIAFgRQg+gNgygcIglgaIgIgBQg+gLgdgmIgRgkQAAgyB3gTQA7gKA7ABQgcgvAngrQATgVAZgMQBFgrBeAQQAvAIAhAQQAOgUAqgHQAUgEASAAQB5h4A7AKQAeAGAFAdQBegUBOAZQAoANAUAQQAHgtBlgcQA0gPAxgFQARhCB2gXQA7gLA3ABQBuAegTBUQgGAagTAdIgRAXQBdgJA2AtQAbAWAJAYQB4hnCBAhQBAAQAoAlQBXA1g5A7QgSASgeARIgaANQClAQgvBFQgOAVgiAYIggATQiUA0h7gYQgmgHgfgPIgYgMIg9AUQAYCWi9AiQg7ALhJgCIg+gFQhIBfhxAAQgmAAgpgKg");
	this.shape_189.setTransform(978.9948,456.1398);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#B8CD0F").s().p("AtWLjQgdgOgZgXIgTgUQgfAshVgEIhOgNQgzAthUABIhKgIQhJhJA5gmQAcgSArgFQgHgRAOgaQAHgMAIgKQhJANg7gTIgtgVQgpg8AsgnQAWgUAegIQgRgeBJgqQAlgWAogPQgpgFgGgeQgDgQAGgOQgYACg8gSIg2gSQhTg2ALg2QAFgaAWgRQA4gsB0AhQA6AQAvAaQgLgPAYgXQAMgMANgIQgpgbAFg0QADgaALgVQAfgtBMAFQAmACAgALQgOgPAWgKQALgEAOgCQg3gYApg0QAVgaAggVQgZAKhRgCIhNgFQhPggAdgUQAOgJAfgEIAAgwQgpgeAAglQAAgTAIgNQAmgoAzALQAZAFASAOQA4gGAeAtQAPAWAEAYQBCgRBBAXQAgALATAOQAqgiA0gKQAagFASABQgigiARg2QAIgcAPgUQA3gWBIATQAkAKAZANQA7gcAwAdQAYAOAMATQAHgRBCgYQAigMAfgIQBahNBiAMQAyAGAgAVQBIhVBKADQAkACAWASQAHgsBFgNQAjgHAhADQBZANgNBSQgEAZgPAeIgNAYQBogEA/ArQAgAVALAWQAOgKA0gGQAagDAYgBQgEgvA2gbQAbgOAcgEQBdAEASA6QAGASgDAVIgEASQAmgNA2AcQAbAOATAQQAygcA3gbQCVAHASA+QAFAUgIAWIgJATQgpBAh9ATQgnAGgqAAIgPAAIACADQA7BShtAwQgiAPgvAJIgoAHQgVBahmAJQggACgkgFIgegHQg6BXh7gUQgngGgogQIgggPQg4AEhFgrIg6guQgiAggngOIgggVQA+A6hYAeQgbAKgoAGIgiAEQBdAnACBeQAAAdgIAgIgJAZQg+BJg9gPQgTgFgRgNIgNgMQg5BihSAHQgZACgZgIIgTgHQgLAihRACIhQgFQAZAogxAUIg1AMQBTBcgyBbQgPAdgbAZIgYATQhBAphKgSQgWgGgVgLIgRgJQg/Aog7AAQgmAAglgRg");
	this.shape_190.setTransform(888.6977,382.0754);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#80B40B").s().p("AImRpQgwgMgxgeIgngcQhQA6hUgkQgagKgYgTIgSgRQiYBRhjguQgfgPgWgZIgQgXQh3BGhQgmQgYgMgSgVIgNgTQiAAXguhAQgPgUgEgbIgCgWQguAQgmgPIgegTIgsBXQgnBUiAALQgoADgsgEIgkgFQhTgTANhAQAEgUANgWIAMgTQg3ARgzgRIgpgUQiaAZgOg1QgEgRAKgXIALgTQgnAeg9gFIg2gLQg4gqAKhAQAEggAQgYQgnAFgUgtIgLgvQhOAghRgSQgagFgWgKIgSgIQhjALg4gSQgRgFgMgIIgHgHQhMg1A/g4QAggcAvgSQiPhHApgvQAUgYAxgJQhXhOBFgzQAjgZA1gKQhvgygkhfQgTgvAEglQAphRB0gPQA6gHAyAJQgCg6BDgIQAigDAiAIQglhMA+gbQAggOAmABQiaheAbhqQANg1AsgjQBhhNBxAPQA5AIAlAWQAsg8AmgWQArgaAhAXQARALAHAQQA0hXBzgEQA5gDAvAQQgmhCBXhLQArglAzgYQDkgtBQA5QAoAdgFAlQB5hICOAbQBHAOAvAcQCJg1BeA2QAvAbATAlQAcg8BbAAQAtAAAoAMQAmgCAdA0QAPAaAHAbQBngnBQApQAoAVAUAcQBMgrA8AHQAfAEAPAMQDxgNAJBoQACAggVApIgVAiQDWAiiTB2QgtAlhNApIhDAhQAwgIAfApQAPAVAGAWQA3gLAnAQQATAIAIAKQAqgbBFACQAiACAaAGQBdAnhfBaQgeAdgtAeIgnAYQAYAAAVAcQALAOAFANQAjgtBYgCQAsgBAlAHQBoA0g3BdQgSAdgfAeIgbAYQByggAqAqQAWAVgCAbQAjgkBbgQQAugIAmgBQBaAegeBJQgKAXgUAZIgTAUQBJAEAlAhQATAQAEAPQgEBxhiAPQgeAFglgGIgegHQgHBmhWAYQgaAIgggBIgagDQhTB+igAhQgyAKgzAAIgqgCQAbBxh8AGQgnACgxgJIgqgJIAABjQgmCFiOghQgsgKgygaIgogXQhJCEh0AAQgbAAgdgHg");
	this.shape_191.setTransform(934.7722,415.9138);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#669F08").s().p("ADYSQQhDgUg3grIgrgmQlDBzjahGQhEgWgygmIgjghQhvBNhugVQgjgGgegQIgYgOQmJB8iNh9QgsgngOg7IgEgzQkGgng9iOQgTgsADgxIAIgpQl1giAWiFQALhDBWg8Qh9hEAygwQAZgYAygKQh9gzBOg6QAmgcBAgTQjrjaCKhUQBFgqB0ACQgHgjBLgNQAlgHAnAAQgcgzAygmQAZgTAegIQizkODGgxQBkgZCHAdQAqhRBCgFQAhgDAZAOQApgnBvgWQA3gLAvgEQCYjRDMAgQBmARBIA6QBMgzCYAKQBMAFA8APQCRgiBVAtQArAWANAdQB9hWBuA+QA3AfAfAwQBgAABDAUQAhALAOAKQHqh4CuDiQA2BGAQBhIAFBSQDkAnA1B2QAaA7gTAzQBgAJAAAfQAAAJgKALIgJAJQHHBAgFDYQgCBEgvBLIgwA9QFFDnlJB+QhnAoibAYIiHARQgHBVh3A+QglATgsAPIgkAKQgVESl1ADQh0ABiKgaIhygaQivB/igAAQg9AAg6gTg");
	this.shape_192.setTransform(950.0488,423.6573);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#8CA532").s().p("Aw5JtQnzgzmBhdQmBhdjTh5Qjah+AAiJQAAiIDah9QDTh5GBheQGBhdHzgzQIEg1I1AAQI1AAIFA1QHzAzGBBdQGABeDTB5QDbB9AACIQAACKjbB9QjTB5mABdQmBBdnzAzQoFA1o1AAQo1AAoEg1g");
	this.shape_193.setTransform(1613.6,575.575);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#8CA532").s().p("AxUJtQoAgzmKhdQmKhejZh4Qjgh+AAiJQAAiIDgh9QDYh5GLheQGLhdH/gzQIRg1JDAAQJEAAIRA1QH/AzGLBdQGKBeDZB5QDgB9AACIQAACJjgB+QjZB4mKBeQmLBdn/AzQoRA1pEAAQpDAAoRg1g");
	this.shape_194.setTransform(291.775,658.325);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#97C41A").s().p("EhLoAReQvKgKwsAEUghaAAIgHvABJQAHgJgrAEIgtAFMAAAgpaQJRgaLygoQXihPMmhEQAJgTcCg6QOCgdN/gZMA07ABHMAmpABLMAiBABqMAi1AAdIaAA/MAAAAnxQ8JCR9yChUg7mAFDgIPABVIgBAAUgBBAAAhivgKsg");
	this.shape_195.setTransform(961.5,620.5509);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#89BC1B").s().p("A4wccMh9KgA9MAAAg1HIgJhNQPVg5SegcUAk7gA6APrACPUgAJgATApjAEiQUxCRUyCVIA1AYQBFAcBVAQQEOA2E+hNQAAgIQSh+QS5iSSHh4UA3KgFtAJ6AB9MAAAA3vg");
	this.shape_196.setTransform(961.825,901.9755);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#60A1E2").s().p("EBa7AtKQ6nhG62hRUg1qgChgBLgA3UgBLgA2hB2AEeUgg7ACOggsACaMAAAhfVMEr/AAAMAAABfVg");
	this.shape_197.setTransform(961.775,305.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(0,0,1922.3,1084), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmcODQi/hKiTiHQiTiHhRivQhUi2AAjGQAAjGBUi1QBRivCTiHQCTiHC/hKQDFhMDXAAQDYAADGBMQC/BKCTCHQCTCHBQCvQBUC1AADGQAADGhUC2QhQCviTCHQiTCHi/BKQjFBMjZAAQjXAAjFhMg");
	this.shape.setTransform(106.275,97.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,212.6,195.1), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F4F9").s().p("AhWCBQgngPgFgnQgLhLCjh1IAhgNQAlgJAUAQIAOASQAMAXgOAZQgjA5gsAzQhFBTgrAAQgKAAgJgFg");
	this.shape.setTransform(13.165,13.3571);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,26.4,26.8), null);


(lib.pelota = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(-875.6,24.65,0.8977,0.9891,0,0,0,111.3,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:111.4,regY:101.1,rotation:5.1724,x:-838.6,y:24.9},0).wait(1).to({rotation:10.3449,x:-801.75},0).wait(1).to({rotation:15.5173,x:-764.9,y:24.95},0).wait(1).to({rotation:20.6898,x:-728.05,y:25},0).wait(1).to({rotation:25.8622,x:-691.15},0).wait(1).to({rotation:31.0347,x:-654.3},0).wait(1).to({scaleX:0.8976,rotation:36.2071,x:-617.45},0).wait(1).to({scaleX:0.8977,rotation:41.3796,x:-580.6,y:25.05},0).wait(1).to({rotation:46.552,x:-543.75,y:25},0).wait(1).to({rotation:51.7245,x:-506.9,y:25.05},0).wait(1).to({rotation:56.8969,x:-470.05,y:25},0).wait(1).to({rotation:62.0694,x:-433.15,y:25.05},0).wait(1).to({rotation:67.2418,x:-396.3},0).wait(1).to({rotation:72.4143,x:-359.5},0).wait(1).to({rotation:77.5867,x:-322.55},0).wait(1).to({rotation:82.7592,x:-285.7},0).wait(1).to({rotation:87.9316,x:-248.85,y:25.1},0).wait(1).to({rotation:93.1041,x:-211.95},0).wait(1).to({rotation:98.2765,x:-175.1,y:25.05},0).wait(1).to({rotation:103.449,x:-138.2},0).wait(1).to({rotation:108.6214,x:-101.4},0).wait(1).to({rotation:113.7939,x:-64.55},0).wait(1).to({rotation:118.9663,x:-27.7},0).wait(1).to({rotation:124.1388,x:9.25},0).wait(1).to({rotation:129.3112,x:46.15,y:25},0).wait(1).to({rotation:134.4837,x:83,y:25.05},0).wait(1).to({rotation:139.6561,x:119.85},0).wait(1).to({rotation:144.8286,x:156.75,y:25},0).wait(1).to({rotation:150.001,x:193.65},0).wait(1).to({rotation:142.501,x:230.5},0).wait(1).to({scaleX:0.8976,rotation:135.0011,x:267.4,y:25.1},0).wait(1).to({scaleX:0.8977,rotation:127.5011,x:304.2,y:25.15},0).wait(1).to({rotation:120.0012,x:341.1,y:25.25},0).wait(1).to({rotation:112.5012,x:378,y:25.3},0).wait(1).to({rotation:105.0012,x:414.85,y:25.35},0).wait(1).to({rotation:97.5013,x:451.75,y:25.4},0).wait(1).to({rotation:90.0013,x:488.65,y:25.45},0).wait(1).to({rotation:82.5014,x:525.55},0).wait(1).to({rotation:75.0014,x:562.45,y:25.55},0).wait(1).to({rotation:67.5014,x:599.3},0).wait(1).to({rotation:60.0015,x:636.25,y:25.6},0).wait(1).to({rotation:52.5015,x:673.1},0).wait(1).to({rotation:45.0016,x:710.05},0).wait(1).to({rotation:37.5016,x:746.9,y:25.7},0).wait(1).to({rotation:30.0016,x:783.85},0).wait(1).to({rotation:22.5017,x:820.75},0).wait(1).to({rotation:15.0017,x:857.65,y:25.75},0).wait(1).to({rotation:7.5018,x:894.55},0).wait(1).to({rotation:0.0018,x:931.45},0).wait(1).to({rotation:-7.4982,x:968.35},0).wait(1).to({rotation:-14.9981,x:1005.3},0).wait(1).to({rotation:-22.4981,x:1042.15,y:25.8},0).wait(1).to({rotation:-29.998,x:1079.05,y:25.75},0).wait(1).to({scaleX:0.8976,rotation:-37.498,x:1115.95,y:25.7},0).wait(1).to({scaleX:0.8977,rotation:-44.998,x:1152.8},0).wait(1).to({rotation:-52.4979,x:1189.75},0).wait(1).to({rotation:-59.9979,x:1226.6,y:25.65},0).wait(1).to({rotation:-67.4978,x:1263.45,y:25.6},0).wait(1).to({rotation:-74.9978,x:1300.35,y:25.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-975.9,-79.8,2377.3,210.39999999999998);


(lib.ojo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(-7.75,0.05,1,1,0,0,0,29.8,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:24.1,x:-7.3,y:-0.05},0).wait(1).to({x:-6.85},0).wait(1).to({x:-6.4},0).wait(1).to({x:-5.95},0).wait(1).to({x:-5.5},0).wait(1).to({x:-5.05},0).wait(1).to({x:-4.6},0).wait(1).to({x:-4.15},0).wait(1).to({x:-3.7},0).wait(1).to({x:-3.25},0).wait(1).to({x:-2.8},0).wait(1).to({x:-2.35},0).wait(1).to({x:-1.9},0).wait(1).to({x:-1.45},0).wait(1).to({x:-1},0).wait(1).to({x:-0.55},0).wait(1).to({x:-0.1},0).wait(1).to({x:0.35},0).wait(1).to({x:0.8},0).wait(1).to({x:1.55},0).wait(1).to({x:2.3},0).wait(1).to({x:3},0).wait(1).to({x:3.75},0).wait(1).to({x:4.45},0).wait(1).to({x:5.2},0).wait(1).to({x:5.9},0).wait(1).to({x:6.65},0).wait(1).to({x:7.35},0).wait(1).to({x:8.1},0).wait(1).to({x:8.8},0).wait(1).to({x:9.55},0).wait(1).to({x:10.25},0).wait(1).to({x:11},0).wait(1).to({x:11.7},0).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.1,-25.1,80.7,50.3);


(lib.ojo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(-10.85,0,1,1,0,0,0,32.4,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-10.1},0).wait(1).to({x:-9.35},0).wait(1).to({x:-8.6},0).wait(1).to({x:-7.9},0).wait(1).to({x:-7.15},0).wait(1).to({x:-6.4},0).wait(1).to({x:-5.7},0).wait(1).to({x:-4.95},0).wait(1).to({x:-4.2},0).wait(1).to({x:-3.5},0).wait(1).to({x:-2.75},0).wait(1).to({x:-2},0).wait(1).to({x:-1.3},0).wait(1).to({x:-0.55},0).wait(1).to({x:0.2},0).wait(1).to({x:0.9},0).wait(1).to({x:1.65},0).wait(1).to({x:2.4},0).wait(1).to({x:3.1},0).wait(1).to({x:4},0).wait(1).to({x:4.9},0).wait(1).to({x:5.75},0).wait(1).to({x:6.65},0).wait(1).to({x:7.5},0).wait(1).to({x:8.4},0).wait(1).to({x:9.25},0).wait(1).to({x:10.15},0).wait(1).to({x:11},0).wait(1).to({x:11.9},0).wait(1).to({x:12.75},0).wait(1).to({x:13.65},0).wait(1).to({x:14.5},0).wait(1).to({x:15.4},0).wait(1).to({x:16.25},0).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-27.2,93.30000000000001,54.4);


(lib.nube3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo6();
	this.instance.setTransform(-1927.35,-0.25,1,1,0,0,0,258.4,142.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(1).to({x:-1911.15},0).wait(1).to({x:-1894.95},0).wait(1).to({x:-1878.75},0).wait(1).to({x:-1862.55},0).wait(1).to({x:-1846.35},0).wait(1).to({x:-1830.15},0).wait(1).to({x:-1813.95},0).wait(1).to({x:-1797.75},0).wait(1).to({x:-1781.55},0).wait(1).to({x:-1765.35},0).wait(1).to({x:-1749.2},0).wait(1).to({x:-1733},0).wait(1).to({x:-1716.8},0).wait(1).to({x:-1700.6},0).wait(1).to({x:-1684.4},0).wait(1).to({x:-1668.2},0).wait(1).to({x:-1652},0).wait(1).to({x:-1635.8},0).wait(1).to({x:-1619.6},0).wait(1).to({x:-1603.4},0).wait(1).to({x:-1587.2},0).wait(1).to({x:-1571.05},0).wait(1).to({x:-1554.85},0).wait(1).to({x:-1538.65},0).wait(1).to({x:-1522.45},0).wait(1).to({x:-1506.25},0).wait(1).to({x:-1490.05},0).wait(1).to({x:-1473.85},0).wait(1).to({x:-1457.65},0).wait(1).to({x:-1441.45},0).wait(1).to({x:-1425.25},0).wait(1).to({x:-1409.05},0).wait(1).to({x:-1392.9},0).wait(1).to({x:-1376.7},0).wait(1).to({x:-1360.5},0).wait(1).to({x:-1344.3},0).wait(1).to({x:-1328.1},0).wait(1).to({x:-1311.9},0).wait(1).to({x:-1295.7},0).wait(1).to({x:-1279.5},0).wait(1).to({x:-1263.3},0).wait(1).to({x:-1247.1},0).wait(1).to({x:-1230.9},0).wait(1).to({x:-1214.75},0).wait(1).to({x:-1198.55},0).wait(1).to({x:-1182.35},0).wait(1).to({x:-1166.15},0).wait(1).to({x:-1149.95},0).wait(1).to({x:-1133.75},0).wait(1).to({x:-1117.55},0).wait(1).to({x:-1101.35},0).wait(1).to({x:-1085.15},0).wait(1).to({x:-1068.95},0).wait(1).to({x:-1052.75},0).wait(1).to({x:-1036.6},0).wait(1).to({x:-1020.4},0).wait(1).to({x:-1004.2},0).wait(1).to({x:-988},0).wait(1).to({x:-971.8},0).wait(1).to({x:-955.6},0).wait(1).to({x:-939.4},0).wait(1).to({x:-923.2},0).wait(1).to({x:-907},0).wait(1).to({x:-890.8},0).wait(1).to({x:-874.65},0).wait(1).to({x:-858.45},0).wait(1).to({x:-842.25},0).wait(1).to({x:-826.05},0).wait(1).to({x:-809.85},0).wait(1).to({x:-793.65},0).wait(1).to({x:-777.45},0).wait(1).to({x:-761.25},0).wait(1).to({x:-745.05},0).wait(1).to({x:-728.85},0).wait(1).to({x:-712.65},0).wait(1).to({x:-696.5},0).wait(1).to({x:-680.3},0).wait(1).to({x:-664.1},0).wait(1).to({x:-647.9},0).wait(1).to({x:-631.7},0).wait(1).to({x:-615.5},0).wait(1).to({x:-599.3},0).wait(1).to({x:-583.1},0).wait(1).to({x:-566.9},0).wait(1).to({x:-550.7},0).wait(1).to({x:-534.5},0).wait(1).to({x:-518.35},0).wait(1).to({x:-502.15},0).wait(1).to({x:-485.95},0).wait(1).to({x:-469.75},0).wait(1).to({x:-453.55},0).wait(1).to({x:-437.35},0).wait(1).to({x:-421.15},0).wait(1).to({x:-404.95},0).wait(1).to({x:-388.75},0).wait(1).to({x:-372.55},0).wait(1).to({x:-356.35},0).wait(1).to({x:-340.2},0).wait(1).to({x:-324},0).wait(1).to({x:-307.8},0).wait(1).to({x:-291.6},0).wait(1).to({x:-275.4},0).wait(1).to({x:-259.2},0).wait(1).to({x:-243},0).wait(1).to({x:-226.8},0).wait(1).to({x:-210.6},0).wait(1).to({x:-194.4},0).wait(1).to({x:-178.2},0).wait(1).to({x:-162.05},0).wait(1).to({x:-145.85},0).wait(1).to({x:-129.65},0).wait(1).to({x:-113.45},0).wait(1).to({x:-97.25},0).wait(1).to({x:-81.05},0).wait(1).to({x:-64.85},0).wait(1).to({x:-48.65},0).wait(1).to({x:-32.45},0).wait(1).to({x:-16.25},0).wait(1).to({x:-0.1},0).wait(1));

	// Capa_1
	this.instance_1 = new lib.Símbolo6();
	this.instance_1.setTransform(-0.1,-0.25,1,1,0,0,0,258.4,142.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:7.7},0).wait(1).to({x:15.45},0).wait(1).to({x:23.2},0).wait(1).to({x:30.95},0).wait(1).to({x:38.75},0).wait(1).to({x:46.5},0).wait(1).to({x:54.25},0).wait(1).to({x:62},0).wait(1).to({x:69.8},0).wait(1).to({x:77.55},0).wait(1).to({x:85.3},0).wait(1).to({x:93.05},0).wait(1).to({x:100.85},0).wait(1).to({x:108.6},0).wait(1).to({x:116.35},0).wait(1).to({x:124.1},0).wait(1).to({x:131.85},0).wait(1).to({x:139.65},0).wait(1).to({x:147.4},0).wait(1).to({x:155.15},0).wait(1).to({x:162.9},0).wait(1).to({x:170.7},0).wait(1).to({x:178.45},0).wait(1).to({x:186.2},0).wait(1).to({x:193.95},0).wait(1).to({x:201.75},0).wait(1).to({x:209.5},0).wait(1).to({x:217.25},0).wait(1).to({x:225},0).wait(1).to({x:232.8},0).wait(1).to({x:240.55},0).wait(1).to({x:248.3},0).wait(1).to({x:256.05},0).wait(1).to({x:263.8},0).wait(1).to({x:271.55},0).wait(1).to({x:279.3},0).wait(1).to({x:287.05},0).wait(1).to({x:294.8},0).wait(1).to({x:302.6},0).wait(1).to({x:310.35},0).wait(1).to({x:318.1},0).wait(1).to({x:325.85},0).wait(1).to({x:333.65},0).wait(1).to({x:341.4},0).wait(1).to({x:349.15},0).wait(1).to({x:356.9},0).wait(1).to({x:364.7},0).wait(1).to({x:372.45},0).wait(1).to({x:380.2},0).wait(1).to({x:387.95},0).wait(1).to({x:395.75},0).wait(1).to({x:403.5},0).wait(1).to({x:411.25},0).wait(1).to({x:419},0).wait(1).to({x:426.75},0).wait(1).to({x:434.55},0).wait(1).to({x:442.3},0).wait(1).to({x:450.05},0).wait(1).to({x:457.8},0).wait(1).to({x:465.6},0).wait(1).to({x:473.35},0).wait(1).to({x:481.1},0).wait(1).to({x:488.85},0).wait(1).to({x:496.65},0).wait(1).to({x:504.4},0).wait(1).to({x:512.15},0).wait(1).to({x:519.9},0).wait(1).to({x:527.7},0).wait(1).to({x:535.45},0).wait(1).to({x:543.2},0).wait(1).to({x:550.95},0).wait(1).to({x:558.7},0).wait(1).to({x:566.5},0).wait(1).to({x:574.25},0).wait(1).to({x:582},0).wait(1).to({x:589.75},0).wait(1).to({x:597.55},0).wait(1).to({x:605.3},0).wait(1).to({x:613.05},0).wait(1).to({x:620.8},0).wait(1).to({x:628.6},0).wait(1).to({x:636.35},0).wait(1).to({x:644.1},0).wait(1).to({x:651.85},0).wait(1).to({x:659.65},0).wait(1).to({x:667.4},0).wait(1).to({x:675.15},0).wait(1).to({x:682.9},0).wait(1).to({x:690.65},0).wait(1).to({x:698.45},0).wait(1).to({x:706.2},0).wait(1).to({x:713.95},0).wait(1).to({x:721.7},0).wait(1).to({x:729.5},0).wait(1).to({x:737.25},0).wait(1).to({x:745},0).wait(1).to({x:752.75},0).wait(1).to({x:760.55},0).wait(1).to({x:768.3},0).wait(1).to({x:776.05},0).wait(1).to({x:783.8},0).wait(1).to({x:791.6},0).wait(1).to({x:799.35},0).wait(1).to({x:807.1},0).wait(1).to({x:814.85},0).wait(1).to({x:822.6},0).wait(1).to({x:830.4},0).wait(1).to({x:838.15},0).wait(1).to({x:845.9},0).wait(1).to({x:853.65},0).wait(1).to({x:861.45},0).wait(1).to({x:869.2},0).wait(1).to({x:876.95},0).wait(1).to({x:884.7},0).wait(1).to({x:892.5},0).wait(1).to({x:900.25},0).wait(1).to({x:908},0).wait(1).to({x:915.75},0).wait(1).to({x:923.55},0).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2186.2,-144,3369.2,287.1);


(lib.nube2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo5();
	this.instance.setTransform(0.25,-0.2,1,1,0,0,0,267.1,120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:267.2,x:11.1,y:-0.35},0).wait(1).to({x:21.85,y:-0.5},0).wait(1).to({x:32.6,y:-0.65},0).wait(1).to({x:43.3,y:-0.8},0).wait(1).to({x:54.05,y:-0.95},0).wait(1).to({x:64.8,y:-1.1},0).wait(1).to({x:75.5,y:-1.25},0).wait(1).to({x:86.25,y:-1.4},0).wait(1).to({x:97,y:-1.55},0).wait(1).to({x:107.75,y:-1.7},0).wait(1).to({x:118.45,y:-1.85},0).wait(1).to({x:129.2,y:-2},0).wait(1).to({x:139.95,y:-2.15},0).wait(1).to({x:150.65,y:-2.3},0).wait(1).to({x:161.4,y:-2.45},0).wait(1).to({x:172.15,y:-2.6},0).wait(1).to({x:182.9,y:-2.75},0).wait(1).to({x:193.6,y:-2.9},0).wait(1).to({x:204.35,y:-3.05},0).wait(1).to({x:215.1,y:-3.2},0).wait(1).to({x:225.8,y:-3.35},0).wait(1).to({x:236.55,y:-3.5},0).wait(1).to({x:247.3,y:-3.65},0).wait(1).to({x:258.05,y:-3.8},0).wait(1).to({x:268.7,y:-3.95},0).wait(1).to({x:279.45,y:-4.1},0).wait(1).to({x:290.2,y:-4.25},0).wait(1).to({x:300.95,y:-4.4},0).wait(1).to({x:311.65,y:-4.55},0).wait(1).to({x:322.4,y:-4.7},0).wait(1).to({x:333.15,y:-4.85},0).wait(1).to({x:343.85,y:-5},0).wait(1).to({x:354.6,y:-5.15},0).wait(1).to({x:365.35,y:-5.3},0).wait(1).to({x:376.1,y:-5.45},0).wait(1).to({x:386.8,y:-5.6},0).wait(1).to({x:397.55,y:-5.75},0).wait(1).to({x:408.3,y:-5.9},0).wait(1).to({x:419,y:-6.05},0).wait(1).to({x:429.75,y:-6.25},0).wait(1).to({x:440.5,y:-6.4},0).wait(1).to({x:451.25,y:-6.55},0).wait(1).to({x:461.95,y:-6.7},0).wait(1).to({x:472.7,y:-6.85},0).wait(1).to({x:483.45,y:-7},0).wait(1).to({x:494.15,y:-7.15},0).wait(1).to({x:504.9,y:-7.3},0).wait(1).to({x:515.65,y:-7.45},0).wait(1).to({x:526.4,y:-7.6},0).wait(1).to({x:537.1,y:-7.75},0).wait(1).to({x:547.85,y:-7.9},0).wait(1).to({x:558.6,y:-8.05},0).wait(1).to({x:569.3,y:-8.2},0).wait(1).to({x:580.05,y:-8.35},0).wait(1).to({x:590.8,y:-8.5},0).wait(1).to({x:601.55,y:-8.65},0).wait(1).to({x:612.25,y:-8.8},0).wait(1).to({x:623,y:-8.95},0).wait(1).to({x:633.75,y:-9.1},0).wait(1).to({x:644.45,y:-9.25},0).wait(1).to({x:655.2,y:-9.4},0).wait(1).to({x:665.95,y:-9.55},0).wait(1).to({x:676.7,y:-9.7},0).wait(1).to({x:687.4,y:-9.85},0).wait(1).to({x:698.15,y:-10},0).wait(1).to({x:708.9,y:-10.15},0).wait(1).to({x:719.6,y:-10.3},0).wait(1).to({x:730.35,y:-10.45},0).wait(1).to({x:741.1,y:-10.6},0).wait(1).to({x:751.85,y:-10.75},0).wait(1).to({x:762.55,y:-10.9},0).wait(1).to({x:773.3,y:-11.05},0).wait(1).to({x:784.05,y:-11.2},0).wait(1).to({x:794.75,y:-11.35},0).wait(1).to({x:805.5,y:-11.5},0).wait(1).to({x:816.25,y:-11.65},0).wait(1).to({x:827,y:-11.8},0).wait(1).to({x:837.7,y:-11.95},0).wait(1).to({x:848.45,y:-12.1},0).wait(1).to({x:859.2,y:-12.3},0).wait(1).to({x:869.9,y:-12.45},0).wait(1).to({x:880.65,y:-12.6},0).wait(1).to({x:891.4,y:-12.75},0).wait(1).to({x:902.15,y:-12.9},0).wait(1).to({x:912.85,y:-13.05},0).wait(1).to({x:923.6,y:-13.2},0).wait(1).to({x:934.35,y:-13.35},0).wait(1).to({x:945.05,y:-13.5},0).wait(1).to({x:955.8,y:-13.65},0).wait(1).to({x:966.55,y:-13.8},0).wait(1).to({x:977.3,y:-13.95},0).wait(1).to({x:988,y:-14.1},0).wait(1).to({x:998.75,y:-14.25},0).wait(1).to({x:1009.5,y:-14.4},0).wait(1).to({x:1020.2,y:-14.55},0).wait(1).to({x:1030.95,y:-14.7},0).wait(1).to({x:1041.7,y:-14.85},0).wait(1).to({x:1052.45,y:-15},0).wait(1).to({x:1063.15,y:-15.15},0).wait(1).to({x:1073.9,y:-15.3},0).wait(1).to({x:1084.65,y:-15.45},0).wait(1).to({x:1095.35,y:-15.6},0).wait(1).to({x:1106.1,y:-15.75},0).wait(1).to({x:1116.85,y:-15.9},0).wait(1).to({x:1127.6,y:-16.05},0).wait(1).to({x:1138.3,y:-16.2},0).wait(1).to({x:1149.05,y:-16.35},0).wait(1).to({x:1159.8,y:-16.5},0).wait(1).to({x:1170.5,y:-16.65},0).wait(1).to({x:1181.25,y:-16.8},0).wait(1).to({x:1192,y:-16.95},0).wait(1).to({x:1202.75,y:-17.1},0).wait(1).to({x:1213.45,y:-17.25},0).wait(1).to({x:1224.2,y:-17.4},0).wait(1).to({x:1234.95,y:-17.55},0).wait(1).to({x:1245.65,y:-17.7},0).wait(1).to({x:1256.4,y:-17.85},0).wait(1).to({x:1267.15,y:-18},0).wait(1).to({x:1277.9,y:-18.2},0).to({_off:true},1).wait(120));

	// Capa_1
	this.instance_1 = new lib.Símbolo5();
	this.instance_1.setTransform(-1281.65,27.6,1,1,0,0,0,267.1,120.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).wait(1).to({regX:267.2,x:-1270.75,y:27.45},0).wait(1).to({x:-1260,y:27.25},0).wait(1).to({x:-1249.2,y:27.05},0).wait(1).to({x:-1238.45,y:26.9},0).wait(1).to({x:-1227.65,y:26.7},0).wait(1).to({x:-1216.9,y:26.5},0).wait(1).to({x:-1206.1,y:26.35},0).wait(1).to({x:-1195.35,y:26.15},0).wait(1).to({x:-1184.55,y:25.95},0).wait(1).to({x:-1173.8,y:25.8},0).wait(1).to({x:-1163.05,y:25.6},0).wait(1).to({x:-1152.25,y:25.4},0).wait(1).to({x:-1141.5,y:25.2},0).wait(1).to({x:-1130.7,y:25.05},0).wait(1).to({x:-1119.95,y:24.85},0).wait(1).to({x:-1109.15,y:24.65},0).wait(1).to({x:-1098.4,y:24.5},0).wait(1).to({x:-1087.6,y:24.3},0).wait(1).to({x:-1076.85,y:24.1},0).wait(1).to({x:-1066.1,y:23.95},0).wait(1).to({x:-1055.3,y:23.75},0).wait(1).to({x:-1044.55,y:23.55},0).wait(1).to({x:-1033.75,y:23.35},0).wait(1).to({x:-1023,y:23.2},0).wait(1).to({x:-1012.2,y:23},0).wait(1).to({x:-1001.45,y:22.8},0).wait(1).to({x:-990.65,y:22.65},0).wait(1).to({x:-979.9,y:22.45},0).wait(1).to({x:-969.15,y:22.25},0).wait(1).to({x:-958.35,y:22.1},0).wait(1).to({x:-947.6,y:21.9},0).wait(1).to({x:-936.8,y:21.7},0).wait(1).to({x:-926.05,y:21.5},0).wait(1).to({x:-915.25,y:21.35},0).wait(1).to({x:-904.5,y:21.15},0).wait(1).to({x:-893.7,y:20.95},0).wait(1).to({x:-882.95,y:20.8},0).wait(1).to({x:-872.2,y:20.6},0).wait(1).to({x:-861.4,y:20.4},0).wait(1).to({x:-850.65,y:20.25},0).wait(1).to({x:-839.85,y:20.05},0).wait(1).to({x:-829.1,y:19.85},0).wait(1).to({x:-818.3,y:19.7},0).wait(1).to({x:-807.55,y:19.5},0).wait(1).to({x:-796.75,y:19.3},0).wait(1).to({x:-786,y:19.1},0).wait(1).to({x:-775.25,y:18.95},0).wait(1).to({x:-764.45,y:18.75},0).wait(1).to({x:-753.7,y:18.55},0).wait(1).to({x:-742.9,y:18.4},0).wait(1).to({x:-732.15,y:18.2},0).wait(1).to({x:-721.35,y:18},0).wait(1).to({x:-710.6,y:17.85},0).wait(1).to({x:-699.8,y:17.65},0).wait(1).to({x:-689.05,y:17.45},0).wait(1).to({x:-678.3,y:17.25},0).wait(1).to({x:-667.5,y:17.1},0).wait(1).to({x:-656.75,y:16.9},0).wait(1).to({x:-645.95,y:16.7},0).wait(1).to({x:-635.2,y:16.55},0).wait(1).to({x:-624.4,y:16.35},0).wait(1).to({x:-613.65,y:16.15},0).wait(1).to({x:-602.85,y:16},0).wait(1).to({x:-592.1,y:15.8},0).wait(1).to({x:-581.35,y:15.6},0).wait(1).to({x:-570.55,y:15.4},0).wait(1).to({x:-559.8,y:15.25},0).wait(1).to({x:-549,y:15.05},0).wait(1).to({x:-538.25,y:14.85},0).wait(1).to({x:-527.45,y:14.7},0).wait(1).to({x:-516.7,y:14.5},0).wait(1).to({x:-505.9,y:14.3},0).wait(1).to({x:-495.15,y:14.15},0).wait(1).to({x:-484.4,y:13.95},0).wait(1).to({x:-473.6,y:13.75},0).wait(1).to({x:-462.85,y:13.55},0).wait(1).to({x:-452.05,y:13.4},0).wait(1).to({x:-441.3,y:13.2},0).wait(1).to({x:-430.5,y:13},0).wait(1).to({x:-419.75,y:12.85},0).wait(1).to({x:-408.95,y:12.65},0).wait(1).to({x:-398.2,y:12.45},0).wait(1).to({x:-387.45,y:12.3},0).wait(1).to({x:-376.65,y:12.1},0).wait(1).to({x:-365.9,y:11.9},0).wait(1).to({x:-355.1,y:11.75},0).wait(1).to({x:-344.35,y:11.55},0).wait(1).to({x:-333.55,y:11.35},0).wait(1).to({x:-322.8,y:11.15},0).wait(1).to({x:-312,y:11},0).wait(1).to({x:-301.25,y:10.8},0).wait(1).to({x:-290.5,y:10.6},0).wait(1).to({x:-279.7,y:10.45},0).wait(1).to({x:-268.95,y:10.25},0).wait(1).to({x:-258.15,y:10.05},0).wait(1).to({x:-247.4,y:9.9},0).wait(1).to({x:-236.6,y:9.7},0).wait(1).to({x:-225.85,y:9.5},0).wait(1).to({x:-215.05,y:9.3},0).wait(1).to({x:-204.3,y:9.15},0).wait(1).to({x:-193.55,y:8.95},0).wait(1).to({x:-182.75,y:8.75},0).wait(1).to({x:-172,y:8.6},0).wait(1).to({x:-161.2,y:8.4},0).wait(1).to({x:-150.45,y:8.2},0).wait(1).to({x:-139.65,y:8.05},0).wait(1).to({x:-128.9,y:7.85},0).wait(1).to({x:-118.1,y:7.65},0).wait(1).to({x:-107.35,y:7.45},0).wait(1).to({x:-96.6,y:7.3},0).wait(1).to({x:-85.8,y:7.1},0).wait(1).to({x:-75.05,y:6.9},0).wait(1).to({x:-64.25,y:6.75},0).wait(1).to({x:-53.5,y:6.55},0).wait(1).to({x:-42.7,y:6.35},0).wait(1).to({x:-31.95,y:6.2},0).wait(1).to({x:-21.15,y:6},0).wait(1).to({x:-10.4,y:5.8},0).wait(1).to({x:0.35,y:5.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1549.4,-139.4,3095.5,287.70000000000005);


(lib.nube1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo4();
	this.instance.setTransform(-743.8,-0.2,1,1,0,0,0,348.4,171.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-732.5},0).wait(1).to({x:-721.25},0).wait(1).to({x:-709.95},0).wait(1).to({x:-698.7},0).wait(1).to({x:-687.45},0).wait(1).to({x:-676.15},0).wait(1).to({x:-664.9},0).wait(1).to({x:-653.65},0).wait(1).to({x:-642.35},0).wait(1).to({x:-631.1},0).wait(1).to({x:-619.85},0).wait(1).to({x:-608.55},0).wait(1).to({x:-597.3},0).wait(1).to({x:-586},0).wait(1).to({x:-574.75},0).wait(1).to({x:-563.5},0).wait(1).to({x:-552.2},0).wait(1).to({x:-540.95},0).wait(1).to({x:-529.7},0).wait(1).to({x:-518.4},0).wait(1).to({x:-507.15},0).wait(1).to({x:-495.9},0).wait(1).to({x:-484.6},0).wait(1).to({x:-473.35},0).wait(1).to({x:-462.1},0).wait(1).to({x:-450.8},0).wait(1).to({x:-439.55},0).wait(1).to({x:-428.25},0).wait(1).to({x:-417},0).wait(1).to({x:-405.75},0).wait(1).to({x:-394.45},0).wait(1).to({x:-383.2},0).wait(1).to({x:-371.95},0).wait(1).to({x:-360.65},0).wait(1).to({x:-349.4},0).wait(1).to({x:-338.15},0).wait(1).to({x:-326.85},0).wait(1).to({x:-315.6},0).wait(1).to({x:-304.3},0).wait(1).to({x:-293.05},0).wait(1).to({x:-281.8},0).wait(1).to({x:-270.5},0).wait(1).to({x:-259.25},0).wait(1).to({x:-248},0).wait(1).to({x:-236.7},0).wait(1).to({x:-225.45},0).wait(1).to({x:-214.2},0).wait(1).to({x:-202.9},0).wait(1).to({x:-191.65},0).wait(1).to({x:-180.4},0).wait(1).to({x:-169.1},0).wait(1).to({x:-157.85},0).wait(1).to({x:-146.55},0).wait(1).to({x:-135.3},0).wait(1).to({x:-124.05},0).wait(1).to({x:-112.75},0).wait(1).to({x:-101.5},0).wait(1).to({x:-90.25},0).wait(1).to({x:-78.95},0).wait(1).to({x:-67.7},0).wait(1).to({x:-56.45},0).wait(1).to({x:-45.15},0).wait(1).to({x:-33.9},0).wait(1).to({x:-22.6},0).wait(1).to({x:-11.35},0).wait(1).to({x:-0.1},0).wait(1).to({x:11.2},0).wait(1).to({x:22.45},0).wait(1).to({x:33.7},0).wait(1).to({x:45},0).wait(1).to({x:56.25},0).wait(1).to({x:67.5},0).wait(1).to({x:78.8},0).wait(1).to({x:90.05},0).wait(1).to({x:101.3},0).wait(1).to({x:112.6},0).wait(1).to({x:123.85},0).wait(1).to({x:135.15},0).wait(1).to({x:146.4},0).wait(1).to({x:157.65},0).wait(1).to({x:168.95},0).wait(1).to({x:180.2},0).wait(1).to({x:191.45},0).wait(1).to({x:202.75},0).wait(1).to({x:214},0).wait(1).to({x:225.25},0).wait(1).to({x:236.55},0).wait(1).to({x:247.8},0).wait(1).to({x:259.1},0).wait(1).to({x:270.35},0).wait(1).to({x:281.6},0).wait(1).to({x:292.9},0).wait(1).to({x:304.15},0).wait(1).to({x:315.4},0).wait(1).to({x:326.7},0).wait(1).to({x:337.95},0).wait(1).to({x:349.15},0).wait(1).to({x:360.45},0).wait(1).to({x:371.7},0).wait(1).to({x:382.95},0).wait(1).to({x:394.25},0).wait(1).to({x:405.5},0).wait(1).to({x:416.8},0).wait(1).to({x:428.05},0).wait(1).to({x:439.3},0).wait(1).to({x:450.6},0).wait(1).to({x:461.85},0).wait(1).to({x:473.1},0).wait(1).to({x:484.4},0).wait(1).to({x:495.65},0).wait(1).to({x:506.9},0).wait(1).to({x:518.2},0).wait(1).to({x:529.45},0).wait(1).to({x:540.75},0).wait(1).to({x:552},0).wait(1).to({x:563.25},0).wait(1).to({x:574.55},0).wait(1).to({x:585.8},0).wait(1).to({x:597.05},0).wait(1).to({x:608.35},0).wait(1).to({x:619.6},0).wait(1).to({x:630.85},0).wait(1).to({x:642.15},0).wait(1).to({x:653.4},0).wait(1).to({x:664.65},0).wait(1).to({x:675.95},0).wait(1).to({x:687.2},0).wait(1).to({x:698.5},0).wait(1).to({x:709.75},0).wait(1).to({x:721},0).wait(1).to({x:732.3},0).wait(1).to({x:743.55},0).wait(1).to({x:754.8},0).wait(1).to({x:766.1},0).wait(1).to({x:777.35},0).wait(1).to({x:788.6},0).wait(1).to({x:799.9},0).wait(1).to({x:811.15},0).wait(1).to({x:822.45},0).wait(1).to({x:833.7},0).wait(1).to({x:844.95},0).wait(1).to({x:856.25},0).wait(1).to({x:867.5},0).wait(1).to({x:878.75},0).wait(1).to({x:890.05},0).wait(1).to({x:901.3},0).wait(1).to({x:912.55},0).wait(1).to({x:923.85},0).wait(1).to({x:935.1},0).wait(1).to({x:946.35},0).wait(1).to({x:957.65},0).wait(1).to({x:968.9},0).wait(1).to({x:980.2},0).wait(1).to({x:991.45},0).wait(1).to({x:1002.7},0).wait(1).to({x:1014},0).wait(1).to({x:1025.25},0).wait(1).to({x:1036.5},0).wait(1).to({x:1047.8},0).wait(1).to({x:1059.05},0).wait(1).to({x:1070.3},0).wait(1).to({x:1081.6},0).wait(1).to({x:1092.85},0).wait(1).to({x:1104.15},0).wait(1).to({x:1115.4},0).wait(1).to({x:1126.65},0).wait(1).to({x:1137.95},0).wait(1).to({x:1149.2},0).wait(1).to({x:1160.45},0).wait(1).to({x:1171.75},0).wait(1).to({x:1183},0).wait(1).to({x:1194.25},0).wait(1).to({x:1205.55},0).wait(1).to({x:1216.8},0).wait(1).to({x:1228.05},0).wait(1).to({x:1239.35},0).wait(1).to({x:1250.6},0).wait(1).to({x:1261.9},0).wait(1).to({x:1273.15},0).wait(1).to({x:1284.4},0).wait(1).to({x:1295.7},0).wait(1).to({x:1306.95},0).wait(1).to({x:1318.2},0).wait(1).to({x:1329.5},0).wait(1).to({x:1340.75},0).wait(1).to({x:1352},0).wait(1).to({x:1363.3},0).wait(1).to({x:1374.55},0).wait(1).to({x:1385.85},0).wait(1).to({x:1397.1},0).wait(1).to({x:1408.35},0).wait(1).to({x:1419.65},0).wait(1).to({x:1430.9},0).wait(1).to({x:1442.15},0).wait(1).to({x:1453.45},0).wait(1).to({x:1464.7},0).wait(1).to({x:1475.95},0).wait(1).to({x:1487.25},0).wait(1).to({x:1498.5},0).wait(1).to({x:1509.75},0).wait(1).to({x:1521.05},0).wait(1).to({x:1532.3},0).wait(1).to({x:1543.6},0).wait(1).to({x:1554.85},0).wait(1).to({x:1566.1},0).wait(1).to({x:1577.4},0).wait(1).to({x:1588.65},0).wait(1).to({x:1599.9},0).wait(1).to({x:1611.2},0).wait(1).to({x:1622.45},0).wait(1).to({x:1633.7},0).wait(1).to({x:1645},0).wait(1).to({x:1656.25},0).wait(1).to({x:1667.55},0).wait(1).to({x:1678.8},0).wait(1).to({x:1690.05},0).wait(1).to({x:1701.35},0).wait(1).to({x:1712.6},0).wait(1).to({x:1723.85},0).wait(1).to({x:1735.15},0).wait(1).to({x:1746.4},0).wait(1).to({x:1757.65},0).wait(1).to({x:1768.95},0).wait(1).to({x:1780.2},0).wait(1).to({x:1791.45},0).wait(1).to({x:1802.75},0).wait(1).to({x:1814},0).wait(1).to({x:1825.3},0).wait(1).to({x:1836.55},0).wait(1).to({x:1847.8},0).wait(1).to({x:1859.1},0).wait(1).to({x:1870.35},0).wait(1).to({x:1881.6},0).wait(1).to({x:1892.9},0).wait(1).to({x:1904.15},0).wait(1).to({x:1915.4},0).wait(1).to({x:1926.7},0).wait(1).to({x:1937.95},0).wait(1).to({x:1949.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1092.7,-172.3,3391.3,343.70000000000005);


(lib.fondo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.sentimiento();
	this.instance.setTransform(-11.15,0,0.903,0.8022,0,0,0,-0.3,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.2,scaleX:1,scaleY:1,x:-11.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.8,-94.6,416.9,189.3);


(lib.fondo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.juegos();
	this.instance.setTransform(0,0,0.9092,0.8022);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-95.2,412.8,190.4);


(lib.fondo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.recreacion();
	this.instance.setTransform(0,0,0.9011,0.7844);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-87.9,433.9,204.5);


(lib.atras = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE000").s().p("AH7FBQAkh4jxgnQgpgFhYgDQivgHjgAKIAADTImul0IGumsIAADIIAugJQA6gJA9gEQDCgNCbAyIBJAbQBWAmBBAyQDOCfhXDgQgIAXgdAdQg6A7hyApQBEg0ARg8g");
	this.shape.setTransform(-10.1334,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AH7FBQAjh3jwgoQgqgFhXgDQivgGjgAKIAADSImul0IGumsIAADJIAugJQA6gKA9gEQDCgNCbAyIBJAbQBWAmBBAyQDOCfhXDgQgIAXgdAeQg6A6hyApQBDg0ASg8g");
	this.shape_1.setTransform(-6.3356,-0.85);

	this.instance = new lib.Path();
	this.instance.setTransform(-63,-49.3,1,1,0,0,0,13.2,13.3);
	this.instance.alpha = 0.3984;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFCC66","#FFCA64","#FFB44E","#FFA53F","#FF9C36","#FF9933","#FF9D37","#FFA943","#FFBD57","#FFCC66"],[0,0.008,0.114,0.227,0.361,0.557,0.682,0.804,0.925,1],-96.5,0,96.6,0).s().p("Al3M2QithEiGh7QiGh8hJigQhMilAAi2QAAi0BMimQBJigCGh7QCGh8CthEQCzhGDEAAQDEAAC0BGQCtBECGB8QCGB7BJCgQBMCmAAC0QAAC2hMClQhKCgiFB8QiGB7itBEQi0BGjEAAQjEAAizhGg");
	this.shape_2.setTransform(1.525,-0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AmFNjQi3hGiOiBQiOiBhOioQhSiugBi/QgCi+BPivQBMipCMiCQCMiDC2hIQC9hLDPgCQDOgBC+BIQC3BHCOCAQCOCCBPCnQBRCuABDAQACC+hPCuQhMCpiMCDQiMCCi2BJQi9BLjPACIgIAAQjKAAi6hIg");
	this.shape_3.setTransform(0.025,-0.05);

	this.instance_1 = new lib.Path_3();
	this.instance_1.setTransform(-0.05,0,1,1,0,0,0,106.2,97.5);
	this.instance_1.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:-0.05,y:0}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:0.025,y:-0.05}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:1.525,y:-0.075}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-63,y:-49.3}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:-6.3356,y:-0.85}},{t:this.shape,p:{scaleX:1,scaleY:1,x:-10.1334,y:0.425}}]}).to({state:[{t:this.instance_1,p:{scaleX:1.04,scaleY:1.04,x:0,y:0.05}},{t:this.shape_3,p:{scaleX:1.04,scaleY:1.04,x:0.0404,y:-0.031}},{t:this.shape_2,p:{scaleX:1.04,scaleY:1.04,x:1.6004,y:-0.057}},{t:this.instance,p:{scaleX:1.04,scaleY:1.04,x:-65.45,y:-51.2}},{t:this.shape_1,p:{scaleX:1.04,scaleY:1.04,x:-6.5745,y:-0.863}},{t:this.shape,p:{scaleX:1.04,scaleY:1.04,x:-10.5242,y:0.463}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.4,-101.3,221,202.8);


(lib.perro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.ojo2();
	this.instance.setTransform(404.95,123.2);

	this.instance_1 = new lib.ojo1();
	this.instance_1.setTransform(272.35,145.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AFChSQgmgOg4gCQhwgEhaA/Qg5gXhMgMQiWgWg/BCQgBABAAADQAAABABABIA5ApQBSAwB+AcQgDAEAsACQAyADAzgLQCfggBMiNg");
	this.shape.setTransform(350.3417,237.7741);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF0C0C").s().p("AgOBjQgsgCADgEQh+gchSgwIg5gpIgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQA/hCCWAWQBMAMA5AXQBag/BwAEQA4ACAmAOQhMCNifAgQgoAIgnAAIgWAAg");
	this.shape_1.setTransform(350.3417,237.7741);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AGZApQhBAlh0AYQjmAwj6g+Ii9jQIDxAqIGiAGQDvgwgGAAQgIBNgPAtQgIAYgGAI");
	this.shape_2.setTransform(341.6319,225.3008);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC362F").s().p("AkABXIi+jQIDxAqIGjAGQDigtAGgDQgIBNgPAtQgIAYgGAIIgEAHQhCAlh0AYQhkAVhpAAQiFAAiNgjgAG+h5IAAAAIAAAAg");
	this.shape_3.setTransform(342.0574,225.4223);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AwrggIAGADQA9AaBhAfQCmA3DBAsQgCACB8AQQCHARBJACQAAACCggBQBQAABQgBICigWQC0geBTgnQgBABCCg7QCKhCAggtQgBABBVhIQBahPAXgoQAAABBEhmQhYgngagXQABABgFgXIAzAeQA2AfATAEQAPADAPAEQAOADAmABQAgACAZgGQAQgDAHAEQgCAIgLADQghAIhogHIiACxQgnArg0AvQhoBgg9AYQg6AghIAiQiQBEhFALIgKADIgFAjQgHArgRAoQg1B/h7AxQgyAbhPAGQibAMiehfQg3gkg+gwQh9hhgmhAQADAAk8hZIjYhOIiqgEIgIgJICugOIA+gYQBDgcAdgXQgpAogiAVg");
	this.shape_4.setTransform(350.8887,199.7425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050505").s().p("AkRGHQg3gkg+gxQh9hhgmg/QACgBk7hYIjYhPIirgDIgHgJICugPIA9gXQBEgcAcgXQgoAogiAUIhCAdIAGACQA8AbBiAfQClA3DCArQgCADB8AQQCHARBIABQABACCggBICggBICigWQCzgdBUgoICBg5QCJhDAggtIBVhGQBahQAWgoQAAACBFhmQhYgngagXIgEgWIAyAeQA3AfASADIAfAIQAOACAmACQAfABAagFQAQgEAHAEQgCAIgLADQghAIhogGIiACwQgoArg0AwQhnBfg+AaQg5AfhIAiQiQBEhFAKIgKAEIgFAjQgIAqgQAoQg2CAh6AwQgyAbhPAGIgkABQiKAAiLhTgAPTnDIAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(351.1,199.9977);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("AjHjKIBGgOQBVgPBRgEQEEgMB6BlIASAiQARAsgFAtQgRCPjrBhQhUAUhtAAQjZgCiKhgQhMgsgShBQgkh/Eahpg");
	this.shape_6.setTransform(371.0534,185.0568);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAEDtQjZgCiKhgQhMgsgShBQgkh/EahpIBGgOQBVgPBRgEQEEgMB6BlIASAiQARAsgFAtQgRCPjrBhQhRAUhrAAIgFAAg");
	this.shape_7.setTransform(371.0534,185.0568);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("A2jgrIAVgXQAlgcBPgXQD7hII6AFIBLg/QBihKB1gzQF2iiGuB+QgHANC3gyQDEg2BlhAQABABBAgOQBOgNA9AFQDGAOgQC7QgtBohpB2QjRDrkrBQQg0ALg7AbQh4A2gZBQQgTAdgpAoQhUBRhrAwQlbCcnVjnQAAgLhYgiQh1guiuggQj2gjhagZQiPgmhIhkQADABgHgYQgLgqgEgQQgShVAlgFg");
	this.shape_8.setTransform(347.6479,196.3952);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AoBHBQAAgLhYgiQh1guiuggQj2gjhagZQiPgmhIhkQADABgHgYIgPg6QgShVAlgFIAVgXQAlgcBPgXQD7hII6AFIBLg/QBihKB1gzQF2iiGuB+QgHANC3gyQDEg2BlhAIBBgNQBOgNA9AFQDGAOgQC7QgtBohpB2QjRDrkrBQQg0ALg7AbQh4A2gZBQQgTAdgpAoQhUBRhrAwQiMA/igAAQjsAAkYiKg");
	this.shape_9.setTransform(347.6479,196.3952);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AErBPQjNhghIAAQi5gLiRgSQkhgkCrg3QABABAcgLQAlgOApgGQCLgYC0A2QABgDA6AWQBEAaBFAjQDTBoBUBxIAAAPQhZgwhngwg");
	this.shape_10.setTransform(384.1432,65.3187);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjvBZQAFjlDBhkQAAABBpgkQB1ghA1AMQAOAQgTAjQgnBGiiBfQgeAFgrAvQhTBdhNDrQgkhgAChzg");
	this.shape_11.setTransform(234.9223,97.2552);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AB/FPIBCgVQBMgeA3gsQCuiMhyjiQglhDhTg6QinhzjlAgQhjAOhTA9QimB5BNDwQgFABAiAsQAoA0A2ApQCrCBDsgig");
	this.shape_12.setTransform(403.0483,117.0158);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkYDwQg2gpgog0QgigsAFgBQhNjwCmh5QBTg9BjgOQDlggCnBzQBTA6AlBDQByDiiuCMQg3AshMAeIhCAVQgyAHgvAAQivAAiHhmg");
	this.shape_13.setTransform(403.0483,117.0158);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("ABxFxIAzgJQA+gPA1geQCrhiAVjZQADhhg/hfQiAi9lQAGQh9APhwBCQjeCFA0ECQgDAIAaAtQAjA8A2AvQCrCUEigkg");
	this.shape_14.setTransform(272.7743,138.5679);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AlcEBQg2gvgjg8QgagtADgIQg0kCDeiFQBwhCB9gPQFQgGCAC9QA/BfgDBhQgVDZirBiQg1Aeg+APIgzAJQg5AHg0AAQjWAAiKh3g");
	this.shape_15.setTransform(272.7743,138.5679);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AL9ygQgYADjTBDQgoAUgSAVQgkApBwAFQgDgDBQAEQBcAEBZALQESAhA2BKQgDgEBRg6QBhhFBrg4QFMiwD2AkIBvALQCGAVBnA1QFLCqhzGmQgUgVgegaQg+g0hMgiQj0hslJBiQgEAAipA4IAkAWQAtAeAqAnQCHB+A7CuQgFAKAoAiQAqAkAegHIBfAnQBhArAFAUQAEgDAOAPQAQASAOAbQAnBOgNBkIAVAoQARAzgOA+QgtDFlZDeQAFAFjMBWQjgBdgVAMQhXBwiGBeQkJC8j/hAQAAAHiGgoQiNgpglgcQhEgehiglQjHhKiEgFQAEgGkUgrQhXACh2gHQjsgNidgoQg7gThFghQiKhBg1hUQgig0gShVQgjiqBXirIBvjGQiyAUi9BEQl5CKg2DyQgEBjg0A+QhnB8jgi1QgfgYgrgsQhXhYg1hgQirkzDlkTQAEACBNhOQBrheCMhHQHPjqLLBAQABgBCOhcQCwhuCtheQIlksE6gbQgMAHiPCFIArgSQA4gUA8gOQC/gqClApQACAAABAA");
	this.shape_16.setTransform(258.7592,127.2094);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAA558").s().p("AMATpQAAAHiGgoQiNgpglgcQhEgehiglQjHhKiEgFQAEgGkUgrQhXACh2gHQjsgNidgoQg7gThFghQiKhBg1hUQgig0gShVQgjiqBXirIBvjGQiyAUi9BEQl5CKg2DyQgEBjg0A+QhnB8jgi1QgfgYgrgsQhXhYg1hgQirkzDlkTQAEACBNhOQBrheCMhHQHPjqLLBAICPhdQCwhuCtheQIlksE6gbQgMAGiPCGIArgSQA4gUA8gOQC/gqClApQgYADjTBDQgoAUgSAVQgkApBwAFQgDgDBQAEQBcAEBZALQESAhA2BKQgDgEBRg6QBhhFBrg4QFMiwD2AkIBvALQCGAVBnA1QFLCqhzGmQgUgVgegaQg+g0hMgiQj0hslJBiQgEAAipA4IAkAWQAtAeAqAnQCHB+A7CuQgFAKAoAiQAqAkAegHIBfAnQBhArAFAUQAEgDAOAPQAQASAOAbQAnBOgNBkIAVAoQARAzgOA+QgtDFlZDeQAFAFjMBWQjgBdgVAMQhXBwiGBeQjFCMjAAAQhCAAhBgQg");
	this.shape_17.setTransform(258.7592,127.3143);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("AlxlLQgIAYgTAeQgyBSheBDQgCAABSAKQBjATBUAmQENB9ADEiIBIgkQBZgvBPg2QD7irA2iqQgngfhVglQiphJjhgcQhKgOhQgQQiigggdAJQgcAKgPgFIAAAAIgJgHgAlulVQgBAFgCAFAltlaQAAADgBAC");
	this.shape_18.setTransform(246.7881,256.6703);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAA558").s().p("AkVhAQhTgmhkgTQhRgKACAAQBehDAyhSQAWglAIgbQAOAFAdgJQAcgKCiAgICaAfQDiAbCpBKQBUAlAoAeQg2Crj8CqQhOA2hZAvIhIAlQgEkjkNh9gAl3lfIAJAHIAAAAIgDAKg");
	this.shape_19.setTransform(246.7476,256.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("AGdgiQgNAogyAzQhjBmi2AyQgyATgtAAQhegBAPhoQAJgfgPgtQgchZhxhFQgDAAiThDIBSgVQBngVBjgFQE8gRCnCZg");
	this.shape_20.setTransform(473.5487,75.2203);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8C9C0").s().p("AgfDkQhegBAPhoQAJgfgPgtQgchZhxhFQgDAAiThDIBSgVQBngVBjgFQE8gRCnCZIAwA3QgNAogyAzQhjBmi2AyQgxATgsAAIgCAAg");
	this.shape_21.setTransform(474.025,75.2203);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("AEOm9IAQAsQAXA3AcA0QBYCoBuBSQghAAgzAIQhmAPhWAlQkRB4gJEzQhWgohvhEQjfiKhgicQADACAagLQAigOAngVQB0hCBPhgQABAAAEgRQAEgXAQgVQA3hJCygvQAAgBBwgqQB2gsAUgMg");
	this.shape_22.setTransform(426.5805,246.5104);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAA558").s().p("AjYFQQjfiJhfidQADACAZgKQAigOAngVQB0hCBPhgQABAAAEgRQAEgXAQgWQA3hICygwIBwgrQB2gsAUgLIAQAsQAXA3AcA0QBYCnBuBSQghABgzAHQhmAPhWAlQkRB5gJEyQhWgnhvhFg");
	this.shape_23.setTransform(426.5625,246.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("AhflRIBpAAQB/ADBvAWQFhBFAuDdQAEgEACAqQADAwgHAtQgWCLhnAKQgRAJgnAGQhPAMhugbQhQAvhpAWQjPAri3h5QhIAOhMgGQiYgMg3haQgBgSgBgeQAAg9AVg4QBFi9EUhpQAEgDBegPQAvgIAvgHg");
	this.shape_24.setTransform(489.745,275.787);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkoD5QhIAOhMgGQiYgMg3haQgBgSgBgeQAAg9AVg4QBFi9EUhpQAEgDBegPIBegPIBpAAQB/ADBvAWQFhBFAuDdQAEgEACAqQADAwgHAtQgWCLhnAKQgRAJgnAGQhPAMhugbQhQAvhpAWQg2ALg0AAQiVAAiHhZg");
	this.shape_25.setTransform(489.745,275.787);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("AAkhmIhGDN");
	this.shape_26.setTransform(463.25,289.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").p("AgPhhIAeDD");
	this.shape_27.setTransform(515.55,290.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AASB6Igjjz");
	this.shape_28.setTransform(515.8,289.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").p("AhFB8ICLj4");
	this.shape_29.setTransform(467,288.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("AAXBtIgtjZ");
	this.shape_30.setTransform(207.775,291.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").p("AgeBxIA9jh");
	this.shape_31.setTransform(155.175,292.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("AopBTIIDA/IDvgNIFaghIjbi0QhJAhh+AIQj8ARkOh6QgWAqgfAxQg+BigtAmg");
	this.shape_32.setTransform(340.248,258.6767);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAA558").s().p("AolBSQAtgmA+hiQAegxAWgqQEOB6D8gRQB/gIBIghIDbC1IlZAgIjwAOg");
	this.shape_33.setTransform(339.875,258.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").p("ABOlLIBWAFQBmANBYAkQEXBzATE2QgPA1g1ApQhqBQi7hDQhJAshtAXQjZAui0hoQg6AQhIgCQiQgFhBhfQgeg9AHhWQANipCzh0IApgQQA0gSA8gOQC/gtDAAQg");
	this.shape_34.setTransform(180.9686,277.1188);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AkgEIQg6AQhIgCQiQgFhBhfQgeg9AHhWQANipCzh0IApgQQA0gSA8gOQC/gtDAAQIBWAFQBmANBYAkQEXBzATE2QgPA1g1ApQhqBQi7hDQhJAshtAXQhDAOg+AAQiPAAh9hIg");
	this.shape_35.setTransform(180.9663,277.1188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.perro, new cjs.Rectangle(-1,-1,557.2,312.7), null);


// stage content:
(lib.Principalrecreacion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.fondo1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("./Pantalla 1 recreacion.html", "_self");
		}
		
		this.fondo2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("./Pantalla 2 recreacion.html", "_self");
		}
		
		this.fondo3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("./Pantalla 3 recreacion.html", "_self");
		}
		
		
		const parent = this;
		
		
		var libSonidos = {
			"fondo": new Audio("sonidos/sonido2.mp3"),
			"perro": new Audio("sonidos/small-dog-barking-102658.mp3"),
		
		};
		
		var fondoSonando = false;
		parent.fondo.addEventListener("click", ()=> {
				if (fondoSonando) {
						libSonidos.fondo.pause();
				}else {
						libSonidos.fondo.currentTime = 0;
						libSonidos.fondo.play();
				}
				fondoSonando=!fondoSonando;
				
				console.log(fondoSonando)
			
		});
		
		var perroSonando = false;
		parent.perro.addEventListener("click", ()=> {
				if (perroSonando) {
						libSonidos.perro.pause();
				}else {
						libSonidos.perro.currentTime = 0;
						libSonidos.perro.play();
				}
				perroSonando=!perroSonando;
				
				console.log(perroSonando)
		
		});
		
		
		
		this.atras.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("pantalla de seleccion.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// boton
	this.atras = new lib.atras();
	this.atras.name = "atras";
	this.atras.setTransform(1690.2,911);
	new cjs.ButtonHelper(this.atras, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.atras).wait(1));

	// botones
	this.fondo3 = new lib.fondo3();
	this.fondo3.name = "fondo3";
	this.fondo3.setTransform(1691.05,674.05,1,1,0,0,0,-0.2,0.1);
	new cjs.ButtonHelper(this.fondo3, 0, 1, 1);

	this.fondo2 = new lib.fondo2();
	this.fondo2.name = "fondo2";
	this.fondo2.setTransform(1680.95,414.3);
	new cjs.ButtonHelper(this.fondo2, 0, 1, 1);

	this.fondo1 = new lib.fondo1();
	this.fondo1.name = "fondo1";
	this.fondo1.setTransform(1678.85,179.6,1,1,0,0,0,-0.1,14.3);
	new cjs.ButtonHelper(this.fondo1, 0, 1, 1);

	this.text = new cjs.Text("", "12px 'MyriadPro-Regular'");
	this.text.lineHeight = 16;
	this.text.parent = this;
	this.text.setTransform(1979.2,198);

	this.text_1 = new cjs.Text("", "12px 'MyriadPro-Regular'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 216;
	this.text_1.parent = this;
	this.text_1.setTransform(1596.2,595.3);

	this.text_2 = new cjs.Text("", "12px 'MyriadPro-Regular'");
	this.text_2.lineHeight = 16;
	this.text_2.parent = this;
	this.text_2.setTransform(2018.6,77.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.fondo1},{t:this.fondo2},{t:this.fondo3}]}).wait(1));

	// arboles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60B53C").s().p("AB+HQQg8gHhDgcIg4gaQi4Bch7hpQg+g1gZhHQkMgSALiaQAFhNA6hIIgJgWQgKgbgCgaQgFhVBPgxQBQgyBFAuQAVAOASAWIAOATQBiiqB/A7QA/AeArA/Qgcg8BCgtQAhgXAngLQAqh4C9AhQBfAQBWAoQBjAZArAgQAjAbAIAqIAGBXQAGA9AZAzQA2BqhBBDQgVAUgeAPIgZAKQgtCahdAIQgeACgegMIgZgNQgxC4ilAAQgRAAgSgBg");
	this.shape.setTransform(352.5129,300.3964);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59A83B").s().p("ACiJSQhZgFhfggIhQgfQkQCAith/QhXhAgghZQmEgJAXjFQAMhiBZhgIgMgbQgNghgBgiQgDhsB2hDQB2hDBhA2QAxAaAZApQCYjdC0BEQBaAiA8BOQgmhKBjg+QAxgfA5gQQBEibEQAfQCJAQB7AvQCOAaA8AnQAyAfAKA2QACBFACApQAFBOAiBAQBICDhiBZQgfAcgsAUIgmAPQhJDGiIAPQgqAFgsgPIgkgPQhTD4kAAAIgfgBg");
	this.shape_1.setTransform(344.3531,297.2772);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C9E32").s().p("Aq2KKQhDgwgvhJQgXglgKgbQnogGAgjvQAKhKA9hZQAegtAdgcIgQghQgQgpAAgoQgDiDCWhTQCVhTB5BAQA9AgAfAwQDCkODiBQQBxAoBKBeQgvhaB9hMQA+gmBIgUQBXi9FXAiQCrASCaA3QCzAeBLAuQA+AmALBAQAEAXAAAoQAAA6ABANQAEBeArBOQBYCfh8BtQgnAig4AZIgwASQhdDyisATQg2AHg3gRIgsgSQhzFAligPQiygHiZhIQivBRiPAAQiIAAhqhKg");
	this.shape_2.setTransform(346.4151,300.5917);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C8E28").s().p("ADzN7Qh1gMiCg2IhsgzQlkCzjtjKQhKg/g2heQgagvgMgiQoGgjAUknQAHhdA7hqQAeg2AcgjIgSgpQgTg0gDgzQgKiiCZhgQCahfCFBXQApAbAjAqIAaAlQC+lGD0BwQB6A5BUB5Qg3hyCBhYQA/gsBLgWQBSjmFtA/QC3AfCmBNQDAAwBSA9QBEAzAPBRQAGAcACAyIAFBZQAKB1AxBjQBnDLh+CBQgnAog6AcIgyAUQhWEoi1APQg4AEg7gYIgwgZQheFllBAAQggAAgigEg");
	this.shape_3.setTransform(347.1223,295.6796);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#308222").s().p("AE+SMQiSgSijhJIiFhFQm1DikrkOQhdhUhFh8Qgig+gPgtQligfiaiHQh8hsAIipQAGh5BHiKQAkhGAigtIgXg3QgZhEgFhCQgQjWC9h5QC8h5CnB0QA0AkAsA4IAhAxQDkmmExCYQBfAvBbBjIBJBaQhHiWCehwQBOg5BcgaQBhkrHGBZQDjAtDPBpQDuBCBoBSQBVBEAVBqQAHAmAEBBQAFBeADAXQAPCZBACDQCDEMiZCmQgwAzhHAkIg9AZQhkGBjgAQQhGAFhKghIg8ghQhCEYiwBuQhtBDiSAAQgsAAgvgGg");
	this.shape_4.setTransform(349.0815,287.2182);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60B53C").s().p("AB/HQQg9gHhDgcIg4gaQi4Bch7hpQg9g1gZhHQkNgTALiZQAFhNA7hIIgKgWQgKgbgBgaQgGhVBQgxQBPgyBFAtQAWAOASAWIANATQBiipB/A7QA/AdAsA/Qgdg7BDguQAggXAngLQAqh3C9AgQBfARBWAoQBjAZArAgQAjAaAIArIAHBXQAFA9AaAzQA1BqhBBCQgVAVgdAPIgaAKQgsCaheAHQgdADgfgNIgZgNQgwC6imAAQgRAAgRgCg");
	this.shape_5.setTransform(424.3329,305.4711);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#59A83B").s().p("ACiJSQhYgFhgggIhQgfQkQCAitiAQhXg/gghaQmEgJAXjEQAMhiBZhgIgMgbQgNghgBgiQgDhsB2hDQB2hDBhA1QAxAbAZApQCYjdC0BDQBbAiA7BOQgmhKBjg+QAxgfA5gQQBEiaERAfQCIAQB7AvQCPAaA8AmQAxAgAKA1IAEBvQAFBOAjBAQBHCDhiBZQgfAcgsAUIgmAOQhIDHiIAPQgrAEgsgOIgjgPQhUD4kBAAIgegBg");
	this.shape_6.setTransform(416.1616,302.3738);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C9E32").s().p("Aq2KJQhDgwgvhJQgXgkgKgbQnogGAgjvQAKhLA9hZQAegsAdgdIgQggQgQgpgBgpQgCiCCVhUQCWhTB6BAQA9AhAfAwQDCkODhBQQBxAoBKBeQgvhaB+hMQA+gmBIgVQBXi8FWAiQCrARCaA3QCzAfBLAtQA+AmAMBBQADAWAAApIABBHQAEBeArBNQBZCgh9BtQgnAig4AZIgwASQhdDyisATQg2AHg3gRIgsgSQhzE/ligOQhvgFh4gmIhkgkQivBRiPAAQiIAAhqhLg");
	this.shape_7.setTransform(418.2358,305.6661);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C8E28").s().p("ADzN7Qh2gMiBg1IhsgzQlkCyjtjKQhLg/g1heQgbgvgMgiQoFgiAUkoQAGhcA8hrQAdg2AdgjIgTgpQgTg0gDgyQgKijCahfQCahgCFBXQApAbAjAqIAaAlQC+lGD0BxQB6A4BUB5Qg3hyCBhYQA/gsBLgVQBSjnFtA/QC3AfCmBNQDAAwBSA9QBEAzAPBRQAFAcADAyIAEBZQAKB1AyBjQBnDLh+CBQgnAog6AcIgyAUQhWEoi1APQg4AEg7gYIgwgZQhfFllAAAQggAAgigEg");
	this.shape_8.setTransform(418.9723,300.7308);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#308222").s().p("AE+SNQiSgSijhJIiFhGQm2DikqkOQhehUhEh7Qgig+gQgtQlhggibiHQh7hrAIiqQAGh4BHiLQAjhFAjguIgYg2QgZhEgEhDQgQjVC8h6QC9h5CmB0QA0AlAsA3IAhAxQDlmmEwCYQBgAwBbBjIBIBaQhGiXCehwQBNg4BdgbQBhkrHGBZQDjAtDPBpQDvBDBnBRQBVBEAVBrQAHAlAEBBQAFBeADAXQAPCaBACCQCDEMiZCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghIg8ghQhsHKmDAAQgtAAgwgGg");
	this.shape_9.setTransform(420.9094,292.2961);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#60B53C").s().p("AB/HQQhigKhWgzQi4Bch7hpQg9g1gZhHQkMgTAKiZQAFhNA7hIIgKgWQgKgbgBgaQgGhVBQgxQBPgyBFAuQAWAOASAWIANATQBjiqB+A7QAoASAlAnIAeAjQgdg7BDguQAggXAngLQAqh3C9AgQBfARBWAoQBjAZArAgQAjAbAIAqIAHBXQAFA9AZAzQA2BqhBBCQgUAVgeAPIgaAKQgsCaheAHQgvAEgmgbQgwC6imAAQgQAAgSgCg");
	this.shape_10.setTransform(199.3647,191.4711);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#59A83B").s().p("ACjJSQiNgIh7g8QkQCAitiAQhXg/gghaQmFgJAYjEQALhiBahgIgNgbQgNghgBgiQgDhsB2hDQB2hDBiA1QAeARAZAbIATAYQCYjdC0BEQA4AVA1AvIApAsQgmhKBjg+QAxgfA5gRQBEiaEQAfQCJAQB7AvQCOAaA8AnQAyAfAJA2QACBEADAqQAEBOAjBAQBHCDhiBZQgfAcgsAUIgmAOQhIDHiIAPQhEAHg2ggQhUD4kAAAIgegBg");
	this.shape_11.setTransform(191.1866,188.3738);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C9E32").s().p("Aq2KJQhDgwgvhJQgXgkgKgbQnogGAgjvQAKhKA9hZQAegtAdgcIgQghQgQgpAAgoQgDiDCWhTQCVhUB6BAQAmAVAfAgIAXAcQDCkODhBQQBHAZBBA5IAzA0QgvhaB+hMQA+gmBIgVQBXi8FWAiQCsARCZA3QCzAfBLAtQA+AmALBBQAEAWAAApQAAA5ABAOQAEBeArBNQBYCgh8BtQgnAig4AZIgwASQhdDyisATQhWAKhDgmQhzE/ligOQixgIiahHQivBRiOAAQiJAAhqhLg");
	this.shape_12.setTransform(193.2651,191.6661);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C8E28").s().p("AD0N7Qh2gMiCg2QhBgagqgZQlkCyjujKQhKg/g2hdQgagvgMgiQoGgjAUkoQAHhcA7hqQAeg2AcgjIgSgqQgTgzgDgzQgKijCZhfQCahfCFBXQAqAbAiAqIAaAkQC/lFDzBwQBNAjBIBLIA5BDQg2hxCAhYQBAgsBLgWQBSjmFtA/QC2AfCmBNQDAAwBSA9QBEAzAPBRQAGAcACAyIAFBZQAKB1AxBjQBnDLh+CAQgnApg6AbIgyAUQhWEoi1APQhaAIhJg0QheFklBAAQggAAghgDg");
	this.shape_13.setTransform(193.9723,186.7546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#308222").s().p("AE/SNQiSgSikhJQhQglg1ghQm1DikrkOQhdhUhFh7Qgig+gPgtQliggiaiHQh8hsAIipQAGh4BHiLQAkhFAiguIgXg2QgZhEgFhDQgQjVC9h6QC8h5CnB0QA0AlAsA3IAhAxQDlmmEwCYQBfAwBbBjIBJBaQhHiXCehwQBOg4BdgbQBgkrHGBZQDjAtDPBpQDuBDBoBSQBVBDAVBrQAHAlAEBCQAFBdADAXQAPCaBACCQCDEMiZCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghQglgQgXgRQhsHKmDAAQgsAAgwgGg");
	this.shape_14.setTransform(195.9315,178.2961);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#60B53C").s().p("AB/HQQg9gHhDgcIg4gaQi4Bch7hpQgmghgcgxIgUgqQkNgTALiZQAFhNA7hIIgKgWQgKgbgBgaQgGhVBQgxQBPgyBFAtQAjAXASAgQBiipB/A7QA/AdAsA/Qgdg7BDguQAggXAngLQAqh3C9AgQBfARBWAoQBjAZArAgQAjAaAIArIAHBXQAFA9AaAzQA1BqhBBCQgVAVgdAPIgaAKQgsCaheAHQgdADgfgNIgZgNQgwC6imAAQgRAAgRgCg");
	this.shape_15.setTransform(1465.2829,270.9711);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#59A83B").s().p("ACiJSQhYgFhgggIhQgfQkQCAitiAQg2gngmg9Igbg1QmEgJAXjEQAMhiBZhgIgMgbQgNghgBgiQgDhsB2hDQB2hDBhA1QAxAbAZApQCYjdC0BEQBbAiA7BOQgmhKBjg+QAxgfA5gRQBEiaERAfQCIAQB7AvQCPAaA8AnQAxAfAKA2IAEBuQAFBOAjBAQBHCDhiBZQgfAcgsAUIgmAOQhIDHiIAPQgrAEgsgOIgjgPQhUD4kBAAIgegBg");
	this.shape_16.setTransform(1457.1116,267.8738);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C9E32").s().p("Aq2KJQhDgwgvhJIghg/QnogGAgjvQAKhLA9hZQAegsAdgdIgQggQgQgpgBgpQgCiCCVhUQCWhTB6BAQA9AhAfAwQDCkODhBQQBxAoBKBeQgvhaB+hMQA9gmBIgVQBXi8FXAiQCrARCaA3QCzAfBLAtQA+AmALBBQAEAWAAApIABBHQAEBeArBNQBZCgh9BtQgnAig4AZIgwASQhdDyisATQg2AHg3gRIgsgSQhzE/ligOQhvgFh4gmIhkgkQivBRiPAAQiIAAhqhLg");
	this.shape_17.setTransform(1459.1858,271.1661);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C8E28").s().p("AD0N7Qh2gMiCg2IhrgzQlkCyjujKQhKg/g2hdIgmhRQoGgjAUkoQAHhcA7hqQAeg2AcgjIgSgqQgTgzgDgzQgKijCZhfQCahfCFBXQBCArAkA+QC+lFD0BwQB6A4BUB5Qg3hxCBhYQA/gsBMgWQBRjmFuA/QC2AfCnBNQC/AwBSA9QBEAyAQBSQAFAcACAyIAFBZQAKB1AyBjQBnDLh/CAQgnApg6AbIgxAUQhWEoi1APQg5AFg7gYIgwgZQhfFklAAAQggAAghgDg");
	this.shape_18.setTransform(1459.8973,266.2546);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#308222").s().p("AE+SNQiSgSijhJIiFhGQm2DikqkOQhehUhEh7IgyhrQlhggibiHQh8hsAJipQAFh4BIiLQAjhFAjguIgYg2QgZhEgFhDQgPjVC8h6QC9h5CmB0QBTA6AuBTQDlmmEwCYQBgAwBbBjQAuAyAaAoQhGiXCehwQBNg4BdgbQBhkrHGBZQDjAtDPBpQDvBDBnBRQBVBEAVBrQAHAlAEBBQAFBeADAXQAPCaBACCQCDEMiZCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghIg8ghQhsHKmDAAQgtAAgwgGg");
	this.shape_19.setTransform(1461.8565,257.7961);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#60B53C").s().p("AB/HQQg9gHhDgcIg3gaQi5Bch7hpQgmghgcgxIgUgqQkMgTAKiZQAFhNA7hIIgKgWQgKgbgBgaQgFhVBPgxQBQgyBEAtQAjAXASAgQBjipB+A7QA/AdAsA/Qgdg7BDguQAggXAngLQAqh3C+AgQBeARBWAoQBjAZArAgQAjAbAIAqIAHBXQAFA9AaAzQA1BqhBBCQgUAVgeAPIgaAKQgsCahdAHQgeADgegNIgZgNQgxC6imAAQgQAAgSgCg");
	this.shape_20.setTransform(1703.7473,302.4711);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#59A83B").s().p("ACiJSQhYgFhgggIhPgfQkRCAitiAQg2gngmg9Igbg1QmEgJAXjEQAMhiBZhgIgMgbQgNghgBgiQgDhsB2hDQB2hDBiA1QAxAbAZApQCYjdC0BDQBaAiA8BOQgmhKBjg+QAwgfA5gQQBEiaERAfQCIAQB7AvQCPAaA8AmQAyAgAJA1IAFBvQAEBOAjBAQBICDhjBZQgeAcgsAUIgmAOQhJDHiIAPQgrAEgsgOIgjgPQhUD4kBAAIgegBg");
	this.shape_21.setTransform(1695.5892,299.3738);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C9E32").s().p("Aq2KJQhEgwguhJIghg/QnogGAgjvQAKhLA9hZQAegsAcgdIgPggQgQgpgBgpQgCiCCVhUQCWhTB6BAQA9AhAfAwQDCkODhBQQBxAoBKBeQgvhaB+hMQA9gmBIgVQBXi8FXAiQCrARCaA3QCzAfBLAtQA+AmALBBQAEAWAAApIABBHQAEBeArBNQBZCgh9BtQgnAig4AZIgwASQhdDyisATQg2AHg3gRIgsgSQhzE/ligOQhvgFh5gmIhjgkQivBRiOAAQiJAAhqhLg");
	this.shape_22.setTransform(1697.6608,302.6661);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3C8E28").s().p("AD0N7Qh2gMiCg1IhrgzQlkCyjujKQhLg/g1heIgnhRQoGgiAVkoQAGhcA8hrQAdg2AdgjIgTgpQgTg0gDgyQgJijCZhfQCahgCFBXQBCArAkA/QC+lGD0BxQB6A4BUB5Qg3hyCBhYQA/gsBLgVQBSjnFtA/QC3AfCmBNQDAAwBSA9QBEAzAQBRQAFAdACAxIAFBZQAKB1AyBjQBmDLh+CBQgnAog6AcIgyAUQhVEoi1APQg5AEg7gYIgwgZQheFllBAAQgfAAgigEg");
	this.shape_23.setTransform(1698.3599,297.7308);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#308222").s().p("AE/SNQiSgSikhJIiFhGQm1DikrkOQhehUhEh7IgyhrQlhggibiHQh8hsAJipQAGh4BHiLQAkhFAiguIgYg2QgYhEgFhDQgQjVC9h6QC8h5CnB0QBTA6AtBTQDlmmExCYQBfAwBbBjQAuAyAbAoQhHiXCehwQBOg4BdgbQBgkrHGBZQDjAtDQBpQDuBDBnBRQBVBEAVBrQAIAlADBBIAIB1QAPCaBACCQCEEMiaCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghIg8ghQhsHKmDAAQgsAAgwgGg");
	this.shape_24.setTransform(1700.3242,289.2961);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#60B53C").s().p("AB/HQQg9gHhDgcIg4gaQi4Bch7hpQgnghgcgxIgUgqQkMgTALiZQAFhNA7hIIgKgWQgKgbgCgaQgFhVBQgxQBPgyBFAtQAjAXASAgQBiipB/A7QA/AdArA/Qgcg7BCguQAhgXAngLQAqh3C9AgQBfARBWAoQBjAZArAgQAjAbAIAqIAGBXQAGA9AaAzQA1BqhBBCQgVAVgdAPIgaAKQgsCaheAHQgdADgfgNIgZgNQgwC6imAAQgRAAgRgCg");
	this.shape_25.setTransform(1633.2828,237.9711);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#59A83B").s().p("ACiJSQhZgFhfggIhQgfQkQCAitiAQg3gnglg9Igbg1QmEgJAXjEQAMhiBZhgIgMgbQgNghgBgiQgDhsB2hDQB2hDBhA1QAxAbAZApQCYjdC0BEQBbAiA7BOQgmhKBjg+QAxgfA5gRQBEiaEQAfQCJAQB7AvQCOAaA8AnQAyAfAKA2IAEBuQAFBOAjBAQBHCDhiBZQgfAcgsAUIgmAOQhIDHiJAPQgqAEgsgOIgkgPQhTD4kBAAIgegBg");
	this.shape_26.setTransform(1625.1115,234.8738);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C9E32").s().p("Aq2KJQhEgwguhJIghg/QnogGAgjvQAKhKA9hZQAegtAcgcIgPghQgQgpgBgoQgCiDCVhTQCWhUB6BAQA9AhAfAwQDCkODhBQQBxAoBKBeQgvhaB+hMQA9gmBIgVQBXi8FXAiQCrARCaA3QCzAfBLAtQA+AmALBBQAEAWAAApIABBHQAEBeArBNQBZCgh9BtQgnAig4AZIgwASQhdDyisATQg2AHg3gRIgsgSQhzE/ligOQhvgFh5gmIhjgkQivBRiOAAQiJAAhqhLg");
	this.shape_27.setTransform(1627.1608,238.1661);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3C8E28").s().p("AD0N7Qh2gMiCg2IhrgzQlkCyjujKQhLg/g1hdIgnhRQoGgjAVkoQAGhcA8hqQAdg2AdgjIgTgqQgTgzgDgzQgJijCZhfQCahfCFBXQBCArAkA+QC+lFD0BwQB6A4BUB5Qg3hxCBhYQA/gsBLgWQBSjmFuA/QC2AfCnBNQC/AwBSA9QBEAyAQBSQAFAcACAyIAFBZQAKB1AyBjQBmDLh+CAQgnApg6AbIgyAUQhVEoi1APQg5AFg7gYIgwgZQheFklBAAQgfAAgigDg");
	this.shape_28.setTransform(1627.8599,233.2546);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#308222").s().p("AE/SNQiSgSikhJIiFhGQm1DikrkOQhehUhEh7IgyhrQlhggibiHQh7hsAIipQAGh4BHiLQAkhFAiguIgXg2QgZhEgFhDQgQjVC9h6QC8h5CnB0QBTA6AtBTQDlmmExCYQBfAwBbBjQAuAyAbAoQhHiXCehwQBOg4BdgbQBgkrHGBZQDjAtDQBpQDuBDBnBRQBWBEAUBrQAIAlADBBQAGBdACAYQAPCaBACCQCEEMiaCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghIg8ghQhCEZiwBtQhtBDiTAAQgrAAgugFg");
	this.shape_29.setTransform(1629.8272,224.7831);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#60B53C").s().p("AB/HQQg9gHhDgcIg3gaQi5Bch7hpQgmghgcgxIgUgqQkMgSAKiaQAFhNA7hIIgKgWQgKgbgBgaQgFhVBPgxQBQgyBEAuQAjAWASAhQBjiqB+A7QA/AdAsA/Qgdg7BDguQAggXAngLQAqh3C+AgQBeARBWAoQBjAZArAgQAjAbAIAqIAHBXQAFA9AaAzQA1BqhBBDQgUAUgeAPIgaAKQgsCahdAIQgeACgegNIgZgNQgxC6imAAQgQAAgSgCg");
	this.shape_30.setTransform(1711.2473,120.9711);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#59A83B").s().p("ACiJSQhYgFhgggIhPgfQkRCAith/Qg2gogmg9Igbg0QmEgJAXjFQAMhiBZhgIgMgbQgNghgBgiQgDhsB2hDQB2hDBiA1QAxAbAZApQCYjdC0BEQBaAiA8BOQgmhKBjg+QAwgfA5gRQBEiaERAfQCIAQB7AvQCPAaA8AnQAyAfAJA2IAFBuQAEBOAjBAQBICDhjBZQgeAcgsAUIgmAOQhJDHiIAPQgrAEgsgOIgjgPQhUD4kBAAIgegBg");
	this.shape_31.setTransform(1703.0892,117.8738);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C9E32").s().p("Aq2KJQhEgvguhJIghhAQnogGAgjvQAKhKA9hZQAegtAcgcIgPghQgQgpgBgoQgCiDCVhTQCWhUB6BAQA9AhAfAwQDCkODhBQQBxAoBKBeQgvhaB+hMQA9gmBIgVQBXi8FXAiQCrARCaA3QCzAfBLAtQA+AmALBBQAEAXAAAoIABBHQAEBeArBOQBZCfh9BtQgnAig4AZIgwASQhdDyisATQg2AHg3gRIgsgSQhzE/ligOQhvgFh5gmIhjgkQivBRiOAAQiJAAhqhLg");
	this.shape_32.setTransform(1705.1608,121.1661);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3C8E28").s().p("AD0N7Qh2gMiCg2IhrgzQlkCyjujKQhLg/g1hdIgnhRQoGgjAVkoQAGhcA8hqQAdg2AdgjIgTgqQgTgzgDgzQgJijCZhfQCahfCFBXQBCArAkA+QC+lFD0BwQB6A4BUB5Qg3hxCBhYQA/gsBLgWQBSjmFtA/QC3AfCmBNQDAAwBSA9QBEAyAQBSQAFAcACAyIAFBZQAKB1AyBjQBmDLh+CAQgnApg6AbIgyAUQhVEoi1APQg5AFg7gYIgwgZQheFklBAAQgfAAgigDg");
	this.shape_33.setTransform(1705.8599,116.2546);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#60B53C").s().p("AB/HQQg9gHhDgcIg4gbQi4Bdh7hpQgmghgcgxIgUgqQkNgTALiaQAFhMA7hJIgKgVQgKgbgBgaQgGhVBQgyQBPgxBFAtQAjAXASAgQBiipB/A7QA/AdAsA/Qgdg7BDguQAggXAngLQAqh3C9AgQBfARBWAoQBjAZArAgQAjAaAIArIAHBXQAFA9AaAzQA1BphBBDQgVAVgdAOIgaALQgsCaheAHQgdADgfgNIgZgNQgwC6imAAQgRAAgRgCg");
	this.shape_34.setTransform(1442.7829,130.2211);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#59A83B").s().p("ACiJSQhYgFhgggIhQgfQkQCAitiAQg2gngmg9Igbg1QmEgJAXjEQAMhjBZhfIgMgbQgNgigBghQgDhsB2hDQB2hDBhA1QAxAbAZApQCYjdC0BDQBbAiA7BOQgmhKBjg+QAxgfA5gQQBEiaERAfQCIAQB7AuQCPAbA8AmQAxAgAKA1IAEBvQAFBOAjBAQBHCDhiBZQgfAcgsAUIgmAOQhIDHiIAPQgrAEgsgOIgjgPQhUD4kBAAIgegBg");
	this.shape_35.setTransform(1434.6116,127.1065);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4C9E32").s().p("Aq2KJQhDgwgvhJIghg/QnogGAgjvQAKhLA9hZQAegsAdgdIgQggQgQgpgBgpQgCiCCVhUQCWhTB6BAQA9AhAfAwQDCkODhBQQBxAoBKBeQgvhaB+hMQA+gmBIgVQBXi8FWAiQCrARCaA3QCzAfBLAtQA+AmAMBBQADAWAAApIABBHQAEBeArBNQBZCgh9BsQgnAig4AZIgwASQhdDyisAUQg2AHg3gRIgsgSQhzE/ligOQhvgFh4gmIhkgkQivBRiPAAQiIAAhqhLg");
	this.shape_36.setTransform(1436.6858,130.4161);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3C8E28").s().p("AD0N7Qh2gMiCg1IhrgzQlkCyjujKQhKg/g2heIgmhRQoGgjAUknQAHhdA7hqQAeg2AcgjIgSgpQgTg0gDgyQgKijCZhfQCahgCFBXQBDArAjA/QC+lGD0BxQB6A4BUB5Qg3hyCBhYQA/gsBMgVQBRjnFuA/QC2AfCnBNQC/AwBSA9QBEAzAQBRQAFAcACAyIAFBZQAKB1AyBjQBnDLh/CBQgnAog6AcIgxAUQhWEoi1APQg5AEg7gYIgwgZQhfFllAAAQggAAghgEg");
	this.shape_37.setTransform(1437.3973,125.4808);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#308222").s().p("AE+SNQiSgSijhJIiFhGQm2DikqkOQhehUhEh7IgyhrQlhggibiHQh8hsAJipQAFh5BIiKQAjhGAjgtIgYg3QgZhEgFhCQgPjVC8h6QC9h5CmB0QBTA6AuBTQDlmmEwCYQBgAwBbBjQAuAyAaAoQhGiXCehwQBNg4BdgbQBhkrHGBZQDjAtDPBpQDvBDBnBRQBVBEAVBrQAHAlAEBBQAFBeADAXQAPCaBACCQCDEMiZCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghIg8ghQhCEZiwBtQhtBDiTAAQgrAAgvgFg");
	this.shape_38.setTransform(1439.3565,117.0331);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#60B53C").s().p("AB9HKQg3gIg+geIgxgcQijBXhxhsQgkgigagxIgUgrQjxgaAFiYQADhLAyhHIgJgWQgKgbgCgaQgHhUBGgvQBGgvA/AvQAfAYASAhQBTilBzA+QA6AeApBAQgbg7A6gsQAdgWAigKQAih1CrAmQBWATBOAqQBaAcAnAhQAgAbAJAqIAIBXQAHA8AYA0QAzBqg4BBQgSAUgaANIgXAKQgjCXhUAFQgbABgbgNIgXgOQglCyiPAAQgSAAgUgDg");
	this.shape_39.setTransform(1579.3547,361.9046);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#59A83B").s().p("ACgJKQhPgHhXgjIhIghQjxB3ifiDQgygpgjg9Igag1QldgVAQjCQAHhhBOhcIgMgbQgNgigCghQgGhrBohAQBog/BZA4QAtAdAYAoQCCjXCkBJQBRAkA4BPQgkhKBXg7QArgdAzgOQA4iYD2AnQB7ATBvAyQCBAfA3AoQAuAhAKA1IAHBuQAGBNAhBAQBECFhVBVQgbAagnATIgiANQg7DDh6ALQgmADgogPIgggQQhCDsjbAAQgUAAgVgCg");
	this.shape_40.setTransform(1571.9982,358.8249);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4C9E32").s().p("ADCLJQhjgIhtgpIhagnQkxCUjGieQg+gxgshKIgghAQm2gUAWjsQAHhJA0hXQAagqAYgdIgPggQgPgpgCgpQgGiCCEhOQCEhOBvBDQA4AiAdAxQCmkHDNBWQBnArBFBfQgthaBuhIQA3gkBAgSQBJi5E0AsQCbAXCLA7QCiAjBEAvQA5AoAMBAIAICFQAHBeAoBOQBUCghtBoQgiAhgxAXIgrARQhNDtiZAPQgwAEgygSIgogTQhXEikYAAQgWAAgYgBg");
	this.shape_41.setTransform(1574.0027,362.2936);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3C8E28").s().p("ADxNxQhqgQh3g5Ihhg1Qk6CmjbjPQhFhBgzheIglhSQnSgxAKklQADhbAzhoQAZg0AYgiIgSgqQgSgzgEgzQgOiiCHhaQCIhaB5BaQA9AtAiA/QChk9DeB2QBwA7BOB7Qg0hzBxhUQA4gpBCgTQBDjiFKBIQClAkCXBSQCtA1BMA/QA/A0AQBRQAFAcAEAyIAHBYQAMB1AvBjQBiDMhtB8QgiAngzAaIgsASQhFEkiiAJQgyADg2gaIgsgaQhIFWkUAAQgjAAgmgFg");
	this.shape_42.setTransform(1574.5037,357.5659);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#308222").s().p("AE7SAQiDgXiVhNIh5hIQmCDSkUkUQhXhWhBh8IgvhsQpDhKAGl/QACh4A8iHQAehEAegsIgXg3QgYhEgHhCQgUjUCmhzQClhzCZB4QBNA8ArBTQDBmcEWCgQBXAyBVBlQAqAzAZAoQhDiXCKhrQBFg1BRgYQBOkmGaBmQDNAzC+BuQDXBJBfBUQBPBGAWBqQAIAlAFBBIAKB0QASCZA9CDQB+EOiFCgQgpAyg/AhIg2AXQhPF7jIAJQg/ADhDgjIg3gjQhRG5lOAAQgvAAg1gJg");
	this.shape_43.setTransform(1576.1118,349.483);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#60B53C").s().p("AiPHYQhOg8gwhYQjOgRgziaQgZhNAQhJQjciaBZh+QAshABYggIADgXQAGgcAMgYQAnhLBegBQBegBAjBLQALAXAEAcIACAXQCshdBMBzQAZAkAMA1IAHAtQAGhBBRgFQAogCAnALQBihRCRB/QBIA/A1BPQBIBJAUAwQAQApgPAoIgoBOQgbA3gEA5QgKB3haAXQgcAHghgDIgcgEQh1BthUgqQgagOgUgaQgKgOgFgKQhTBRhUAAQhFAAhGg1g");
	this.shape_44.setTransform(451.5607,182.5238);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#59A83B").s().p("AFkKZQgngSgegjQgPgSgHgOQjUCzjpigQh0hPhKh0QksgghSjGQgphkAThcQlHjRB6icQA9hOB+gkIADgeQAHgjAQgeQA2hdCHADQCIAEA4BhQARAeAHAkIAEAeQD1hvB2CYQAlAvAUBEIANA6QAGhTB1gBQA6gBA5AQQCKhhDZCoQBtBUBRBoQBsBfAfBAQAaA2gTAyIg2BhQgkBEgEBJQgHCXiCAZQgpAIgwgGIgogHQhyBchfAAQgqAAgmgSg");
	this.shape_45.setTransform(446.0721,175.8039);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C9E32").s().p("AHKMsQgxgWgngrQgTgVgJgRQkJDWkmjFQiThihfiNQl5grhqjyQghhMgBhXQgBgqAFgcQmekCCXi8QAvg6BjgtQAxgWAngLIAEgkQAHgrAVgjQBBhxCrAGQCrAHBHB2QAWAkAKAsIAFAkQEyiCCWC5QAwA6AaBSIARBHQAGhkCTgBQBKAABIAUQCsh0ETDPQCKBoBnB/QCJB1AoBOQAiBBgYA9QgJAVgUAjQgeAwgHANQgtBSgDBZQgIC2ijAdQgzAJg8gHIgzgKQiNBth2AAQg2AAgxgXg");
	this.shape_46.setTransform(446.2483,179.7618);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3C8E28").s().p("AkUOKQhehHhUhyQgrg5gXgqQmMgghjkoQgehdAChsQACg1AHgkQmpkpCrjyQA1hMBrg9QA1geArgQIAFgtQALg2AXgtQBMiQC1gCQC1gBBFCPQAVAsAIA2IADAtQFMi0CVDfQAvBFAXBmIAOBXQAMh+CcgIQBOgFBLAVQC+iaEYDzQCMB5BmCYQCKCNAnBeQAgBOgdBNQgKAcgYArIgqBPQg0BpgJBuQgSDkivAtQg2AOhAgGIg1gJQjiDRijhRQgygagngzQgTgagJgUQihCbijAAQiFAAiIhng");
	this.shape_47.setTransform(450.4682,174.8231);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#308222").s().p("AltSiQhzhchmiTQgzhJgcg4Qnrghh0mCQgkh4AGiOQADhGAKgvQkejRg+jDQgyidBfiMQBEhkCFhSQBCgpA1gVIAIg7QAOhHAfg8QBhi+DggGQDggGBSC5QAaA6AIBHIADA6QGfjyC0EgQA5BaAaCEIAQBzQASilDBgPQBggHBdAaQDujOFWE4QCrCcB7DFQCpC1AuB6QAmBngmBlQgNAkgfA6QgrBRgKAWQhDCMgNCQQgbErjaA+QhEAThOgGIhCgLQkdEWjHhmQg/ggguhDIgig8QjKDOjOACIgEAAQikAAigh+g");
	this.shape_48.setTransform(457.6555,167.9165);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#60B53C").s().p("ACKH5QhigOhYg6Qi3Bhh/h3Qg/g7gbhOQkPgbAHioQADhSA5hPIgKgYQgLgdgCgdQgHhdBOg0QBPg0BHA0QAWAQASAYIAOAVQBfi2CBBDQAoAVAnAsIAfAnQgehCBCgwQAfgYAngLQAoiBC/AoQA8ANBEAcIA4AaQBkAeAsAkQAkAdAKAvIAIBfQAHBCAbA5QA5B0hABIQgUAWgeAPIgZALQgpCnheAFQgvADgngeQgsDFihAAQgTAAgWgDg");
	this.shape_49.setTransform(174.292,276.9895);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#59A83B").s().p("ACxKGQiOgMh9hFQkPCFiyiQQhZhIgjhiQmHgUASjWQAJhrBYhmIgOgeQgOglgBglQgGh1B1hHQB1hGBkA9QAfAUAaAeIATAaQCTjtC4BOQA5AZA2A1IArAwQgphSBjhBQAwggA5gQQBAinEUApQCKAVB9A2QCQAgA9AsQAzAkALA6IAIB5QAGBVAlBHQBLCRhgBeQgeAegsAUQgWALgQAEQhEDXiJANQhEAGg3gkQhMEFj4AAQgVAAgWgBg");
	this.shape_50.setTransform(166.0424,273.5894);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4C9E32").s().p("ADWMRQizgNichSQlWCljeisQhFg2gxhRQgYgpgLgdQnrgTAakEQAIhRA7hgQAdgvAcgfIgRgkQgRgtgCgtQgFiOCUhXQCUhXB9BJQAnAXAgAkIAYAfQC8kiDlBdQBIAdBDBAIA1A6QgxhiB8hRQA9goBIgUQBTjMFaAvQCtAXCdBAQC0AmBNA0QBAArAMBGQAFAZABAsIACBOQAHBnAtBVQBdCwh7B0QgmAkg3AaIgwASQhYEGisARQhWAJhFgsQhkFDk9AAQgXAAgZgCg");
	this.shape_51.setTransform(168.2618,277.3549);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3C8E28").s().p("AEJPKQh2gQiGg+QhBgfgrgcQliC6j0jjQhNhHg4hnQgcg0gNgmQoLgzANlCQAEhlA5hyQAdg6AbgmIgTgtQgVg5gEg4QgOiyCYhkQCYhjCJBhQAqAfAkAvIAbAoQC3leD5CBQBOAoBKBUIA8BLQg6h+B/hdQA/guBLgVQBMj5FyBNQC5AnCpBYQDCA6BUBFQBGA5ASBYQAGAfADA3IAHBhQAOCAA0BtQBtDhh8CJQgmArg6AdIgxAUQhPFBi2ALQhbAGhLg6QhUF6k4AAQgmAAgpgFg");
	this.shape_52.setTransform(168.8838,272.1338);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#308222").s().p("AFcT0QiUgXimhUQhTgqg1glQmzDrk0kuQhghfhIiIQgkhFgRgxQllgrifiYQiAh5AEi4QADiEBFiVQAihLAhgxIgZg8QgbhKgGhJQgWjqC7h/QC7iACqCEQA2ApAtA9IAjA2QDbnGE3CtQBhA3BfBuIBLBkQhLimCch3QBOg7BcgaQBZlFHMBuQDlA3DUB3QDyBPBqBcQBYBNAXB0QAJApAFBIQAIBlADAaQATCoBECQQCLEoiWCyQgvA3hHAlIg9AZQhaGijhAMQhGADhMglQglgTgYgUQg7ExivBzQhmBDiLAAQgyAAg3gJg");
	this.shape_53.setTransform(170.6741,263.1407);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#60B53C").s().p("AB+HQQhhgLhWgzQi4Bdh7hpQg9g1gZhHQkMgTAKiaQAFhMA7hJIgKgVQgKgbgBgaQgGhVBQgxQBPgyBFAtQAWAOASAWIANATQBiipB/A7QA/AdAsA/Qgdg7BCguQAhgXAmgLQAqh3C+AgQBfARBWAoQBjAZAqAgQAkAaAIArIAGBXQAFA9AaAzQA2BphBBDQgVAVgeAOIgZALQgtCahdAHQgeADgegNIgZgNQgxC6ilAAQgRAAgSgCg");
	this.shape_54.setTransform(265.3647,386.4711);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#59A83B").s().p("ACiJSQiNgIh6g8QkQCAitiAQhXg/gghaQmFgJAYjEQALhjBahfIgNgbQgNgigBghQgDhsB2hDQB2hDBiA1QAeARAZAbIATAYQCYjdC0BDQBaAiA8BOQgmhKBjg+QAwgfA5gQQBEiaERAfQCIAQB7AuQCPAbA8AmQAyAgAJA1QACBFADAqQAEBOAjBAQBHCDhiBZQgfAcgsAUIgmAOQhIDHiIAPQgrAEgsgOIgjgPQhUD4kBAAIgegBg");
	this.shape_55.setTransform(257.1866,383.3565);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4C9E32").s().p("Aq2KJQhDgvgvhJQgXglgKgbQnogFAgjvQAKhLA9hZQAegtAdgcIgQghQgQgogBgpQgCiDCWhTQCVhTB6BAQAmAUAfAgIAXAdQDCkPDhBQQBxAoBKBeQgvhZB+hNQA9gmBIgUQBXi9FXAjQCrARCaA3QCzAeBLAuQA+AmALBAQAEAXAAAoQAAA6ABAOQAEBdArBOQBYCgh9BsQgnAig3AZIgwASQheDyirAUQg2AGg3gRIgsgSQhzFAligPQiygHiZhIQivBRiOAAQiJAAhqhLg");
	this.shape_56.setTransform(259.2608,386.6471);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3C8E28").s().p("ADzN7Qh1gMiCg1QhBgbgqgYQlkCyjujKQhKg/g2heQgagvgMgiQoGgiAUkoQAHhcA7hrQAeg2AcgjIgSgpQgTg0gDgyQgKijCZhfQCahgCFBXQAqAbAiAqIAaAlQC/lGDzBxQBNAjBIBKIA5BEQg2hyCAhYQA/gsBLgVQBSjnFtA/QC3AfCmBNQDAAwBSA9QBEAzAPBRQAFAcADAyIAEBZQAKB1AyBjQBnDLh+CBQgnAog6AcIgyAUQhWEoi1APQg4AEg7gYIgwgZQhfFllAAAQggAAgigEg");
	this.shape_57.setTransform(259.9723,381.7308);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#308222").s().p("AE/SMQiSgSikhJQhQgkg1ghQm1DhkrkNQhdhUhFh8Qgig9gPgtQliggiaiHQh8hsAIipQAGh5BHiKQAkhGAigtIgXg3QgZhEgFhCQgQjVC9h6QC8h5CnB0QA0AlAsA3IAhAxQDlmmEwCYQBfAwBbBjIBJBaQhHiXCehwQBOg4BcgbQBhkrHGBZQDjAtDPBpQDvBDBnBRQBVBEAVBrQAHAlAEBBQAFBeADAXQAPCaBACCQCDEMiZCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghIg8ghQhsHJmCAAQgtAAgwgGg");
	this.shape_58.setTransform(261.9315,373.276);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#60B53C").s().p("AB/HQQhhgKhWgzQi5Bch7hpQg9g1gZhHQkMgSAKiaQAFhNA7hIIgKgWQgKgbgBgaQgGhVBQgxQBPgyBFAuQAWAOASAWIANATQBjiqB+A7QAoASAlAnIAeAjQgdg7BDguQAggXAngLQAqh3C9AgQBfARBWAoQBjAZArAgQAjAaAIArIAGBXQAGA9AZAzQA2BqhBBDQgVAUgeAPIgZAKQgtCahdAIQgvADgmgbQgwC6imAAQgQAAgSgCg");
	this.shape_59.setTransform(228.0647,146.4211);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#59A83B").s().p("ACiJSQiNgIh6g8QkRCAith/QhXhAgghZQmEgJAXjFQAMhiBZhgIgMgbQgNghgBgiQgDhsB2hDQB2hDBhA1QAfARAZAbIASAYQCYjdC1BEQA4AVA1AvIApAsQgmhKBjg+QAwgfA5gRQBEiaERAfQCIAQB7AvQCOAaA8AnQAyAfAKA2QACBEACAqQAFBOAiBAQBICDhiBZQgfAcgsAUIgmAOQhIDHiJAPQhEAHg2ggQhTD4kBAAIgegBg");
	this.shape_60.setTransform(219.9059,143.3238);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4C9E32").s().p("Aq2KJQhDgvgvhJQgXglgKgbQnogGAgjvQAKhKA9hZQAegtAdgcIgQghQgQgpAAgoQgDiDCWhTQCVhUB6BAQAmAVAfAgIAXAcQDCkODhBQQBHAZBBA5IAzA0QgvhaB+hMQA+gmBIgVQBXi8FWAiQCsARCZA3QCzAfBLAtQA+AmALBBQAEAXAAAoIABBHQAEBeArBOQBYCfh8BtQgnAig4AZIgwASQhdDyisATQg2AHg3gRIgsgSQhzE/ligOQixgIiZhHQiwBRiOAAQiJAAhqhLg");
	this.shape_61.setTransform(221.9737,146.6161);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3C8E28").s().p("AD0N7Qh2gMiCg2QhBgagqgZQlkCyjujKQhKg/g2hdQgagvgMgiQoGgjAUkoQAHhcA7hqQAeg2AcgjIgSgqQgTgzgDgzQgKijCahfQCahfCEBXQAqAbAiAqIAaAkQC/lFDzBwQBNAjBIBLIA5BDQg2hxCAhYQBAgsBLgWQBSjmFtA/QC2AfCmBNQDAAwBSA9QBEAzAPBRQAGAcACAyIAFBZQAKB1AxBjQBnDLh+CAQgnApg6AbIgyAUQhVEoi1APQg5AFg7gYIgwgZQheFklBAAQggAAghgDg");
	this.shape_62.setTransform(222.6723,141.7046);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#308222").s().p("AE/SNQiSgSikhJQhQglg1ghQm1DikrkOQhdhUhFh7Qgig+gPgtQliggiaiHQh8hsAIipQAGh4BIiLQAjhFAjguIgYg2QgZhEgFhDQgQjVC9h6QC8h5CnB0QA0AlAsA3IAhAxQDlmmEwCYQBgAwBbBjIBIBaQhGiXCdhwQBOg4BdgbQBgkrHGBZQDjAtDQBpQDuBDBnBSQBVBDAVBrQAIAlADBCIAIB0QAPCaBACCQCDEMiZCmQgwA0hHAjIg9AZQhkGCjgAPQhGAFhKghIg8ghQhsHKmDAAQgsAAgwgGg");
	this.shape_63.setTransform(224.6315,133.2461);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2A7C1E").s().p("AfZaRQkpgliggWQqthgh+hYI5JBXQk2AglgAQQrCAfjYhPIgngdQgvgmgugsQiTiMhKiRQhnjLA7i3QBKjlFDi6IgOgqQgSg9gNhFQgrjgAUjUQAdkpCYjhQC/kZF4iVQADAABog9QCFhJCHg1QG3itFuBCICNgyQC1hBCnghQIxhtFwDvQAAAFCdARQDUAXCaAdQIzBpC1DnQAsAWA/ArQB9BXBlB3QFDF9geJFQCTGXAFGOQAEFciDDJQikD7lvAFQgCgEjKgYg");
	this.shape_64.setTransform(294.7815,220.6797);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2A7C1E").s().p("AfZVbQkogdihgTQqthOh+hII5KBHQk1AalhANQrBAajZhBQg6ghhKg5QiThzhJh2QhnilA7iWQBJi7FDiXIgOgjQgRgxgOg5Qgri2AVitQAcjzCZi3QC/jlF3h6QAEAABogxQCEg8CHgrQG3iOFuA2ICNgpQC2g0CngbQIxhZFwDDQAAAECdAOQDVATCZAXQIzBWC1C8QABACBqA0QB+BHBkBgQFDE3geHaQCTFMAFFFQAEEciDCjQikDNlvAEQgCgDjKgUg");
	this.shape_65.setTransform(1593.3065,150.2922);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BC7B4B").s().p("EAHHAgHQAZgTAUgUQB3h4g4h7QgFgXhCgQQiEghkuAjQwiDMifApIghhDIBQADQBngBB3gQQF8gzGHi7IARgMQAUgRAVgZQBBhTAtiNQCPnHiCt0QgwmhhFnGQiMuJhpisIBZgNQAcCjAxCcQBiE4BogjIAvgfQA2gtAlg+QB4jJhekzIAjAUQAkAOAJgaQADgJANFqQANFfAZhzIA1gbQBEgpBShCQEEjUElmLIBHAcQirDdiqDiQlTHHALAeQhKJLg9I7Qh7R4A9hHIAKBVQAQBlAbBUQBUEOCbABIApAbQAxAgAuAWQCGBAA8ggInuFAQgTAQgXAPIgqAYg");
	this.shape_66.setTransform(1539.9,394.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BC7B4B").s().p("AGFf7QAWgRAUgTQB7h0g0h9QgFgXhCgTQiCglktAZIopBaQo8BdhkAWIgghEQBwAQC/gTQF9gnGNivQAZgMAigoQBGhQAwiMQCdnChjt4Qgjmjg2nGQhvuOhkivIBagKQAXCkAsCdQBXE7BpgfIAwgfQA4gqAng+QB+jEhTk1QAQAMASAIQAkAPAJgZQADgJABFqQACFfAdhyQBIgZCGhmQEMjMEymAIBGAeQizDXixDdQlhG7AJAfQhdJHhPI6QigRzA+hFIAIBVQANBlAXBWQBLEQCcAGIAnAcQAxAhAtAYQCDBFA/geIn1EuQgrAggwAWg");
	this.shape_67.setTransform(227.3,516.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A0683A").s().p("AlGaUQBQg2AAgKQAugnAPhCIAGg7IgXgHQgYgIAAgFQg1ggljAmQlWAtADgEQAIgHvOByIAAhDQGYANGjisQDQhVB2hTQCHhTgCqPQgBjVgPjPQgOjCgDA2IgBAUQgBADgDgOIgeirQhXn0irtTIDcAAIBqD2QA3DVBHgYQAYgIAPgdQAPgcgMADQARgPAOjWQAGhrADhoIDpg1IAAHmIA2gHQAzgFgMAMQgLANFKj4IFOj7QCIAiAPAAQitB0k/GkQhbB5hwCeQhXB7gCABQhoHjDnJOQBIC3BhCwQAxBXAiA1QD+GpLZDSQDjBBD4AlQB7ASBPAFIgCAUQgCAUAEAAQi4ApqNh7QjMgnjjgyIi5grQhHAOhEALQiIAVAIgMQhxBTkKB4Ij3Bng");
	this.shape_68.setTransform(1603.9,434.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A0683A").s().p("EgFFAgkQBPhCAAgNQAugxAPhSIAGhIQgvgQAAgIQg1gpljAwQiwAYiiAaQAEgFnlBEInmBFIAAhSQGYAPGjjUQCChBByhQIBTg+QCGhogCsqQgBkIgOkBQgOjvgDBCIgCAYQgBAEgDgRIgdjUQhYpqirwdIDcAAIBrExQA2EHBIgeQAXgKAPgjQAPgjgMAEQASgTANkJQAGiEADiBIDohCIAAJaIA2gJQA0gGgMAPQgLAQFKkzIFNk3IBPAYQBAASAJAAQitCQk/IIQigEFiEDuQhoJVDmLbQBIDjBiDZQAxBsAiBBQD+IOLYEEQDkBRD4AtQB7AXBPAGQgHAxAHAAQi4A0qNiZQlHhMkihXQhGARhEANQiJAbAJgQQhxBnkLCVQiGBKhvA2QAogfAogig");
	this.shape_69.setTransform(295.475,512.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// pelota
	this.instance = new lib.pelota();
	this.instance.setTransform(744.85,787.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// perro
	this.perro = new lib.perro();
	this.perro.name = "perro";
	this.perro.setTransform(705.9,600.05,1,1,0,0,0,277.7,155.2);

	this.timeline.addTween(cjs.Tween.get(this.perro).wait(1));

	// las_nuves
	this.instance_1 = new lib.nube3();
	this.instance_1.setTransform(1409.85,251.45,1,1,0,0,0,-0.1,-0.2);

	this.instance_2 = new lib.nube2();
	this.instance_2.setTransform(978.75,131.05,1,1,0,0,0,-0.2,-0.2);

	this.instance_3 = new lib.nube1();
	this.instance_3.setTransform(361.45,173.15,1,1,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// huesos
	this.fondo = new lib.fondo();
	this.fondo.name = "fondo";
	this.fondo.setTransform(961.95,544.05,1,1,0,0,0,961.1,542);

	this.timeline.addTween(cjs.Tween.get(this.fondo).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(228.9,540,1797.8999999999999,546);
// library properties:
lib.properties = {
	id: 'BEB0D92AE3A146429F1104D077C06FFD',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BEB0D92AE3A146429F1104D077C06FFD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;