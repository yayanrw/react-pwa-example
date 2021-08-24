export default function swDef() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      console.warn("response: ", response);
    })
    .catch((e) => {
      console.error("error: ", e);
    });
}
