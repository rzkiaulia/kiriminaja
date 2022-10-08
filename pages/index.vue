<style lang="scss" scoped>
@import '~assets/scss/style';
@import '~assets/scss/_variables';
.box-banner {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 0 2.5rem;
  padding: 7rem 0;
  background: url(~assets/images/landing-page.png) no-repeat center center fixed;
  background-size: cover;
}

.box{
  width: 100%;
  max-height: 400px;
}

.swiper-button-prev,
.swiper-button-next {
  width: 25px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 16);
  color: #000;
  &::after {
    font-size: 17px;
  }
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.swiper-wrapper {
  margin: auto;
  width: 100%;
  justify-content: center;
  position: relative;
  align-items: center;
  display: flex;
}

.image-activities {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 200px;
  text-align: center;
  justify-content: center;
  align-items: center;
  > img {
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 150px;
  }
}

.promo{
backgroun-color: #AEA3CF;
}

</style>

<template>
  <div class="is-relative is-block">
    <div class="box-banner">
      <div class="container is-widescreen has-padding-content">
        <div class="columns is-mobile is-multiline mb-0">
          <div class="column">
            <div class="is-relative is-block">
              <div class="title is-1 has-text-white has-max-width-600">Paket aman hati tenang</div>
              <div class="is-5 has-text-white has-max-width-500 has-text-justified mt-3">kirim paket Anda sekarang di mana saja dengan aman. Anda juga dapat memantau perjalanan paket Anda secara teratur</div>
            </div>
            <div class="tracking has-max-width-500 mt-6">
              <b-field>
                <b-input placeholder="Masukan kode resi anda"
                  size="is-large"
                  icon="magnify">
                </b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title is-2 has-text-primary has-text-centered">Layanan Kami</div>
     <div class="container is-widescreen has-padding-content">
        <div class="columns is-mobile is-multiline is-centered mb-0">
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="is-relative is-flex is-justify-content-center">
              <div class="box">
                <div class="is-relative is-flex is-justify-content-center">
                  <figure class="image is-128x128">
                    <img src="~assets/images/management-order.jpg">
                  </figure>
                </div>
                <div class="title is-size-5 mt-4 has-text-centered">Manajemen Order</div>
                <p class="has-text-centered is-size-6">Platform manajement order dengan multi ekspedisi gar anda dapat mengelola bisnis online dengan mudah</p>
                <div class="buttons is-justify-content-center mt-4">
                  <b-button class="button is-primary is-rounded"><a href="https://kiriminaja.com/praktisin" class="has-text-white">Info Lengkap</a></b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="is-relative is-flex is-justify-content-center">
              <div class="box">
                <div class="is-relative is-flex is-justify-content-center">
                  <figure class="image is-128x128">
                    <img class="mt-4" src="~assets/images/integrasi-api.jpg">
                  </figure>
                </div>
                <div class="title is-size-5 mt-4 has-text-centered">Integrasi Api</div>
                <p class="has-text-centered is-size-6">Kami menggunakan teknologi REST API terbaru yang lebih mudah dimengerti oleh developer ber skala kecil</p>
                <div class="buttons is-justify-content-center mt-4">
                  <b-button class="is-primary is-rounded"><a href="https://kiriminaja.com/api-integration" class="has-text-white">Info Lengkap</a></b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="title is-2 has-text-primary has-text-centered mt-6">Promo</div>
      <div class="promo py-3">
      <section>
        <b-carousel-list
            v-model="values"
            :data="items"
            :arrow="arrow"
            :arrow-hover="arrowHover"
            :items-to-show="perList"
            :items-to-list="increment"
            :repeat="repeat"
            :has-drag="drag"
            :has-grayscale="gray"
            :has-opacity="opacity" />
      </section>
    </div>
    <div class="title is-2 has-text-primary has-text-centered mt-6">Kirim Paket Makin Singkat</div>
    <div class="subtitle is-6 has-text-primary has-text-centered">Masih kurang? Yuk explore sekarang biar ngga penasaran</div>
    <div class="container is-widescreen has-padding-content">
        <div class="columns is-mobile is-multiline is-vcentered mb-0">
          <div class="column is-12-mobile is-narrow-tablet">
            <div class="has-text-centered">
              <img src="~assets/images/tracking.png" />
            </div>
          </div>
          <div class="column">
            <div class="is-relative is-block py-6">
              <div class="title is-3 has-max-width-400">
                Sekarang bisa Tracking Paket mu loh!!
              </div>
              <div class="is-relative is-block">
                <div class="subtitle is-6 has-text-grey has-max-width-400 has-text-justified">
                 Kamu dapat dengan mudah mentracking sampai mana posisi paketmu
                </div>
               <div class="is-relative is-block pb-6">
            <div class="is-relative is-block has-max-width-600-desktop">
              <ul class="unordered-list-radio has-text-justified mt-2">
                <li class="is-size-6">
                  Berbagai service expedisi sameday, kargo dan lainnya.
                </li>
                <li class="is-size-6">
                 Penjemputan paket tanpa minimal kiriman.
                </li>
                <li class="is-size-6">
                 Fitur dropoff atau cashless.
                </li>
                <li class="is-size-6">
                  Kirim paket COD dengan pencairan tercepat.
                </li>
                <li class="is-size-6">
                  Platform mudah digunakan (user friendly).
                </li>
                <li class="is-size-6">
                  Meminimalisir rasio retur.
                </li>
              </ul>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
        return {
            items: [
                {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: 'https://kiriminaja.com/storage/Slider/April22/1648798905_Slider2%20(3)%20(1).png',
                },
                {
                    title: 'Slide 2',
                    image: 'https://kiriminaja.com/storage/Contents/May22/1652948413_Diskon%2040%20(Feed)%20(1).png'
                },
                {
                    title: 'Slide 3',
                    image: 'https://kiriminaja.com/storage/Contents/December21/1639558795_951e61b1-ee15-4767-9cfe-b0685600b935.jpg'
                },
                {
                    title: 'Slide 4',
                    image: 'https://kiriminaja.com/storage/Contents/September22/1664164504_Untitled%20design%20(14).png'
                },
                {
                    title: 'Slide 5',
                    image: 'https://kiriminaja.com/storage/Contents/October21/1635158470_Feed10.png'
                },
                {
                    title: 'Slide 6',
                    image: 'https://kiriminaja.com/storage/Contents/April22/1649056928_PestaPora%20500x500.png'
                },
                {
                    title: 'Slide 7',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGHMnmrpYLLzhxiShu5c-3hSc2LkRoYBiUJ4GN7tHdQ1X7JyPOfl-75oZJJaZYh4jzLs&usqp=CAU'
                },
            ]
        }
    }
}
</script>
