<!--This Component has been created to view the left Message Component of Mock UI--->

<template>
 
 <div id="headbar">
 <h2 id="leftbar"> Message </h2>

  <h2 class="msgtitle">Chanodil Group</h2>

   <img src="" alt="" class="chanogroupimg1">
   <img src="" alt="" class="chanogroupimg2">
   <img src="" alt="" class="chanogroupimg3">
   <img src="../assets/usergirl.png" alt="" class="chanogroupimg4">
   <img src="../assets/usergirl.png" alt="" class="chanogroupimg5">
   <img src="" alt="" class="chanogroupimg6">

  <h2 class="msgtitle2">Chanodil</h2>


  <h2 class="msgtitle3">Chanodil Inquiry</h2>

<div id="container">
    <aside>
    <ul>
     
      <li>
        <img src="../assets/chano.png" alt="" class="img1">
        <div>
            <h3 class="newmsgnotify"> 
            <b>New</b>
          </h3>
        </div>
      </li>
      <li>
       <img src="../assets/chano.png" alt="" class="img1">
        <div>
          
          <h3>
           
             <img src="../assets/usergirl.png" alt="" class="chanodilimg1">
             <img src="../assets/usergirl.png" alt="" class="chanodilimg2">
          </h3>
        </div>
      </li>
      <li>
     <img src="../assets/chano.png" alt="" class="img1">
        <div>
          <h3>
            <img src="../assets/usergirl.png" alt="" class="chanoinqimg1">
            <img src="../assets/usergirl.png" alt="" class="chanoinqimg2">
          </h3>
        </div>
      </li>
     
    </ul>
  </aside>
</div>
 </div>

 <i class="fa fa-plus" aria-hidden="true" id="plusicon"></i>

</template>

<!-- Added "scoped" attribute to limit CSS to this component only -->

<style scoped>
*{
  box-sizing:border-box;
  
}
body{
  background-color: lightskyblue;
  font-family:Arial;
}
#container{
  width:300px;
  height:350px;
  background:white;
  margin:-520px auto;
  font-size:0;
  border-radius:5px;
  overflow:hidden;
  margin-right: 950px;

}
aside{
  width:260px;
  height:500px;
  background-color:white;
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
  border-left-style: dotted;
  border-color: #6fbced;
  
}

aside li{
  padding:2px 0;
  
}
aside li:hover{
  background-color:#D3D3D3;
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
  padding:20px;
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
    right: 490px;
    top: -520px;
    
}

#plusicon{

    position: relative;
    right: 420px;
    top: 380px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: #448aff;

}


.msghead{

    position: relative;
    top:80%;
    margin: 10px;
}

.msgtitle{

    position: relative;
    top: -450px;
    font-size: 117%;
    margin-left: -861px;
    
}

.msgtitle2{

    position: relative;
    top: -410px;
    font-size: 117%;
    margin-left: -920px;
}

.msgtitle3{

    position: relative;
    top: -370px;
    font-size: 117%;
    margin-left: -854px;
}

.newmsgnotify{

    color: green;
    top: 255px;
    margin-left: 100px;
    position:absolute;
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
 top:75%;

}

.chatavatarme{

 width: 30px;
 height: 100;
 margin-left: 250px;
 bottom: -500px; 
 border-radius: 50%;
 position:absolute;
 top:42%;

}

.search{
    padding: 10px 10px;
    position: relative;
    bottom: 33px;
    right: -160px;
    border-radius: 12px;
}

.chanogroupimg1{
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;
        position:absolute;
        top: 277px;
        margin-left: -500px;
}

.chanogroupimg2{
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;
        position:absolute;
        top: 277px;
        margin-left: -475px;
}

.chanogroupimg3{
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;
        position:absolute;
        top: 277px;
        margin-left: -450px;
}

.chanogroupimg4{
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;
        position:absolute;
        top: 277px;
        margin-left: -425px;
}
.chanogroupimg5{
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;
        position:absolute;
        top: 277px;
        margin-left: -400px;
}

.chanogroupimg6{
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;
        position:absolute;
        top: 277px;
        margin-left: -380px;
}

.chanodilimg1{

        width: 20px;
        height: 20px;
        border-radius: 50%;
        position:absolute;
        top: 338px;
        margin-left: -70px;
}

.chanodilimg2{

        width: 20px;
        height: 20px;
        border-radius: 50%;
        position:absolute;
        top: 338px;
        margin-left: -40px;
}

.chanoinqimg1{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position:absolute;
        top: 400px;
        margin-left: -70px;
}

.chanoinqimg2{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position:absolute;
        top: 400px;
        margin-left: -40px;
}

</style>