
document.getElementById('hamburger-btn').addEventListener('click', function() {
  document.getElementById('sidebar').style.transform = 'translateX(0)';
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('sidebar').style.transform = 'translateX(-100%)';
});


document.getElementById("main-body").addEventListener('click',function(){
  document.getElementById('sidebar').style.transform = 'translateX(-100%)';
});