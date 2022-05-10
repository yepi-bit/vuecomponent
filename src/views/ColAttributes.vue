<template>
    <div>
        <h2>Yepi</h2>
<!--   响应式     -->
        <el-row :gutter="10">
            <el-col :xs="12" :sm="9" :md="2" style="background: #42b983">123</el-col>
            <el-col :xs="12" :sm="15" :md="22" style="background: cornflowerblue">456</el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "ColAttributes"
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    @media screen and (max-width: 768px){
        h2 {
            display: none;
        }
    }
</style>
