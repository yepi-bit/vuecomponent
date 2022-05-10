<template>
  <div>
    <div class="hello">
      <div ref="thehtml">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <el-button type="primary" plain @click="capture">截图</el-button>
      <el-button type="warning" plain @click="clear">清空</el-button>
      <el-button type="success" plain @click="render">生成</el-button>
      <screen-capture class="border" ref="sc" :html="html"></screen-capture>
    </div>
  </div>
</template>

<script>
    import ScreenCapture from '../components/ScreenCapture';
    export default {
        name: "Capture",
        components: {
          ScreenCapture
        },
        props: {
            msg: String
        },
        data() {
            return {html: null}
        },
        mounted() {
            this.html = this.$refs.thehtml;
        },
        methods: {
            capture() {
                this.$refs.sc.capture();
            },
            clear() {
                this.$refs.sc.clear();
            },
            render() {
                console.log(this.$refs.sc.getCaptureImage());
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .border {
        border: 2px solid cornflowerblue;
    }
</style>
