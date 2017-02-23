const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var btnWindow = null;
var btn2Window = null;
var btn3Window = null;
var mainWindow=null;

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
				btn3.setText("I");
	btn.setTextColor(android.graphics.Color.parseColor("#000000"));
	btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFFFF")));
				btn.setOnClickListener(new android.view.View.OnClickListener({
					onClick : function() {
						mainWindow == null ? openMainMenu() : closeMainMenu();
					}
				}));
				btn2.setOnClickListener(new android.view.View.OnClickListener({
					onClick : function() {
px=Math.floor(getPlayerX());
py=Math.floor(getPlayerY()); 
pz=Math.floor(getPlayerZ()); 
yaw=Math.floor(getYaw());
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI); 
pitch=Math.floor(getPitch()); 
tan=-Math.sin(pitch/180*Math.PI);
cosa=Math.cos(pitch/180*Math.PI);
Entity.setVelX(Player.getEntity(),1.60*sin*cosa);
Entity.setVelY(Player.getEntity(),1.60*tan);
Entity.setVelZ(Player.getEntity(),1.60*cos*cosa);
setTile(Player.getX(),Player.getY(),Player.getZ(),10);
Entity.addEffect(Player.getEntity(),MobEffect.fireResistance,5*20,0,false, true);
Entity.addEffect(Player.getEntity(),MobEffect.invisibility,1*20,0,false, true);
					}
				}));
				btn3.setOnClickListener(new android.view.View.OnClickListener({
					onClick : function() {
						addItemInventory(276,1);
addItemInventory(310,1);
addItemInventory(311,1);
addItemInventory(312,1);
addItemInventory(313,1);
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
				btnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM,0,700);

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
title.setText("\nMUSIC\n");
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
dialog("<MUSIC>","'전전전세'가 재생됩니다.",18,"닫기");
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
dialog("<MUSIC>","'꿈의등불'이 재생됩니다.",18,"닫기");
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

dialog("<MUSIC>","'아무것도 아니야'가 재생됩니다.",18,"닫기");
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
dialog("<MUSIC>","'스파클'가 재생됩니다.",18,"닫기");
music = new android.media.MediaPlayer;
music.reset();
music.setDataSource("https://raw.githubusercontent.com/SoftSalt/Test/master/%EC%8A%A4%ED%8C%8C%ED%81%B4.mp3");
music.prepare();
music.start();
}}));
layout1.addView(button);

var button = new android.widget.Button(ctx);

		button.setText("EnergyDrink");				
		button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v) {

dialog("<MUSIC>","'EnergyDrink'가 재생됩니다.",18,"닫기");
music = new android.media.MediaPlayer;
music.reset();
music.setDataSource("https://raw.githubusercontent.com/SoftSalt/Test/master/Virtual%20Riot%20-%20Energy%20Drink-1.mp3");
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

function newLevel() {
	makeBtn();
}
