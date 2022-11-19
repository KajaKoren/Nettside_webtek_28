footerHTML = `<div class="wrapper">
<footer>
    <div class="footerclass">
        <div class="footbox1">
            <div class="footertext">
                <h3>KONTAKT OSS</h3>
                <p>Tlf: 997 01 635</p>
                <p>E-post: frusvendsenkafe@gmail.com</p>
            </div>
            <div class="sosialeMedier">
                <a
                    href="https://www.instagram.com/explore/locations/326713303/fru-svendsen-kunst-og-kulturkafe/"
                    ><img
                        class="socialMedia"
                        src="../Icons/insta.svg"
                        alt="instagram"
                /></a>
                <a href="https://www.facebook.com/profile.php?id=100028706001486"
                    ><img
                        class="socialMedia"
                        src="../Icons/facebook.svg"
                        alt="facebook"
                /></a>
                <a href="https://no.tripadvisor.com/Restaurant_Review-g1034758-d10532016-Reviews-Fru_Svendsen_Kunst_Og_Kulturkafe-Orsta_More_og_Romsdal_Western_Norway.html"
                    ><img
                        class="tripAdvisor"
                        src="../Icons/Trip_advisor.svg"
                        alt="Trip Advisor"
                /></a>
            </div>
        </div>
    </div>
    <div class="footerclass">
        <div class="apningstider">
            <h3>ÅPNINGSTIDER</h3>
            <p>Man - lør 11.00 - 16.00</p>
        </div>
    </div>
    <div class="footerclass">
        <div id="map"></div>
    </div>
</footer>
</div>
`;

document.getElementById("footer").innerHTML = footerHTML;
