<template>
    <div>
        <h2>flex布局属性分析</h2>
        <img src="https://img-blog.csdnimg.cn/20200715092020164.png?x-oss-process=image/watermark,
        type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hlZmVuZzY1MDA=,size_16,color_FFFFFF,t_70"
             width="760px"
             height="400px"
        />
        <p style="background-color: lightskyblue">flex属性的默认值为：0 1 auto （不放大会缩小）,
            flex为none：0 0 auto （不放大也不缩小）,
            flex为auto：1 1 auto （放大且缩小）</p>
        <div class="box">
            <div class="item-1"></div>
            <div class="item-2"></div>
            <div class="item-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Flex"
    }
</script>

<style scoped>
    .box {
        display: flex;
        width: 600px;
    }

    .box > div {
        height: 100px;
    }

    .item-1 {
        width: 140px;
        flex: 2 1 0%;
        background: blue;
    }

    .item-2 {
        width: 100px;
        flex: 2 1 auto;
        background: coral;
    }

    .item-3 {
        flex: 1 1 200px;
        background: rebeccapurple;
    }
</style>
