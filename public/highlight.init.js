function sleep(duration) {
  return new Promise(rs => setTimeout(rs, duration))
}

function check() {
  if (window.hljs) {
    hljs.initHighlightingOnLoad();
  }
  return window.hljs
}

(function () {
  let count = 0;
  async function loop() {
    while (count < 20) {
      await sleep(300)
      const result = check()
      if (result) count = 21
      count ++
      loop()
    }
  }
  loop()
})();