function extend({ duration, draw }) {
  let start = performance.now();

  requestAnimationFrame(function extend(time) {
    let frame = (time - start) / duration;
    if (frame > 1) frame = 1;

    draw(frame);

    if (frame < 1) {
      requestAnimationFrame(extend);
    }
  });
}