<template>
    <el-dialog class="dialog" title="裁剪图片" :visible.sync="dialogVisible" width="800px" :footer="null">
        <vueCropper ref="cropper" :img="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage"
                    style="width: 80%; height: 300px">
        </vueCropper>
    </el-dialog>
</template>

<script>
    import {
        VueCropper
    } from 'vue-cropper';
    import {
        mapState
    } from 'vuex'
    export default {
        name: "PictureCropper",
        components: {
            VueCropper,
        },
        data() {
            return {
                imgSrc: require('../assets/logo.png'),
                cropImage:''
            }
        },
        computed: {
            ...mapState(['dialogVisible'])
        },
    };
</script>

<style scoped>
    .dialog {
        opacity: 1;
    }

    .crop-demo-btn {
        position: relative;
    }

    .crop-input {
        position: absolute;
        width: 100px;
        height: 40px;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }

    .crop-demo-btn {
        margin-right: 24px;
    }
</style>
