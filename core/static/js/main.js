function trogleDrawer(isFromSide) {
  const drawer = document.getElementById("my-drawer")
  const navbtn = document.getElementById("navbtn")
  console.log(drawer.checked)
  drawer.checked = !drawer.checked
  if (isFromSide) {
    navbtn.checked = !navbtn.checked
  }
}
