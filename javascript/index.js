
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