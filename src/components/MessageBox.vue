<!--This component has been created to view the Message Box Component of Mock UI--->

<template>
    
<div id="container">

  <main>
    <header>
       <img src="../assets/chano.png" alt="" class="img1">
        <h2 id="topbarhead">Chanodil</h2>
      <div>
       
         <input type="text" placeholder="search for messages" class="search" icon="fa fa-search">
         
      </div>
    </header>

    <ul id="chat">
      <li class="me">
         <div class="user-photo">
        <div class="messageme">
        <img src="../assets/usergirl.png" alt="" class="chatavatarme"><br>

         <b>Design Inquiry</b><br>
         Sample text sample text sample text<br>
         <img src="../assets/t1.png" alt="" class="chatimgme">
        </div>
         </div>
      </li>
     
     <br><br><br>

      <li class="you">
        <div class="user-photo">
        <div class="messageyou">
          <img src="../assets/chano.png" alt="" class="chatavataryou"><br>

         <b>Design Inquiry</b><br>
         Sample text sample text sample text<br>
         <img src="../assets/t3.png" alt="" class="chatimgyou">
        </div>
        </div>
      </li>
    </ul>
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
aside{
  width:260px;
  height:500px;
  background-color:whitesmoke;
  display:inline-block;
  font-size:15px;
  vertical-align:top;
  top: 100%;
}
main{
  width:490px;
  height:800px;
  display:inline-block;
  font-size:15px;
  vertical-align:top;
}

aside ul{
  padding-left:0;
  margin:0;
  list-style-type:none;
  height:690px;
  
}

aside li{
  padding:2px 0;
  
}
aside li:hover{
  background-color:#5e616a;
}
h2,h3{
  margin:0;
}
aside li img{
  border-radius:50%;
  margin-left:20px;
  margin-right:8px;
}
aside li div{
  display:inline-block;
  vertical-align:top;
  margin-top:12px;
}
aside li h2{
  font-size:14px;
  color:black;
  font-weight:normal;
  margin-bottom:5px;

}
aside li h3{
  font-size:12px;
  color:#7e818a;
  font-weight:normal;
}

.status{
  width:8px;
  height:8px;
  border-radius:50%;
  display:inline-block;
  margin-right:7px;
}

main header{
  height:110px;
  padding:30px 20px 30px 40px;
}
main header > *{
  display:inline-block;
  vertical-align:top;
}
main header img:first-child{
  border-radius:50%;
}
main header img:last-child{
  width:24px;
  margin-top:8px;
}
main header div{
  margin-left:10px;
  margin-right:145px;
}
main header h2{
  font-size:16px;
  margin-bottom:5px;
}
main header h3{
  font-size:14px;
  font-weight:normal;
  color:#7e818a;
}

#chat{
  padding-left:0;
  margin:0;
  list-style-type:none;
  overflow-y:scroll;
  height:535px;
  border-top:2px solid #fff;
  border-bottom:2px solid #fff;
}
#chat li{
  padding:10px 30px;
}
#chat h2,#chat h3{
  display:inline-block;
  font-size:13px;
  font-weight:normal;
}
#chat h3{
  color:#bbb;
}
#chat .entete{
  margin-bottom:5px;
}
#chat .messageme{
  padding:20px;
  color:black;
  line-height:25px;
  max-width:90%;
  display:inline-block;
  text-align:left;
  border-radius:5px;
  margin-right: -8px;
}
#chat .messageyou{
  padding:-50px;
  color:black;
  line-height:25px;
  max-width:90%;
  display:inline-block;
  text-align:left;
  border-radius:5px;
  margin-left: -67px;
  
}


#chat .me{
  text-align:right;
}
#chat .you .messageme{
  background-color:white;
  
}
#chat .me .messageyou{
  background-color:white;
 
}

#topbarhead{
    padding: 10px 10px;
    position: relative;
    bottom: 33px;
    right: -20px;
}

#leftbar{
    position: relative;
    right: 62px;
}

.msghead{

    position: relative;
    top:80%;
}

main footer{
  height:155px;
  padding:20px 30px 10px 20px;
}
main footer textarea{
  resize:none;
  border:none;
  display:block;
  width:100%;
  height:80px;
  border-radius:3px;
  padding:20px;
  font-size:13px;
  margin-bottom:13px;
   border-style: solid;
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
  color:#6fbced;
  vertical-align:top;
  margin-left:333px;
  margin-top:5px;
  display:inline-block;
}

.img1{
 width: 30px;
 height: 100;
 margin-right: 1450px;  

}

.chatimgme{

 width: 30px;
 height: 100;
 margin-left: 210px;
 bottom: 30px; 

}

.chatimgyou{

 width: 30px;
 height: 100;
 margin-right: -100px;
 bottom: 30px; 
}

.chatavataryou{

 width: 30px;
 height: 100;
 margin-left: -50px;
 bottom: 600px; 
 border-radius: 50%;
 position:absolute;
 top:76%;

}

.chatavatarme{

 width: 30px;
 height: 100;
 margin-left: 220px;
 bottom: -500px; 
 border-radius: 50%;
 position:absolute;
 top:44%;

}

.search{
    padding: 10px 10px;
    position: relative;
    bottom: 33px;
    right: -120px;
    border-radius: 12px;
}

</style>