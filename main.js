var firebaseConfig = {
    apiKey: "AIzaSyBwZN-Nyltr0lPPKAvai0MBAaAx5t9QXcU",
    authDomain: "e-appointment-4f33a.firebaseapp.com",
    databaseURL: "https://e-appointment-4f33a.firebaseio.com",
    projectId: "e-appointment-4f33a",
    storageBucket: "e-appointment-4f33a.appspot.com",
    messagingSenderId: "843955706772",
    appId: "1:843955706772:web:b7d8782ff568a388adcd81",
    measurementId: "G-YYPHSZ3VDS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.database();

let pname;
let gender;
let bgrp;
let ot;
let bldloss;
let des;

db.ref('patient').on('value',
    function (getdata) {



        console.log(getdata.val());
        let patients = getdata.val();
        let p;

        for (let keys in patients) {
            p = patients[keys];
            pname = p.fullname;
            gender = p.gender;
            bgrp = p.bloodgroup;
            ot = p.otstatus;
            bldloss = p.bloodloss;
            des = p.discription;
        }



        var test = `
        <div id="get-card">
        <div id="info">
        <button class="btn" onclick = closecard()><i class="fa fa-close" style="color: white;"></i></button>
            <br>
            <div class="textmain" id="pname">Patient Name: ${pname}</div>
            <div class="textmain" id="gender">Gender: ${gender}</div>
            <div class="textmain" id="bgrp">Blood Group: ${bgrp}</div>
            <br>
            <button class="alertbtn" id="doctoralrt"><a class="example_c" >Alert Doctor</a></button>
            <button class="alertbtn" id="otstart"><a class="example_c" >Start OT</a></button>
        </div>
    </div>
    <hr>`

        document.getElementById("add-to").innerHTML += test;


        // else {
        //     var b = document.getElementById("otstart");
        //     b.setAttribute("name", "startot");
        //     b.setAttribute("disabled", "");
        // }
    });

function closecard() {
    var deletecard = document.getElementById("get-card");
    deletecard.parentNode.removeChild(deletecard);
}
