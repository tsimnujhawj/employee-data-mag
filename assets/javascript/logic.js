$( document ).ready(function() { // jQuery Document Ready Opening

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB4R7R-GLQCkrzLDSv_ihggqF8KLdigkh4",
    authDomain: "employeedb-ecd2a.firebaseapp.com",
    databaseURL: "https://employeedb-ecd2a.firebaseio.com",
    projectId: "employeedb-ecd2a",
    storageBucket: "employeedb-ecd2a.appspot.com",
    messagingSenderId: "917740556456"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Capture Button Click
$("#add-user").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();
    console.log("buttonpressed")
    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startDate = $("#startDate-input").val().trim();
    var monthWorked = $("#mothWorked-input").val().trim();
    var monthRate = $("#monthRate").val().trim();
    var totalBilled = $("#totalBilled").val().trim();

    console.log("name is " + name);

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
        $("#name-display").text(snapshot.val().name);
        $("#role-display").text(snapshot.val().role);
        $("#startdate-display").text(snapshot.val().startDate);
        $("#monthsworked-display").text(snapshot.val().monthWorked);
        $("#onthlyrate-display").text(snapshot.val().monthRate);
        $("#totalbilled-display").text(snapshot.val().totalBilled);
    });
    

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthWorked: monthWorked,
        monthRate: monthRate,
        totalBilled: totalBilled
    });

    // dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
    //     $("#name-display").text(snapshot.val().name);
    //     $("#role-display").text(snapshot.val().role);
    //     $("#startdate-display").text(snapshot.val().startDate);
    //     $("#monthsworked-display").text(snapshot.val().monthWorked);
    //     $("#onthlyrate-display").text(snapshot.val().monthRate);
    //     $("#totalbilled-display").text(snapshot.val().totalBilled);
    // });

});


// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function (snapshot) {
    //Then we console.log the value of snapshot
    console.log(snapshot.val());


}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


}); // jQuery Document Ready Closing