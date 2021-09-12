<template>
    <div>
        <div class="ThirteenthC">
            <h2 class="ThirteenthH2">
                
        Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.
      
            </h2>
            <div class="ThirteenthC1">
               <form action="" id="ThirteenthC2">
                   <div class="ThirteenthC21">
                       <label for="">Username</label>
                       <input type="text" class="ThirteenInput" placeholder="Pick a username">
                   </div>
                   <div class="ThirteenthC21">
                       <label for="">Email</label>
                       <input type="text" class="ThirteenInput" placeholder="Your email address">
                   </div>
                   <div class="ThirteenthC21">
                       <label for="">Username</label>
                       <input type="password" class="ThirteenInput" placeholder="Create a password">
                   </div>
                   <div class="ThirteenthC21"><button type="submit">Sign up for GitHub</button></div>
                   
               </form>
               <p class="ThirteenP">
          By clicking “Sign up for GitHub”, you agree to our
          <a href="" class="ThirteenA">terms of service</a>and
          <a href="" class="ThirteenA">privacy statement</a>
          We’ll occasionally send you account related emails.
          </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ThirteenthC{
    width: 100%;
    background-color:#24292e ;
    padding-top: 80px!important;
    padding-bottom: 80px!important;
}
.ThirteenthH2{
    margin: auto;
    width: 980px;
    font-weight: 400!important;
        font-size: 32px!important;
        text-align: center;
        color: #fff;
        line-height: 1.5;
}
.ThirteenthC1{
    padding-top: 40px!important;
    padding-bottom: 40px!important;
}
#ThirteenthC2{
    padding-top: 40px!important;
    padding-bottom: 40px!important;
    width: 1248px;
    margin: auto;
        padding-right: 16px!important;
    padding-left: 16px!important;
    display: flex;
}
.ThirteenthC21{
    
    flex: 1;
    padding-right: 16px!important;
    padding-left: 16px!important;
}
.ThirteenInput{
    display: block;
    margin-top: 5px;
    width: 270px;
    margin-right: 5px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    line-height: 20px;
     border: 1px solid var(--color-input-border);
     outline: none;
}

label {
    margin-bottom: 5px;
    color: #fff;
}
button{
    width: 100%;
    height: 53px;
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
.ThirteenP{
    text-align: center;
    font-size: 12px;
    color: #6a737d;
    margin-top: 40px!important;
}
.ThirteenA{
    color: #fff;
}
.ThirteenA:hover{
    text-decoration: underline;

}
</style>