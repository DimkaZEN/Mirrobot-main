var answers = document.querySelectorAll('.FAQ_block_answer');

for (var i = 0; i < answers.length; i++) {
  answers[i].style.display = 'none';
}

function showAnswer(id) {
  if (document.getElementById(id).style.display === 'none') {
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}


window.addEventListener('scroll', () => {
  window.leftgear.style.transform = `rotate(+${window.scrollY / 10}deg)`
})


window.addEventListener('scroll', () => {
  window.gear_content3.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_our_mech.style.transform = `rotate(-${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_content3_1.style.transform = `rotate(-${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_why_we.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_why_we_2.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_bottom.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_bottom_2.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_content4.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_content4_1.style.transform = `rotate(-${window.scrollY / 10}deg)`
})
