<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/draw">Draw</router-link> |
			<router-link to="/drag">Drag</router-link> |
			<router-link to="/colAttributes">ColAttributes</router-link> |
			<router-link to="/flex">Flex</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/cropper">Cropper</router-link> |
			<router-link to="/editor">Editor</router-link> |
			<router-link to="/verify">Verify</router-link> |
			<router-link to="/capture">Capture</router-link> |
			<router-link to="/xlsx">Xlsx</router-link> |
			<router-link to="/dialog">Dialog</router-link> |
			<router-link to="/luck">Luck</router-link> |
			<router-link to="/cropUpload">CropUpload</router-link> |
			<router-link to="/dropZone">DropZone</router-link> |
			<router-link to="/pictureInput">PictureInput</router-link> |
			<router-link to="/show">Show</router-link> |
			<router-link to="/brand">Brand</router-link>
		</div>
		<router-view />
	</div>
</template>
<script>

import watermark from 'watermark-dom'

export default {
  name: "App",
  mounted() {
    setTimeout(() => {
      const username = '健小安Yepi'
      if (username) {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        let date = year + '-' + month + '-' + day;
        watermark.load({watermark_txt: username + ',' + date, watermark_color: 'blue', watermark_fontsize:'21px',})
        console.log(date)
      }
    }, 500)
  }
}
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
