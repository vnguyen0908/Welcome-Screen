import * as messaging from "messaging";
import { me } from "companion";
import { settingsStorage } from "settings";
import { localStorage } from "local-storage";

localStorage.clear();
// Listen for the onopen event
messaging.peerSocket.onopen = function () {
    // Ready to send or receive messages
    console.log("Companion socket opened");
}
var i = 1;
// Listen for the onmessage event
messaging.peerSocket.onmessage = function (evt) {
    // convert received message to string
    var newRecordString = "-" + i;
    let record = JSON.stringify(evt.data);
        console.log(record);
    // save the message to local storage
    localStorage.setItem(newRecordString, record);
    // print out localStorage
    i++;
}

function dump(storage) {
    let store = []
    for (let i = 0, l = storage.length; i < l; i++) {
        let key = storage.key(i);
        store.push({ key: key, value: storage.getItem(key) });
    }
    console.log(JSON.stringify(store))
}

// Message socket closes
messaging.peerSocket.onclose = () => {
    console.warn("Companion Socket Closed");
};
