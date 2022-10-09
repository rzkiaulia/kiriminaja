<template>
  <div class="container mt-4">
      <b-carousel
        :autoplay="false"
        with-carousel-list
        :indicator="false"
        :overlay="gallery"
        @click="switchGallery(true)">
        <b-carousel-item v-for="(item, i) in items" :key="i">
            <figure class="image">
                <img :src="item.image">
            </figure>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
        <template #list="props">
            <b-carousel-list
                v-model="props.active"
                :data="items"
                v-bind="al"
                @switch="props.switch($event, false)"
                as-indicator />
        </template>
        <template #overlay>
            <div class="has-text-centered has-text-white">
                Hello, I'm an overlay!
            </div>
        </template>
    </b-carousel>
    </div>
</template>
<script>
export default {
 data() {
        return {
            gallery: false,
            al: {
                hasGrayscale: true,
                itemsToShow: 2,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 4
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 6
                    }
                }
            },
            items: [
                {
                    title: 'Slide 1',
                    image: require('/assets/images/about-picture.jpg'),
                },
                {
                    title: 'Slide 2',
                    image: require('/assets/images/team.jpg'),
                },
                {
                    title: 'Slide 3',
                    image: require('/assets/images/logistik-kiriminaja.jpg'),
                },
                {
                    title: 'Slide 4',
                    image: require('/assets/images/team2.png'),
                },
                {
                    title: 'Slide 5',
                    image: require('/assets/images/team3.png'),
                },
            ]
        }
    },
    methods: {
        switchGallery(value) {
            this.gallery = value
            if (value) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        }
    }
}
</script>