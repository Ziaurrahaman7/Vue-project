<script>
import Banner from '../components/Banner.vue'
import SmallBanar from '../components/SmallBanar.vue'
import BestProducts from '../components/BestProducts.vue'
import Tranding from '../components/Tranding.vue'
export default ({
   components: {
    Banner,
    SmallBanar,
    BestProducts,
    Tranding
  } 
})
</script>

<template>
          <main class="main-content">
            <!--== Start Hero Area Wrapper ==-->
            <Banner/> 
            <!-- <Test/> -->
            <!--== End Hero Area Wrapper ==-->

            <!--== Start Product Banner Area Wrapper ==-->
            <SmallBanar/>
            <!--== End Product Banner Area Wrapper ==-->

            <!--== Start Product Area Wrapper ==-->
            <BestProducts/>
            <!--== End Product Area Wrapper ==-->

            <!--== Start Product Banner Area Wrapper ==-->
            <section class="product-banner-area">
                <div class="container">
                    <div class="row mb-n6 mb-sm-n7">
                        <div class="col-sm-12 col-md-6 mb-6">
                            <!--== Start Product Banner Item ==-->
                            <a href="shop.html" class="product-banner-item">
                                <img class="icon" src="https://htmldemo.net/merier/merier/assets/images/shop/banner/d1.png" width="570" height="266" alt="Image-HasTech">
                            </a>
                            <!--== End Product Banner Item ==-->
                        </div>
                        <div class="col-sm-12 col-md-6 mb-6">
                            <!--== Start Product Banner Item ==-->
                            <a href="shop.html" class="product-banner-item">
                                <img class="icon" src="https://htmldemo.net/merier/merier/assets/images/shop/banner/d2.png" width="570" height="266" alt="Image-HasTech">
                            </a>
                            <!--== End Product Banner Item ==-->
                        </div>
                    </div>
                </div>
                <h6 class="visually-hidden">Product Banner Area</h6>
            </section>
            <!--== End Product Banner Area Wrapper ==-->

            <!--== Start Product Area Wrapper ==-->
            <Tranding/>
            <!--== End Product Area Wrapper ==-->

            <!--== Start Product Banner Area Wrapper ==-->
            <section class="product-banner-area">
                <div class="container">
                    <div class="row mb-n6">
                        <div class="col-sm-6 col-md-3 mb-6">
                            <!--== Start Product Banner Item ==-->
                            <a href="shop.html" class="product-banner-item">
                                <img class="icon" src="https://htmldemo.net/merier/merier/assets/images/shop/banner/c1.png" width="270" height="419" alt="Image-HasTech">
                            </a>
                            <!--== End Product Banner Item ==-->
                        </div>
                        <div class="col-sm-6 col-md-3 mb-6">
                            <!--== Start Product Banner Item ==-->
                            <a href="shop.html" class="product-banner-item">
                                <img class="icon" src="https://htmldemo.net/merier/merier/assets/images/shop/banner/c2.png" width="270" height="419" alt="Image-HasTech">
                            </a>
                            <!--== End Product Banner Item ==-->
                        </div>
                        <div class="col-sm-6 col-md-3 mb-6">
                            <!--== Start Product Banner Item ==-->
                            <a href="shop.html" class="product-banner-item">
                                <img class="icon" src="https://htmldemo.net/merier/merier/assets/images/shop/banner/c3.png" width="270" height="419" alt="Image-HasTech">
                            </a>
                            <!--== End Product Banner Item ==-->
                        </div>
                        <div class="col-sm-6 col-md-3 mb-6">
                            <!--== Start Product Banner Item ==-->
                            <a href="shop.html" class="product-banner-item">
                                <img class="icon" src="https://htmldemo.net/merier/merier/assets/images/shop/banner/c4.png" width="270" height="419" alt="Image-HasTech">
                            </a>
                            <!--== End Product Banner Item ==-->
                        </div>
                    </div>
                </div>
                <h6 class="visually-hidden">Product Banner Area</h6>
            </section>
            <!--== End Product Banner Area Wrapper ==-->

        </main>
</template>