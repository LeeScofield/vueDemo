new Vue({
	el:"#vue-el",
	data:{
		name:"",
		age:""
	},
	methods:{
		printName:function(){
			this.name = this.$refs.name.value;
		}
	}
});

new Vue({
	el:"#vue-el1",
	data:{
		a:0,
		b:0,
		c:0,
		d:0,
		age:10
	},
	methods:{
		addA:function(){
			console.log("methed A");
			return this.a;
		},
		addB:function(){
			console.log("method B");
			return this.age + this.b;
		},
		addTest:function(){
			console.log("method Test");
			this.c = this.c + 1;
		},
		addTest2:function(){
			console.log("method Test2");
			this.d++;
		}
	},computed:{
		now:function(){
			console.log("method now")
			return Date.now();
		}
	}
});