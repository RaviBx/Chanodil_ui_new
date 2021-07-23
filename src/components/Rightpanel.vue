
<!--This component has been created to view the Right Panel Component of Mock UI--->

<template>
    

    <h1 class="techpack"> Pending Tech Pack Approval</h1>
    <p id="notify"> 70 </p>

    <img src="../assets/t1.png" alt="" class="img1">

    <progress id="probar" value="76" max="100"> 76% </progress>

    <p id="progress"> <b>Progress:Techpack Development 76%</b></p>

    <button id="editinq">Edit Inquiry</button>
    <button id="viewpro">View Progress</button>

    <h1 id="pinmsg"> Pinned Messages </h1>

     <img src="../assets/t3.png" alt="" class="img2">
      <img src="../assets/t3.png" alt="" class="img3">

      <p id="deisgninq"> Design Inquiry </p>

    <button id="view">View</button>


<img src="../assets/t3.png" alt="" class="img4">
<img src="../assets/t3.png" alt="" class="img5">
<img src="../assets/t3.png" alt="" class="img6">

<img src="../assets/t3.png" alt="" class="img7">

<img src="../assets/t3.png" alt="" class="img8">

<button id="view2">View</button>
   
<button id="download"> Download </button>

</template>


<!-- Added "scoped" attribute to limit CSS to this component only -->

<style scoped>

    .techpack{

        color: green;
        font-size: 100%;
        margin-left: 950px;
        top: 200px;
        position:absolute;

    }


    #notify{

        color: green;
        background-color: grey;
        width: 30px;
        height: 100;
        border-radius: 50%;
        margin-left: 1150px;
        top: 170px;
        position:absolute;
    }


    .img1{

        width: 90px;
        height: 100;
        margin-left: 550px;
        top: 150px;
        position:absolute;
    }

    #progress{

        font-size: 85%;
        margin-left: 950px;
        top: 280px;
        position:absolute;
    }

#editinq{


        margin-left: 300px;
        top: 340px;
        position:absolute;
        background-color: green;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
}


#viewpro{

        margin-left: 480px;
        top: 340px;
        position:absolute;
        background-color: blue;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
}

  #pinmsg{

        margin-left: 960px;
        top: 400px;
        position:absolute;
        color: black;
        font-size: 20px;
  }

    .img2{

        width: 60px;
        height: 80;
        margin-left: 560px;
        top: 500px;
        position:absolute;
        border-style: dashed;
    }

    .img3{

        width: 60px;
        height: 80;
        margin-left: 480px;
        top: 500px;
        position:absolute;
        border-style: dashed;
    }

    #deisgninq{

    
        margin-left: 1180px;
        top: 580px;
        position:absolute;
        color: grey;
        font-size: 100%;
        
    }

    #view{
        margin-left: 550px;
        top: 630px;
        position:absolute;
        background-color: blue;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
}

    
  .img4{

        width: 60px;
        height: 80;
        margin-left: 480px;
        top: 720px;
        position:absolute;
        border-style: dashed;
    }

 .img5{

        width: 60px;
        height: 80;
        margin-left: 400px;
        top: 720px;
        position:absolute;
        border-style: dashed;
    }

     .img6{

        width: 60px;
        height: 80;
        margin-left: 560px;
        top: 720px;
        position:absolute;
        border-style: dashed;
    }

      .img7{

        width: 60px;
        height: 80;
        margin-left: 400px;
        top: 810px;
        position:absolute;
        border-style: dashed;
    }

      .img8{

        width: 60px;
        height: 80;
        margin-left: 480px;
        top: 810px;
        position:absolute;
        border-style: dashed;
    }

   #view2{
        margin-left: 450px;
        top: 900px;
        position:absolute;
        background-color: blue;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
}

  #download{
        margin-left: 550px;
        top: 900px;
        position:absolute;
        background-color: green;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
}

#probar{
        margin-left: 330px;
        top: 265px;
        position:absolute;

}

</style>