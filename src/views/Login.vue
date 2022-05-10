<template>
    <div class="about">
        <h2>Yepi开发</h2>
        <el-form :model="ruleForm" :rules="ruleForms" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">登录</el-button>
                <el-button @click="resetForm()">重置</el-button>
            </el-form-item>
        </el-form>
        <h2>{{$store.getters.getUser.name}}</h2>
        <h2>{{$store.getters.getUser.pass}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                ruleForms: {
                    username: [{required: true, message: '账号不能为空', trigger: 'blur'}],
                    password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
                }
            }
        },
        methods: {
            submitForm() {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$store.dispatch("asyncUpdateUser", {name: this.ruleForm.username, pass:this.ruleForm.password})
                    } else {
                        alert('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(){
                this.$refs.ruleForm.resetFields();
            }
        }
    }
</script>

<style scoped>
    /*.demo-ruleForm {*/
    /*    width: 500px;*/
    /*}*/
</style>
