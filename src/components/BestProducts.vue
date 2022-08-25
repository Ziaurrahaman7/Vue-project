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
                                <a v-for="pimg in product.product_image" :key="pimg" class="product-thumb" href="#">
                                    <img :src="products.imageurl+pimg.image" width="300" height="286" alt="Image-HasTech">
                                </a>
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
            axios.get('http://127.0.0.1:8000/api/apiproduct').then(response=>{
                this.products=response.data
            })
        }
    },
    mounted(){
        this.loadProduct()
    }
}

</script>
