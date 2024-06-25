const video = document.getElementById("video");

video.addEventListener("loadedmetadata", () => {
  function updateVideoTime() {
    const duration = video.duration;

    const bottom = video.getBoundingClientRect().bottom;
    const height = video.clientHeight;
    const fraction = 1 - bottom / height;

    const newTime = Math.max(0, Math.min(duration, duration * fraction));

    video.currentTime = newTime;
  }

  updateVideoTime();

  window.addEventListener("scroll", updateVideoTime);
});
