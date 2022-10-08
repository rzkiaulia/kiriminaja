import Swiper from 'swiper';
import { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Lazy, Navigation, Pagination]);
export default (ctx, inject) => {
    inject('Swiper', Swiper);
};