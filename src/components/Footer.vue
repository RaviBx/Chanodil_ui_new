<!--This component has been created to view the Textarea  of Mock UI--->

<template>
    
<div id="con">
  
  <main>
     
    <footer>
      <textarea placeholder="Subject"></textarea>
      <textarea placeholder="Write your message"></textarea>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="">
      
      <a href="#">Send</a>
    </footer>
    
  </main>
</div>

</template>

<!-- Added "scoped" attribute to limit CSS to this component only -->

<style scoped>
*{
  box-sizing:border-box;
}
body{
  background-color:#abd9e9;
  font-family:Arial;
}
#container{
  width:450px;
  height:460px;
  background:#eff3f7;
  margin:35px auto;
  font-size:0;
  border-radius:5px;
  overflow:hidden;
}

main{
  width:490px;
  height:800px;
  display:inline-block;
  font-size:15px;
  vertical-align:top;
}


main footer{
  height:155px;
  padding:460px 30px 10px 20px;
  border-color: coral;
}

main footer textarea{
  resize:none;
  border-style: solid;
  display:block;
  width:100%;
  height:80px;
  border-radius:3px;
  padding:20px;
  font-size:13px;
  margin-bottom:13px;
}
main footer textarea::placeholder{
  color:#ddd;
}
main footer img{
  height:30px;
  cursor:pointer;
}
main footer a{
  text-decoration:none;
  text-transform:uppercase;
  font-weight:bold;
  color:whitesmoke;
  vertical-align:top;
  margin-left:333px;
  margin-top:5px;
  display:inline-block;
  background-color: rgb(114, 100, 100);
  border: 2px solid;
   padding: -50px 50px;
   cursor: pointer;
   border-radius: 2px;
}

</style>