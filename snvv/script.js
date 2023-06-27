AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}



async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'resources/foto.png',
    title: 'muốn cc gì ước đi em!',
    input: 'text',
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: 'chúc bé thành công nhe'
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'cô bé ngốc nhập chữ vô đi'
    });
    tanya();
  }
}