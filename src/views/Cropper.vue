<template>
    <div class="avatar-wrapper flex">
        <el-avatar :src="imgUrl" :size="160"/>
        <div class="upload">
            <el-upload
                    action="#"
                    name="avatar"
                    accept="image/png,image/gif,image/jpeg"
                    :before-upload="beforeUpload"
                    :show-upload-list="false"
            >
                <el-button type="primary" :loading="loading"> 选择图片</el-button>
            </el-upload>
        </div>
        <el-dialog title="头像裁剪" :visible.sync="modalShow" :footer="null" width="800" @cancel="modalShow = false">
            <el-row :gutter="24">
                <el-col :span="12" class="cropper-wrapper">
                    <vueCropper
                            ref="cropper"
                            :img="option.imgUrl"
                            :info="true"
                            :autoCrop="option.autoCrop"
                            :autoCropWidth="option.autoCropWidth"
                            :autoCropHeight="option.autoCropHeight"
                            :fixedBox="option.fixedBox"
                            @realTime="realTime"
                    >
                    </vueCropper>
                </el-col>
                <el-col :span="12">
                    <el-tooltip content="增大" placement="top" :size="135">
                        <el-button type="primary" icon="el-icon-plus"></el-button>
                    </el-tooltip>
                    <el-tooltip content="缩放" placement="top">
                        <el-button type="primary" icon="el-icon-minus"></el-button>
                    </el-tooltip>
                    <el-tooltip content="刷新" placement="top">
                        <el-button type="primary" icon="el-icon-refresh"></el-button>
                    </el-tooltip>
                        <el-button type="primary" icon="picture" :loading="loading"> 重新选择图片</el-button>
                    <div class="accountImg" style="border: 1px solid gray">
                        <img :src="previewsImg.url" alt="" :style="previewsImg.img"/>
                    </div>
                    <el-button type="primary" icon="upload" style="margin-left:150px" @click="saveHeadImg"> 保存头像
                    </el-button>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
    import {VueCropper} from 'vue-cropper';

    export default {
        components: {VueCropper},
        data() {
            return {
                imgUrl: require('../assets/logo.png'),
                loading: false,
                modalShow: false,
                option: {
                    imgUrl: null,
                    autoCrop: true,
                    autoCropWidth: 200,
                    autoCropHeight: 200,
                    fixedBox: true
                },
                previewsImg: {}
            };
        },
        methods: {
            beforeUpload(file) {
                this.loading = true;
                //判断格式
                if (!this.isImage(file)) {
                    this.$message.warning('只能选择xlxs,xls文件');
                    return false;
                }
                //判断大小
                if (file.size / 1024 / 1024 > 5) {
                    this.$message.warning('上传图片大小不能超过5M');
                    return false;
                }
                //得先裁剪，然后再走接口上传
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = e => {
                    this.option.imgUrl = e.target.result;
                    this.loading = false;
                    this.modalShow = true;
                };
                return false;
            },
            saveHeadImg() {
                this.$message.success('上传成功!');
                this.imgUrl = this.previewsImg.url;
                this.modalShow = false;
            },
            // handleChange(info) {
            //   if (info.file.status === 'uploading') {
            //     this.loading = true;
            //     return;
            //   }
            //   if (info.file.status === 'error') {
            //     this.loading = false;
            //     this.$message.error('上传失败');
            //     return;
            //   }
            //   if (info.file.status === 'done') {
            //     const reader = new FileReader();
            //     reader.readasDataURL(info.file.originFileObj);
            //     reader.onload = e => {
            //       this.option.imgUrl = e.target.result;
            //       this.loading = false;
            //       this.modalShow = true;
            //     };
            //   }
            // },
            realTime(data) {
                this.previewsImg = data;
            },
            isImage(file) {
                return /\.(gif|jpg|jpeg|png)$/.test(file.name);
            }
        }
    };
</script>
<style>
    .avatar-wrapper {
        width: 100%;
    }

    .avatar-wrapper .upload {
        margin-top: 15px;
        margin-left: 25px;
    }

    .cropper-wrapper {
        height: 350px;
    }

    .accountImg {
        width: 200px;
        height: 200px;
        margin: 35px 0 55px 105px;
        overflow: hidden;
        border-radius: 50%;
    }

    .accountImg img {
        border-radius: 50%;
    }
</style>
