new Vue({
	el:"#vue-el",
	data:{
		isredColor:true,
		isafterLenth:false,
		giveColor:'redColor'
	},
	methods:{
		
	},
	computed:{
		getClass:function(){
			return {
						redColor:!this.isredColor,
						afterLenth:!this.isafterLenth
					}
		}
	}
})