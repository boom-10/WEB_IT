<template>
    <form>
        <label for="">Username</label><br>
        <input type="text" class="first">
        <label for="">Email</label><br>
        <input type="text" class="first">
        <label for="">Password</label><br>
        <input type="password" class="first">
        <p class="second">
Make sure it's at least 15 characters OR <span class="second1">at leas8 characters including a number and a
lowercase letter.</span>  <a href="">Learn more.</a>
        </p>
        <button type="submit">Sign up for GitHub</button>
        <p class="second2">
By clicking "Sign up for GitHub", you agree toour <a href="">Terms of Service</a> and <a href="">Privacy Statement</a>.We'll occasionally send you account related emails.
        </p>
    </form>
</template>
<style scoped>
.first{
    width: 100%;
    height: 46px;
    border-radius: 5px;
    border: none;
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 15px;
    border: 1px #e1e4e8 solid;
}
.second{
    font-size: 12px;
}
.second1{
    color: #65c068;
}
.first:click{
    
}
button{
    width: 100%;
    height: 83px;
    margin-top: 17px;
    border-radius: 10px;
    background-color: #2ebc4f;
    font-size: 16px;
    color: white;
    border: none;
    margin-bottom: 20px;
}
button:hover{
    background-color: #28a745;
    transition: all 0.5s;
}
.second2{
    font-size: 12px;
    color: #6a737d;
}
</style>