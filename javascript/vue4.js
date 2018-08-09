
//数据绑定
new Vue({
	el:"#vue-el",  //document元素
	data:{
		toggleA:true,
		toggleB:true,
		showA:true,
		showB:true
	},
	methods:{
		
	}
});

new Vue({
	el:"#vue-el1",
	data:{
		characters:["hello","world","张三","李四"],
		dataSource:[{name:"lee",age:28},{name:"lily",age:36},{name:"jack",age:17}]	
	}
});

