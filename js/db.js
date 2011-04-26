var db = {
    DB: null
};

db.successCB = function () {
    return;
};

db.errorCB = function (err) {
    console.log("Error processing SQL: " + err.message);
    return;
};

db.init = function () {
    // set up DB if needed at application start
    // EXAMPLE:
    //  db.DB = window.openDatabase("MyDatabase", "", "My Database", 2000000);

};

