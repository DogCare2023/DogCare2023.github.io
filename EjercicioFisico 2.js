(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"EjercicioFisico 2_atlas_", frames: [[0,0,1623,738],[1812,0,137,129],[1625,0,185,175]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["EjercicioFisico 2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.spriteSheet = ss["EjercicioFisico 2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["EjercicioFisico 2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.mascara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,153,255,0.008)").s().p("EiVyBUYMAAAiovMErlAAAMAAACovg");
	this.shape.setTransform(958.7,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mascara, new cjs.Rectangle(0,0,1917.5,1080), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuMK1IAA1pIcZAAIAAVpg");
	mask.setTransform(90.9,69.3);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B2296").s().p("Aj6BgIE8kzIA3gXQA/gXAoADIARAGQAQAKgJAXQgKAXggAkIgeAfIAiAbQAiAfgIAaQADAHgIAMQgQAYg4AdIhDAMIAeASQAfAVAEAHIAFAPQAAASgTAMIgfAWIAMANQAMARAAAVIgHAQQgPASgnAHIgvAHg");
	this.shape.setTransform(82.9,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36CFF2").s().p("Ai7FbIAigFQAjgHAHgSQAIgMADgRQAHgigUgXIA3AGQA7ACAagPIAPgKQAOgOgHgUQgIgWgVgIIgpgRIAogGQArgGAPgHIAUgKQASgMgLgNQgCgFgIgFQgQgLghgEIgogFIA6gTQA9gVAPgKIAOgMQANgPgHgRQgEgHgIgGQgJgFgIgBQhCgIhFAUIBRgqQBSguAFgSQAFgKABgNQACgYgTgIQgNgEgNAEIhfAfIgKgOIBBhKQALgNACgOQAEgVgPgEIgIAAQg9AHgjAUIhwBCIAwgwQBDgzBWgSQAUgEASAGQATAHABAMIgDAfQgLAlgmAjIAdgIQAjgFAZAPQARALACATQAGAtg2AlIguAYIA3AJIAOAGQAPAJAEASQAEATgLARQgOAUgWAHIgPAGIgmATIAYAJQAYAOgCAXQAAAGgHAIQgNAQgiAKIgjAIIAGAEQAVARgBAcQAAAbgWAQQgnAfg/gHIgcgFIgBAiQgBATgLAPQgMAQgSAHQgTAHgUAAQgKAAgLgCg");
	this.shape_1.setTransform(127.6,77.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#114DF4").s().p("AhTJZQhWgBg0ggIgDgKQj7h7gNgXQCtihDJjPQGTmdCQjnQAeApANA/QAZB/hZBwIAjAKQAjAQADAeIgBAjQgBARgEAMQgHAWgUARIAKALQAMAPAGASQAWA5giBGIgxBGIAIAHQAJAJAFAMQARAlgeA0QgeA1gSAKQgDACgDAEQgWAbgEAdQgEAigQAcQgGAKgYAWQgXAUgMAGQhFAkg8AXQheAkgvgFQgeAGgoAAIgGAAg");
	this.shape_2.setTransform(106.7,60.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5).p("AgcABQACAAADgBIAGAAIAAAAIgGAA");
	this.shape_3.setTransform(15.8,79.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5).p("AAvgdIgBAAIhIAuIABAAg");
	this.shape_4.setTransform(18.9,85.5,1,1,0,0,0,-0.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5).p("AhzAmIgBACQANAGAcACQA2AEBDgYIBJguIhmgdIgLACQhAARg5BCQBjgeA8gK");
	this.shape_5.setTransform(12.3,84.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD200").s().p("AhMAwQgcgCgNgGIABgCQA5hCBAgRIALgCIBmAdIhJAuQg7AUgwAAIgOAAg");
	this.shape_6.setTransform(12.4,84.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7F0DA").s().p("AgKANQgFgGAAgHQAAgGAFgGQAFgFAFAAQAHAAAFAFQAEAGAAAGQAAAHgEAGQgFAFgHAAQgFAAgFgFg");
	this.shape_7.setTransform(27.6,76);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAVQgKgJAAgMQAAgMAKgIQAJgJANAAQAOAAAJAJQAKAIAAAMQAAAMgKAJQgJAJgOAAQgNAAgJgJgAgRgMQgFAGAAAGQAAAHAFAGQAEAFAHAAQAGAAAEgFQAFgGAAgHQAAgGgFgGQgEgFgGAAQgHAAgEAFg");
	this.shape_8.setTransform(28.3,76);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC800").s().p("AiBC5QgZgHgTgLIgOgIQg9geg8g9Igwg3QgNgNgUguIgRgsQgEgVgJgYIgHgVQgBgEgPgUIgOgTQAkgIAvAKQAYAGAQAHQAVAGA7AnQAlAdB9BbQAkAdBRAaQApANAiAHQAzAMA0gDQAbgBAQgDQA4gEAygLQAZgGAOgFQAwgSARgCQhQBgijA3QgyARg1ALIgrAIQgeACgbAAQhPAAg9gTg");
	this.shape_9.setTransform(82.3,116.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2656FF").s().p("AALgcQgGAlgPAUQAGgVAPgkg");
	this.shape_10.setTransform(60.8,66.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2656FF").s().p("AgeAbQA5gcAugtIAHACQhNBNhTAOQAVgGAdgOg");
	this.shape_11.setTransform(88.5,80.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2656FF").s().p("AhDgVICHArQhqgVgdgWg");
	this.shape_12.setTransform(121.4,115.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2656FF").s().p("AibGjIg5gIQg9gLgWgMQgZgKgdgOQg7gcgUgXQgWgSgYgZQgwgwgJgeQgxhqgCgYQgEgOgIgPQgPgdgUgGQgRgOgXgPQgugfgfgHIg3gWIAEgCIACgBIBIguIAAAAIABgBIhlgdIgCABIgBAAIgZAFQAJg6Aig7QBDh4B7gMIAbgEQAigEAiADQBtAKBFBJIgBAJIAIgRQBtBJDdBAQgvAtg6AdQgdAOgUAGQBUgOBNhOQBBATBPATIByAaQBsBMAMALIA3AmQA/AnAoAOQEUBCAYABIANAJQAKALgTAOIi5gSIC4AYIAJAIQAGAKgSASIg0gDIi2gKIAsAEIAtADICRALIAMAGQAJAKgQAOQgFAGgTAHQg7AXiAgBIgfgDIgcgDQiWgOhpgUIiIgsQAdAXBrAVIANAEQgHANgRATQgjAmg0AcQgVANgdAPQg8AdguALQgdALgpALQhEARg1AAIgZgBgApYgBIAOASQAOAUABAEIAIAVQAIAYAFAVIARAsQAUAvANANIAwA3QA8A9A9AeIAOAIQATALAZAHQBSAZBzgIIArgIQA0gLAzgRQCig3BRhgQgRACgxASQgNAFgZAGQgyALg4AEQgQADgbABQg0ADgygMQgigHgpgNQhTgagjgeQh+hbgkgdQg7gngVgGQgRgHgXgGQgagEgXAAQgSAAgQADgArCjjQgKAJAAAMQAAANAKAJQAJAJAOAAQAOAAAJgJQAKgJAAgNQAAgMgKgJQgJgJgOAAQgOAAgJAJgAlxkMQAQgVAHglQgRAlgGAVg");
	this.shape_13.setTransform(96.7,96.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B2296").s().p("AkTF6QBFi5BCjDQCEmHgLgyIAXAWQAcAcAWAjQBEBwgZCFIAwgFQAxAGAIAxIADAmQABAngMALIAtAiQArAngHAZIjyFBg");
	this.shape_14.setTransform(88.4,47.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,181.8,138.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A8bZcMAAAgy3MA43AAAMAAAAy3g");
	mask_1.setTransform(182,162.8);

	// Capa_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CADF22").s().p("AhEBTIgFgSQgfhQBZgqQArgVAzgFQARBwhRAnQghAQglAAIgNgBg");
	this.shape_15.setTransform(148.8,197.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CADF22").s().p("AkgHPQgUgHgSgRIgOgQQgkAmgzgIIgrgQQgZgrA1hQIA5hIQg1gUgKgiQgDgKABgLIACgIQh1hRA8hEQATgUAjgRIAegNQgWguArgeIAvgVQgfiIBNgPQAngIAtAUQgXggAygmQAYgTAdgNQAXgJA0AdQAZAPAWAQQgJg9A9gtQAfgXAggKQAogGAjA8QASAeAKAgQAtgmAwAdQAXAOAPAWQBog/A0AeQAaAPAGAcQAkAohYBSQgtAogzAhQAqAFAIAoQAEAUgFASQBzA/hLBIQgmAkg8AXQgLA3hKgIQgYgDgagIIgWgIQgWBdhEgVQgVgHgXgRIgTgQQg8DFhMAKQgYADgXgQIgRgRQg5BIg2AAQgNAAgNgFg");
	this.shape_16.setTransform(95.2,116);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8CD0F").s().p("AgdI8QgqgRgsgnIgjgjQgZAXgsgVIgngZQhUAogvg6QgPgSgJgaIgGgWQgnBphRACQgZABgagKIgWgJQhAgpgIhWQgDgbAEgcIAEgXQgzgRgogmIgegjIAEABIgKgDQgzgPgYg0IgOgxQAAhFBhgaQAwgMAwABQgWhAAfg6QAKgSAOgPIAMgMQA4g6BNAVQAmAKAbAWQALgaAhgKQARgGAPAAQBiiiAwAOQAYAHAFAnQBLgaBAAiQAgARARAWQAGg9BSgnQApgTApgHQAOhZBfggQAwgPAtACQBZAogPByQgIA5gaAxQBMgMArA9QAWAeAHAgQBiiLBoAsQA1AWAgAyQBGBIguBRQgOAZgYAWIgWASQCHAWgmBdQgTAvguApQh5BGhkghQgfgKgagTIgTgRIgxAcQAUDLiaAuQgwAPg7gDIgygGQg7CAhcAAQgfAAghgOg");
	this.shape_17.setTransform(206.3,208.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8CD0F").s().p("Aq2PqQgYgTgUgfIgQgbQgZA9hEgGQgWgCgXgIIgTgIQgqA9hEABQgWAAgVgGIgRgFQg7hjAugzQAOgQAXgJQAMgFAJgBQgGgXALgjIANgeQg7ARgxgZIgkgdQgihRAkg2QALgRARgMIAPgIQgOgpA7g6IA+gyQghgFgFgqIADgpQgUADgwgYIgtgZQhDhJAJhJQADgXAKgUIAKgPQAsg8BfAsQAvAXAmAiQgJgUATgfIAVgbQghglAEhHIALg/QAag9A9AGQAfADAaAPQgLgVASgMIAUgJQgtggAihHQAKgWARgXIAPgTQgTAOhDgDIg+gGQhAgsAXgbQAIgIAPgGIAOgEIAAhBQgigoAAgzIAHgrQAfg3ApAPQAVAIAOASQAtgIAZA9QAMAfAEAgQA1gXA1AeQAaAPAQAUQAiguAqgOQAVgHAPACQgcguiShLIiNhBQAtgdA7AaQAdANAUASQAwgmDGAnQBkATBaAaQAFgXhqggIhqgcQBJhpBQARQApAIAaAdQA7h0A7AEQAeADASAZQAFg9A3gRQAcgJAbAEQBJARgLBwQgGA4gUA0QBUgGDTA6QBqAdBYAeQAMgPAqgIQAWgEATgBQgCgmgpgcIA7AaQBXAnBIAmQAegRAsAlQAWASAQAWQAoglAtglQB5AJAOBVQAIAqgRApQgiBXhlAZQggAIgiABIgMAAIACAEQAwBuhZBBQgcAUgmAOIggAJQgRB6hTALQgaAEgdgIIgZgIQgvB2hkgbQgfgJghgWIgagUQgtAGg4g7Igwg+QgcAsgfgUIgagcQAzBOhIAqQgWANggAJIgcAFQBMA0ABCAQAABAgOA1QgzBjgxgVQgPgHgOgRIgKgRQgvCGhCAJQgVADgUgKIgQgKQgIAuhCACIhBgHQAUA3gnAbQgUANgYADQBEB8goB9QgVA+ghAlQg2A3g7gYQgTgIgRgPIgNgNQgzA2gvAAQggAAgegXgAHzs5IALACQArAHAkAMQAvAPAdAUQhpgsg9gMg");
	this.shape_18.setTransform(133,108.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#80B40B").s().p("AG+X8QgmgQgogpIghgmQhABOhEgvQgWgPgSgaIgQgXQh7BvhQg/QgZgUgSgiIgNgfQhhBfhBg0QgTgQgPgdIgLgaQhoAfglhWQgMgcgEgjIgBgeQglAVgggVIgYgZIgkB2QgfByhoAOQghAFgjgGIgdgHQhEgZAKhXQAEgcALgeIAKgZQgtAXgqgXIghgcQh9AjgMhIQgDgXAIgfIAJgaQgfAogygHIgtgPQgsg4AHhXQADgbAHgcIAHgVQggAIgQg+IgJhAQhAArhCgXQgUgIgSgNIgPgLQhQAPgugYQgNgIgKgLIgGgJQg9hIAzhMQAQgYAZgWIAXgRQh0hgAhhAQAKgTAYgPIAWgKQhHhqA4hFQATgVAbgPIAZgLQhZhFgeiAQgJgogCgqIgBghQAihuBegTQAvgKAoAMQgBhPA2gKQAcgFAbALQgehnAzglQAQgMAWgEQALgCAIAAQh+iAAXiPQAGgtAVgqIATggQBPhoBcAUQAtAKAeAfQAkhSAggeQAigjAbAfQANAPAHAWQAqh3hCgGQgWgCgdAKIgYAKQgfhZBGhlQAkgzAqggQC5g9BABNQAhAngFAzQBjhiBzAlQA6ATAmAmQBwhJBNBJQAmAlAPAzQAXhRBJAAQAkAAAhAQQAfgDAXBHQAMAjAGAkQBUg0DgA4QBxAcBgAmQA9g6AyAJQAYAFAMAQQDFgRAHCNQADBHgkBKQCuAvh3CgQglAyg/A3Ig2AtQAngLAZA3QAMAcAFAeQAtgOAfAWQAQALAHAOQAhgmA5AEQAcACAUAJQBMA0hNB7QgYAmglApIgfAhQATAAARAmQAJASAEATQAcg9BHgEQAlgCAeALQBUBFgtB/QgWBAgoAyQBdgsAjA5QARAdgBAlQAcgyBKgWQAlgLAfgBQBJApgYBkQgMAygcApQA8AGAdAsQAPAWAEAVQgDCahQATQgYAGgegIIgZgJQgFCMhFAgQgXAKgZgBIgVgEQhDCriDAtQgoAOgqAAIgigDQAXCahlAIQggACgogMIgigNIAACHQgfCzhzgsQgkgNgpgjIghggQg7CzheAAQgWAAgYgJg");
	this.shape_19.setTransform(170.4,154.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#669F08").s().p("ACvYyQg2gdgtg5Igjg0QkGCcixhfQg4gegogzIgdgtQhZBohagcQgcgIgZgVIgTgTQk/CohziqQgkg1gLhQIgEhGQjVg0gxjAQgPg8AChDIAGg3QkugvASi1QAFg4Alg/IAkg0QhlhdAohBQANgVAZgPIAXgLQhlhFA/hPQATgZAigWIAegRQi/koBxhyQAjgjA9gNQAegHAYABQgGguA9gTQAegJAfAAQgWhGAogzQANgQARgMIAPgJQiSluCihDQBQghBuAnQAihuA2gHQAbgEAUATQAig0hGgfQgWgJgegGIgZgEQB8kcCmAsQBTAWA6BPQA+hGB7AOQA+AHAxAVQB2guBFA8QAjAeALAnQBlh0BaBUQAtAqAYBBQBOAADWAcQBqANBbAOQGOiiCOEyQAsBgANCDQAHBBgDAvQC5A0ArCgQAVBQgPBGQBOALAAAqQAAAVgQATQFyBXgEElQgCBcgmBmQgUAzgTAgQEIE6kLCrQhTA2h/AhIhuAWQgFB0hhBUQgwAqgvASQgRFzkvAFQheABhwgjIhdgkQiPCsiCAAQgxAAgvgYg");
	this.shape_20.setTransform(182.8,164.6);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,364.1,325.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EhBgAXbMAAAgu1MCDBAAAMAAAAu1g");
	mask_2.setTransform(419.3,149.9);

	// Capa_3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CADF22").s().p("Ag5AhQgZgoBGgWQAigKAogDQANA5g/AUQgTAGgaABIgVABg");
	this.shape_21.setTransform(117.1,234.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CADF22").s().p("AjiDtQgRgDgNgJIgLgIQgdATgogEIgigIQgUgWAqgpIAtglQgqgKgIgSIABgPQhdgpAwgjQAPgKAbgJIAYgGQgSgYAigPIAlgLQgYhGA9gHQAegEAjAKQgRgQAngUIAqgRQASgEAoAPQAVAHAQAJQgGgfAvgYIAygRQAfgDAcAfQAOAQAIAQQAkgUAlAPQASAIAMALQBRghAqAQQAVAIAEAOQAdAUhGAqQgjAVgoARQAhADAGAUQADAKgEAJQBbAgg7AlQgeASgvAMQgJAcg7gEIg4gKQgSAwg1gLIgxgUQgwBlg8AFQgTABgRgIIgOgJQgsAmgrAAQgKAAgKgDg");
	this.shape_22.setTransform(74.9,192.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8CD0F").s().p("AgXElQghgJgjgTIgbgSQgUAMgigLIgfgNQhCAVglgeQgMgJgHgNIgFgMQgfA2hAABQgTAAgVgFIgRgFQgzgVgGgsIAEgnQgogJgfgUIgYgSIAKABIgPgCQgngHgTgbIgLgZQAAgjBMgNQAlgHAmABQgRghAZgdIAcgYQAsgdA8AKQAeAGAVALQAJgNAbgGQANgCALAAQBNhUAmAHQATAEAEAUQA7gNAzARQAZAJANALQAFgfBAgUQAhgKAfgDQAMguBLgQQAlgIAjABQBHAVgMA6QgGAdgVAZQA8gGAiAfQARAQAGAQQBNhHBSAXQApALAaAZQA3AlgkAqQgTAUgdANQBqALgeAwQgPAXgkAWQhfAjhOgQQgZgGgUgJIgPgJIgnAOQAQBoh5AYQgmAHgvgBIgngDQguBChIAAQgZAAgagIg");
	this.shape_23.setTransform(162.4,239.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8CD0F").s().p("AoiIBQgTgJgQgQIgMgOQgUAfg2gDIgygJQghAfg2ABIgvgGQgugzAkgaQALgIASgFQAJgCAHgBQgEgMAJgSIAJgPQguAJgmgNIgdgPQgagqAcgbIAigTQgLgVAvgeIAxgZQgbgDgDgVIABgVQgPABgmgMIgjgNQg1glAHgmQACgMAIgKIAIgIQAjgeBKAWQAlAMAeASQgGgLAPgQIAQgOQgagSADgkIAJghQAUgfAwADQAZACAUAHQgJgKAOgHIAQgEQgjgQAaglIAighQgQAIg0gCIgxgDQgygXASgNIAdgKIAAghQgbgVAAgaIAGgWQAYgcAgAIQARAEALAJQAkgEATAfQAKAQACAQQAqgMAqAQQAVAIAMAKQAagYAigHQARgDALABQgWgYALgmIAPgiQAjgOAuANQAXAGAQAKQAlgUAfAUQAQAKAIAOQAEgMAqgRQAWgIAUgGQA5g2A/AJQAgAEAUAPQAvg8AuACQAYACAOANQAEgfAsgJQAXgFAVACQA5AJgJA5QgEAdgQAaQBCgDApAeQAUAPAHAPQAOgMA8gCQgCghAigTQASgJARgDQA8ADALAoQAGAVgGATQAYgJAjATQARAKAMALQAggTAjgTQBfAEAMAsQAGAWgOAUQgaAthQANIg9AEIABACQAmA5hGAhQgjARgqAFQgNA/hCAGQgUACgYgEIgTgFQglA8hPgOQgYgEgagLIgVgLQgjADgsgdIglggQgWAWgZgKIgUgOQAnAog4AVIhBAOQA8AbABBBQAAAhgLAbQgoAygngKQgMgEgLgJIgIgIQgkBEg0AFQgQACgQgFIgNgGQgGAYg0ABIgzgDQAPAcgfANIgiAIQA1BAggBAQgPAggbATQgqAcgvgNIgmgSQgoAcgmAAQgYAAgYgMg");
	this.shape_24.setTransform(104.7,188.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#80B40B").s().p("AFfMRQgegIgggVIgZgUQgzApg1gZQgRgHgQgOIgLgLQhhA4g/ggQgUgKgOgSIgKgPQhNAwgygaQgQgJgMgPIgIgNQhSAQgdgsQgJgOgDgSIgBgQQgdALgagKIgSgNIgcA8QgZA6hSAIQgZACgdgDIgXgDQg1gNAIgtQADgOAIgQIAIgMQgjAMghgMIgagOQhjASgJgmQgCgLAHgQIAHgOQgZAVgogDIgigIQgkgdAGgtIANgnQgZAEgMgfIgIghQgyAWg0gMIgpgQQhAAIgjgNIgYgOQgwglAognQANgMAUgMIASgIQhcgyAbggQAHgKAUgIQAIgDAJgCQg4g2AsgjQAPgLAVgIQALgEAJgCQhHgigXhCQgHgVgCgVIgBgRQAbg4BKgKQAlgFAgAGQgCgoArgGQAWgCAVAFQgXg0AogTQAMgGASgCIAPgBQhjhCARhKQAFgXARgVIAPgQQA+g2BIALQAlAFAYAQQAcgqAYgQQAbgSAWAQQAKAIAFALQAhg9BJgDQAlgBAeALQgYguA3g0IA9grQCSgfAzAoQAZAUgDAaQBNgzBbAUQAtAJAeAUQBYglA8AlQAeATAMAaQASgqA6AAQAeAAAZAIQAYgBATAkQAJASAEATQBDgbAzAcQAZAPANATQAxgdAmAEQAUADAKAIQCagJAFBJQADAkgcAmQCJAYheBSQgvAphKAkQAfgGAUAdQAJAOADAPQAkgHAZALQAMAGAFAHQAagTAsACQAXABARAEQA7Abg8A/QgfAggqAaQAPAAANATQAHAJAEAKQAWgfA4gCQAcgBAYAFQBDAkgkBAQgRAhggAZQBKgWAbAdQAOAPgCATQAXgaA6gLQAdgFAZgBQA5AVgUAzQgJAZgVAWQAuADAYAWQAMAMACAKQgBBPg/AKQgUAEgYgFIgTgEQgEBHg3ARQgRAFgVgBIgQgCQg1BYhmAXQggAHghAAIgbgBQARBPhPAEQgZABgfgHIgbgGIAABFQgYBchbgXQgdgHgfgRIgagRQgvBchJAAQgSAAgTgFg");
	this.shape_25.setTransform(134.2,211.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#669F08").s().p("ACKMsQgrgOgjgeIgbgaQjPBQiLgxQgsgPgfgaIgXgXQhHA1hHgOQgWgFgTgKIgPgKQj8BWhahXQgcgbgIgpIgDgkQiogbgnhiQgMgfACgjIAFgcQjugXAOhdQAEgdAdghIAcgaQhPgwAgghQAKgKATgIIASgGQhPgjAxgpQAQgMAagLIAXgJQiViXBYg7QAbgSAwgHQAYgDATAAQgFgXAwgKQAYgFAZAAQgSgjAggbIAjgTQhyi7B/giQA/gRBXAUQAag5ArgDQAVgCAQAJQAagaBHgQQAjgHAegDQBhiRCDAWQBBALAuApQAxgkBhAHQAwAEAnAKQBdgXA2AfQAbAPAJAUQBPg7BHArQAjAVAUAhQA+AAAqAPQAVAHAJAHQE5hTBwCdQA3BOgHBfQCSAbAhBSQARApgMAkQA+AGAAAVQAAALgNAJQEkAtgECWQgCBLg8BDQDQCgjSBYQhCAchjARIhXALQgEA8hMAqQgmAWglAJQgOC+juADQhLABhYgTIhJgSQhwBYhmAAQgnAAglgNg");
	this.shape_26.setTransform(143.9,217.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CADF22").s().p("AiEA7Qg4hICggnQBPgSBcgEQAeBliSAjQgtALg5ACIgxAAg");
	this.shape_27.setTransform(448.5,178.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CADF22").s().p("AoKGkQgmgHgggPIgZgPQhCAihbgHIhPgOQgtgoBfhIQAwgkA5gdQhhgSgSgeQgGgKADgKIAEgHQjVhKBtg9QA3gdBigQQgpgqBNgbQAngOAvgFQg4h8CMgNQBGgHBRASQgogdBZgjQAtgRA1gMQAogIBeAbQAvANAmAPQgPg4BvgoQA4gVA7gJQBHgGBBA3QAgAbASAdQBSgiBVAaQArANAaAUQC8g6BgAbQAwAOAKAZQBCAlihBKQgyAXhDAXIg5AUQBNAFAOAkQAHASgIAQQDQA5iIBBQgqAVhIASIhAAPQgUAyiGgHIiCgSQgpBUh6gTQgmgGgqgPIgigPQhvCziKAJQgrACgogPIgggPQhmBChiAAQgYAAgXgEg");
	this.shape_28.setTransform(351.5,105.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8CD0F").s().p("Ag1IGQhOgQhPgjIg/gfQgtAVhQgTIhGgXQiYAkhVg0QgbgQgRgYIgLgUQhHBfiTACQgtAAgwgIIgngJQh1glgOhOQgEgYAGgaIAHgUQhbgQhJgjIg3gfIADAAIgOgCQhbgNgsgwQgNgOgIgRIgEgNQAAg+CvgXQBXgMBYABQgpg6A5g0QAcgaAlgPQBlg1CKATQBGAKAwAUQAVgYA9gJQAegFAbAAQCyiTBXANQAsAGAIAkQCJgYB0AfQA5APAfAUQAKg4CVgiQBMgRBJgHQAZhRCtgdQBWgOBSACQCiAlgcBnQgOA0gvAsQCJgLBPA3QAoAbAMAdQCyh+C9AoQBeAUA7AtQB/BChTBIQgaAXgsAVIgnAQQD0AUhFBUQgWAagyAeIguAYQjbA/i0geQg5gJgugRIgigQIhaAaQAkC4kXAqQhXANhsgDIhagFQhrB0imAAQg3AAg9gNg");
	this.shape_29.setTransform(552.8,188.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8CD0F").s().p("AzrOLQgrgRgkgcIgcgZQguA3h8gFQgngCgqgHIgigHQhMA3h8ABQgnABgngGIgfgFQhqhZBTguQAqgXA/gGQgLgVAVgfQAKgQAMgMQhrAQhXgXQgbgHgXgKIgQgJQg9hKBBgwQAhgYAsgKQgZglBsg0QA1gaA7gTQg9gGgIglQgCgMADgOIADgLQgjADhYgXIhQgWQh6hCARhCQAFgUASgTQAJgJAIgFQBSg2CqAoQBVAUBFAgQgPgTAjgcQARgOAUgLQg9ghAIhAQADgUAJgVIAJgQQAug3BvAFQA4ADAvANQgVgSAhgMQAQgFAVgCQhRgdA9hAQAeggAvgbQgkANh4gDIhxgGQh1gnArgYQAWgMAsgEIAAg7Qg9glAAguQAAgPAHgNIAGgLQA3gyBMAOQAlAHAbAQQBRgIAtA4QAWAcAGAdQBhgVBfAcQAwANAcASQA9gqBNgNQAngGAaACQgygqAYhDQAIgVAOgVIANgRQBRgaBqAXQA0AMAlARQBWgjBHAjQAkASASAYQAKgVBigeQAxgPAugKQCEhfCSAPQBJAIAvAaQBqhpBsAEQA2ACAgAXQALg3BlgQQAzgIAxADQCEAQgUBlQgLAzgkAvQCYgGBeA1QAvAaAQAcQAUgNBNgIQAngEAigBQgFg6BQghQAngRApgFQCJAFAaBHQAOAkgPAjQA4gQBPAiQAoARAcAUQBKgiBRgiQDaAIAbBNQANAmgeAlQg9BPi3AXQg6AHg+ABIgWAAIADADQBXBkihA7QgyAShEAMIg7AJQgfBuiWALQgvADg2gHIgsgIQhWBri1gYQg4gIg7gTIgwgTQhRAFhmg1IhWg4QgyAog5gSQgSgGgQgLIgNgJQBbBHiCAmQgoAMg6AHIgyAFQCJAvACB0QABA6gaAwQhbBahagTQgcgGgYgQIgTgPQhVB5h4AIQgmADgkgJIgdgKQgPAqh4ACIh1gGQAkAyhIAYQgWAIgeAEIgaACQB6BxhJBwQgXAkgoAeIgjAYQhgAyhsgWQghgHgfgNIgYgMQhcAyhXAAQg5AAg3gWg");
	this.shape_30.setTransform(419.9,97.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#80B40B").s().p("AMpVrQhHgOhIglIg6gjQh1BHh7grQgngOgjgXIgbgUQjfBjiSg4QgtgSghggIgXgbQiwBWh1gvQgkgPgagaIgTgXQi+AchEhPQgVgYgGggIgCgcQhEAUg5gTIgrgXIhBBqQg6Boi8ANQg7AEhBgFIg1gGQh6gXAThPQAGgZATgbQAKgOAIgJQhRAVhMgVIg7gZQjjAfgVhCQgGgUAPgcQAHgOAJgKQg5AlhbgGIhPgOQhRgzANhPQAEgZANgYIANgUQg6AHgcg4QgJgRgFgWIgDgSQhzAnh3gVQgmgHghgMIgagKQiRAOhTgXQgagHgQgJIgLgJQhwhBBdhFQAvgjBFgVQjShYA8g5QAegdBHgLQiAhgBng/QAzgfBNgMQiig+g2h0QgRgkgFgmIAAgeQA9hkCrgRQBVgJBJALQgDhIBjgJQAxgEAyAKQg2hdBcgiQAugSA5ACQjjh0AniCQANgpAlglQATgTAQgKQCOhfCnATQBTAJA3AcQBBhLA4gbQBAgfAwAbQAYAOALAUQBNhsCogFQBVgCBFATQg4hSCAhbQBAguBLgdQFPg4B2BHQA7AjgIAuQCyhZDRAiQBpARBFAiQDKhBCKBCQBFAhAdAuQAohKCGAAQBDABA7AOQA4gDArBBQAVAgAKAgQCZgvB2AyQA6AaAdAiQBwg0BZAIQAtAEAWAPQFkgQAMCAQAGBBhBBDQE7AqjXCRQhEAthwAyIhjApQBIgKAsAyQAXAZAIAcQBRgNA5AUQAcAKAMAMQA9giBmADQAzACAmAIQCJAviMBwQgrAjhDAlIg5AeQAjAAAfAhQAPARAIARQAzg3CCgDQBBgCA3AJQCYA/hRBzQgZAkguAlIgpAeQCogoA/A0QAfAagCAhQAzgsCGgUQBDgKA5gBQCEAlgtBaQgWAtgxAmQBrAFA3AoQAbAUAGATQgFCLiQASQgtAFg2gHIgsgIQgKB+h+AeQgoAJgugCIgmgDQh6CajsApQhJANhNAAIg9gDQAoCMi2AHQg5AChJgLIg9gLIAAB5Qg4CjjSgoQhBgMhJggIg8gcQhrCiirAAQgnAAgrgJg");
	this.shape_31.setTransform(487.7,139.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#669F08").s().p("AE+WcQhhgahSg0Ig+gvQndCNlBhWQhkgbhJguIg1gpQiiBeijgZQgygIgtgTIgjgRQpDCYjPiZQhBgwgUhJQgGgWgBgXIAAgSQmCgvhZivQgcg2AFg9IALgyQolgqAhijQAKg0BDg5QAhgcAggTQi3hUBJg7QAlgdBJgNQi3g/ByhHQA5gjBdgXQlZkMDLhnQBmgzCqACQgKgqBugRQA3gIA5AAQgpg/BJgvQAlgXAsgKQkIlLElg9QCSgeDHAjQA9hkBigGQAxgDAkARQA9gvCjgcQBRgNBFgFQDgkBEsAoQCXAUBpBHQBwg/DgANQBvAGBaATQDVgqB9A3QA/AbAUAkQC3hpCjBLQBRAmAtA7QCOAABiAZQAwANAVAMQLRiTEAEVQBQBXAYB3QAMA7gEAqQFPAvBNCRQAnBJgdA/QCOAKABAmQAAATgdARQKfBPgIEKQgDBThGBcQgWAdgaAaIgWAVQEHCcggB3QgZBgjUBEQiXAwjlAeIjHAVQgKBpivBLQg2AYhBASIg1ANQgfFQolAEQirABjLggIioggQkCCcjrAAQhZAAhXgWg");
	this.shape_32.setTransform(510,149.1);

	var maskedShapeInstanceList = [this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,838.6,299.8), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EiQlAv4MAAAhfvMEhKAAAMAAABfvg");
	mask_3.setTransform(925.4,306.4);

	// Capa_3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B9D609").s().p("AAaEYQALg2gJhKQgTiThohdIAtAdQA0AvArBMIAalSIAFgKIAUI5g");
	this.shape_33.setTransform(258.4,545.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F9E208").s().p("AhWBQQgkghAAgvQAAgtAkgiQAkghAyAAQAzAAAkAhQAkAiAAAtQAAAvgkAhQgkAhgzAAQgyAAgkghg");
	this.shape_34.setTransform(265.7,500.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F41C88").s().p("AiPEyQg5gPgugeQhbg8A8hNIAigaQAlgcAOgFQgyAIgxgIQhigRADhRQAAgTALgbQAWg0A2gjIAKgFQAOgEASAAQA6ABBTAyQgPgagHgfQgPg/AigbQAEgEAJgFQAQgKAWgHQBGgUBhAcIAPAFQARAHALAOQAiAtgqBeIBGgiQBLgeAaAUIATAGQAVAJAPARQAwA3gjBvQgFAKgXAKQguAThZAAIAaAPQAeATATAUQA/BBg9A2QgaAVgkASQhHAkgzgRQg1gTgVglQgKgSgKgxIgHAYQgQAsgcAbQgkAigyAAIgPAAg");
	this.shape_35.setTransform(265.3,498.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B9D609").s().p("AAdDhQANgtgLg7QgVh1h0hKIAyAXQA7AlAvA9IAdkPIAHgIIAVHIg");
	this.shape_36.setTransform(1097.5,276.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9E208").s().p("AhgBAQgogbAAglQAAglAogaQAogaA4AAQA5AAAoAaQAoAaAAAlQAAAlgoAbQgoAbg5AAQg4AAgogbg");
	this.shape_37.setTransform(1105.7,240.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#20C9E0").s().p("AigD1QhAgLgzgZQhlgwBDg+IAmgVQApgWAPgEQg3AGg3gGQhtgOADhAIAMglQAYgrA9gbIALgEQAPgEAVABQBAAABdAoQgQgUgIgaQgRgyAmgWIAOgHQATgIAYgFQBOgQBtAWIAQAEQAUAGAMALQAmAkgwBLIBPgbQBUgYAdAQIAUAFQAYAHARAOQA1AsgnBZQgGAIgZAIQgzAPhjAAIAcAMQAhAPAWAQQBGA0hEAsQgdARgoAOQhQAdg4gOQg7gPgXgdQgMgPgLgnQgCAIgGALQgSAjgfAWQgpAcg4AAIgQgBg");
	this.shape_38.setTransform(1105.2,239);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B9D609").s().p("AAdDhQANgsgLg7QgVh2h0hKIAyAYQA7AkAvA+IAdkQIAGgHIAWHHg");
	this.shape_39.setTransform(380.9,589.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F9E208").s().p("AhgBAQgogaAAgmQAAgkAogbQApgbA3ABQA5gBAoAbQAoAbAAAkQAAAmgoAaQgoAag5ABQg3gBgpgag");
	this.shape_40.setTransform(389.2,553.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#20C9E0").s().p("AigD1QhAgLgzgYQhlgxBDg+IAlgVQApgWAQgEQg3AGg3gGQhtgNADhBQAAgQAMgVQAYgqA9gcIAugHQBBAABdAoQgQgUgJgZQgRgyAngWIANgIQATgIAZgFQBOgQBtAWIAQAEQATAGAMALQAmAlgvBKIBPgbQBUgYAcAQIAVAFQAYAHARAOQA1AsgnBZQgGAIgZAIQg0APhjAAIAdAMQAhAPAWARQBGA0hEArQgdARgoAPQhQAdg4gOQg7gPgXgeQgMgPgLgnIgIAUQgSAjgfAVQgpAcg2AAIgSgBg");
	this.shape_41.setTransform(388.7,552.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B9D609").s().p("AAcEcQAMg4gJhKQgWiVhxhfIAxAfQA6AuAuBOIAdlXIAGgKIAVJBg");
	this.shape_42.setTransform(1787.1,163.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9E208").s().p("AheBRQgnghAAgwQAAguAngiQAnghA3gBQA4ABAnAhQAnAiAAAuQAAAwgnAhQgnAig4AAQg3AAgngig");
	this.shape_43.setTransform(1795.2,117.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#20C9E0").s().p("AidE2Qg/gPgygeQhjg9BBhPIAlgaQAogcAQgGQg2AJg2gJQhsgRADhSQAAgTAMgbQAYg2A8giIALgFQAPgFAUAAQBAABBbAzQgQgagJggQgRhAAmgbIAOgJQASgLAYgGQBNgVBrAcIAQAFQATAIAMAOQAlAuguBfIBNgjQBSgeAdAUIAUAGQAXAKARARQA0A3gmBxQgFAKgaAKQgyAUhhAAIAcAPQAgATAWAUQBFBChDA3QgdAWgnASQhPAlg3gSQg6gTgXglQgLgTgLgyIgIAZQgRAsgfAbQgoAkg2AAIgRgBg");
	this.shape_44.setTransform(1794.7,115.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B9D609").s().p("AAWD4QAKgxgIhBQgQiChahSIAnAbQAtAoAlBEIAWksIAFgIIARH3g");
	this.shape_45.setTransform(1390.2,173.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9E208").s().p("AhKBHQgfgeAAgpQgBgoAggeQAfgdArAAQAsAAAfAdQAfAeAAAoQAAApgfAeQgeAdgtAAQgrAAgfgdg");
	this.shape_46.setTransform(1396.6,133.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E21E1E").s().p("Ah8EOQgygNgogaQhPg1A0hFIAegXQAggYAMgFQgrAHgrgHQhVgPAChHQAAgRAKgYQATguAvgfIAJgEQAMgEAPAAQAzAABIAtQgMgXgHgcQgOg3AfgYIAKgIQAPgJATgGQA9gRBUAYIANAEQAPAHAJAMQAeAoglBTIA9geQBCgbAWASIAQAFQATAJANAPQAqAwgfBiQgEAJgUAJQgoARhNAAIAWANQAaAQARASQA2A5g1AwQgWATgfAQQg+AggsgPQgugQgSghQgJgQgJgsIgHAWQgNAmgYAYQggAfgsAAIgMgBg");
	this.shape_47.setTransform(1396.2,131.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B9D609").s().p("AAOCWQAGgdgFgoQgKhOg3gxIAYAQQAbAYAXAoIAOi0IADgFIAKEvg");
	this.shape_48.setTransform(383.5,41.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9E208").s().p("AgtArQgUgSAAgZQAAgYAUgSQATgRAaAAQAbAAAUARQATASAAAYQAAAZgTASQgUARgbAAQgaAAgTgRg");
	this.shape_49.setTransform(387.5,17.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E21E1E").s().p("AhMCjQgfgHgYgRQgxggAggpIATgOQATgPAIgDQgbAFgagFQg0gIAAgrQAAgLAGgOQAMgcAdgSIAWgFQAfAAAtAbQgIgOgEgRQgIghASgPIAcgNQAlgLA0APIAXAOQATAYgYAyIAmgTQAogQAOALIAKADQALAFAJAKQAaAdgUA7QgCAFgMAFQgZALgvAAIAnAdQAiAighAdQgOALgSAKQgnATgbgJQgcgKgMgUQgFgJgFgbIgEANQgVA5gwAAIgIgBg");
	this.shape_50.setTransform(387.3,16.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B9D609").s().p("AAYCtQAKgigIgtQgShbhfg5IApASQAwAcAoAvIAXjQIAGgGIARFfg");
	this.shape_51.setTransform(78.7,580.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9E208").s().p("AhPAxQghgUAAgdQAAgcAhgVQAhgUAuAAQAvAAAhAUQAhAVAAAcQAAAdghAUQghAVgvAAQguAAghgVg");
	this.shape_52.setTransform(85.6,552.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E21E1E").s().p("AiEC9Qg1gJgqgSQhUglA4gwIAfgQQAigRANgEQguAFgtgFQhbgKADgyQAAgMAKgQQAUghAygVIAngGQA1AABNAfQgOgQgHgTQgOgmAggRIAwgQQBAgNBaARIAOADQAPAFAKAJQAgAcgoA5IBBgVQBGgSAXAMIARAEQAUAGAOAKQAsAiggBFQgFAGgVAGQgqAMhSAAIAYAJQAbAMASAMQA6Aog4AhQgYAOghALQhCAWgvgKQgxgMgTgXQgKgLgJgeIgHAPQgNAagbARQgiAWguAAIgNgBg");
	this.shape_53.setTransform(85.1,551.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B9D609").s().p("AAYEIQALgzgJhGQgSiKhhhYIAqAcQAxArAoBIIAZk+IAFgJIASIXg");
	this.shape_54.setTransform(1355.3,353.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9E208").s().p("AhRBLQgigfAAgsQAAgrAigfQAiggAvAAQAwAAAiAgQAhAfABArQgBAtghAeQgiAggwAAQgvAAgiggg");
	this.shape_55.setTransform(1362.2,311.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E21E1E").s().p("AiGEgQg2gNgrgdQhWg5A4hJIAggYQAjgaANgFQgvAIgugIQhcgQAChMQAAgTALgYQAVgyAzggIAJgFQANgEARAAQA2AABPAvQgOgYgHgdQgPg7AhgaIAMgJQAQgJAUgGQBCgTBcAaIAOAEQAQAHAKAOQAgAqgoBYIBCggQBHgcAYATIASAGQAUAJAOAQQAtAzghBpQgFAJgVAKQgrAShUAAIAYAOQAcASATATQA7A9g6AzQgYAUgiARQhEAigvgQQgygSgTgjQgKgRgJguIgHAXQgPApgaAZQgjAhguAAIgOgBg");
	this.shape_56.setTransform(1361.8,309.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B9D609").s().p("AAaEYQAMg3gKhJQgTiThohdIAtAeQA0AtArBNIAalSIAFgKIATI5g");
	this.shape_57.setTransform(947,150.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F9E208").s().p("AhWBQQgkghAAgvQAAguAkghQAkghAyAAQAzAAAkAhQAkAhAAAuQAAAvgkAhQgkAhgzAAQgyAAgkghg");
	this.shape_58.setTransform(954.4,105.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F41C88").s().p("AiPEyQg5gPgugeQhbg8A8hNIAigbQAlgbAOgGQgyAJgxgJQhigQADhRQAAgTALgbQAWg1A2giIAKgFQANgEATAAQA6AABTAzQgPgagHgfQgQg/AjgbIANgJQAQgLAWgGQBGgUBhAbIAPAFQARAIALAOQAiAtgqBeIBGgiQBLgfAaAVIATAGQAVAJAPARQAwA3gjBvQgFAKgXAKQguAThZAAIAaAPQAeATATAUQA/BBg9A1QgaAWgkASQhIAkgygRQg1gTgVglQgKgSgKgxIgHAYQgQAsgcAbQglAigxAAIgPAAg");
	this.shape_59.setTransform(953.9,103);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B9D609").s().p("AAYDwQALgugIhAQgTh+hhhQIArAbQAwAnApBBIAXkiIAGgJIASHpg");
	this.shape_60.setTransform(1131.2,75.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F9E208").s().p("AhRBFQgigdAAgoQAAgnAigcQAigdAvAAQAvAAAiAdQAjAcAAAnQAAAogjAdQgiAcgvAAQgvAAgigcg");
	this.shape_61.setTransform(1138.1,36.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F41C88").s().p("AiHEGQg2gMgrgaQhVg0A4hCIAggXQAjgXANgFQgvAHgugHQhcgOAChFQAAgRALgXQAUgtAzgdIAKgEQAMgFARABQA3AABPArQgOgWgHgbQgPg2AhgXIALgIQAQgJAVgFQBBgRBcAXIAOAEQAQAHALAMQAgAngoBQIBCgdQBHgaAYASIASAFQAUAIAOAOQAtAvghBgQgFAIgVAIQgsARhTAAIAYANQAcAQATARQA7A4g6AuQgYATgiAPQhEAfgvgPQgygPgTggQgKgQgJgqIgIAVQgOAlgbAXQgiAeguAAIgPgBg");
	this.shape_62.setTransform(1137.7,34.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B9D609").s().p("AAcEoQANg6gLhOQgVibhxhiIAxAgQA5AwAvBQIAcllIAHgKIAVJZg");
	this.shape_63.setTransform(1800.7,393.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F9E208").s().p("AheBUQgngjAAgxQAAgwAngjQAngjA3AAQA4AAAnAjQAnAjAAAwQAAAxgnAjQgnAjg4AAQg3AAgngjg");
	this.shape_64.setTransform(1808.7,345.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F41C88").s().p("AidFDQg/gQgygfQhjhABBhSIAlgbQApgdAPgGQg2AJg2gJQhsgRADhWQAAgUAMgcQAZg4A7gkIALgFQAPgFAUAAQBAAABbA1QgQgbgJghQgRhCAmgdIAOgJQASgLAYgHQBNgVBrAdIAQAFQATAIAMAPQAlAwguBiIBNgkQBTgfAcAVIAUAGQAYAKAQASQA0A6gmB2QgFAKgaAKQgyAVhhAAIAcAPQAgAUAWAWQBFBEhDA5QgdAXgnATQhPAmg3gTQg6gTgXgnQgLgTgLg0IgIAaQgRAugfAcQgoAlg2AAIgRgBg");
	this.shape_65.setTransform(1808.2,343.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B9D609").s().p("AAOCVQAHgdgGgnQgKhOg5gxIAZAQQAdAYAXAoIAOizIAEgFIAKEtg");
	this.shape_66.setTransform(17.6,86.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F9E208").s().p("AgvAqQgUgRAAgZQAAgYAUgRQAUgSAbAAQAcAAAUASQAUARAAAYQAAAZgUARQgUASgcAAQgbAAgUgSg");
	this.shape_67.setTransform(21.7,62.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#20C9E0").s().p("AhPCiQgfgHgagQQgyggAhgqIATgOQAUgOAIgDQgbAFgbgFQg2gIABgrQAAgLAGgOQAMgcAegSQAHgFAQAAQAgAAAuAbQgIgNgEgRQgJgiAUgOIAcgOQAmgKA2AOIAIADQAKAEAGAHQATAZgYAxIAngSQAqgQAOALIAKADQAMAFAIAJQAbAdgTA7QgDAFgNAFQgaAKgxAAIAqAdQAjAjgiAcQgOAMgUAJQgoATgcgJQgdgKgMgTQgGgLgFgZIgEANQgIAXgQAOQgUATgbAAIgJgBg");
	this.shape_68.setTransform(21.4,61.7);

	var maskedShapeInstanceList = [this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,1850.7,612.8), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AuML9IAA35IcZAAIAAX5g");
	mask_4.setTransform(90.9,76.5);

	// Capa_3
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0B2296").s().p("AkgFXQBZiwBZi6QCvl1gEgzQAjAiAcA7QA3B3gpCBIAwACQAxALACAyIgCAlQgEAngNAKIApAnQAnAsgLAXIkVEjg");
	this.shape_69.setTransform(88.4,44.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0B2296").s().p("Aj6BgIE8kzIA4gXQA/gXAoADIARAGQAPAKgJAXQgJAXggAkQgQASgPANIAjAbQAhAfgIAaQADAHgIAMQgQAYg4AdIhDAMIAfASQAfAVAEAHIAEAPQABASgUAMIgeAWIAMANQALARABAVIgHAQQgPASgnAHIgwAHg");
	this.shape_70.setTransform(82.9,106.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#36CFF2").s().p("Ai7FbIAigFQAjgHAHgSQAIgMADgRQAHgigUgXIA3AGQA7ACAagPIAPgKQAOgOgHgUQgIgWgVgIIgpgRIAogGQArgGAPgHIAUgKQASgMgLgNQgCgFgIgFQgRgLgggEIgogFIA6gTQA9gVAPgKIAOgMQANgPgHgRQgEgHgIgGQgJgFgIgBQhCgIhFAUIBRgqQBSguAFgSQAFgKABgNQACgYgTgIQgNgEgNAEIhfAfIgKgOIBBhKQAKgMADgPQAEgVgPgEIgIAAQg9AHgjAUIhwBCIAwgwQBDgzBWgSQAUgEASAGQATAHABAMIgDAfQgLAlgmAjIAdgIQAjgFAZAPQARALACATQAGAtg2AlIguAYIA3AJIAOAGQAPAJAEASQAEATgLARQgOAUgWAHIgPAGIgmATIAYAJQAYAOgCAXQAAAGgHAIQgNAQgiAKIgjAIIAGAEQAVARgBAcQAAAbgWAQQgnAfg/gHIgcgFIgBAiQgBATgLAPQgMAQgSAHQgTAHgUAAQgKAAgLgCg");
	this.shape_71.setTransform(127.6,91.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#114DF4").s().p("AhTJZQhWgBg0ggIgDgKQj7h7gNgXQCtihDJjPQGTmdCQjnQAeApANA/QAZB/hZBwIAjAKQAjAQADAeIgBAjQgBARgEAMQgHAWgUARIAKALQAMAPAGASQAWA5giBGIgxBGIAIAHQAJAJAFAMQARAlgeA0QgeA1gSAKQgDACgDAEQgWAbgEAdQgEAigQAcQgGAKgYAVQgXAVgMAGQhFAkg8AXQheAkgvgFQgeAGgoAAIgGAAg");
	this.shape_72.setTransform(106.7,74.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.5).p("AgcABQACAAADgBIAGAAIAAAAIgGAA");
	this.shape_73.setTransform(15.8,94.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(0.5).p("AAvgdIgBAAIhIAuIABAAg");
	this.shape_74.setTransform(18.9,99.8,1,1,0,0,0,-0.7,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.5).p("AhzAmIgBACQANAGAcACQA2AEBDgYIBJguIhmgdIgLACQhAARg5BCQBjgeA8gK");
	this.shape_75.setTransform(12.3,98.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFD200").s().p("AhMAwQgcgCgNgGIABgCQA5hCBAgRIALgCIBmAdIhJAuQg7AUgwAAIgOAAg");
	this.shape_76.setTransform(12.4,98.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7F0DA").s().p("AgKANQgFgGAAgHQAAgGAFgGQAFgFAFAAQAHAAAFAFQAEAGAAAGQAAAHgEAGQgFAFgHAAQgFAAgFgFg");
	this.shape_77.setTransform(27.6,90.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAVQgKgJAAgMQAAgMAKgIQAJgJANAAQAOAAAJAJQAKAIAAAMQAAAMgKAJQgJAJgOAAQgNAAgJgJgAgRgMQgFAGAAAGQAAAHAFAGQAEAFAHAAQAGAAAEgFQAFgGAAgHQAAgGgFgGQgEgFgGAAQgHAAgEAFg");
	this.shape_78.setTransform(28.3,90.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFC800").s().p("AiBC5QgZgHgTgLIgOgIQg9geg8g9Igwg3QgNgNgUguIgRgsQgEgVgJgYIgHgVQgBgEgPgUIgOgTQAkgIAvAKQAYAGAQAHQAVAGA7AnQAlAdB9BbQAkAdBRAaQApANAiAHQAzAMA0gDQAbgBAQgDQA4gEAygLQAZgGAOgFQAwgSARgCQhQBgijA3QgyARg1ALIgrAIQgeACgbAAQhPAAg9gTg");
	this.shape_79.setTransform(82.3,130.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2656FF").s().p("AALgcQgGAkgPAVQAGgVAPgkg");
	this.shape_80.setTransform(60.8,81.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2656FF").s().p("AgeAbQA5gcAugtIAHACQhNBNhTAOQAVgGAdgOg");
	this.shape_81.setTransform(88.5,95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2656FF").s().p("AhDgVICHArQhqgVgdgWg");
	this.shape_82.setTransform(121.4,129.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2656FF").s().p("AibGjIg5gIQg9gLgWgMQgZgKgdgOQg7gcgUgXQgWgSgYgZQgwgwgJgeQgxhqgCgYQgEgOgIgPQgPgdgUgGQgRgOgXgPQgugfgfgHIg3gWIAEgCIACgBIBIguIAAAAIABgBIhlgdIgCABIgBAAIgZAFQAJg6Aig7QBDh4B7gMIAbgEQAigEAiADQBtAKBFBJIgBAJIAIgRQBtBJDdBAQgvAtg6AdQgdAOgUAGQBUgOBNhOQBBATBPATIByAaQBsBMAMALIA3AmQA/AnAoAOQEUBCAYABIANAJQAKALgTAOIi5gSIC4AYIAJAIQAGAKgSASIg0gDIi2gKIAsAEIAtADICRALIAMAGQAJAKgQAOQgFAGgTAHQg7AXiAgBIgfgDIgcgDQiWgOhpgUIiIgsQAdAXBrAVIANAEQgHANgRATQgjAmg0AcQgVANgdAPQg8AdguALQgdALgpALQhEARg1AAIgZgBgApYgBIAOASQAOAUABAEIAIAVQAIAYAFAVIARAsQAUAvANANIAwA3QA8A9A9AeIAOAIQATALAZAHQBSAZBzgIIArgIQA0gLAzgRQCig3BRhgQgRACgxASQgNAFgZAGQgyALg4AEQgQADgbABQg0ADgygMQgigHgpgNQhTgagjgeQh+hbgkgdQg7gngVgGQgRgHgXgGQgagEgXAAQgSAAgQADgArCjjQgKAJAAAMQAAANAKAJQAJAJAOAAQAOAAAJgJQAKgJAAgNQAAgMgKgJQgJgJgOAAQgOAAgJAJgAlxkMQAQgVAHglQgRAlgGAVg");
	this.shape_83.setTransform(96.7,111);

	var maskedShapeInstanceList = [this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,181.8,153), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AuMK1IAA1pIcZAAIAAVpg");
	mask_5.setTransform(90.9,69.3);

	// Capa_3
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0B2296").s().p("Aj6BgIE8kzIA3gXQA/gXAoADIARAGQAQAKgJAXQgKAXggAkIgeAfIAiAbQAiAfgIAaQADAHgIAMQgQAYg4AdIhDAMIAeASQAfAVAEAHIAFAPQAAASgTAMIgfAWIAMANQAMARAAAVIgHAQQgPASgnAHIgvAHg");
	this.shape_84.setTransform(82.9,92.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#36CFF2").s().p("Ai7FbIAigFQAjgHAHgSQAIgMADgRQAHgigUgXIA3AGQA7ACAagPIAPgKQAOgOgHgUQgIgWgVgIIgpgRIAogGQArgGAPgHIAUgKQASgMgLgNQgCgFgIgFQgQgLghgEIgogFIA6gTQA9gVAPgKIAOgMQANgPgHgRQgEgHgIgGQgJgFgIgBQhCgIhFAUIBRgqQBSguAFgSQAFgKABgNQACgYgTgIQgNgEgNAEIhfAfIgKgOIBBhKQAKgMADgPQAEgVgPgEIgIAAQg9AHgjAUIhwBCIAwgwQBDgzBWgSQAUgEASAGQATAHABAMIgDAfQgLAlgmAjIAdgIQAjgFAZAPQARALACATQAGAtg2AlIguAYIA3AJIAOAGQAPAJAEASQAEATgLARQgOAUgWAHIgPAGIgmATIAYAJQAYAOgCAXQAAAGgHAIQgNAQgiAKIgjAIIAGAEQAVARgBAcQAAAbgWAQQgnAfg/gHIgcgFIgBAiQgBATgLAPQgMAQgSAHQgTAHgUAAQgKAAgLgCg");
	this.shape_85.setTransform(127.6,77.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#114DF4").s().p("AhTJZQhWgBg0ggIgDgKQj7h7gNgXQCtihDJjPQGTmdCQjnQAeApANA/QAZB/hZBwIAjAKQAjAQADAeIgBAjQgBARgEAMQgHAWgUARIAKALQAMAPAGASQAWA5giBGIgxBGIAIAHQAJAJAFAMQARAlgeA0QgdAzgTAMQgDACgDAEQgWAbgEAdQgEAigQAcQgGAKgYAVQgXAVgMAGQhFAkg8AXQheAkgvgFQgeAGgoAAIgGAAg");
	this.shape_86.setTransform(106.7,60.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(0.5).p("AgcABQACAAADgBIAGAAIAAAAIgGAA");
	this.shape_87.setTransform(15.8,79.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(0.5).p("AAzghIgBAAIhIAuIABgBg");
	this.shape_88.setTransform(18.5,85.9,1,1,0,0,0,-0.7,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(0.5).p("AhzAmIgBACQANAGAcACQA2AEBDgYIBJguIhmgdIgLACQhAARg5BCQBjgeA8gK");
	this.shape_89.setTransform(12.3,84.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFD200").s().p("AhMAwQgcgCgNgGIABgCQA5hCBAgRIALgCIBmAdIhJAuQg6AUgxAAIgOAAg");
	this.shape_90.setTransform(12.4,84.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F7F0DA").s().p("AgKANQgFgGAAgHQAAgGAFgGQAFgFAFAAQAHAAAFAFQAEAGAAAGQAAAHgEAGQgFAFgHAAQgFAAgFgFg");
	this.shape_91.setTransform(27.6,76);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgWAVQgKgJAAgMQAAgMAKgIQAJgJANAAQAOAAAJAJQAKAIAAAMQAAAMgKAJQgJAJgOAAQgNAAgJgJgAgRgMQgFAGAAAGQAAAHAFAGQAEAFAHAAQAGAAAEgFQAFgGAAgHQAAgGgFgGQgEgFgGAAQgHAAgEAFg");
	this.shape_92.setTransform(28.3,76);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFC800").s().p("AiBC5QgZgHgTgLIgOgIQg9geg8g9Igwg3QgNgNgUguIgRgsQgEgVgJgYIgHgVQgBgEgPgUIgOgTQAkgIAvAKQAYAGAQAHQAVAGA7AnQAlAdB9BbQAkAdBRAaQApANAiAHQAzAMA0gDQAbgBAQgDQA4gEAygLQAZgGAOgFQAwgSARgCQhQBgijA3QgyARg1ALIgrAIQgeACgbAAQhPAAg9gTg");
	this.shape_93.setTransform(82.3,116.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2656FF").s().p("AALgcQgGAlgPAUQAGgVAPgkg");
	this.shape_94.setTransform(60.8,66.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2656FF").s().p("AgeAbQA5gcAugtIAHACQhNBNhTAOQAVgGAdgOg");
	this.shape_95.setTransform(88.5,80.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2656FF").s().p("AhDgVICHArQhqgVgdgWg");
	this.shape_96.setTransform(121.4,115.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2656FF").s().p("AibGjIg5gIQg9gLgWgMQgZgKgdgOQg7gcgUgXQgWgSgYgZQgwgwgJgeQgxhqgCgYQgEgOgIgPQgPgdgUgGQgRgOgXgPQgugfgfgHIg3gWIAEgCIACgBIBIguIAAAAIABgBIhlgdIgCABIgBAAIgZAFQAJg6Aig7QBDh4B7gMIAbgEQAigEAiADQBtAKBFBJIgBAJIAIgRQBtBJDdBAQgvAtg6AdQgdAOgUAGQBUgOBNhOQBBATBPATIByAaQBsBMAMALIA3AmQA/AnAoAOQEUBCAYABIANAJQAKALgTAOIi5gSIC4AYIAJAIQAGAKgSASIg0gDIi2gKIAsAEIAtADICRALIAMAGQAJAKgQAOQgFAGgTAHQg7AXiAgBIgfgDIgcgDQiWgOhpgUIiIgsQAdAXBrAVIANAEQgHANgRATQgjAmg0AcQgVANgdAPQg8AdguALQgdALgpALQhEARg1AAIgZgBgApYgBIAOASQAOAUABAEIAIAVQAIAYAFAVIARAsQAUAvANANIAwA3QA8A9A9AeIAOAIQATALAZAHQBSAZBzgIIArgIQA0gLAzgRQCig3BRhgQgRACgxASQgNAFgZAGQgyALg4AEQgQADgbABQg0ADgygMQgigHgpgNQhTgagjgeQh+hbgkgdQg7gngVgGQgRgHgXgGQgagEgXAAQgSAAgQADgArCjjQgKAJAAAMQAAANAKAJQAJAJAOAAQAOAAAJgJQAKgJAAgNQAAgMgKgJQgJgJgOAAQgOAAgJAJgAlxkMQAQgVAHglQgRAlgGAVg");
	this.shape_97.setTransform(96.7,96.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0B2296").s().p("AkTF6QBFi5BCjDQCEmHgLgyIAXAWQAcAcAWAjQBEBwgZCFIAwgFQAxAGAIAxIADAmQABAngMALIAtAiQArAngHAZIjyFBg");
	this.shape_98.setTransform(88.4,47.9);

	var maskedShapeInstanceList = [this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,181.8,138.6), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Aw8IYIAAwvMAh5AAAIAAQvg");
	mask_6.setTransform(108.5,53.6);

	// Capa_3
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0B2296").s().p("AA3DRQgdgIgsgsIghg7QgOBDgIAKQgFAGgJADQgRAGgRgOIgegWQgCAHgHAIQgMAQgUAHQgHADgLgEQgVgJgUgiIgVgrIA9k6IGIDKIAoAsQAqA1AKAnIAAASQgFASgZgCQgZgBgsgTIgngTQgFAUgJAVQgUAqgbABQgDACgFAAIgLgBg");
	this.shape_99.setTransform(112.3,46);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#36CFF2").s().p("ABLCzQgYgHgOgSQgGgIgFgFIgdgeIAAAaQgFAagXAGQgGACgKgEQgTgHgVgeIgSgeIgCAHQgKAagaAIQgaAHgXgPQgpgbgOg/IgEgbQgPAFgRAEQgTAFgSgGQgTgGgMgPQgSgVgGghIAPAfQATAdATABIAgACQAigEAPgaIAMA1QAQA6AXAUIAOALQASAIARgNQASgNABgYIADgsIASAkQAVAnALAMIAPAQQARANAJgPQAEgDADgJQAFgTgHggIgIgnIAjAwQAoAzAQALIAPAKQATAHANgMQAFgGADgKQADgKgCgIQgNhAgpg8IBCA/QBFBAATgBIAXgBQAYgGABgWQABgNgJgLIg8hPIALgOIBaAlQAOAGAQgCQAVgDgBgOIgCgIQgIgRgMgUQgSgegTgRIhihVIA9AfQBFAuAtBNQALASgBASQAAAUgMAFQgKAGgTABQgnABgugYIASAZQAQAfgHAdQgEATgSAIQgrATgzgmIgkgkIAIA3IgBAPQgEARgQAKQgLAGgNAAIgMgBg");
	this.shape_100.setTransform(135.3,81.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#114DF4").s().p("AicGZQg7gMgQgNQgDgDgFgCQgggMgcAGQgjAGgfgGQgMgCgcgQQgagQgKgJQg4g2gogxQhBhOgKgvQgQgdgOgpQgbhRAOg7IAJgGQAJhJALhHQAXiNALgMQDQBwEEB9QIID6EJA/QgdAqg4AgQhxBAiGgwIACAkQgEAmgcAMIghAKQgpANgigVQgJAVgYAUQgwAnhNgKIhRgYQgDAQgQANQgWAUgkAAQgPAAgQgDg");
	this.shape_101.setTransform(150.9,66.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(0.5).p("AAEAAQgEAAgHAB");
	this.shape_102.setTransform(15.2,25.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(0.5).p("AAzghIgBAAIhIAuIABgBg");
	this.shape_103.setTransform(20.1,31.3,1,1,0,0,0,-0.7,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(0.5).p("Ah0AmIgBABQAOAHAbACQA2ADBDgYIBKguIhngcIgLACQgXAGgaAQQgnAXghAmQBkgeA8gK");
	this.shape_104.setTransform(13.9,29.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFD200").s().p("AhNAwQgbgCgNgHIABgBQAhgmAmgXQAagQAXgGIAMgCIBmAcIhJAuQg7AVgxAAIgOAAg");
	this.shape_105.setTransform(14,29.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F7F0DA").s().p("AgKANQgFgGAAgHQAAgGAFgGQAFgFAFAAQAGAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgGAAQgFAAgFgFg");
	this.shape_106.setTransform(29.1,21.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgXAVQgJgIAAgNQAAgMAJgJQAKgIANgBQANABAKAIQAKAJAAAMQAAAMgKAJQgKAKgNgBQgNABgKgKgAgRgMQgFAGAAAGQAAAHAFAGQAFAFAGAAQAGAAAEgFQAFgGAAgHQAAgGgFgGQgEgFgGAAQgGAAgFAFg");
	this.shape_107.setTransform(29.8,21.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFC800").s().p("AiBC5QgZgIgTgKIgOgIQg9geg8g9Igwg3QgNgNgUguIgQgsQgFgVgJgZIgIgUQgBgEgOgUIgOgTQAkgJAvALQAXAGARAHQAVAGA7AnQAkAdB+BaQAkAeBRAaQApANAiAHQAzALA1gCQAagBAQgDQA4gEAygMQAZgGAOgFQAwgSARgBQhQBgijA3QgyARg1ALIgrAIQgdACgaAAQhQAAg+gTg");
	this.shape_108.setTransform(83.8,61.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2656FF").s().p("AAMgcQgKAngMASQAFgWARgjg");
	this.shape_109.setTransform(62.4,12.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2656FF").s().p("AgfAaQA6gcAvgsIAHACQhMBMhUAPg");
	this.shape_110.setTransform(90,26);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2656FF").s().p("AhDgVICHArQhpgVgegWg");
	this.shape_111.setTransform(122.9,60.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2656FF").s().p("AiaGjQgbgDgfgFQg9gLgWgMQgZgJgdgPQg6gcgVgXQgWgSgYgYQgvgxgKgeQgxhqgBgYQgEgNgIgPQgQgegTgGQgRgOgYgPQgugfgfgGIg2gXIAEgCIABgBIBJguIgBAAIABgBIhkgcIgDAAIgMACIgOADQAJg5Aig8QBDh4B7gMIAbgEQAigEAjAEQBtAKBEBJIgBAIIAIgRQBsBKDfBAQgvAsg7AdIgxAUQBWgPBLhMQBnAdCbAiIB4BXIA3AmQA/AoAoANQEUBCAYABIANAJQAKALgTAPIi5gTIC4AZIAJAHQAGAKgSASIg0gCIi2gLIDqASIANAHQAJAJgQAOQgGAGgSAHQhAAYh8gCIgegDQipgPhzgWIiIgsQAfAXBpAVIANAEQgHANgRATQgiAmg1AcQgVANgdAPQg7AegvAKQgdAMgpAKQhDARg0AAIgagBgApYAAIAOASQAOATABAFIAIAUQAJAYAFAVIAQAsQAUAvANANIAwA3QA8A9A9AeIAOAJQATAKAZAIQBSAYB0gIIArgHQA0gLAygSQCjg3BQhfQgRABgwASQgOAFgZAGQgyAMg4ADQgQAEgaABQg1ACgygMQgigHgpgNQhTgagjgeQh+hbgkgdQg7gngVgGQgRgHgXgFQgagFgWAAQgTAAgQAEgArCjjQgKAJAAANQAAAMAKAJQAJAJAOAAQAOAAAKgJQAJgJAAgMQAAgNgJgJQgKgJgOAAQgOAAgJAJgAlxkMQAQgTAHgnQgRAlgGAVg");
	this.shape_112.setTransform(98.2,42);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0B2296").s().p("AAjDaIgegwQgMAKgngFIglgGQgwgOAAgyIAJgvQiHAMhnhPQg0gogagqQAxAQGRhbQDKgtDAgxIAgE5IlYDPIgFABQgYAAgegrg");
	this.shape_113.setTransform(43.9,55.5);

	var maskedShapeInstanceList = [this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,217,107.3), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AvHKzIAA1lIePAAIAAVlg");
	mask_7.setTransform(96.8,69.1);

	// Capa_3
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0B2296").s().p("ACPDoIg6gQIljkGIEAjCIAvAAQAoACARAQQAIAIABAHQACAWgJASQgFAJgFAFIAhARQAVAJACASQABAJgEAHQgFAMg2ArIBEADQA8AVATAVQAKALgCAHQALAZgdAkIgfAeIAiAbQAlAfAMAWQAMAWgNAMIgQAIQgPADgTAAQgfAAgogJg");
	this.shape_114.setTransform(97.9,54.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#36CFF2").s().p("ACBFJQhZgGhHgqIg3gpIB3AyQAoAQA8gCIAIgBQAPgGgHgUQgFgOgMgLIhKhAIAHgQIBjASQAOADALgGQATgLgFgXIgJgWQgIgRhYgjIhWgeQBKAKA+gRQAIgCAIgGQAIgHACgIQAFgRgPgNIgQgJQgQgKg/gNIg8gLIAngKQAggIAPgNQAHgGABgFQAJgPgTgJIgVgHQgQgFgsgBIgnAAIAlgWQAVgMAEgWQAEgVgPgMIgQgIQgcgLg7AKIg1ANQARgZgMghIgPgbQgJgRgkgDIgiAAQAegJAeAGQATAEAOAOQANAOAEATIAFAhIAbgIQA8gPAsAYQAYAOAEAbQAFAbgTAUIgFAFIAjADQAkAFAPAPQAHAHABAGQAFAWgWARIgXAMIApANIAQAEQAXAFAQATQANAOgBATQgBASgOAMIgNAHIg2ARIAxARQA5AdABAvQABATgQANQgWASgjAAIgfgFQArAeAQAkQAHASAAALQAAAOgSAIQgPAHgQAAIgGAAg");
	this.shape_115.setTransform(142.2,65.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#114DF4").s().p("Ah2AAQjjizjBiIQAGgQB1hSQA6gpA9gpIACgLQAvgmBVgMQArgGAhACQAvgMBiAXQA/AQBIAaQAMAEAaARQAaASAIAKQATAZAJAiQAIAcAZAXIAHAFQAUAJAkAvQAkAwgLAoQgFATgNALIA5A/QArBAgNA8QgHAegQARQAWAOALAVQAEAKAEATIAGAhQABAfggAVIghAOQBmBjgICBQgEBBgYAsQiujRnGlkg");
	this.shape_116.setTransform(124.9,81.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(0.5).p("AAGAAIgLAB");
	this.shape_117.setTransform(25.3,25.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(0.5).p("AAqgVIgBgBIhIAuIABAAg");
	this.shape_118.setTransform(31.8,30.1,1,1,0,0,0,-0.2,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(0.5).p("AhzAmIgBABIAoAJQA3ADBDgYIBJguIhmgcIgMACQg+AQg6BDQBjgeA8gK");
	this.shape_119.setTransform(24.2,29.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFD200").s().p("AhNAwIgogJIABgBQA6hDA+gQIAMgCIBmAcIhJAuQg7AVgxAAIgOAAg");
	this.shape_120.setTransform(24.3,29.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F7F0DA").s().p("AgKANQgFgGAAgHQAAgGAFgGQAEgFAGAAQAGAAAGAFQAEAGAAAGQAAAHgEAGQgGAFgGAAQgGAAgEgFg");
	this.shape_121.setTransform(39.4,21.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgXAVQgJgIAAgNQAAgMAJgJQALgIAMgBQAOABAKAIQAJAJAAAMQAAANgJAIQgKAKgOgBQgNABgKgKgAgRgMQgFAGAAAGQAAAHAFAGQAEAFAHAAQAGAAAFgFQAEgGAAgHQAAgGgEgGQgFgFgGAAQgHAAgEAFg");
	this.shape_122.setTransform(40.1,21.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFC800").s().p("AiBC5QgZgIgTgKIgOgIQg9geg8g9Igwg3QgNgNgUguIgQgsQgFgVgJgYIgIgVQgBgHgcgkQAkgJAvALQAYAGAQAHQAVAGA7AnQAlAdB9BbQAkAdBRAaQApANAiAHQAzALA1gCQAagBAQgDQA4gEAygMQAZgGAOgFQAwgRARgCQhQBgijA3QgyARg1ALIgrAIQgdACgaAAQhQAAg+gTg");
	this.shape_123.setTransform(94.1,61.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#2656FF").s().p("AALgcQgJAngMASQAGgWAPgjg");
	this.shape_124.setTransform(72.7,12.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2656FF").s().p("AgeAbQA5gcAvgtIAGACQhMBNhUAOg");
	this.shape_125.setTransform(100.3,26);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2656FF").s().p("AhDgVICHArQhngUgggXg");
	this.shape_126.setTransform(133.2,60.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2656FF").s().p("AiaGjQhqgMgjgTQgZgJgdgOQg6gdgUgXQgWgSgYgYQgwgxgKgeQgxhqgBgYQgEgNgIgPQgQgegTgFQgRgOgXgQQgvgfgfgGIg2gWIAEgDIABAAIBJgvIgBAAIABgBIhkgcIgcAFQAJg5Ahg8QBEh4B7gMIAbgEQAigEAiAEQBtAKBFBJIgCAIIAIgRQBtBKDeBAQgvAsg7AdIgxAUQBVgOBMhNQBnAdCbAiIB4BXIA3AmQA/AoAoANQEUBCAYABIANAJQAKAMgTAOIi5gTIC4AZIAJAHQAGALgSASIg0gDIi2gLIDqASIANAHQAJAJgQAOQgGAGgSAHQg9AYh/gCIgegDQipgPhzgWIiIgsQAgAYBoAUIANAEQgHAOgRATQgiAlg1AcQgVANgdAPQg7AeguAKQgeAMgpAKQhDARg1AAIgZgBgApYAAQAcAjABAHIAIAUQAJAZAFAVIAQArQAUAvANANIAwA3QA8A9A9AeIAOAJQATAKAZAIQBSAYB0gIIArgHQA0gLAygSQCjg3BQhfQgRABgwASQgOAFgZAGQgyAMg4ADQgQAEgaABQg1ACgygMQgigHgpgNQhSgZgkgfQh9hbglgcQg7gogVgGQgQgHgYgFQgagFgXAAQgSAAgQAEgArCjjQgKAJAAANQAAANAKAIQAJAJAOAAQAOAAAKgJQAJgIAAgNQAAgNgJgJQgKgJgOAAQgNAAgKAJgAlxkMQAOgRAJgpQgQAlgHAVg");
	this.shape_127.setTransform(108.5,42);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0B2296").s().p("AlpFiQAtgXDelbQBtiuBniqID0DHIhiGFQgPAVg5gJIg2gOQgDAQgfAZQgQAMgPAJQgsAZgigjIgbgoQhXBniCARQgaADgXAAQgjAAgcgHg");
	this.shape_128.setTransform(36.2,81.8);

	var maskedShapeInstanceList = [this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,193.6,138.3), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Aw8IYIAAwvMAh5AAAIAAQvg");
	mask_8.setTransform(108.5,53.6);

	// Capa_3
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0B2296").s().p("AA3DRQgdgIgsgsIghg7QgOBDgIAKQgFAGgJADQgRAGgRgOIgegWQgCAHgHAIQgMAQgUAHQgHADgLgEQgVgJgUgiIgVgrIA9k6IGIDKIAoAsQAqA1AKAnIAAASQgFASgZgCQgZgBgsgTIgngTQgFAUgJAVQgUAqgbABQgDACgFAAIgLgBg");
	this.shape_129.setTransform(112.3,46);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#36CFF2").s().p("ABLCzQgYgHgOgSQgGgIgFgFIgdgeIAAAaQgFAagXAGQgGACgKgEQgTgHgVgeIgSgeIgCAHQgKAagaAIQgaAHgXgPQgpgbgOg/IgEgbQgPAFgRAEQgTAFgSgGQgTgGgMgPQgSgVgGghIAPAfQATAdATABIAgACQAigEAPgaIAMA1QAQA6AXAUIAOALQASAIARgNQASgNABgYIADgsIASAkQAVAnALAMIAPAQQARANAJgPQAEgDADgJQAFgTgHggIgIgnIAjAwQAoAzAQALIAPAKQATAHANgMQAFgGADgKQADgKgCgIQgNhAgpg8IBCA/QBFBAATgBIAXgBQAYgGABgWQABgNgJgLIg8hPIALgOIBaAlQAOAGAQgCQAVgDgBgOIgCgIQgIgRgMgUQgSgegTgRIhihVIA9AfQBFAuAtBNQALASgBASQAAAUgMAFQgKAGgTABQgnABgugYIASAZQAQAfgHAdQgEATgSAIQgrATgzgmIgkgkIAIA3IgBAPQgEARgQAKQgLAGgNAAIgMgBg");
	this.shape_130.setTransform(135.3,81.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#114DF4").s().p("AicGZQg7gMgQgNQgDgDgFgCQgggMgcAGQgjAGgfgGQgMgCgcgQQgagQgKgJQg4g2gogxQhBhOgKgvQgQgdgOgpQgbhRAOg7IAJgGQAJhJALhHQAXiNALgMQDQBwEEB9QIID6EJA/QgdAqg4AgQhxBAiGgwIACAkQgEAmgcAMIghAKQgpANgigVQgJAVgYAUQgwAnhNgKIhRgYQgDAQgQANQgWAUgkAAQgPAAgQgDg");
	this.shape_131.setTransform(150.9,66.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(0.5).p("AAEAAQgEAAgHAB");
	this.shape_132.setTransform(15.2,25.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(0.5).p("AAzghIgBAAIhIAuIABgBg");
	this.shape_133.setTransform(20.1,31.3,1,1,0,0,0,-0.7,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(0.5).p("Ah0AmIgBABQAOAHAbACQA2ADBDgYIBKguIhngcIgLACQgXAGgaAQQgnAXghAmQBkgeA8gK");
	this.shape_134.setTransform(13.9,29.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFD200").s().p("AhNAwQgbgCgNgHIABgBQAhgmAmgXQAagQAXgGIAMgCIBmAcIhJAuQg7AVgxAAIgOAAg");
	this.shape_135.setTransform(14,29.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F7F0DA").s().p("AgKANQgFgGAAgHQAAgGAFgGQAFgFAFAAQAGAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgGAAQgFAAgFgFg");
	this.shape_136.setTransform(29.1,21.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgXAVQgJgIAAgNQAAgMAJgJQAKgIANgBQANABAKAIQAKAJAAAMQAAAMgKAJQgKAKgNgBQgNABgKgKgAgRgMQgFAGAAAGQAAAHAFAGQAFAFAGAAQAGAAAEgFQAFgGAAgHQAAgGgFgGQgEgFgGAAQgGAAgFAFg");
	this.shape_137.setTransform(29.8,21.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFC800").s().p("AiBC5QgZgIgTgKIgOgIQg9geg8g9Igwg3QgNgNgUguIgQgsQgFgVgJgZIgIgUQgBgEgOgUIgOgTQAkgJAvALQAXAGARAHQAVAGA7AnQAkAdB+BaQAkAeBRAaQApANAiAHQAzALA1gCQAagBAQgDQA4gEAygMQAZgGAOgFQAwgSARgBQhQBgijA3QgyARg1ALIgrAIQgdACgaAAQhQAAg+gTg");
	this.shape_138.setTransform(83.8,61.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2656FF").s().p("AAMgcQgKAngMASQAFgWARgjg");
	this.shape_139.setTransform(62.4,12.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#2656FF").s().p("AgfAaQA6gcAvgsIAHACQhMBMhUAPg");
	this.shape_140.setTransform(90,26);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2656FF").s().p("AhDgVICHArQhpgVgegWg");
	this.shape_141.setTransform(122.9,60.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2656FF").s().p("AiaGjQgbgDgfgFQg9gLgWgMQgZgJgdgPQg6gcgVgXQgWgSgYgYQgvgxgKgeQgxhqgBgYQgEgNgIgPQgQgegTgGQgRgOgYgPQgugfgfgGIg2gXIAEgCIABgBIBJguIgBAAIABgBIhkgcIgDAAIgMACIgOADQAJg5Aig8QBDh4B7gMIAbgEQAigEAjAEQBtAKBEBJIgBAIIAIgRQBsBKDfBAQgvAsg7AdIgxAUQBWgPBLhMQBnAdCbAiIB4BXIA3AmQA/AoAoANQEUBCAYABIANAJQAKALgTAPIi5gTIC4AZIAJAHQAGAKgSASIg0gCIi2gLIDqASIANAHQAJAJgQAOQgGAGgSAHQhAAYh8gCIgegDQipgPhzgWIiIgsQAfAXBpAVIANAEQgHANgRATQgiAmg1AcQgVANgdAPQg7AegvAKQgdAMgpAKQhDARg0AAIgagBgApYAAIAOASQAOATABAFIAIAUQAJAYAFAVIAQAsQAUAvANANIAwA3QA8A9A9AeIAOAJQATAKAZAIQBSAYB0gIIArgHQA0gLAygSQCjg3BQhfQgRABgwASQgOAFgZAGQgyAMg4ADQgQAEgaABQg1ACgygMQgigHgpgNQhTgagjgeQh+hbgkgdQg7gngVgGQgRgHgXgFQgagFgWAAQgTAAgQAEgArCjjQgKAJAAANQAAAMAKAJQAJAJAOAAQAOAAAKgJQAJgJAAgMQAAgNgJgJQgKgJgOAAQgOAAgJAJgAlxkMQAOgRAJgpQgRAlgGAVg");
	this.shape_142.setTransform(98.2,42);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0B2296").s().p("AAjDaIgegwQgMAKgngFIglgGQgwgOAAgyIAJgvQiHAMhnhPQg0gogagqQAxAQGRhbQDKgtDAgxIAgE5IlYDPIgFABQgYAAgegrg");
	this.shape_143.setTransform(43.9,55.5);

	var maskedShapeInstanceList = [this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,217,107.3), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlvNFQiqhFiDh9QiDh+hHijQhLipAAi5QAAi4BLipQBHijCDh9QCDh+CqhFQCvhIDAAAQDAAACwBIQCqBFCDB+QCDB9BHCjQBLCpAAC4QAAC5hLCpQhHCjiDB+QiDB9iqBFQiwBIjAAAQjAAAivhIg");
	this.shape.setTransform(94.6,90.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,189.2,181.8), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F4F9").s().p("AhNB4QgigOgFgjQgJhHCQhtIAegLQAhgJARAPIANARQALAVgNAYQgfA0gnAwQg+BNgmAAQgJAAgIgFg");
	this.shape.setTransform(11.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,23.4,24.9), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F4F9").s().p("AgkAjQgPgPAAgUQAAgTAPgPQAQgOAUAAQAWAAAPAOQAPAPAAATQAAAUgPAPQgPAOgWAAQgVAAgPgOg");
	this.shape.setTransform(5.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,10.5,9.9), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSATQgIgIAAgLQAAgKAIgIQAHgHALAAQALAAAIAHQAIAIAAAKQAAALgIAIQgIAHgLABQgKgBgIgHg");
	this.shape.setTransform(85.2,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLAKgPAAQgOAAgKgKg");
	this.shape_1.setTransform(69.7,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAZQgLgLAAgOQAAgOALgKQAKgKAOAAQAPAAALAKQAKAKAAAOQAAAOgKALQgLALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(57,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_3.setTransform(90.6,45.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAKAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgKAAQgIAAgHgGg");
	this.shape_4.setTransform(63.8,40.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgIAAgFgGg");
	this.shape_5.setTransform(74.5,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgIALAAQAMAAAJAIQAIAIAAALQAAAMgIAIQgJAIgMAAQgLAAgIgIg");
	this.shape_6.setTransform(2.9,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAiQgOgOAAgUQAAgTAOgOQAPgOATAAQAUAAAPAOQAOAOAAATQAAAUgOAOQgPAOgUAAQgTAAgPgOg");
	this.shape_7.setTransform(35.6,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAQQgGgHgBgJQABgIAGgHQAGgGAJAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgJAAgGgGg");
	this.shape_8.setTransform(28.5,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_9.setTransform(12.6,4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAZQgLgLAAgOQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAOgKALQgLAKgPAAQgOAAgKgKg");
	this.shape_10.setTransform(56.1,10.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAGgJAAQgJAAgGgGg");
	this.shape_11.setTransform(49.3,41.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAaQgLgKAAgQQAAgOALgLQAKgKAPgBQAPABALAKQALALAAAOQAAAQgLAKQgKAKgQAAQgPAAgKgKg");
	this.shape_12.setTransform(34.5,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,93.4,52), null);


(lib.Pantalon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApwUhQANpGAHpxQAOzigejaISNABUABLAomAAFAAhInWA1QgLmYgbnMQg2uWhNj9QgwHWgvHuQhhPegDB9g");
	mask.setTransform(62.5,136.3);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#230708","#001E26"],[0,1],-60.9,0,61,0).s().p("ApwVTMAAAgqlIThAAMAAAAqlg");
	this.shape.setTransform(62.5,136.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#230708","#001E26"],[0,1],-62.5,0,62.5,0).s().p("ApwUhQANpGAHpxQAOzigejaISNABUABLAomAAFAAhInWA1QgLmYgbnMQg2uWhNj9QgwHWgvHuQhhPegDB9g");
	this.shape_1.setTransform(62.5,136.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pantalon, new cjs.Rectangle(0,0,125,272.7), null);


(lib.Manga_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCDVIAAmqICFAAIAAGqg");
	mask.setTransform(6.7,21.4);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAA35","#99C327","#99C327"],[0,0.518,1],-6.5,0,6.6,0).s().p("AhCDVIAAmqICFAAIAAGqg");
	this.shape.setTransform(6.7,21.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Manga_1, new cjs.Rectangle(0,0,13.5,42.7), null);


(lib.Manga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiVhsIBxhJIC6EhIhxBJg");
	mask.setTransform(15,18.2);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAA35","#99C327","#99C327"],[0,0.518,1],-5.6,3.7,5.7,-3.6).s().p("AiVhsIBxhJIC6EhIhxBJg");
	this.shape.setTransform(15,18.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Manga, new cjs.Rectangle(0,0,30.1,36.3), null);


(lib.Cinturon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApLg9ISWgPIABCKIyVAPg");
	mask.setTransform(59,9.2);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#62221C","#885D21"],[0,1],-59,0,59.1,0).s().p("ApNhMISZgPIACCoIyZAPg");
	this.shape.setTransform(59,9.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#62221C","#885D21"],[0,1],-58.8,0,58.8,0).s().p("ApLg9ISWgPIABCKIyVAPg");
	this.shape_1.setTransform(59,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cinturon, new cjs.Rectangle(0.2,1.5,117.7,15.5), null);


(lib.Camisa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqYDaQAQgdAzkJQAaiFAWiAIiqCRIilkrICMi+QAsh0DGhPQBignBagRQA8A8DQgJQBogEBcgRQAAAgCOAyQBIAZBHASIGagEIAoGjIksAzQiWAlgvBLQgPAYgDAYQgCAMACAIIBfQjIxzAEg");
	mask.setTransform(88.5,93.3);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAA35","#99C327","#99C327"],[0,0.447,1],-86.2,0,86.3,0).s().p("At0OkIAA9IIbpAAIAAdIg");
	this.shape.setTransform(88.5,93.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Camisa, new cjs.Rectangle(0,0,177,186.5), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("EgkGANzIAA7lMBINAAAIAAblg");
	mask_9.setTransform(231.1,88.3);

	// Capa_3
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E0E0E0").s().p("AilFNQgigNgegRIgXgPQhTAWhPgkQgZgLgWgQIgQgOQgbAeikgRIifgXQivgkgXhoQgHghAJgjIALgcQBUhbCKgFQBEgCA0APQANhJB9gjQA+gRA8gCQgEhWCDgjQBCgRBDAAQAsgSBRA+QAoAfAgAjQBAgkBUANQAqAHAeAOQBLhICWgLQBLgGA8AJQCBAlALBfQAFAwgUAoQA1gLBSAPQAfAGAYAHQgVgOAJAEIAdAPIgRgFIAoAZQBDAqgcBFQgOAjgcAaQgaA1iNAEQgsABgygEIgpgEQgLBDgyAVQgPAGgRABIgPAAQgcAIg8gTIg2gTIgOARQg5A/ifAoIiUAbQgYADgYAAQhSAAhUghg");
	this.shape_144.setTransform(215.3,106);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AmWMfQhBgghFgnIg3giIAGgCIgOAEQkTBNh1h8QglgngQg3IgJguQhaCdm+hOQjfgnjNhGQluivBgj7QAehNBJhNIBDg9QDUiDDoAaQByANBKAmQgUDoAWjmIgCgCIACgdQAPitEUhMQCHglCFgEQgWDHAajHIgEAAIAEgkQASieC/hJQA1gVAzgLIhYALQhzAKEeg3QEfg2DDCcQBhBOAoBZQCThuC7AmQBdATBBApQCPikFXgoQCsgTCPANQBHAkA6AnQEmDChsC2Qg1BahuA1QCCg5CyAIQBaAFBAAQIAXAHQGHCEiGDfQhCBwiRBWQhABBjGgFQiIgDiygiIhrgXQghDUjQARQhBAFhLgOIg+gQQgBAFgDAIQgYA7icBfIiWBUQg2BBk7AdQhiAJhxAFIhcACIgdAKQgRADgTAAQhkAAiwhUg");
	this.shape_145.setTransform(231.1,88.3);

	var maskedShapeInstanceList = [this.shape_144,this.shape_145];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145},{t:this.shape_144}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,462.2,176.6), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AroIhIAAxBIXRAAIAARBg");
	mask_10.setTransform(74.5,54.5);

	// Capa_3
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#8EAF07").s().p("Ah2HkQgVgLgNgTIgIgRQhMAshKgxQgXgQgUgWIgQgUQg0gLgWgxIgLgwQhZgaAYg4QAHgRASgTIARgOQB1ANh9gPQhOgJg4hSQgRgagNgdIgKgYQADhyBNgsQAmgWAlABQAEgeAdgZQAPgMAOgGQATgXAvAFQAYADAUAHQgLhAAug+QAWgfAZgSQBogwA5AsQAdAWAIAgQA/gcAZAYQALAKABAPIABAAQBFgvA6AOQAdAHAPAQQB4gFAKBhQAGAxgTAxQAfgLApAUQAVAKAOANQAWAYAIBDQAFAiAAAcQAsgSA8AYQAeAMAVAQQA5A3hEA+QgVATgfARIgbAOQAMBKg3AxQgRAQgWALIgSAIQgSBzhpAPQghAEgmgFIgfgHQhCA+gugLQgPgEgKgKIgIgKQhJAcg0AAQgmAAgdgPg");
	this.shape_146.setTransform(66.7,49.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#618904").s().p("AEKIdQgzgHg6gZIgwgYQAAA4hLgNQgXgEgbgKIgYgJQhEAlhYgoQgbgMgagTIgVgQQglAlgygUIgrgbQiPAZgchaQgJgcAEglIAGgeQg4gfAchYQAIgbAQgeIAOgYQjziCBNh2QAng7BXggQATiKBYAKQArAFAoAhQAyjVB9APQA/AIA0AyQAshLAhAtQAQAWAHAmICVgKQB9gfA3A5QAcAdACAjQA/gGgKAgQgFAQgSASQBegfAXBXQALAsgIAyQEggTgjDFQgSBihLBnQAHBqhiAwQgeAOgmAIIgfAEQgbCViCAAQgRAAgTgDg");
	this.shape_147.setTransform(74.5,54.7);

	var maskedShapeInstanceList = [this.shape_146,this.shape_147];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_147},{t:this.shape_146}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,149,109), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("AxxOxIAA9hMAjjAAAIAAdhg");
	mask_11.setTransform(113.8,94.5);

	// Capa_3
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3D7E22").s().p("AF/KrQggAPgkAEQhJAJgXg0QguAdg2AMQhrAZgjhPQgIgagGgfQgMg9ANgTQgMAIgMACQgYAFgCgZQgrA3g5AeQhyA6hJiBIg1gRQgfAJgfgGQg+gLAAhFQgXAJgdgEQg6gJgeg+QgoAYgkADQhIAHAZhoQggADgdgOQg4gbAUhWIgIAOQgMAQgPAIQguAcg7g0QgUgeADgfQAEg9BugCQAJgTATgQQAlghAwANQgDguAagyQA0hjCRgTIBIACQBLAMAXAyIA7gFQBAABAVAbIAuggQA7geBBAMQAMguAjgtQBGhbBwACQgOg/AOhGQAaiLCGgfIAngfQAvggAngJQB9gdgHDWIAagEQAegEAbAFQBVAQAMBeIAbgcQAiggAjgWQBuhHBNA4IAJATQAJAXAEAZQAMBRgsBFIAjAXQAnAeAVAiQBBBtiSBuIAdASQAhAWAUAdQA9BbhkBxQgLAbgkAXQhGAth0gZIADBGQgHBGgyAAQACAjgNAeQgbA9hLgXQgBBLgcA0QgbAygtAAQgyAAhIg8g");
	this.shape_148.setTransform(108,92.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2C6317").s().p("ADtN4QgbgXgUgeIgOgZQhiBYhFglQgVgMgQgXIgLgVQgfAmgqgEIgkgMQhlCaiphuQg1gjg2g4IgrgyQgeAahBh8Ig8iBQg3AAgXgpIgNgqQinARgViFQgHgpAIg0IAKgrQicBAALiwQADg3AUhIIATg9QCyAVBthtQA2g3ATg7QDdCLC7giQBegRAxgsQCThdAGiOQAChHgag1QB+AABFiTQAjhKAJhKQAfAdAUANIAPBBQBhhGBWAWQAsALAXAZQA0AxgPA0QgHAbgSAQQAYAIANAWQAHALABAJQCJgqBiAiQAyARAWAaQBPBegVBmQgKAygbAgQBVAuAVBCQALAigHAYQACAsgpA2IgpAtQAxAJAhAMIgUgMQgvgcB3A/QB3BBgpCAQgVBAgsAzQg4BYhyAFQgkABglgHIgegHQAcAVAKAhQAGAQgBAMQAABBgzAAQgQABgTgHIgQgGQAMBLhEAPQgVAEgbgCIgWgDQAxC0hcBVQguAqg4AGQgfAFgcAAQhgAAhEg5g");
	this.shape_149.setTransform(113.8,94.5);

	var maskedShapeInstanceList = [this.shape_148,this.shape_149];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_149},{t:this.shape_148}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,227.6,189), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	mask_12.graphics.p("AzKRYMAAAgivMAmVAAAMAAAAivg");
	mask_12.setTransform(122.7,111.2);

	// Capa_3
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#509D33").s().p("AnjJ4QgYgEgVgKIgQgLQggg6A5glQASgLAYgIIAVgGQgJgMAEgSIAFgPQgfgSgBgeIAFgZQgwAFgcgXIgTgYQgJg6AvgaQAPgIATgEIAPgCQgcgRAAgnIAFgkQhPgQgQhKQgFgYACgZIADgVQAbhCBIAEQAlACAeAPQgFgeAYgsIAYgmQAkBugghrQgUhCBJghQAlgQAogDIgBgGQgMg/AkgnQASgTAVgGQAAgsAXgfQAMgPALgHQgOgwAigdQARgPAUgFQA6gZAnAgQASAQAHAVQBrgwAWBwQALA4gKBCQAigVAXAMQAMAGAFAKQAAgyAKgiQAWhIA9gEIALAAQA2ADATBIQAKAkgBAkQCUgNAMBPQAGAogXAqIAFADQBxBHh3BJQglAWg4AUIgxAQQACAfg+AwIg/ArIAAAUQgFBJhCAuQghAXghAIQgCBvhWAAQgbABghgLIgagLQgJAggtABIgsgEIAAADQgCA/hOAUQgYAGgdABIgYAAQgLAzgcAmQgOATgMAJQg5A6g/AAQgKAAgKgCg");
	this.shape_150.setTransform(74.2,79.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#509D33").s().p("AmjE9QgbgMgRgZIgMgXQgXg0A3hCQARgVAWgTIATgQQgfhpBFg7QAWgSAdgMQAPgGAKgCQBih7BAAaQAgANAMAlQBli/B6AkQA8ATAoA4QCxg+AQBsQAIA3gcBCQgsgigXgPQgtgfBtBdQBsBdhqA4Qg2AchLAJQhJCzhogFQghgBgfgUIgagUQhFBkhVgpQgbgNgZgaIgTgXQhpBOhJAAQgbAAgXgLg");
	this.shape_151.setTransform(111.9,163.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2C6E1C").s().p("AA2IDQgdgKgegSIgZgRQhqAxgxg5QgQgSgHgaIgFgXQhLAZgwg0QgQgQgKgWIgIgTQhwgOgohZQgNgcgDggIgCgbQhCg+ANhtQAEgjAMgjIALgcQgkhmB0hIQA5gkBBgQIABgOQAGhwCkgSQBSgKBRAOIhYAYQg4ASChgkQCfgjAaCXQANBLgTBTQCDg/BRAtQAoAWAOAiIAOAAQCpAKgVBsQgLA3gsAzQBSAug4BTQgcAqgsAgQAnBUhvApQgiANguAIIgmAEIAEARQAPBBhEAKQgWADgagCIgXgEQgbA1g3AAQgVAAgagIg");
	this.shape_152.setTransform(160.8,146.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3B8222").s().p("AiAQgQgngFgsgRIgkgQQhLgMgqiBQgNgogIgvIgFgnQilBBgnhAQgMgUACgfIAEgaQitAQAEiFQABgqATgzIATgsQhqgUAFhSQACgaANgcIAMgYQiohdA2iGQARgpAlgpIAighQihkbCMhUQBFgpBmAPQAGiOBWgNQArgHApAWQgfiKBMhxQAmg5AsgdQCQhdCBBFQBAAiAkA1QCVjKCCBGQBBAiAjBLQj6AlELgiQCngUAKBuQAFA3gdA7QBrAlgVBkQgLAygfArQBbgCBeBzQAuA6AdA7IgKhHQgFgtAZCIQAZCHh9ABQgnAAgygNIgpgNQAbA2hbAaQgcAJglAEIgfADQBNAVATBBQAKAhgGAdQCagpAZBPQAMAngSAwQCkAEgKBiQgGAxgmAxQBuAsgoBBQgVAhgqAYQA0COhsAcQghAJgugDIgngGQgyC8h2gNQglgFgngXIgggXQhtB5g6glQgSgLgLgaIgIgYQgIBkhQgLQgZgEgdgPIgYgNQgiBUhgAAQgRAAgUgDg");
	this.shape_153.setTransform(93.2,110.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#205E15").s().p("AjWQ1QgZgYgVgnIgQghQjUCPh4i7Qgmg7gXhUIgRhJQh9Bqg3hDQgRgWgIgkIgFgfQioAsgNiPQgEgtAMg5IANgxQhwgTAUhcQAGgdATghIARgbQiPg/A0iMQARgrAiguIAeglQi1jVCFhpQBCg0BmgKQgGhRBYg6QArgdAtgMQBSlrDUAoQBqAUBaBdQANjODIgNQBkgGBgAjQB3hRBTBIQApAkARA1QB3gsA/DGQAfBiAHBsQDPgyARDIQAJBkghBuQDogZBmC5QAzBcAFBhQCQCWh6CgQg+BQhaAyQBrC7jaAoQhEANhcgEIhPgGQgMCWiCgPQgpgFgvgVIgogTQgZB3hkARQgfAFgjgFIgdgGQgfB2hmgCQgggBgjgNIgdgMQgsAzgrAAQgkAAgjgjg");
	this.shape_154.setTransform(123.4,111.2);

	var maskedShapeInstanceList = [this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,245.4,222.3), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	mask_13.graphics.p("A/pbcMAAAg24MA/TAAAMAAAA24g");
	mask_13.setTransform(202.6,175.7);

	// Capa_3
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CADF22").s().p("AhMBZIgFgUQgihXBjgsQAwgWA4gFQATB5haApQglARgpAAIgPgBg");
	this.shape_155.setTransform(165.4,212.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CADF22").s().p("AlEHyQgXgHgUgTIgPgRQgpAog4gJIgwgRQgcgvA7hWIBBhNQg7gWgLgkQgEgLACgMIACgJQiChYBEhIQAVgWAmgSQAUgJAPgFQgZgyAwggQAOgKAVgHIARgFQghiTBWgQQArgIAyAVQgZgiA3gpQAcgVAggNQAZgKA6AgQAdAQAXARQgJhBBEgxQAjgYAkgLQAsgGAnBBQAUAhALAiQAygpA1AgQAaAQAQAXQB0hEA7AhQAdAQAGAeQAoAshjBXQgfAcgpAcIgjAXQAvAGAIArQAEAVgFAUQCABEhUBNQgqAnhEAYQgNA8hSgJQgagDgdgJIgZgJQgZBjhLgWQgXgIgagSIgVgRQhFDUhVAKQgaADgZgSIgUgSQg/BNg7AAQgPAAgPgFg");
	this.shape_156.setTransform(106.2,124.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B8CD0F").s().p("AgjJoQgwgUgwgpIgngmQgcAZgwgXIgrgcQheArg1g+QgQgUgKgcIgHgYQgsBwhaADQgdAAgdgKIgYgLQhHgsgIhcQgDgdAEgfIAFgYQg4gTgtgqIgiglIADAAIgJgCQg4gRgbg4IgPg1QAAhKBsgbQA2gOA1ACQgYhFAjg+QALgUAQgRIANgMQA/g+BVAXQAqALAeAYQANgcAlgLQATgGAQAAQBviuA1APQAbAIAFAqQBUgbBIAkQAjATATAXQAGhBBcgpQAugUAtgIQARhgBqgiQA1gQAyACQBkAtgSB6QgJA9gdA1QBUgMAxBBQAYAhAHAjQBuiWB0AwQA6AYAkA2QBOBPg0BWQgQAagbAZIgYATQCWAZgrBkQgWAygzAsQiHBKhvgjQgjgLgcgVIgVgTIg3AeQAVDbisAxQg1AQhDgEIg3gGQhCCJhmAAQgjAAglgPg");
	this.shape_157.setTransform(229.5,225.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#B8CD0F").s().p("AsMQ0QgbgUgWgiIgRgdQgdBBhMgGQgYgCgZgJIgVgJQgvBChNAAQgYABgYgGIgTgHQhBhqA0g3QAQgRAagKQANgFAJgCQgGgZANglIAOggQhCASg1gcQgRgIgOgNIgKgKQglhYAog5QANgSASgNIARgJQgQgsBDg+IBGg1QgmgHgEgtIACgsQgWADg1gaIgygbQhKhPAKhOQADgZAMgWIAKgQQAzhBBoAwQA1AZAqAmQgJgWAVgiIAYgdQgmgoAGhMIANhEQAchCBFAHQAiADAdARQgNgWAUgOIAXgJQgygjAmhMQAMgYATgZIARgUQgWAPhKgEIhFgHQhIgvAbgdQAIgJARgGQAIgDAHgBIABhGQgmgsABg3IAHguQAjg7AuAQQAXAJAQAUQAygJAcBCQANAhAEAjQA7gYA7AgQAdARASAVQAlgyAwgPQAYgHAQACQgfgyAPhPIAWhGQAygfBBAbQAgAOAXAUQA1goAsApQAWAVALAdQAGgZA8gjQAegRAdgMQBShwBZARQAtAJAcAgQBDh9BCAFQAhADAUAcQAGhCA/gSQAfgKAeAEQBRATgNB4QgGA9gXA4QBegGA5A+QAcAgAKAgQANgPAvgJQAYgEAVgBQgDhFAygoQAYgUAZgGQBVAHAPBVQAIArgJApQAjgTAwApQAYAUASAYQAtgoAygoQCHAKAPBbQAIAugTAsQgmBdhwAbQgjAIgnABIgNAAIACAFQA0B3hjBFQgfAWgqAOIgkAKQgUCDhcAMQgdAEghgJIgbgJQg2B/hvgeQgjgJgkgYIgdgWQgyAHg+hBIg1hCQgfAugjgVQgLgHgKgMIgEgHQAyBRhOAsQgZAOgkAJIgeAGQBUA4AACKQAABEgQA6Qg5Bqg3gXQgRgHgPgTIgLgSQg1CQhKAJQgXADgWgKIgSgMQgJAyhKADIhIgIQAVA7gsAdQgVAOgbACQBLCHguCGQgXBCglAoQg8A7hCgaQgVgJgTgQIgOgOQg5A6g1AAQgjAAgigag");
	this.shape_158.setTransform(148.4,116.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#80B40B").s().p("AHrZ1QgsgSgsgsIgkgpQhIBUhMg0QgYgQgVgcIgRgYQiKB2hYhEQgcgVgUgmIgOghQhtBmhIg4QgWgSgQgfIgLgcQh1AhgpheQgNgdgEgmIgBghQgqAXgjgXIgagbIgpB/QgkB7h0APQgkAEgogGIghgIQhKgbAMheQADgeAMggIAMgbQgyAZgvgZIgkgeQiMAkgMhOQgEgZAKghIAKgcQgkAsg4gIIgxgQQgxg9AIheQADgeAJgdIAHgXQgjAIgRhDIgKhEQhHAthKgZQgXgIgUgOIgQgNQhZARgzgbQgQgJgKgLIgHgKQhEhOA6hSQASgaAcgXIAZgSQiAhoAlhFQALgVAbgPIAYgLQhOhzBAhKQATgXAggQIAcgMQhkhKggiKQgLgsgCgsIAAgkQAmh2BpgVQA1gKAtAOQgChWA9gKQAegGAfAMQghhuA5gpQASgNAYgEQANgCAIABQiKiKAZibQAHgxAYgsIAVgjQBYhwBnAWQAzALAhAiQAohXAjgiQAoglAdAhQAPARAHAYQAviABogGQA0gDAqAXQghhhBPhsQAng2AvgjQDOhBBIBUQAlAqgGA3QBuhqCBApQBAAUAqAqQB9hOBUBQQArAnARA3QAZhXBTAAQApABAkARQAjgDAZBMQANAnAGAmQBeg3BJA8QAkAeARAqQBFg+A3AKQAcAFANARQDbgRAHCYQADBNgoBPQDBAziFCsQgqA2hFA7Ig9AxQAsgMAbA8QANAeAFAgQAygPAjAYQASAMAHAPQAmgpA+AEQAgACAXAKQBUA5hXCEQgbApgpAsIgjAkQAWAAASAoQAJAUAFAUQAghBBQgEQAogBAiALQBdBMgyCIQgaBEgsA2QBnguAnA9QATAfgBAoQAfg1BTgYQApgLAjgBQBRAsgcBrQgOA2geAtQBBAGAiAwQARAYADAWQgDCmhZAVQgcAGghgJIgcgKQgHCWhNAjQgYALgdgCIgXgEQhMC4iSAwQgtAPgvgBIgmgDQAZCmhxAIQgjACgtgNIglgOIgBCRQgkDCiAgwQgogPgtgmIgkgiQhDC/hoAAQgZAAgagKg");
	this.shape_159.setTransform(189.7,166.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#669F08").s().p("AC+auQg8gfgyg+Igmg4QkmCnjFhnQg+ghgsg3IgggxQhlBwhjgfQgggJgbgXIgVgVQllC0h/i3Qgog6gLhWIgEhLQjtg6g2jPQgRhBADhJIAHg7QlRgzAVjDQAHg9AphEIAog4QhvhkAthGQAOgWAcgQIAZgMQhwhLBHhVQAWgZAlgYIAhgTQjSlAB9h6QAngmBEgOQAjgHAaABQgGgyBDgUQAigJAjAAQgYhMAtg2QAOgSAUgNIAQgJQigmLC0hHQA4gWBUAMQAqAGAeALQAmh2A8gIQAegDAXAUQAmg4BkggQAygQAqgFQCLkyC5AxQBdAYBABVQBFhKCKAPQBEAIA3AXQCEgyBMBCQAnAhAMAqQBxh8BjBaQAyAuAbBGQBYAAA8AeQAeAPAMAPQG9itCcFLQAxBoAOCNQAHBHgDAyQDOA5AuCtQAYBWgSBLQBXANAAAtQAAAWgSAUQGcBggGE9QgCBjgsBtQgWA3gVAjQEkFTkqC3QheA6iNAjIh6AXQgHB9hsBaQg2Atg1ATQgUGQlSADQhpABh9gmIhngnQifC4iQAAQg4AAg1gcg");
	this.shape_160.setTransform(203.2,177.6);

	var maskedShapeInstanceList = [this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,405.3,351.3), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	mask_14.graphics.p("A4yc7MAAAg51MAxlAAAMAAAA51g");
	mask_14.setTransform(158.7,185.1);

	// Capa_3
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#523200").s().p("AJEc3QhTgIhNgVIg8gTQA4hkkZo/QhYizhujOIhdiqQgmiPj6hdQhOgdhagUIhKgPQBRgGA/hXQATgcAPggIAMgbQBkBQE2DwQAfgyglkEIgsj5QAAjzrQopQlokUlojkIgKiWQBFCjE9CbQCfBNCRAtIiMkiIlAleIAegyIGuGuQBkGEFUEYQCqCMCWA+QAliJh4muQgxiyg3ieQAbAqA5AXQAwASAtAAQAGBYBTCCQApBBAnAvQAZANAKivIAFiyIBkgUQAADoAPB6QAHA9AIAPQAlgfBLinQAmhUAehOQA8AUAyAeQgsAyAIG4QADDcANDSQFLhwDLk2QBlibAjiFIBkAAIhkEOIDSg8IA8AyQgTgGiiBJIifBJIiqD6QBLANEnhzQCTg6CFg8IAbAYQAZAcgMASQgNATmpCtImmCoQlSESE1NrQBgESCWEsQBKCXA4BfQi5BcjTAAQgvAAgvgEgAla3wIAXBDQgSgdgFgmg");
	this.shape_161.setTransform(158.7,185.1);

	var maskedShapeInstanceList = [this.shape_161];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_161).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,317.4,370.2), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	mask_15.graphics.p("Au8PvIAA/dId5AAIAAfdg");
	mask_15.setTransform(95.7,100.7);

	// Capa_3
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#DAFF00").s().p("AlxObQirhMiEiKQiEiLhJi0QhKi6gBjMQABjKBKi7QBJizCEiLQCEiLCrhMQCwhODBAAQDbAADEBjQC8BgCGCrQBnCEA3CgQA6ClAACxQAADMhMC6QhICziDCMQiECKirBMQixBPjCgBQjBABiwhPg");
	this.shape_162.setTransform(95.7,100.7);

	var maskedShapeInstanceList = [this.shape_162];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_162).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0.5,0.5,190.5,200.3), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	mask_16.graphics.p("EgxtAQZMAAAggyMBjbAAAMAAAAgyg");
	mask_16.setTransform(318.2,105);

	// Capa_3
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E0E0E0").s().p("AilFNQgigNgegRIgXgPQhTAWhPgkQgZgLgWgQIgQgOQgbAeikgRIifgXQivgkgXhoQgHghAJgjIALgcQBUhbCKgFQBEgCA0APQANhJB9gjQA+gRA8gCQgEhWCDgjQBCgRBDAAQAsgSBRA+QAoAfAgAjQBAgkBUANQAqAHAeAOQBLhICWgLQBLgGA8AJQCBAlALBfQAFAwgUAoQA1gLBSAPQAfAGAYAHQgVgOAJAEIAdAPIgRgFIAoAZQBDAqgcBFQgOAjgcAaQgaA1iNAEIiHgHQgLBDgyAVQgPAGgRABIgPAAQgcAIg8gTIg2gTIgNAQQg6BAifAoQgyAMg2AJIgsAGQgYADgYAAQhSAAhUghg");
	this.shape_163.setTransform(318.2,125.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AmlPEQiJgyh8hKIhhg/QlZB3i1irQg5g2gihMIgWhBQARgpAEgQQAIgfhEB9QhFB9mcgNQiBgEiUgRIh6gRQspgpghlfQgLhtBEiAQAWgnAagkIAXgdQETjrF9AEQC/ACCIAxQAdjhGEhNQC/glC5AFQgkDlArjkIgHgBIAHgnQAdi0GOiCQDIhBDBgdQhcASguAMQhbAYDlgaQDlgbDKCpQBkBUA3BaQCqh1EaAlQCNASBrAqQBGiCHzhOQD5gnDrgNQHLA6AoEsQAMBegfBqQgPA2gSAiQBbglD8AtQBaAQBRAUIBeAQQDvAqgDDOQgCBngxBfQAchXAMgrQAWhWhVDYQhVDZnQAXQiSAHimgNIiIgOQhYGKlZhEQhsgVh4hBIhjg8QgJAXgNAVQh9DUmXBnQiAAgiMASIhzALQi4A/jAAAQjfAAjshWg");
	this.shape_164.setTransform(318.2,105);

	var maskedShapeInstanceList = [this.shape_163,this.shape_164];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_164},{t:this.shape_163}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0,636.4,209.9), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzRHVQnQgVldgrQimkHE9jEQD+ieIlhuQGJhOH1guQD6gWCsgIQClgDBoAAQMfAAGYCAQFHBnA/CzQAtCAhbCaQgdAwgnAsIghAkQivAWsBAXIrfATQmYBLpOAAQjrAAkIgLg");
	mask.setTransform(253,48);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1D1D1B","#929291","#929291"],[0,0.6,1],-224.7,0,196.1,0).s().p("EgpxAIPIAAwdMBTjAAAIAAQdg");
	this.shape.setTransform(267.4,52.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(42.6,0,420.9,96.1), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIBXQiHgQiDghQgRg3CRgkQBIgSBLgGQAYgTAfAAQA+AABVBEQArAhAeAhQgMA7iMAAQg5AAhLgKg");
	mask.setTransform(30.2,9.7);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#1D1D1B"],[0,1],-26.3,0,28.9,0).s().p("AkgCEIAAkIIJBAAIAAEIg");
	this.shape.setTransform(28.9,13.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(2.5,0,55.3,19.4), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmKApQhuhYCDgqQBCgVBXgEQBSgXChAAQByAACNAMQBGAGAwAFQB8BSi+BcQg7AehUAbIhIAVg");
	mask.setTransform(57,13.8);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#1D1D1B"],[0,1],-45.6,0,43.2,0).s().p("ApGCKIAAkTISNAAIAAETg");
	this.shape.setTransform(58.3,13.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(12.5,0,89.1,27.6), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjdBdQg8gigpgqQAShDBOgUQBDgSBnAUQAMgRAfgbQAagWAlAAQBJAABqBMQA2AmAoAlIlDBnQglAPgoAAQhEAAhMgqg");
	mask.setTransform(32.3,13.5);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1D1D1B","#1D1D1B","#8F8F8E","#8F8F8E"],[0,0.094,0.647,1],-31.4,0,31.5,0).s().p("AlCCgIAAk/IKFAAIAAE/g");
	this.shape.setTransform(32.3,16);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,64.5,27.1), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkTCRQjRhRBThFQAqgiBUgTQBuhWDlAAQBJAABMAJQAnAEAXAFQDsCRiHBNQgqAZhKAPIhBAJg");
	mask.setTransform(61.1,14.5);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1D1D1B","#929291","#929291"],[0,0.6,1],-43.4,0,39.4,0).s().p("Ap3CRIAAkhITuAAIAAEhg");
	this.shape.setTransform(63.2,14.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(18.6,0,85.1,29), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAFBNQiYgOiageQAAhEBcgdQA+gUBfAAQAgAAAUACQBQgIB3A9QA8AeArAgQAGA0ibAAQg9AAhXgIg");
	mask.setTransform(30.2,9.6);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1D1D1B","#1D1D1B","#A0A09F","#A0A09F"],[0,0.18,0.733,1],-30.9,0,29.6,0).s().p("Ak0B7IAAj1IJpAAIAAD1g");
	this.shape.setTransform(30.9,12.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,1.1,60.5,17), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnoAoQBCguCDgwQBphNEQAAQB2AABfAMQE/CAiABLQgoAXhPAPIhIAKIpOAAIgXAAQksAAB+hcg");
	mask.setTransform(81.6,13.2);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1D1D1B","#929291","#929291"],[0,0.6,1],-52.1,0,52.9,0).s().p("AssCHIAAkNIZZAAIAAENg");
	this.shape.setTransform(81.3,13.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(29,0,105.3,26.4), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh+yA5qMAAAhzTMD9lAAAMAAABzTg");
	mask.setTransform(811.5,369);

	// Capa_3
	this.instance = new lib.Image();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,1623,738), null);


(lib.Escena_1_Capa_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_12
	this.text = new cjs.Text("", "12px 'MyriadPro-Regular'");
	this.text.lineHeight = 15;
	this.text.parent = this;
	this.text.setTransform(1243.1,278.8);

	this.text_1 = new cjs.Text("", "12px 'MyriadPro-Regular'");
	this.text_1.lineHeight = 15;
	this.text_1.parent = this;
	this.text_1.setTransform(1226.3,228.7);

	this.text_2 = new cjs.Text("", "12px 'MyriadPro-Regular'");
	this.text_2.lineHeight = 15;
	this.text_2.parent = this;
	this.text_2.setTransform(1220.3,269.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAOQgFgGAAgIQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgHgGg");
	this.shape.setTransform(1508.2,832.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeArQgMgPAAgXQABgeAPgSQAOgQASAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_1.setTransform(1500.8,828.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgBgIAAguQAAgpACgJQABgEAFAAIAJAAIAGAAIACACIgCAMIgBAVQABAtAGAdQAAAEgCABIgHAAgAgJg3QgDgDAAgFQAAgGADgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgFAAgEgDg");
	this.shape_2.setTransform(1493.8,826.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQALAAAIAFQAIAGAAAIQAAAEgDAFQgDAGgEAAIgGgGQgEgHgIAAQgMAAgHAOQgGAMAAANQAAAOAHAIQAGAKAMAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_3.setTransform(1486.9,828.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoBNIgNAAQgGAAgCgGQgBgIAAguIAAgdQAAgHgKAAIgIAAQgJAAAAATQAAAXAHAyQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIgFAAIgSAAQgEAAgBgFQgCgKAAgnIABgaIAAgKQgBgGgGAAIgGACQgDAAAAgFQAAgKAEgDQACgCAFAAQAGAAACgHIADgOQACgIAHgFQAIgFAHAAQAiAAAAAGIgDALQgDAKgCAAIgFgCQgFgCgMAAQgCAAgDAFQgCADAAAEQAAAFAFAAIALAAIAcgBQAHAAgBADIAAALIgBAVQAAAtAGAdQAAAEgDABIgGAAg");
	this.shape_4.setTransform(1476.8,826.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAHAEAAQACAAAGgHQAJgFAEAAQAHAAAFAFQAFAFAAAIQAAAIgGAGQgFAGgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_5.setTransform(1467.9,828.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgcAJQgcALAAAHQAAAGAIAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_6.setTransform(1458.8,828.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgVIAAgzQAAgcAFgEQAEgEAYAAQAyAAAAAmQAAAUgQASQgOARgMAAQgBABgHgJIgHgGQgBAAAAAGQAAANAEAQQAAADgGAAgAgMgfQgFAGAAAZQAAANAIAAQALAAAJgKQAIgIAAgMQAAgIgFgGQgHgFgHgBQgKAAgCAGg");
	this.shape_7.setTransform(1449.8,828.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAsgEALQgDAHgLAAQgKAAAAgFg");
	this.shape_8.setTransform(1439.8,828.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbA0QgMgJABgPQgBgGADgHQACgGABAAIAGAOQAKANAQAAQAEAAAFgDQAGgEAAgGQAAgHgYgLQgYgKgBgUQAAgQAMgJQALgJAOAAQAOAAALAHQAJAGAAAEQAAADgFAHQgFAIgDAAIgHgHQgGgHgKAAQgDAAgFACQgEACAAAEQAAAHAaAOQAaAMAAAVQgBARgMAKQgMAJgQAAQgPAAgLgIg");
	this.shape_9.setTransform(1430.1,828.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAJQAAAHAFAFQAGADAGAAQAIABACgEQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIABgGAGg");
	this.shape_10.setTransform(1415.4,828.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAGAAIAQAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_11.setTransform(1408.8,826.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgUgBAAAnQAAAXAFAdQAAADgFgBIgPAAQgGABgBgFQgDgHAAghQAAg2AGgOQACgHANAAIAIAAQAFAAAAACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgEAGAAQAaAAAAAxQABAtgEANQgCAIgGgBg");
	this.shape_12.setTransform(1396.1,828);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgNAOgRAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_13.setTransform(1386.2,828.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAHAFQAIAGAAAIQAAAEgDAFQgDAGgFAAIgEgGQgFgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAIAKAKAAQAMAAAIgJQAEgFACgEQADAAAAALQAAAQgKAJQgKAJgQAAQgTAAgMgRg");
	this.shape_14.setTransform(1376.8,828.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAANATQAKARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_15.setTransform(1362.4,828.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAzQgCgQAAgNIABghIAAgKQgBgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgDAGAAIADABQAEAAACgFIACgKQAAgFAJgDQAKgEAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAEgGAOQAAAFAFAAIAGgBQAEABACADIABAHQAAAKgDAAIgJgCQgGAAgCAIQgCAEAAAPQAAAdAFARQADAJADADQgBACgKAGQgLAFgDAAQgEAAgDgVg");
	this.shape_16.setTransform(1354.2,827.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAHAKAMAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgUAAgLgRg");
	this.shape_17.setTransform(1346.5,828.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAJQAAAHAFAFQAGADAGAAQAIABACgEQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIABgGAGg");
	this.shape_18.setTransform(1337.4,828.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAzIgCgdIABghIAAgKQgBgFgFAAIgHACQgCAAAAgGQAAgJADgDQABgDAHAAIADABQADAAACgFIACgKQAAgFAKgDQAJgEAFAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAEgGAOQAAAFAEAAIAHgBQAHAAAAALQAAAKgEAAIgIgCQgGAAgDAIQgBAEAAAPQAAAdAFARQACAJADADQAAACgLAGQgKAFgDAAQgFAAgCgVg");
	this.shape_19.setTransform(1329.6,827.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgUgBAAAnQAAAXAFAdQAAADgFgBIgPAAQgGABgBgFQgCgHAAghQAAg2AFgOQACgHANAAIAJAAQAEAAAAACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAHgEAHAAQAaAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_20.setTransform(1321.3,828);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_21.setTransform(1311.5,828.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAFgDAEQgDAGgEAAIgGgGQgEgHgJAAQgLAAgHAOQgGAMABANQAAAOAFAIQAIAKALAAQAMAAAHgJIAGgJQADAAAAALQAAAQgJAJQgKAJgQAAQgUAAgMgRg");
	this.shape_22.setTransform(1302.1,828.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQABAHADAAQACAAAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_23.setTransform(1289.1,828.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfArQgKgPgBgXQAAgeAQgSQAOgQASAAQAQAAAKAIQALAJAAAPQAAAWgeAJQgcALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQAEAAAAAKQAAARgMAKQgKAJgSAAQgVAAgNgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_24.setTransform(1280.1,828.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjBNQgFAAgBgfIAAgiIAAguQACgqAGAAIARAAQAGAAAAAEIgDAMQgCAMAAAGQAAAGADAAQAEAAAEgCIAJgCQAOAAALALQAMAOAAAZQAAAggSAVQgNAOgPAAgAgOgRQgDAGAAATQAAAaAFAIQADAFAGAAQALAAAFgMQAFgKAAgMQAAgTgHgKQgGgHgHAAQgJAAgDAGg");
	this.shape_25.setTransform(1270.9,826.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmAaQAAgQANgLQAMgLAQgDIAGgCQADgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgFAJIgEAHQgFAAgDgFQgEgEAAgGQAAgKAJgGQAKgGANAAQAdAAAJAZQAEAMAAA5IACATQgBAEggAAQgtAAAAghgAgIAIQgGAFAAAJQgBAHAGAFQAGADAGAAQAHABADgEQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIABgHAGg");
	this.shape_26.setTransform(1261,828.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANBNQgGAAAAgDQAJglAAgXQAAgTgEgHQgCgHgIAAQgRAAgBAoQAAAkAEARQAAADgEAAIgSAAQgEAAgBgHIgBhDQABhPAJAAIAVAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIgDANQgDANgBAJQAAAFAEAAIAHgEQAHgEAIAAQAcAAAAA2QAAASgCAUQgCAZgEAAg");
	this.shape_27.setTransform(1251.6,826.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_28.setTransform(1709,803.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgcgNAAQgUgBAAAnQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgCgIAAggQAAg3AFgNQACgHANgBIAIAAQABABABAAQABAAAAAAQABABAAAAQAAABAAAAIgBAHQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAHgEAHABQAagBAAAxQAAAtgDAOQgCAGgGAAg");
	this.shape_29.setTransform(1699.1,803);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKBNQgEAAAAgfIgBgiIABguQABgqAGAAIAPAAQAIAAAAAEIgDATQgFAZAAAbQAAAxAHAbQAAACgHAAg");
	this.shape_30.setTransform(1686.9,801.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgGgEQgFgEgFAAQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHABQAHAAACgEQACgDAAgIIAAgIIgBgJQgBgEgGAAQgHAAgHAFg");
	this.shape_31.setTransform(1679.5,803.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_32.setTransform(1664.8,803.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgNAzIgBgdIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAFAAIAEAAQADAAACgFIACgKQABgFAKgEQAIgDAEAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgFAOQgBAFAEAAIAHAAQAFAAABADIABAHQAAAKgEAAIgIgCQgGAAgDAIQgBAEAAAPQAAAdAFARQACAJADADQAAACgLAFQgKAGgDAAQgEAAgDgVg");
	this.shape_33.setTransform(1656.7,802.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgcgNAAQgHAAgFAGQgIALAAAVQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgCgIAAggQAAg3AFgNQACgHANgBIAJAAQABABAAAAQABAAABAAQAAABAAAAQABABAAAAIgCAHQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAIgEAHABQAZgBAAAxQAAAtgDAOQgCAGgGAAg");
	this.shape_34.setTransform(1648.4,803);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_35.setTransform(1638.6,803.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgNAAAAgLg");
	this.shape_36.setTransform(1631.6,801.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AArA8QgGAAAAgDQAGgXAAgeQAAglgTABQgGAAgCADQgEAGAAATQAAAugBALQgBAHgFAAIgPAAQgGAAAAgCQAHgmAAgSQAAgjgPABQgTAAAAAqQAAAWADAOIADAMQAAACgGAAIgOAAQgGAAgBgDQgDgIAAgkQAAg6ACgGQACgIASgBQAIABAAACIgCAIQAAADAEABIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFgBAGgDQAJgEAHAAQAWAAAHAYQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_37.setTransform(1621.6,803);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_38.setTransform(1611.6,801.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAHAIQAHAKALAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_39.setTransform(1604.7,803.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQAOgQASAAQAQAAAKAIQALAJAAAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQATAAAIgLQADgGACgFQAEAAAAAKQAAARgMAKQgKAJgSAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_40.setTransform(1595.6,803.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAHADgBQACABAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_41.setTransform(1587.7,803.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAPgVAXAAQAMAAAHAFQAIAGAAAIQAAAEgDAFQgDAGgFAAQgBAAgDgGQgFgHgJAAQgMAAgHAOQgFAMAAANQAAAOAGAIQAIAKAKAAQAMAAAIgJQAEgFACgEQACAAAAALQAAAQgJAJQgJAJgRAAQgTAAgMgRg");
	this.shape_42.setTransform(1579,803.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKBNQgEAAgBgfIAAgiIAAguQACgqAGAAIAQAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_43.setTransform(1567.4,801.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgGgEQgFgEgFAAQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHABQAHAAACgEQACgDAAgIIAAgIIgBgJQgBgEgGAAQgHAAgHAFg");
	this.shape_44.setTransform(1560,803.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgEgFAAQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAFAEAHABQAIAAACgEQABgDAAgIIAAgIIAAgJQgCgEgGAAQgHAAgGAFg");
	this.shape_45.setTransform(1545.4,803.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgNAzQgCgPAAgOIACghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAGAAIADAAQAEAAABgFIACgKQABgFAKgEQAIgDAFAAQAAAAABAAQAAAAAAABQAAAAABABQAAABAAAAQAAAFgFAOQAAAFADAAIAHAAQAHAAAAAKQAAAKgEAAIgIgCQgHAAgCAIQgBAEAAAPQAAAdAFARQADAJACADQAAACgLAFQgKAGgDAAQgEAAgDgVg");
	this.shape_46.setTransform(1537.6,802.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAPA8QgHAAAAgDQAKgZAAgkQAAgcgOAAQgUgBAAAnQAAAWAGAeQgBACgFAAIgPAAQgGABgBgFQgDgIAAggQAAg3AGgNQACgHANgBIAIAAQAFABgBACIgBAHQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIAHgDQAHgEAIABQAZgBAAAxQAAAtgDAOQgCAGgGAAg");
	this.shape_47.setTransform(1529.4,803);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQANgQATAAQAQAAAKAIQALAJAAAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQATAAAIgLQADgGACgFQAEAAAAAKQAAARgMAKQgKAJgSAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_48.setTransform(1519.6,803.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAsA8QgHAAAAgDQAHgXAAgeQAAglgTABQgHAAgCADQgEAGAAATQAAAugBALQgBAHgEAAIgQAAQgGAAAAgCQAHgmAAgSQAAgjgPABQgSAAAAAqQAAAWACAOIADAMQAAACgFAAIgPAAQgGAAgBgDQgDgJAAgjQAAg5ACgHQADgIASgBQAHABAAACIgCAIQAAABAAABQABAAAAABQABAAAAAAQABABABAAIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFgBAGgDQAJgEAIAAQAVAAAHAYQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_49.setTransform(1507.3,803);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_50.setTransform(1494.8,803.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJBNQgDAAgBgFQgCgKAAgnIABgaIAAgKQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGAAQAFAAADgHIADgOQACgIAHgFQAGgFAIAAIAKAAQAGABAAADIgCAMQgBAJgCAAIgGgCQgDAAgDAFQgCADAAAEQAAAEAEAAIAHAAQAFAAABADIABAHQAAAKgEAAIgIgCQgJAAAAATQAAAXAGAyQAAAEgFAAg");
	this.shape_51.setTransform(1486.7,801.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgfArQgLgPAAgXQABgeAPgSQANgQATAAQAQAAAJAIQAMAJAAAPQgBAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQAEAAAAAKQAAARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_52.setTransform(1473.5,803.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgbA0QgMgJABgPQAAgGACgHQACgGABAAIAGAOQAJANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQABgQAKgJQALgJAOAAQAPAAALAHQAKAGgBAEQAAADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgFACAAAEQAAAHAaAOQAaAMAAAVQAAARgMAKQgMAJgPAAQgQAAgLgIg");
	this.shape_53.setTransform(1464.2,803.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGACgHQACgGACAAIAFAOQAJANAQAAQAFAAAFgDQAFgDABgHQgBgHgXgLQgZgKAAgUQAAgQAMgJQAKgJAPAAQAPAAAKAHQAJAGAAAEQABADgGAHQgGAIgCAAIgHgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_54.setTransform(1449.7,803.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_55.setTransform(1440.2,803.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAOA2QAAgFgEAAIgJAGQgGAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAHAAIAQAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_56.setTransform(1430.5,803.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgFAAgVIAAg0QAAgbAFgGQAEgDAYAAQAyAAAAAmQAAATgQATQgOARgMAAQgBAAgHgIIgHgGQgBAAAAAGQAAANAEARQAAACgGAAgAgMgfQgEAGgBAZQAAANAJAAQAKAAAJgKQAJgIAAgMQAAgIgGgGQgHgFgHgBQgJAAgDAGg");
	this.shape_57.setTransform(1421.1,803.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgLAYQAEgGAAgIQAAgJgGgDQgIgCAAgBIATgQIAGgDQAHAAAFAHQAGAGAAAHQgBANgMAJQgJAHgKAAg");
	this.shape_58.setTransform(1408.3,807.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgFADgIQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgZgKABgUQAAgQALgJQAKgJAPAAQAOAAAMAHQAIAGABAEQgBADgFAHQgFAIgEAAIgGgHQgHgHgJAAQgEAAgDACQgFACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgMAJgPAAQgQAAgKgIg");
	this.shape_59.setTransform(1401,803.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgEgGAAQgKAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAKgGQAIgGANAAQAeAAAJAZQAEAMAAA5IABATQABAEghAAQgtAAgBghgAgHAHQgIAHAAAIQABAHAFAEQAGAEAGABQAHAAACgEQACgDAAgIIAAgIIgBgJQgBgEgFAAQgIAAgGAFg");
	this.shape_60.setTransform(1391.6,803.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAOBOQgGAAAAgDQAJgZAAglQAAgcgNAAQgUAAAAAnQAAAWAFAeQAAACgFAAIgPAAQgGAAgBgEQgCgIAAggQAAg3AFgNQACgIANAAIAIAAQAEABAAACIgBAHQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIAHgDQAHgEAHAAQAaAAAAAvQAAAvgDANQgCAHgGAAgAgKg4QgLgEgEAAQgEAAgCAEIgBADQgGAAAAgDQAAgHAGgGQAHgIAKAAQAHAAAHADQANAGAHAAQAGAAACgEQADgEABAAQAEAAAAADQAAAGgEAFQgHALgPAAQgHAAgMgFg");
	this.shape_61.setTransform(1382,801.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAOA2QAAgFgFAAIgJAGQgFAEgHAAQgOAAgGgLQgJgPAAgiIACgdQADgcAEAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQATAAgBgoQAAgNgCgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgCAHgMAAQgLAAABgFg");
	this.shape_62.setTransform(1372.1,803.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaA0QgMgJgBgPQAAgGADgHQACgGACAAIAGAOQAJANAPAAQAGAAAEgDQAGgDgBgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgFAIgEAAIgGgHQgGgHgJAAQgNAAAAAIQAAAHAZAOQAaAMAAAVQABARgMAKQgMAJgRAAQgPAAgKgIg");
	this.shape_63.setTransform(1357.2,803.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgFgEQgGgEgFAAQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAFAEAHABQAHAAACgEQACgDAAgIIAAgIIgBgJQgBgEgGAAQgHAAgGAFg");
	this.shape_64.setTransform(1347.7,803.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQACgqAEAAIAQAAQAIAAAAAEIgDATQgFAZAAAbQAAAxAIAbQAAACgIAAg");
	this.shape_65.setTransform(1341.1,801.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_66.setTransform(1328.5,803.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgJgCgIIgDgLQAAgDAHAAIASAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_67.setTransform(1318.8,801.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAANATQAKARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_68.setTransform(1304,803.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgPAAgZQAAgcAQgTQAOgQANAAQADAAAHAEQAEAAAAgJQAAgJgCgIIgCgLQAAgDAGAAIATAAQAIAAgBBYQABBBgHAAgAgHgOQgKAMAAAVQAAAMAEAIQAFALAKAAQAMAAAEgPQABgGAAgTQAAgVgEgHQgCgFgGAAQgHAAgHAJg");
	this.shape_69.setTransform(1294,801.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgEgFAAQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAGAEAGABQAIAAACgEQABgDAAgIIAAgIIAAgJQgCgEgFAAQgIAAgGAFg");
	this.shape_70.setTransform(1284.5,803.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgJgCgIIgDgLQAAgDAHAAIASAAQAJAAgBBYQABBBgHAAgAgIgOQgJAMAAAVQAAAMAEAIQAFALAKAAQAMAAADgPQABgFAAgUQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_71.setTransform(1274.9,801.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgEAAgEgDg");
	this.shape_72.setTransform(1267.8,801.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_73.setTransform(1260.4,803.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAHAIQAHAKALAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_74.setTransform(1250.9,803.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAFAAIAQAAQAIAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgHAAg");
	this.shape_75.setTransform(1724.4,776.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfArQgKgPgBgXQAAgeAQgSQAOgQASAAQAQAAAJAIQAMAJAAAPQAAAWgeAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQAEAAAAAKQAAARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_76.setTransform(1717,778.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgEgFAAQgLABgFAHQgCAIgCAAQgEAAgEgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgGAFg");
	this.shape_77.setTransform(1702.4,778.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgNAzQgCgPAAgOIABghIAAgJQAAgGgGAAIgHACQgCAAAAgFQAAgKADgDQACgDAGABIADAAQAEAAACgFIACgKQAAgFAJgEQAKgDAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAGgGANQAAAFAFAAIAGAAQAFAAABACIABAIQAAAJgDAAIgJgBQgGAAgDAIQgBAFAAANQAAAeAFARQADAIACAFQABACgLAEQgLAGgDAAQgEAAgDgVg");
	this.shape_78.setTransform(1694.5,777.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgEAAgEgDg");
	this.shape_79.setTransform(1688.9,776.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAsA9QgHAAAAgEQAHgWAAgfQAAgkgUgBQgGABgCADQgEAGAAATQAAAugBALQgBAHgEABIgQAAQgGAAAAgDQAHgmAAgSQAAgigPgBQgSAAAAArQAAAWACANIADANQAAADgGAAIgOAAQgGAAgBgEQgDgJAAgjQAAg5ACgHQACgJASAAQAIAAAAAEIgCAHQAAAEAEAAIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFAAAGgEQAJgEAHAAQAWgBAHAZQAEAMAAAcQAAAlgEAIQgCAEgGABg");
	this.shape_80.setTransform(1678.9,778);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgEAAgEgDg");
	this.shape_81.setTransform(1668.9,776.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJBNQgFAAgBgfIAAgiIABguQACgqAEAAIARAAQAHAAAAAEIgEATQgDAZAAAbQAAAxAGAbQAAACgGAAg");
	this.shape_82.setTransform(1664.5,776.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAGAFAGAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgFAAQgIAAgGAFg");
	this.shape_83.setTransform(1651.8,778.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGACgHQABgGACAAIAHAOQAIANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgZgKABgUQgBgQALgJQALgJAPAAQAOAAAMAHQAIAGABAEQgBADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgFACAAAEQAAAHAaAOQAbAMgBAVQAAARgMAKQgMAJgPAAQgQAAgLgIg");
	this.shape_84.setTransform(1642.7,778.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAFAFAHAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgGAAQgHAAgGAFg");
	this.shape_85.setTransform(1633.2,778.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZANgTQAOgVAXAAQAMAAAHAFQAIAGAAAIQAAAFgCAEQgEAGgEAAIgGgGQgEgHgIAAQgMAAgHAOQgFAMgBANQAAAOAHAIQAGAKAMAAQAMAAAHgJIAHgJQACAAAAALQAAAQgJAJQgKAJgRAAQgTAAgMgRg");
	this.shape_86.setTransform(1624.1,778.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgOAAQgTABAAAnQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgDgHAAghQAAg2AFgOQADgIANAAIAJAAQADABAAADIgBAGQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAIgEQAHgEAIABQAaAAAAAvQgBAvgDANQgCAGgHABg");
	this.shape_87.setTransform(1609.7,778);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAPgSQAOgQATAAQAQAAAKAIQALAJgBAPQAAAWgcAJQgcALAAAHQAAAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_88.setTransform(1599.9,778.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgGgEQgFgEgFAAQgLABgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAGAAAIQAAAIAGAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgHAFg");
	this.shape_89.setTransform(1585.2,778.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgMAzQgCgQAAgNIABghIAAgJQgBgGgGAAIgHACQgCAAAAgFQAAgKADgDQACgDAGABIADAAQAGAAABgPQABgFAJgEQAJgDAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAGgFANQgBAFAEAAIAHAAQAFAAABACIABAIQAAAJgEAAIgIgBQgHAAgCAIQgBAFAAANQAAAeAFARQACAIADAFQAAACgLAEQgKAGgDAAQgEAAgCgVg");
	this.shape_90.setTransform(1577.4,777.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgbA0QgLgJgBgPQABgGACgHQACgGACAAIAFAOQAKANAPAAQAGAAAEgDQAFgEABgGQAAgHgYgLQgYgKAAgUQgBgQAMgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgDAAgFACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_91.setTransform(1569.5,778.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_92.setTransform(1560,778.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgbA0QgMgJABgPQgBgGACgHQACgGACAAIAGAOQAJANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQAAgQAMgJQAKgJAPAAQAPAAAKAHQAJAGAAAEQABADgGAHQgFAIgDAAIgIgHQgGgHgJAAQgDAAgFACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_93.setTransform(1545.5,778.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAGAFAGAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgGAAQgHAAgGAFg");
	this.shape_94.setTransform(1536,778.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgJAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABAFADAAQADAAAGgFQAJgGAEAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgCgGQgDgGgHAAQgPAAAAAiQAAAkAGASQgBADgFAAg");
	this.shape_95.setTransform(1528,778.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgNAzQgBgPAAgOIABghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgDAGABIAEAAQADAAABgFIADgKQAAgFAKgEQAIgDAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAGgGANQAAAFAEAAIAHAAQAEAAACACIABAIQAAAJgDAAIgJgBQgGAAgCAIQgCAFAAANQAAAeAFARQADAIADAFQAAACgMAEQgJAGgDAAQgFAAgDgVg");
	this.shape_96.setTransform(1520.5,777.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgNAAQgUABAAAnQAAAVAFAeQAAADgEAAIgQAAQgGAAgBgFQgDgHABghQAAg2AEgOQAEgIAMAAIAIAAQAEABABADIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAIgEAGABQAaAAAAAvQAAAvgDANQgCAGgGABg");
	this.shape_97.setTransform(1512.3,778);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgfArQgLgPABgXQgBgeAPgSQAOgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgNgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_98.setTransform(1502.5,778.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAALgOAAQgEAAgEgDg");
	this.shape_99.setTransform(1495.5,776.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAsA9QgHAAAAgEQAHgWAAgfQAAgkgTgBQgHABgCADQgEAGAAATQAAAugBALQgBAHgEABIgQAAQgGAAAAgDQAHgmAAgSQAAgigPgBQgSAAAAArQAAAWACANIADANQAAADgFAAIgPAAQgGAAgBgEQgDgJAAgjQAAg5ACgHQADgJASAAQAHAAAAAEIgCAHQAAABAAABQABAAAAABQABAAAAAAQABABABAAIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFAAAGgEQAJgEAIAAQAVgBAHAZQAEAMAAAcQAAAlgEAIQgCAEgGABg");
	this.shape_100.setTransform(1485.5,778);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgbA0QgMgJABgPQgBgGADgHQACgGACAAIAGAOQAIANAQAAQAFAAAFgDQAFgEABgGQAAgHgYgLQgYgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgFAHQgHAIgCAAIgHgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_101.setTransform(1468,778.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_102.setTransform(1458.5,778.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgNAzIgBgdIABghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgDAGABIADAAQAEAAABgFIACgKQABgFAKgEQAIgDAFAAQAAAAABAAQAAAAABABQAAAAAAABQAAABAAAAQAAAGgFANQAAAFADAAIAHAAQAHAAAAAKQAAAJgEAAIgIgBQgGAAgCAIQgCAFAAANQAAAeAFARQADAIACAFQAAACgLAEQgKAGgDAAQgEAAgDgVg");
	this.shape_103.setTransform(1450.3,777.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAGAFAGAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgFAAQgIAAgGAFg");
	this.shape_104.setTransform(1442.2,778.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgUIAAg1QAAgaAFgGQAEgDAYAAQAyAAAAAmQAAAUgQASQgOARgMABQgBgBgHgHIgHgHQgBAAAAAHQAAAMAEARQAAACgGAAgAgMggQgEAIgBAYQABANAHAAQALgBAJgJQAIgIAAgMQAAgJgFgFQgGgGgJAAQgIABgDAEg");
	this.shape_105.setTransform(1433.3,778.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAFAFAHAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgGAAQgHAAgGAFg");
	this.shape_106.setTransform(1423.4,778.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgbA6IgHAAQgCgCAAgEQAAgaAVgdIAVgdQAAgDgIgBQgJABgGACIgHACQgCAAgDgLIgCgNQAAgBAHAAIA1AAIAGAAQACAAAAAFQAAASgCAEIgWAcQgRAXAAALQAAADAGAAQANAAAHgCIAGgDQADAAADALIACANQAAADgHAAg");
	this.shape_107.setTransform(1414.7,778.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgeArQgMgPAAgXQABgeAPgSQAOgQASAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_108.setTransform(1400.4,778.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgPAAgZQAAgcAQgTQAOgQANAAQADAAAHAEQAEAAAAgJQAAgJgCgIIgDgLQAAgDAHAAIATAAQAIAAgBBYQABBBgHAAgAgHgOQgKAMAAAVQAAAMAEAIQAFALAKAAQAMAAAEgPQABgGAAgTQAAgVgEgHQgCgFgGAAQgHAAgHAJg");
	this.shape_109.setTransform(1390.7,776.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_110.setTransform(1375.9,778.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAFgDQAEgDAAgHQAAgHgWgLQgZgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgFAIgEAAIgGgHQgFgHgKAAQgNAAAAAIQAAAHAZAOQAaAMAAAVQAAARgLAKQgMAJgQAAQgQAAgKgIg");
	this.shape_111.setTransform(1366.4,778.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAsgEALQgDAHgLAAQgKAAAAgFg");
	this.shape_112.setTransform(1356.7,778.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgKBNQgDAAgBgfIgBgiIABguQABgqAFAAIAQAAQAIAAAAAEIgDATQgEAZgBAbQAAAxAHAbQAAACgHAAg");
	this.shape_113.setTransform(1344.5,776.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgEgFAAQgLABgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgGAFg");
	this.shape_114.setTransform(1337.1,778.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_115.setTransform(1322.4,778.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgKBNQgDAAgBgfIgBgiIABguQABgqAFAAIAQAAQAIAAAAAEIgDATQgFAZAAAbQABAxAGAbQAAACgHAAg");
	this.shape_116.setTransform(1315.5,776.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgJAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABAFADAAQACAAAHgFQAHgGAGAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAkAHASQgBADgGAAg");
	this.shape_117.setTransform(1309.4,778.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_118.setTransform(1300.4,778.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgNAAQgUABAAAnQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgCgHAAghQAAg2AFgOQACgIANAAIAJAAQABABAAAAQABAAABAAQAAABAAAAQABABAAABIgCAGQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAHgEQAIgEAHABQAZAAAAAvQAAAvgDANQgCAGgGABg");
	this.shape_119.setTransform(1290.8,778);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_120.setTransform(1280.9,778.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgUIAAg1QAAgaAFgGQAEgDAYAAQAyAAAAAmQAAAUgQASQgOARgMABQgBgBgHgHIgHgHQgBAAAAAHQAAAMADARQAAACgFAAgAgMggQgEAIgBAYQAAANAIAAQALgBAJgJQAIgIAAgMQAAgJgFgFQgGgGgIAAQgJABgDAEg");
	this.shape_121.setTransform(1271.6,778.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAVA6IgEgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgPgHgNQgGgKgEAAQgEgBgFAKQgFAMAAANQAAAGgBACQgBABgFAAIgLAAIgFgBQgBgBAAgFQAAgSAKgRQALgOAAgCIgKgOQgJgPAAgVQAAgFABgBIAGAAIAOAAIAEAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAOAFALQAFALAEgBQADAAADgGQAEgJACgPIABgHQABgBAFAAIAJAAIAGAAQACABAAAFQAAARgKAPIgLAOIAMAPQAMAPAAAWQAAAHgBACQAAABgGAAg");
	this.shape_122.setTransform(1262,778.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgvBDIgBgjQAAgUAGgpQAGgtAEAAIBGAAQAIAAAAADQgMAbgCAAIgIgEQgHgFgLAAQgJAAgHAGQgJAHABAMQAAAKAFAAIANgEQAMgEAIAAQAIAAAAADQgKAdgCAAQgJgEgHAAQgHAAgHAGQgHAHgBAMQAAALAHAHQAFAHALAAQAKAAALgGIALgGQADAAAMAgQABADgIAAIhRAAIgBAAQgFAAgBgIg");
	this.shape_123.setTransform(1252.4,776.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_124.setTransform(1702.9,732.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAIQAAAIAFAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_125.setTransform(1695.5,728.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgbA0QgMgJABgPQgBgGADgHQACgGACAAIAFAOQAKANAPAAQAFAAAFgDQAFgEABgGQgBgHgXgLQgZgKAAgUQAAgQAMgJQALgJAOAAQAPAAAKAHQAJAGAAAEQABADgGAHQgFAIgDAAIgHgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_126.setTransform(1686.3,728.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgCAAgEQAAgGgGgEQgFgEgFABQgLgBgFAJIgEAHQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAIQgHAFAAAIQAAAIAGAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgHAHg");
	this.shape_127.setTransform(1676.8,728.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQALAAAIAFQAIAGAAAIQAAAEgDAFQgDAGgEAAIgGgGQgEgHgIAAQgMAAgHAOQgGAMAAANQAAAOAHAIQAGAKAMAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgUAAgLgRg");
	this.shape_128.setTransform(1667.8,728.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_129.setTransform(1653.2,728.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgbA0QgLgJgBgPQAAgGACgHQACgGACAAIAGAOQAJANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQAAgQAMgJQAKgJAOAAQAQAAAKAHQAJAGAAAEQABADgGAHQgGAIgDAAIgHgHQgFgHgKAAQgDAAgFACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_130.setTransform(1643.6,728.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgHgBgFAHQgIAKAAAWQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgHAAghQAAg2AEgOQAEgIALABIAJAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAHAAQAbAAAAAxQgBAtgDANQgCAIgGgBg");
	this.shape_131.setTransform(1628.8,728);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgeArQgMgPABgXQgBgeAPgSQAOgQASAAQAQAAAKAIQAMAJgBAPQAAAWgcAJQgcALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_132.setTransform(1619,728.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgJAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAHADAAQACAAAHgHQAHgFAGAAQAHAAAEAFQAFAGAAAGQAAAKgFAFQgFAGgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_133.setTransform(1605.7,728.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAIQAAAIAFAFQAGADAGAAQAIABACgEQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgGAHg");
	this.shape_134.setTransform(1596.6,728.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgEAAIgQAAQgGAAgBgEQgCgHgBghQAAg2AGgOQACgIANABIAIAAQAEAAABACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgEAGAAQAaAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_135.setTransform(1587.1,728);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgBgIgBguQAAgpACgJQABgEAGAAIAJAAQAIAAAAACIgBAMQgCAKABALQgBAtAIAdQAAAEgEABIgGAAgAgIg3QgEgDgBgFQABgGAEgDQADgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgFAAgDgDg");
	this.shape_136.setTransform(1579.8,726.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAsA8QgIAAABgCQAGgYABgdQAAglgTAAQgHgBgCAEQgEAGAAAUQAAAtgBAKQgBAJgFgBIgOAAQgHAAAAgBQAHgnAAgRQAAgjgPAAQgTAAABAqQAAAWACANIADANQgBACgEAAIgPAAQgGAAgBgDQgDgIAAgkQAAg5ACgHQACgJATABQAHAAAAACIgCAJQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAIgDQAGgFALAAQAFAAAFAFIAIADQAGAAAFgCQAJgGAIAAQAVAAAHAZQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_137.setTransform(1569.8,728);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgmAaQAAgQANgLQAMgLAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgEgGABQgKgBgEAJIgFAHQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEALAAA6IABATQAAAEggAAQguAAABghgAgIAIQgGAFgBAIQAAAIAGAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgHAHg");
	this.shape_138.setTransform(1557.4,728.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQALAAAIAFQAIAGAAAIQAAAEgDAFQgDAGgEAAQgCAAgEgGQgEgHgIAAQgMAAgIAOQgFAMAAANQAAAOAHAIQAGAKAMAAQAMAAAHgJQAEgFACgEQACAAABALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_139.setTransform(1548.3,728.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgKBNQgDAAgCgfIAAgiIAAguQACgqAFAAIAQAAQAIAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgHAAg");
	this.shape_140.setTransform(1536.8,726.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgCAAgEQAAgGgGgEQgFgEgFABQgLgBgFAJIgEAHQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAIQgHAFAAAIQAAAIAGAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgHAHg");
	this.shape_141.setTransform(1529.4,728.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAPA8QgHAAAAgCQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgDgHAAghQAAg2AFgOQADgIANABIAJAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAIAAQAaAAAAAxQAAAtgEANQgCAIgGgBg");
	this.shape_142.setTransform(1514.6,728);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAANATQAKARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_143.setTransform(1504.7,728.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIABguQAAgpABgJQACgEAFAAIAJAAQAIAAAAACIgBAMQgCAKAAALQAAAtAHAdQAAAEgCABIgHAAgAgNg/QAAgGAEgDQAFgEAEAAQAGAAAEAEQAEADAAAGQAAALgOAAQgMAAgBgLg");
	this.shape_144.setTransform(1497.5,726.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAHAFQAIAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgFAMgBANQAAAOAHAIQAGAKALAAQAMAAAIgJIAHgJQACAAAAALQAAAQgKAJQgKAJgQAAQgTAAgMgRg");
	this.shape_145.setTransform(1490.6,728.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAPA8QgHAAAAgCQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgDgHAAghQABg2AEgOQADgIANABQAMAAAAACIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAIAAQAaAAAAAxQAAAtgEANQgCAIgGgBg");
	this.shape_146.setTransform(1481.3,728);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgeArQgMgPAAgXQABgeAPgSQAOgQASAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_147.setTransform(1471.5,728.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgMAzQgCgQAAgNIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgDAFAAIAEABQAEAAABgFIACgKQABgEAKgEQAIgEAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAEgFAOQgBAFAEAAIAHgBQAFAAABAEIABAHQAAAKgEAAIgIgCQgGAAgDAIQgBAEAAAOQAAAeAFARQACAJADADQAAACgLAGQgKAFgDAAQgEAAgCgVg");
	this.shape_148.setTransform(1463.6,727.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgCAAgEQAAgGgGgEQgFgEgFABQgLgBgFAJIgEAHQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAIQgHAFAAAIQAAAIAGAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgHAHg");
	this.shape_149.setTransform(1455.6,728.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAIQAAAIAFAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_150.setTransform(1441,728.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAFAAIARAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_151.setTransform(1434.4,726.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgEAAIgQAAQgGAAgBgEQgCgHgBghQAAg2AGgOQADgIAMABIAIAAQAFAAAAACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgEAGAAQAaAAAAAxQABAtgEANQgCAIgGgBg");
	this.shape_152.setTransform(1421.6,728);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAIQAAAIAFAFQAGADAGAAQAIABACgEQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgGAHg");
	this.shape_153.setTransform(1411.8,728.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AArA8QgGAAAAgCQAGgYAAgdQAAglgTAAQgGgBgCAEQgEAGAAAUQAAAtgBAKQgBAJgFgBIgPAAQgGAAAAgBQAHgnAAgRQAAgjgPAAQgTAAAAAqQAAAWADANIADANQAAACgGAAIgOAAQgGAAgBgDQgDgIAAgkQAAg5ACgHQACgJASABQAIAAAAACIgCAJQAAAAAAABQAAAAABABQAAAAABAAQAAAAABAAIAJgDQAHgFAKAAQAFAAAFAFIAIADQAFAAAGgCQAJgGAHAAQAWAAAHAZQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_154.setTransform(1399.7,728);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgEgFABQgLgBgFAJIgEAHQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAIQAAAIAFAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_155.setTransform(1387.3,728.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgJBNQgEAAgCgfIAAgiIABguQABgqAGAAIAQAAQAHAAAAAEIgEATQgDAZAAAbQAAAxAGAbQAAACgGAAg");
	this.shape_156.setTransform(1380.7,726.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgKBNQgEAAAAgfIgBgiIABguQABgqAGAAIAQAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_157.setTransform(1376.1,726.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_158.setTransform(1363.3,728.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgaA0QgMgJAAgPQAAgGACgHQACgGABAAIAHAOQAJANAQAAQAFAAAEgDQAFgDABgHQAAgHgXgLQgZgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgFAHQgHAIgCAAIgHgHQgFgHgLAAQgMAAAAAIQAAAHAaAOQAZAMAAAVQAAARgMAKQgLAJgQAAQgQAAgKgIg");
	this.shape_159.setTransform(1348.6,728.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgEgFABQgLgBgFAJQgCAHgCAAQgEAAgEgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAIQAAAIAFAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_160.setTransform(1339.1,728.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgNAzQgCgQAAgNIABghIAAgKQgBgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgDAGAAIADABQAEAAACgFIACgKQAAgEAJgEQAKgEAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAEgGAOQAAAFAFAAIAGgBQAEAAACAEIABAHQAAAKgDAAIgJgCQgGAAgCAIQgCAEAAAOQAAAeAFARQADAJADADQgBACgKAGQgLAFgDAAQgEAAgDgVg");
	this.shape_161.setTransform(1331.3,727.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAOgSQAOgQASAAQAQAAALAIQALAJgBAPQAAAWgcAJQgcALAAAHQAAAGAIAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_162.setTransform(1323.2,728.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_163.setTransform(1313.6,728.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AATA7QgGAAABgDQADgQAAgNQAAgGgBAAIgHAGQgHAJgCgBQgLAAgPgRQgPgSAAgUQAAgmAxAAQAZAAADAEQAGAEAAAbIAAA0QAAAVgCAGQgBADgFAAgAgMgfQgHAFABAJQAAALAIAJQAJAKAKgBQAJAAAAgMQgBgYgEgIQgDgEgJAAQgIAAgFAFg");
	this.shape_164.setTransform(1303.6,728.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_165.setTransform(1294.2,728.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAHAKAMAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_166.setTransform(1284.8,728.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgHAAghQAAg2AEgOQADgIANABIAJAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAIAAQAaAAAAAxQgBAtgDANQgCAIgHgBg");
	this.shape_167.setTransform(1270.4,728);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAOgSQAOgQATAAQAQAAAKAIQALAJAAAPQgBAWgcAJQgdALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_168.setTransform(1260.6,728.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("Agqg0QAAgEABgBIAFgBIAOAAQAIAAAAADIgBAQQAAAdAHARQAFAOAEAAQAGAAAGgQQAGgSAAgYIgBgRQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgBIAMAAQAFAAABACQACABAAAHQAAAwgUAhQgQAagIAAQgpgeAAhRg");
	this.shape_169.setTransform(1251.3,728.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAPgSQAOgQATAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_170.setTransform(1733,703.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgbA0QgLgJgBgPQABgGABgHQACgGACAAIAGAOQAJANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQAAgQAMgJQAKgJAOAAQAQAAAKAHQAJAGAAAEQABADgGAHQgGAIgDAAIgHgHQgFgHgKAAQgDAAgFACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_171.setTransform(1723.7,703.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGACAAIAGAOQAIANAQAAQAGAAAEgDQAFgEAAgGQAAgHgXgLQgZgKABgUQAAgQALgJQAKgJAPAAQAOAAAMAHQAIAGABAEQgBADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgLAJgRAAQgPAAgKgIg");
	this.shape_172.setTransform(1709.2,703.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgGgEQgFgDgFgBQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHAAQAHAAACgDQACgDAAgHIAAgJIgBgJQgBgEgGgBQgHABgHAFg");
	this.shape_173.setTransform(1699.7,703.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgNAzQgBgQAAgNIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAFAAIAEAAQAGAAABgPQAAgFALgEQAIgDAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAFgFAOQgBAFAEAAIAHAAQAEAAACADIABAHQAAAKgEAAIgIgCQgHAAgBAIQgCAEAAAPQAAAdAFARQADAJACADQAAADgLAEQgKAGgDAAQgEAAgDgVg");
	this.shape_174.setTransform(1691.9,702.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgGgEQgFgDgFgBQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHAAQAHAAACgDQACgDAAgHIAAgJIgBgJQgBgEgGgBQgHABgHAFg");
	this.shape_175.setTransform(1683.8,703.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgFAAgVIAAg0QAAgcAFgFQAEgDAZAAQAxAAAAAmQAAATgQATQgOARgLAAQgCABgHgJIgHgGQgBAAAAAGQAAANAEARQAAACgGAAgAgMgfQgFAGAAAZQAAANAJAAQAKAAAJgKQAJgJAAgLQAAgIgGgGQgGgFgIgBQgJAAgDAGg");
	this.shape_176.setTransform(1674.8,703.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgbA0QgMgJABgPQAAgGACgHQACgGABAAIAGAOQAJANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQABgQAKgJQALgJAOAAQAPAAALAHQAKAGgBAEQAAADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgFACAAAEQAAAHAaAOQAaAMAAAVQAAARgMAKQgLAJgRAAQgQAAgKgIg");
	this.shape_177.setTransform(1660,703.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_178.setTransform(1650.3,703.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgbA0QgLgJAAgPQAAgGACgHQACgGABAAIAHAOQAJANAQAAQAEAAAFgDQAGgEAAgGQAAgHgXgLQgZgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgGAHQgFAIgEAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAaAOQAZAMAAAVQAAARgMAKQgMAJgPAAQgQAAgLgIg");
	this.shape_179.setTransform(1640.6,703.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgfArQgLgPAAgXQAAgeAQgSQANgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALgBAHQAAAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQABARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_180.setTransform(1625.9,703.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_181.setTransform(1616.3,703.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AATA7QgFAAAAgCQADgRAAgNQAAgGgCAAIgGAGQgHAJgCgBQgLAAgPgRQgPgTAAgTQAAgmAxAAQAZAAADADQAGAFAAAcIAAA0QAAAVgCAFQgBADgFAAgAgMgfQgHAGAAAIQAAALAJAJQAJAKAKAAQAJAAAAgNQAAgZgEgGQgEgGgIAAQgJABgFAFg");
	this.shape_182.setTransform(1606.3,703.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQABAHADgBQACABAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgGAGQgFAGgEAAIgDgGQgCgGgHAAQgQAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_183.setTransform(1597.7,703.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_184.setTransform(1588.6,703.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AggA7QgGAAgBgDQgCgFAAgVIAAg0QAAgcAFgFQAEgDAYAAQAyAAAAAmQAAATgQATQgOARgMAAQgBABgHgJIgGgGQgCAAAAAGQAAANAEARQAAACgGAAgAgMgfQgFAGAAAZQAAANAJAAQALAAAJgKQAHgJABgLQgBgIgFgGQgHgFgHgBQgJAAgDAGg");
	this.shape_185.setTransform(1579.3,703.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_186.setTransform(1564.1,703.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgKBNQgDAAgBgfIgBgiIABguQABgqAFAAIAQAAQAIAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgHAAg");
	this.shape_187.setTransform(1557.2,701.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_188.setTransform(1549.7,703.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgaA0QgMgJAAgPQAAgGACgHQACgGABAAIAHAOQAIANARAAQAEAAAFgDQAGgEgBgGQAAgHgXgLQgZgKAAgUQAAgQAMgJQAKgJAPAAQAOAAAMAHQAJAGAAAEQgBADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgDACQgFACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgLAJgQAAQgQAAgKgIg");
	this.shape_189.setTransform(1540.2,703.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAGAEAGAAQAIAAACgDQABgDAAgHIAAgJIAAgJQgCgEgFgBQgIABgGAFg");
	this.shape_190.setTransform(1525.5,703.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgNAzIgBgdIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAGAAIADAAQAEAAABgFIACgKQABgFAKgEQAIgDAFAAQAAAAABAAQAAAAABABQAAAAAAABQAAABAAAAQAAAFgFAOQAAAFADAAIAHAAQAHgBAAALQAAAKgEAAIgIgCQgGAAgCAIQgCAEAAAPQAAAdAFARQADAJACADQAAADgLAEQgKAGgDAAQgEAAgDgVg");
	this.shape_191.setTransform(1517.6,702.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgeAuQgOgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgNAOgRAAQgRAAgNgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_192.setTransform(1509.5,703.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAHAFQAIAGAAAIQAAAEgDAFQgDAGgFAAIgEgGQgFgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAHAKALAAQAMAAAIgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_193.setTransform(1500.1,703.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGACgHQACgGACAAIAGAOQAJANAPAAQAGAAAEgDQAFgEAAgGQABgHgYgLQgZgKAAgUQAAgQAMgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgFAHQgGAIgDAAIgHgHQgGgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_194.setTransform(1491.2,703.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgGgEQgFgDgFgBQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHAAQAHAAACgDQACgDAAgHIAAgJIgBgJQgBgEgGgBQgHABgHAFg");
	this.shape_195.setTransform(1481.7,703.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AArA8QgGAAAAgDQAGgXAAgeQABglgUABQgGgBgCAEQgEAGAAATQAAAugBAKQgBAIgFAAIgPAAQgGAAAAgCQAHgmAAgRQAAgkgPABQgSAAAAAqQAAAWACAOIACAMQAAACgEAAIgPAAQgGABgBgEQgDgJAAgjQAAg5ACgHQADgIARAAQAIAAAAACIgCAIQAAABAAABQAAAAABABQAAAAABAAQABAAAAAAIAJgEQAGgDALAAQAFAAAFADIAIAEQAFAAAGgDQAJgEAHAAQAWAAAHAYQAEANAAAcQAAAkgEAJQgCADgGAAg");
	this.shape_196.setTransform(1469.6,703);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_197.setTransform(1451.7,703.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgNAzQgCgPAAgOIACghIAAgKQgCgFgEAAIgHACQgDAAAAgGQAAgJADgDQACgCAGAAIADAAQAEAAACgFIACgKQAAgFAKgEQAIgDAFAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgFAOQAAAFAEAAIAGAAQAFAAABADIABAHQAAAKgDAAIgJgCQgHAAgCAIQAAAEAAAPQAAAdAEARQADAJACADQAAADgKAEQgLAGgDAAQgEAAgDgVg");
	this.shape_198.setTransform(1443.4,702.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgGgEQgFgDgFgBQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHAAQAHAAACgDQACgDAAgHIAAgJIgBgJQgBgEgGgBQgHABgHAFg");
	this.shape_199.setTransform(1430.2,703.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_200.setTransform(1415.7,703.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_201.setTransform(1406.2,703.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgNAzIgBgdIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAFAAIAEAAQADAAACgFIACgKQAAgFALgEQAIgDAEAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgFAOQgBAFAEAAIAHAAQAEAAACADIABAHQAAAKgEAAIgIgCQgHAAgBAIQgCAEAAAPQAAAdAFARQADAJACADQAAADgLAEQgKAGgDAAQgEAAgDgVg");
	this.shape_202.setTransform(1398,702.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgmAaQAAgQANgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgFgEQgGgDgGgBQgKAAgEAIIgFAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAFAMgBA5IABATQABAEghAAQgtAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHAAQAHAAACgDQACgDAAgHIAAgJIAAgJQgCgEgFgBQgHABgIAFg");
	this.shape_203.setTransform(1390,703.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgFAAgVIAAg0QAAgcAGgFQADgDAYAAQAyAAAAAmQAAATgQATQgOARgMAAQgBABgHgJIgHgGQgBAAAAAGQAAANAEARQAAACgGAAgAgMgfQgEAGgBAZQAAANAIAAQALAAAJgKQAIgJAAgLQAAgIgFgGQgHgFgHgBQgJAAgDAGg");
	this.shape_204.setTransform(1381,703.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAGAEAGAAQAIAAACgDQABgDAAgHIAAgJIAAgJQgCgEgFgBQgIABgGAFg");
	this.shape_205.setTransform(1371.1,703.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgbA5IgHAAQgCgBAAgDQAAgbAVgeIAVgcQAAgEgHABQgJgBgHADIgHACQgCAAgDgLIgCgMQAAgCAHAAIA1AAIAGAAQACAAAAAFQAAARgCAFIgWAdQgRAVAAAMQAAADAGAAQANAAAHgCIAHgEQACAAADAMIACANQAAACgHAAg");
	this.shape_206.setTransform(1362.4,703.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_207.setTransform(1348.1,703.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgKBNQgEAAgBgfIAAgiIABguQACgqAEAAIAQAAQAIAAAAAEIgDATQgFAZAAAbQAAAxAIAbQAAACgIAAg");
	this.shape_208.setTransform(1341.5,701.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAHAEgBQACABAGgHQAJgFAEAAQAHAAAFAFQAFAFAAAIQAAAIgGAGQgFAGgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_209.setTransform(1335.5,703.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_210.setTransform(1326.4,703.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgcgNAAQgHAAgFAGQgIALAAAVQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgCgIAAggQAAg3AEgNQADgHANAAIAJAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgDAHAAQAbgBAAAxQgBAtgDAOQgCAGgHAAg");
	this.shape_211.setTransform(1316.8,703);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_212.setTransform(1306.9,703.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgFAAgVIAAg0QAAgcAGgFQADgDAYAAQAyAAAAAmQAAATgPATQgPARgMAAQgBABgHgJIgHgGQgBAAAAAGQAAANADARQABACgGAAgAgMgfQgEAGgBAZQAAANAJAAQAKAAAJgKQAIgJAAgLQABgIgHgGQgFgFgIgBQgJAAgDAGg");
	this.shape_213.setTransform(1297.6,703.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAEAHAAQAHAAACgDQACgDAAgHIAAgJIgBgJQgBgEgGgBQgHABgHAFg");
	this.shape_214.setTransform(1282.6,703.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgNAzQgBgQAAgNIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAGAAIADAAQAGAAABgPQAAgFALgEQAIgDAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAFgFAOQAAAFADAAIAHAAQAFAAABADIABAHQAAAKgEAAIgIgCQgHAAgBAIQgCAEAAAPQAAAdAGARQACAJADADQAAADgMAEQgKAGgDAAQgEAAgDgVg");
	this.shape_215.setTransform(1274.7,702.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_216.setTransform(1269.1,701.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("Agqg0QAAgEABgBIAFgBIAOAAQAIAAAAADIgBAQQAAAdAHARQAFAOAEAAQAGAAAGgQQAGgSAAgYIgBgRQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgBIAMAAQAFAAABACQACABAAAHQAAAwgUAhQgQAagIAAQgpgeAAhRg");
	this.shape_217.setTransform(1262,703.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgvBDIgBgjQAAgUAGgpQAGgtAEAAIBGAAQAIAAAAADQgMAbgCAAIgIgEQgHgFgLAAQgJAAgHAGQgJAHABAMQAAAKAFAAIANgEQAMgEAIAAQAIAAAAADQgKAdgCAAQgJgEgHAAQgHAAgHAGQgHAHgBAMQAAALAHAHQAFAHALAAQAKAAALgGIALgGQADAAAMAgQABADgIAAIhRAAIgBAAQgFAAgBgIg");
	this.shape_218.setTransform(1252.4,701.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_219.setTransform(1345.3,657.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAFgDQAEgDAAgHQAAgHgWgLQgZgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgFAIgEAAIgGgHQgFgHgKAAQgNAAAAAIQAAAHAZAOQAaAMAAAVQAAARgLAKQgMAJgQAAQgQAAgKgIg");
	this.shape_220.setTransform(1338,653.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgfArQgKgPgBgXQABgeAPgSQANgQASAAQARAAAJAIQAMAJAAAPQgBAWgdAJQgcALAAAHQAAAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAAAAKQAAARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgKAAgGAJg");
	this.shape_221.setTransform(1328.6,653.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgjQAAgegNAAQgUAAAAAoQAAAVAFAeQAAACgFABIgPAAQgGgBgBgEQgCgHAAghQAAg2AEgOQADgIANAAQAMAAAAAEIgBAGQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAIgEQAHgDAIgBQAaABAAAvQgBAvgDANQgCAHgHAAg");
	this.shape_222.setTransform(1319,653);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAALgOAAQgEAAgEgDg");
	this.shape_223.setTransform(1311.6,651.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgMAzQgCgQgBgNIACghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAFgBIAEABQAGAAABgPQABgEAJgFQAKgDAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAGgFANQAAAFADAAIAHgBQAEAAACADIABAIQAAAJgEAAIgIgBQgHAAgCAIQgBAFAAANQAAAeAFARQACAIADAFQAAACgLAEQgJAGgEAAQgEAAgCgVg");
	this.shape_224.setTransform(1305.9,652.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_225.setTransform(1297.8,653.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAPgVAXAAQAMAAAHAFQAIAGAAAIQAAAEgDAFQgDAGgFAAIgEgGQgFgHgJAAQgLAAgHAOQgGAMAAANQABAOAFAIQAIAKAKAAQAMAAAIgJIAGgJQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_226.setTransform(1288.7,653.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgJBNQgEAAgCgfIAAgiIAAguQACgqAFAAIAQAAQAIAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgHAAg");
	this.shape_227.setTransform(1282.4,651.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgDgGAAQgKAAgEAHIgFAIQgFAAgDgEQgEgFAAgGQAAgKAKgGQAIgGANAAQAeAAAJAZQAEAMAAA5IABATQAAAEggAAQgtAAgBghgAgHAIQgIAFAAAIQABAIAFAEQAGAFAGAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgFAAQgIgBgGAHg");
	this.shape_228.setTransform(1275,653.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQALAAAJAFQAHAGAAAIQAAAEgDAFQgDAGgFAAQgBAAgDgGQgFgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAIAKAKAAQANAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgKAJgPAAQgVAAgLgRg");
	this.shape_229.setTransform(1266,653.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_230.setTransform(1251.5,653.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_231.setTransform(1745.2,628.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_232.setTransform(1735.6,628.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgNAzIgCgdIABghIAAgJQgBgGgFAAIgHACQgCAAAAgFQAAgKACgDQACgDAHAAIADABQADAAACgFIACgKQAAgEAKgEQAJgEAFAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAEgGAOQAAAFAEAAIAHgBQAHAAAAALQAAAKgEgBIgIgBQgHAAgCAIQgBAEAAAOQAAAeAFARQACAJADAEQAAABgLAGQgKAFgDAAQgFAAgCgVg");
	this.shape_233.setTransform(1727.5,627.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgGgEQgFgEgGABQgKgBgFAJIgEAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAIgGANAAQAeAAAJAZQAEAMABA5IAAATQABAEgiAAQgsAAgBghgAgHAIQgIAGABAHQAAAIAFAFQAFADAHAAQAIAAACgDQABgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_234.setTransform(1719.4,628.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgVIAAg0QAAgbAFgEQAEgEAZAAQAxAAAAAmQAAAUgPASQgPASgLAAQgCAAgHgIIgGgHQgBAAAAAHQgBAMAEAQQAAADgGAAgAgMggQgFAHABAZQAAAMAIAAQAKAAAJgJQAJgJAAgLQAAgJgHgFQgFgGgIABQgJAAgDAEg");
	this.shape_235.setTransform(1710.4,628.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAGADAGAAQAIAAACgDQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgGAHg");
	this.shape_236.setTransform(1700.6,628.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgbA5IgHAAQgCAAAAgFQAAgaAVgeIAVgcQAAgDgHAAQgJAAgHACIgHACQgCAAgDgLIgCgNQAAgCAHAAIA1AAIAGABQACABAAAEQAAASgCADIgWAdQgRAWAAALQAAAEAGAAQANAAAHgDIAHgCQACgBADALIACAOQAAACgHAAg");
	this.shape_237.setTransform(1691.8,628.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgHgBgFAHQgIALAAAWQAAAWAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgIAAggQAAg3AFgNQACgIANABIAJAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAABIgCAGQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAIgDAHgBQAZAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_238.setTransform(1677.4,628);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_239.setTransform(1667.6,628.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgbA0QgMgJABgPQgBgGADgHQACgGABAAIAHAOQAIANAQAAQAFAAAFgDQAFgEABgGQgBgHgXgLQgYgKgBgUQAAgQAMgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgFAHQgHAIgCAAIgHgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_240.setTransform(1658.4,628.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_241.setTransform(1648.7,628.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgbA0QgLgJAAgPQAAgGACgHQACgGABAAIAGAOQAJANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQABgQAKgJQALgJAOAAQAPAAALAHQAKAGgBAEQAAADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgFACAAAEQAAAHAaAOQAaAMAAAVQAAARgMAKQgMAJgPAAQgQAAgLgIg");
	this.shape_242.setTransform(1633.9,628.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_243.setTransform(1624.3,628.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAGAEABQACgBAGgGQAJgFAEAAQAHAAAFAFQAFAGAAAGQAAAKgGAFQgFAGgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_244.setTransform(1616,628.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQABAGADABQACgBAHgGQAJgFAEAAQAHAAAEAFQAFAGAAAGQAAAKgFAFQgFAGgFAAIgCgGQgDgGgHAAQgPAAAAAiQAAAjAGATQgBADgFAAg");
	this.shape_245.setTransform(1607.6,628.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_246.setTransform(1598.6,628.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgVIAAg0QAAgbAFgEQAEgEAYAAQAyAAAAAmQAAAUgQASQgOASgLAAQgCAAgHgIIgHgHQgBAAAAAHQAAAMAEAQQAAADgGAAgAgMggQgFAHAAAZQAAAMAJAAQAKAAAJgJQAJgJAAgLQAAgJgGgFQgGgGgIABQgJAAgDAEg");
	this.shape_247.setTransform(1589.5,628.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_248.setTransform(1574.6,628.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_249.setTransform(1565.1,628.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgJBNQgFAAgBgfIAAgiIAAguQACgqAGAAIAQAAQAHAAAAAEIgEATQgDAZAAAbQAAAxAGAbQAAACgGAAg");
	this.shape_250.setTransform(1558.2,626.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAPgSQAOgQASAAQAQAAAKAIQALAJgBAPQAAAWgcAJQgcALAAAHQAAAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_251.setTransform(1545.5,628.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_252.setTransform(1535.9,628.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AATA7QgGAAABgDQADgQAAgMQAAgHgBAAIgHAHQgHAIgCAAQgLAAgPgSQgPgSAAgUQAAgmAxAAQAZAAADAEQAGAEAAAbIAAA0QAAAVgCAGQgBADgFAAgAgNgfQgFAFAAAJQAAALAIAJQAJAJAKAAQAJAAgBgMQAAgZgEgHQgDgEgJAAQgHgBgHAGg");
	this.shape_253.setTransform(1525.9,628.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_254.setTransform(1511.4,628.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgJBNQgEAAgCgfIAAgiIABguQACgqAEAAIARAAQAHAAAAAEIgEATQgDAZAAAbQgBAxAIAbQAAACgHAAg");
	this.shape_255.setTransform(1504.7,626.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgjBNQgFAAgBgfIAAgiIAAguQACgqAFAAIASAAQAGAAAAAEIgDAMQgCAMAAAGQAAAGADAAQAEAAAEgCIAJgCQAOAAALALQAMAOAAAZQAAAggTAVQgLAOgQAAgAgOgRQgDAGAAATQAAAaAFAIQADAFAGAAQALAAAFgMQAFgKAAgMQAAgTgHgKQgGgHgHAAQgJAAgDAGg");
	this.shape_256.setTransform(1497.6,626.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAGADAGAAQAIAAACgDQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgGAHg");
	this.shape_257.setTransform(1487.7,628.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgJgCgIIgDgLQAAgDAHAAIASAAQAIAAAABYQAABBgGAAgAgIgOQgJAMAAAVQAAAMAEAIQAFALAKAAQAMAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_258.setTransform(1478,626.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgUAAAAAnQAAAWAFAdQAAACgEAAIgQAAQgGAAgBgEQgCgIgBggQAAg3AGgNQACgIANABIAIAAQAFAAAAADIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgDAGgBQAaAAAAAxQABAtgEANQgCAIgHgBg");
	this.shape_259.setTransform(1468.4,628);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgfArQgLgPAAgXQABgeAPgSQANgQATAAQAQAAAJAIQALAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_260.setTransform(1458.6,628.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAsA8QgHAAAAgCQAHgYAAgdQAAglgUAAQgGAAgCADQgEAGAAAUQAAAtgBAKQgBAJgEgBIgQAAQgGAAAAgBQAHgnAAgRQAAgjgPAAQgSAAAAAqQAAAWACANIADANQAAACgGAAIgOAAQgGAAgBgDQgDgJAAgjQAAg6ACgGQACgJASABQAIAAAAADIgCAIQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAIgDQAHgFAKAAQAFAAAFAFIAIADQAFAAAGgCQAJgGAHAAQAWABAHAYQAEAMAAAdQAAAjgEAKQgCADgGAAg");
	this.shape_261.setTransform(1446.4,628);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_262.setTransform(1433.9,628.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgEAAQgBAAgEgGQgFgHgIAAQgMAAgHAOQgGAMAAANQAAAOAHAIQAHAKALAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_263.setTransform(1424.5,628.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQAOgQASAAQAQAAAKAIQAKAJAAAPQAAAWgcAJQgcALAAAHQAAAGAHAEQAHAEAHAAQASAAAIgLQAFgGACgFQACAAAAAKQAAARgLAKQgLAJgQAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEAEAAQAhgHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_264.setTransform(1415.4,628.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAGADABQACgBAHgGQAHgFAGAAQAHAAAEAFQAFAGAAAGQAAAKgFAFQgFAGgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_265.setTransform(1407.4,628.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgbA0QgMgJABgPQgBgGADgHQACgGACAAIAGAOQAIANARAAQAEAAAFgDQAFgEABgGQAAgHgYgLQgYgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgFAHQgHAIgCAAIgHgHQgGgHgKAAQgDAAgFACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_266.setTransform(1393.3,628.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_267.setTransform(1383.8,628.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgNAOgRAAQgQAAgNgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_268.setTransform(1369.1,628.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgHgBgFAHQgIALAAAWQAAAWAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgIAAggQAAg3AFgNQACgIANABIAJAAQAEAAAAADIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgDAHgBQAZAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_269.setTransform(1359.2,628);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgNAOgRAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_270.setTransform(1344.2,628.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAZA/QgEgEgGAAQgDAAgNAEQgKAFgIAAQgMAAgHgGQgHgGAAgLQAAgNAKgHIAKgIIgGgKQgHgJAAgMQAAgRALgLQAKgKARAAIAIABIADABQAEAAAHgIQAGgJADAAQAEAAAGAHQAFAGAAADQAAACgIABQgJABAAAFIAFAJQAFAIAAAMQAAAOgKALQgKAMgTAAQgGAAgIAEQgHAEAAAEQAAAGAGAAIAPgFQAOgEAKAAQAEAAAHADQAIADAAAEQAAAEgFAKQgEALgEAAQgBAAgEgFgAgLgeQgFAFAAAJQAAAIAEAFQAFAEAHAAQAHAAAFgEQAFgFAAgIQAAgJgFgFQgFgFgHAAQgHAAgEAFg");
	this.shape_271.setTransform(1334.3,627.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQABAGADABQACgBAHgGQAHgFAGAAQAHAAAEAFQAFAGAAAGQAAAKgFAFQgFAGgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_272.setTransform(1326.1,628.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAGADAGAAQAIAAACgDQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgGAHg");
	this.shape_273.setTransform(1317.1,628.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgjBNQgEAAgCgfIAAgiIABguQABgqAFAAIASAAQAGAAAAAEIgCAMQgDAMAAAGQAAAGAEAAQADAAAEgCIAJgCQAOAAALALQAMAOAAAZQAAAggSAVQgMAOgQAAgAgOgRQgDAGAAATQAAAaAFAIQADAFAGAAQALAAAGgMQAEgJAAgNQAAgTgHgKQgGgHgGAAQgKAAgDAGg");
	this.shape_274.setTransform(1307.9,626.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AArA8QgGAAAAgCQAGgYAAgdQAAglgTAAQgGAAgCADQgEAGAAAUQAAAtgBAKQgBAJgFgBIgPAAQgGAAAAgBQAHgnAAgRQAAgjgPAAQgTAAAAAqQAAAWADANIADANQAAACgGAAIgOAAQgGAAgBgDQgDgIAAgkQAAg6ACgGQACgJASABQAIAAAAADIgCAIQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAIgDQAHgFAKAAQAFAAAFAFIAIADQAFAAAGgCQAJgGAHAAQAWABAHAYQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_275.setTransform(1295.3,628);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgcAJQgcALAAAHQAAAGAIAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_276.setTransform(1282.8,628.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgjQAAgdgNAAQgUAAAAAnQAAAWAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgIAAggQAAg3AFgNQACgIANABIAJAAQAEAAAAADIgCAGQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAIgDAHgBQAZAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_277.setTransform(1268,628);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_278.setTransform(1260.7,626.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgjBDQgQgLAAgVQAAgKAFgIQADgGADAAQABAAAFASQAJATAXgBQAKABAHgFQAIgFAAgHQAAgNgagKQgagHgLgNQgHgJAAgPQAAgPAKgLQANgOAYAAQARgBAOAIQANAGAAAGQAAADgFAJQgGAJgDAAIgKgIQgJgIgLAAQgHAAgGAEQgHADAAAIQAAAIAKAGQAEACANAFQAtAQAAAfQAAASgMANQgPAQgZAAQgVAAgOgLg");
	this.shape_279.setTransform(1252.5,626.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_280.setTransform(1498.1,582.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_281.setTransform(1490.6,578.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgcgNAAQgUgBAAAnQAAAWAFAeQAAACgFAAIgPAAQgGABgCgFQgBgIAAggQAAg3AEgNQADgHANgBIAIAAQABABABAAQABAAAAAAQABABAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgEAGABQAagBAAAxQAAAtgDAOQgCAGgGAAg");
	this.shape_282.setTransform(1480.7,578);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgDQAAgHgFgEQgGgEgFAAQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAFAEAHABQAIAAACgEQABgDAAgIIAAgIIAAgJQgCgEgGAAQgHAAgGAFg");
	this.shape_283.setTransform(1470.9,578.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAHADgBQACABAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAkAHASQgBADgGAAg");
	this.shape_284.setTransform(1462.9,578.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_285.setTransform(1453.9,578.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgXAiQgTgiAAg0QAAgEACgBIAEgBIAOAAQAIAAAAADIgCAQQAAAdAIARQAGAOADAAQAFAAAHgQQAGgSAAgYIgBgRQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAIAFgBIALAAQAFAAABACQABABAAAHQAAAwgTAhQgQAagJAAQgIAAgNgZg");
	this.shape_286.setTransform(1444.6,578.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgJBNQgFAAgBgfIAAgiIABguQACgqAEAAIARAAQAHAAAAAEIgEATQgDAZAAAbQAAAxAGAbQAAACgGAAg");
	this.shape_287.setTransform(1432.7,576.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_288.setTransform(1425.3,578.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgcgNAAQgUgBAAAnQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgCgIAAggQAAg3AFgNQACgHANgBIAJAAQABABAAAAQABAAABAAQAAABAAAAQABABAAAAIgCAHQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAIgEAHABQAZgBAAAxQAAAtgDAOQgCAGgGAAg");
	this.shape_289.setTransform(1410.5,578);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_290.setTransform(1400.7,578.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGABgHQACgGACAAIAGAOQAJANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQAAgQAMgJQAKgJAOAAQAQAAAKAHQAJAGAAAEQABADgGAHQgGAIgCAAIgIgHQgFgHgKAAQgDAAgFACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_291.setTransform(1386.2,578.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgDQAAgHgFgEQgGgEgFAAQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAGAEAGABQAIAAACgEQABgDAAgIIAAgIIAAgJQgCgEgFAAQgIAAgGAFg");
	this.shape_292.setTransform(1376.7,578.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAHADgBQADABAGgHQAJgFAEAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgCgGQgDgGgHAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_293.setTransform(1368.7,578.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_294.setTransform(1359.5,578.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgPAAgZQAAgcAQgTQAOgQANAAQADAAAHAEQAEAAAAgJQAAgJgCgIIgCgLQAAgDAGAAIATAAQAIAAgBBYQABBBgHAAgAgHgOQgKAMAAAVQAAAMAEAIQAFALAKAAQAMAAAEgPQABgGAAgTQAAgVgEgHQgCgFgGAAQgHAAgHAJg");
	this.shape_295.setTransform(1349.4,576.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgDQAAgHgGgEQgFgEgFAAQgLAAgFAIIgEAIQgFAAgDgFQgEgEAAgGQAAgKAJgGQAKgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEgiAAQgsAAgBghgAgIAHQgGAHAAAIQgBAHAGAEQAGAEAGABQAIAAACgEQABgDAAgIIAAgIIAAgJQgCgEgGAAQgHAAgHAFg");
	this.shape_296.setTransform(1340,578.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAsA8QgHAAAAgDQAHgXAAgeQAAglgUABQgGAAgCADQgEAGAAATQAAAugBALQgBAHgEAAIgQAAQgGAAAAgCQAHgmAAgSQAAgjgPABQgSAAAAAqQAAAWACAOIADAMQAAACgGAAIgOAAQgGAAgBgDQgDgJAAgjQAAg6ACgGQACgIASgBQAIABAAACIgCAIQAAABAAABQAAAAABABQAAAAABAAQABABABAAIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFgBAGgDQAJgEAHAAQAWAAAHAYQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_297.setTransform(1327.8,578);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAPgSQAOgQATAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_298.setTransform(1315.4,578.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_299.setTransform(1305.7,578.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AATA7QgGAAAAgCQADgRABgNQAAgGgCAAIgGAGQgHAIgCAAQgLAAgOgRQgQgTAAgTQAAgmAyAAQAYAAAEADQAFAGAAAbIAAA0QAAAUgCAGQgBADgFAAgAgNgfQgFAGAAAIQgBAMAJAIQAJAKALAAQAHAAABgNQgBgZgEgGQgDgGgJAAQgHABgHAFg");
	this.shape_300.setTransform(1295.7,578.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgpA0IAAgQQAAgHAFAAQAOAAAHgEQAFgCAAgDIgPgTQgQgUAAgfIABgHQABgBAFAAIAPAAQAGAAAAADIgCAOQAAAOAKAOQAHANAEAAQAFAAADgNQAEgLAAgMIgCgTQAAgDAGAAIAQAAQADABAAANQABAngZAgQgYAggeAAQgEAAAAgHg");
	this.shape_301.setTransform(1281.5,578.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgLAYQAFgGAAgIQAAgJgHgDQgIgCAAgBIATgQQAEgDACAAQAHAAAGAHQAFAGAAAHQAAANgNAJQgJAHgKAAg");
	this.shape_302.setTransform(1269,582.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_303.setTransform(1261.5,578.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgcgNAAQgUgBAAAnQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgDgIAAggQAAg3AGgNQACgHANgBIAIAAQAFABAAACIgCAHQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIAHgDQAHgEAIABQAZgBAAAxQAAAtgDAOQgCAGgGAAg");
	this.shape_304.setTransform(1251.6,578);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgOAMQgIAAAAgEQAAgDADgGQADgKAFAAIAZAAQAIAAAAAEQAAAEgCAGQgDAJgFAAg");
	this.shape_305.setTransform(1748.1,553.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAGAAAGQAAAJgGAHQgFAFgEAAIgDgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_306.setTransform(1742.4,553.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQANgQATAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_307.setTransform(1733.3,553.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgEAAgEgDg");
	this.shape_308.setTransform(1726.3,551.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgXAiQgTgiAAg0QAAgEABgBIAFgBIANAAQAIAAAAADIgBAQQAAAdAIARQAFAOAEAAQAGAAAFgQQAHgSAAgYIgBgRQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgBIAMAAQAFAAABACQACABAAAHQAAAwgVAhQgPAagIAAQgJAAgNgZg");
	this.shape_309.setTransform(1719.3,553.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgNAAQgHAAgFAHQgIAKAAAXQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgCgHAAghQAAg2AFgOQACgIANAAIAJAAQABABAAAAQABAAABAAQAAABAAAAQABABAAABIgCAGQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAHgEQAIgEAHABQAZAAAAAvQAAAvgDANQgCAGgGABg");
	this.shape_310.setTransform(1709.6,553);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_311.setTransform(1702.3,551.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgNAAQgUAAAAAoQAAAVAFAeQAAADgFAAIgPAAQgGAAgCgFQgCgHABghQgBg2AGgOQACgIAMAAIAJAAQAEABABADIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAIgEAGABQAaAAAAAvQABAugEAOQgCAGgGABg");
	this.shape_312.setTransform(1689.7,553);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgfArQgLgPAAgXQABgeAPgSQANgQASAAQARAAAJAIQALAJAAAPQAAAWgdAJQgbALgBAHQAAAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQABARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgKAAgGAJg");
	this.shape_313.setTransform(1679.9,553.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgaA0QgMgJgBgPQAAgFADgIQACgGABAAIAHAOQAIANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAOAAAMAHQAIAGABAEQAAADgGAHQgGAIgDAAIgHgHQgFgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAaAMAAAVQABARgNAKQgLAJgRAAQgPAAgKgIg");
	this.shape_314.setTransform(1665.4,553.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgGgEQgFgEgFAAQgLABgFAHIgEAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAIgGAOAAQAdAAAJAZQAEALAAA6IACATQAAAEgiAAQgsAAgBghgAgHAHQgIAGABAIQAAAIAFAEQAFAFAHAAQAIgBABgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgGAAgHAFg");
	this.shape_315.setTransform(1656,553.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAGAAAGQAAAJgGAHQgFAFgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_316.setTransform(1648,553.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAsgEALQgDAHgLAAQgKAAAAgFg");
	this.shape_317.setTransform(1638.7,553.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgJgCgIIgDgLQAAgDAGAAIATAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_318.setTransform(1628.6,551.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgGgEQgFgEgFAAQgLABgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAGAAAIQAAAIAGAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgHAFg");
	this.shape_319.setTransform(1619.2,553.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAsA9QgHAAAAgEQAHgWAAgfQAAgkgTgBQgHAAgCAEQgEAGAAATQAAAugBALQgBAHgEABIgQAAQgGAAAAgDQAHgmAAgSQAAgigPgBQgSAAAAArQAAAWACANIADANQAAADgGAAIgOAAQgGAAgBgEQgDgJAAgjQAAg5ACgHQADgJASAAQAHAAAAAEIgCAHQAAABAAABQABAAAAABQABAAAAAAQABABABAAIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFAAAGgEQAJgEAIAAQAVgBAHAZQAEANAAAbQAAAlgEAIQgCAEgGABg");
	this.shape_320.setTransform(1607,553);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAALgOAAQgEAAgEgDg");
	this.shape_321.setTransform(1597,551.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgMAzQgDgQAAgNIACghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgDAGABIADAAQAGAAABgPQABgFAKgEQAIgDAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAGgFANQgBAFAEAAIAHAAQAFAAABACIABAIQAAAJgEAAIgIgBQgHAAgCAIQgBAFAAANQAAAeAFARQADAIACAFQAAACgLAEQgJAGgEAAQgEAAgCgVg");
	this.shape_322.setTransform(1591.3,552.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGACgHQACgGACAAIAFAOQAJANAQAAQAGAAAEgDQAFgEAAgGQABgHgYgLQgZgKAAgUQAAgQAMgJQALgJAOAAQAOAAAMAHQAIAGABAEQAAADgGAHQgGAIgCAAIgHgHQgGgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_323.setTransform(1583.4,553.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgGgEQgFgEgFAAQgLABgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAGAAAIQAAAIAGAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgHAFg");
	this.shape_324.setTransform(1574,553.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgJBNQgFAAgBgfIAAgiIABguQACgqAEAAIAQAAQAIAAAAAEIgEATQgEAZAAAbQAAAxAIAbQAAACgIAAg");
	this.shape_325.setTransform(1567.4,551.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgJAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAFADAAQACAAAHgFQAHgGAGAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_326.setTransform(1556.1,553.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAALgOAAQgEAAgEgDg");
	this.shape_327.setTransform(1549.5,551.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAFAEAAQACAAAHgFQAHgGAFAAQAHAAAFAFQAFAGAAAGQAAAJgGAHQgFAFgEAAIgDgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_328.setTransform(1543.7,553.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAJBNIgSAAQgDAAgBgFQgCgKAAgnIABgaIAAgKQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGAAQAFAAACgHIADgOQADgIAGgFQAHgFAHAAIALAAQAGABAAADIgCAMQgCAJgCAAIgFgCQgDAAgDAFQgCADAAAEQAAAEAEAAIAHAAQAHAAAAAKQAAAKgEAAIgIgCQgKAAAAATQAAAXAHAyQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFAAg");
	this.shape_329.setTransform(1536.2,551.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_330.setTransform(1528,553.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgMAAAAAIQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_331.setTransform(1518.3,553.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgNAAQgHAAgFAHQgIAKAAAXQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgCgHAAghQAAg2AFgOQACgIANAAIAJAAQAEABAAADIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAIgEAHABQAZAAAAAvQAAAvgDANQgCAGgGABg");
	this.shape_332.setTransform(1503.5,553);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_333.setTransform(1493.7,553.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgJgCgIIgDgLQAAgDAHAAIASAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_334.setTransform(1484,551.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_335.setTransform(1474.5,553.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_336.setTransform(1464.9,553.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgUIAAg1QAAgbAFgFQAEgDAZAAQAxAAAAAmQAAAUgQASQgOARgLABQgCgBgHgHIgHgHQgBAAAAAHQAAAMAEARQAAACgGAAgAgMggQgFAIAAAYQAAANAJAAQAKgBAJgJQAJgIAAgMQAAgJgGgFQgGgGgIAAQgJABgDAEg");
	this.shape_337.setTransform(1455.4,553.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgNA2QgGgFAAgJQAAgIAGgFQAGgGAHAAQAIAAAGAFQAGAGAAAJQAAAIgGAGQgGAFgIAAQgHAAgGgGgAgNgaQgGgFAAgJQAAgIAGgFQAGgGAHAAQAIAAAGAFQAGAGAAAJQAAAIgGAGQgGAFgIAAQgHAAgGgGg");
	this.shape_338.setTransform(1442.6,553.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgOAAQgGAAgFAHQgIAKAAAXQAAAVAFAeQAAADgFAAIgPAAQgGAAgCgFQgCgHAAghQAAg2AFgOQAEgIALAAIAJAAQAFABAAADIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAIgEAGABQAaAAAAAvQABAvgEANQgCAGgGABg");
	this.shape_339.setTransform(1435,553);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgfArQgLgPAAgXQABgeAPgSQANgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgcALABAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgNgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_340.setTransform(1425.2,553.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AArA9QgGAAAAgEQAGgWAAgfQAAgkgTgBQgGAAgCAEQgEAGAAATQAAAugBALQgBAHgFABIgPAAQgGAAAAgDQAHgmAAgSQAAgigPgBQgTAAAAArQAAAWADANIADANQAAADgGAAIgOAAQgGAAgBgEQgDgIAAgkQAAg5ACgHQACgJASAAQAIAAAAAEIgCAHQAAABAAABQAAAAABABQAAAAABAAQABABABAAIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFAAAGgEQAJgEAHAAQAWgBAHAZQAEANAAAbQAAAlgEAIQgCAEgGABg");
	this.shape_341.setTransform(1413,553);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_342.setTransform(1403,551.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgNAzIgCgdIABghIAAgJQgBgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgDAFABIAEAAQAEAAABgFIACgKQAAgFALgEQAIgDAEAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAGgGANQABAFADAAIAHAAQAHAAAAAKQAAAJgEAAIgIgBQgGAAgCAIQgCAFAAANQAAAeAFARQADAIACAFQAAACgLAEQgKAGgDAAQgEAAgDgVg");
	this.shape_343.setTransform(1397.3,552.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgaA0QgMgJAAgPQAAgGACgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQAAgQALgJQALgJAOAAQAPAAAMAHQAJAGAAAEQgBADgFAHQgGAIgDAAIgGgHQgHgHgJAAQgEAAgDACQgFACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgLAJgQAAQgQAAgKgIg");
	this.shape_344.setTransform(1389.4,553.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAGAFAGAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgFAAQgIAAgGAFg");
	this.shape_345.setTransform(1379.9,553.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgKBNQgDAAgBgfIgBgiIABguQABgqAGAAIAQAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_346.setTransform(1373.4,551.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAPgSQAOgQATAAQAQAAAJAIQALAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_347.setTransform(1360.7,553.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgbA0QgLgJAAgPQAAgGABgHQACgGACAAIAGAOQAJANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgYgKgBgUQABgQAKgJQALgJAOAAQAPAAALAHQAJAGAAAEQABADgGAHQgGAIgDAAIgHgHQgFgHgKAAQgEAAgEACQgFACABAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_348.setTransform(1351.5,553.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_349.setTransform(1336.7,553.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgkQAAgdgNAAQgUAAAAAoQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgDgHABghQAAg2AEgOQADgIAMAAIAKAAQAAABABAAQABAAAAAAQABABAAAAQAAABAAABIgBAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAHgEAHABQAaAAAAAvQAAAvgDANQgCAGgGABg");
	this.shape_350.setTransform(1326.8,553);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_351.setTransform(1311.8,553.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_352.setTransform(1302.2,553.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AATA7QgGAAAAgCQAEgRgBgMQAAgHgBAAIgGAHQgHAHgCABQgLgBgPgRQgPgSAAgUQAAgmAxAAQAZAAADADQAGAGAAAaIAAA1QAAAUgCAGQgCADgFAAgAgNgfQgGAFAAAJQAAAMAIAIQAKAJAKABQAIAAAAgNQABgYgFgIQgDgEgJgBQgIAAgGAGg");
	this.shape_353.setTransform(1292.2,553.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAHQgHAGAAAIQAAAIAFAEQAGAFAGAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgGAAQgHAAgGAFg");
	this.shape_354.setTransform(1277.7,553.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgJAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQABAFADAAQACAAAHgFQAJgGAEAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgCgGQgDgGgHAAQgPAAAAAiQAAAkAGASQgBADgFAAg");
	this.shape_355.setTransform(1269.7,553.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgGgEQgFgEgFAAQgLABgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAGAAAIQAAAIAGAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgHAFg");
	this.shape_356.setTransform(1260.7,553.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AggA7QgGAAgBgDQgCgFAAgVIAAg1QAAgaAFgGQAEgDAYAAQAyAAAAAmQAAAUgQASQgOARgMABQgBgBgHgHIgGgHQgCAAAAAHQAAAMAEARQAAACgGAAgAgMggQgFAIAAAYQAAANAJAAQAKgBAKgJQAIgIAAgMQAAgJgGgFQgGgGgIAAQgJABgDAEg");
	this.shape_357.setTransform(1251.7,553.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGACAAIAGAOQAIANAQAAQAGAAAEgDQAFgEAAgGQAAgHgXgLQgZgKABgUQAAgQALgJQAKgJAPAAQAOAAAMAHQAIAGABAEQgBADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgLAJgRAAQgPAAgKgIg");
	this.shape_358.setTransform(1733.9,528.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgGgEQgFgEgGABQgKAAgFAIIgEAHQgEAAgEgEQgEgFAAgGQAAgKAKgGQAIgGANAAQAeAAAJAZQAEAMABA5IAAATQAAAEggAAQgtAAgBghgAgHAIQgIAGABAHQAAAIAFAFQAFADAHABQAIgBABgDQACgCAAgJIAAgHIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_359.setTransform(1724.5,528.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgKBNQgDAAgBgfIgBgiIABguQABgqAFAAIAQAAQAIAAAAAEIgDATQgFAZAAAbQAAAxAHAbQAAACgHAAg");
	this.shape_360.setTransform(1717.9,526.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQABAFADABQACgBAHgFQAHgGAGAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_361.setTransform(1711.8,528.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgfArQgLgPABgXQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgbALAAAHQgBAGAJAEQAGAEAHAAQATAAAHgLQAFgGABgFQADAAAAAKQAAARgLAKQgKAJgSAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEAEAAQAhgHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_362.setTransform(1702.8,528.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAZA/QgEgEgGAAQgDAAgNAEQgKAFgIAAQgMAAgHgGQgHgGAAgLQAAgNAKgHIAKgIIgGgKQgHgJAAgMQAAgRALgLQAKgKARAAIALACQAEAAAHgIQAGgJADAAQAEAAAGAHQAFAGAAADQAAACgIABQgJABAAAFIAFAJQAFAIAAAMQAAAOgKALQgKAMgTAAQgHAAgHAEQgHAEAAAEQAAAGAGAAIAPgFQAOgEAKAAQAEAAAHADQAIADAAAEQAAAFgFAJQgFALgDAAQgCAAgDgFgAgMgeQgFAFAAAJQAAAIAFAFQAFAEAHAAQAHAAAFgEQAFgFAAgIQAAgJgFgFQgFgFgHAAQgHAAgFAFg");
	this.shape_363.setTransform(1693.2,527.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgfArQgLgPABgXQAAgeAPgSQANgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgNgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_364.setTransform(1683.3,528.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgNAzQgCgQAAgNIABghIAAgJQgBgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGgBIADABQAEAAABgFIACgKQAAgEALgEQAJgEAEAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAEgGAOQABAFADAAIAHgBQAEAAACADIABAIQAAAJgEAAIgIgBQgGAAgCAIQgCAEAAAOQAAAeAFARQADAIACAFQAAABgLAGQgJAFgEAAQgEAAgDgVg");
	this.shape_365.setTransform(1675.4,527.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_366.setTransform(1667.3,528.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQABAFADABQACgBAHgFQAHgGAGAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_367.setTransform(1658.9,528.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AggA7QgGAAgBgDQgCgFAAgWIAAg0QAAgbAFgEQAEgEAYAAQAyAAAAAmQAAATgQATQgOASgMAAQgBgBgHgHIgGgHQgBAAgBAHQAAAMAEAQQAAADgGAAgAgMggQgFAHAAAZQAAAMAJAAQALAAAJgJQAIgJAAgLQAAgIgGgGQgGgGgIABQgJAAgDAEg");
	this.shape_368.setTransform(1650.3,528.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAPgSQAOgQATAAQAQAAAJAIQALAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_369.setTransform(1635.2,528.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_370.setTransform(1625.6,528.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AATA7QgGAAAAgDQADgQABgMQAAgHgCAAIgGAHQgHAHgCABQgLAAgOgSQgQgTAAgTQAAgmAyAAQAYAAAEAEQAFAEAAAbIAAA0QAAAWgCAFQgBADgFAAgAgNgfQgGAGAAAIQAAALAJAJQAJAJALAAQAHAAABgMQAAgZgFgHQgDgEgJAAQgHgBgHAGg");
	this.shape_371.setTransform(1615.6,528.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgpA0IAAgQQAAgHAFAAQAOAAAHgEQAFgCAAgDIgPgTQgQgUAAgfIABgHQABgBAFAAIAPAAQAGAAAAADIgCAOQAAAOAKAOQAHANAEAAQAFAAADgNQAEgLAAgMIgCgTQAAgDAGAAIAQAAQADABAAANQABAngZAgQgYAggeAAQgEAAAAgHg");
	this.shape_372.setTransform(1601.3,528.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgFgEQgGgEgFABQgLAAgFAIIgEAHQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAFADAHABQAHgBACgDQACgCAAgJIAAgHIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_373.setTransform(1591.9,528.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AANBNQgGAAAAgDQAJglAAgXQAAgTgEgHQgCgHgIAAQgRAAAAAoQAAAkAEARQAAADgGAAIgRAAQgEAAgBgHIgBhDQAAhPALAAIAUAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIgDANQgEANAAAJQAAAFAEAAIAIgEQAGgEAIAAQAcAAAAA2QAAASgCAUQgCAZgDAAg");
	this.shape_374.setTransform(1582.5,526.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgpA0IAAgQQAAgHAFAAQAOAAAHgEQAFgCAAgDIgPgTQgQgUAAgfIABgHQABgBAFAAIAPAAQAGAAAAADIgCAOQAAAOAKAOQAHANAEAAQAFAAADgNQAEgLAAgMIgCgTQAAgDAGAAIAQAAQADABAAANQABAngZAgQgYAggeAAQgEAAAAgHg");
	this.shape_375.setTransform(1567.7,528.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgZgKABgUQgBgQALgJQALgJAOAAQAPAAALAHQAKAGgBAEQAAADgFAHQgGAIgDAAIgGgHQgHgHgJAAQgEAAgEACQgEACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgMAJgPAAQgQAAgKgIg");
	this.shape_376.setTransform(1553.2,528.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAOgSQAOgQATAAQAPAAALAIQALAJgBAPQAAAWgcAJQgcALAAAHQAAAGAIAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_377.setTransform(1543.7,528.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgKBNQgDAAgBgfIgBgiIABguQABgqAGAAIAPAAQAIAAAAAEIgDATQgEAZgBAbQAAAxAHAbQAAACgHAAg");
	this.shape_378.setTransform(1537.1,526.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgkBNQgEAAgBgfIAAgiIABguQABgqAFAAIARAAQAHAAAAAEIgDAMQgCAMAAAGQAAAGAEAAQADAAAEgCIAJgCQAOAAALALQAMAOAAAZQAAAfgSAWQgNAOgPAAgAgOgRQgDAHAAASQAAAaAFAIQADAFAGAAQALAAAGgMQAEgJAAgNQAAgTgIgKQgFgHgHAAQgJAAgDAGg");
	this.shape_379.setTransform(1529.9,526.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgNAAAAgLg");
	this.shape_380.setTransform(1522.4,526.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAHAKAMAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_381.setTransform(1515.5,528.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAOA9QgGAAAAgDQAJgaAAgjQAAgdgNgBQgUAAAAAoQAAAWAFAdQAAACgFABIgPAAQgGgBgBgEQgCgIAAggQAAg3AFgNQACgIANAAIAIAAQABABABAAQABAAAAAAQABABAAAAQAAABAAABIgBAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAHgDAHgBQAaABAAAvQAAAvgDAMQgCAIgGAAg");
	this.shape_382.setTransform(1506.3,528);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_383.setTransform(1496.5,528.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgFADgIQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAIAGABAEQAAADgGAHQgGAIgDAAIgHgHQgFgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAbAMAAAVQgBARgMAKQgLAJgRAAQgPAAgKgIg");
	this.shape_384.setTransform(1487.2,528.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgpA0IAAgQQAAgHAGAAQANAAAHgEQAGgCAAgDQgIgJgIgKQgQgUAAgfQAAgGABgBQABgBAFAAIAPAAQAGAAAAADIgBAOQAAAOAJAOQAHANAEAAQAFAAAEgNQADgLAAgMIgCgTQAAgDAGAAIAQAAQADABAAANQABAngZAgQgXAggeAAQgFAAAAgHg");
	this.shape_385.setTransform(1472.7,528.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AAOA2QAAgFgEAAIgJAGQgGAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_386.setTransform(1463.1,528.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAsA9QgHAAAAgDQAHgYAAgdQAAgmgUAAQgGAAgCAEQgEAGAAAUQAAAtgBAKQgBAJgEAAIgQAAQgGAAAAgCQAHgnAAgSQAAgigPgBQgSABAAAqQAAAWACANIADANQAAACgGABIgOAAQgGgBgBgDQgDgJAAgjQAAg6ACgGQACgJASAAQAIABAAADIgCAIQAAAAAAABQABAAAAABQABAAAAAAQABABABAAIAIgEQAHgFAKAAQAFAAAFAFIAIAEQAFAAAGgDQAJgGAHAAQAWABAHAYQAEAMAAAcQAAAlgEAIQgCAFgGAAg");
	this.shape_387.setTransform(1450.5,528);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AAOA9QgGAAAAgDQAJgaAAgjQAAgdgOgBQgGAAgFAHQgIAKAAAXQAAAWAFAdQAAACgFABIgPAAQgGgBgBgEQgDgIAAggQABg3AFgNQACgIANAAIAJAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAABIgBAGQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAIgEQAHgDAIgBQAaABAAAvQAAAugEANQgCAIgHAAg");
	this.shape_388.setTransform(1432.7,528);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_389.setTransform(1422.8,528.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_390.setTransform(1413.3,528.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_391.setTransform(1398.5,528.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQABAFADABQACgBAHgFQAHgGAGAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_392.setTransform(1390.2,528.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABAFADABQACgBAHgFQAHgGAFAAQAHAAAFAFQAFAGAAAGQAAAJgGAHQgFAFgEAAIgDgGQgCgGgIAAQgPAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_393.setTransform(1381.9,528.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgfArQgLgPABgXQgBgeAPgSQAOgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgNgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_394.setTransform(1372.8,528.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgFAAgWIAAg0QAAgbAGgEQADgEAZAAQAxAAAAAmQAAATgPATQgPASgLAAQgCgBgHgHIgHgHQgBAAAAAHQAAAMADAQQABADgGAAgAgMggQgEAHgBAZQAAAMAJAAQAKAAAJgJQAIgJAAgLQABgIgHgGQgGgGgHABQgJAAgDAEg");
	this.shape_395.setTransform(1363.8,528.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAFAAIAQAAQAIAAAAAEIgDATQgFAZAAAbQAAAxAHAbQABACgIAAg");
	this.shape_396.setTransform(1351.5,526.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQANgQATAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_397.setTransform(1344.1,528.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAHAAIASAAQAJAAgBBYQABBBgHAAgAgIgOQgJAMAAAVQAAAMAEAIQAFALAKAAQAMAAADgPQABgFAAgUQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_398.setTransform(1334.3,526.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQABgGACgHQACgGACAAIAGAOQAIANAQAAQAFAAAFgDQAFgDAAgHQABgHgYgLQgYgKAAgUQgBgQAMgJQALgJAOAAQAOAAAMAHQAIAGABAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgMAAAAAIQAAAHAZAOQAaAMAAAVQAAARgMAKQgLAJgRAAQgPAAgKgIg");
	this.shape_399.setTransform(1319.8,528.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgGgEQgFgEgFABQgLAAgFAIIgEAHQgEAAgEgEQgEgFAAgGQAAgKAJgGQAJgGAOAAQAdAAAJAZQAEAMABA5IABATQgBAEggAAQguAAAAghgAgHAIQgIAGABAHQAAAIAFAFQAFADAHABQAIgBABgDQACgCAAgJIAAgHIgBgJQgBgGgGAAQgGAAgHAHg");
	this.shape_400.setTransform(1310.4,528.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgMAzQgCgQAAgNIABghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAFgBIAEABQADAAACgFIACgKQABgEAKgEQAIgEAFAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgFAOQgBAFAEAAIAHgBQAFAAABADIABAIQAAAJgEAAIgIgBQgGAAgDAIQgBAEAAAOQAAAeAFARQACAIADAFQAAABgLAGQgKAFgDAAQgEAAgCgVg");
	this.shape_401.setTransform(1302.5,527.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgGgEQgFgEgFABQgLAAgFAIIgEAHQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAIQgHAGAAAHQAAAIAGAFQAFADAHABQAHgBACgDQACgCAAgJIAAgHIgBgJQgBgGgGAAQgHAAgHAHg");
	this.shape_402.setTransform(1294.5,528.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AghA7QgEAAgCgDQgCgFAAgWIAAg0QAAgbAGgEQADgEAYAAQAyAAAAAmQAAATgPATQgPASgMAAQgBgBgHgHIgHgHQgBAAAAAHQABAMADAQQAAADgGAAgAgMggQgEAHgBAZQABAMAIAAQAKAAAJgJQAJgJAAgLQAAgIgGgGQgGgGgIABQgJAAgDAEg");
	this.shape_403.setTransform(1285.5,528.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_404.setTransform(1270.6,528.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgFgEQgGgEgFABQgLAAgEAIIgFAHQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAFADAHABQAHgBACgDQACgCAAgJIAAgHIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_405.setTransform(1261.1,528.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgrBDIAAgjQAAgUAFgpQAGgtAEAAIAcAAQADAAAAAEIgKAdQgKAgAAAeQAAAfAUAAQAKAAAKgIIALgIQADAAAHAkQAAADgHAAIhJAAIAAAAQgGAAgBgIg");
	this.shape_406.setTransform(1252,526.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgOAOQgFgGAAgIQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgHgGg");
	this.shape_407.setTransform(1274.5,482.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgbA0QgMgJABgPQAAgGABgHQADgGABAAIAGAOQAJANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKgBgUQABgQAKgJQALgJAOAAQAPAAALAHQAJAGAAAEQABADgGAHQgFAIgDAAIgHgHQgHgHgJAAQgEAAgEACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgPAAQgQAAgLgIg");
	this.shape_408.setTransform(1267.2,478.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAIIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAFQAGADAGAAQAIAAACgDQABgDAAgHIAAgJIAAgJQgCgEgFgBQgIABgGAFg");
	this.shape_409.setTransform(1257.7,478.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgNAzIgCgdIABghIAAgKQgBgFgFAAIgHACQgCAAAAgGQAAgJADgDQABgCAHAAIADAAQADAAACgFIACgKQAAgFAKgDQAJgEAFAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAFgGANQAAAFAEAAIAHAAQAHgBAAALQAAAKgEAAIgIgCQgHAAgCAIQgBAFAAAOQAAAdAFARQACAJADADQAAADgLAFQgKAFgDAAQgFAAgCgVg");
	this.shape_410.setTransform(1249.9,477.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgNAMQgJAAAAgEQABgEACgGQADgJAEABIAaAAQAJgBgBADQABAFgDAGQgDAIgFABg");
	this.shape_411.setTransform(1753.6,453.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_412.setTransform(1746.5,453.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_413.setTransform(1736.9,453.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AATA7QgGAAAAgCQAEgRAAgMQAAgHgBAAIgHAHQgHAHgCAAQgLAAgOgRQgQgSAAgUQAAgmAxAAQAZAAAEADQAFAFAAAcIAAA0QAAAUgCAGQgBADgFAAgAgNgfQgGAFAAAJQAAAMAJAIQAJAKAKAAQAJAAAAgNQAAgZgFgGQgDgGgJAAQgIAAgGAGg");
	this.shape_414.setTransform(1726.9,453.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgmAaQAAgQANgMQAMgKAQgDIAGgCQADgCAAgDQAAgHgFgEQgGgEgGAAQgKABgEAHIgFAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAKgGAMAAQAeAAAJAZQAFAMgBA5IABATQAAAEggAAQgtAAAAghgAgIAHQgGAHgBAIQAAAHAGAEQAFAFAHAAQAHAAADgEQABgCAAgJIAAgIIAAgJQgCgEgFAAQgIAAgHAFg");
	this.shape_415.setTransform(1717.7,453.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMAEAAIAOAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAFAAAIQAAAJgGAGQgFAFgEAAIgDgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_416.setTransform(1709.7,453.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_417.setTransform(1695.3,453.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAGAAIATAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_418.setTransform(1685.3,451.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AAOA9QgGgBAAgDQAJgZAAgkQAAgdgOAAQgTABAAAnQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgDgHAAghQABg3AFgNQACgHANgBIAJAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAIgEQAHgEAIABQAaAAAAAvQAAAugEAOQgCAGgHABg");
	this.shape_419.setTransform(1675.7,453);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgDQAAgHgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAJgGQAKgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAFAFAHAAQAHAAACgEQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgGAFg");
	this.shape_420.setTransform(1665.9,453.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgbA6IgHAAQgCgCAAgEQgBgaAWgdIAVgdQgBgDgGgBQgJABgHACIgHACQgCAAgCgLIgDgMQAAgCAHAAIA1AAIAHAAQABABAAAEQAAARgBAFIgXAdQgRAWAAALQAAADAGAAQANAAAHgCIAGgDQADAAADALIADANQAAADgIAAg");
	this.shape_421.setTransform(1657.2,453.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMQgCAKAAALQAAAtAIAdQAAAEgEABIgGAAgAgJg3QgEgDAAgFQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgFAAgEgDg");
	this.shape_422.setTransform(1650.6,451.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAFAAIARAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_423.setTransform(1646.1,451.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQABgpACgJQAAgEAGAAIAJAAQAIAAAAACIgBAMQgBAKgBALQAAAtAIAdQAAAEgDABIgHAAgAgJg3QgDgDAAgFQAAgGADgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgFAAgEgDg");
	this.shape_424.setTransform(1641.2,451.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgNAzQgCgQAAgNIABghIAAgKQgBgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgDAGABIADAAQAEAAACgFIACgKQAAgEAJgFQAKgDAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAEgGAOQAAAFAFAAIAGAAQAEAAACACIABAIQAAAJgDAAIgJgBQgGAAgCAIQgCAFAAAOQAAAdAFARQADAIADAEQgBADgKAEQgKAGgEAAQgEAAgDgVg");
	this.shape_425.setTransform(1635.5,452.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAHAKAMAAQALAAAIgJIAGgJQADAAAAALQAAAQgKAJQgJAJgRAAQgUAAgLgRg");
	this.shape_426.setTransform(1627.7,453.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_427.setTransform(1618.4,453.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_428.setTransform(1603.4,453.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgXAiQgTgiAAg0QAAgEABgBIAFgBIAOAAQAHAAAAADIgBAQQAAAdAIARQAFAOAEAAQAFAAAGgQQAHgSAAgYIgBgRQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgBIAMAAQAFAAABACQACABAAAHQAAAwgVAhQgPAagIAAQgJAAgNgZg");
	this.shape_429.setTransform(1594.1,453.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAOgSQAOgQASAAQAQAAALAIQALAJgBAPQAAAWgcAJQgcALAAAHQAAAGAIAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_430.setTransform(1584.7,453.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_431.setTransform(1577.6,451.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AAOA9QgGgBAAgDQAJgZAAgkQAAgdgNAAQgUABAAAnQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgDgHABghQAAg3AEgNQAEgHAMgBIAIAAQABABABAAQABAAAAAAQABABAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAIgEQAIgEAGABQAbAAAAAvQgBAvgDANQgCAGgGABg");
	this.shape_432.setTransform(1570.3,453);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgfArQgLgPAAgXQAAgeAQgSQANgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgcALAAAHQAAAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_433.setTransform(1555.3,453.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAFAAAIQAAAJgGAGQgFAFgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_434.setTransform(1547.3,453.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgkBNQgEAAgBgfIAAgiIABguQABgqAFAAIASAAQAGAAAAAEIgCAMQgDAMAAAGQAAAGAEAAQADAAAEgCIAJgCQAOAAALALQAMAOAAAZQAAAfgSAWQgMAOgQAAgAgOgRQgDAHAAATQAAAZAFAIQADAFAGAAQALAAAGgMQAEgJAAgNQAAgTgHgKQgGgHgHAAQgJAAgDAGg");
	this.shape_435.setTransform(1538.5,451.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_436.setTransform(1528.5,453.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGACgHQACgGACAAIAGAOQAIANAQAAQAGAAAEgDQAGgDAAgHQAAgHgYgLQgYgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgFAHQgHAIgCAAIgHgHQgGgHgKAAQgMAAAAAIQAAAHAaAOQAaAMAAAVQgBARgMAKQgLAJgRAAQgPAAgLgIg");
	this.shape_437.setTransform(1519,453.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgJAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABAFADAAQACAAAHgFQAHgGAGAAQAHAAAEAFQAFAFAAAIQAAAJgGAGQgFAFgEAAIgDgGQgCgGgHAAQgQAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_438.setTransform(1505.7,453.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAPgSQAOgQATAAQAQAAAJAIQALAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_439.setTransform(1496.6,453.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMAEAAIAOAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAFAAAIQAAAJgGAGQgFAFgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_440.setTransform(1488.7,453.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgJAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABAFADAAQADAAAGgFQAJgGAEAAQAHAAAEAFQAFAFAAAIQAAAJgFAGQgFAFgFAAIgCgGQgDgGgHAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_441.setTransform(1480.3,453.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_442.setTransform(1471.2,453.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgEAAIgGgGQgEgHgJAAQgLAAgHAOQgGAMABANQAAAOAFAIQAIAKALAAQAMAAAHgJIAGgJQADAAAAALQAAAQgJAJQgKAJgQAAQgUAAgMgRg");
	this.shape_443.setTransform(1461.8,453.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_444.setTransform(1447.5,453.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAGAAIATAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_445.setTransform(1437.8,451.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_446.setTransform(1428.3,453.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgPAAgiIABgdQADgcAFAAIAQAAQAIAAAAADIgEAPQgEASgBAVQAAAlAQAAQATAAAAgoQAAgNgEgUIgDgTQAAgCAHAAIAQAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_447.setTransform(1418.7,453.4);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgFAAgVIAAg0QAAgbAGgGQADgDAYAAQAyAAAAAmQAAAUgPASQgPARgMAAQgBAAgHgHIgHgHQgBAAAAAHQABAMADARQAAACgGAAgAgMgfQgEAGgBAZQABANAIAAQAKAAAJgKQAJgIAAgMQAAgJgGgFQgGgGgIAAQgJAAgDAGg");
	this.shape_448.setTransform(1409.2,453.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgfArQgLgPAAgXQABgeAPgSQANgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALgBAHQAAAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQABARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_449.setTransform(1394.2,453.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgMAAAAAIQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_450.setTransform(1384.9,453.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AAOA9QgGgBAAgDQAJgZAAgkQAAgdgNAAQgHABgFAGQgIAKAAAXQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgCgHAAghQAAg3AFgNQACgHANgBIAJAAQABABABAAQAAAAABAAQAAABAAAAQABABAAAAIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAIgEAHABQAZAAAAAvQAAAvgDANQgCAGgGABg");
	this.shape_451.setTransform(1370,453);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_452.setTransform(1360.2,453.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgNAAAAgLg");
	this.shape_453.setTransform(1353.2,451.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgjBNQgEAAgCgfIAAgiIABguQABgqAFAAIASAAQAGAAAAAEIgCAMQgDAMAAAGQAAAGAEAAQADAAAEgCIAKgCQANAAALALQAMAOAAAZQAAAggSAVQgMAOgQAAgAgOgRQgDAHAAATQAAAZAFAIQADAFAGAAQALAAAGgMQAEgJAAgNQAAgTgHgKQgGgHgGAAQgKAAgDAGg");
	this.shape_454.setTransform(1346.2,451.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AArA9QgGgBAAgDQAGgWAAgfQAAgkgTgBQgGABgCADQgEAGAAATQAAAugBALQgBAHgFABIgPAAQgGgBAAgCQAHgmAAgSQAAgjgPAAQgSAAAAArQAAAWACAOIADAMQAAADgGAAIgOAAQgGAAgBgEQgDgIAAgkQAAg6ACgGQACgJASAAQAIAAAAADIgCAIQAAAEAEAAIAIgFQAHgDAKAAQAFAAAFADIAIAFQAFAAAGgEQAJgEAHAAQAWgBAHAZQAEANAAAbQAAAkgEAJQgCAEgGABg");
	this.shape_455.setTransform(1333.6,453);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgDQAAgHgFgEQgGgEgFAAQgLABgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAFAFAHAAQAHAAACgEQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgGAFg");
	this.shape_456.setTransform(1321.2,453.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AgMAzQgCgPAAgOIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgDAGABIAEAAQADAAABgFIACgKQABgEAKgFQAIgDAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAEgFAOQAAAFADAAIAHAAQAFAAABACIABAIQAAAJgEAAIgIgBQgHAAgCAIQgBAFAAAOQAAAdAGARQACAIACAEQAAADgLAEQgKAGgCAAQgFAAgCgVg");
	this.shape_457.setTransform(1313.3,452.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_458.setTransform(1300,453.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgPAAgiIABgdQADgcAFAAIAQAAQAIAAAAADIgEAPQgEASgBAVQAAAlAQAAQATAAAAgoQAAgNgEgUIgDgTQAAgCAHAAIAQAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_459.setTransform(1290.4,453.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AATA7QgGAAAAgCQAEgRAAgMQAAgHgCAAIgGAHQgHAHgCAAQgLAAgOgRQgQgSAAgUQAAgmAxAAQAZAAAEADQAFAFAAAcIAAA0QAAAUgCAGQgBADgFAAgAgNgfQgGAFAAAJQAAAMAJAIQAJAKAKAAQAJAAAAgNQAAgZgFgGQgDgGgJAAQgIAAgGAGg");
	this.shape_460.setTransform(1280.4,453.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AAOA9QgGgBAAgDQAJgZAAgkQAAgdgNAAQgUABAAAnQAAAVAFAeQAAADgFAAIgPAAQgGAAgBgFQgCgHAAghQAAg3AFgNQACgHANgBIAJAAQABABAAAAQABAAABAAQAAABAAAAQABABAAAAIgCAHQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAHgEQAIgEAHABQAZAAAAAvQAAAvgDANQgCAGgGABg");
	this.shape_461.setTransform(1271,453);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_462.setTransform(1261,453.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgDQAAgHgGgEQgFgEgFAAQgLABgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAHQgHAHAAAIQAAAHAGAEQAFAFAHAAQAHAAACgEQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHAAgHAFg");
	this.shape_463.setTransform(1251.2,453.1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgLAYQAFgGgBgIQAAgJgGgDQgIgCABgBIASgQIAGgDQAHAAAGAHQAEAGABAHQAAANgNAJQgJAHgKAAg");
	this.shape_464.setTransform(1717.7,432.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgmAaQgBgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgDgGAAQgKAAgEAHIgFAIQgFAAgDgEQgEgFAAgGQAAgKAKgGQAIgGANAAQAeAAAJAZQAFAMgBA5IABATQABAEghAAQgtAAAAghgAgHAIQgIAGAAAHQABAIAFAEQAGAFAGAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgFAAQgIgBgGAHg");
	this.shape_465.setTransform(1710.3,428.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMAEAAIAOAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAGAAAGQAAAJgGAHQgFAFgEAAIgDgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_466.setTransform(1702.3,428.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQABAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAGAAAGQAAAJgGAHQgFAFgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_467.setTransform(1694,428.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_468.setTransform(1684.9,428.2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgEABIgGAAgAgJg3QgEgDAAgFQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgFAAgEgDg");
	this.shape_469.setTransform(1677.9,426.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgNAzIgBgdIABghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGgBIADABQAEAAABgFIACgKQABgEAKgFQAIgDAFAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgFAOQAAAFADAAIAHgBQAHAAAAALQAAAJgEAAIgIgBQgGAAgCAIQgCAFAAANQAAAeAFARQADAIACAFQAAACgLAEQgKAGgDAAQgEAAgDgVg");
	this.shape_470.setTransform(1672.2,427.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgDgFAAQgLAAgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHgBgGAHg");
	this.shape_471.setTransform(1658.9,428.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgJBNQgEAAgCgfIAAgiIABguQACgqAEAAIAQAAQAIAAAAAEIgEATQgEAZAAAbQAAAxAIAbQgBACgHAAg");
	this.shape_472.setTransform(1652.3,426.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAGgEgBgGQABgHgYgLQgZgKABgUQAAgQALgJQAKgJAPAAQAPAAALAHQAIAGABAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgDACQgFACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgMAJgPAAQgQAAgKgIg");
	this.shape_473.setTransform(1639.9,428.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_474.setTransform(1630.4,428.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgDgFAAQgLAAgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAEQAGAFAGAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgFAAQgIgBgGAHg");
	this.shape_475.setTransform(1615.7,428.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAHAIQAHAKALAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_476.setTransform(1606.7,428.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgBgIgBguQAAgpACgJQABgEAGAAIAJAAQAIAAAAACIgBAMQgCAKABALQgBAtAIAdQAAAEgEABIgGAAgAgIg3QgEgDgBgFQABgGAEgDQADgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgFAAgDgDg");
	this.shape_477.setTransform(1600,426.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABAFADAAQACAAAHgFQAHgGAGAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_478.setTransform(1594.2,428.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgkBNQgDAAgBgfIgBgiIABguQABgqAFAAIARAAQAHAAAAAEIgCAMQgEAMAAAGQAAAGAFAAQADAAAEgCIAKgCQANAAAKALQANAOAAAZQAAAggSAVQgMAOgPAAgAgOgRQgDAHAAATQAAAZAGAIQACAFAGAAQAKAAAHgMQAEgKAAgMQAAgTgIgKQgFgHgGAAQgKAAgDAGg");
	this.shape_479.setTransform(1585.4,426.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgDgFAAQgLAAgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEALAAA6IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAEQAGAFAGAAQAIgBACgDQABgCAAgJIAAgIIAAgJQgCgEgFAAQgIgBgGAHg");
	this.shape_480.setTransform(1575.5,428.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgJBNQgDAAgBgFQgCgKAAgnIABgaIAAgKQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGAAQAFAAACgHIADgOQADgIAGgFQAHgFAHAAIALAAQAGABAAADIgCAMQgCAJgCAAIgFgCQgDAAgDAFQgCADAAAEQAAAEAEAAIAHAAQAHAAAAAKQAAAKgEAAIgIgCQgKAAAAATQAAAXAHAzQAAADgGAAg");
	this.shape_481.setTransform(1567.7,426.3);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_482.setTransform(1554.4,428.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGACgHQACgGACAAIAGAOQAJANAPAAQAGAAAEgDQAFgEAAgGQABgHgYgLQgZgKAAgUQAAgQAMgJQALgJAOAAQAPAAALAHQAJAGAAAEQAAADgFAHQgGAIgDAAIgHgHQgGgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_483.setTransform(1545.2,428.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQAOgQASAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_484.setTransform(1530.5,428.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_485.setTransform(1520.8,428.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AATA7QgGAAAAgDQAEgQAAgMQAAgHgCAAIgGAHQgHAHgCABQgLAAgOgSQgQgTAAgTQAAgmAyAAQAYAAAEAEQAFAEAAAbIAAA0QAAAWgCAFQgBADgFAAgAgNgfQgFAGAAAIQgBALAJAJQAJAJALAAQAHAAABgMQgBgYgEgIQgDgEgJAAQgHgBgHAGg");
	this.shape_486.setTransform(1510.8,428.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgDgFAAQgLAAgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHgBgGAHg");
	this.shape_487.setTransform(1496.4,428.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgJBNQgFAAgBgfIAAgiIABguQACgqAFAAIAQAAQAHAAAAAEIgEATQgDAZAAAbQgBAxAIAbQgBACgGAAg");
	this.shape_488.setTransform(1489.8,426.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_489.setTransform(1477.1,428.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgXA7QgGAAgBgEQgDgKAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABAFADAAQACAAAHgFQAHgGAGAAQAHAAAEAFQAFAGAAAGQAAAJgFAHQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAkAHASQgBADgGAAg");
	this.shape_490.setTransform(1469.2,428.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgkBNQgDAAgBgfIgBgiIABguQABgqAFAAIARAAQAHAAAAAEIgCAMQgDAMgBAGQABAGAEAAQADAAAEgCIAKgCQAOAAAKALQAMAOAAAZQAAAggSAVQgNAOgOAAgAgOgRQgDAHAAATQAAAZAGAIQACAFAGAAQAKAAAHgMQAEgKAAgMQAAgTgIgKQgFgHgHAAQgJAAgDAGg");
	this.shape_491.setTransform(1460.4,426.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgNAOgRAAQgQAAgNgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgEgJQgHgMgMAAQgLAAgGAMg");
	this.shape_492.setTransform(1450.4,428.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgbA0QgLgJgBgPQAAgGADgHQACgGACAAIAFAOQAJANAQAAQAGAAAEgDQAFgDAAgHQABgHgYgLQgYgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAIAGABAEQgBADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgDAAgEACQgFACAAAEQAAAHAZAOQAbAMAAAVQgBARgMAKQgLAJgRAAQgPAAgLgIg");
	this.shape_493.setTransform(1440.9,428.2);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAOgSQAOgQATAAQAQAAAKAIQALAJAAAPQgBAWgcAJQgdALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_494.setTransform(1426.2,428.2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgEAAgEgDg");
	this.shape_495.setTransform(1419.1,426.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQALAAAIAFQAIAGAAAIQAAAEgDAFQgDAGgFAAQAAAAgFgGQgEgHgIAAQgMAAgHAOQgGAMAAANQAAAOAHAIQAGAKAMAAQALAAAIgJQAEgFACgEQADAAAAALQAAAQgKAJQgKAJgQAAQgTAAgMgRg");
	this.shape_496.setTransform(1412.3,428.2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AAoBNIgNAAQgGAAgCgGQgBgIAAguIAAgdQAAgHgLAAIgHAAQgKAAABATQgBAXAIAzQAAADgHAAIgTAAQgCAAgBgFQgDgKAAgnIABgaIAAgKQgBgGgFAAIgHACQgCAAAAgFQAAgKADgDQABgCAGAAQAFAAADgHIACgOQADgIAHgFQAIgFAHAAQAiAAAAAGIgDALQgDAKgCAAIgGgCQgEgCgMAAQgCAAgCAFQgDADAAAEQAAAFAFAAIAngBQAHAAgBADIAAALIgBAVQgBAtAIAdQAAAEgEABIgGAAg");
	this.shape_497.setTransform(1402.2,426.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgXA7QgGAAgCgEQgCgKAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQABAFAEAAQACAAAGgFQAJgGAEAAQAHAAAFAFQAFAGAAAGQAAAJgGAHQgFAFgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_498.setTransform(1393.3,428.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_499.setTransform(1384.2,428.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgFAAgWIAAg0QAAgbAFgEQAEgEAYAAQAyAAAAAmQAAATgQATQgOASgMAAQgDgBgFgHIgHgHQgBAAAAAHQAAAMAEAQQgBADgGAAgAgMggQgFAIAAAYQAAAMAIAAQALAAAJgJQAIgJAAgLQAAgIgFgGQgHgGgHABQgKAAgCAEg");
	this.shape_500.setTransform(1375.2,428.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_501.setTransform(1365.2,428.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgbA0QgMgJABgPQgBgFADgIQACgGABAAIAGAOQAJANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQAAgQAMgJQAKgJAOAAQAQAAAKAHQAJAGAAAEQABADgGAHQgFAIgDAAIgHgHQgHgHgJAAQgEAAgEACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_502.setTransform(1355.5,428.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgCAAgEQAAgGgFgEQgGgDgFAAQgLAAgEAHIgFAIQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHgBgGAHg");
	this.shape_503.setTransform(1340.8,428.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAFAAIARAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_504.setTransform(1334.2,426.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgfArQgLgPABgXQgBgeAPgSQAOgQASAAQAQAAAKAIQALAJAAAPQAAAWgdAJQgbALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgNgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgKAAgGAJg");
	this.shape_505.setTransform(1321.6,428.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgNAzIgBgdIABghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGgBIADABQAEAAABgFIACgKQABgEAKgFQAIgDAFAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgFAOQAAAFADAAIAHgBQAHAAAAALQAAAJgEAAIgIgBQgGAAgCAIQgCAFAAANQAAAeAFARQADAIACAFQAAACgLAEQgKAGgDAAQgEAAgDgVg");
	this.shape_506.setTransform(1313.7,427.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AAOA9QgGAAAAgEQAJgZAAgjQAAgegNAAQgUAAAAAoQAAAVAFAeQAAACgFABIgPAAQgGgBgBgEQgCgHAAghQAAg2AFgOQACgIANAAIAIAAQAEABAAADIgBAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAHgDAHgBQAaABAAAvQAAAvgDAMQgCAHgGABg");
	this.shape_507.setTransform(1305.5,428);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_508.setTransform(1295.7,428.2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AAsA9QgIAAABgEQAGgWABgeQAAgmgUAAQgGAAgCAEQgEAGAAAUQAAAtgBALQgBAHgFABIgOAAQgHAAAAgCQAHgnAAgSQAAgigPgBQgSAAAAArQgBAWADANIACANQAAACgEABIgPAAQgGgBgBgDQgDgIAAgkQAAg5ACgHQACgJATAAQAHAAAAAEIgCAIQAAAAAAABQAAAAABABQAAAAABAAQABABABAAIAIgFQAHgDAKgBQAFABAFADIAIAFQAFAAAGgDQAJgGAIAAQAVAAAHAZQAEANAAAbQAAAlgEAIQgCAFgGAAg");
	this.shape_509.setTransform(1283.5,428);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgKBNQgDAAgBgfIgBgiIABguQABgqAGAAIAPAAQAIAAAAAEIgDATQgFAZAAAbQAAAxAHAbQAAACgHAAg");
	this.shape_510.setTransform(1273.8,426.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAGgCQADgCAAgEQAAgGgFgEQgGgDgFAAQgLAAgFAHIgEAIQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAEQAFAFAHAAQAHgBACgDQACgCAAgJIAAgIIgBgJQgBgEgGAAQgHgBgGAHg");
	this.shape_511.setTransform(1266.4,428.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AArA9QgHAAAAgEQAIgWgBgeQAAgmgTAAQgGAAgCAEQgEAGAAAUQAAAugBAKQgBAHgEABIgQAAQgGAAAAgCQAHgnAAgSQAAgigPgBQgTAAAAArQAAAWADANIADANQAAACgGABIgOAAQgGgBgBgDQgDgIAAgkQAAg5ACgHQADgJARAAQAIAAAAAEIgCAIQAAAAAAABQAAAAABABQAAAAABAAQABABAAAAIAJgFQAGgDALgBQAFABAFADIAIAFQAFAAAGgDQAJgGAHAAQAWAAAHAZQAEANAAAbQAAAlgEAIQgCAFgHAAg");
	this.shape_512.setTransform(1254.3,428);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgNALQgJAAAAgDQAAgDADgHQADgIAEgBIAaAAQAJABgBADQAAADgCAHQgDAJgFgBg");
	this.shape_513.setTransform(1749.3,403.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgJAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQABAGADABQACgBAHgGQAHgFAGAAQAHAAAEAFQAFAGAAAGQAAAKgFAGQgFAFgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_514.setTransform(1743.6,403.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_515.setTransform(1734.5,403.2);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AAOA8QgGABAAgDQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgIAAggQAAg3AFgNQACgIANABIAJAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAABIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAHgEQAHgDAHgBQAaAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_516.setTransform(1724.6,403);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgLAYQAEgGAAgIQAAgJgHgDQgHgCAAgBIACgCIACgBIAPgNIAGgDQAHAAAGAHQAFAGAAAHQAAANgNAJQgJAHgKAAg");
	this.shape_517.setTransform(1711.8,407.7);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgFgEQgGgEgFABQgLgBgFAJQgCAHgCAAQgEAAgEgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAFADAHAAQAHAAACgDQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_518.setTransform(1704.4,403.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAGAAIATAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgIAAgHAJg");
	this.shape_519.setTransform(1694.8,401.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgGgEQgFgEgFABQgLgBgFAJIgEAHQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAIQgHAGAAAHQAAAIAGAFQAFADAHAAQAHAAACgDQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgHAHg");
	this.shape_520.setTransform(1685.3,403.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AAOA2QAAgFgEAAIgJAGQgGAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_521.setTransform(1675.7,403.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AAZA/QgEgEgGAAQgDAAgNAEQgLAFgIAAQgLAAgHgGQgHgGAAgLQAAgNAKgHIAKgIIgGgKQgHgJAAgMQAAgRALgLQAKgKARAAIALACQAEAAAHgIQAGgJADAAQAEAAAGAHQAFAGAAADQAAACgIABQgJABAAAFIAFAJQAEAIAAAMQAAAOgJALQgKAMgTAAQgHAAgHAEQgHAEAAAEQAAAAAAABQAAAAAAABQAAABABAAQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQADAAAMgFQAOgEAJAAQAFAAAGADQAIADAAAEQAAAFgEAJQgFALgDAAQgCAAgDgFgAgMgeQgFAFAAAJQAAAIAFAFQAFAEAHAAQAHAAAFgEQAFgFAAgIQAAgJgFgFQgFgFgHAAQgHAAgFAFg");
	this.shape_522.setTransform(1665.8,402.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgIg3QgFgDAAgFQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgEAAgEgDg");
	this.shape_523.setTransform(1658.3,401.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgNAzQgCgQAAgNIABghIAAgJQgBgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGgBIADABQADAAACgFIACgKQAAgEAKgEQAKgEAEAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAFgGANQAAAFAEAAIAHgBQAFAAABAEIABAHQAAAKgEgBIgIgBQgHAAgCAIQgBAEAAAOQAAAeAFARQACAJADAEQAAABgLAGQgKAFgDAAQgEAAgDgVg");
	this.shape_524.setTransform(1652.7,402.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgJAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAGADABQACgBAHgGQAHgFAGAAQAHAAAEAFQAFAGAAAGQAAAKgFAGQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_525.setTransform(1645.4,403.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAANATQAKARAAAXQAAAdgPARQgMAOgSAAQgQAAgNgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgEgJQgHgMgMAAQgLAAgGAMg");
	this.shape_526.setTransform(1636.3,403.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AAsA8QgIABABgDQAGgYABgdQAAglgTAAQgHAAgCADQgEAGAAAUQAAAtgBAKQgBAJgFgBIgOAAQgHABAAgCQAHgnAAgRQAAgjgPAAQgTAAABAqQAAAWACANIADANQgBACgEAAIgPAAQgGAAgBgDQgDgJAAgjQAAg5ACgHQACgJATABQAHAAAAADIgCAIQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAIgDQAGgFALAAQAFAAAFAFIAIADQAGAAAFgCQAJgGAIAAQAVABAHAYQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_527.setTransform(1623.8,403);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgmAaQAAgQANgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgFgEQgGgEgGABQgKgBgEAJIgFAHQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAKAAA7IABATQAAAEggAAQguAAABghgAgIAIQgGAGgBAHQAAAIAGAFQAFADAHAAQAHAAACgDQACgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgHAHg");
	this.shape_528.setTransform(1611.4,403.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_529.setTransform(1596.7,403.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgJAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAGADABQACgBAHgGQAJgFAEAAQAHAAAEAFQAFAGAAAGQAAAKgFAGQgFAFgFAAIgCgGQgDgGgHAAQgPAAAAAiQAAAjAGATQgBADgFAAg");
	this.shape_530.setTransform(1588.3,403.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIABguQAAgoABgKQACgEAFAAIAJAAQAIAAAAACIgBAMQgBAKAAALQAAAtAGAdQAAAEgDABIgGAAgAgNg/QAAgGAEgDQAFgEAFAAQAFAAAEAEQAEADAAAGQAAALgNAAQgNAAgBgLg");
	this.shape_531.setTransform(1581.7,401.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgNAzQgCgQAAgNIACghIAAgJQgCgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGgBIADABQAEAAABgFIACgKQABgEAKgEQAIgEAFAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAFgFANQAAAFADAAIAHgBQAHAAAAALQAAAKgEgBIgIgBQgHAAgCAIQgBAEAAAOQAAAeAFARQADAJACAEQAAABgLAGQgKAFgDAAQgEAAgDgVg");
	this.shape_532.setTransform(1576,402.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_533.setTransform(1562.7,403.2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAGAAIATAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_534.setTransform(1553,401.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgFQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgEQgEgFAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAGADAGAAQAIAAACgDQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIAAgGAHg");
	this.shape_535.setTransform(1538.3,403.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgeArQgMgPABgXQgBgeAPgSQAOgQATAAQAPAAAKAIQAMAJgBAPQAAAWgcAJQgcALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_536.setTransform(1529,403.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AAOA8QgGABAAgDQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgDgIAAggQAAg3AGgNQACgIANABIAIAAQAFAAAAADIgCAGQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAIgEQAIgDAHgBQAZAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_537.setTransform(1519.4,403);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQABgpACgJQAAgEAGAAIAJAAQAIAAAAACIgBAMQgBAKgBALQAAAtAIAdQAAAEgEABIgGAAgAgMg/QAAgGADgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAALgOAAQgMAAAAgLg");
	this.shape_538.setTransform(1512,401.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AgKBNQgEAAgBgfIAAgiIABguQABgqAGAAIAQAAQAHAAAAAEIgEATQgDAZAAAbQAAAxAGAbQAAACgGAAg");
	this.shape_539.setTransform(1507.6,401.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgGgEQgFgEgFABQgLgBgFAJIgEAHQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgIAIQgHAGAAAHQAAAIAGAFQAFADAHAAQAHAAACgDQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgHAHg");
	this.shape_540.setTransform(1495,403.1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AAOA8QgGABAAgDQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgIAAggQAAg3AFgNQACgIANABIAJAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAABIgCAGQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAHgEQAIgDAHgBQAZAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_541.setTransform(1485.4,403);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_542.setTransform(1475.5,403.4);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgpA0IAAgQQAAgHAGAAQANAAAHgEQAGgCAAgDQgIgJgIgKQgQgUAAgfQAAgGABgBQABgBAFAAIAPAAQAGAAAAADIgBAOQAAAOAJAOQAHANAEAAQAFAAAEgNQADgLAAgMIgCgTQAAgDAHAAIAQAAQACABAAANQACAngZAgQgYAggeAAQgFAAAAgHg");
	this.shape_543.setTransform(1460.6,403.4);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAGAEABQACgBAGgGQAJgFAEAAQAHAAAFAFQAFAGAAAGQAAAKgGAGQgFAFgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_544.setTransform(1447.4,403.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_545.setTransform(1438.2,403.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAHAAIASAAQAIAAAABYQAABBgGAAgAgIgOQgKAMAAAVQAAALAFAJQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_546.setTransform(1428.2,401.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_547.setTransform(1418.7,403.2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgJAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQABAGADABQACgBAHgGQAJgFAEAAQAHAAAEAFQAFAGAAAGQAAAKgFAGQgFAFgFAAIgCgGQgDgGgHAAQgPAAAAAiQAAAjAGATQgBADgFAAg");
	this.shape_548.setTransform(1410.8,403.1);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgJAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAGADABQACgBAHgGQAHgFAGAAQAHAAAEAFQAFAGAAAGQAAAKgFAGQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_549.setTransform(1402.5,403.1);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAANATQAKARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgEgJQgHgMgMAAQgLAAgGAMg");
	this.shape_550.setTransform(1393.3,403.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQALAAAJAFQAHAGAAAIQAAAEgDAFQgDAGgEAAIgFgGQgFgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAIAKAKAAQANAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgKAJgPAAQgVAAgLgRg");
	this.shape_551.setTransform(1384,403.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgJBNQgEAAgCgfIAAgiIABguQACgqAEAAIAQAAQAIAAAAAEIgEATQgEAZAAAbQABAxAGAbQAAACgHAAg");
	this.shape_552.setTransform(1372.4,401.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgcAJQgcALAAAHQAAAGAIAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_553.setTransform(1365,403.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgmAaQAAgQANgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgFgEQgGgEgGABQgKgBgEAJIgFAHQgFAAgDgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAFAMgBA5IABATQABAEghAAQgtAAAAghgAgIAIQgGAGgBAHQAAAIAGAFQAFADAHAAQAHAAACgDQACgDAAgHIAAgIIAAgJQgCgGgFAAQgHAAgIAHg");
	this.shape_554.setTransform(1350.4,403.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAGAEABQACgBAGgGQAJgFAEAAQAHAAAFAFQAFAGAAAGQAAAKgGAGQgFAFgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAjAGATQAAADgGAAg");
	this.shape_555.setTransform(1342.4,403.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgBAAgFQAAgGgFgEQgGgEgFABQgLgBgEAJIgFAHQgEAAgEgEQgEgFAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAGAAAHQAAAIAFAFQAFADAHAAQAHAAACgDQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHAAgGAHg");
	this.shape_556.setTransform(1333.3,403.1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgVIAAg0QAAgbAFgEQAEgEAYAAQAyAAAAAmQAAAUgQASQgOASgMAAQgCAAgGgIIgHgHQgBAAAAAHQAAAMAEAQQgBADgGAAgAgMggQgFAIAAAYQAAAMAIAAQALAAAJgJQAJgJgBgLQAAgJgFgFQgHgGgIABQgJAAgCAEg");
	this.shape_557.setTransform(1324.4,403.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AAOA8QgGABAAgDQAJgaAAgjQAAgdgNAAQgUAAAAAmQAAAXAFAdQAAACgFAAIgPAAQgGAAgBgEQgCgIAAggQAAg3AFgNQACgIANABIAJAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAABIgCAGQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAHgEQAHgDAHgBQAaAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_558.setTransform(1309.1,403);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_559.setTransform(1299.3,403.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgJAAgoIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQABAGADABQACgBAHgGQAHgFAGAAQAHAAAEAFQAFAGAAAGQAAAKgFAGQgFAFgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAjAHATQgBADgGAAg");
	this.shape_560.setTransform(1290.9,403.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AAOA2QAAgFgEAAIgJAGQgGAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_561.setTransform(1281.7,403.4);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgNAzIgCgdIABghIAAgJQgBgGgFAAIgHACQgCAAAAgFQAAgKADgDQACgCAGgBIADABQADAAACgFIACgKQABgEAJgEQAKgEAEAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAFgGANQAAAFAEAAIAHgBQAEAAACAEIABAHQAAAKgEgBIgIgBQgHAAgCAIQgBAEAAAOQAAAeAFARQACAJADAEQAAABgLAGQgKAFgDAAQgFAAgCgVg");
	this.shape_562.setTransform(1273.4,402.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AAOA8QgGABAAgDQAJgaAAgjQAAgdgOAAQgGgBgFAHQgJALAAAVQABAXAFAdQAAACgFAAIgPAAQgGAAgCgEQgCgIAAggQAAg3AGgNQACgIANABIAJAAQABAAAAAAQABAAABABQAAAAAAAAQAAABAAABIgBAGQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAIgEQAHgDAIgBQAZAAAAAxQAAAtgDANQgCAIgHgBg");
	this.shape_563.setTransform(1265.2,403);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAIAHAAIABACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_564.setTransform(1257.8,401.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAHAIQAHAKALAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_565.setTransform(1250.9,403.2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAKgaAAgkQAAgcgOAAQgUgBAAAnQAAAXAFAdQAAADgEgBIgQAAQgGABgBgFQgCgHgBghQAAg2AGgOQACgHANAAQANAAAAACIgCAHQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIAHgDQAIgEAGAAQAaAAAAAxQABAtgEANQgCAIgGgBg");
	this.shape_566.setTransform(1746.5,378);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AAOA2QAAgFgEAAIgJAGQgGAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_567.setTransform(1736.5,378.4);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgLAYQAFgGAAgIQgBgJgGgDQgIgCABgBIASgQIAGgDQAHAAAFAHQAGAGAAAHQgBANgMAJQgJAHgKAAg");
	this.shape_568.setTransform(1723.7,382.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgFADgIQACgGABAAIAHAOQAIANAQAAQAFAAAFgDQAFgDAAgHQAAgHgXgLQgZgKABgUQgBgQALgJQALgJAOAAQAPAAAMAHQAJAGAAAEQgBADgFAHQgFAIgEAAIgHgHQgFgHgKAAQgMAAAAAIQAAAHAZAOQAaAMAAAVQAAARgMAKQgMAJgPAAQgQAAgKgIg");
	this.shape_569.setTransform(1716.5,378.2);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAPgSQAOgQASAAQAQAAAKAIQAKAJAAAPQAAAWgcAJQgcALAAAHQAAAGAHAEQAHAEAHAAQASAAAJgLQAEgGACgFQACAAAAAKQAAARgLAKQgLAJgQAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEAEAAQAhgHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_570.setTransform(1707,378.2);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgUgBAAAnQAAAXAFAdQAAADgFgBIgPAAQgGABgBgFQgCgHAAghQAAg2AFgOQACgHANAAIAJAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAIgCAHQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAHgEAHAAQAaAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_571.setTransform(1697.4,378);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQABAHADAAQACAAAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAkAHASQgBADgGAAg");
	this.shape_572.setTransform(1688.5,378.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAKAAA7IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAJQAAAHAFAFQAGADAGAAQAIABACgEQABgDAAgHIAAgIIAAgJQgCgGgFAAQgIABgGAGg");
	this.shape_573.setTransform(1679.5,378.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgHAAgFAGQgIALAAAVQAAAXAFAdQAAADgFgBIgPAAQgGABgBgFQgCgHAAghQAAg2AEgOQAEgHALAAIAJAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAHAAQAbAAAAAxQgBAtgDANQgCAIgGgBg");
	this.shape_574.setTransform(1664.8,378);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_575.setTransform(1654.8,378.4);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQAOgQASAAQAQAAAKAIQALAJAAAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAIAAQARAAAJgLQADgGACgFQAEAAAAAKQAAARgMAKQgKAJgSAAQgWAAgLgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_576.setTransform(1639.7,378.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgMAzQgDgQAAgNIACghIAAgKQgBgFgGAAIgHACQgCAAAAgGQAAgJADgDQACgDAGAAIADABQAGAAABgPQABgFAKgDQAIgEAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAFgFANQgBAFAEAAIAHgBQAFABABADIABAHQAAAKgEAAIgIgCQgHAAgCAIQgBAEAAAPQAAAdAFARQADAJACADQAAADgLAFQgJAFgEAAQgEAAgCgVg");
	this.shape_577.setTransform(1631.8,377.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgUgBAAAnQAAAXAFAdQAAADgFgBIgPAAQgGABgBgFQgCgHAAghQAAg2AEgOQADgHANAAIAJAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAIAAQAaAAAAAxQgBAtgDANQgCAIgHgBg");
	this.shape_578.setTransform(1623.6,378);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAJQAAAHAFAFQAFADAHAAQAIABACgEQABgDAAgHIAAgIIAAgJQgCgGgGAAQgHABgGAGg");
	this.shape_579.setTransform(1613.8,378.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_580.setTransform(1606.9,376.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAHAAIASAAQAJAAgBBYQABBBgHAAgAgIgOQgJAMAAAVQAAAMAEAIQAFALAKAAQAMAAADgPQABgFAAgUQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_581.setTransform(1599.4,376.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgfArQgLgPAAgXQABgeAPgSQANgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALgBAHQAAAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQABARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_582.setTransform(1589.9,378.2);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AArA8QgGAAAAgCQAGgYAAgeQAAglgTABQgGgBgCAEQgEAGAAATQAAAugBAKQgBAJgFgBIgPAAQgGAAAAgCQAHgmAAgRQAAgkgPABQgTAAAAAqQAAAWADAOIADAMQAAADgGgBIgOAAQgGABgBgEQgDgIAAgkQAAg5ACgHQACgIASAAQAIAAAAACIgCAIQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIAJgDQAHgEAKgBQAFABAFAEIAIADQAFAAAGgDQAJgEAHgBQAWAAAHAZQAEANAAAcQAAAjgEAKQgCADgGAAg");
	this.shape_583.setTransform(1577.7,378);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAANATQAKARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgEgJQgHgMgMAAQgLAAgGAMg");
	this.shape_584.setTransform(1560,378.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgVIAAgzQAAgcAFgFQAEgDAZAAQAxAAAAAmQAAATgQATQgOARgLAAQgCABgHgJIgGgGQgCAAAAAGQAAANAEAQQAAADgGAAgAgMgfQgFAGAAAZQAAANAJAAQAKAAAJgKQAJgIAAgMQAAgJgGgFQgGgFgIgBQgJAAgDAGg");
	this.shape_585.setTransform(1550.6,378.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABAHADAAQACAAAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_586.setTransform(1542.2,378.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgfArQgLgPABgXQgBgeAPgSQAOgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgNgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_587.setTransform(1533.1,378.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_588.setTransform(1523.5,378.4);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAHAIQAHAKALAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_589.setTransform(1514,378.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAFAAIARAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_590.setTransform(1502.4,376.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgGgBQgKAAgFAJIgEAHQgFAAgDgFQgEgEAAgGQAAgKAKgGQAIgGANAAQAeAAAJAZQAEAMAAA5IABATQABAEghAAQgtAAgBghgAgHAIQgIAFAAAJQABAHAFAFQAGADAGAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgFAAQgIABgGAGg");
	this.shape_591.setTransform(1495.1,378.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_592.setTransform(1480.4,378.2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAHAAIASAAQAIAAAABYQAABBgGAAgAgIgOQgJAMAAAVQAAAMAEAIQAFALAKAAQAMAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_593.setTransform(1470.4,376.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_594.setTransform(1463.3,376.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgUgBAAAnQAAAXAFAdQAAADgEgBIgQAAQgGABgBgFQgDgHABghQAAg2AEgOQAEgHAMAAIAIAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIAHgDQAIgEAGAAQAaAAAAAxQAAAtgDANQgCAIgGgBg");
	this.shape_595.setTransform(1456,378);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AAOA2QAAgFgEAAIgJAGQgGAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_596.setTransform(1446,378.4);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgnAaQAAgQAOgLQAMgLAQgDIAGgCQADgBAAgEQAAgHgFgEQgGgDgFgBQgLAAgEAJIgFAHQgEAAgEgFQgEgEAAgGQAAgKAJgGQAJgGANAAQAeAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAIQgHAFAAAJQAAAHAFAFQAFADAHAAQAHABACgEQACgDAAgHIAAgIIgBgJQgBgGgGAAQgHABgGAGg");
	this.shape_597.setTransform(1431,378.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAHADAAQACAAAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAkAHASQgBADgGAAg");
	this.shape_598.setTransform(1423,378.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgMAzQgCgQAAgNIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgDAFAAIAEABQADAAACgFIACgKQABgFAKgDQAIgEAFAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAFgFANQgBAFAEAAIAHgBQAFABABADIABAHQAAAKgEAAIgIgCQgGAAgDAIQgBAEAAAPQAAAdAFARQACAJADADQAAADgLAFQgKAFgDAAQgEAAgCgVg");
	this.shape_599.setTransform(1415.5,377.1);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgUgBAAAnQAAAXAFAdQAAADgFgBIgPAAQgGABgBgFQgCgHAAghQAAg2AEgOQADgHANAAIAJAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAIAAQAaAAAAAxQgBAtgDANQgCAIgGgBg");
	this.shape_600.setTransform(1407.3,378);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgeArQgLgPAAgXQAAgeAOgSQAOgQASAAQAQAAALAIQALAJgBAPQAAAWgcAJQgcALAAAHQAAAGAIAEQAGAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_601.setTransform(1397.5,378.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQACgcAFAAIARAAQAHAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_602.setTransform(1387.8,378.4);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAPgVAXAAQAMAAAHAFQAIAGAAAIQAAAEgDAFQgDAGgEAAIgGgGQgEgHgIAAQgMAAgHAOQgFAMgBANQAAAOAHAIQAGAKAMAAQAMAAAHgJIAHgJQACAAAAALQAAAQgJAJQgKAJgRAAQgUAAgLgRg");
	this.shape_603.setTransform(1378.3,378.2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AAOA8QgGAAAAgCQAJgaAAgkQAAgcgNAAQgUgBAAAnQAAAXAFAdQAAADgFgBIgPAAQgGABgBgFQgDgHAAghQAAg2AGgOQACgHANAAQANAAAAACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgEAGAAQAaAAAAAxQABAtgEANQgCAIgGgBg");
	this.shape_604.setTransform(1369.1,378);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgfArQgKgPgBgXQAAgeAQgSQAOgQASAAQAQAAAKAIQALAJAAAPQAAAWgeAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQAEAAAAAKQAAARgMAKQgKAJgSAAQgVAAgNgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_605.setTransform(1359.3,378.2);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAPgSQAOgQATAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgWAAgLgRgAgLgdQgGAIAAAJQAAABAAABQAAABABAAQAAABABAAQAAAAABAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_606.setTransform(1344.6,378.2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANARAAQAFAAAFgDQAEgDAAgHQAAgHgWgLQgZgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgFgHgKAAQgNAAAAAIQAAAHAZAOQAaAMAAAVQABARgMAKQgMAJgQAAQgQAAgKgIg");
	this.shape_607.setTransform(1335.3,378.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_608.setTransform(1320.6,378.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AAOA2QAAgFgEAAIgJAGQgGAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_609.setTransform(1311,378.4);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AATA7QgFAAAAgDQADgQAAgNQAAgGgBAAIgHAGQgGAJgDgBQgLAAgPgRQgPgTAAgTQAAgmAxAAQAZAAAEADQAFAFAAAcIAAAzQAAAVgCAGQgBADgFAAgAgMgfQgHAFAAAJQABAMAIAIQAJAKAKAAQAJAAAAgNQAAgZgEgGQgEgGgJAAQgHABgGAFg");
	this.shape_610.setTransform(1301,378.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_611.setTransform(1286.4,378.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAHAEAAQACAAAGgHQAJgFAEAAQAHAAAFAFQAFAFAAAIQAAAIgGAGQgFAGgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_612.setTransform(1278.1,378.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQABAHADAAQACAAAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAkAHASQgBADgGAAg");
	this.shape_613.setTransform(1269.8,378.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AgfArQgKgPgBgXQAAgeAQgSQANgQATAAQAQAAAKAIQALAJAAAPQAAAWgeAJQgcALAAAHQABAGAHAEQAHAEAHAAQASAAAJgLQADgGACgFQADAAABAKQAAARgMAKQgKAJgSAAQgVAAgNgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_614.setTransform(1260.7,378.2);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AggA7QgGAAgBgDQgCgFAAgWIAAgzQAAgcAFgFQAEgDAYAAQAyAAAAAmQAAATgQATQgOARgMAAQgBABgHgJIgGgGQgCAAAAAGQAAANAEAQQAAADgGAAgAgMgfQgFAGAAAZQAAANAJAAQAKAAAKgKQAIgIAAgMQAAgJgGgFQgGgFgIgBQgJAAgDAGg");
	this.shape_615.setTransform(1251.7,378.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgdgNAAQgUAAAAAnQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgCgIAAggQAAg3AEgNQADgHANgBIAJAAQAAABABAAQABAAAAAAQABABAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAIABQAagBAAAwQgBAugDAOQgCAGgGAAg");
	this.shape_616.setTransform(1751.5,353);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_617.setTransform(1741.5,353.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgdgOAAQgGABgFAGQgIALAAAVQAAAWAFAeQAAACgFAAIgPAAQgGABgCgFQgCgIAAggQAAg3AGgNQADgHALgBIAJAAQAFABAAACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAHgEAIABQAZgBAAAwQAAAugDAOQgCAGgHAAg");
	this.shape_618.setTransform(1726.4,353);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_619.setTransform(1716.5,353.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAHAIQAHAKALAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgTAAgMgRg");
	this.shape_620.setTransform(1707.1,353.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_621.setTransform(1692.7,353.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgNAzIgCgdIABghIAAgKQgBgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAGAAIADAAQAEAAABgFIACgKQAAgFAKgEQAJgDAFAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAFgGANQABAFADAAIAHAAQAEAAACACIABAIQAAAKgEAAIgIgCQgGAAgCAIQgCAEAAAPQAAAdAFARQACAJADADQAAACgLAFQgKAGgDAAQgFAAgCgVg");
	this.shape_622.setTransform(1684.5,352.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgdgNAAQgHABgFAGQgIALAAAVQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgCgIAAggQAAg3AFgNQACgHANgBIAJAAQAEABAAACIgCAHQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAIgEAHABQAZgBAAAwQAAAugDAOQgCAGgGAAg");
	this.shape_623.setTransform(1676.3,353);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_624.setTransform(1666.3,353.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgWBGIABgOQACgJAEAAIADADIAEACQAEgBABgEQADgHAAgTIgCgfIgCgaQAAgCAHAAIAOAAQAGAAAABFQAAAvgdAAQgQAAAAgIgAgCg4QgEgDAAgFQAAgGAEgDQADgEAGAAQAGAAAEAEQAEACAAAHQAAALgOAAQgGAAgDgDg");
	this.shape_625.setTransform(1658.2,351.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQABAHADgBQACABAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgDgGQgCgGgHAAQgQAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_626.setTransform(1647.2,353.1);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgfArQgKgPgBgXQABgeAPgSQANgQATAAQAPAAAKAIQAMAJAAAPQgBAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQAEAAAAAKQAAARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_627.setTransform(1638.2,353.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMAEAAIAOAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAHAEgBQACABAGgHQAJgFAEAAQAHAAAFAFQAFAFAAAIQAAAIgGAGQgFAGgEAAIgDgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_628.setTransform(1630.2,353.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAHAEgBQACABAGgHQAJgFAEAAQAHAAAFAFQAFAFAAAIQAAAIgGAGQgFAGgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_629.setTransform(1621.9,353.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_630.setTransform(1612.8,353.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAFgDAEQgDAGgFAAIgEgGQgFgHgJAAQgLAAgHAOQgGAMABANQAAAOAFAIQAIAKALAAQALAAAIgJIAGgJQADAAAAALQAAAQgKAJQgJAJgQAAQgVAAgLgRg");
	this.shape_631.setTransform(1603.4,353.2);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgdgOAAQgGABgFAGQgIALAAAVQAAAWAFAeQAAACgFAAIgPAAQgGABgCgFQgBgIgBggQAAg3AFgNQAEgHALgBIAJAAQAFABAAACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgEAGABQAagBAAAwQABAugEAOQgCAGgGAAg");
	this.shape_632.setTransform(1588.9,353);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgfArQgLgPAAgXQAAgeAQgSQANgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgcALABAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgEgEgGAAQgJAAgHAJg");
	this.shape_633.setTransform(1579.1,353.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_634.setTransform(1564.4,353.2);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgNAzQgBgPAAgOIABghIAAgKQgCgFgFAAIgHACQgCAAAAgGQAAgJADgDQACgCAGAAIAEAAQADAAABgFIADgKQAAgFAKgEQAIgDAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQAAAFgGANQAAAFAEAAIAHAAQAEAAACACIABAIQAAAKgDAAIgJgCQgGAAgCAIQgCAEAAAPQAAAdAFARQADAJADADQAAACgMAFQgJAGgDAAQgFAAgDgVg");
	this.shape_635.setTransform(1556.5,352.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AgaA0QgNgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAFgDQAEgDAAgHQAAgHgWgLQgZgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgFAIgEAAIgGgHQgFgHgKAAQgNAAAAAIQAAAHAZAOQAaAMAAAVQAAARgLAKQgMAJgQAAQgQAAgKgIg");
	this.shape_636.setTransform(1548.6,353.2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMIgBAVQAAAtAHAdQAAAEgDABIgHAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_637.setTransform(1541.6,351.3);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQAAgGADgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKAAgUQAAgQALgJQAKgJAPAAQAPAAALAHQAJAGAAAEQAAADgGAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAZAOQAbAMAAAVQAAARgNAKQgLAJgRAAQgPAAgLgIg");
	this.shape_638.setTransform(1534.5,353.2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgdgNAAQgUAAAAAnQAAAWAFAeQAAACgEAAIgQAAQgGABgBgFQgDgIABggQAAg3AEgNQAEgHAMgBIAIAAQAEABABACIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHgDQAIgEAGABQAagBAAAwQAAAugDAOQgCAGgGAAg");
	this.shape_639.setTransform(1524.9,353);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_640.setTransform(1515,353.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAPgVAXAAQAMAAAHAFQAIAGAAAIQAAAEgDAFQgDAGgEAAQgBAAgFgGQgEgHgIAAQgMAAgHAOQgGAMAAANQAAAOAHAIQAGAKAMAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgUAAgLgRg");
	this.shape_641.setTransform(1505.7,353.2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgeArQgMgPAAgXQAAgeAQgSQAOgQASAAQAPAAALAIQAKAJABAPQAAAWgdAJQgdALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAABAKQAAARgMAKQgLAJgRAAQgVAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_642.setTransform(1491.3,353.2);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AAOA2QgBgFgEAAIgJAGQgFAEgHAAQgNAAgHgLQgJgPAAgiIACgdQADgcAEAAIARAAQAHAAAAADIgEAPQgEASAAAVQAAAlAPAAQATAAAAgoQAAgNgDgUIgEgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgKAAAAgFg");
	this.shape_643.setTransform(1481.7,353.4);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AATA7QgGAAAAgCQAEgRAAgNQAAgGgBAAIgHAGQgHAIgCAAQgLAAgOgRQgQgTAAgTQAAgmAyAAQAYAAAEADQAFAGAAAbIAAA0QAAAUgCAGQgBADgFAAgAgNgfQgFAGAAAIQgBALAJAJQAJAKALAAQAHAAABgNQgBgZgEgGQgDgGgIAAQgJABgGAFg");
	this.shape_644.setTransform(1471.7,353.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AgfArQgKgOAAgYQAAgeAPgSQANgQATAAQAQAAAKAIQAKAJAAAPQAAAWgdAJQgcALAAAHQAAAGAIAEQAHAEAHAAQASAAAIgLQAEgGACgFQADAAAAAKQAAARgLAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_645.setTransform(1457.2,353.2);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AgNAzQgCgPAAgOIACghIAAgKQgBgFgFAAIgHACQgDAAAAgGQAAgJADgDQACgCAGAAIADAAQAEAAACgFIACgKQAAgFAKgEQAIgDAFAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAFgFANQAAAFAEAAIAGAAQAFAAABACIABAIQAAAKgDAAIgJgCQgGAAgDAIQAAAEAAAPQAAAdAEARQADAJACADQABACgLAFQgLAGgDAAQgEAAgDgVg");
	this.shape_646.setTransform(1449.3,352.1);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AgXA7QgGAAgCgFQgCgJAAgoIAAgwQAAgMADAAIAPAAIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAHAEgBQACABAGgHQAJgFAEAAQAHAAAFAFQAFAFAAAIQAAAIgGAGQgFAGgFAAIgCgGQgCgGgIAAQgPAAAAAiQAAAkAGASQAAADgGAAg");
	this.shape_647.setTransform(1442,353.1);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXALgRQAMgTAVAAQAWAAAMATQALARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAGgMQAFgJAAgNQAAgNgFgJQgGgMgMAAQgLAAgGAMg");
	this.shape_648.setTransform(1432.9,353.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AghA7QgFAAgBgDQgCgGAAgUIAAg0QAAgbAFgGQAEgDAYAAQAyAAAAAmQAAATgQATQgOARgMAAQgBAAgHgIIgGgGQgCAAAAAGQAAANAEARQgBACgFAAgAgMgfQgFAGAAAZQAAANAIAAQALAAAJgKQAIgJAAgLQAAgIgFgGQgHgFgIgBQgIAAgDAGg");
	this.shape_649.setTransform(1423.6,353.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AgfArQgKgPgBgXQABgeAPgSQANgQATAAQAQAAAJAIQAMAJAAAPQAAAWgeAJQgcALAAAHQABAGAHAEQAHAEAHAAQASAAAIgLQAEgGACgFQAEAAAAAKQAAARgMAKQgLAJgRAAQgWAAgMgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgGgFgEQgFgEgFAAQgJAAgHAJg");
	this.shape_650.setTransform(1413.7,353.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AgEBNQgQAAgKgOQgMgOAAgaQAAgcAQgTQANgQANAAQAEAAAHAEQAEAAAAgJQAAgIgCgJIgDgLQAAgDAHAAIASAAQAIAAAABYQAABBgGAAgAgIgOQgJAMAAAVQAAAMAEAIQAFALAJAAQANAAADgPQABgGAAgTQAAgVgDgHQgCgFgGAAQgHAAgIAJg");
	this.shape_651.setTransform(1404,351.3);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgdgNAAQgUAAAAAnQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgCgIAAggQAAg3AFgNQACgHANgBIAJAAQABABAAAAQABAAABAAQAAABAAAAQABABAAAAIgCAHQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAHgDQAIgEAHABQAZgBAAAwQAAAugDAOQgCAGgGAAg");
	this.shape_652.setTransform(1389.1,353);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AANA2QAAgFgEAAIgJAGQgGAEgGAAQgOAAgGgLQgJgOAAgjIACgdQACgcAFAAIAQAAQAIAAAAADIgEAPQgFASAAAVQAAAlAQAAQASAAAAgoQAAgNgDgUIgDgTQAAgCAGAAIARAAQAIAAAAA3QAAAtgEAKQgDAHgLAAQgLAAAAgFg");
	this.shape_653.setTransform(1379.2,353.4);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AgbA0QgLgJAAgPQAAgGACgHQACgGABAAIAHAOQAIANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgZgKAAgUQAAgQALgJQALgJAOAAQAPAAALAHQAKAGgBAEQAAADgFAHQgGAIgDAAIgGgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAaAOQAZAMAAAVQAAARgMAKQgLAJgQAAQgQAAgLgIg");
	this.shape_654.setTransform(1364.3,353.2);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AgfArQgLgPABgXQgBgeAPgSQAOgQATAAQAPAAAKAIQALAJAAAPQAAAWgdAJQgbALAAAHQgBAGAJAEQAGAEAHAAQASAAAIgLQAEgGACgFQAEAAgBAKQAAARgLAKQgLAJgRAAQgVAAgNgRgAgLgdQgGAIAAAJQAAAEADAAQAigHAAgJQAAgHgFgDQgEgEgGAAQgJAAgHAJg");
	this.shape_655.setTransform(1354.8,353.2);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AgbA0QgMgJAAgPQABgGACgHQACgGACAAIAFAOQAKANAPAAQAFAAAFgDQAFgEABgGQgBgHgXgLQgZgKAAgUQAAgQAMgJQALgJAOAAQAPAAAKAHQAJAGAAAEQAAADgFAHQgFAIgDAAIgHgHQgGgHgKAAQgEAAgEACQgEACAAAEQAAAHAaAOQAaAMAAAVQAAARgNAKQgMAJgQAAQgPAAgLgIg");
	this.shape_656.setTransform(1340.3,353.2);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgbA0QgLgJAAgPQAAgGACgHQACgGABAAIAGAOQAJANAQAAQAGAAAEgDQAFgDAAgHQAAgHgXgLQgYgKgBgUQAAgQAMgJQALgJANAAQAPAAALAHQAKAGgBAEQAAADgFAHQgFAIgEAAIgGgHQgHgHgJAAQgEAAgEACQgEACAAAEQAAAHAZAOQAaAMAAAVQAAARgMAKQgMAJgPAAQgQAAgLgIg");
	this.shape_657.setTransform(1331,353.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AgdAuQgPgRAAgdQAAgXAKgRQANgTAVAAQAWAAANATQAKARAAAXQAAAdgPARQgMAOgSAAQgRAAgMgOgAgRgaQgFAJAAANQAAANAFAJQAGAMALAAQAMAAAHgMQAEgJAAgNQAAgNgEgJQgHgMgMAAQgLAAgGAMg");
	this.shape_658.setTransform(1321.5,353.2);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AgXA7QgGAAgBgFQgDgIAAgpIAAgwQAAgMAEAAIAPAAIAEAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABAHADgBQACABAHgHQAHgFAGAAQAHAAAEAFQAFAFAAAIQAAAIgFAGQgFAGgFAAIgCgGQgDgGgHAAQgQAAAAAiQAAAkAHASQgBADgGAAg");
	this.shape_659.setTransform(1313.1,353.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQALAAAJAFQAHAGAAAIQAAAEgDAFQgDAGgEAAQgCAAgEgGQgEgHgIAAQgMAAgHAOQgGAMAAANQAAAOAHAIQAGAKAMAAQALAAAIgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgQAAQgVAAgLgRg");
	this.shape_660.setTransform(1304.4,353.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AAGBNIgLAAQgHAAgBgGQgCgIAAguQAAgoADgKQABgEAFAAIAJAAQAIAAAAACIgBAMQgCAKAAALQAAAtAIAdQAAAEgEABIgGAAgAgNg/QAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEADQgEADgGAAQgNAAAAgLg");
	this.shape_661.setTransform(1297.7,351.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AAOA8QgGAAAAgDQAJgZAAgkQAAgdgNAAQgUAAAAAnQAAAWAFAeQAAACgFAAIgPAAQgGABgBgFQgDgIABggQAAg3AEgNQAEgHALgBIAJAAQABABABAAQABAAAAAAQABABAAAAQAAABAAAAIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIAIgDQAIgEAGABQAagBAAAwQAAAugDAOQgCAGgGAAg");
	this.shape_662.setTransform(1290.4,353);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AgnAaQAAgQAOgMQAMgKAQgDIAHgCQACgBAAgEQAAgHgFgEQgGgDgFgBQgLABgEAHIgFAIQgEAAgEgFQgEgEAAgGQAAgKAKgGQAJgGANAAQAdAAAJAZQAEAMAAA5IACATQAAAEghAAQguAAAAghgAgHAHQgHAHAAAIQAAAHAFAEQAGAEAGABQAIAAACgEQABgDAAgHIAAgJIAAgJQgCgEgGAAQgHAAgGAFg");
	this.shape_663.setTransform(1280.6,353.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AgcArQgKgPAAgWQAAgZAMgTQAOgVAYAAQAMAAAIAFQAHAGAAAIQAAAEgDAFQgDAGgFAAIgFgGQgEgHgJAAQgLAAgHAOQgGAMAAANQAAAOAGAIQAHAKAMAAQAMAAAHgJQAEgFACgEQADAAAAALQAAAQgKAJQgJAJgRAAQgUAAgLgRg");
	this.shape_664.setTransform(1271.5,353.2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AgJBNQgEAAgBgfIgBgiIABguQABgqAFAAIARAAQAHAAAAAEIgEATQgEAZAAAbQAAAxAHAbQAAACgGAAg");
	this.shape_665.setTransform(1260,351.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AgvBDIgBgjQAAgUAGgpQAGgtAEAAIBGAAQAIAAAAADQgMAbgCAAIgIgEQgHgFgLAAQgJAAgHAGQgJAHABAMQAAAKAFAAIANgEQAMgEAIAAQAIAAAAADQgKAdgCAAQgJgEgHAAQgHAAgHAGQgHAHgBAMQAAALAHAHQAFAHALAAQAKAAALgGIALgGQADAAAMAgQABADgIAAIhRAAIgBAAQgFAAgBgIg");
	this.shape_666.setTransform(1252.4,351.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AgcDeQgMgMAAgRQAAgLAHgKQANgTATAAQAPAAAMANQANANAAAQQAAANgJALQgNAQgRAAQgPAAgNgNgAgVCOQgHgCgFgEQgFgFAAgHQABgyAQgkQAQgmAbgiQApg3AAgkQAAgQgHgKQgIgKgMgEQgMgFgPAAQgLAAgNAEQgNADgLAHQgLAHgGAJQgHAIAAAMQAAAMAIANQACADAAADQAAAIgIAIQgIAHgMAGQgLAFgKAAQgJAAgFgGQgWglAAggQAAgYAMgVQANgTAVgNQAWgOAZgGQAagHAaAAQAaAAAXAGQAWAGAUANQATANALATQALASAAAbQAAA7g9BOQgYAfgKAZQgLAagBAnQgBAJgLAFQgNAFgLAAQgIAAgJgDg");
	this.shape_667.setTransform(1707.2,262.4);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AhYCtQgPgKgHgPQgIgQAAgTQAAgOAGgSQAGgRANgRQAMgRAXgRIg3gqQgdgZAAghQAAgTAJgRQAKgSAOgMQAQgNARgIQATgHATAAQATAAAPAHQAPAHAMAQQAMAPAEAYIABAHQAAAPgLAKQgLAMgPAAQgLAAgLgJQgKgIgDgOQgBgJgDAAIgCAAQgIAAgJAGQgKAGgDAHIAAAAQAAADAIAGIATAOQAcAUAWAXQAlgPA1gMIAHAAQAQAAAKAKQALALAAAPQAAAMgIAJQgIAKgOAEQgmAHgYAKQAFAPAAAPQAAAUgGAQQgHARgLAOQgNAQgNAJQgPAMgPAEQgRAGgOAAQgSAAgPgJgAgsBqQAXgNAFgUQgXASgFAPg");
	this.shape_668.setTransform(1682.7,266.7);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AhXCtQgPgKgIgPQgIgRAAgSQAAgOAGgSQAGgQANgSQAOgTAWgPIg1goIgCgCQgegZAAghQAAgTAJgRQAJgRAPgNQAQgNASgIQASgHAUAAQARAAARAHQAPAIALAPQAMAPAFAYIAAAHQAAAPgLAKQgKAMgPAAQgMAAgKgJQgKgIgDgOQgCgJgDAAIgCAAQgHAAgKAGQgKAGgDAHIAAAAQAAACAIAHIATAOQAcATAXAYQAigPA3gMIAIAAQAPAAAKAKQALALAAAPQAAANgIAIQgHAKgOAEQgmAHgYAKQAFARAAANQAAASgHASQgHASgLANQgMAQgOAJQgOALgQAFQgQAGgOAAQgTAAgOgJgAgrBqQAXgNAEgUQgWASgFAPg");
	this.shape_669.setTransform(1658.6,266.7);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("Ag9CIQgZgYgOgmQgNgmAAgqQAAgoAMgjQANgjAcgVQAbgWArgBQAbAAAUANQAUANANAWQAMAVAGAcQAGAcAAAdQAAAigHAeQgIAegPAXQgOAXgWAOQgVANgbAAQgjgBgagYgAgPhNQgLANgEATQgFASAAAVQABAYAFAWQAFAVAIAQQAIAOAIABQAJAAAIgPQAIgPAGgXQAEgUABgaQAAgTgEgVQgDgSgHgNQgGgMgGAAQgQABgJAMg");
	this.shape_670.setTransform(1631.5,265.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AhrCeQgLgKgCgOQgEgpAAhdQAAg7AChEQABgPALgKQALgKAOAAQARABAJAKQAKAKAAAPIAAACQgBAdAAAgQAUgsAUgdQAVgdAUgBQAJAAARAKQAQAJAPAOQAPANALAOQALANAAAIQAAAOgLAMQgLAKgPABQgNgCgRgJQgQgJgKgPIhBCwIgOAnQgBAOgJAKQgJAJgNACIgEAAQgOAAgKgJg");
	this.shape_671.setTransform(1608.3,264.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AABCkQgaAAgUgLQgVgLgLgSQgNgRgGgZQgFgYgBgaQAAghAJgjQAIgiAQgdQAOgcAWgSQAVgRAXgBIALABQAbAEARAPQARAPAIAVQAHAUABAWQAAAjgPAXQgOAWgWAAQgNAAgNgLQgKgLAAgOQAAgGACgIQADgHAGgFIgBAAIABgEQACgGABgIQgBgMgFgIIgDgEIgGgBQgIABgJAUQgJAVgHAdQgHAbAAAYQAAAQAEANQADAOAGAIQAIAIAKAAQAKAAAKgDQALgDAFgFQAFgGAIgEQAHgDAIAAQANAAALAJQAGAFADAIQADAHAAAIQAAAMgHAKQgHAJgMAIQgMAIgKAEQgZAJgXAAg");
	this.shape_672.setTransform(1583.6,264.9);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AgUCyQgIgFgGgJQgIgSgBhYQAAg2AEg3QAAgPALgKQALgKAOAAQAPACAKAJQALALAAAPIAAACQgEA3AAAyIAAAHQAAAjgBAPIAAAMQAFAIAAALQAAAPgLAKQgLALgNAAQgKAAgIgEgAgQhhQgJgEgGgIQgKgNAAgPQAAgPAKgNQAGgIAJgEQAJgEAIAAQAJAAAJAEQAJAFAGAHQAKANAAAPQAAAPgKANQgGAIgJAEQgJAEgJAAQgIAAgJgEg");
	this.shape_673.setTransform(1568.5,263);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("ABACbQgLgKAAgPIABgEQAIhIAAg3IgJhbQgCAEgGAcIgPBBQgNBBgMAfQgOAqgYAPQgMAJgUgBQhFAAAAigQAAg/AHhKIAAgBQACgOALgKQAKgJAOAAQAQABAKAKQALAKAAAPIgCASIgEAxQgCAhAAAmIgEBUQACABAVheQAIgpAMgmQALgmASgYQATgXAhgCIAHABQAzAGAMBPQAGAjAAAnQAABEgIBIQgDAPgKAIQgKAJgOAAQgQAAgKgLg");
	this.shape_674.setTransform(1548.4,264);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AhFCMQgTgOgNgWQgOgWgIgdQgGgcgCgfQAAgZAHgZQAIgZAOgTQAPgUAWgLQAXgMAfAAQAUAAAQAFQASAGAPALQABgNALgKQAKgJANAAQARABAJAKQALALAAAPIAAAYQgBAeAABbQAAA+ACATIABAEQgBAOgIAKQgKALgOACIgEAAQgOAAgLgJQgKgJgCgOIgCgmQgNAYgLAPQgMAPgRAKQgNAJgSAAQgWAAgTgOgAgmg8QgLAJgFAOQgDAQAAAQQAAAaAJAYIAKAaQAGAKADAAIABAAQAFgCAKgQQAJgSAJgYIAZhAQgKgPgIgGQgIgFgNAAQgTAAgKAJg");
	this.shape_675.setTransform(1519.7,266.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AAFC8QgbAAgVgJQgogRgUgsQgTgpAAhBIAAgNQADgxAMgiQALgjAVgXQATgXAZgLQAYgLAYAAQAdAAAaANQAZAOAUAZQAGAKAAAMQAAAJgDAHQgGAJgGAEQgLAIgLAAQgHAAgJgFQgHgDgGgIQgJgMgJgFQgMgGgKABQgQAAgOAMQgOAMgLAaQgJAbgCAmIAAAMQAAAvAMAbQAMAcAgAAQAggBAVgUQAMgKAOAAQAOAAAMAKQALAMAAAOQAAAOgLAMQgTASgaAMQgZALgeABg");
	this.shape_676.setTransform(1493.5,264.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgQCrQgKgHgEgLQgJgYAAhiQAAhSAHhbQABgPAKgJQALgKANAAQARABAJAKQALAKAAAQIAAACQgHBeAABQIABA8QABAXADAIQACAGAAAHQAAAQgLAKQgLAKgPABQgKgBgJgGg");
	this.shape_677.setTransform(1462.7,263.5);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AgsCsQgSgKgMgSQgLgQgIgYQgHgWgDgYQgDgVAAgbIABgkQADgqALgeQAKgdAPgTQAPgSATgIQARgJASAAQAVAAARAJQATAIAOAQQAOAOAKAXQAJAWAAAaQAAARgGAUQgFASgLATQgLAUgTASQgdAfgtAMQAIAQAPAAIAOgBQAQAAALALQAKALAAAPQAAANgIAJQgIAKgNADQgPADgMAAQgYAAgTgKgAgChqQgOAIgIAdQgJAcAAAzIAAAKQAXgHAOgOQAPgPAHgSQAHgRAAgNQAAgMgEgKQgFgLgHgFQgGgGgIAAIgFACg");
	this.shape_678.setTransform(1447.3,263.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AhXCtQgPgKgIgPQgIgPAAgUQAAgOAGgSQAFgQAOgSQAOgSAVgQIg0goIgCgCQgegZAAghQAAgTAJgRQAJgRAPgNQAOgMATgJQATgHATAAQATAAAPAHQAPAHAMAQQAMAPAFAYIAAAHQAAAPgLAKQgLAMgPAAQgLAAgKgJQgKgIgDgOQgDgJgCAAIgCAAQgHAAgKAGQgKAGgDAHIAAAAQAAADAIAGIATAOQAZASAaAZQAjgPA2gMIAHAAQAQAAAKAKQALALAAAPQAAANgIAIQgIAKgNAEQglAHgaAKQAFAPAAAPQAAAUgGAQQgHARgLAOQgLAOgPALQgPAMgPAEQgRAGgOAAQgSAAgOgJgAgrBqQAXgNAEgUQgWASgFAPg");
	this.shape_679.setTransform(1414.6,266.7);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AgsCsQgRgJgNgTQgLgQgIgYQgHgWgDgYQgDgcAAgUIABgkQADgqALgeQAKgdAPgTQARgSARgIQARgJASAAQAVAAARAJQATAIAOAQQAQAQAIAVQAJAWAAAaQAAARgGAUQgEASgMATQgNAVgRARQgdAfgtAMQAIAQAPAAIAOgBQAQAAALALQAKAKAAAQQAAANgIAJQgHAJgOAEQgPADgMAAQgZAAgSgKgAgChqQgOAIgIAdQgJAcAAAzIAAAKQAXgHAOgOQAPgPAHgSQAHgRAAgNQAAgMgEgKQgFgLgGgFQgIgGgHAAIgFACg");
	this.shape_680.setTransform(1388.9,263.5);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgsCsQgRgKgNgSQgMgSgHgWQgGgSgEgcQgDgYAAgYIABgkQADgqALgeQAKgdAPgTQARgSARgIQARgJASAAQAVAAARAJQATAIAPAQQAOAQAJAVQAJAXAAAZQAAASgFATQgFASgMATQgLAUgSASQgfAfgsAMQAIAQAPAAIAPgBQAPAAALALQAKALAAAPQAAAMgIAKQgIAKgNADQgOADgMAAQgaAAgSgKgAgChqQgOAIgIAdQgJAeAAAxIABAKQAXgIANgNQAQgQAGgRQAIgQAAgOQAAgMgFgKQgEgKgHgGQgHgGgHAAQgDAAgDACg");
	this.shape_681.setTransform(1354.5,263.5);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AgyCIQgRgMgMgWQgMgVgHgdQgLgxAAg1QAAgpAGgbQADgOAKgHQAKgIANAAQAPAAALALQAKAKAAAPIAAAJQgFAWAAAfQAAAcAFAjQAFAgAMAXIAGAIQAOgOAKgfQALgfAFgoQAFgnAAghQAAgOALgLQALgLAPAAQAQABAJAKQALAKAAAQQAAApgGApQgGAtgMAmQgNAkgTAXQgTAYgdAIQgJACgIAAQgWAAgRgMg");
	this.shape_682.setTransform(1331.2,266.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("ABDDxQgVgEgWgPQgVgPgOgZQgkgFgXgcQgXgcgKgrQgLgrAAgxQAAglAFgfQAEgiAKgcQAKgcANgWQAPgWASgMQATgMAWAAQAcAAAVAPQAVAPAPAaQAOAbAHAkQAHAlAAAoQAAAlgGAlQgGAlgNAhQgMAggUAWQALANAKABQAPADAHAKQAJAKAAANQAAAPgLALQgKALgQAAgAgMiZQgJAOgGAVQgGAWgEAbQgEAdAAAaQAAAeAFAbQAEAbAJASQALgLAOAAQAKAAAIAFQAKgZAGggQAGgfAAglQAAgggFgbQgEgcgJgSQgJgRgMgCQgIAAgHAOg");
	this.shape_683.setTransform(1306.6,268.4);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AgoBtQgPgPAAgWQAAgQAJgQQAGgLARgTQAVgagBgZIAAgJIAbAAIAAAJQADAegZAeQgMARgGAJQgGAMAAAMQAAAOAJAHQAIAJAQAAQAWAAAOgMIAJAYQgVAOgeAAQgdAAgQgQgAgEhVQgHgHAAgJQAAgKAHgHQAEgGAJAAQAKAAAGAGQAGAHAAAKQAAAJgGAHQgGAGgKAAQgIAAgFgGg");
	this.shape_684.setTransform(1288,276.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AhyDWQgJgGAAgNQAAgIAFgMQAMgZAZgqIA4hVIAqg/QASgdAIgQQALgWAAgTQAAgQgHgIQgHgJgJAAQgHAAgIAHQgIAHgFAOQgFAPABAVIAAAMQAAAGgGAFQgGAEgJACQgJADgIAAQgMAAgKgEQgJgFgCgJIAAgOQAAghAJgYQAJgXAPgQQAOgPATgHQASgHASAAQASAAARAGQAQAGAOAMQAOAMAHAQQAIARAAAWQAAAbgNAfQgYA2gnA7QgqBAgjAuIBjgKIABAAQAHAAAFAFQAGAGADAIQADAIAAAIQAAAKgFAIQgEAIgKABQhGAFhOALIgPABQgQAAgLgHg");
	this.shape_685.setTransform(1593.4,202.8);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("Ag5CPQgXgZgNgoQgMgmAAguQgBgqAMglQAMgmAagWQAZgWApgBQAZAAATANQARAOANAXQAMAXAFAdQAFAaAAAiQAAAhgGAiQgIAfgNAZQgOAYgTAOQgVAOgZAAQghAAgYgagAgOhSQgKANgEAVQgEAUgBAWQABAXAFAZQAFAYAHAPQAIAPAHAAQAIAAAIgPQAIgQAFgYQAEgXABgZQAAgVgEgVQgDgUgGgNQgGgNgFAAQgPABgJAMg");
	this.shape_686.setTransform(1555.7,205.1);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AgUCyQgIgFgGgJQgIgSgBhYQAAgoAEhFQABgPAKgKQALgKAOAAQAQACAJAJQALALAAAPIAAACQgEBEAAAlIAAAHQAAAjgBAPIAAAMQAFAJAAAKQAAAOgLALQgMALgMAAQgJAAgJgEgAgQhhQgIgEgHgIQgJgNAAgPQAAgPAJgNQAHgIAIgEQAJgEAIAAQAKAAAIAEQAJAEAGAIQAKANAAAPQAAAPgKANQgGAIgJAEQgIAEgKAAQgIAAgJgEg");
	this.shape_687.setTransform(1540.2,203.8);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AABCkQgbAAgTgLQgVgLgLgSQgMgRgGgZQgHgYAAgaQAAghAJgjQAIgiAQgdQAPgcAVgSQAVgRAXgBIALABQAbADARAQQARAOAIAWQAHAUAAAWQABAjgPAXQgOAWgWAAQgNAAgNgLQgKgLAAgOQAAgGACgIQADgFAGgHIgBAAIABgEQACgGAAgIQAAgMgEgIIgEgEIgGgBQgIABgIAUQgKAVgHAdQgHAbAAAYQAAAQAEANQACAOAIAIQAGAIAMAAQAIAAALgDQAMgDAFgFQAEgGAIgEQAHgDAIAAQANAAALAJQAGAFADAIQADAHABAIQgBAMgHAKQgHAJgMAIQgMAIgKAEQgZAJgXAAg");
	this.shape_688.setTransform(1523.7,205.7);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AgUCyQgIgFgGgJQgIgSgBhYQAAg2AEg3QABgPAKgKQALgKAOAAQAQACAJAJQALALAAAPIAAACQgEA3AAAyIAAAHQAAAjgBAPIAAAMQAFAJAAAKQAAAOgLALQgMALgMAAQgJAAgJgEgAgQhhQgJgEgGgIQgKgNAAgPQAAgPAKgNQAGgHAJgFQAJgEAIAAQAKAAAIAEQAJAEAGAIQAKANAAAPQAAAPgKANQgGAIgJAEQgIAEgKAAQgIAAgJgEg");
	this.shape_689.setTransform(1508.5,203.8);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("AABCkQgaAAgUgLQgUgLgMgSQgMgRgHgZQgGgYAAgaQAAghAJgjQAIgiAQgdQAPgdAVgRQAVgRAWgBIAMABQAbAEARAPQARAPAIAVQAIAUAAAWQAAAjgPAXQgOAWgWAAQgNAAgNgLQgKgLAAgOQAAgGADgIQADgHAFgFIgBAAIABgEQADgGAAgIQgBgMgFgIIgDgEIgGgBQgIABgJAUQgHARgJAhQgHAbABAYQAAAQACANQADAOAHAIQAHAIALAAQAKAAAKgDQALgDAFgFQAFgGAIgEQAIgDAGAAQAOAAALAJQAGAFADAIQAEAJgBAGQAAAMgHAKQgHAJgMAIQgMAIgKAEQgZAJgXAAg");
	this.shape_690.setTransform(1492,205.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AhrCeQgLgKgCgOQgEgsAAhaQAAhLADg0QABgPAKgKQALgKAOAAQAQABAKAKQALAKAAAPIgCA/QATgsAVgdQAUgcAVgCQAKAAAQAJQAPAKAQAOQAPANALAOQALAOAAAHQAAAPgLALQgLALgPAAQgNgCgRgJQgRgJgIgQIhCCxQgMAggCAHQgBAOgJAKQgJAJgNABIgEABQgOAAgKgJg");
	this.shape_691.setTransform(1469.6,205.6);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgsCrQgSgJgMgSQgLgQgIgXQgHgXgDgYQgDgZAAgYQAAgRABgSQADgpALgfQAKgeAPgSQAPgSATgIQARgJASAAQAVAAASAJQATAKANAOQAPAOAJAXQAJAWAAAaQAAARgGATQgEATgMATQgLATgTAUQgdAegtAMQAIAQAPAAIAOgBQAQgBALALQAKAMAAAPQAAAMgIAKQgIAKgNADQgPADgLAAQgaAAgSgLgAgChqQgNAIgKAdQgIAcAAAyIAAALQAXgIAOgNQAPgPAIgSQAGgRABgNQAAgMgFgKQgFgLgGgFQgHgGgIAAIgFACg");
	this.shape_692.setTransform(1445.7,204.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AghEdQgaAAgWgNQgXgOgMgVQgOgXAAgZQAAgRAIgUQAHgRATgUQASgSAdgOQAggQAogJIABgkQAAg0gGgsQgGgqgLgaQgDgHAAgIQAAgQAKgLQALgLAPABQAJAAAKAFQAKAHAEAIQAOAhAIAzQAIA3AAA3IAAAbQANABAKAJQAJAJACANIAAAFQAAANgJALQgJAKgPACIgIAAQgHA2gRAkQgTAogZARQgaASgbAAgAgmChQgSAPAAANQAAAKAHAGQAHAHAJAAIABAAQAHAAAJgIQAJgHAHgQQAHgSAHgbQgiAKgSAPgAgTjIQgKgFgFgHQgKgOAAgOQAAgOAKgOQAHgIAIgEQAJgEAIAAQAIAAAJAEQAHADAIAJQAKANAAAPQAAAPgKANQgGAHgJAFQgJAEgIAAQgIAAgJgEg");
	this.shape_693.setTransform(1421.9,212);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#000000").s().p("AgkC7QgRgFgLgHQgKgGgGgKQgOgVgGgsQgHgrAAg1QAAgtAGgrQAGgoALgUQAGgJAJgGQALgIAbgGQAdgGAZgDQAcgDATAAQAQAAAKALQALAKAAAQQAAAQgLAKQgKAKgPAAIgEAAQgSAAgfAEQgdAEgNAEQgHAWgDA4IBhgMQAPAAALALQALALAAAOQAAANgJAKQgJAKgOADIhlANQADAwAIAWQAIAEAOAAQAbAAAXgQQAKgHALAAQAIAAAJAEQAIAFAFAGQAHALAAAKQAAAJgEAIQgEAIgIAFQgWAQgYAHQgZAHgUAAQgTAAgSgFg");
	this.shape_694.setTransform(1406.5,205.2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#4D444F").s().p("AhpCjQgshEAAhfQAAheAshDQAshEA9AAQA+AAAsBEQAsBDAABeQAABfgsBEQgsBDg+AAQg9AAgshDg");
	this.shape_695.setTransform(1206.4,131.1);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#CD4CED").s().p("EgxhADSIAAmjMBjDAAAIAAGjg");
	this.shape_696.setTransform(1514.4,131.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#DD78EF").s().p("EgxhA94MAAAh7vMBjDAAAMAAAB7vg");
	this.shape_697.setTransform(1514.4,548.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Capa_12, null, null);


(lib.Boton4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits1();
	this.instance.parent = this;
	this.instance.setTransform(-69,-65);

	this.instance_1 = new lib.Mapadebits2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-93,-87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-65,137,129);


(lib.Pajaro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(-3.7,8.2,1,1,0,0,0,90.9,69.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(5));

	// Layer_1
	this.instance_1 = new lib.ClipGroup_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.5,46.1,1,1,0,0,0,108.5,53.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({_off:true},5).wait(5));

	// Layer_1
	this.instance_2 = new lib.ClipGroup_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.2,61.6,1,1,0,0,0,96.8,69.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true},5).wait(10));

	// Layer_1
	this.instance_3 = new lib.ClipGroup_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.9,46.1,1,1,0,0,0,108.5,53.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true},5).wait(15));

	// Layer_1
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.3,7.6,1,1,0,0,0,90.9,69.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true},5).wait(20));

	// Layer_1
	this.instance_5 = new lib.ClipGroup_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.3,0.1,1,1,0,0,0,90.9,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-76.4,181.8,153);


(lib.Nube2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_copia
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(-1331.7,0,1,1,0,0,0,231.2,88.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({_off:false},0).wait(1).to({regX:231.1,regY:88.3,x:-1324.4,y:0.1},0).wait(1).to({x:-1316.9},0).wait(1).to({x:-1309.5},0).wait(1).to({x:-1302.1},0).wait(1).to({x:-1294.7},0).wait(1).to({x:-1287.2},0).wait(1).to({x:-1279.8},0).wait(1).to({x:-1272.4},0).wait(1).to({x:-1265},0).wait(1).to({x:-1257.5},0).wait(1).to({x:-1250.1},0).wait(1).to({x:-1242.7},0).wait(1).to({x:-1235.2},0).wait(1).to({x:-1227.8},0).wait(1).to({x:-1220.4},0).wait(1).to({x:-1213},0).wait(1).to({x:-1205.5},0).wait(1).to({x:-1198.1},0).wait(1).to({x:-1190.7},0).wait(1).to({x:-1183.3},0).wait(1).to({x:-1175.8},0).wait(1).to({x:-1168.4},0).wait(1).to({x:-1161},0).wait(1).to({x:-1153.5},0).wait(1).to({x:-1146.1},0).wait(1).to({x:-1138.7},0).wait(1).to({x:-1131.3},0).wait(1).to({x:-1123.8},0).wait(1).to({x:-1116.4},0).wait(1).to({x:-1109},0).wait(1).to({x:-1101.6},0).wait(1).to({x:-1094.1},0).wait(1).to({x:-1086.7},0).wait(1).to({x:-1079.3},0).wait(1).to({x:-1071.8},0).wait(1).to({x:-1064.4},0).wait(1).to({x:-1057},0).wait(1).to({x:-1049.6},0).wait(1).to({x:-1042.1},0).wait(1).to({x:-1034.7},0).wait(1).to({x:-1027.3},0).wait(1).to({x:-1019.9},0).wait(1).to({x:-1012.4},0).wait(1).to({x:-1005},0).wait(1).to({x:-997.6},0).wait(1).to({x:-990.1},0).wait(1).to({x:-982.7},0).wait(1).to({x:-975.3},0).wait(1).to({x:-967.9},0).wait(1).to({x:-960.4},0).wait(1).to({x:-953},0).wait(1).to({x:-945.6},0).wait(1).to({x:-938.1},0).wait(1).to({x:-930.7},0).wait(1).to({x:-923.3},0).wait(1).to({x:-915.9},0).wait(1).to({x:-908.4},0).wait(1).to({x:-901},0).wait(1).to({x:-893.6},0).wait(1).to({x:-886.2},0).wait(1).to({x:-878.7},0).wait(1).to({x:-871.3},0).wait(1).to({x:-863.9},0).wait(1).to({x:-856.4},0).wait(1).to({x:-849},0).wait(1).to({x:-841.6},0).wait(1).to({x:-834.2},0).wait(1).to({x:-826.7},0).wait(1).to({x:-819.3},0).wait(1).to({x:-811.9},0).wait(1).to({x:-804.5},0).wait(1).to({x:-797},0).wait(1).to({x:-789.6},0).wait(1).to({x:-782.2},0).wait(1).to({x:-774.7},0).wait(1).to({x:-767.3},0).wait(1).to({x:-759.9},0).wait(1).to({x:-752.5},0).wait(1).to({x:-745},0).wait(1).to({x:-737.6},0).wait(1).to({x:-730.2},0).wait(1).to({x:-722.8},0).wait(1).to({x:-715.3},0).wait(1).to({x:-707.9},0).wait(1).to({x:-700.5},0).wait(1).to({x:-693},0).wait(1).to({x:-685.6},0).wait(1).to({x:-678.2},0).wait(1).to({x:-670.8},0).wait(1).to({x:-663.3},0).wait(1).to({x:-655.9},0).wait(1).to({x:-648.5},0).wait(1).to({x:-641.1},0).wait(1).to({x:-633.6},0).wait(1).to({x:-626.2},0).wait(1).to({x:-618.8},0).wait(1).to({x:-611.3},0).wait(1).to({x:-603.9},0).wait(1).to({x:-596.5},0).wait(1).to({x:-589.1},0).wait(1).to({x:-581.6},0).wait(1).to({x:-574.2},0).wait(1).to({x:-566.8},0).wait(1).to({x:-559.4},0).wait(1).to({x:-551.9},0).wait(1).to({x:-544.5},0).wait(1).to({x:-537.1},0).wait(1).to({x:-529.6},0).wait(1).to({x:-522.2},0).wait(1).to({x:-514.8},0).wait(1).to({x:-507.4},0).wait(1).to({x:-499.9},0).wait(1).to({x:-492.5},0).wait(1).to({x:-485.1},0).wait(1).to({x:-477.7},0).wait(1).to({x:-470.2},0).wait(1).to({x:-462.8},0).wait(1).to({x:-455.4},0).wait(1).to({x:-447.9},0).wait(1).to({x:-440.5},0).wait(1).to({x:-433.1},0).wait(1).to({x:-425.7},0).wait(1).to({x:-418.2},0).wait(1).to({x:-410.8},0).wait(1).to({x:-403.4},0).wait(1).to({x:-396},0).wait(1).to({x:-388.5},0).wait(1).to({x:-381.1},0).wait(1).to({x:-373.7},0).wait(1).to({x:-366.2},0).wait(1).to({x:-358.8},0).wait(1).to({x:-351.4},0).wait(1).to({x:-344},0).wait(1).to({x:-336.5},0).wait(1).to({x:-329.1},0).wait(1).to({x:-321.7},0).wait(1).to({x:-314.2},0).wait(1).to({x:-306.8},0).wait(1).to({x:-299.4},0).wait(1).to({x:-292},0).wait(1).to({x:-284.5},0).wait(1).to({x:-277.1},0).wait(1).to({x:-269.7},0).wait(1).to({x:-262.3},0).wait(1).to({x:-254.8},0).wait(1).to({x:-247.4},0).wait(1).to({x:-240},0).wait(1).to({x:-232.5},0).wait(1).to({x:-225.1},0).wait(1).to({x:-217.7},0).wait(1).to({x:-210.3},0).wait(1).to({x:-202.8},0).wait(1).to({x:-195.4},0).wait(1).to({x:-188},0).wait(1).to({x:-180.6},0).wait(1).to({x:-173.1},0).wait(1).to({x:-165.7},0).wait(1).to({x:-158.3},0).wait(1).to({x:-150.8},0).wait(1).to({x:-143.4},0).wait(1).to({x:-136},0).wait(1).to({x:-128.6},0).wait(1).to({x:-121.1},0).wait(1).to({x:-113.7},0).wait(1).to({x:-106.3},0).wait(1).to({x:-98.9},0).wait(1).to({x:-91.4},0).wait(1).to({x:-84},0).wait(1).to({x:-76.6},0).wait(1).to({x:-69.1},0).wait(1).to({x:-61.7},0).wait(1).to({x:-54.3},0).wait(1).to({x:-46.9},0).wait(1).to({x:-39.4},0).wait(1).to({x:-32},0).wait(1).to({x:-24.6},0).wait(1).to({x:-17.2},0).wait(1).to({x:-9.7},0).wait(1).to({x:-2.3},0).wait(1));

	// Capa_1
	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0,1,1,0,0,0,231.2,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:231.1,regY:88.3,x:6.3,y:0.1},0).wait(1).to({x:12.5},0).wait(1).to({x:18.8},0).wait(1).to({x:25},0).wait(1).to({x:31.3},0).wait(1).to({x:37.5},0).wait(1).to({x:43.8},0).wait(1).to({x:50},0).wait(1).to({x:56.3},0).wait(1).to({x:62.5},0).wait(1).to({x:68.8},0).wait(1).to({x:75},0).wait(1).to({x:81.3},0).wait(1).to({x:87.5},0).wait(1).to({x:93.7},0).wait(1).to({x:100},0).wait(1).to({x:106.2},0).wait(1).to({x:112.5},0).wait(1).to({x:118.7},0).wait(1).to({x:125},0).wait(1).to({x:131.2},0).wait(1).to({x:137.5},0).wait(1).to({x:143.7},0).wait(1).to({x:150},0).wait(1).to({x:156.2},0).wait(1).to({x:162.5},0).wait(1).to({x:168.7},0).wait(1).to({x:174.9},0).wait(1).to({x:181.2},0).wait(1).to({x:187.4},0).wait(1).to({x:193.7},0).wait(1).to({x:199.9},0).wait(1).to({x:206.2},0).wait(1).to({x:212.4},0).wait(1).to({x:218.7},0).wait(1).to({x:224.9},0).wait(1).to({x:231.1},0).wait(1).to({x:237.4},0).wait(1).to({x:243.6},0).wait(1).to({x:249.9},0).wait(1).to({x:256.1},0).wait(1).to({x:262.3},0).wait(1).to({x:268.6},0).wait(1).to({x:274.8},0).wait(1).to({x:281.1},0).wait(1).to({x:287.3},0).wait(1).to({x:293.6},0).wait(1).to({x:299.8},0).wait(1).to({x:306.1},0).wait(1).to({x:312.3},0).wait(1).to({x:318.6},0).wait(1).to({x:324.8},0).wait(1).to({x:331.1},0).wait(1).to({x:337.3},0).wait(1).to({x:343.6},0).wait(1).to({x:349.8},0).wait(1).to({x:356},0).wait(1).to({x:362.3},0).wait(1).to({x:368.5},0).wait(1).to({x:374.8},0).wait(1).to({x:381},0).wait(1).to({x:387.3},0).wait(1).to({x:393.5},0).wait(1).to({x:399.8},0).wait(1).to({x:406},0).wait(1).to({x:412.3},0).wait(1).to({x:418.5},0).wait(1).to({x:424.8},0).wait(1).to({x:431},0).wait(1).to({x:437.2},0).wait(1).to({x:443.5},0).wait(1).to({x:449.7},0).wait(1).to({x:456},0).wait(1).to({x:462.2},0).wait(1).to({x:468.5},0).wait(1).to({x:474.7},0).wait(1).to({x:481},0).wait(1).to({x:487.2},0).wait(1).to({x:493.5},0).wait(1).to({x:499.7},0).wait(1).to({x:506},0).wait(1).to({x:512.2},0).wait(1).to({x:518.4},0).wait(1).to({x:524.7},0).wait(1).to({x:530.9},0).wait(1).to({x:537.2},0).wait(1).to({x:543.4},0).wait(1).to({x:549.7},0).wait(1).to({x:555.9},0).wait(1).to({x:562.2},0).wait(1).to({x:568.4},0).wait(1).to({x:574.7},0).wait(1).to({x:580.9},0).wait(1).to({x:587.2},0).wait(1).to({x:593.4},0).wait(1).to({x:599.7},0).wait(1).to({x:605.9},0).wait(1).to({x:612.1},0).wait(1).to({x:618.4},0).wait(1).to({x:624.6},0).wait(1).to({x:630.9},0).wait(1).to({x:637.1},0).wait(1).to({x:643.4},0).wait(1).to({x:649.6},0).wait(1).to({x:655.9},0).wait(1).to({x:662.1},0).wait(1).to({x:668.4},0).wait(1).to({x:674.6},0).wait(1).to({x:680.9},0).wait(1).to({x:687.1},0).wait(1).to({x:693.3},0).wait(1).to({x:699.6},0).wait(1).to({x:705.8},0).wait(1).to({x:712.1},0).wait(1).to({x:718.3},0).wait(1).to({x:724.6},0).wait(1).to({x:730.8},0).wait(1).to({x:737.1},0).wait(1).to({x:743.3},0).wait(1).to({x:749.6},0).wait(1).to({x:755.8},0).wait(1).to({x:762.1},0).wait(1).to({x:768.3},0).wait(1).to({x:774.5},0).wait(1).to({x:780.8},0).wait(1).to({x:787},0).wait(1).to({x:793.3},0).wait(1).to({x:799.5},0).wait(1).to({x:805.8},0).wait(1).to({x:812},0).wait(1).to({x:818.3},0).wait(1).to({x:824.5},0).wait(1).to({x:830.8},0).wait(1).to({x:837},0).wait(1).to({x:843.3},0).wait(1).to({x:849.5},0).wait(1).to({x:855.8},0).wait(1).to({x:862},0).wait(1).to({x:868.2},0).wait(1).to({x:874.5},0).wait(1).to({x:880.7},0).wait(1).to({x:887},0).wait(1).to({x:893.2},0).wait(1).to({x:899.5},0).wait(1).to({x:905.7},0).wait(1).to({x:912},0).wait(1).to({x:918.2},0).wait(1).to({x:924.5},0).wait(1).to({x:930.7},0).wait(1).to({x:937},0).wait(1).to({x:943.2},0).wait(1).to({x:949.4},0).wait(1).to({x:955.7},0).wait(1).to({x:961.9},0).wait(1).to({x:968.2},0).wait(1).to({x:974.4},0).wait(1).to({x:980.7},0).wait(1).to({x:986.9},0).wait(1).to({x:993.2},0).wait(1).to({x:999.4},0).wait(1).to({x:1005.7},0).wait(1).to({x:1011.9},0).wait(1).to({x:1018.2},0).wait(1).to({x:1024.4},0).wait(1).to({x:1030.7},0).wait(1).to({x:1036.9},0).wait(1).to({x:1043.1},0).wait(1).to({x:1049.4},0).wait(1).to({x:1055.6},0).wait(1).to({x:1061.9},0).wait(1).to({x:1068.1},0).wait(1).to({x:1074.4},0).wait(1).to({x:1080.6},0).wait(1).to({x:1086.9},0).wait(1).to({x:1093.1},0).wait(1).to({x:1099.4},0).wait(1).to({x:1105.6},0).wait(1).to({x:1111.9},0).wait(1).to({x:1118.1},0).to({_off:true},1).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.1,-88.2,462.4,176.6);


(lib.Nube1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(-637,0.1,1,1,0,0,0,318.2,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-629.8,y:0},0).wait(1).to({x:-622.7,y:-0.1},0).wait(1).to({x:-615.5},0).wait(1).to({x:-608.3,y:-0.2},0).wait(1).to({x:-601.2,y:-0.3},0).wait(1).to({x:-594,y:-0.4},0).wait(1).to({x:-586.8,y:-0.5},0).wait(1).to({x:-579.7},0).wait(1).to({x:-572.5,y:-0.6},0).wait(1).to({x:-565.3,y:-0.7},0).wait(1).to({x:-558.2,y:-0.8},0).wait(1).to({x:-551,y:-0.9},0).wait(1).to({x:-543.9},0).wait(1).to({x:-536.7,y:-1},0).wait(1).to({x:-529.5,y:-1.1},0).wait(1).to({x:-522.4,y:-1.2},0).wait(1).to({x:-515.2,y:-1.3},0).wait(1).to({x:-508},0).wait(1).to({x:-500.9,y:-1.4},0).wait(1).to({x:-493.7,y:-1.5},0).wait(1).to({x:-486.5,y:-1.6},0).wait(1).to({x:-479.4,y:-1.7},0).wait(1).to({x:-472.2},0).wait(1).to({x:-465,y:-1.8},0).wait(1).to({x:-457.9,y:-1.9},0).wait(1).to({x:-450.7,y:-2},0).wait(1).to({x:-443.5,y:-2.1},0).wait(1).to({x:-436.4},0).wait(1).to({x:-429.2,y:-2.2},0).wait(1).to({x:-422,y:-2.3},0).wait(1).to({x:-414.9,y:-2.4},0).wait(1).to({x:-407.7,y:-2.5},0).wait(1).to({x:-400.5},0).wait(1).to({x:-393.4,y:-2.6},0).wait(1).to({x:-386.2,y:-2.7},0).wait(1).to({x:-379,y:-2.8},0).wait(1).to({x:-371.9,y:-2.9},0).wait(1).to({x:-364.7},0).wait(1).to({x:-357.5,y:-3},0).wait(1).to({x:-350.4,y:-3.1},0).wait(1).to({x:-343.2,y:-3.2},0).wait(1).to({x:-336,y:-3.3},0).wait(1).to({x:-328.9},0).wait(1).to({x:-321.7,y:-3.4},0).wait(1).to({x:-314.6,y:-3.5},0).wait(1).to({x:-307.4,y:-3.6},0).wait(1).to({x:-300.2,y:-3.7},0).wait(1).to({x:-293.1},0).wait(1).to({x:-285.9,y:-3.8},0).wait(1).to({x:-278.7,y:-3.9},0).wait(1).to({x:-271.6,y:-4},0).wait(1).to({x:-264.4,y:-4.1},0).wait(1).to({x:-257.2},0).wait(1).to({x:-250.1,y:-4.2},0).wait(1).to({x:-242.9,y:-4.3},0).wait(1).to({x:-235.7,y:-4.4},0).wait(1).to({x:-228.6,y:-4.5},0).wait(1).to({x:-221.4},0).wait(1).to({x:-214.2,y:-4.6},0).wait(1).to({x:-207.1,y:-4.7},0).wait(1).to({x:-199.9,y:-4.8},0).wait(1).to({x:-192.7,y:-4.9},0).wait(1).to({x:-185.6},0).wait(1).to({x:-178.4,y:-5},0).wait(1).to({x:-171.2,y:-5.1},0).wait(1).to({x:-164.1,y:-5.2},0).wait(1).to({x:-156.9,y:-5.3},0).wait(1).to({x:-149.7},0).wait(1).to({x:-142.6,y:-5.4},0).wait(1).to({x:-135.4,y:-5.5},0).wait(1).to({x:-128.2,y:-5.6},0).wait(1).to({x:-121.1,y:-5.7},0).wait(1).to({x:-113.9,y:-5.8},0).wait(1).to({x:-106.7},0).wait(1).to({x:-99.6,y:-5.9},0).wait(1).to({x:-92.4,y:-6},0).wait(1).to({x:-85.3,y:-6.1},0).wait(1).to({x:-78.1,y:-6.2},0).wait(1).to({x:-70.9},0).wait(1).to({x:-63.8,y:-6.3},0).wait(1).to({x:-56.6,y:-6.4},0).wait(1).to({x:-49.4,y:-6.5},0).wait(1).to({x:-42.3,y:-6.6},0).wait(1).to({x:-35.1},0).wait(1).to({x:-27.9,y:-6.7},0).wait(1).to({x:-20.8,y:-6.8},0).wait(1).to({x:-13.6,y:-6.9},0).wait(1).to({x:-6.4,y:-7},0).wait(1).to({x:0.7},0).wait(1).to({x:7.9,y:-7.1},0).wait(1).to({x:15.1,y:-7.2},0).wait(1).to({x:22.2,y:-7.3},0).wait(1).to({x:29.4,y:-7.4},0).wait(1).to({x:36.6},0).wait(1).to({x:43.7,y:-7.5},0).wait(1).to({x:50.9,y:-7.6},0).wait(1).to({x:58.1,y:-7.7},0).wait(1).to({x:65.2,y:-7.8},0).wait(1).to({x:72.4},0).wait(1).to({x:79.6,y:-7.9},0).wait(1).to({x:86.7,y:-8},0).wait(1).to({x:93.9,y:-8.1},0).wait(1).to({x:101.1,y:-8.2},0).wait(1).to({x:108.2},0).wait(1).to({x:115.4,y:-8.3},0).wait(1).to({x:122.5,y:-8.4},0).wait(1).to({x:129.7,y:-8.5},0).wait(1).to({x:136.9,y:-8.6},0).wait(1).to({x:144},0).wait(1).to({x:151.2,y:-8.7},0).wait(1).to({x:158.4,y:-8.8},0).wait(1).to({x:165.5,y:-8.9},0).wait(1).to({x:172.7,y:-9},0).wait(1).to({x:179.9},0).wait(1).to({x:187,y:-9.1},0).wait(1).to({x:194.2,y:-9.2},0).wait(1).to({x:201.4,y:-9.3},0).wait(1).to({x:208.5,y:-9.4},0).wait(1).to({x:215.7},0).wait(1).to({x:222.9,y:-9.5},0).wait(1).to({x:230,y:-9.6},0).wait(1).to({x:237.2,y:-9.7},0).wait(1).to({x:244.4,y:-9.8},0).wait(1).to({x:251.5},0).wait(1).to({x:258.7,y:-9.9},0).wait(1).to({x:265.9,y:-10},0).wait(1).to({x:273,y:-10.1},0).wait(1).to({x:280.2,y:-10.2},0).wait(1).to({x:287.4},0).wait(1).to({x:294.5,y:-10.3},0).wait(1).to({x:301.7,y:-10.4},0).wait(1).to({x:308.8,y:-10.5},0).wait(1).to({x:316,y:-10.6},0).wait(1).to({x:323.1},0).wait(1).to({x:330.3,y:-10.7},0).wait(1).to({x:337.5,y:-10.8},0).wait(1).to({x:344.6,y:-10.9},0).wait(1).to({x:351.8,y:-11},0).wait(1).to({x:359},0).wait(1).to({x:366.1,y:-11.1},0).wait(1).to({x:373.3,y:-11.2},0).wait(1).to({x:380.5,y:-11.3},0).wait(1).to({x:387.6,y:-11.4},0).wait(1).to({x:394.8},0).wait(1).to({x:402,y:-11.5},0).wait(1).to({x:409.1,y:-11.6},0).wait(1).to({x:416.3,y:-11.7},0).wait(1).to({x:423.5,y:-11.8},0).wait(1).to({x:430.6},0).wait(1).to({x:437.8,y:-11.9},0).wait(1).to({x:444.9,y:-12},0).wait(1).to({x:452.1,y:-12.1},0).wait(1).to({x:459.3,y:-12.2},0).wait(1).to({x:466.4},0).wait(1).to({x:473.6,y:-12.3},0).wait(1).to({x:480.8,y:-12.4},0).wait(1).to({x:487.9,y:-12.5},0).wait(1).to({x:495.1,y:-12.6},0).wait(1).to({x:502.3},0).wait(1).to({x:509.4,y:-12.7},0).wait(1).to({x:516.6,y:-12.8},0).wait(1).to({x:523.8,y:-12.9},0).wait(1).to({x:530.9,y:-13},0).wait(1).to({x:538.1},0).wait(1).to({x:545.3,y:-13.1},0).wait(1).to({x:552.4,y:-13.2},0).wait(1).to({x:559.6,y:-13.3},0).wait(1).to({x:566.8,y:-13.4},0).wait(1).to({x:573.9},0).wait(1).to({x:581.1,y:-13.5},0).wait(1).to({x:588.3,y:-13.6},0).wait(1).to({x:595.4,y:-13.7},0).wait(1).to({x:602.6,y:-13.8},0).wait(1).to({x:609.8},0).wait(1).to({x:616.9,y:-13.9},0).wait(1).to({x:624.1,y:-14},0).wait(1).to({x:631.2,y:-14.1},0).wait(1).to({x:638.4,y:-14.2},0).wait(1).to({x:645.6},0).wait(1).to({x:652.8,y:-14.3},0).wait(1).to({x:659.9,y:-14.4},0).wait(1).to({x:667.1,y:-14.5},0).wait(1).to({x:674.2,y:-14.6},0).wait(1).to({x:681.4},0).wait(1).to({x:688.6,y:-14.7},0).wait(1).to({x:695.7,y:-14.8},0).wait(1).to({x:702.9,y:-14.9},0).wait(1).to({x:710.1,y:-15},0).wait(1).to({x:717.2},0).wait(1).to({x:724.4,y:-15.1},0).wait(1).to({x:731.6,y:-15.2},0).wait(1).to({x:738.7,y:-15.3},0).wait(1).to({x:745.9,y:-15.4},0).wait(1).to({x:753.1},0).wait(1).to({x:760.2,y:-15.5},0).wait(1).to({x:767.4,y:-15.6},0).wait(1).to({x:774.6,y:-15.7},0).wait(1).to({x:781.7,y:-15.8},0).wait(1).to({x:788.9},0).wait(1).to({x:796.1,y:-15.9},0).wait(1).to({x:803.2,y:-16},0).wait(1).to({x:810.4,y:-16.1},0).wait(1).to({x:817.6,y:-16.2},0).wait(1).to({x:824.7},0).wait(1).to({x:831.9,y:-16.3},0).wait(1).to({x:839.1,y:-16.4},0).wait(1).to({x:846.2,y:-16.5},0).wait(1).to({x:853.4,y:-16.6},0).wait(1).to({x:860.6},0).wait(1).to({x:867.7,y:-16.7},0).wait(1).to({x:874.9,y:-16.8},0).wait(1).to({x:882,y:-16.9},0).wait(1).to({x:889.2,y:-17},0).wait(1).to({x:896.4},0).wait(1).to({x:903.5,y:-17.1},0).wait(1).to({x:910.7,y:-17.2},0).wait(1).to({x:917.9,y:-17.3},0).wait(1).to({x:925,y:-17.4},0).wait(1).to({x:932.2,y:-17.5},0).wait(1).to({x:939.4},0).wait(1).to({x:946.5,y:-17.6},0).wait(1).to({x:953.7,y:-17.7},0).wait(1).to({x:960.9,y:-17.8},0).wait(1).to({x:968,y:-17.9},0).wait(1).to({x:975.2},0).wait(1).to({x:982.4,y:-18},0).wait(1).to({x:989.5,y:-18.1},0).wait(1).to({x:996.7,y:-18.2},0).wait(1).to({x:1003.9,y:-18.3},0).wait(1).to({x:1011},0).wait(1).to({x:1018.2,y:-18.4},0).wait(1).to({x:1025.4,y:-18.5},0).wait(1).to({x:1032.5,y:-18.6},0).wait(1).to({x:1039.7,y:-18.7},0).wait(1).to({x:1046.9},0).wait(1).to({x:1054,y:-18.8},0).wait(1).to({x:1061.2,y:-18.9},0).wait(1).to({x:1068.4,y:-19},0).wait(1).to({x:1075.5,y:-19.1},0).wait(1).to({x:1082.7},0).wait(1).to({x:1089.8,y:-19.2},0).wait(1).to({x:1097,y:-19.3},0).wait(1).to({x:1104.2,y:-19.4},0).wait(1).to({x:1111.3,y:-19.5},0).wait(1).to({x:1118.5},0).wait(1).to({x:1125.7,y:-19.6},0).wait(1).to({x:1132.8,y:-19.7},0).wait(1).to({x:1140,y:-19.8},0).wait(1).to({x:1147.2,y:-19.9},0).wait(1).to({x:1154.3},0).wait(1).to({x:1161.5,y:-20},0).wait(1).to({x:1168.7,y:-20.1},0).wait(1).to({x:1175.8,y:-20.2},0).wait(1).to({x:1183,y:-20.3},0).wait(1).to({x:1190.2},0).wait(1).to({x:1197.3,y:-20.4},0).wait(1).to({x:1204.5,y:-20.5},0).wait(1).to({x:1211.7,y:-20.6},0).wait(1).to({x:1218.8,y:-20.7},0).wait(1).to({x:1226},0).wait(1).to({x:1233.2,y:-20.8},0).wait(1).to({x:1240.3,y:-20.9},0).wait(1).to({x:1247.5,y:-21},0).wait(1).to({x:1254.6,y:-21.1},0).wait(1).to({x:1261.8},0).wait(1).to({x:1269,y:-21.2},0).wait(1).to({x:1276.2,y:-21.3},0).wait(1).to({x:1283.3,y:-21.4},0).wait(1).to({x:1290.5,y:-21.5},0).wait(1).to({x:1297.7},0).wait(1).to({x:1304.8,y:-21.6},0).wait(1).to({x:1312,y:-21.7},0).wait(1).to({x:1319.1,y:-21.8},0).wait(1).to({x:1326.3,y:-21.9},0).wait(1).to({x:1333.5},0).wait(1).to({x:1340.6,y:-22},0).wait(1).to({x:1347.8,y:-22.1},0).wait(1).to({x:1355,y:-22.2},0).wait(1).to({x:1362.1,y:-22.3},0).wait(1).to({x:1369.3},0).wait(1).to({x:1376.5,y:-22.4},0).wait(1).to({x:1383.6,y:-22.5},0).wait(1).to({x:1390.8,y:-22.6},0).wait(1).to({x:1398,y:-22.7},0).wait(1).to({x:1405.1},0).wait(1).to({x:1412.3,y:-22.8},0).wait(1).to({x:1419.5,y:-22.9},0).wait(1).to({x:1426.6,y:-23},0).wait(1).to({x:1433.8,y:-23.1},0).wait(1).to({x:1441},0).wait(1).to({x:1448.1,y:-23.2},0).wait(1).to({x:1455.3,y:-23.3},0).wait(1).to({x:1462.5,y:-23.4},0).wait(1).to({x:1469.6,y:-23.5},0).wait(1).to({x:1476.8},0).wait(1).to({x:1484,y:-23.6},0).wait(1).to({x:1491.1,y:-23.7},0).wait(1).to({x:1498.3,y:-23.8},0).wait(1).to({x:1505.5,y:-23.9},0).wait(1).to({x:1512.6},0).wait(1).to({x:1519.8,y:-24},0).wait(1).to({x:1526.9,y:-24.1},0).wait(1).to({x:1534.1,y:-24.2},0).wait(1).to({x:1541.3,y:-24.3},0).wait(1).to({x:1548.4},0).wait(1).to({x:1555.6,y:-24.4},0).wait(1).to({x:1562.8,y:-24.5},0).wait(1).to({x:1569.9,y:-24.6},0).wait(1).to({x:1577.1,y:-24.7},0).wait(1).to({x:1584.3},0).wait(1).to({x:1591.4,y:-24.8},0).wait(1).to({x:1598.6,y:-24.9},0).wait(1).to({x:1605.8,y:-25},0).wait(1).to({x:1612.9,y:-25.1},0).wait(1).to({x:1620.1},0).wait(1).to({x:1627.3,y:-25.2},0).wait(1).to({x:1634.4,y:-25.3},0).wait(1).to({x:1641.6,y:-25.4},0).wait(1).to({x:1648.8,y:-25.5},0).wait(1).to({x:1655.9},0).wait(1).to({x:1663.1,y:-25.6},0).wait(1).to({x:1670.3,y:-25.7},0).wait(1).to({x:1677.4,y:-25.8},0).wait(1).to({x:1684.6,y:-25.9},0).wait(1).to({x:1691.8},0).wait(1).to({x:1698.9,y:-26},0).wait(1).to({x:1706.1,y:-26.1},0).wait(1).to({x:1713.3,y:-26.2},0).wait(1).to({x:1720.4,y:-26.3},0).wait(1).to({x:1727.6},0).wait(1).to({x:1734.7,y:-26.4},0).wait(1).to({x:1741.9,y:-26.5},0).wait(1).to({x:1749.1,y:-26.6},0).wait(1).to({x:1756.2,y:-26.7},0).wait(1).to({x:1763.4},0).wait(1).to({x:1770.6,y:-26.8},0).wait(1).to({x:1777.7,y:-26.9},0).wait(1).to({x:1784.9,y:-27},0).wait(1).to({x:1792.1,y:-27.1},0).wait(1).to({x:1799.2},0).wait(1).to({x:1806.4,y:-27.2},0).wait(1).to({x:1813.6,y:-27.3},0).wait(1).to({x:1820.7,y:-27.4},0).wait(1).to({x:1827.9,y:-27.5},0).wait(1).to({x:1835.1},0).wait(1).to({x:1842.2,y:-27.6},0).wait(1).to({x:1849.4,y:-27.7},0).wait(1).to({x:1856.6,y:-27.8},0).wait(1).to({x:1863.7,y:-27.9},0).wait(1).to({x:1870.9},0).wait(1).to({x:1878.1,y:-28},0).wait(1).to({x:1885.2,y:-28.1},0).wait(1).to({x:1892.4,y:-28.2},0).wait(1).to({x:1899.5,y:-28.3},0).wait(1).to({x:1906.7},0).wait(1).to({x:1913.9,y:-28.4},0).wait(1).to({x:1921.1,y:-28.5},0).wait(1).to({x:1928.2,y:-28.6},0).wait(1).to({x:1935.4,y:-28.7},0).wait(1).to({x:1942.6,y:-28.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-955.2,-104.9,636.4,210);


(lib.Mata4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,74.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.2,x:0.1,y:0.1},0).wait(1).to({rotation:-0.5,x:0},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-1,x:0.1},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:-1.5,x:0},0).wait(1).to({rotation:-1.7},0).wait(1).to({rotation:-2,y:0},0).wait(1).to({rotation:-2.2,x:0.1,y:0.1},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.7,x:0},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-3.2,x:0.1},0).wait(1).to({rotation:-3.5,y:0},0).wait(1).to({rotation:-3.7,x:0,y:0.1},0).wait(1).to({rotation:-4,y:0},0).wait(1).to({rotation:-4.2,x:0.1,y:0.1},0).wait(1).to({rotation:-4.5},0).wait(1).to({rotation:-4.7,x:0},0).wait(1).to({rotation:-5,y:0},0).wait(1).to({rotation:-5.2,x:0.1},0).wait(1).to({rotation:-5.5,x:0},0).wait(1).to({rotation:-5.7,y:0.1},0).wait(1).to({rotation:-6,x:0.1,y:0},0).wait(1).to({rotation:-6.2,y:0.1},0).wait(1).to({rotation:-6.5,x:0,y:0},0).wait(1).to({rotation:-6.7,x:0.1},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-7.2},0).wait(1).to({rotation:-7.5,x:0,y:0.1},0).wait(1).to({rotation:-7.7,y:0},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-8.2,x:0.1,y:0.1},0).wait(1).to({rotation:-8.5},0).wait(1).to({rotation:-8.7,y:0},0).wait(1).to({rotation:-9,x:0,y:0.1},0).wait(1).to({rotation:-9.2,x:0.1},0).wait(1).to({rotation:-9.5,y:0},0).wait(1).to({rotation:-9.7,x:0,y:0.1},0).wait(1).to({rotation:-10,y:0},0).wait(1).to({rotation:-10.2,y:0.1},0).wait(1).to({rotation:-10.5,x:0.1,y:0},0).wait(1).to({rotation:-10.7,x:0,y:0.1},0).wait(1).to({rotation:-11,x:0.1},0).wait(1).to({rotation:-11.2,x:0,y:0},0).wait(1).to({rotation:-11.5},0).wait(1).to({rotation:-11.7,x:0.1,y:0.1},0).wait(1).to({rotation:-12,x:0,y:0},0).wait(1).to({rotation:-12.2},0).wait(1).to({rotation:-12.5,x:0.1,y:0.1},0).wait(1).to({rotation:-12.7,y:0},0).wait(1).to({rotation:-13,y:0.1},0).wait(1).to({rotation:-13.2,x:0},0).wait(1).to({rotation:-13.5,y:0},0).wait(1).to({rotation:-13.7,y:0.1},0).wait(1).to({rotation:-14,x:0.1},0).wait(1).to({rotation:-14.2,x:0,y:0},0).wait(1).to({rotation:-14.5,x:0.1},0).wait(1).to({rotation:-14.7,x:0,y:0.1},0).wait(1).to({rotation:-15,y:0},0).wait(1).to({rotation:-14.7,y:0.1},0).wait(1).to({rotation:-14.5,x:0.1,y:0},0).wait(1).to({rotation:-14.2,x:0},0).wait(1).to({rotation:-14,x:0.1,y:0.1},0).wait(1).to({rotation:-13.7,x:0},0).wait(1).to({rotation:-13.5,y:0},0).wait(1).to({rotation:-13.2,y:0.1},0).wait(1).to({rotation:-13,x:0.1},0).wait(1).to({rotation:-12.7,y:0},0).wait(1).to({rotation:-12.5,y:0.1},0).wait(1).to({rotation:-12.2,x:0,y:0},0).wait(1).to({rotation:-12},0).wait(1).to({rotation:-11.7,x:0.1,y:0.1},0).wait(1).to({rotation:-11.5,x:0,y:0},0).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-11,x:0.1,y:0.1},0).wait(1).to({rotation:-10.7,x:0},0).wait(1).to({rotation:-10.5,x:0.1,y:0},0).wait(1).to({rotation:-10.2,x:0,y:0.1},0).wait(1).to({rotation:-10,y:0},0).wait(1).to({rotation:-9.7,y:0.1},0).wait(1).to({rotation:-9.5,x:0.1,y:0},0).wait(1).to({rotation:-9.2,y:0.1},0).wait(1).to({rotation:-9,x:0},0).wait(1).to({rotation:-8.7,x:0.1,y:0},0).wait(1).to({rotation:-8.5,y:0.1},0).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-8,x:0,y:0},0).wait(1).to({rotation:-7.7},0).wait(1).to({rotation:-7.5,y:0.1},0).wait(1).to({rotation:-7.2,x:0.1,y:0},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-6.5,x:0},0).wait(1).to({rotation:-6.2,x:0.1,y:0.1},0).wait(1).to({rotation:-6,y:0},0).wait(1).to({rotation:-5.7,x:0,y:0.1},0).wait(1).to({rotation:-5.5,y:0},0).wait(1).to({rotation:-5.2,x:0.1},0).wait(1).to({rotation:-5,x:0},0).wait(1).to({rotation:-4.7,y:0.1},0).wait(1).to({rotation:-4.5,x:0.1},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4,x:0,y:0},0).wait(1).to({rotation:-3.7,y:0.1},0).wait(1).to({rotation:-3.5,x:0.1,y:0},0).wait(1).to({rotation:-3.2,y:0.1},0).wait(1).to({rotation:-3,x:0},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:-2.5,x:0.1},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2,x:0,y:0},0).wait(1).to({rotation:-1.7,y:0.1},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.2,x:0.1},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.7,x:0},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.2,x:0.1},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.5,x:0.1,y:0.1},0).wait(1).to({rotation:0.7,y:0},0).wait(1).to({rotation:1,y:0.1},0).wait(1).to({rotation:1.2,y:0},0).wait(1).to({rotation:1.5,x:0,y:0.1},0).wait(1).to({rotation:1.7,y:0},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:2.5,y:0.1},0).wait(1).to({rotation:2.7,x:0.1,y:0},0).wait(1).to({rotation:3,y:0.1},0).wait(1).to({rotation:3.2,y:0},0).wait(1).to({rotation:3.5,x:0,y:0.1},0).wait(1).to({rotation:3.7,x:0.1,y:0},0).wait(1).to({rotation:4,x:0},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:4.5,y:0.1},0).wait(1).to({rotation:4.7,x:0.1,y:0},0).wait(1).to({rotation:5,x:0,y:0.1},0).wait(1).to({rotation:5.2,y:0},0).wait(1).to({rotation:5.5,x:0.1,y:0.1},0).wait(1).to({rotation:5.7,x:0},0).wait(1).to({rotation:6,x:0.1},0).wait(1).to({rotation:6.2,x:0},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:6.7,x:0.1,y:0},0).wait(1).to({rotation:7,x:0,y:0.1},0).wait(1).to({rotation:7.2,y:0},0).wait(1).to({rotation:7.5,x:0.1},0).wait(1).to({rotation:7.7,x:0,y:0.1},0).wait(1).to({rotation:8,y:0},0).wait(1).to({rotation:8.2,x:0.1,y:0.1},0).wait(1).to({rotation:8.5,y:0},0).wait(1).to({rotation:8.7,y:0.1},0).wait(1).to({rotation:9},0).wait(1).to({rotation:9.2,y:0},0).wait(1).to({rotation:9.5,y:0.1},0).wait(1).to({rotation:9.7,x:0,y:0},0).wait(1).to({rotation:10},0).wait(1).to({rotation:10.2,y:0.1},0).wait(1).to({rotation:10.5},0).wait(1).to({rotation:10.7,x:0.1},0).wait(1).to({rotation:11,y:0},0).wait(1).to({rotation:11.2,x:0,y:0.1},0).wait(1).to({rotation:11.5,x:0.1,y:0},0).wait(1).to({rotation:11.7},0).wait(1).to({rotation:12,x:0,y:0.1},0).wait(1).to({rotation:12.2,x:0.1,y:0},0).wait(1).to({rotation:12.5},0).wait(1).to({rotation:12.7,x:0,y:0.1},0).wait(1).to({rotation:13,x:0.1,y:0},0).wait(1).to({rotation:13.2,x:0},0).wait(1).to({rotation:13.5,x:0.1,y:0.1},0).wait(1).to({rotation:13.7,x:0},0).wait(1).to({rotation:14,y:0},0).wait(1).to({rotation:14.2,x:0.1},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:14.7},0).wait(1).to({rotation:15,x:0,y:0.1},0).wait(1).to({rotation:14.7,x:0.1,y:0},0).wait(1).to({rotation:14.5,x:0},0).wait(1).to({rotation:14.2,y:0.1},0).wait(1).to({rotation:14,x:0.1},0).wait(1).to({rotation:13.7,y:0},0).wait(1).to({rotation:13.5,x:0,y:0.1},0).wait(1).to({rotation:13.2,x:0.1,y:0},0).wait(1).to({rotation:12.9,x:0},0).wait(1).to({rotation:12.7,x:0.1},0).wait(1).to({rotation:12.4,x:0},0).wait(1).to({rotation:12.2,x:0.1,y:0.1},0).wait(1).to({rotation:11.9},0).wait(1).to({rotation:11.7,x:0},0).wait(1).to({rotation:11.4,x:0.1,y:0},0).wait(1).to({rotation:11.1,x:0},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:10.6},0).wait(1).to({rotation:10.4,x:0.1},0).wait(1).to({rotation:10.1,y:0.1},0).wait(1).to({rotation:9.9,x:0},0).wait(1).to({rotation:9.6,y:0},0).wait(1).to({rotation:9.3,y:0.1},0).wait(1).to({rotation:9.1,y:0},0).wait(1).to({rotation:8.8,y:0.1},0).wait(1).to({rotation:8.6,x:0.1},0).wait(1).to({rotation:8.3,x:0},0).wait(1).to({rotation:8.1,y:0},0).wait(1).to({rotation:7.8},0).wait(1).to({rotation:7.5,y:0.1},0).wait(1).to({rotation:7.3,x:0.1,y:0},0).wait(1).to({rotation:7},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:6.5,x:0,y:0.1},0).wait(1).to({rotation:6.3},0).wait(1).to({rotation:6,x:0.1},0).wait(1).to({rotation:5.7},0).wait(1).to({rotation:5.5,x:0,y:0},0).wait(1).to({rotation:5.2,x:0.1},0).wait(1).to({rotation:5,x:0,y:0.1},0).wait(1).to({rotation:4.7,x:0.1,y:0},0).wait(1).to({rotation:4.5,x:0,y:0.1},0).wait(1).to({rotation:4.2,y:0},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:3.7,x:0.1,y:0.1},0).wait(1).to({rotation:3.4,x:0,y:0},0).wait(1).to({rotation:3.2,x:0.1},0).wait(1).to({rotation:2.9,y:0.1},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:2.4,x:0,y:0},0).wait(1).to({rotation:2.1,y:0.1},0).wait(1).to({rotation:1.9,y:0},0).wait(1).to({rotation:1.6,y:0.1},0).wait(1).to({rotation:1.4,x:0.1},0).wait(1).to({rotation:1.1},0).wait(1).to({rotation:0.9,y:0},0).wait(1).to({rotation:0.6},0).wait(1).to({rotation:0.3,y:0.1},0).wait(1).to({rotation:0.1,x:0,y:0},0).wait(1).to({rotation:-0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-54.5,149.1,109);


(lib.Mata3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,113.8,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.5},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.3},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-6.3},0).wait(1).to({rotation:-6.6},0).wait(1).to({rotation:-6.8},0).wait(1).to({rotation:-7.1},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-7.9},0).wait(1).to({rotation:-8.1},0).wait(1).to({rotation:-8.4},0).wait(1).to({rotation:-8.6},0).wait(1).to({rotation:-8.9},0).wait(1).to({rotation:-9.1},0).wait(1).to({rotation:-9.4},0).wait(1).to({rotation:-9.6},0).wait(1).to({rotation:-9.9},0).wait(1).to({rotation:-10.1},0).wait(1).to({rotation:-10.4},0).wait(1).to({rotation:-10.6},0).wait(1).to({rotation:-10.9},0).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-11.4},0).wait(1).to({rotation:-11.7},0).wait(1).to({rotation:-11.9},0).wait(1).to({rotation:-12.2},0).wait(1).to({rotation:-12.4},0).wait(1).to({rotation:-12.7},0).wait(1).to({rotation:-12.9},0).wait(1).to({rotation:-13.2},0).wait(1).to({rotation:-13.4},0).wait(1).to({rotation:-13.7},0).wait(1).to({rotation:-13.9},0).wait(1).to({rotation:-14.2},0).wait(1).to({rotation:-14.4},0).wait(1).to({rotation:-14.7},0).wait(1).to({rotation:-15},0).wait(1).to({rotation:-14.7},0).wait(1).to({rotation:-14.5},0).wait(1).to({rotation:-14.3},0).wait(1).to({rotation:-14.1},0).wait(1).to({rotation:-13.8},0).wait(1).to({rotation:-13.6},0).wait(1).to({rotation:-13.4},0).wait(1).to({rotation:-13.2},0).wait(1).to({rotation:-12.9},0).wait(1).to({rotation:-12.7},0).wait(1).to({rotation:-12.5},0).wait(1).to({rotation:-12.3},0).wait(1).to({rotation:-12.1},0).wait(1).to({rotation:-11.8},0).wait(1).to({rotation:-11.6},0).wait(1).to({rotation:-11.4},0).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-10.9},0).wait(1).to({rotation:-10.7},0).wait(1).to({rotation:-10.5},0).wait(1).to({rotation:-10.3},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:-9.8},0).wait(1).to({rotation:-9.6},0).wait(1).to({rotation:-9.4},0).wait(1).to({rotation:-9.1},0).wait(1).to({rotation:-8.9},0).wait(1).to({rotation:-8.7},0).wait(1).to({rotation:-8.5},0).wait(1).to({rotation:-8.3},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-7.8},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-7.1},0).wait(1).to({rotation:-6.9},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-4.5},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-2.9},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:-2.4},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.5},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0.9},0).wait(1).to({rotation:1.1},0).wait(1).to({rotation:1.3},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.8},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:2.5},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:3.6},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:4},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:4.5},0).wait(1).to({rotation:4.7},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:5.1},0).wait(1).to({rotation:5.4},0).wait(1).to({rotation:5.6},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:6},0).wait(1).to({rotation:6.3},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:6.7},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:7.2},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:7.6},0).wait(1).to({rotation:7.8},0).wait(1).to({rotation:8},0).wait(1).to({rotation:8.3},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:8.9},0).wait(1).to({rotation:9.2},0).wait(1).to({rotation:9.4},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:9.8},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:10.3},0).wait(1).to({rotation:10.5},0).wait(1).to({rotation:10.7},0).wait(1).to({rotation:11},0).wait(1).to({rotation:11.2},0).wait(1).to({rotation:11.4},0).wait(1).to({rotation:11.6},0).wait(1).to({rotation:11.8},0).wait(1).to({rotation:11.6},0).wait(1).to({rotation:11.4},0).wait(1).to({rotation:11.3},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:10.7},0).wait(1).to({rotation:10.5},0).wait(1).to({rotation:10.3},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:9.9},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:9.5},0).wait(1).to({rotation:9.3},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:8.9},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:8.3},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:7.9},0).wait(1).to({rotation:7.7},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:7.1},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:6.7},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:6.3},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:5.9},0).wait(1).to({rotation:5.7},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:5.3},0).wait(1).to({rotation:5.1},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:4.7},0).wait(1).to({rotation:4.5},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:3.6},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:3.2},0).wait(1).to({rotation:3},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1.8},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:1},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:0.6},0).wait(1).to({rotation:0.4},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.7,-94.4,227.6,189);


(lib.Mata2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,122.7,111.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.3,x:0.1},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-1,x:0},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.8,x:0.1},0).wait(1).to({rotation:-2,x:0},0).wait(1).to({rotation:-2.3,x:0.1},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.8,x:0},0).wait(1).to({rotation:-3.1,x:0.1},0).wait(1).to({rotation:-3.3,x:0},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.8,x:0.1},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.3},0).wait(1).to({rotation:-4.6,x:0},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5.6,x:0.1},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-6.1,x:0},0).wait(1).to({rotation:-6.4,x:0.1},0).wait(1).to({rotation:-6.6},0).wait(1).to({rotation:-6.9,x:0},0).wait(1).to({rotation:-7.1,x:0.1},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-7.6,x:0},0).wait(1).to({rotation:-7.9,x:0.1},0).wait(1).to({rotation:-8.1},0).wait(1).to({rotation:-8.4,x:0},0).wait(1).to({rotation:-8.6},0).wait(1).to({rotation:-8.9},0).wait(1).to({rotation:-9.2,x:0.1},0).wait(1).to({rotation:-9.4,x:0},0).wait(1).to({rotation:-9.7},0).wait(1).to({rotation:-9.9},0).wait(1).to({rotation:-10.2,x:0.1},0).wait(1).to({rotation:-10.4,x:0},0).wait(1).to({rotation:-10.7},0).wait(1).to({rotation:-10.9},0).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-11.4},0).wait(1).to({rotation:-11.7,x:0.1},0).wait(1).to({rotation:-11.9,x:0},0).wait(1).to({rotation:-12.2,x:0.1},0).wait(1).to({rotation:-12.5},0).wait(1).to({rotation:-12.7},0).wait(1).to({rotation:-13,x:0},0).wait(1).to({rotation:-13.2,x:0.1},0).wait(1).to({rotation:-13.5,x:0},0).wait(1).to({rotation:-13.7,x:0.1},0).wait(1).to({rotation:-14,x:0},0).wait(1).to({rotation:-14.2,x:0.1},0).wait(1).to({rotation:-14.5,x:0},0).wait(1).to({rotation:-14.7,x:0.1},0).wait(1).to({rotation:-15},0).wait(1).to({rotation:-14.7},0).wait(1).to({rotation:-14.3},0).wait(1).to({rotation:-14},0).wait(1).to({rotation:-13.7},0).wait(1).to({rotation:-13.3},0).wait(1).to({rotation:-13},0).wait(1).to({rotation:-12.7,x:0},0).wait(1).to({rotation:-12.3,x:0.1},0).wait(1).to({rotation:-12,x:0},0).wait(1).to({rotation:-11.6},0).wait(1).to({rotation:-11.3},0).wait(1).to({rotation:-11,x:0.1},0).wait(1).to({rotation:-10.6},0).wait(1).to({rotation:-10.3,x:0},0).wait(1).to({rotation:-10,x:0.1},0).wait(1).to({rotation:-9.6,x:0},0).wait(1).to({rotation:-9.3,x:0.1},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-8.6},0).wait(1).to({rotation:-8.3,x:0},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-7.3},0).wait(1).to({rotation:-7,x:0.1},0).wait(1).to({rotation:-6.6},0).wait(1).to({rotation:-6.3},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.3,x:0},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-2.9,x:0.1},0).wait(1).to({rotation:-2.6,x:0},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-1.9,x:0.1},0).wait(1).to({rotation:-1.6,x:0},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-0.9,x:0.1},0).wait(1).to({rotation:-0.6,x:0},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:0.1},0).wait(1).to({rotation:0.4},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:1.1,x:0.1},0).wait(1).to({rotation:1.4,x:0},0).wait(1).to({rotation:1.7},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:4.4},0).wait(1).to({rotation:4.8},0).wait(1).to({rotation:5.1,x:0.1},0).wait(1).to({rotation:5.4},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:6.4},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:7.1,x:0},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:7.8},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:8.4},0).wait(1).to({rotation:8.8,x:0.1},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:9.4},0).wait(1).to({rotation:9.8,x:0},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:10.5,x:0.1},0).wait(1).to({rotation:10.8},0).wait(1).to({rotation:11.1,x:0},0).wait(1).to({rotation:11.5},0).wait(1).to({rotation:11.8,x:0.1},0).wait(1).to({rotation:12.1,x:0},0).wait(1).to({rotation:12.5},0).wait(1).to({rotation:12.8},0).wait(1).to({rotation:13.1,x:0.1},0).wait(1).to({rotation:13.5},0).wait(1).to({rotation:13.8,x:0},0).wait(1).to({rotation:14.1,x:0.1},0).wait(1).to({rotation:14.5,x:0},0).wait(1).to({rotation:14.8},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:15.5,x:0.1},0).wait(1).to({rotation:15.8,x:0},0).wait(1).to({rotation:16.1},0).wait(1).to({rotation:16.5},0).wait(1).to({rotation:16.8,x:0.1},0).wait(1).to({rotation:17.2,x:0},0).wait(1).to({rotation:17.5,x:0.1},0).wait(1).to({rotation:17.8,x:0},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:18.8},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:19.8},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:20.8,x:0.1},0).wait(1).to({rotation:21.2,x:0},0).wait(1).to({rotation:21.5},0).wait(1).to({rotation:21.8,x:0.1},0).wait(1).to({rotation:22.2},0).wait(1).to({rotation:22.5,x:0},0).wait(1).to({rotation:22.8},0).wait(1).to({rotation:23.2,x:0.1},0).wait(1).to({rotation:23.5,x:0},0).wait(1).to({rotation:23.8},0).wait(1).to({rotation:24.2,x:0.1},0).wait(1).to({rotation:24.5,x:0},0).wait(1).to({rotation:24.9},0).wait(1).to({rotation:25.2,x:0.1},0).wait(1).to({rotation:24.8,x:0},0).wait(1).to({rotation:24.3},0).wait(1).to({rotation:23.9},0).wait(1).to({rotation:23.5},0).wait(1).to({rotation:23.1},0).wait(1).to({rotation:22.7},0).wait(1).to({rotation:22.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:21.4},0).wait(1).to({rotation:21},0).wait(1).to({rotation:20.6,x:0.1},0).wait(1).to({rotation:20.2,x:0},0).wait(1).to({rotation:19.7},0).wait(1).to({rotation:19.3,x:0.1},0).wait(1).to({rotation:18.9,x:0},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:18.1},0).wait(1).to({rotation:17.6},0).wait(1).to({rotation:17.2},0).wait(1).to({rotation:16.8},0).wait(1).to({rotation:16.4},0).wait(1).to({rotation:16},0).wait(1).to({rotation:15.5},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:14.7,x:0.1},0).wait(1).to({rotation:14.3,x:0},0).wait(1).to({rotation:13.9,x:0.1},0).wait(1).to({rotation:13.4,x:0},0).wait(1).to({rotation:13},0).wait(1).to({rotation:12.6},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:11.8,x:0.1},0).wait(1).to({rotation:11.3,x:0},0).wait(1).to({rotation:10.9,x:0.1},0).wait(1).to({rotation:10.5,x:0},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:9.2},0).wait(1).to({rotation:8.8},0).wait(1).to({rotation:8.4},0).wait(1).to({rotation:8,y:0},0).wait(1).to({rotation:7.6,x:0.1,y:0.1},0).wait(1).to({rotation:7.1},0).wait(1).to({rotation:6.7,x:0},0).wait(1).to({rotation:6.3},0).wait(1).to({rotation:5.9},0).wait(1).to({rotation:5.5,x:0.1},0).wait(1).to({rotation:5,x:0},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:3.4,x:0.1},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:2.5},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:1.7},0).wait(1).to({rotation:1.3,x:0},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:0.4,x:0.1},0).wait(1).to({rotation:0,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-111.1,245.6,222.4);


(lib.Mata1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,202.7,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:202.6,rotation:-0.2},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-1,x:0},0).wait(1).to({rotation:-1.2,x:0.1},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1.6,x:0},0).wait(1).to({rotation:-1.8,x:0.1},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:-2.9,x:0},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-3.9,x:0.1},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.3},0).wait(1).to({rotation:-4.5},0).wait(1).to({rotation:-4.7,x:0},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-5.1,x:0.1},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.9,x:0},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-6.4},0).wait(1).to({rotation:-6.6,x:0.1},0).wait(1).to({rotation:-6.8,x:0},0).wait(1).to({rotation:-7,x:0.1},0).wait(1).to({rotation:-7.2},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-7.8,x:0},0).wait(1).to({rotation:-8},0).wait(1).to({rotation:-8.2,x:0.1},0).wait(1).to({rotation:-8.4},0).wait(1).to({rotation:-8.6,x:0},0).wait(1).to({rotation:-8.8,x:0.1},0).wait(1).to({rotation:-9,x:0},0).wait(1).to({rotation:-9.2},0).wait(1).to({rotation:-9.4,x:0.1},0).wait(1).to({rotation:-9.6},0).wait(1).to({rotation:-9.8},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:-10.2},0).wait(1).to({rotation:-10.3},0).wait(1).to({rotation:-10.5},0).wait(1).to({rotation:-10.7},0).wait(1).to({rotation:-10.9,x:0},0).wait(1).to({rotation:-11.1,x:0.1},0).wait(1).to({rotation:-11.3,y:0.2},0).wait(1).to({rotation:-11.5,y:0.1},0).wait(1).to({rotation:-11.3},0).wait(1).to({rotation:-11.2,x:0},0).wait(1).to({rotation:-11,x:0.1},0).wait(1).to({rotation:-10.8,x:0},0).wait(1).to({rotation:-10.6,x:0.1},0).wait(1).to({rotation:-10.4},0).wait(1).to({rotation:-10.2,x:0},0).wait(1).to({rotation:-10.1,x:0.1},0).wait(1).to({rotation:-9.9},0).wait(1).to({rotation:-9.7,x:0},0).wait(1).to({rotation:-9.5,y:0.2},0).wait(1).to({rotation:-9.3,y:0.1},0).wait(1).to({rotation:-9.2},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-8.8},0).wait(1).to({rotation:-8.6},0).wait(1).to({rotation:-8.4},0).wait(1).to({rotation:-8.3,x:0.1},0).wait(1).to({rotation:-8.1},0).wait(1).to({rotation:-7.9},0).wait(1).to({rotation:-7.7,x:0},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-7.3},0).wait(1).to({rotation:-7.2},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-6.8},0).wait(1).to({rotation:-6.6,y:0.2},0).wait(1).to({rotation:-6.4,y:0.1},0).wait(1).to({rotation:-6.3,x:0.1},0).wait(1).to({rotation:-6.1,x:0},0).wait(1).to({rotation:-5.9,x:0.1},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.5,x:0},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-5,x:0.1},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.4},0).wait(1).to({rotation:-4.3,x:0},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-3.9,x:0.1},0).wait(1).to({rotation:-3.7,x:0},0).wait(1).to({rotation:-3.5},0).wait(1).to({rotation:-3.4,x:0.1},0).wait(1).to({rotation:-3.2},0).wait(1).to({rotation:-3,x:0},0).wait(1).to({rotation:-2.8,x:0.1},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.3,x:0},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-1.9,x:0.1},0).wait(1).to({rotation:-1.7,x:0},0).wait(1).to({rotation:-1.5,x:0.1},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.6,x:0},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:0.1,x:0.1},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.4},0).wait(1).to({rotation:0.6},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1,x:0},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.5,x:0.1},0).wait(1).to({rotation:1.7,x:0},0).wait(1).to({rotation:1.9,x:0.1},0).wait(1).to({rotation:2.1,x:0},0).wait(1).to({rotation:2.3,x:0.1},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:2.6,x:0},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:3},0).wait(1).to({rotation:3.2,x:0.1},0).wait(1).to({rotation:3.3,x:0},0).wait(1).to({rotation:3.5},0).wait(1).to({rotation:3.7},0).wait(1).to({rotation:3.9,x:0.1},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:4.4,x:0},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:4.8},0).wait(1).to({rotation:5,x:0.1},0).wait(1).to({rotation:5.2},0).wait(1).to({rotation:5.3,x:0},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:5.7,x:0.1},0).wait(1).to({rotation:5.9},0).wait(1).to({rotation:6.1,x:0},0).wait(1).to({rotation:6.2,x:0.1},0).wait(1).to({rotation:6.4},0).wait(1).to({rotation:6.6},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:7},0).wait(1).to({rotation:7.2,x:0},0).wait(1).to({rotation:7.3,x:0.1},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:7.7,x:0},0).wait(1).to({rotation:7.9},0).wait(1).to({rotation:8.1,x:0.1},0).wait(1).to({rotation:8.2,x:0},0).wait(1).to({rotation:8.4},0).wait(1).to({rotation:8.6},0).wait(1).to({rotation:8.8},0).wait(1).to({rotation:9},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:9.3},0).wait(1).to({rotation:9.5},0).wait(1).to({rotation:9.7,x:0.1},0).wait(1).to({rotation:9.9},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:10.2},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:9.9,x:0},0).wait(1).to({rotation:9.7,x:0.1},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:9.4,x:0},0).wait(1).to({rotation:9.2,x:0.1},0).wait(1).to({rotation:9},0).wait(1).to({rotation:8.9},0).wait(1).to({rotation:8.7,x:0},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:8.4},0).wait(1).to({rotation:8.2,x:0.1},0).wait(1).to({rotation:8,x:0},0).wait(1).to({rotation:7.8},0).wait(1).to({rotation:7.7,x:0.1},0).wait(1).to({rotation:7.5,x:0},0).wait(1).to({rotation:7.3,x:0.1},0).wait(1).to({rotation:7.2,x:0},0).wait(1).to({rotation:7},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:6.7,x:0.1},0).wait(1).to({rotation:6.5,x:0},0).wait(1).to({rotation:6.3},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:6,x:0.1},0).wait(1).to({rotation:5.8,x:0},0).wait(1).to({rotation:5.6},0).wait(1).to({rotation:5.5,x:0.1},0).wait(1).to({rotation:5.3,x:0},0).wait(1).to({rotation:5.1,x:0.1},0).wait(1).to({rotation:4.9,x:0},0).wait(1).to({rotation:4.8,x:0.1},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:4.4,x:0},0).wait(1).to({rotation:4.3,x:0.1},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:3.9,x:0},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:3.6,x:0.1},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:3.2},0).wait(1).to({rotation:3.1,x:0},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:2,x:0.1},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1.7,x:0},0).wait(1).to({rotation:1.5,x:0.1},0).wait(1).to({rotation:1.4,x:0},0).wait(1).to({rotation:1.2,x:0.1},0).wait(1).to({rotation:1,x:0},0).wait(1).to({rotation:0.9,x:0.1},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0.5},0).wait(1).to({rotation:0.3,x:0},0).wait(1).to({rotation:0.2,x:0.1},0).wait(1).to({rotation:0,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.6,-175.6,405.5,351.4);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	mask_17.graphics.p("EiWyA5qMAAAhzTMEtlAAAMAAABzTg");
	mask_17.setTransform(1007.8,369);

	// Capa_3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(1161.4,369,1,1,0,0,0,811.5,369);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.9,525.8,1,1,0,0,0,81.2,13.5);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(231.9,545.2,1,1,0,0,0,30.9,12.3);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(979.5,152.5,1,1,0,0,0,63.1,14.5);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1045.3,162.7,1,1,0,0,0,32.2,16);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1573.8,491.2,1,1,0,0,0,58.2,13.8);

	this.instance_6 = new lib.ClipGroup_6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1638.5,498.8,1,1,0,0,0,28.9,13.2);

	this.instance_7 = new lib.ClipGroup_7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(267.4,199.4,1,1,0,0,0,267.4,52.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_17;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(42.7,0,1930.3,738), null);


(lib.Escena_1_Personaje = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Personaje
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-3.9,1.3,3.9,-1.2).s().p("AgtgGIBOgaIANAoIhOAZg");
	this.shape.setTransform(1025.7,481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-19,0,19.1,0).s().p("AB4CgQhCgOgThjQgTgXgVgXQgugrgWAEIg5ANQg6AOgBACIACgEIAbgxQAcgyAJgFIAXgZQAhgYAzAGIAEABIApAXQAuAgAVAuIAfAxQAgAyADANIAUAXQAQAggQAtQgTAIgUAAQgMAAgLgCg");
	this.shape_1.setTransform(1012.8,470.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-2.4,0,2.5,0).s().p("AgYAiIAAhDIAxAAIAABDg");
	this.shape_2.setTransform(1009.5,511.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-11.7,0,11.7,0).s().p("AgzA+Ig6gMQgNgVAKg0IAMgwIDRASQAKAhgCAeQgCAOgDAJQgNAdgoAJIgmACQgNgBg7gKg");
	this.shape_3.setTransform(1014.8,511.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-2.4,0,2.5,0).s().p("AgYAwIAAhfIAxAAIAABfg");
	this.shape_4.setTransform(1009.2,497.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-13.5,0,13.6,0).s().p("Ah+A4QgOgSAIg4IAKg3QADADB5AIIB5AHQAcAeggA0IgkAvg");
	this.shape_5.setTransform(1017.5,498.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-2.7,0,2.8,0).s().p("AgbA3IAAhtIA3AAIAABtg");
	this.shape_6.setTransform(1009.1,483.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-13.9,0,14,0).s().p("AgMBRIhvgLQgYgtANg3IASgvQABgNBpABQA3ABBDAEIACAAQAhAMgJBOQgFAogMAqIgDACIgIAAQgcAAhegJg");
	this.shape_7.setTransform(1017.6,484.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#553600").ss(0.5).p("AARAUQCCgCAEADIgEgDQAGACgFgEQgJgKgxgfQgQgIgRgHQgigNgIAJQgPAGgQACQgggJgRgBQgNACgOADQgcAHgCAFQgQAMgRALQghAXAAABQBgAHAOgHIAgAFIAEAAIAHACQAIADAKAAQAaACAIgKg");
	this.shape_8.setTransform(808.6,406);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-17,0,17.1,0).s().p("AABAmQgJAAgIgDIgHgCIgEAAIgggFQgOAHhggHQAAgBAigYIAhgWQACgFAcgHIAbgFQAQABAfAJQAQgCAQgGQAIgJAjANQARAHAPAIQAxAfAJAKQAFAEgFgCIADADQgDgDiDACQgHAJgUAAIgIgBg");
	this.shape_9.setTransform(806.7,405);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#7F3700").ss(0.5).p("AingxIAFASIApAqIAcASQAfASARABIAUADQAWACAFgCIAZABQAbgCALgIQAzgWALgUQAcgVAHgLIAFgQQgyADgNgBQgIgDgRAAQgigBgrAMIgagGQgbgKgVAFgAiqgxIADAA");
	this.shape_10.setTransform(806.6,412.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-17,0,16.8,0).s().p("AgZAzIgTgEQgRgBgfgSIgdgRIgpgrIgFgSIBgABQAUgFAbAKIAaAGQArgNAiABQARAAAJAEQAMABAzgDIgGAQQgHALgcAVQgLATgzAXQgLAIgaACIgagBIgHABIgUgBg");
	this.shape_11.setTransform(806.6,412.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F2B16B","#E29C4B","#D58B31","#D08427"],[0,0.373,0.761,0.992],0,-2.5,0,2.6).s().p("AgVAUQgJgGgCgBIgBAAQgDgCgGgNIgHgNIgQACQgEgDADgEIAEgDQALgEACAGIAMAXQAAACAIAGIAHAGQAIAGATgBQAOgBAKgJQAFgFADgEQAGgHACgHIADgJIACgCQAFgEAIAFQAJADgHAGIgQgBQgHARgJAJIgHAGQgEAEgLACIgLABIAAAAIgCABQgKAAgJgGg");
	this.shape_12.setTransform(806.4,378.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F2B16B","#E29C4B","#D58B31","#D08427"],[0,0.373,0.761,0.992],0,-15.7,0,15.8).s().p("AgbCUIgNgMQgDABgLAAIgKAAQgPABgIgNIgEgOQgJggAHgYIAIgSQAJgMALADQAFABAEADIAXiPQAAgEAFgNIAGgNQAKgUARAGQAJADAGAGQANAHANBXQAHArAEApQAHgHAGACQAEABACACQAZAPgFArQgDAVgHASQgIAMgTAAIgSgDQgHAMgRAFIgQAEIgFAAQgKAAgNgJg");
	this.shape_13.setTransform(806.4,365.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A92D0F").s().p("AAmgBIACAAIhBACIgNABIBMgDg");
	this.shape_14.setTransform(790.3,946.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AjeCOIgDAAQgxgGgqgWIghgWQgcgOgWgjIgSghQgUgnAGg+IALg3QAJA1ApAvQAVAXATANQAPANArANQAWAHASAEQAoAIA5gCQAjACBtgHQAyAACwgYQBTgHA0gfIAigeIAQgWIAKgNQAIAggNAuQgGAWgJARQgIAZgVARQgLAIgJAEQgMARhLAVIhJATQgNAHhfAGIhcAEIheABQhQAAgxgFg");
	this.shape_15.setTransform(769.5,971.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8AE28").s().p("ACHA0IiCgqIijAkQgagEADgLIAIgLIB5gUIh6gdQgLgNAJgFIALgCICjAjICcgrQATgDAGAHQAEAEgBAEQADAEgoAOIhfAbQAIAAAuASIAsATQAQAGgCAHQAAAEgEACQgCACgEAAQgGAAgLgGg");
	this.shape_16.setTransform(770.1,907.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8AE28").s().p("ACXA1IgTgGQgQgHg3gSIg0gRQgEAFiwAfQgXgBAEgKIAIgJQAHgFBDgNIBAgMIh8gWQgLgEABgHIADgGQADgFAKABIAKABQAIgCAuAIIAtAJIA/AQIClggQATAEgEAJQgBAFgGAEIh4AYIBIAbQAeAKAGAJQADAEgDADQAAAGgLAAIgJAAg");
	this.shape_17.setTransform(770.3,926.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#50231E").s().p("AgXATQgKgIAAgLQAAgKAKgIQAKgIANAAQAOAAAKAIQAKAIAAAKQAAALgKAIQgKAIgOAAQgNAAgKgIg");
	this.shape_18.setTransform(788.1,912.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#50231E").s().p("AgXATQgKgIAAgLQAAgKAKgIQAKgHANgBQAOABAKAHQAKAIAAAKQAAALgKAIQgJAHgPAAQgNAAgKgHg");
	this.shape_19.setTransform(788.8,922.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#50231E").s().p("AgXATQgKgIAAgLQAAgKAKgIQAKgHANAAQAOAAAKAHQAKAIAAAKQAAALgKAIQgKAHgOABQgNgBgKgHg");
	this.shape_20.setTransform(788.5,931.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#50231E").s().p("AgXASQgKgHAAgLQAAgKAKgHQAKgJANAAQAOAAAKAJQAKAHAAAKQAAALgKAHQgKAJgOAAQgNAAgKgJg");
	this.shape_21.setTransform(751.2,903.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#50231E").s().p("AgXATQgKgIAAgLQAAgKAKgIQAKgIANABQAOgBAKAIQAKAIAAAKQAAALgKAIQgKAHgOAAQgNAAgKgHg");
	this.shape_22.setTransform(751.2,911.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#50231E").s().p("AgXATQgKgIAAgLQAAgKAKgIQAKgIANAAQAOAAAKAIQAKAIAAAKQAAALgKAIQgKAIgOAAQgNAAgKgIg");
	this.shape_23.setTransform(750.6,921.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#50231E").s().p("AgXATQgKgIAAgLQAAgKAKgIQAJgIAOABQAOgBAKAIQAKAIAAAKQAAALgKAIQgKAHgOABQgNgBgKgHg");
	this.shape_24.setTransform(750,930.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#50231E").s().p("AgXATQgKgIAAgLQAAgKAKgHQAKgJANABQAOgBAKAJQAKAHAAAKQAAALgKAIQgKAHgOABQgNgBgKgHg");
	this.shape_25.setTransform(787.7,903);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AA2D0F").s().p("AguD+IgbgGQgxgDgRgnIgIgmIAMkbQALgLgCgXIgFgVIgogLQADgOAagSIAagOQA3gfBCADQAiABAXAIQAyAEAjAjQASARAHAQQgSgHgRAIIgNAIQgLAIAAAUQAAAKADAIIACEeQAEAqgTAWQgKALgLADQgVAMg6gDQgJADgOAAQgMAAgOgDg");
	this.shape_26.setTransform(770.6,915.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AA2D0F").s().p("AiSEnQgmgCgpgFQhTgLgPgUQgagMgcgWQg5gqgIgtQgJgmgDgxQgFhhAjg3QAAgIAFgWQAKgrAXhDIABgDIAPgpIgPAqIANAgQAJAlgWAWIgRAzQgQA1AIAGIgOAqIgGBAQgBBIAbAhIAmAlQAtAoAgAMIAwAMQBAAMBQgDIChgDQCjgRAOgEIBAgYQBFgcAWgYQANgSAKgbQAWg2gKgxIAQgfIAGAiQAFArgHAlQgYB4iIAWQgSAHgcAHQg4APgyACQiwALhIAAQgZAAgMgBg");
	this.shape_27.setTransform(769.4,958.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D24024").s().p("AmsE3QgEgXANgoIAYhLQADgIgBgKQAAgXgNgPQgDgOAAgRQgCghALgPQANg5ARg+QAih8ASgXQgKgIgDgQQgHgiAfglIALgBQAOABAQARIAfARQAiATAQAGQAGADAFAAQARAAAaAMIgWFCIABAQQACATAJARQAcAzBTgFIA7AAQA+gKAGgsIgFk2QgFgPAEgQQAGgfAmgBIAqgDQAsgGAGgPIAHgDQAIgCAFAAIAPAMIgYBHQgFAhAUAyIAZBBQAXBIgKAnIBMBpQBKBvgNAeQgMgNgUgPQgngdglgDQgagEglgCQhJgFgyAFQjnAChEgFIhNgDQgeACglAMQhLAZgmA4QgEgDgCgMg");
	this.shape_28.setTransform(771.5,923.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A92D0F").s().p("AkwB9QgPgFgMgHQAFAFglgWQgogZgbg1IgUgvIAVgQQAcg1BVgdQAqgOAlgEIDnAIQAuAMCJgQIBGAHIgTABIgQABIAQgBIAYgBQBtgDA2AfQAaAQAFARQAJAHgIAnQgFATgGARQgGAOg8A2QgSAQgwAJIgsAGQgrAQiBAGQgdAJh7ACQgyAFgsAAQhWAAg8gVg");
	this.shape_29.setTransform(853.5,958.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AjnCJIgDAAQgygFgsgWIgigVQgcgOgYgiIgTgfQgVglAHg9IALg0QAJAyArAuQAWAWATANQAQAMAtANQAWAGAUAEQApAIA7gCQAkACBxgHQA0ABC2gYQBXgHA1geQAbgPAJgNQAJgOASgUQAIAfgNAsQgHAVgIAQQgJAYgWARIgUALQgNARhPAVIhLARQgNAHhjAGIhfADIhiABIgQAAQhHAAgvgEg");
	this.shape_30.setTransform(852.5,969.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8AE28").s().p("ACWA2IgKgEIiGgoIiqAiQgagDACgLIAIgKIB/gUIh/gcQgLgMAJgFQAEgCAHAAICpAiIChgpQAVgDAGAGQAEADgBAEQADAFgpAOIhjAaQANgBBYAkQARAGgCAHQAAADgEACQgCACgEAAIgIgCg");
	this.shape_31.setTransform(853.1,907.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8AE28").s().p("ACdAzIgTgGIhLgYIg1gQQgFAFi2AeQgYgCAEgJIAIgJQAIgEBFgNIBDgLIiBgVQgLgEABgHIADgGQADgFALABIAKABQAMgCBbAQIBBAQICqgfQAVAEgEAJQgCAEgGAEIh8AYIBLAZQAeAKAHAIQADAEgDADQgBAGgKAAIgKAAg");
	this.shape_32.setTransform(853.2,925.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#50231E").s().p("AgYASQgKgHAAgLQAAgKAKgHQALgIANAAQAPAAAKAIQAKAHAAAKQAAALgKAHQgKAHgPAAQgNAAgLgHg");
	this.shape_33.setTransform(871.7,912.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#50231E").s().p("AgYASQgKgHAAgLQAAgJAKgIQALgHANAAQAPAAAKAHQAKAIAAAJQAAALgKAHQgKAIgPAAQgNAAgLgIg");
	this.shape_34.setTransform(872.4,921.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#50231E").s().p("AgYASQgKgHAAgLQAAgJAKgIQAKgHAOAAQAOAAALAHQAKAIAAAJQAAALgKAHQgLAIgOAAQgOAAgKgIg");
	this.shape_35.setTransform(872.1,930.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#50231E").s().p("AgYASQgKgHAAgLQAAgKAKgHQAKgIAOAAQAOAAALAIQAKAHAAAKQAAALgKAHQgLAHgOAAQgOAAgKgHg");
	this.shape_36.setTransform(833.4,903.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#50231E").s().p("AgYASQgKgHAAgLQAAgJAKgIQAKgHAOgBQAOABALAHQAKAIAAAJQAAALgKAHQgLAIgOAAQgOAAgKgIg");
	this.shape_37.setTransform(833.4,911.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#50231E").s().p("AgYASQgKgHAAgLQAAgKAKgHQALgIANAAQAPAAAKAIQAKAHAAAKQAAALgKAHQgKAIgPAAQgNAAgLgIg");
	this.shape_38.setTransform(832.8,921.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#50231E").s().p("AgYASQgKgHAAgLQAAgKAKgHQAKgIAOAAQAOAAALAIQAKAHAAAKQAAALgKAHQgLAHgOAAQgOAAgKgHg");
	this.shape_39.setTransform(832.2,929.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#50231E").s().p("AgYASQgKgIAAgKQAAgKAKgHQAKgIAOAAQAOAAALAIQAKAHAAAKQAAAKgKAIQgLAHgOAAQgOAAgKgHg");
	this.shape_40.setTransform(871.3,903.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AA2D0F").s().p("AgwD1IgcgGQgygDgSgmIgIgkIAMkRQALgKgCgXIgFgUIgqgKQAEgOAbgRQAOgIANgGQA4geBFADQAkABAXAIQA1AEAkAhQASARAIAPQgTgGgSAHIgOAIQgMAIABATQABAJACAIIADEUQAEAogVAVIgVAOQgOAHgjABIghAAQgKADgOAAQgMAAgPgCg");
	this.shape_41.setTransform(853.6,914.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AA2D0F").s().p("AiXEcQgogBgqgGQhWgKgPgUQgcgLgdgVQg6gogJgsQgKglgCgvQgFhdAkg1QAAgIAFgVQAKgpAYhBIABgDQAahDgKAcIgQAoIAOAgQAJAjgXAVIgSAxQgQAzAJAFIgHAQQgHASgBAHIgHA+QgBBFAdAgIAnAkQAuAmAhALIAyAMQBDALBTgDICngDQCpgQAOgEIBDgXQBHgbAXgXQANgRALgaQAXg0gKgvIAQgeIAGAhQAFApgHAkQgZBziNAVQgTAHgdAHQg5APg0ACQi2AKhLAAQgaAAgNgBg");
	this.shape_42.setTransform(852.3,957);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D24024").s().p("Am8ErQgEgVAOgnIAZhIQACgHAAgLQAAgVgOgQQgDgNAAgQQgCggAMgPQANg2ASg8QAih3ATgWQgKgIgDgQQgHgfAgglIALgBQAOACARAPIAgARQAkATARAFIAKADQASAAAbAMIgWE1IAAAQQADATAJAPQAdAxBWgFIA+AAQA/gJAGgrIgEkpQgFgPADgPQAHgfAnAAIAsgDQAtgGAGgPIAIgCQAJgDAEAAIAQANIgZBDQgFAgAUAwIAaA/QAYBFgKAmIBPBlQBNBrgOAdQgNgNgUgOQgpgcglgDQgcgEgmgCQhMgFg0AFQjvAChHgFIhQgCQgfABgmAMQhOAYgnA1QgFgDgCgLg");
	this.shape_43.setTransform(854.5,922.6);

	this.instance = new lib.Manga();
	this.instance.parent = this;
	this.instance.setTransform(745.2,520,1,1,0,0,0,15,18.2);

	this.instance_1 = new lib.Manga_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(896.9,504,1,1,0,0,0,6.7,21.4);

	this.instance_2 = new lib.Camisa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(818.6,560,1,1,0,0,0,88.5,93.2);

	this.instance_3 = new lib.Cinturon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(807.2,659,1,1,0,0,0,59,9.2);

	this.instance_4 = new lib.Pantalon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(810.6,789,1,1,0,0,0,62.5,136.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#300E0E","#702C2C"],[0,1],-77.6,0.1,77.6,0.1).s().p("AJwGjQgIhPgOhVIgNhFQgPgPg+hvIg7hrQAFBOAbBKQAOAkAMAVQgYAEgygXIgsgYQhLgIgtiSQgOgugKg2IgGgtQgDBZhnBeQggAdgnAaIgFAEQAggfAWhMIAThkQgGAYhzCFQgeBci1BRQg5AahBAVIg1ARIBDhaQhKBOhsA0Qg2Aag3AQIgtALIAJGgIgDgBQhHgUgmjbQgMhFgHhQIgFhDQgTiDAni3IAqieQAghmB+h+QA/g/A4gqIACgGQAnhqBphGQA0giAsgOQgrALgXAEQgtAIBnghQBngiBZAdQArAOAYAVQAqAEA1BkQAbAyASAxQAngqgJhlIgSheQAuA5ATBPQAKAnABAdQAJgVAigCQARgBAPAEQghAQgDAKQgBAFAFACQDNg9BrDDQA1BhANBtQBbCYgmFvQgTC3glCaIhoBgQAuhbgbj8g");
	this.shape_44.setTransform(810.2,318.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CEC2C2").s().p("AhZgqIDNAaIAOAnIizgUIhQAog");
	this.shape_45.setTransform(778.8,329);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#300E0E","#702C2C"],[0,0],-12.9,0,13,0).s().p("AAyADIizAUIAOgnIDNgaIAoBVg");
	this.shape_46.setTransform(834.1,327);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0A0505").s().p("Ag0A4QgWgWAAgiQAAggAWgYQAWgXAeAAQAfAAAWAXQAWAYAAAgQAAAigWAWQgWAYgfAAQgeAAgWgYg");
	this.shape_47.setTransform(779.6,354.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0A0505").s().p("Ag0A5QgWgYAAghQAAggAWgYQAWgXAeAAQAfAAAWAXQAWAXAAAhQAAAhgWAYQgWAXgfAAQgeAAgWgXg");
	this.shape_48.setTransform(835.7,351);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhYBqQgkgsAAg+QAAg9AkgsQAmgsAyAAQAzAAAmAsQAkAsAAA9QAAA+gkAsQglAsg0AAQgzAAglgsg");
	this.shape_49.setTransform(779.6,346.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhXBqQglgsAAg+QAAg9AlgsQAkgsAzAAQA0AAAkAsQAlAsAAA9QAAA+glAsQgkAsg0AAQgzAAgkgsg");
	this.shape_50.setTransform(835.1,344.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#F2B16B","#D08427"],[0,0.992],-168.1,0,168.2,0).s().p("A0abyQgDmTgJnRIgHlBIgHgDIgLgHQglgEhBh3Ig6h1QAEg7gSg/IgTg0Qgdh9g0jDIguisQgdhcATiCIAYhvIERl8QAlhYB6g9QA9gfA1gOQDIgUg1hZQgRgbgogfIgkgaQg7glh0ipIhpihQiSlZBbnHQAdiPAxiIIArhrQCaj2EXgZQCLgMBsAkQEXCzCBDoQBAB0AIBQQB8H8i9GAQg7B3hUBdIhIBFQhwBYACBOQAAAnAYAWQAyAdCCApQBBAVA3APIgUgGQANAEJvgMIJvgMQBfksB9AoQA/AUArBQIC7gHQA3AAAhA9QAOAZgFASQgEAUgaADQgNABgOAAQgtACg+gFIg1gFQAhAVgKBOQgFAngLAjQAZAVgeA3IgjAzQAhBshQARQgZAFghgEIgdgGQguAAhYgeIhPgeQghANsgBeQldAph4BaQgmAdgKAdQgFAPADAJIBqTeQgcA8ApRiQAXKLAeJvQABALnFgpQASibgimmQglnHAGiAIABghQABi4hHksIhHkHQh3EzgvLmQgYFzAAE2QgNCdjNBXQhAAbhLASIg/ALQAyi7gK0KgAyIDdQgXBJg1A0IAMAfIABACQAGANACANQCcjHhbiGQgSgbgbgXQBEBcghBrgA0uh+QAOAHANAHIAhhSIBTn6QiWCihdA3QgdARgUAFIgOABQAdAQAcCjQAOBSAJBPQAJgUAXAAQAUAAAfAOg");
	this.shape_51.setTransform(882.8,594.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AH0hcQAIAOAAAPQAABBiVAvQh5AlihAHIiZAAQihgHh6glQiUgvAAhBQAAgPAIgO");
	this.shape_52.setTransform(774.9,970.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A92D0F").s().p("AhMDmQihgLh5g3Qhzg0gahFQgIgUAAgWQAAhfCVhDQCUhDDSAAQDTAACUBDQCVBDAABfQAAAWgIAUQgaBFhzA0Qh5A3ihALg");
	this.shape_53.setTransform(774.9,957.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Personaje, null, null);


(lib.Escena_1_nube = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nube
	this.instance = new lib.Nube1();
	this.instance.parent = this;
	this.instance.setTransform(318.2,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_nube, null, null);


(lib.Escena_1_Layer_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(304.5,483.7,1,1,0,0,0,158.7,185.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1_7, null, null);


(lib.Escena_1_Layer_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Mata2();
	this.instance.parent = this;
	this.instance.setTransform(172.1,320.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1_6, null, null);


(lib.Escena_1_Layer_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Nube2();
	this.instance.parent = this;
	this.instance.setTransform(1065.7,102.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1_5, null, null);


(lib.Escena_1_Layer_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Mata3();
	this.instance.parent = this;
	this.instance.setTransform(493.3,337.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1_4, null, null);


(lib.Escena_1_Layer_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Mata4();
	this.instance.parent = this;
	this.instance.setTransform(210.8,486.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1_3, null, null);


(lib.Escena_1_Layer_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Mata1();
	this.instance.parent = this;
	this.instance.setTransform(339,200,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1_2, null, null);


(lib.Escena_1_Layer_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(1442.1,384.4,1,1,0,0,0,419.3,149.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1_1, null, null);


(lib.Escena_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(192.8,744.9,1,1,0,0,0,182.1,162.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Layer_1, null, null);


(lib.BotonSonido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE000").s().p("AgiBWIgUggQgRg0AYg3IAbgtQAYgNAZAGQAMADAHAGQASAKgFAOQgDAHgGAEQgZAKgGAoQgDATACASQAdAtgKAWQgGALgLACQgHACgIAAQgVAAgUgWg");
	this.shape.setTransform(36.1,37,0.429,0.406);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE000").s().p("Ag7DQQgPgWgNgcIgKgYQgih8AqiHQANgqATgmIARgeQAsghAuANQAXAHANANQAiAZgJAhQgFARgLALQguAZgKBgQgEAvAEArQA4BrgSA1QgKAagUAFQgPAHgOAAQgoAAglg0g");
	this.shape_1.setTransform(29.4,37.1,0.429,0.406);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE000").s().p("AhBExQgSgggPgpIgLgkQgni1AvjGQAOg+AWg4IASgsQAzgxA0AUQAaAJAPAUQAnAkgKAxQgGAYgNARQgzAkgLCNQgFBFAFA/QBBCdgVBOQgKAngYAHQgRAKgQAAQgtAAgqhMg");
	this.shape_2.setTransform(20.3,36.5,0.429,0.406);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE000").s().p("AlLnQIFVDfIFCAJIAAG9IkiAAIl1D8g");
	this.shape_3.setTransform(54.7,37,0.429,0.406);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(40,57,0.429,0.406,0,0,0,47,26.1);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.4,25.4,0.429,0.406,0,0,0,5.5,5);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.7,18.3,0.429,0.406,0,0,0,12,12.6);
	this.instance_2.alpha = 0.398;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFCC66","#FFCA64","#FFB44E","#FFA53F","#FF9C36","#FF9933","#FF9D37","#FFA943","#FFBD57","#FFCC66"],[0,0.008,0.114,0.227,0.361,0.557,0.682,0.804,0.925,1],-85.9,0,86,0).s().p("AlOL+QiZg/h4h0Qh3hyhBiVQhDibAAipQAAioBDiaQBBiWB3hyQB4h0CZg+QCghCCuAAQCvAACgBCQCaA+B2B0QB4ByBBCWQBDCaAACoQAACphDCbQhBCVh4ByQh3B0iZA/QigBBivAAQiuAAighBg");
	this.shape_4.setTransform(41.2,37,0.429,0.406);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AlaMoQijhBh+h5Qh/h4hGicQhIiigBiyQgCixBHijQBDidB9h6QB8h6CihEQCohFC5gCQC3gBCpBEQCjBBB+B4QB/B4BGCdQBICiABCyQACCxhHCjQhDCdh9B6Qh8B6iiBDQioBGi5ABIgHABQi0AAilhDg");
	this.shape_5.setTransform(40.6,37,0.429,0.406);

	this.instance_3 = new lib.Path_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(40.8,37,0.429,0.406,0,0,0,95,91);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regX:95,scaleX:0.429,scaleY:0.406,regY:91,x:40.8}},{t:this.shape_5,p:{scaleX:0.429,scaleY:0.406,x:40.6,y:37}},{t:this.shape_4,p:{scaleX:0.429,scaleY:0.406,x:41.2,y:37}},{t:this.instance_2,p:{regX:12,regY:12.6,scaleX:0.429,scaleY:0.406,x:16.7,y:18.3}},{t:this.instance_1,p:{regX:5.5,scaleX:0.429,scaleY:0.406,x:10.4,y:25.4,regY:5}},{t:this.instance,p:{regX:47,scaleX:0.429,scaleY:0.406,y:57,regY:26.1,x:40}},{t:this.shape_3,p:{scaleX:0.429,scaleY:0.406,x:54.7,y:37}},{t:this.shape_2,p:{scaleX:0.429,scaleY:0.406,x:20.3}},{t:this.shape_1,p:{scaleX:0.429,scaleY:0.406,x:29.4,y:37.1}},{t:this.shape,p:{scaleX:0.429,scaleY:0.406,x:36.1,y:37}}]}).to({state:[{t:this.instance_3,p:{regX:94.8,scaleX:0.493,scaleY:0.483,regY:91,x:40.8}},{t:this.shape_5,p:{scaleX:0.493,scaleY:0.483,x:40.7,y:37.1}},{t:this.shape_4,p:{scaleX:0.493,scaleY:0.483,x:41.3,y:37.1}},{t:this.instance_2,p:{regX:12.2,regY:12.7,scaleX:0.493,scaleY:0.483,x:13.2,y:14.9}},{t:this.instance_1,p:{regX:5.7,scaleX:0.493,scaleY:0.483,x:6,y:23.2,regY:5}},{t:this.instance,p:{regX:47.1,scaleX:0.493,scaleY:0.483,y:60.8,regY:26.1,x:40}},{t:this.shape_3,p:{scaleX:0.493,scaleY:0.483,x:56.8,y:37.1}},{t:this.shape_2,p:{scaleX:0.493,scaleY:0.483,x:17.4}},{t:this.shape_1,p:{scaleX:0.493,scaleY:0.483,x:27.8,y:37.2}},{t:this.shape,p:{scaleX:0.493,scaleY:0.483,x:35.5,y:37.1}}]},1).to({state:[{t:this.instance_3,p:{regX:94.8,scaleX:0.546,scaleY:0.527,regY:90.8,x:40.9}},{t:this.shape_5,p:{scaleX:0.546,scaleY:0.527,x:40.7,y:37.2}},{t:this.shape_4,p:{scaleX:0.546,scaleY:0.527,x:41.4,y:37.2}},{t:this.instance_2,p:{regX:12.2,regY:12.8,scaleX:0.546,scaleY:0.527,x:10.2,y:12.9}},{t:this.instance_1,p:{regX:5.7,scaleX:0.546,scaleY:0.527,x:2.3,y:22,regY:5.2}},{t:this.instance,p:{regX:47.2,scaleX:0.546,scaleY:0.527,y:63,regY:26.3,x:39.9}},{t:this.shape_3,p:{scaleX:0.546,scaleY:0.527,x:58.6,y:37.2}},{t:this.shape_2,p:{scaleX:0.546,scaleY:0.527,x:14.9}},{t:this.shape_1,p:{scaleX:0.546,scaleY:0.527,x:26.5,y:37.3}},{t:this.shape,p:{scaleX:0.546,scaleY:0.527,x:35,y:37.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.2,73.8);


(lib.BotonAtras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Boton4();
	this.instance.parent = this;
	this.instance.setTransform(0.6,0.6,0.848,0.845,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-73,156.9,147.9);


(lib.Pajaromoviendose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Pajaro();
	this.instance.parent = this;
	this.instance.setTransform(635.3,0.5,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:11.7,regY:27.1,x:636.9,y:27.5},0).wait(1).to({x:626.5,y:27.4},0).wait(1).to({x:616.1,y:27.3},0).wait(1).to({x:605.6,y:27.2},0).wait(1).to({x:595.2,y:27.1},0).wait(1).to({x:584.8},0).wait(1).to({x:574.4,y:27},0).wait(1).to({x:564,y:26.9},0).wait(1).to({x:553.6,y:26.8},0).wait(1).to({x:543.1,y:26.7},0).wait(1).to({x:532.7,y:26.6},0).wait(1).to({x:522.3,y:26.5},0).wait(1).to({x:511.9,y:26.4},0).wait(1).to({x:501.5,y:26.3},0).wait(1).to({x:491.1,y:26.2},0).wait(1).to({x:480.6,y:26.1},0).wait(1).to({x:470.2,y:26},0).wait(1).to({x:459.8,y:25.9},0).wait(1).to({x:449.4,y:25.8},0).wait(1).to({x:439,y:25.7},0).wait(1).to({x:428.6,y:25.6},0).wait(1).to({x:418.1,y:25.5},0).wait(1).to({x:407.7,y:25.4},0).wait(1).to({x:397.3,y:25.3},0).wait(1).to({x:386.9,y:25.2},0).wait(1).to({x:376.5,y:25.1},0).wait(1).to({x:366.1,y:25},0).wait(1).to({x:355.6,y:24.9},0).wait(1).to({x:345.2,y:24.8},0).wait(1).to({x:334.8,y:24.7},0).wait(1).to({x:324.4,y:24.6},0).wait(1).to({x:314,y:24.5},0).wait(1).to({x:303.6,y:24.4},0).wait(1).to({x:293.1,y:24.3},0).wait(1).to({x:282.7,y:24.2},0).wait(1).to({x:272.3,y:24.1},0).wait(1).to({x:261.9,y:24},0).wait(1).to({x:251.5,y:23.9},0).wait(1).to({x:241.1,y:23.8},0).wait(1).to({x:230.6,y:23.7},0).wait(1).to({x:220.2,y:23.6},0).wait(1).to({x:209.8,y:23.5},0).wait(1).to({x:199.4,y:23.4},0).wait(1).to({x:189,y:23.3},0).wait(1).to({x:178.6,y:23.2},0).wait(1).to({x:168.2,y:23.1},0).wait(1).to({x:157.7,y:23},0).wait(1).to({x:147.3,y:22.9},0).wait(1).to({x:136.9,y:22.8},0).wait(1).to({x:126.5,y:22.7},0).wait(1).to({x:116.1,y:22.6},0).wait(1).to({x:105.7,y:22.5},0).wait(1).to({x:95.2,y:22.4},0).wait(1).to({x:84.8,y:22.3},0).wait(1).to({x:74.4,y:22.2},0).wait(1).to({x:64,y:22.1},0).wait(1).to({x:53.6,y:22},0).wait(1).to({x:43.2,y:21.9},0).wait(1).to({x:32.7,y:21.8},0).wait(1).to({x:22.3,y:21.7},0).wait(1).to({x:11.9,y:21.6},0).wait(1).to({x:1.5,y:21.5},0).wait(1).to({x:-8.9,y:21.4},0).wait(1).to({x:-19.3,y:21.3},0).wait(1).to({x:-29.7,y:21.2},0).wait(1).to({x:-40.1,y:21.1},0).wait(1).to({x:-50.5,y:21},0).wait(1).to({x:-61,y:20.9},0).wait(1).to({x:-71.4,y:20.8},0).wait(1).to({x:-81.8,y:20.7},0).wait(1).to({x:-92.2,y:20.6},0).wait(1).to({x:-102.6,y:20.5},0).wait(1).to({x:-113,y:20.4},0).wait(1).to({x:-123.5,y:20.3},0).wait(1).to({x:-133.9,y:20.2},0).wait(1).to({x:-144.3,y:20.1},0).wait(1).to({x:-154.7,y:20},0).wait(1).to({x:-165.1,y:19.9},0).wait(1).to({x:-175.5,y:19.8},0).wait(1).to({x:-186,y:19.7},0).wait(1).to({x:-196.4,y:19.6},0).wait(1).to({x:-206.8,y:19.5},0).wait(1).to({x:-217.2,y:19.4},0).wait(1).to({x:-227.6,y:19.3},0).wait(1).to({x:-238,y:19.2},0).wait(1).to({x:-248.4,y:19.1},0).wait(1).to({x:-258.9,y:19},0).wait(1).to({x:-269.3,y:18.9},0).wait(1).to({x:-279.7,y:18.8},0).wait(1).to({x:-290.1,y:18.7},0).wait(1).to({x:-300.5,y:18.6},0).wait(1).to({x:-310.9,y:18.5},0).wait(1).to({x:-321.4,y:18.4},0).wait(1).to({x:-331.8,y:18.3},0).wait(1).to({x:-342.2,y:18.2},0).wait(1).to({x:-352.6,y:18.1},0).wait(1).to({x:-363,y:18},0).wait(1).to({x:-373.4,y:17.9},0).wait(1).to({x:-383.9,y:17.8},0).wait(1).to({x:-394.3,y:17.7},0).wait(1).to({x:-404.7,y:17.6},0).wait(1).to({x:-415.1,y:17.5},0).wait(1).to({x:-425.5,y:17.4},0).wait(1).to({x:-435.9,y:17.3},0).wait(1).to({x:-446.3,y:17.2},0).wait(1).to({x:-456.8,y:17.1},0).wait(1).to({x:-467.2,y:17},0).wait(1).to({x:-477.6,y:16.9},0).wait(1).to({x:-488,y:16.8},0).wait(1).to({x:-498.4,y:16.7},0).wait(1).to({x:-508.9,y:16.6},0).wait(1).to({x:-519.3,y:16.5},0).wait(1).to({x:-529.7,y:16.4},0).wait(1).to({x:-540.1,y:16.3},0).wait(1).to({x:-550.5,y:16.2},0).wait(1).to({x:-560.9,y:16.1},0).wait(1).to({x:-571.4,y:16},0).wait(1).to({x:-581.8,y:15.9},0).wait(1).to({x:-592.2,y:15.8},0).wait(1).to({x:-602.6,y:15.7},0).wait(1).to({x:-613,y:15.6},0).wait(1).to({x:-623.4,y:15.5},0).wait(1).to({x:-633.8,y:15.4},0).wait(1).to({x:-644.3,y:15.3},0).wait(1).to({x:-654.7,y:15.2},0).wait(1).to({x:-665.1,y:15.1},0).wait(1).to({x:-675.5,y:15},0).wait(1).to({x:-685.9,y:14.9},0).wait(1).to({x:-696.3,y:14.8},0).wait(1).to({x:-706.8,y:14.7},0).wait(1).to({x:-717.2,y:14.6},0).wait(1).to({x:-727.6,y:14.5},0).wait(1).to({x:-738,y:14.4},0).wait(1).to({x:-748.4,y:14.3},0).wait(1).to({x:-758.8,y:14.2},0).wait(1).to({x:-769.3,y:14.1},0).wait(1).to({x:-779.7,y:14},0).wait(1).to({x:-790.1,y:13.9},0).wait(1).to({x:-800.5,y:13.8},0).wait(1).to({x:-810.9},0).wait(1).to({x:-821.3,y:13.7},0).wait(1).to({x:-831.8,y:13.6},0).wait(1).to({x:-842.2,y:13.5},0).wait(1).to({x:-852.6,y:13.4},0).wait(1).to({x:-863,y:13.3},0).wait(1).to({x:-873.4,y:13.2},0).wait(1).to({x:-883.8,y:13.1},0).wait(1).to({x:-894.3,y:13},0).wait(1).to({x:-904.7,y:12.9},0).wait(1).to({x:-915.1,y:12.8},0).wait(1).to({x:-925.5,y:12.7},0).wait(1).to({x:-935.9,y:12.6},0).wait(1).to({x:-946.3,y:12.5},0).wait(1).to({x:-956.8,y:12.4},0).wait(1).to({x:-967.2,y:12.3},0).wait(1).to({x:-977.6,y:12.2},0).wait(1).to({x:-988,y:12.1},0).wait(1).to({x:-998.4,y:12},0).wait(1).to({x:-1008.8,y:11.9},0).wait(1).to({x:-1019.3,y:11.8},0).wait(1).to({x:-1029.7,y:11.7},0).wait(1).to({x:-1040.1,y:11.6},0).wait(1).to({x:-1050.5,y:11.5},0).wait(1).to({x:-1060.9,y:11.4},0).wait(1).to({x:-1071.3,y:11.3},0).wait(1).to({x:-1081.8,y:11.2},0).wait(1).to({x:-1092.2,y:11.1},0).wait(1).to({x:-1102.6,y:11},0).wait(1).to({x:-1113,y:10.9},0).wait(1).to({x:-1123.4,y:10.8},0).wait(1).to({x:-1133.8,y:10.7},0).wait(1).to({x:-1144.2,y:10.6},0).wait(1).to({x:-1154.7,y:10.5},0).wait(1).to({x:-1165.1,y:10.4},0).wait(1).to({x:-1175.5,y:10.3},0).wait(1).to({x:-1185.9,y:10.2},0).wait(1).to({x:-1196.3,y:10.1},0).wait(1).to({x:-1206.7,y:10},0).wait(1).to({x:-1217.2,y:9.9},0).wait(1).to({x:-1227.6,y:9.8},0).wait(1).to({x:-1238,y:9.7},0).wait(1).to({x:-1248.4,y:9.6},0).wait(1).to({x:-1258.8,y:9.5},0).wait(1).to({x:-1269.2,y:9.4},0).wait(1).to({x:-1279.6,y:9.3},0).wait(1).to({x:-1290.1,y:9.2},0).wait(1).to({x:-1300.5,y:9.1},0).wait(1).to({x:-1310.9,y:9},0).wait(1).to({x:-1321.3,y:8.9},0).wait(1).to({x:-1331.7,y:8.8},0).wait(1).to({x:-1342.2,y:8.7},0).wait(1).to({x:-1352.6,y:8.6},0).wait(1).to({x:-1363,y:8.5},0).wait(1).to({x:-1373.4,y:8.4},0).wait(1).to({x:-1383.8,y:8.3},0).wait(1).to({x:-1394.2,y:8.2},0).wait(1).to({x:-1404.7,y:8.1},0).wait(1).to({x:-1415.1,y:8},0).wait(1).to({x:-1425.5,y:7.9},0).wait(1).to({x:-1435.9,y:7.8},0).wait(1).to({x:-1446.3,y:7.7},0).wait(1).to({x:-1456.7,y:7.6},0).wait(1).to({x:-1467.2,y:7.5},0).wait(1).to({x:-1477.6,y:7.4},0).wait(1).to({x:-1488,y:7.3},0).wait(1).to({x:-1498.4,y:7.2},0).wait(1).to({x:-1508.8,y:7.1},0).wait(1).to({x:-1519.2,y:7},0).wait(1).to({x:-1529.7,y:6.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(544.4,-75.9,181.8,153);


(lib.fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.mascara = new lib.mascara();
	this.mascara.name = "mascara";
	this.mascara.parent = this;
	this.mascara.setTransform(958.7,540,1,1,0,0,0,958.7,540);

	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(934.8,773.7,1,1,0,0,0,925.4,306.4);

	this.instance_1 = new lib.ClipGroup_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1801.3,134.4,1,1,0,0,0,95.7,100.7);

	this.instance_2 = new lib.ClipGroup_17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(969,753.7,1,1,0,0,0,986.5,369);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3AAA35").s().p("EiVyAz6MAAAhnzMErlAAAMAAABnzg");
	this.shape.setTransform(958.7,747.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#55D1F2").s().p("EiVyBTQMAAAimfMErlAAAMAAACmfg");
	this.shape_1.setTransform(958.7,532.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,0,51,0)").ss(1,1,1).p("EiVyBUJMAAAioRMErlAAAMAAACoR");
	this.shape_2.setTransform(958.7,538.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.mascara}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(-17.5,-1,1972.9,1123.7), null);


(lib.Escena_1_pajaro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pajaro
	this.instance = new lib.Pajaromoviendose();
	this.instance.parent = this;
	this.instance.setTransform(1491.3,271.3,1,1,0,0,0,96.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_pajaro, null, null);


(lib.Escena_1_fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fondo
	this.fondo = new lib.fondo();
	this.fondo.name = "fondo";
	this.fondo.parent = this;
	this.fondo.setTransform(970.3,561.1,1,1,0,0,0,969,561.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,0,51,0)").ss(1,1,1).p("ECVzgAOIAAAdMkrlAAAIAAgd");
	this.shape.setTransform(960,1078.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.fondo}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_fondo, null, null);


(lib.Escena_1_boton_voz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boton_voz
	this.BotonSonido = new lib.BotonSonido();
	this.BotonSonido.name = "BotonSonido";
	this.BotonSonido.parent = this;
	this.BotonSonido.setTransform(1708.9,959.9,1.418,1.465,0,0,0,40.7,37.1);
	new cjs.ButtonHelper(this.BotonSonido, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.BotonSonido).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_boton_voz, null, null);


(lib.Escena_1_boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boton
	this.BotonAtras = new lib.BotonAtras();
	this.BotonAtras.name = "BotonAtras";
	this.BotonAtras.parent = this;
	this.BotonAtras.setTransform(1522.2,960.8,1,1,0,0,0,0,0.8);
	new cjs.ButtonHelper(this.BotonAtras, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BotonAtras).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_boton, null, null);


// stage content:
(lib.EjercicioFisico2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.BotonSonido = this.boton_voz.BotonSonido;
		this.BotonAtras = this.boton.BotonAtras;
		if(this.fondo.parent == undefined || this.fondo.parent == this)
		this.fondo = this.fondo.fondo;
		this.BotonAtras.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("Principal_Fisico.html", "_self");
		}
		
		
		
		const parent = this;
		
		
		var libSonidos = {
			"fondo": new Audio("sonidos/sonido2.mp3"),
			"BotonSonido": new Audio("voces/ejercicio 2.mp3"),
		
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
		
		
		var BotonSonidoSonando = false;
		parent.BotonSonido.addEventListener("click", ()=> {
				if (BotonSonidoSonando) {
						libSonidos.BotonSonido.pause();
				}else {
						libSonidos.BotonSonido.currentTime = 0;
						libSonidos.BotonSonido.play();
				}
				BotonSonidoSonando=!BotonSonidoSonando;
				
				console.log(BotonSonidoSonando)
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Personaje_obj_
	this.Personaje = new lib.Escena_1_Personaje();
	this.Personaje.name = "Personaje";
	this.Personaje.parent = this;
	this.Personaje.setTransform(882.8,615.5,1,1,0,0,0,882.8,615.5);
	this.Personaje.depth = 0;
	this.Personaje.isAttachedToCamera = 0
	this.Personaje.isAttachedToMask = 0
	this.Personaje.layerDepth = 0
	this.Personaje.layerIndex = 0
	this.Personaje.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Personaje).wait(1));

	// boton_voz_obj_
	this.boton_voz = new lib.Escena_1_boton_voz();
	this.boton_voz.name = "boton_voz";
	this.boton_voz.parent = this;
	this.boton_voz.setTransform(1708.9,959.8,1,1,0,0,0,1708.9,959.8);
	this.boton_voz.depth = 0;
	this.boton_voz.isAttachedToCamera = 0
	this.boton_voz.isAttachedToMask = 0
	this.boton_voz.layerDepth = 0
	this.boton_voz.layerIndex = 1
	this.boton_voz.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boton_voz).wait(1));

	// boton_obj_
	this.boton = new lib.Escena_1_boton();
	this.boton.name = "boton";
	this.boton.parent = this;
	this.boton.setTransform(1522.2,960.9,1,1,0,0,0,1522.2,960.9);
	this.boton.depth = 0;
	this.boton.isAttachedToCamera = 0
	this.boton.isAttachedToMask = 0
	this.boton.layerDepth = 0
	this.boton.layerIndex = 2
	this.boton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boton).wait(1));

	// Capa_12_obj_
	this.Capa_12 = new lib.Escena_1_Capa_12();
	this.Capa_12.name = "Capa_12";
	this.Capa_12.parent = this;
	this.Capa_12.setTransform(1511.4,526.1,1,1,0,0,0,1511.4,526.1);
	this.Capa_12.depth = 0;
	this.Capa_12.isAttachedToCamera = 0
	this.Capa_12.isAttachedToMask = 0
	this.Capa_12.layerDepth = 0
	this.Capa_12.layerIndex = 3
	this.Capa_12.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_12).wait(1));

	// pajaro_obj_
	this.pajaro = new lib.Escena_1_pajaro();
	this.pajaro.name = "pajaro";
	this.pajaro.parent = this;
	this.pajaro.setTransform(1806,271.2,1,1,0,0,0,1806,271.2);
	this.pajaro.depth = 0;
	this.pajaro.isAttachedToCamera = 0
	this.pajaro.isAttachedToMask = 0
	this.pajaro.layerDepth = 0
	this.pajaro.layerIndex = 4
	this.pajaro.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pajaro).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Escena_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(192.8,744.9,1,1,0,0,0,192.8,744.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 5
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

	// Layer_1_obj_
	this.Layer_1_1 = new lib.Escena_1_Layer_1_1();
	this.Layer_1_1.name = "Layer_1_1";
	this.Layer_1_1.parent = this;
	this.Layer_1_1.setTransform(1442,384.4,1,1,0,0,0,1442,384.4);
	this.Layer_1_1.depth = 0;
	this.Layer_1_1.isAttachedToCamera = 0
	this.Layer_1_1.isAttachedToMask = 0
	this.Layer_1_1.layerDepth = 0
	this.Layer_1_1.layerIndex = 6
	this.Layer_1_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_1).wait(1));

	// Layer_1_obj_
	this.Layer_1_2 = new lib.Escena_1_Layer_1_2();
	this.Layer_1_2.name = "Layer_1_2";
	this.Layer_1_2.parent = this;
	this.Layer_1_2.setTransform(339,200,1,1,0,0,0,339,200);
	this.Layer_1_2.depth = 0;
	this.Layer_1_2.isAttachedToCamera = 0
	this.Layer_1_2.isAttachedToMask = 0
	this.Layer_1_2.layerDepth = 0
	this.Layer_1_2.layerIndex = 7
	this.Layer_1_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_2).wait(1));

	// Layer_1_obj_
	this.Layer_1_3 = new lib.Escena_1_Layer_1_3();
	this.Layer_1_3.name = "Layer_1_3";
	this.Layer_1_3.parent = this;
	this.Layer_1_3.setTransform(210.8,486.1,1,1,0,0,0,210.8,486.1);
	this.Layer_1_3.depth = 0;
	this.Layer_1_3.isAttachedToCamera = 0
	this.Layer_1_3.isAttachedToMask = 0
	this.Layer_1_3.layerDepth = 0
	this.Layer_1_3.layerIndex = 8
	this.Layer_1_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_3).wait(1));

	// Layer_1_obj_
	this.Layer_1_4 = new lib.Escena_1_Layer_1_4();
	this.Layer_1_4.name = "Layer_1_4";
	this.Layer_1_4.parent = this;
	this.Layer_1_4.setTransform(493.4,337.1,1,1,0,0,0,493.4,337.1);
	this.Layer_1_4.depth = 0;
	this.Layer_1_4.isAttachedToCamera = 0
	this.Layer_1_4.isAttachedToMask = 0
	this.Layer_1_4.layerDepth = 0
	this.Layer_1_4.layerIndex = 9
	this.Layer_1_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_4).wait(1));

	// Layer_1_obj_
	this.Layer_1_5 = new lib.Escena_1_Layer_1_5();
	this.Layer_1_5.name = "Layer_1_5";
	this.Layer_1_5.parent = this;
	this.Layer_1_5.setTransform(1065.7,102.2,1,1,0,0,0,1065.7,102.2);
	this.Layer_1_5.depth = 0;
	this.Layer_1_5.isAttachedToCamera = 0
	this.Layer_1_5.isAttachedToMask = 0
	this.Layer_1_5.layerDepth = 0
	this.Layer_1_5.layerIndex = 10
	this.Layer_1_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_5).wait(1));

	// Layer_1_obj_
	this.Layer_1_6 = new lib.Escena_1_Layer_1_6();
	this.Layer_1_6.name = "Layer_1_6";
	this.Layer_1_6.parent = this;
	this.Layer_1_6.setTransform(172.1,320.4,1,1,0,0,0,172.1,320.4);
	this.Layer_1_6.depth = 0;
	this.Layer_1_6.isAttachedToCamera = 0
	this.Layer_1_6.isAttachedToMask = 0
	this.Layer_1_6.layerDepth = 0
	this.Layer_1_6.layerIndex = 11
	this.Layer_1_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_6).wait(1));

	// Layer_1_obj_
	this.Layer_1_7 = new lib.Escena_1_Layer_1_7();
	this.Layer_1_7.name = "Layer_1_7";
	this.Layer_1_7.parent = this;
	this.Layer_1_7.setTransform(304.5,483.7,1,1,0,0,0,304.5,483.7);
	this.Layer_1_7.depth = 0;
	this.Layer_1_7.isAttachedToCamera = 0
	this.Layer_1_7.isAttachedToMask = 0
	this.Layer_1_7.layerDepth = 0
	this.Layer_1_7.layerIndex = 12
	this.Layer_1_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_7).wait(1));

	// nube_obj_
	this.nube = new lib.Escena_1_nube();
	this.nube.name = "nube";
	this.nube.parent = this;
	this.nube.setTransform(811.8,105,1,1,0,0,0,811.8,105);
	this.nube.depth = 0;
	this.nube.isAttachedToCamera = 0
	this.nube.isAttachedToMask = 0
	this.nube.layerDepth = 0
	this.nube.layerIndex = 13
	this.nube.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.nube).wait(1));

	// fondo_obj_
	this.fondo = new lib.Escena_1_fondo();
	this.fondo.name = "fondo";
	this.fondo.parent = this;
	this.fondo.setTransform(970.2,561.1,1,1,0,0,0,970.2,561.1);
	this.fondo.depth = 0;
	this.fondo.isAttachedToCamera = 0
	this.fondo.isAttachedToMask = 0
	this.fondo.layerDepth = 0
	this.fondo.layerIndex = 14
	this.fondo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fondo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.9,539.5,2757.9,1123.2);
// library properties:
lib.properties = {
	id: '30498E7162DCAE4AB173AD5490ADEC99',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/EjercicioFisico 2_atlas_.png?1699917112263", id:"EjercicioFisico 2_atlas_"}
	],
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
an.compositions['30498E7162DCAE4AB173AD5490ADEC99'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;