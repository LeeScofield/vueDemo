
//数据绑定
new Vue({
	el:"#vue-el",  //document元素
	data:{
        name:"颜良，文丑", //document数据,
        age:45,
        sex:'男',
        webSite:'http://www.baidu.com',
        siteName:'百度',
        webSiteTag:'<a href="http://www.hao123.com">hao123</a>'
    },
	methods:{
		greet:function(name){
			return "欢迎："+name+" and " + this.name;
		}
	}
});

//事件
new Vue({
	el:"#vue-el2",
	data:{
		age:30,
		x:0,
		y:0,
		baidu:"http://www.baidu.com"
	},
	methods:{
		add:function(v){
			this.age = this.age + v;
		},
		subtract:function(v){
			this.age = this.age - v;
		},
		updateXY:function(event){
			// console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		alert:function(){
			alert("test");
		}
	}
});

//键盘事件
new Vue({
	el:"#vue-el3",
	data:{
		v:"hello"
	},
	methods:{
		enterFun:function(){
			console.log("enter key");
		}
	}
	
});