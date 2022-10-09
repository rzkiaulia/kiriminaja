<style lang="scss" scoped>
@import '~assets/scss/style';
@import '~assets/scss/_variables';

.box.box-our-mission{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 200px;
  background: url(~assets/images/box-our-mission.png) no-repeat center center fixed;
  background-size: cover;
}
</style>

<template>
  <div class="is-relative is-block py-6">
   <aboutteam></aboutteam>
  <div class="title is-2 has-text-primary has-text-centered mt-6">Kami Siap Memberikan Solusi Teknologi</div>
  <div class="subtitle is-4 has-text-black has-text-centered">Untuk kebutuhan supply chain yang mempermudah<br>ekosistem bisnis Indonesia berkembang.</div>
  <div class="buttons is-justify-content-center mt-4">
    <b-button class="button is-primary is-rounded"><a href="#about" class="has-text-white">Gabung Bersama Kami</a></b-button>
  </div>
  <div class="container is-widescreen has-padding-content">
        <div class="columns is-mobile is-multiline is-vcentered mb-0">
          <div class="column is-12-mobile is-12-tablet is-6-desktop">
            <div class="title is-2 has-text-primary has-text-justified mt-6">Profil Kami</div>
            <p class="has-text-justified">KiriminAja sebuah platform yang memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang dikembangkan oleh PT Selalu Siap Solusi.</p>
            <p class="has-text-justified mt-3">KiriminAja memberikan solusi untuk UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin melakukan pengiriman paket.</p>
            <p class="has-text-justified mt-3">KiriminAja menawarkan:</p>
          <div class="is-relative is-block pb-6">
            <div class="is-relative is-block has-max-width-600-desktop">
              <ul class="unordered-list-radio has-text-justified mt-2">
                <li class="is-size-6">
                  Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.
                </li>
                <li class="is-size-6">
                 Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan dana harian dan sistem pengambilan paket dirumah oleh ekspedisi.
                </li>
                <li class="is-size-6">
                 Layanan pengiriman paket non-cod dengan sistem pengambilan paket dirumah oleh ekspedisi.
                </li>
                <li class="is-size-6">
                  Platform yang dapat membantu pebisnis online mengendalikan dan mengelola bisnisnya dengan lebih baik.
                </li>
              </ul>
            </div>
            <p class="has-text-justified mt-3">Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen untuk berkontribusi pada perekonomian Indonesia, dengan cara memberikan solusi serta kemudahan bagi para pebisnis online supaya bisnisnya terus berkembang.</p>
          </div>
          </div>
          <div class="column">
            <div class="is-relative is-block mb-6 pb-6">
              <div class="box box-our-mission">
                <div class="title is-2 has-text-white has-text-justified">Misi Kami</div>
                <div class="is-relative is-block has-max-width-600-desktop">
              <ul class="unordered-list-radio has-text-justified mt-2">
                <li class="is-size-6 has-text-white">
                  Meningkatkan penjualan produk UMKM secara online.
                </li>
                <li class="is-size-6 has-text-white">
                 Memberikan inovasi-inovasi terbaru dan terbaik.
                </li>
                <li class="is-size-6 has-text-white">
                 Memberikan pelayanan yang maksimal dan optimal untuk pelanggan.
                </li>
                <li class="is-size-6 has-text-white">
                  Mengenalkan KiriminAja seluas-luasnya ke seluruh Indonesia.
                </li>
              </ul>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div class="title is-2 has-text-primary has-text-centered" id="about">Tim Kami</div>
        <div class="columns is-multiline is-mobile">
          <div v-for="item in data" class="column is-6-mobile is-4-tablet mt-4" :key="item.id">
                <div class="image is-1by1">
                  <img :src="item.image"/>
                </div>
                <p class="has-text-centered has-text-black mt-2">{{item.nama}}</p>
                <p class="has-text-centered has-text-grey mt-2">{{item.jabatan}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Aboutteam from '@/components/Aboutteam.vue'

export default {
  components: { Aboutteam },
   data() {
    return {
      data: [
        {
          image: require('/assets/images/budi_isman.jpg'),
          nama : 'Budi Isman',
          jabatan : 'President Commisioner'
        },
        {
          image: require('/assets/images/fariz_gtj.jpg'),
          nama : 'Fariz GTJ',
          jabatan : 'Chief Executive Officer & Founder'
        },
        {
          image: require('/assets/images/paras_nasution.jpg'),
          nama : 'Paras Nasution',
          jabatan : 'Chief Operation Officer'
        },
        {
          image: require('/assets/images/yuliana_afrizal.jpg'),
          nama : 'Yulian Afrizal',
          jabatan : 'Chief Marketing Officer & Co-Founder'
        },
        {
          image: require('/assets/images/muh_irfan_herawan.jpg'),
          nama : 'Muhammad Irfan H',
          jabatan : 'Chief Technology Officer & Founder'
        },
        {
          image: require('/assets/images/arief_ardinugroho.jpg'),
          nama : 'Arief Ardinugroho',
          jabatan : 'Chief People Officer'
        },
      ],
      path: this.$route.path
      }
    },
}
</script>