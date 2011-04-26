// Wait for PhoneGap, UI and DB to load
function onBodyLoad() {
    db.init();
    ui.init();
    document.addEventListener("deviceready", onDeviceReady, false);
}

// PhoneGap, your UI and DB have loaded, this is where you start the work
function onDeviceReady() {
}
