//数据绑定
new Vue({
	el:"#vue-el",  //document元素
	data:{
		title:'demo',
		process:0,
		endTag :false
	},
	methods:{
		opt:function(opt){
			var value = 0;
			if(opt == '+'){
				value = this.process + 10;
			}else if(opt == '-'){
				value = this.process - 10;
			}
			
			if(value >=0 && value <= 100){
				this.process = value;
				this.endTag = false;
			}else if(value <= 0){
				this.process = 0;
				this.endTag = false;
			}else if(value >=100){
				this.process = 100;
				this.endTag = true;
			}
			
		},
		restart:function(){
			this.process = 0;
			this.endTag = false;
		}
	}
});


var one = new Vue({
	el:"#vue1",
	data:{
		title:'这是第vue1',
		content:'this is vue1'
	}
});

var two = new Vue({
	el:"#vue2",
	data:{
		title:"这是第vue2",
		content:"this is vue2"
	},
	methods:{
		changeTitle1:function(){
			one.title='切换一下vue1'
		}
	}
});

two.content = "切换vue2内容"


Vue.component("greeting",
	{
		template:`
			<p>
				{{name}}打招呼
				<input type='button' value='点我改名' v-on:click="changeName"/>
			</p>`.trim(),
			data:function(){
				return {name:'小明'};
			},
			methods:{
				changeName:function(){
					this.name = '张三';
				}
			}
	}
);

new Vue({el:"#vue-test"});
