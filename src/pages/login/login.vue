<template>
    <div class="box">
       <div class="login">
           <h2>登录</h2>
           <div><input type="text" value="请输入用户名"></div>
           <div><input type="text" value="请输入密码" style="margin-top:20px"></div>
           <div><button>登录</button></div>
       </div>
    </div>
</template>

<script>
export default {
    components: {

    },
   data(){
       return{

       }
   },
   methods: {

   },
   mounted(){}
}
</script>

<style>
.box {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #563443, #2F3D60);
}
.login {
    width: 300px;
    height: 280px;
    background-color: #fff;
    margin: 200px auto;
    border-radius: 10px;
    padding: 0 100px;
}
h2 {
    text-align: center;
    line-height: 80px;
}
input {
    width: 280px;
    height: 40px;
    border: 2px rgb(212, 212, 212) solid;
    color: rgb(212, 212, 212);
    border-radius: 4px;
    outline: none;
    padding-left: 15px;
}
button {
    width: 300px;
    height: 30px;
    margin-top: 20px;
    border-radius: 4px;
    border: none;
    background-color: #409EFF;
    color: white;
    outline: none;
}
</style>