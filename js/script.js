document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector(".download-button");
  const topButton = document.querySelector(".top-button");

  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      window.location.href = "https://github.com/LsSketch/DofiBank-web/raw/refs/heads/main/DofiBank-v2.apk";
    });
  }

  if (topButton) {
    topButton.addEventListener("click", function () {
      window.location.href = "https://github.com/LsSketch/DofiBank-web/raw/refs/heads/main/DofiBank-v2.apk";
    });
  }
});
