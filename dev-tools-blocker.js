/**
 * Developer Tools Blocker
 * Prevents right-click context menu and common developer tool shortcuts
 */
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "u")
  )
    e.preventDefault();
});
