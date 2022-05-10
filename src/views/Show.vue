<template>
<div>
    <div>
        <el-button type="primary" plain @click="dialogVisible = true">跟进</el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">
                        <el-input v-model="input" placeholder="请输入内容00"></el-input>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input v-model="input" placeholder="请输入内容11"></el-input>
                        <el-input
                                v-if="!(value==='H'|| value==='F')"
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容22"
                                v-model="textarea">
                        </el-input>
                        <el-input v-model="input" v-if="value==='H'" placeholder="请输入内容33333"></el-input>
                        <el-input v-model="input" v-if="value==='H'" placeholder="请输入内容44444"></el-input>
                        <el-input v-model="input" v-if="value==='F'" placeholder="请输入内容55555"></el-input>
                        <div>
                            <el-row :gutter="20">
                                <el-col :span="12"><el-input v-model="input" v-if="value==='F'" size="small" placeholder="请输入内容66666"></el-input></el-col>
                                <el-col :span="12"><el-input v-model="input" v-if="value==='F'" size="small" placeholder="请输入内容7777"></el-input></el-col>
                            </el-row>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane label="跟进历史" name="second">跟进历史</el-tab-pane>
                </el-tabs>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</div>
</template>

<script>
    export default {
        name: "Show",
        data() {
            return {
                dialogVisible: false,
                activeName: 'first',
                textarea: '',
                input: '',
                options: [{
                    value: 'D',
                    label: 'D'
                }, {
                    value: 'H',
                    label: 'H'
                }, {
                    value: 'F',
                    label: 'F'
                }],
                value: ''
            }
        },
        methods: {
            handleClose() {
                this.dialogVisible = false
            },
            handleClick(tab) {
                console.log(tab.index);
                if(tab.index ==='0'){
                    // this.$message({
                    //     message: '这是基本信息页',
                    //     type: 'success'
                    // });
                } else {
                    this.$message({
                        message: '这是跟踪历史页',
                        type: 'success'
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
