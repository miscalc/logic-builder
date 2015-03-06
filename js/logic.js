
var width = window.innerWidth;
var height = window.innerHeight;
var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height
});
var layer = new Konva.Layer();
var midX = stage.getWidth() / 2;
var midY = stage.getHeight() / 2;

var height = 50; //the variable which everything is based on, numbers in comments are based on height = 50
var lmof = 0.5; //left margin offset factor
var ivmf = 1.2; //icon vertical margin factor

var AND = new Konva.Shape({
	x: height * lmof,
	y: 5,
	drawFunc: function(ctx) {
		var l1x = height*0.3;
		var c1p1x = height;
		var c1p2x = height;
		var c1p2y = height/2;
		var c2p2x = height/2;
		var ox2 = (height/2) + height;
		var oy2 = height/2;
		var iAy1 = height*0.25;
		var iAx2 = 0-height*0.3;
		var iBy1 = height*0.75;
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(l1x, 0);
		ctx.quadraticCurveTo(height,0,height,c1p2y);
		ctx.quadraticCurveTo(height,height,c2p2x,height);
		ctx.lineTo(0,height);
		ctx.closePath();
		ctx.moveTo(height,c2p2x); //output
		ctx.lineTo(ox2,oy2);
		ctx.moveTo(0,iAy1); //input A
		ctx.lineTo(iAx2,iAy1);
		ctx.moveTo(0,iBy1); //input B
		ctx.lineTo(iAx2,iBy1);
		

		ctx.fillStrokeShape(this);
	},
	stroke: 'black',
	strokeWidth: height*0.04
});

var OR = new Konva.Shape({
	x: height * lmof,
	y: 1*(height*ivmf)+5,
	drawFunc: function(ctx) {
		var l1x = (height*0.3);
		var c2p1x = height;
		var c2p2x = (height*1.2);
		var c2p2y = height/2;
		var c3p1x = height;
		var c3p2x = (height*0.3);
		var c4p1x = (height*0.3);
		var c4p1y = height/2;
		var ox2 = (height/2) + c2p2x;
		var oy2 = height/2;
		var iAx1 = height*0.1;
		var iAy1 = height*0.25;
		var iAx2 = 0 - (height*0.3);
		var iAy2 = iAy1;
		var iBx1 = height*0.1;
		var iBy1 = height*0.75;
		var iBx2 = iAx2;
		var iBy2 = iBy1;
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(l1x,0);
		ctx.quadraticCurveTo(c2p1x, 0, c2p2x, c2p2y);
		ctx.quadraticCurveTo(c3p1x, height, c3p2x, height);
		ctx.lineTo(0, height);
		ctx.quadraticCurveTo(c4p1x, c4p1y, 0, 0);
		ctx.closePath();
		ctx.moveTo(c2p2x, c2p2y);//output
		ctx.lineTo(ox2,oy2);
		ctx.moveTo(iAx1,iAy1);//input A
		ctx.lineTo(iAx2,iAy2);
		ctx.moveTo(iBx1,iBy1);//input B
		ctx.lineTo(iBx2,iBy2);
		ctx.fillStrokeShape(this);
	},
	stroke: 'black',
	strokeWidth: height*0.04
});

var NOT = new Konva.Shape({
	x: height * lmof,
	y: 2*(height*ivmf)+5,
	drawFunc: function(ctx) {
		var l1y = height/2;
		var cmx = (height*0.2) + height;
		var csx = (height*0.1) + height;
		var cr = height*0.1; // 5
		var ox2 = (height/2) + cmx;
		var iAy1 = height*0.25;
		var iAx2 = 0 - (height*0.3);
		var iBy1 = height*0.75;
		var iBx2 = iAx2;
		
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(height,l1y);
		ctx.lineTo(0,height);
		ctx.closePath();
		ctx.moveTo(cmx,l1y);
		ctx.arc(csx, l1y, cr, 0, 2*Math.PI, false);
		ctx.moveTo(cmx,l1y); //output
		ctx.lineTo(ox2,l1y);
		ctx.moveTo(0, iAy1); //input A
		ctx.lineTo(iAx2, iAy1);
		ctx.moveTo(0,iBy1); //input B
		ctx.lineTo(iBx2,iBy1);
		
		ctx.fillStrokeShape(this);
	},
	stroke: 'black',
	strokeWidth: height*0.04
});

var NAND = new Konva.Shape({
	x: height * lmof,
	y: 3*(height*ivmf)+5,
	drawFunc: function(ctx) {
		var l1x = height*0.3;
		var c1p1x = height;
		var c1p2x = height;
		var c1p2y = height/2;
		var c2p2x = height/2;
		var cmx = height*1.2;
		var csx = height*1.1;
		var csy = height/2;
		var cr = height*0.1; // 5
		var ox1 = height*1.2;
		var ox2 = (height/2) + ox1;
		var oy2 = height/2;
		var iAy1 = height*0.25;
		var iAx2 = 0-height*0.3;
		var iBy1 = height*0.75;
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(l1x, 0);
		ctx.quadraticCurveTo(height,0,height,c1p2y);
		ctx.quadraticCurveTo(height,height,c2p2x,height);
		ctx.lineTo(0,height);
		ctx.closePath();
		ctx.moveTo(cmx,csy);
		ctx.arc(csx, csy, cr, 0, 2*Math.PI, false);
		ctx.moveTo(ox1,c2p2x); //output
		ctx.lineTo(ox2,oy2);
		ctx.moveTo(0,iAy1); //input A
		ctx.lineTo(iAx2,iAy1);
		ctx.moveTo(0,iBy1); //input B
		ctx.lineTo(iAx2,iBy1);
		
		ctx.fillStrokeShape(this);
	},
	stroke: 'black',
	strokeWidth: height*0.04
});

var NOR = new Konva.Shape({
	x: height * lmof,
	y: 4*(height*ivmf)+5,
	drawFunc: function(ctx) {
		var l1x = (height*0.3);
		var c2p1x = height;
		var c2p2x = (height*1.2);
		var c2p2y = height/2;
		var c3p1x = height;
		var c3p2x = (height*0.3);
		var c4p1x = (height*0.3);
		var c4p1y = height/2;

		var cr = height*0.1; // 5
		var cmx = height*1.4;
		var csx = height*1.3;
		var csy = height/2;

		var ox2 = (height/2) + cmx;
		var oy2 = height/2;
		var iAx1 = height*0.1;
		var iAy1 = height*0.25;
		var iAx2 = 0 - (height*0.3);
		var iAy2 = iAy1;
		var iBx1 = height*0.1;
		var iBy1 = height*0.75;
		var iBx2 = iAx2;
		var iBy2 = iBy1;
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(l1x,0);
		ctx.quadraticCurveTo(c2p1x, 0, c2p2x, c2p2y);
		ctx.quadraticCurveTo(c3p1x, height, c3p2x, height);
		ctx.lineTo(0, height);
		ctx.quadraticCurveTo(c4p1x, c4p1y, 0, 0);
		ctx.closePath();

		ctx.moveTo(cmx,csy);
		ctx.arc(csx, csy, cr, 0, 2*Math.PI, false);

		ctx.moveTo(cmx, csy);//output
		ctx.lineTo(ox2,oy2);
		ctx.moveTo(iAx1,iAy1);//input A
		ctx.lineTo(iAx2,iAy2);
		ctx.moveTo(iBx1,iBy1);//input B
		ctx.lineTo(iBx2,iBy2);
		ctx.fillStrokeShape(this);
	},
	stroke: 'black',
	strokeWidth: height*0.04
});

var XOR = new Konva.Shape({
	x: height * lmof,
	y: 5*(height*ivmf)+5, //position 6
	drawFunc: function(ctx) {
		var c1p1x = height*0.3;
		var c1p1y = height/2;
		//var c1p2x = 0;
		//var c1p2y = height;
		var m1x = height*0.1;
		//var m1y = 0;
		var l1x = (height*0.3) + m1x;
		//var l1y = 0;
		var c2p1x = height + m1x;
		//var c2p1y = 0;
		var c2p2x = (height*1.2) + m1x;
		var c2p2y = height/2;
		var c3p1x = height + m1x;
		//var c3p1y = height;
		var c3p2x = (height*0.3) + m1x;
		//var c3p2y = height;
		//var l2x = m1x;
		//var l2y = height;
		var c4p1x = (height*0.3) + m1x;
		var c4p1y = height/2;
		//var c4p2x = m1x;
		//var c4p2y = 0;
		var ox2 = (height/2) + c2p2x;
		var oy2 = height/2;
		var iAx1 = height*0.2;
		var iAy1 = height*0.25;
		var iAx2 = iAx1 - (height*0.5);
		var iAy2 = iAy1;
		var iBx1 = height*0.2;
		var iBy1 = height*0.75;
		var iBx2 = iAx2;
		var iBy2 = iBy1;
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		//ctx.quadraticCurveTo(p1x, p1y, p2x, p2y);
		ctx.quadraticCurveTo(c1p1x, c1p1y, 0, height); //15,25,0,50
		ctx.moveTo(m1x,0); //5,0
		ctx.lineTo(l1x,0); //20,0
		ctx.quadraticCurveTo(c2p1x, 0, c2p2x, c2p2y); //55,0,65,25
		ctx.quadraticCurveTo(c3p1x, height, c3p2x, height); //55,50,20,50
		ctx.lineTo(m1x, height); //5,50
		ctx.quadraticCurveTo(c4p1x, c4p1y, m1x, 0); //20,25,5,0
		ctx.closePath();
		ctx.moveTo(c2p2x, c2p2y);//output  65,25
		ctx.lineTo(ox2,oy2); //90,25
		ctx.moveTo(iAx1,iAy1);//input A  10,12.5
		ctx.lineTo(iAx2,iAy2); //-15,12.5
		ctx.moveTo(iBx1,iBy1);//input B   10,37.5
		ctx.lineTo(iBx2,iBy2); //-15,37.5
		
		ctx.fillStrokeShape(this);
	},
	stroke: 'black',
	strokeWidth: height*0.04
});

var XNOR = new Konva.Shape({
	x: height * lmof,
	y: 6*(height*ivmf)+5, //position 6
	drawFunc: function(ctx) {
		var c1p1x = height*0.3;
		var c1p1y = height/2;
		var m1x = height*0.1;
		var l1x = (height*0.3) + m1x;
		var c2p1x = height + m1x;
		var c2p2x = (height*1.2) + m1x;
		var c2p2y = height/2;
		var c3p1x = height + m1x;
		var c3p2x = (height*0.3) + m1x;
		var c4p1x = (height*0.3) + m1x;
		var c4p1y = height/2;

		var cr = height*0.1; // 5
		var cmx = height*1.5;
		var csx = height*1.4;
		var csy = height/2;

		var ox2 = (height/2) + cmx;
		var oy2 = height/2;
		var iAx1 = height*0.2;
		var iAy1 = height*0.25;
		var iAx2 = iAx1 - (height*0.5);
		var iAy2 = iAy1;
		var iBx1 = height*0.2;
		var iBy1 = height*0.75;
		var iBx2 = iAx2;
		var iBy2 = iBy1;
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.quadraticCurveTo(c1p1x, c1p1y, 0, height); //15,25,0,50
		ctx.moveTo(m1x,0); //5,0
		ctx.lineTo(l1x,0); //20,0
		ctx.quadraticCurveTo(c2p1x, 0, c2p2x, c2p2y); //55,0,65,25
		ctx.quadraticCurveTo(c3p1x, height, c3p2x, height); //55,50,20,50
		ctx.lineTo(m1x, height); //5,50
		ctx.quadraticCurveTo(c4p1x, c4p1y, m1x, 0); //20,25,5,0
		ctx.closePath();
		
		ctx.moveTo(cmx,csy);
		ctx.arc(csx, csy, cr, 0, 2*Math.PI, false);
		
		ctx.moveTo(cmx, csy);//output  65,25
		ctx.lineTo(ox2,oy2); //90,25
		ctx.moveTo(iAx1,iAy1);//input A  10,12.5
		ctx.lineTo(iAx2,iAy2); //-15,12.5
		ctx.moveTo(iBx1,iBy1);//input B   10,37.5
		ctx.lineTo(iBx2,iBy2); //-15,37.5
		


		ctx.fillStrokeShape(this);
	},
	stroke: 'black',
	strokeWidth: height*0.04
});

var cloneFunc = function(evt) {
	var clone = this.clone({
		draggable: true
	});
	layer.add(clone);
	clone.off('mousedown');
	console.log(evt);
	clone.startDrag();
}

AND.on('mousedown', cloneFunc);
OR.on('mousedown', cloneFunc);
NOT.on('mousedown', cloneFunc);
NAND.on('mousedown', cloneFunc);
NOR.on('mousedown', cloneFunc);
XOR.on('mousedown', cloneFunc);
XNOR.on('mousedown', cloneFunc);

layer.add(AND);
layer.add(OR);
layer.add(NOT);
layer.add(NAND);
layer.add(NOR);
layer.add(XOR);
layer.add(XNOR);
stage.add(layer);
