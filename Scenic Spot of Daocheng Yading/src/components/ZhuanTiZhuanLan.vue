<template>
	<div>
		<span @click="getNavShow" class="mui-icon mui-icon-bars"></span>
		<div class="canvas" v-show="show">	
			<ul>
				<li>
					<a href="#">首页</a>
				</li>
				<li>
					<a href="#">电子政务</a>
				</li>
				<li>
					<a href="#">门票预定</a>
				</li>
				<li>
					<a href="#">旅游攻略</a>
				</li>
				<li>
					<a href="#">文化旅游</a>
				</li>
				<li>
					<a href="#">智慧亚丁</a>
				</li>
				<li>
					<a href="#">专栏</a>
				</li>
				<li>
					<a href="#">language</a>
				</li>
			</ul>
		</div>
		<div class="neirong">
			
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				show:false
			}
		},
		methods: {
			getNavShow(){
				this.show = !this.show
			}
		},
	}
</script>

<style scoped>
#icon{
	position: fixed;
	top: 100px;
	left: 200px;
}
.canvas{
	width: 160px;
	height: 854px;
	float: left;
	background-color: #FFB120;
	overflow: auto;
	/* position: sticky; */
}
ul{
	margin-top: 100px;
}
ul li{
	font-size: 20px;
	font-weight: bold;
	margin: 20px -34px;

}
ul li a {	
	color: #fff;
}
.neirong{
	width: 100%;
	height: 859px;
	background-color:pink ;
}

</style>