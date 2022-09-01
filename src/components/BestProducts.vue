<template>
  <section class="product-area section-space">
                <div class="container">
                    <div class="section-title text-center">
                        <h2 class="title">Best Products</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="row mb-n6">
                        <div v-for="product in products.data" v-bind:key="product" class="col-sm-6 col-lg-4 mb-6">
                            <!--== Start Product Item ==-->
                            <div class="product-item product-item-border">
                                <router-link :to="'product/' + product.id" v-for="pimg in product.product_image" :key="pimg" class="product-thumb">
                                    <img :src="products.imageurl+pimg.image" width="300" height="286" alt="Image-HasTech">
                                </router-link>
                                <span class="badges">New</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i class="fa fa-expand"></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                        <i class="fa fa-shopping-cart"></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                        <i class="fa fa-exchange"></i>
                                    </button>
                                </div>
                                <div class="product-info">
                                    <h4 class="title"><a href="#">{{product.title}}</a></h4>
                                    <div class="price">Tk. {{product.price}}<span class="price-old">Tk. {{product.discount}}</span></div>
                                    <button type="button" class="info-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <!--== End prPduct Item ==-->
                        </div>
                    </div>
                </div>
            </section>  
</template>

<script>

import axios from 'axios'
export default{
    data(){
       return {
        products: [],
       }
    },
    methods:{
        loadProduct(){
            //  axios.get('https://acs-m.daraz.com.bd/h5/mtop.daraz.ald.homepage.service/1.0/?jsv=2.6.1&appKey=24677475&t=1661675343777&sign=7a7837d3a2afc4f8892bce9027484233&api=mtop.daraz.ald.homepage.service&v=1.0&timeout=8000&x-i18n-language=en&x-i18n-regionID=BD&dataType=json&type=originaljson&data=%7B%22language%22%3A%22en-BD%22%2C%22regionID%22%3A%22BD%22%2C%22platform%22%3A%22pc%22%2C%22userID%22%3A%22%22%2C%22anonUID%22%3A%226b9312a8-78f2-43cc-ddef-3bdc9002777c%22%2C%22deviceID%22%3A%22%22%2C%22voyagerVersion%22%3A%222%22%2C%22pageNo%22%3A0%2C%22isbackup%22%3Atrue%2C%22backupParams%22%3A%22language%2CregionID%2Cplatform%2CpageNo%22%2C%22pcSlot%22%3A%22200%22%2C%22mobileSlot%22%3A%22200%22%2C%22appId%22%3A%222642033%22%2C%22_pvuuid%22%3A1661675335978%2C%22terminalType%22%3A1%7D').then(response=>{
            //     this.products=response.data
            // })
            axios.get('http://127.0.0.1:8000/api/apiproduct').then(response=>{
                this.products=response.data
            })
            //  axios.get('http://secure.flynovoair.com/bookings/Vues/flight_selection.aspx?DC=DAC&AC=JSR&AM=2022-09&AD=28&RM=2022-08&RD=28&TT=OW&FL=on&PA=1&PC=0&PI=0&CD=').then(response=>{
            //     this.products=response.data
            // })
        }
    },
    mounted(){
        this.loadProduct()
    }
}

</script>
