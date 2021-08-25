// const webpush = require("web-push");

export default function swDef() {
  function urlBase64ToUint8Array(base64String) {
    var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function determineAppServerKey() {
    // const vapidKeys = webpush.generateVAPIDKeys();
    const vapidKeys =
      "BAqZeGbxPdsWEUtHs2V-BRoj9viP3Pfu1N6WWo31wnuZW6mnWnQjKP_OkVuH-eMedKiKuy_rIafNI4fshOaH44s";
    return urlBase64ToUint8Array(vapidKeys);
  }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      return response.pushManager.getSubscription().then(function (subs) {
        return response.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: determineAppServerKey(),
        });
      });
    })
    .catch((e) => {
      console.error("error: ", e);
    });
}
