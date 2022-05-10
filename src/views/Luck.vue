<template>
    <div>
        <div class="box">
            <!--        <LuckyWheel-->
            <!--                ref="myLucky"-->
            <!--                width="300px"-->
            <!--                height="300px"-->
            <!--                :prizes="prizes"-->
            <!--                :blocks="blocks"-->
            <!--                :buttons="buttons"-->
            <!--                @start="startCallback"-->
            <!--                @end="endCallback"-->
            <!--        />-->
            <SlotMachine
                    ref="myLucky"
                    width="360px"
                    height="300px"
                    :blocks="blocks"
                    :slots="slots"
                    :prizes="prizes"
                    :defaultConfig="defaultConfig"
            />
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                blocks: [
                    { padding: '10px', background: '#869cfa' },
                    { padding: '10px', background: '#e9e8fe' },
                ],
                slots: [
                    { speed: 1 },
                    { speed: 4 },
                    { speed: 9 },
                    { speed: 15 },
                ],
                prizes: [
                    {
                        background: '#bac5ee',
                        borderRadius: '10px',
                    },
                    {
                        background: '#bac5ee',
                        borderRadius: '10px',
                    },
                ],
                defaultConfig: {
                    rowSpacing: '20px',
                    colSpacing: '10px'
                }
            }
        },
        mounted () {
            this.$refs.myLucky.play()
        }
    }
</script>
        }
<!--            return {-->
<!--                blocks: [{ padding: '13px', background: '#617df2' }],-->
<!--                prizes: [-->
<!--                    { fonts: [{ text: '0', top: '10%' }], background: '#e9e8fe' },-->
<!--                    { fonts: [{ text: '1', top: '10%' }], background: '#b8c5f2' },-->
<!--                    { fonts: [{ text: '2', top: '10%' }], background: '#e9e8fe' },-->
<!--                    { fonts: [{ text: '3', top: '10%' }], background: '#b8c5f2' },-->
<!--                    { fonts: [{ text: '4', top: '10%' }], background: '#e9e8fe' },-->
<!--                    { fonts: [{ text: '5', top: '10%' }], background: '#b8c5f2' },-->
<!--                ],-->
<!--                buttons: [-->
<!--                    { radius: '50px', background: '#617df2' },-->
<!--                    { radius: '45px', background: '#afc8ff' },-->
<!--                    {-->
<!--                        radius: '40px', background: '#869cfa',-->
<!--                        pointer: true,-->
<!--                        fonts: [{ text: '开始\n抽奖', top: '-20px' }]-->
<!--                    },-->
<!--                ],-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            // 点击抽奖按钮会触发star回调-->
<!--            startCallback () {-->
<!--                // 调用抽奖组件的play方法开始游戏-->
<!--                this.$refs.myLucky.play()-->
<!--                // 模拟调用接口异步抽奖-->
<!--                setTimeout(() => {-->
<!--                    // 假设后端返回的中奖索引是0-->
<!--                    const num = Math.floor(Math.random()*6);-->
<!--                    const index = num;-->
<!--                    // 调用stop停止旋转并传递中奖索引-->
<!--                    this.$refs.myLucky.stop(index)-->
<!--                    console.log(index)-->
<!--                }, 3000)-->
<!--            },-->
<!--            // 抽奖结束会触发end回调-->
<!--            endCallback (prize) {-->
<!--                console.log('哈哈',prize)-->
<!--            },-->
<!--        }-->
<!--    }-->
<!--</script>-->
<style>
    .box {
        display: inline-block;
        text-align: center;
    }
</style>
