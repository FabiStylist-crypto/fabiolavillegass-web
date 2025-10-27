
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Smooth scroll for internal links (if any)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
