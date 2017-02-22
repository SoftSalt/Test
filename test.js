const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var btnWindow = null;
var btn2Window = null;
var btn3Window = null;
var mainWindow=null;
var music= null;

dp = function(dips) {
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function dialog(ti,t,ts,nb)
{
ctx.runOnUiThread(new java.lang.Runnable({
run: function()
{
try
{
var m = new android.app.AlertDialog.Builder(ctx)
var tex= new android.widget.TextView(ctx);
tex.setText(t)
tex.setTextSize(ts)
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
layout.addView(tex);
var scr = new android.widget.ScrollView(ctx);
scr.addView(layout);
m.setView(scr);
m.setTitle(ti);
m.setNegativeButton(nb,null);
m.show();
}
catch(err)
{
print(err + "error" + err.lineNumber);
}}}))
}

makeBtn = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function() {
			try {
				btnWindow = new android.widget.PopupWindow();
				btn2Window = new android.widget.PopupWindow();
				btn3Window = new android.widget.PopupWindow();
				var layout = new
 android.widget.RelativeLayout(ctx);
 var layout2 = new
 android.widget.RelativeLayout(ctx);
 var layout3 = new
 android.widget.RelativeLayout(ctx);
				var btn = new android.widget.Button(ctx);
				btn.setText("M");
				var btn2 = new android.widget.Button(ctx);
				btn2.setText("S");
				var btn3 = new android.widget.Button(ctx);
				btn3.setText("A");
	btn.setTextColor(android.graphics.Color.parseColor("#000000"));
	btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFFFF")));
				btn.setOnClickListener(new android.view.View.OnClickListener({
					onClick : function() {
						mainWindow == null ? openMainMenu() : closeMainMenu();
					}
				}));
				btn2.setOnClickListener(new android.view.View.OnClickListener({
					onClick : function() {	Arrow.shoot(Player.getEntity(),99999,0,false,false);
						clientMessage("S");
					}
				}));
				btn3.setOnClickListener(new android.view.View.OnClickListener({
					onClick : function() {
						clientMessage("A");
					}
				}));
				
				layout.addView(btn);
				btnWindow.setContentView(layout);
				btnWindow.setWidth(dp(50));
				btnWindow.setHeight(dp(50));
				btnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#00000000")));
				
				layout2.addView(btn2);
				btn2Window.setContentView(layout2);
				btn2Window.setWidth(dp(50));
				btn2Window.setHeight(dp(50));
				btn2Window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#00000000")));
				
				layout3.addView(btn3);
				btn3Window.setContentView(layout3);
				btn3Window.setWidth(dp(50));
				btn3Window.setHeight(dp(50));
	 	  btn3Window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#00000000")));
				btnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM,0,500);
				
				btn2Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,500);
				
				btn3Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,700);
			}catch(e) {
				print(e);
			}
		}
	}));
}

removeBtn = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function() {
			try {
				btnWindow.dismiss();
				btnWindow = null;
			}catch(e) {
				print(e);
			}
		}
	}));
}

openMainMenu = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function() {
			try {
				mainWindow = new android.widget.PopupWindow();
				var layout1 = new android.widget.LinearLayout(ctx);
				layout1.setOrientation(1);
				
				var title = new android.widget.TextView(ctx);
title.setText("\nMENU&BGM\n");
title.setTextSize(25);
title.setTextColor(android.graphics.Color.argb(255, 0, 0, 0));
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255, 230, 230, 230)));
title.setPaintFlags(title.getPaintFlags()|android.graphics.Paint.FAKE_BOLD_TEXT_FLAG);
title.setGravity(android.view.Gravity.CENTER);
layout1.addView(title);							

//여기서부터
var button = new android.widget.Button(ctx);
		
		button.setText("전전전세");				
		button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v) {
dialog("공지","이걸 클릭한 시점에서 너도 일반인은 아니구나?",18,"닫기");
music = new android.media.MediaPlayer;
music.reset();
music.setDataSource("https://raw.githubusercontent.com/SoftSalt/Test/master/%EC%A0%84%EC%A0%84%EC%A0%84%EC%84%B8.mp3");
music.prepare();
music.start();
}}));
layout1.addView(button);
//여기까지
var button = new android.widget.Button(ctx);
		
		button.setText("꿈의등불");				
		button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v) {
dialog("공지","이걸 클릭한 시점에서 너도 일반인은 아니구나?",18,"닫기");
music = new android.media.MediaPlayer;
music.reset();
music.setDataSource("https://raw.githubusercontent.com/SoftSalt/Test/master/%EA%BF%88%EC%9D%98%EB%93%B1%EB%B6%88.mp3");
music.prepare();
music.start();
}}));
layout1.addView(button);

var button = new android.widget.Button(ctx);
		
		button.setText("아무것도 아니야");				
		button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v) {
dialog("공지","이걸 클릭한 시점에서 너도 일반인은 아니구나?",18,"닫기");
music = new android.media.MediaPlayer;
music.reset();
music.setDataSource("https://raw.githubusercontent.com/SoftSalt/Test/master/%EC%95%84%EB%AC%B4%EA%B2%83%EB%8F%84%20%EC%95%84%EB%8B%88%EC%95%BC.mp3");
music.prepare();
music.start();
}}));
layout1.addView(button);

var button = new android.widget.Button(ctx);
		
		button.setText("스파클");				
		button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v) {
dialog("공지","이걸 클릭한 시점에서 너도 일반인은 아니구나?",18,"닫기");
music = new android.media.MediaPlayer;
music.reset();
music.setDataSource("https://raw.githubusercontent.com/SoftSalt/Test/master/%EC%8A%A4%ED%8C%8C%ED%81%B4.mp3");
music.prepare();
music.start();
}}));
layout1.addView(button);

var title = new android.widget.TextView(ctx);
title.setText("\n© 2017 made by csy\n");
title.setTextSize(10);
title.setTextColor(android.graphics.Color.argb(255, 0, 0, 0));
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(255, 230, 230, 230)));
title.setPaintFlags(title.getPaintFlags()|android.graphics.Paint.FAKE_BOLD_TEXT_FLAG);
title.setGravity(android.view.Gravity.CENTER);
layout1.addView(title);
				
				var scr = new android.widget.ScrollView(ctx);
				scr.addView(layout1);
				var layout2 = new android.widget.LinearLayout(ctx);
				layout2.setOrientation(1);				
				layout2.addView(scr);
				mainWindow.setContentView(layout2);
				mainWindow.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3);
				mainWindow.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
				mainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
				mainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			}catch(e) {
				print(e);
			}
		}
	}));
}

closeMainMenu = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function() {
			try {
				mainWindow.dismiss();
				mainWindow = null;
			}catch(e) {
				print(e);
			}
		}
	}));
}

function selectLevelHook() {
	makeBtn();
}

function leaveGame() {
	removeBtn();
}

var Arrow={
shoot:function(p,power,ep,efire,auto){
var yaw=Entity.getYaw(p)/180*Math.PI;
var pitch=(Entity.getPitch(p))/180*Math.PI;
var sin=-Math.sin(yaw);
var cos=Math.cos(yaw);
var ysin=-Math.sin(pitch);
var ycos=Math.cos(pitch);
var arrow=Level.spawnMob(Entity.getX(p)+2*sin,Entity.getY(p),Entity.getZ(p)+2*cos,80);
var explode=true;
var autoVel;
if (ep==0||ep==undefined) explode=false;
if (auto){
var distance=999;
var id;
for each (var i in Entity.getAll()){
if (Math.sqrt(Math.pow(Entity.getX(p)-Entity.getX(i),2)+Math.pow(Entity.getY(p)-Entity.getY(i),2)+Math.pow(Entity.getZ(p)-Entity.getZ(i),2))<distance&&i!=p&&Entity.getEntityTypeId(i)<=63){
distance=Math.sqrt(Math.pow(Entity.getX(p)-Entity.getX(i),2)+Math.pow(Entity.getY(p)-Entity.getY(i),2)+Math.pow(Entity.getZ(p)-Entity.getZ(i),2));
id=i;
}
}
if (id==undefined) return;
autoVel=id;
Entity.setVelX(arrow,(Entity.getX(id)-Entity.getX(p))*power);
Entity.setVelY(arrow,(Entity.getY(id)-Entity.getY(p))*power);
Entity.setVelZ(arrow,(Entity.getZ(id)-Entity.getZ(p))*power);
}else{
Entity.setVelX(arrow,sin*ycos*power);
Entity.setVelY(arrow,ysin*power);
Entity.setVelZ(arrow,cos*ycos*power);
}
Arrow.flying.push({id:arrow,explode:explode,fire:efire,explodePower:ep,auto:auto,autoVel:autoVel,power:power});
},
flying:[],
thread:new java.lang.Thread({run:function(){while(1){
java.lang.Thread.sleep(50);
for (var i in Arrow.flying){
if (Entity.getY(Arrow.flying[i].id)!=0){
Arrow.flying[i].x=Entity.getX(Arrow.flying[i].id);
Arrow.flying[i].y=Entity.getY(Arrow.flying[i].id);
Arrow.flying[i].z=Entity.getZ(Arrow.flying[i].id);
}
if ((Entity.getVelX(Arrow.flying[i].id)==0&&Entity.getVelZ(Arrow.flying[i].id)==0)||Entity.getY(Arrow.flying[i].id)<=0){
if (Arrow.flying[i].explode){
Level.explode(Arrow.flying[i].x,Arrow.flying[i].y,Arrow.flying[i].z,Arrow.flying[i].explodePower,Arrow.flying[i].fire);
}
Entity.remove(Arrow.flying[i].id);
Arrow.flying.splice(i,1);
}else{
Level.explode(Entity.getX(Arrow.flying[i].id),Entity.getY(Arrow.flying[i].id),Entity.getZ(Arrow.flying[i].id),0.01);
if (Arrow.flying[i].auto){
var vx=0,vy=0,vz=0;
if (Entity.getX(Arrow.flying[i].autoVel)-Entity.getX(Arrow.flying[i].id)>0) vx=1;
else if (Entity.getX(Arrow.flying[i].autoVel)-Entity.getX(Arrow.flying[i].id)<0) vx=-1;
if (Entity.getZ(Arrow.flying[i].autoVel)-Entity.getZ(Arrow.flying[i].id)>0) vz=1;
else if (Entity.getZ(Arrow.flying[i].autoVel)-Entity.getZ(Arrow.flying[i].id)<0) vz=-1;
Entity.setVelX(Arrow.flying[i].id,vx*Arrow.flying[i].power);
Entity.setVelY(Arrow.flying[i].id,(Entity.getY(Arrow.flying[i].autoVel)-Entity.getY(Arrow.flying[i].id))*Arrow.flying[i].power+0.07840000092983246/2);
Entity.setVelZ(Arrow.flying[i].id,vz*Arrow.flying[i].power);
}
}
}
}}})
}
Arrow.thread.start();
//Arrow.shoot(object 날리는 엔티티, float 속력, int 폭발크기(0이거나 안쓰면 안합니다), boolean 폭발시 불붙음여부, boolean 유도여부);
