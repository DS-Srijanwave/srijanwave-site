// If sessionStorage has preview config, use it instead of fetching config.json
(async function(){
  try{
    const preview = sessionStorage.getItem('srijan_config_preview');
    if(preview){
      const cfg = JSON.parse(preview);
      document.title = cfg.siteTitle || document.title;
      document.getElementById('page-title').innerText = cfg.siteTitle || '';
      document.getElementById('brand').innerText = cfg.siteTitle || '';
      document.getElementById('logo').src = cfg.logo || '';
      document.getElementById('hero-heading').innerText = cfg.hero.heading || '';
      document.getElementById('hero-sub').innerText = cfg.hero.subheading || '';
      const cta = document.getElementById('hero-cta');
      cta.innerText = cfg.hero.ctaText || 'Book';
      cta.href = cfg.hero.ctaLink || '#book';
      const swrap = document.getElementById('services');
      swrap.innerHTML = '';
      (cfg.services||[]).forEach(function(s){
        var div = document.createElement('div');
        div.className = 'service';
        div.innerHTML = '<h4 class="font-bold text-lg">' + (s.title||'') + '</h4><p class="text-gray-600 mt-2">' + (s.description||'') + '</p>';
        swrap.appendChild(div);
      });
      const twrap = document.getElementById('testimonials');
      twrap.innerHTML = '';
      (cfg.testimonials||[]).forEach(function(t){
        var d = document.createElement('div');
        d.className='bg-white p-4 rounded-lg mb-3';
        d.innerHTML = '<p class="italic">"' + (t.text||'') + '"</p><p class="mt-2 font-semibold">' + (t.name||'') + ' - <span class="text-gray-500">' + (t.role||'') + '</span></p>';
        twrap.appendChild(d);
      });
      document.getElementById('footer-text').innerText = cfg.footerText || '';
      var soc = document.getElementById('social');
      soc.innerHTML = '';
      for(var k in (cfg.social||{})){
        var a = document.createElement('a');
        a.href = cfg.social[k] || '#';
        a.className = 'inline-block mx-2 text-gray-600';
        a.innerText = k;
        soc.appendChild(a);
      }
    }
  }catch(e){ console.error(e); }
})();
