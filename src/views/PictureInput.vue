<template>
    <div>
        <el-table
                height="300px"
                :data="tableData"
                style="width: 98%">
            <el-table-column prop="" label="+" >
                <template slot-scope="scope">
                    {{scope.$index + 1}}
                </template>
            </el-table-column>
            <el-table-column prop="sysName" label="联系人">
                <template slot-scope="scope">
                    <el-input size="mini" v-show="scope.row.show" v-model="scope.row.sysName"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.sysName}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="platformName" label="电话">
                <template slot-scope="scope">
                    <el-input size="mini" v-show="scope.row.show" v-model="scope.row.platformName"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.platformName}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="context" label="备注">
                <template slot-scope="scope">
                    <el-input size="mini" v-show="scope.row.show" v-model="scope.row.context"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.context}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="" label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.$index)" class="btn-text-red" type="text" size="mini">删除</el-button>
                    <el-button @click="scope.row.show =true" type="text" size="mini" >编辑</el-button>
                    <el-button @click="save1(scope.row)" type="text" size="mini">保存</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button @click="handleAdd" style="width: 100%">+ 添加</el-button>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                tableData:[]
            }
        },
        methods: {
            // 保存
            save1(row) {
                row.show = false
            },
            // 添加点击按钮
            handleAdd() {
                this.tableData.push({
                    sysName: '',
                    platformName: '',
                    context: '',
                    show: true
                })
            },
            handleDelete(index) {
                this.tableData.splice(index, 1)
            }
        }
    }
</script>
