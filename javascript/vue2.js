new Vue({
	el:"#vue-el",
	data:{
		name:"",
		age:""
	},
	methods:{
		printName:function(){
			this.name = this.$aaa.name.value;
		}
	}
});