//by alphaAE @小ASD555

var alpha = "b0.0.7";

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var simpleGUI = null;

//方向显示
var fxs=["←","↙","↓","↘","→","↗","↑","↖"];
var FXshow = false;
var time=0;

//开关变量
var sk=0;
var FXBL=false;

//SET
var Set1=false;
var Set2=false;
var Sopt0=false;

var DATA=[];

//IO
var sdcard = android.os.Environment.getExternalStorageDirectory();
var sdcards = sdcard.getAbsolutePath() + "/games/com.mojang/";

var PathM = sdcards + "WorldOuts";
var Path = sdcards + "WorldOuts/";
var FileName = "name.worldo";
var FileX = "X.dat";
var FileY = "Y.dat";
var FileZ = "Z.dat";
var FileId = "DI.dat";
var FileData = "DATA.dat";

//////////  自定义方法
function Output(){
	try {
		clientMessage("导出开始...");
		NewPath(PathM);
		NewFile(Path+FileName);
	
		var FileOut = new java.io.BufferedOutputStream(new java.io.FileOutputStream(Path+FileName));
		var dFileOut = new java.io.DataOutputStream(FileOut);
	
		//写入
		var Xmax=Math.max(Set1[0],Set2[0]);
		var Ymax=Math.max(Set1[1],Set2[1]);
		var Zmax=Math.max(Set1[2],Set2[2]);
		var Xmin=Math.min(Set1[0],Set2[0]);
		var Ymin=Math.min(Set1[1],Set2[1]);
		var Zmin=Math.min(Set1[2],Set2[2]);
		var Xfs,Yfs,Zfs;
		var OutString = 0;
		var OutInt = Math.floor((Xmax-Xmin)/10);
		
		for(var Xf = Xmin; Xf<Xmax; Xf++){
			/* var OutInty =Xf%OutInt;
			if(OutInty == 0){
				OutString+=10;
				clientMessage("导出中: " + OutString + " %");
			} */
			for(var Yf = Ymin; Yf<Ymax; Yf++){
				for(var Zf = Zmin; Zf<Zmax; Zf++){
					
					Xfs=Xf-Sopt0[0];
					dFileOut.writeInt(Xfs);
					Yfs=Yf-Sopt0[1];
					dFileOut.writeInt(Yfs);
					Zfs=Zf-Sopt0[2];
					dFileOut.writeInt(Zfs);
					
					dFileOut.writeInt(getTile(Xf, Yf, Zf));
					dFileOut.writeInt(Level.getData(Xf, Yf, Zf));
		
				}
			}
		}
			
		dFileOut.close();
		clientMessage("导出完成.");
	}catch(e){
		prints("错误: "+e+".");
	}
}

function NewPath(p) {
	try {
		var f = new java.io.File(p);
		if(f.exists()){
			//prints("文件夹 "+p+" 已经存在");
		} else {
			f.mkdir();
		}
	} catch (e) {
		prints("错误: "+e+".");
	}	
}
	
function NewFile(p) {
	try {
		var f = new java.io.File(p);
		if(f.exists()){
			prints("文件 "+p+" 已被覆盖");
			DelFile(Path+FileName);
			
		} else {
			f.createNewFile();
		}
	} catch (e) {
		prints("错误: "+e+".");
	}
}
	
function DelFile(p) {
	try {
		var f = new java.io.File(p);
		if(f.exists()){
			f.delete();
		}
	} catch (e) {
		prints("错误: "+e+".");
	}
}

function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function prints(string){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({run: function(){android.widget.Toast.makeText(ctx,string,0).show()}}));
}

//////////  GUI
function gui(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				var layout = new android.widget.LinearLayout(ctx);
				var B_we = new android.widget.Button(ctx);
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setText("α");
				B_we.setOnClickListener(new android.view.View.OnClickListener(){
				onClick: function(v){menu();}
				});
				layout.addView(B_we);				
				w1 = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				w1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.3+70);
			}catch(e){prints("错误!\n"+e);}
		}
	})); 
} 

function guioff(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			if(w1 != null){w1.dismiss();w1 = null;}
		}
	}));
}

function menu(){
	var layout=new android.widget.LinearLayout(ctx);
	try{
		var menu=new android.widget.PopupWindow(layout, dip2px(ctx,85 ), dip2px(ctx, 35)); 
		menu.setFocusable(true);
		mainMenu=menu;
		var layout=new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);

		var button=new android.widget.Button(ctx);
		button.setText("导出选区");
		button.setOnClickListener(new android.view.View.OnClickListener({
			onClick:function(viewarg){
				if(Set1!=false&&Set2!=false&&Sopt0!=false){
					Output();
				}else if(Set1==false||Set2==false){
					prints("未检测到记录点或记录点不足");
				}else if(Sopt0==false){
					prints("未检测到基准点");
				}
			}
		}));
		layout.addView(button);
		
		var button=new android.widget.Button(ctx);
		button.setText("清除记录点");
		button.setOnClickListener(new android.view.View.OnClickListener({
			onClick:function(viewarg){
				Set1=false;
				Set2=false;
				prints("清除完成");
			}
		}));
		layout.addView(button);
		
		var button=new android.widget.Button(ctx);
		button.setText("/Up 1");
		button.setOnClickListener(new android.view.View.OnClickListener({
			onClick:function(viewarg){
				setTile( getPlayerX(), getPlayerY()-2, getPlayerZ(), 20, 0);
				prints("方块已生成");
			}
		}));
		layout.addView(button);
		
		var buttonk=new android.widget.Button(ctx);
		if(sk==1){buttonk.setText("坐标辅助(开)");}else if(sk==0){buttonk.setText("坐标辅助(关)");}
		buttonk.setOnClickListener(new android.view.View.OnClickListener({
			onClick:function(viewarg){
				if(sk==0){
					buttonk.setText("坐标辅助(开)");
					sk=1;FXgui();FXBL=true;
				}else if(sk==1){
					buttonk.setText("坐标辅助(关)");
					sk=0;
					FXguioff();
					FXshow=false;
					FXBL=false;
				}
			}
		}));
		layout.addView(buttonk);

		var button=new android.widget.Button(ctx);
		button.setText("用法说明");
		//button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor('#CA77E6')));
		button.setOnClickListener(new android.view.View.OnClickListener({
			onClick:function(viewarg){
				UiIntroduce();
			}
		}));
		layout.addView(button);
		
		var stitle=new android.widget.TextView(ctx)
		stitle.setTextSize(12)
		stitle.setTextColor(android.graphics.Color.rgb(255,255,255));
		stitle.setText("\n"+"移植试验 "+alpha+"\n©2017 alphaAE")
		stitle.setLayoutParams(textParams)
		layout.addView(stitle)

		var mlayout=makeMenu(ctx,menu,layout);
		menu.setContentView(mlayout);
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25);
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
 
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor('#8C53BF')));
		menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
	}catch(e){prints("错误: "+e+".");}
}

function makeMenu(ctx,menu,layout){
	var mlayout=new android.widget.RelativeLayout(ctx);
	var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
	var scrollview=new android.widget.ScrollView(ctx);
	var pad = dip2px(ctx,5);
	scrollview.setPadding(pad,pad,pad,pad);
	scrollview.setLayoutParams(svParams);
	scrollview.addView(layout);
	mlayout.addView(scrollview);
	return mlayout;
}

function UiIntroduce(){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	var ad=android.app.AlertDialog.Builder;
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				var duce=new ad(ctx);
				duce.setNegativeButton("返回",new android.content.DialogInterface.OnClickListener(){
					onClick: function(dia,w){ //无执行
					}
				});
				duce.setTitle("用法说明");
				duce.setMessage("使用方法:\n");
				duce.show();
			}catch(e){prints("错误: "+e+".");}
		}
	}));
}

function FXgui(){
	ctx.runOnUiThread(new java.lang.Runnable(){
		run: function(){
			if(FXshow==false){
			var metrics = new android.util.DisplayMetrics();
			ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
			var displayHeight = metrics.heightPixels;
			var displayWidth = metrics.widthPixels;
	
			simpleGUI=new android.widget.PopupWindow(ctx);
			var layout=new android.widget.LinearLayout(ctx);

			textPosition = new android.widget.TextView(ctx);
			textPosition.setText("");
			textPosition.setTextSize(10);
			textPosition.setTextColor(android.graphics.Color.WHITE);

			yaws = new android.widget.TextView(ctx);
			yaws.setText("");
			yaws.setTextSize(15);
			yaws.setTextColor(android.graphics.Color.WHITE);

			layout.setOrientation(1);
			layout.addView(textPosition);
			layout.addView(yaws);

			simpleGUI.setContentView(layout);
			simpleGUI.setWidth(displayWidth/2);
			simpleGUI.setHeight(displayHeight);
			simpleGUI.setBackgroundDrawable(null);
			simpleGUI.setTouchable(false);
			simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,displayWidth/384,0);
			FXshow=true;
			}
		}
	})
}

function FXguioff(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			if(FXshow==true){
				simpleGUI.dismiss();FXshow=false;
			}
		}
	}));
}


//////////  启动器方法
function newLevel(){
	gui();
	FileName = Level.getWorldName() + ".worldo";
}

function leaveGame(){
	guioff();
	FXguioff();
}

function useItem(x,y,z,i,b,s,id,bd){
	if(i==345){
		datas=Level.getData(x,y,z);
		type=Block.getRenderType(b);
		clientMessage("X="+x+" Y="+y+" Z="+z+" S="+s+" Id="+b+" Data="+datas+" Type="+type);
	}

	if(i==264){
		Sopt0=[x,y,z];
		clientMessage("基准点设置为 X:"+x+" Y:"+y+" Z:"+z);
	}
		
	if(i==267){
		if(Set1==false){
			preventDefault();
			Set1=[x,y,z];
			prints("设置点一");
		}else if(Set2==false){
			preventDefault();
			Set2=[x,y,z];
			prints("设置点二");
		}
	}

}

function modTick(){
	if(FXBL){
		time++
		if(time<=10&&FXshow==true){
			ctx.runOnUiThread(new java.lang.Runnable(){
				run: function(){
					textPosition.setText("XYZ: " + Math.round(Player.getX()) + " / " + Math.round(Player.getY()) + " / " + Math.round(Player.getZ()));

					var yaw=Math.abs(Math.round(getYaw()%360));
					if(yaw>337.5||yaw<=22.5){
						xfx=fxs[0];zfx=fxs[6];
					}else if(yaw>22.5&&yaw<=76.5){
						xfx=fxs[1];zfx=fxs[7];
					}else if(yaw>67.5&&yaw<=112.5){
						xfx=fxs[2];zfx=fxs[0];
					}else if(yaw>112.5&&yaw<=157.5){
						xfx=fxs[3];zfx=fxs[1];
					}else if(yaw>157.5&&yaw<=202.5){
						xfx=fxs[4];zfx=fxs[2];
					}else if(yaw>202.5&&yaw<=247.5){
						xfx=fxs[5];zfx=fxs[3];
					}else if(yaw>247.5&&yaw<=292.5){
						xfx=fxs[6];zfx=fxs[4];
					}else if(yaw>292.5&&yaw<=337.5){
						xfx=fxs[7];zfx=fxs[5];
					}
					yaws.setText("+X:"+xfx+"+Z:"+zfx);
				}
			})
			time=0;
		}
	}
}



