<template>
    <div class="verify-container">
        <vab-verify
                ref="slideDiv"
                :w="350"
                :slider-text="text"
                :h="175"
                @success="handleSuccess"
                @fail="handleError"
        ></vab-verify>
    </div>
</template>

<script>
    import VabVerify from 'zx-verify'
    import 'zx-verify/dist/zx-verify.css'

    export default {
        name: 'Verify',
        components: {VabVerify},
        data() {
            return {
                text: '向右滑动',
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            handleSuccess() {
                this.$message({
                    message: '校验成功',
                    type: "success"
                });
                setTimeout(()=> {
                    this.jumpTo()
                },1500)
            },
            jumpTo() {
                this.$router.push('/editor')
            },
            handleError() {
                this.$message({
                    message: '校验失败',
                    type: "error"
                })
            },
        },
    }
</script>
