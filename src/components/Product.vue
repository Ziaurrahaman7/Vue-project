<script>

import axios from 'axios'
export default{
    data(){
       return {
        id:'',
        products: [],
        relatedProducts:[],
        cart: 1,
        props: {
            cart:{
                type:Number
            }
        }
       }
    },
    methods:{
        loadProduct(){
           let productId= this.$route.params.id;
            axios.get('http://127.0.0.1:8000/api/product/'+productId).then(response=>{
                this.products=response.data
                console.log(this.products.data)
            })
        },

        relatedProduct(){
            let productId = this.$route.params.id;
            axios.get('http://127.0.0.1:8000/api/related/'+productId).then(response=>{
             this.relatedProducts = response.data
                console.log( this.relatedProducts.data)
            })
        },
        addToCart(){
            this.cart += 1
            console.log(this.cart)
        }
    },
    mounted(){
        this.loadProduct(),
        this.relatedProduct()
    }
}

</script>
<template>
     <main class="main-content">

            <!--== Start Page Header Area Wrapper ==-->
            <section class="page-header-area" data-bg-color="#F1FAEE">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="page-header-content">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home{{cart}}</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Product Detail</li>
                                </ol>
                                <h2 class="page-header-title">Beat deal with best product.</h2>
                            </div>
                        </div>
                        <div class="col-sm-4 d-sm-flex justify-content-end align-items-end">
                            <h5 class="showing-pagination-results">Product Detail</h5>
                        </div>
                    </div>
                </div>
            </section>
            <!--== End Page Header Area Wrapper ==-->

            <!--== Start Product Details Area Wrapper ==-->
            <section  class="product-detail-area section-space">
                <div class="container">
                    <div v-if="products.data" class="row product-details">
                        <div class="col-lg-7">
                            <div class="product-details-thumb me-lg-6">
                                <div class="swiper single-product-thumb-slider">
                                    <div class="swiper-wrapper">
                                        <a v-for="pimage in products.data.product_image" :key="pimage" class="lightbox-image swiper-slide" data-fancybox="gallery" :href="products.imageurl+pimage.image">
                                            <img :src="products ? products.imageurl+pimage.image : ''" width="640" height="530" alt="Image">
                                            <span class="badges">New</span>
                                        </a>
                                    </div>
                                    <!-- swiper pagination -->
                                    <div class="swiper-pagination"></div>
                                </div>
                                <div class="swiper single-product-nav-slider">
                                    <div class="swiper-wrapper">
                                        <div v-for="pimage in products.data.product_image" :key="pimage" class="nav-item swiper-slide">
                                            <img :src="products.imageurl+pimage.image" alt="Image" width="305" height="253">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="product-details-content">
                                <h3 class="product-details-title">{{products.data.title}}</h3>
                                <div class="product-details-review">
                                    <div class="product-review-icon">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    <button type="button" class="product-review-show">156 reviews</button>
                                </div>
                                <p class="product-details-desc">{{products.data.description}}</p>
                                <div class="product-details-color-list">
                                    <h4>Color:</h4>
                                    <div class="color-list-check">
                                        <input class="form-check-input bg-red" type="radio" name="flexRadioColorList" id="colorList1">
                                        <label class="form-check-label" for="colorList1">Red</label>
                                    </div>
                                    <div class="color-list-check">
                                        <input class="form-check-input bg-green" type="radio" name="flexRadioColorList" id="colorList2" checked>
                                        <label class="form-check-label" for="colorList2">Green</label>
                                    </div>
                                    <div class="color-list-check me-0">
                                        <input class="form-check-input bg-blue" type="radio" name="flexRadioColorList" id="colorList3">
                                        <label class="form-check-label" for="colorList3">Blue</label>
                                    </div>
                                </div>
                                <div class="product-details-pro-qty">
                                    <h4>QTY :</h4>
                                    <div class="pro-qty">
                                        <input type="text" title="Quantity" value="01">
                                    </div>
                                </div>
                                <div class="product-details-price">{{products.data.price}}<span class="price-old">{{products.data.discount}}</span></div>
                                <div class="product-details-action">
                                    <button type="button" class="product-action-btn" data-bs-toggle="modal" @click="addToCart" data-bs-target="#action-CartAddModal">Add to cart</button>
                                    <button type="button" class="product-action-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="nav product-details-nav me-lg-6" id="product-details-nav-tab" role="tablist">
                                <button class="nav-link" id="specification-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="specification" aria-selected="false">Specification</button>
                                <button class="nav-link active" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="true">Review</button>
                            </div>
                            <div class="tab-content me-lg-6" id="product-details-nav-tabContent">
                                <div class="tab-pane" id="specification" role="tabpanel" aria-labelledby="specification-tab">
                                    <ul class="product-details-info-wrap">
                                        <li><span>Weight :</span> 250 g</li>
                                        <li><span>Dimensions :</span>10 x 10 x 15 cm</li>
                                        <li><span>Materials :</span> 60% cotton, 40% polyester</li>
                                        <li><span>Other Info :</span> American heirloom jean shorts pug seitan letterpress</li>
                                    </ul>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit corporis quo voluptate culpa soluta, esse accusamus, sunt quia omnis amet temporibus sapiente harum quam itaque libero tempore. Ipsum, ducimus. lorem</p>
                                </div>

                                <div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                                    <!--== Start Reviews Content Item ==-->
                                    <div class="product-review-item">
                                        <div class="product-review-top">
                                            <div class="product-review-thumb">
                                                <img src="assets/images/shop/details/c1.png" alt="Images">
                                            </div>   
                                            <div class="product-review-content">
                                                <h4 class="product-reviewer-name">Tomas Doe</h4>
                                                <h5 class="product-reviewer-designation">Delveloper</h5>
                                                <div class="product-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales egestas augue neque euismod scelerisque viverra.</p>
                                        <button type="button" class="review-reply"><i class="fa fa fa-undo"></i></button>
                                    </div>
                                    <!--== End Reviews Content Item ==-->

                                    <!--== Start Reviews Content Item ==-->
                                    <div class="product-review-item product-review-reply">
                                        <div class="product-review-top">
                                            <div class="product-review-thumb">
                                                <img src="assets/images/shop/details/c2.png" alt="Images">
                                            </div>
                                            <div class="product-review-content">
                                                <h4 class="product-reviewer-name">Robat Fiftyk</h4>
                                                <h5 class="product-reviewer-designation">UI/UX Designer</h5>
                                                <div class="product-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales egestas augue neque euismod scelerisque viverra.</p>
                                        <button type="button" class="review-reply"><i class="fa fa fa-undo"></i></button>
                                    </div>
                                    <!--== End Reviews Content Item ==-->

                                    <!--== Start Reviews Content Item ==-->
                                    <div class="product-review-item mb-0">
                                        <div class="product-review-top">
                                            <div class="product-review-thumb">
                                                <img src="assets/images/shop/details/c3.png" alt="Images">
                                            </div>
                                            <div class="product-review-content">
                                                <h4 class="product-reviewer-name">Arry twentyk</h4>
                                                <h5 class="product-reviewer-designation">UI/UX Designer</h5>
                                                <div class="product-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales egestas augue neque euismod scelerisque viverra.</p>
                                        <button type="button" class="review-reply"><i class="fa fa fa-undo"></i></button>
                                    </div>
                                    <!--== End Reviews Content Item ==-->
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <!--== End Product Details Area Wrapper ==-->

            <!--== Start Related Product Area Wrapper ==-->
            <section class="product-area section-bottom-space">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h2 class="title">Related Product</h2>
                                <p class="ms-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-n6">
                        <div v-for="realp in relatedProducts.data" :key="realp" class="col-sm-6 col-lg-4 mb-6">
                            <!--== Start Product Item ==-->
                            <div class="product-item">
                                 <router-link :to="'/product/' + realp.id" v-for="pimg in realp.product_image" :key="pimg" class="product-thumb">
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
                                    <h4 class="title"><a href="shop-single-product.html">{{realp.title}}</a></h4>
                                    <div class="price">tk{{realp.price}} <span class="price-old">tk{{realp.discount}}</span></div>
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
            <!--== End Related Product Area Wrapper ==-->

            <!--== Start News Letter Area Wrapper ==-->
            <section class="news-letter-area section-bottom-space">
                <div class="container">
                    <div class="newsletter-content-wrap" data-bg-img="assets/images/photos/bg1.jpg">
                        <div class="newsletter-content">
                            <h2 class="title">Connect with us | merier</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="newsletter-form">
                                <form>
                                    <input type="email" class="form-control" placeholder="Email address">
                                    <button class="btn-submit" type="submit"><i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--== End News Letter Area Wrapper ==-->

        </main>
</template>

