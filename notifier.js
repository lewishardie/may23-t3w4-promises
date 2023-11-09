let notificationPermission = Notification.permission;

console.log(`Notification status is ${notificationPermission}`)


switch (notificationPermission) {
    case "default":
        console.log("User has not been asked about notifications yet.")
        askNotificationPermission();
        break;
    case "granted":
        console.log("User has given permission for notifications!")
        setTimeout(() => {
            let newNotification = new Notification("Example notification", {
                body: "Hey Hey!"
            });
            console.log(newNotification.body)
        }, 1000);
        break;
    case "denied":
        console.log("User denied access to notifications")
        break;
    default:
        console.log("Invalid notification persmission valid")
        break;
}

function askNotificationPermission(){
    Notification.requestPermission().then((status) => {
        console.log(status);
        notificationPermission = status;
    });
}


// console.log(Notification.requestPermission())

// Notification.requestPermission().then((result) => {
//     console.log(result);
// });