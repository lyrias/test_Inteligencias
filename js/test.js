 var a = [];
 var b = [];
 var c = [];
 var d = [];
 var e = [];
 var f = [];
 var g = [];
 var h = [];
function getData(){
var demo1 = document.getElementsByName("p1");
	for (let step = 0; step < 5; step++) {
		if (demo1[step].checked) {
			a[0]= demo1[step].value;
			break;
		}else a[0]=0;
	  }
	
var demo2 = document.getElementsByName("p2");
	for (let step = 0; step < 5; step++) {
		if (demo2[step].checked) {
			a[1]= demo2[step].value;
			break;
		}else a[1]=0;		
	  }

	var demo3 = document.getElementsByName("p3");
	for (let step = 0; step < 5; step++) {
		if (demo3[step].checked) {
			a[2]= demo3[step].value;
			break;	
		}else a[2]=0;
	  }
	var demo4 = document.getElementsByName("p4");
	for (let step = 0; step < 5; step++) {
		if (demo4[step].checked) {
			a[3]= demo4[step].value;
			break;	
		}else a[3]=0;
	  }
	var demo5 = document.getElementsByName("p5");
	for (let step = 0; step < 5; step++) {
		if (demo5[step].checked) {
			a[4]= demo5[step].value;
			break;	
		}else a[4]=0;		
	  }
	var demo6 = document.getElementsByName("p6");
	for (let step = 0; step < 5; step++) {
		if (demo6[step].checked) {
			a[5]= demo6[step].value;
			break;	
		}else a[5]=0;
	  }
	var demo7 = document.getElementsByName("p7");
	for (let step = 0; step < 5; step++) {
		if (demo7[step].checked) {
			a[6]= demo7[step].value;
			break;	
		}else a[6]=0;		
	  }
	var demo8 = document.getElementsByName("p8");
	for (let step = 0; step < 5; step++) {
		if (demo8[step].checked) {
			a[7]= demo8[step].value;
			break;	
		}else a[7]=0;
	  }
	var demo9 = document.getElementsByName("p9");
	for (let step = 0; step < 5; step++) {
		if (demo9[step].checked) {
			a[8]= demo9[step].value;
			break;	
		}else a[8]=0;		
	  }
	var demo10 = document.getElementsByName("p10");
	for (let step = 0; step < 5; step++) {
		if (demo10[step].checked) {
			a[9]= demo10[step].value;
			break;
		}else a[9]=0;	
	  }
	  console.log('imprecion por array');
	  ///Comparando valores
	  var a1=0;
	  var a2=0;
	  var a3=0;
	  var a4=0;
	  var a5=0;
	  var a22=0;
	  var a11=0;
	  for (let step = 0; step <= 9; step++) {
		  console.log(a[step]);
		if(a[step]==1){
			a1=a1+1;
			a22=a22+a1;
		}else if(a[step]==2){
			a2=a2+1;
			a22=a22+a2;
		}else if(a[step]==3){
			a3=a3+1;
			a22=a22+a3;
		}else if(a[step]==4){
			a4=a4+1;
			a11=a11+a4;
		}else if(a[step]==5){
			a5=a5+1;
			a11=a11+a5;
		}
	  }
	  a1=(a1/10)*100;
	  a2=(a2/10)*100;
	  a3=(a3/10)*100;
	  a4=(a4/10)*100;
	  a5=(a5/10)*100;
	  a11=a4+a5;
	  a22=a1+a2+a3;
	setGrafico_Circuluar(a1,a2,a3,a4,a5,'linguistica','a1');
	setGrafico_Barras(a11,a22,'linguistica','a2');
////segundo grafico y opciones
	var demo11 = document.getElementsByName("p11");
	for (let step = 0; step < 5; step++) {
		if (demo11[step].checked) {
			b[0]= demo11[step].value;
			break;
		}else b[0]=0;		
	  }
	var demo12 = document.getElementsByName("p12");
	for (let step = 0; step < 5; step++) {
		if (demo12[step].checked) {
			b[1]= demo12[step].value;
			break;
		}else b[1]=0;		
	  }
	var demo13 = document.getElementsByName("p13");
	for (let step = 0; step < 5; step++) {
		if (demo13[step].checked) {
			b[2]= demo13[step].value;
			break;
		}else b[2]=0;		
	  }
	var demo14 = document.getElementsByName("p14");
	for (let step = 0; step < 5; step++) {
		if (demo14[step].checked) {
			b[3]= demo14[step].value;
			break;
		}else b[3]=0;		
	  }

	var demo15 = document.getElementsByName("p15");
	for (let step = 0; step < 5; step++) {
		if (demo15[step].checked) {
			b[4]= demo15[step].value;
			break;
		}else b[4]=0;	
	  }
	var demo16 = document.getElementsByName("p16");
	for (let step = 0; step < 5; step++) {
		if (demo16[step].checked) {
			b[5]= demo16[step].value;
			break;
		}else b[5]=0;	
	  }
	var demo17 = document.getElementsByName("p17");
	for (let step = 0; step < 5; step++) {
		if (demo17[step].checked) {
			b[6]= demo17[step].value;
			break;
		}else b[6]=0;	
	  }
	var demo18 = document.getElementsByName("p18");
	for (let step = 0; step < 5; step++) {
		if (demo17[step].checked) {
			b[7]= demo17[step].value;
			break;
		}else b[7]=0;	
	  }
	var demo19 = document.getElementsByName("p19");
	for (let step = 0; step < 5; step++) {
		if (demo19[step].checked) {
			b[8]= demo19[step].value;
			break;
		}else b[8]=0;	
	  }
	var demo20 = document.getElementsByName("p20");
	for (let step = 0; step < 5; step++) {
		if (demo20[step].checked) {
			b[9]= demo20[step].value;
			break;
		}else b[9]=0;	
	  }
 ///Comparando valores
 var b1=0;
 var b2=0;
 var b3=0;
 var b4=0;
 var b5=0;
 var b22=0;
 var b11=0;
 for (let step = 0; step <= 9; step++) {
	 console.log(b[step]);
   if(b[step]==1){
	   b1=b1+1;
	   b22=b22+b1;
   }else if(b[step]==2){
	   b2=b2+1;
	   b22=b22+b2;
   }else if(b[step]==3){
	   b3=b3+1;
	   b22=b22+b3;
   }else if(b[step]==4){
	   b4=b4+1;
	   b11=b11+b4;
   }else if(b[step]==5){
	   b5=b5+1;
	   b11=b11+b5;
   }
 }
 b1=(b1/10)*100;
 b2=(b2/10)*100;
 b3=(b3/10)*100;
 b4=(b4/10)*100;
 b5=(b5/10)*100;
 b11=b4+b5;
 b22=b1+b2+b3;
setGrafico_Circuluar(b1,b2,b3,b4,b5,'logico matematica','b1');
setGrafico_Barras(b11,b22,'logico matematico','b2');
///tercer grarfico y opciones

	var demo21 = document.getElementsByName("p21");
	for (let step = 0; step < 5; step++) {
		if (demo21[step].checked) {
			c[0]= demo21[step].value;
			break;
		}else c[0]=0;		
	  }
	var demo22 = document.getElementsByName("p22");
	for (let step = 0; step < 5; step++) {
		if (demo22[step].checked) {
			c[1]= demo22[step].value;
			break;
		}else c[1]=0;		
	  }
	var demo23 = document.getElementsByName("p23");
	for (let step = 0; step < 5; step++) {
		if (demo23[step].checked) {
			c[2]= demo23[step].value;
			break;
		}else c[2]=0;		
	  }
	var demo24 = document.getElementsByName("p24");
	for (let step = 0; step < 5; step++) {
		if (demo24[step].checked) {
			c[3]= demo24[step].value;
			break;
		}else c[3]=0;		
	  }
	var demo25 = document.getElementsByName("p25");
	for (let step = 0; step < 5; step++) {
		if (demo25[step].checked) {
			c[4]= demo25[step].value;
			break;
		}else c[4]=0;		
	  }
	var demo26 = document.getElementsByName("p26");
	for (let step = 0; step < 5; step++) {
		if (demo26[step].checked) {
			c[5]= demo26[step].value;
			break;
		}else c[5]=0;		
	  }
	var demo27 = document.getElementsByName("p27");
	for (let step = 0; step < 5; step++) {
		if (demo27[step].checked) {
			c[6]= demo27[step].value;
			break;
		}else c[6]=0;		
	  }
	var demo28 = document.getElementsByName("p28");
	for (let step = 0; step < 5; step++) {
		if (demo28[step].checked) {
			c[7]= demo28[step].value;
			break;
		}else c[7]=0;		
	  }
	var demo29 = document.getElementsByName("p29");
	for (let step = 0; step < 5; step++) {
		if (demo29[step].checked) {
			c[8]= demo29[step].value;
			break;
		}else c[8]=0;		
	  }
///Comparando valores
var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
var c22=0;
var c11=0;
for (let step = 0; step < 9; step++) {
	console.log(c[step]);
  if(c[step]==1){
	  c1=b1+1;
	  c22=c22+c1;
  }else if(c[step]==2){
	  c2=c2+1;
	  c22=c22+c2;
  }else if(c[step]==3){
	  c3=c3+1;
	  c22=c22+c3;
  }else if(c[step]==4){
	  c4=c4+1;
	  c11=c11+c4;
  }else if(c[step]==5){
	  c5=c5+1;
	  c11=c11+c5;
  }
}
c1=(c1/10)*100;
c2=(c2/10)*100;
c3=(c3/10)*100;
c4=(c4/10)*100;
c5=(c5/10)*100;
c11=c4+c5;
c22=c1+c2+c3;
setGrafico_Circuluar(c1,c2,c3,c4,c5,'espacial','c1');
setGrafico_Barras(c11,c22,'espacial','c2');
////////////////////////////////DDDDDD////////////////////////////
		
	var demo30 = document.getElementsByName("p30");
	for (let step = 0; step < 5; step++) {
		if (demo30[step].checked) {
			d[0]= demo30[step].value;
			break;
		}else d[0]=0;		
	  }

	var demo31 = document.getElementsByName("p31");
	for (let step = 0; step < 5; step++) {
		if (demo31[step].checked) {
			d[1]= demo31[step].value;
			break;
		}else d[1]=0;		
	  }
	var demo32 = document.getElementsByName("p32");
	for (let step = 0; step < 5; step++) {
		if (demo32[step].checked) {
			d[2]= demo32[step].value;
			break;
		}else d[2]=0;		
	  }
	var demo33 = document.getElementsByName("p33");
	for (let step = 0; step < 5; step++) {
		if (demo33[step].checked) {
			d[3]= demo33[step].value;
			break;
		}else d[3]=0;		
	  }
	var demo34 = document.getElementsByName("p34");
	for (let step = 0; step < 5; step++) {
		if (demo34[step].checked) {
			d[4]= demo34[step].value;
			break;
		}else d[4]=0;		
	  }
	var demo35 = document.getElementsByName("p35");
	for (let step = 0; step < 5; step++) {
		if (demo35[step].checked) {
			d[5]= demo35[step].value;
			break;
		}else d[5]=0;		
	  }
	var demo36 = document.getElementsByName("p36");
	for (let step = 0; step < 5; step++) {
		if (demo36[step].checked) {
			d[6]= demo36[step].value;
			break;
		}else d[6]=0;		
	  }
	var demo37 = document.getElementsByName("p37");
	for (let step = 0; step < 5; step++) {
		if (demo37[step].checked) {
			d[7]= demo37[step].value;
			break;
		}else d[7]=0;		
	  }
	var demo38 = document.getElementsByName("p38");
	for (let step = 0; step < 5; step++) {
		if (demo38[step].checked) {
			d[8]= demo38[step].value;
			break;
		}else d[8]=0;		
	  }
	var demo39 = document.getElementsByName("p39");
	for (let step = 0; step < 5; step++) {
		if (demo39[step].checked) {
			d[9]= demo39[step].value;
			break;
		}else d[9]=0;		
	  }
///Comparando valores
var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;
var d22=0;
var d11=0;
for (let step = 0; step < 9; step++) {
	console.log(d[step]);
  if(d[step]==1){
	  d1=d1+1;
	  d22=d22+d1;
  }else if(d[step]==2){
	  d2=d2+1;
	  d22=d22+d2;
  }else if(d[step]==3){
	  d3=d3+1;
	  d22=d22+d3;
  }else if(d[step]==4){
	  d4=d4+1;
	  d11=d11+d4;
  }else if(d[step]==5){
	  d5=d5+1;
	  d11=d11+c5;
  }
}
d1=(d1/10)*100;
d2=(d2/10)*100;
d3=(d3/10)*100;
d4=(d4/10)*100;
d5=(d5/10)*100;
d11=d4+d5;
d22=d1+d2+d3;
setGrafico_Circuluar(d1,d2,d3,d4,d5,'corporal cinetica','d1');
setGrafico_Barras(d11,d22,'corporal cinetica','d2'); 
///////////////////E//////////////////////
	
	var demo40 = document.getElementsByName("p40");
	for (let step = 0; step < 5; step++) {
		if (demo40[step].checked) {
			e[0]= demo40[step].value;
			break;
		}else e[0]=0;		
	  }
	var demo41 = document.getElementsByName("p41");
	for (let step = 0; step < 5; step++) {
		if (demo41[step].checked) {
			e[1]= demo41[step].value;
			break;
		}else e[1]=0;		
	  }
	var demo42 = document.getElementsByName("p42");
	for (let step = 0; step < 5; step++) {
		if (demo42[step].checked) {
			e[2]= demo42[step].value;
			break;
		}else e[2]=0;		
	  }
	var demo43 = document.getElementsByName("p43");
	for (let step = 0; step < 5; step++) {
		if (demo43[step].checked) {
			e[3]= demo43[step].value;
			break;
		}else e[3]=0;		
	  }
	var demo44 = document.getElementsByName("p44");
	for (let step = 0; step < 5; step++) {
		if (demo44[step].checked) {
			e[4]= demo44[step].value;
			break;
		}else e[4]=0;		
	  }
	var demo45 = document.getElementsByName("p45");
	for (let step = 0; step < 5; step++) {
		if (demo45[step].checked) {
			e[5]= demo45[step].value;
			break;
		}else e[5]=0;		
	  }
	var demo46 = document.getElementsByName("p46");
	for (let step = 0; step < 5; step++) {
		if (demo46[step].checked) {
			e[6]= demo46[step].value;
			break;
		}else e[6]=0;		
	  }
	var demo47 = document.getElementsByName("p47");
	for (let step = 0; step < 5; step++) {
		if (demo47[step].checked) {
			e[7]= demo47[step].value;
			break;
		}else e[7]=0;		
	  }
	var demo48 = document.getElementsByName("p48");
	for (let step = 0; step < 5; step++) {
		if (demo48[step].checked) {
			e[8]= demo48[step].value;
			break;
		}else e[8]=0;		
	  }
	var demo49 = document.getElementsByName("p49");
	for (let step = 0; step < 5; step++) {
		if (demo49[step].checked) {
			e[9]= demo49[step].value;
			break;
		}else e[9]=0;		
	  }
	 ///Comparando valores
	 var e1=0;
	 var e2=0;
	 var e3=0;
	 var e4=0;
	 var e5=0;
	 var e22=0;
	 var e11=0;
	 for (let step = 0; step < 9; step++) {
		 console.log(e[step]);
	   if(e[step]==1){
		   e1=e1+1;
		   e22=e22+e1;
	   }else if(e[step]==2){
		   e2=e2+1;
		   e22=e22+e2;
	   }else if(e[step]==3){
		   e3=e3+1;
		   e22=e22+e3;
	   }else if(e[step]==4){
		   e4=e4+1;
		   e11=e11+e4;
	   }else if(e[step]==5){
		   e5=e5+1;
		   e11=e11+e5;
	   }
	 }
	 e1=(e1/10)*100;
	 e2=(e2/10)*100;
	 e3=(e3/10)*100;
	 e4=(e4/10)*100;
	 e5=(e5/10)*100;
	 e11=e4+e5;
	 e22=e1+e2+e3;
	 setGrafico_Circuluar(e1,e2,e3,e4,e5,'Musical','e1');
	 setGrafico_Barras(e11,e22,'Musical','e2'); 
	 ///////////////////F//////////////////////
		
	var demo50 = document.getElementsByName("p50");
	for (let step = 0; step < 5; step++) {
		if (demo50[step].checked) {
			f[0]= demo50[step].value;
			break;
		}else f[0]=0;		
	  }
	var demo51 = document.getElementsByName("p51");
	for (let step = 0; step < 5; step++) {
		if (demo51[step].checked) {
			f[1]= demo51[step].value;
			break;
		}else f[1]=0;		
	  }
	var demo52 = document.getElementsByName("p52");
	for (let step = 0; step < 5; step++) {
		if (demo52[step].checked) {
			f[2]= demo52[step].value;
			break;
		}else f[2]=0;		
	  }
	var demo53 = document.getElementsByName("p53");
	for (let step = 0; step < 5; step++) {
		if (demo53[step].checked) {
			f[3]= demo53[step].value;
			break;
		}else f[3]=0;		
	  }
	var demo54 = document.getElementsByName("p54");
	for (let step = 0; step < 5; step++) {
		if (demo54[step].checked) {
			f[4]= demo54[step].value;
			break;
		}else f[4]=0;		
	  }
	var demo55 = document.getElementsByName("p55");
	for (let step = 0; step < 5; step++) {
		if (demo55[step].checked) {
			f[5]= demo55[step].value;
			break;
		}else f[5]=0;		
	  }
	var demo56 = document.getElementsByName("p56");
	for (let step = 0; step < 5; step++) {
		if (demo56[step].checked) {
			f[6]= demo56[step].value;
			break;
		}else f[6]=0;		
	  }
	var demo57 = document.getElementsByName("p57");
	for (let step = 0; step < 5; step++) {
		if (demo57[step].checked) {
			f[7]= demo57[step].value;
			break;
		}else f[7]=0;		
	  }
	var demo58 = document.getElementsByName("p58");
	for (let step = 0; step < 5; step++) {
		if (demo58[step].checked) {
			f[8]= demo58[step].value;
			break;
		}else f[8]=0;		
	  }
	var demo59 = document.getElementsByName("p59");
	for (let step = 0; step < 5; step++) {
		if (demo59[step].checked) {
			f[9]= demo59[step].value;
			break;
		}else f[9]=0;		
	  }
	
	 ///Comparando valores
	 var f1=0;
	 var f2=0;
	 var f3=0;
	 var f4=0;
	 var f5=0;
	 var f22=0;
	 var f11=0;
	 for (let step = 0; step < 9; step++) {
		 console.log(f[step]);
	   if(f[step]==1){
		   f1=f1+1;
		   f22=f22+f1;
	   }else if(f[step]==2){
		   f2=f2+1;
		   f22=f22+f2;
	   }else if(f[step]==3){
		   f3=f3+1;
		   f22=f22+f3;
	   }else if(f[step]==4){
		   f4=f4+1;
		   f11=f11+f4;
	   }else if(f[step]==5){
		   f5=f5+1;
		   f11=f11+f5;
	   }
	 }
	 f1=(f1/10)*100;
	 f2=(f2/10)*100;
	 f3=(f3/10)*100;
	 f4=(f4/10)*100;
	 f5=(f5/10)*100;
	 f11=f4+f5;
	 f22=f1+f2+f3;
	 setGrafico_Circuluar(f1,f2,f3,f4,f5,'Naturalista','f1');
	 setGrafico_Barras(f11,f22,'Naturalista','f2'); 
	 ///////////////////G//////////////////////
	
	var demo60 = document.getElementsByName("p60");
	for (let step = 0; step < 5; step++) {
		if (demo60[step].checked) {
			g[0]= demo60[step].value;
			break;
		}else g[0]=0;		
	  }
	var demo61 = document.getElementsByName("p61");
	for (let step = 0; step < 5; step++) {
		if (demo61[step].checked) {
			g[1]= demo61[step].value;
			break;
		}else g[1]=0;		
	  }
	var demo62 = document.getElementsByName("p62");
	for (let step = 0; step < 5; step++) {
		if (demo62[step].checked) {
			g[2]= demo62[step].value;
			break;
		}else g[2]=0;		
	  }
	var demo63 = document.getElementsByName("p63");
	for (let step = 0; step < 5; step++) {
		if (demo63[step].checked) {
			g[3]= demo63[step].value;
			break;
		}else g[3]=0;		
	  }
	var demo64 = document.getElementsByName("p64");
	for (let step = 0; step < 5; step++) {
		if (demo64[step].checked) {
			g[4]= demo64[step].value;
			break;
		}else g[4]=0;		
	  }
	var demo65 = document.getElementsByName("p65");
	for (let step = 0; step < 5; step++) {
		if (demo65[step].checked) {
			g[5]= demo65[step].value;
			break;
		}else g[5]=0;		
	  }
	var demo66 = document.getElementsByName("p66");
	for (let step = 0; step < 5; step++) {
		if (demo66[step].checked) {
			g[6]= demo66[step].value;
			break;
		}else g[6]=0;		
	  }
	var demo67 = document.getElementsByName("p67");
	for (let step = 0; step < 5; step++) {
		if (demo67[step].checked) {
			g[7]= demo67[step].value;
			break;
		}else g[7]=0;		
	  }
	var demo68 = document.getElementsByName("p68");
	for (let step = 0; step < 5; step++) {
		if (demo68[step].checked) {
			g[8]= demo68[step].value;
			break;
		}else g[8]=0;		
	  }
	var demo69 = document.getElementsByName("p69");
	for (let step = 0; step < 5; step++) {
		if (demo69[step].checked) {
			g[9]= demo69[step].value;
			break;
		}else g[9]=0;		
	  }
	 ///Comparando valores
	 var g1=0;
	 var g2=0;
	 var g3=0;
	 var g4=0;
	 var g5=0;
	 var g22=0;
	 var g11=0;
	 for (let step = 0; step < 9; step++) {
		 console.log(g[step]);
	   if(g[step]==1){
		   g1=g1+1;
		   g22=g22+g1;
	   }else if(g[step]==2){
		   g2=g2+1;
		   g22=g22+g2;
	   }else if(g[step]==3){
		   g3=g3+1;
		   g22=g22+g3;
	   }else if(g[step]==4){
		   g4=g4+1;
		   g11=g11+g4;
	   }else if(g[step]==5){
		   g5=g5+1;
		   g11=g11+g5;
	   }
	 }
	 g1=(g1/10)*100;
	 g2=(g2/10)*100;
	 g3=(g3/10)*100;
	 g4=(g4/10)*100;
	 g5=(g5/10)*100;
	 g11=g4+g5;
	 g22=g1+g2+g3;
	 setGrafico_Circuluar(g1,g2,g3,g4,g5,'Interpersonal','g1');
	 setGrafico_Barras(g11,g22,'Interpersonal','g2'); 
	 ///////////////////H//////////////////////
	
	var demo70 = document.getElementsByName("p70");
	for (let step = 0; step < 5; step++) {
		if (demo70[step].checked) {
			h[0]= demo70[step].value;
			break;
		}else h[0]=0;		
	  }
	var demo71 = document.getElementsByName("p71");
	for (let step = 0; step < 5; step++) {
		if (demo71[step].checked) {
			h[1]= demo71[step].value;
			break;
		}else h[1]=0;		
	  }
	var demo72 = document.getElementsByName("p72");
	for (let step = 0; step < 5; step++) {
		if (demo72[step].checked) {
			h[2]= demo72[step].value;
			break;
		}else h[2]=0;		
	  }
	var demo73 = document.getElementsByName("p73");
	for (let step = 0; step < 5; step++) {
		if (demo73[step].checked) {
			h[3]= demo73[step].value;
			break;
		}else h[3]=0;		
	  }
	var demo74 = document.getElementsByName("p74");
	for (let step = 0; step < 5; step++) {
		if (demo74[step].checked) {
			h[4]= demo74[step].value;
			break;
		}else h[4]=0;		
	  }
	var demo75 = document.getElementsByName("p75");
	for (let step = 0; step < 5; step++) {
		if (demo75[step].checked) {
			h[5]= demo75[step].value;
			break;
		}else h[5]=0;		
	  }
	var demo76 = document.getElementsByName("p76");
	for (let step = 0; step < 5; step++) {
		if (demo76[step].checked) {
			h[6]= demo76[step].value;
			break;
		}else h[6]=0;		
	  }
    var demo77 = document.getElementsByName("p77");
	for (let step = 0; step < 5; step++) {
		if (demo77[step].checked) {
			h[7]= demo77[step].value;
			break;
		}else h[7]=0;		
	  }
	var demo78 = document.getElementsByName("p78");
	for (let step = 0; step < 5; step++) {
		if (demo78[step].checked) {
			h[8]= demo78[step].value;
			break;
		}else h[8]=0;		
	  }
	var demo79 = document.getElementsByName("p79");
	for (let step = 0; step < 5; step++) {
		if (demo79[step].checked) {
			h[9]= demo79[step].value;
			break;
		}else h[9]=0;		
	  }

///Comparando valores
var h1=0;
var h2=0;
var h3=0;
var h4=0;
var h5=0;
var h22=0;
var h11=0;
for (let step = 0; step < 9; step++) {
	console.log(h[step]);
  if(h[step]==1){
	  h1=h1+1;
	  h22=h22+h1;
  }else if(h[step]==2){
	  h2=h2+1;
	  h22=h22+h2;
  }else if(h[step]==3){
	  h3=h3+1;
	  h22=h22+h3;
  }else if(h[step]==4){
	  h4=h4+1;
	  h11=h11+h4;
  }else if(h[step]==5){
	  h5=h5+1;
	  h11=h11+h5;
  }
}
h1=(h1/10)*100;
h2=(h2/10)*100;
h3=(h3/10)*100;
h4=(h4/10)*100;
h5=(h5/10)*100;
h11=h4+h5;
h22=h1+h2+h3;
setGrafico_Circuluar(h1,h2,h3,h4,h5,'Intrapersonal','h1');
setGrafico_Barras(h11,h22,'Intrapersonal','h2');
getTest('compatible');
//setGrafico_Circuluar();
}
/** funciones para iteraccion con el ususairo*/
function muestra_inicio(){
		var	inicio = document.getElementById('test');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
		var	pagina = document.getElementById('compatible');
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		
}
function muestra_test (id) {
	if (document.getElementById) {
		var	pagina = document.getElementById(id);
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	inicio = document.getElementById('inicio');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
	}
}
// reseteo de los valores del test
function muestra_test_compatible(id) {
	if (document.getElementById) {
		var	pagina = document.getElementById(id);
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	inicio = document.getElementById('compatible');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
	}
}


//
function getTest (id) {
	if (document.getElementById) {
		var	pagina = document.getElementById(id);
		pagina.style.display = (pagina.style.display == 'none')?'block':'none';
		var	inicio = document.getElementById('test');
		inicio.style.display = (inicio.style.display == 'none')?'block':'none';
	}
}
function setGrafico_Circuluar(_a1,_a2,_a3,_a4,_a5,_intel,_ids){
	console.log(_intel);
var ctx = document.getElementById('myChart'+_ids).getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
	//type: 'polarArea',
	//type:'bar',
    data:{
	datasets: [{
		data: [_a1,_a2,_a3,_a4,_a5],
		backgroundColor: ['#42a5f5', 'red', 'green','blue','violet'],
		label: 'Inteligencia '+_intel}],
		labels: ['Nunca','Casi-nunca','A Veces','Casi Siempre','Siempre']},
    options: {responsive: true}
});
}
function setGrafico_Barras(_a11,_a22,_intel,_ids){
	var ctx = document.getElementById('myChart'+_ids).getContext('2d');
	var chart = new Chart(ctx, {
		//type: 'doughnut',
		type:'bar',
		data:{
		datasets: [{
			data: [_a11,_a22],
			backgroundColor: ['#42a5f5', 'violet'],
			label: 'Inteligencia '+_intel}],
			labels: ['Psotivo','Negativo']},
		options: {responsive: true}
	});
	}
window.onload = function(){
	muestra_inicio();		
}