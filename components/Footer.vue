<style lang="scss" scoped>
.footer {
  background-color: #6E58B0;
  background-size: cover;
}

.brand-image {
  height: 2.75rem;
  margin-left: -0.5rem;
}

.icon.icon-social-media > svg {
  width: 100%;
  height: 100%;
}

.box-social-media {
  display: flex;
  justify-content: flex-start;
}

.image-powered {
  width: 75px;
}

@media screen and (max-width: 1023px) {
  .box-social-media {
    justify-content: center;
  }
}
</style>

<template>
  <footer class="footer has-background-light pb-6">
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-12-mobile is-6-tablet is-3-desktop">
          <img class="image brand-image" src="~assets/images/kiriminajalogo.png" />
          <div class="block">
            <div class="title is-6 mt-4 mb-3">
              PT Selalu Siap Solusi
            </div>
            <div class="is-inline-flex is-align-items-center">
            <span class="icon">
                <img class="icon mr-3" src="~assets/icons/peta.png" />
              </span>
            <span class="is-size-7">
              Jl. Palagan Tentara Pelajar No. 30 KM 08, Mudal, Kelurahan Sariharjo,
              <br />
              Kecamatan Ngaglik, Kabupaten Sleman,
              <br />
              Provinsi Daerah Istimewa Yogyakarta
            </span>
            </div>
          </div>
          <div class="block">
            <div class="is-inline-flex is-align-items-center">
              <span class="icon">
                <img class="icon mr-3" src="~assets/icons/email1.png" />
              </span>
              <span class="is-size-7">support@kiriminaja.com</span>
            </div>
          </div>
          <div class="block">
            <div class="is-inline-flex is-align-items-center">
              <span class="icon">
                <img class="icon mr-3" src="~assets/icons/phone.png" />
              </span>
              <span class="is-size-7">0274 8000 123</span>
            </div>
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet is-3-desktop">
          <div class="title is-6">
            Tautan Cepat
          </div>
          <p>Temukan apa yang Anda cari dalam sekejap</p>
          <div class="py-2 pr-6">
            <div class="divider"></div>
          </div>
          <ul class="pr-6 pb-5">
            <li>
              <a class="has-text-dark" href="https://kiriminaja.com/cekaja" target="_blank">Cek Tarif Aja</a>
            </li>
            <li class="mt-2">
              <a n-link class="has-text-dark" href="https://kiriminaja.com/kabar" target="_blank">Kabar Buatmu</a>
            </li>
            <li class="mt-2">
              <a class="has-text-dark" href="https://kiriminaja.com/praktisin" target="_blank">Manajemen Order</a>
            </li>
            <li class="mt-2">
              <a class="has-text-dark" href="https://kiriminaja.com/api-integration" target="_blank">Integrasi API</a>
            </li>
            <li class="mt-2">
              <a class="has-text-dark" href="https://kiriminaja.com/careers" target="_blank">Karir</a>
            </li>
          </ul>
        </div>
        <div class="column is-12-mobile is-6-tablet is-3-desktop">
          <div class="title is-6">
            KiriminAja
          </div>
          <p>Temukan fasilitas di KiriminAja</p>
          <div class="py-2 pr-6">
            <div class="divider"></div>
          </div>
          <ul class="pr-6">
            <li>
              <n-link class="has-text-dark" to="/about">Tentang Kami</n-link>
            </li>
            <li class="mt-2">
              <a class="has-text-dark" href="https://kiriminaja.com/syarat-ketentuan" target="_blank">Syarat & Ketentuan</a>
            </li>
            <li class="mt-2">
              <a class="has-text-dark" href="https://kiriminaja.com/privacy-policy" target="_blank">Kebijakan Privasi</a>
            </li>
            <li class="mt-2">
              <a class="has-text-dark" href="https://kiriminaja.com/faq" target="_blank">Fakta & Pertanyaan</a>
            </li>
          </ul>
        </div>
        <div class="column is-12-mobile is-6-tablet is-3-desktop pt-0">
          <div class="box is-shadowless" style="background-color: #ececec">
            <div class="title is-6">
              Kelola ordermu, amankan cashflowmu
            </div>
            <div class="has-text-primary">
              Daftarkan diri kamu dengan Layanan Manajemen Order KiriminAja
            </div>
            <p class="mt-1">
              KiriminAja menyediakan platform management order dengan multi ekspedisi dan multi gudang untuk bisnis kamu
            </p>
            <div class="has-text-primary mt-3">
              Daftarkan diri kamu dengan Layanan Integrasi Api KiriminAja
            </div>
            <p class="mt-1">
              Kami menggunakan teknologi REST API terbaru yang lebih mudah dimengerti oleh developer ber skala kecil
            </p>
            <div class="has-text-black mt-5">
              Download Aplikasi Kiriminaja
            </div>
            <img class="mt-1" src="~assets/images/playstore.png"/>
          </div>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-vcentered is-mobile mt-5">
        <div class="column is-12-mobile is-12-tablet is-3-desktop">
          <div class="box-social-media">
            <a class="is-inline-flex mr-5" href="https://web.facebook.com/kiriminaja" target="_blank">
              <div class="icon icon-social-media">
                <img class="icon" src="~assets/icons/facebook.png" />
              </div>
            </a>
            <a class="is-inline-flex mr-5" href="https://twitter.com/kiriminajacom?fbclid=IwAR1lyZ-SZvOzazeG7St5qQKXqlwz5lKmBOpw17tFCEnTE_xpdsl4kLaj578" target="_blank">
              <div class="icon icon-social-media">
                <img class="icon" src="~assets/icons/twitter.png" />
              </div>
            </a>
            <a class="is-inline-flex mr-5" href="https://www.instagram.com/kiriminajacom/" target="_blank">
              <div class="icon icon-social-media">
                <img class="icon" src="~assets/icons/instagram.png" />
              </div>
            </a>
            <a class="is-inline-flex mr-5" href="https://www.youtube.com/channel/UC4zrFKGY7YProakHFWid8oQ" target="_blank">
              <div class="icon icon-social-media">
                <img class="icon" src="~assets/icons/youtube.png" />
              </div>
            </a>
            <a class="is-inline-flex mr-5" href="https://www.linkedin.com/company/kiriminaja/" target="_blank">
              <div class="icon icon-social-media">
                <img class="icon" src="~assets/icons/linkedin.png" />
              </div>
            </a>
              <a class="is-inline-flex mr-5" href="https://www.tiktok.com/@kiriminajacom" target="_blank">
              <div class="icon icon-social-media">
                <img class="icon" src="~assets/icons/tiktok.png" />
              </div>
            </a>
          </div>
        </div>
        <div class="column is-12-mobile is-12-tablet is-6-desktop">
          <div class="is-relative is-flex is-justify-content-center">
            <div class="is-inline-flex is-align-items-center">
              <span>&copy; Copyright © 2022 &nbsp;</span>
              <span class="image-powered">
                <img class="image" src="~assets/images/kiriminajalogo.png" />
              </span>
              <span>&nbsp; All rights reserved</span>
            </div>
          </div>
        </div>
        <div class="column is-12-mobile is-12-tablet is-3-desktop">
          <div class="is-relative is-flex is-justify-content-center">
            <div class="is-inline-flex is-align-items-center">
              <span>Terdaftar di</span>
              <span class="image-powered">
                <img class="image" src="~assets/icons/kominfo.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
};
</script>
