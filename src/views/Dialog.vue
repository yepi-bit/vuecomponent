<template>
    <div>
        <el-button class="person" @click="Dialog">弹窗</el-button>
		<PictureCropper />
    </div>
</template>

<script>
    import {mapMutations} from "vuex"
	import PictureCropper from "../components/PictureModal";

    export default {
        name: "Dialog",
		components: {PictureCropper},
		data() {
            return {}
        },
        methods: {
			...mapMutations(['dialogVisible']),
            Dialog() {
                this.$store.commit('showLFV')
            }
        },
    }
</script>
