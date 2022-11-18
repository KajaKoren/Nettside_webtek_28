navbarHTML = `
<img class="toplogo" src="../Bilder/logo_cafe.svg" alt="logo cafe" />
<nav>
<ul class="topnav">
  <li id="forside">
    <a href="forside.html">Forside</a>
  </li>
  <li id="meny">
    <a href="meny.html">Meny</a>
  </li>
  <li id="arrangement">
    <a href="arrangement.html">Arrangement</a>
  </li>
  <li id="utleie">
    <a href="utleie.html">Utleie</a>
  </li>
  <li id="bilder">
    <a href="bilder.html">Bilder</a>
  </li>
  <li id="kunst">
    <a href="galleri.html">Kunst</a>
  </li>
  <li id="historie">
    <a href="historie.html">Historie</a>
  </li>
  <li id="kontaktOss">
    <a href="kontaktOss.html">Kontakt Oss</a>
  </li>
</ul>
</nav>
<section class="mobile-top-nav">
<!--inspiration on hamburger nav from: https://alvarotrigo.com/blog/hamburger-menu-css/ includes html plus css-->
<div>
  <img class="logotop" src="../Bilder/logo_cafe.svg" alt="logo cafe" />
</div>
<input id="menu-toggle" type="checkbox" />
<label class="menu-button-container" for="menu-toggle">
  <div class="menu-button"></div>
</label>
<ul class="menu">
  <li id="forside">
    <a href="forside.html">Forside</a>
  </li>
  <li id="meny">
    <a href="meny.html">Meny</a>
  </li>
  <li id="arrangement">
    <a href="arrangement.html">Arrangement</a>
  </li>
  <li id="utleie">
    <a href="utleie.html">Utleie</a>
  </li>
  <li id="bilder">
    <a href="bilder.html">Bilder</a>
  </li>
  <li id="kunst">
    <a href="galleri.html">Kunst</a>
  </li>
  <li id="historie">
    <a href="historie.html">Historie</a>
  </li>
  <li id="kontaktOss">
    <a href="kontaktOss.html">Kontakt Oss</a>
  </li>
</ul>
</section>`;
document.getElementById("navbar").innerHTML = navbarHTML;
