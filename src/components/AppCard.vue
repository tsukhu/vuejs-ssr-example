<template>
<div class="card">
<div class="cardTitle">
  {{cardData.title}} 
</div>
<div class="cardMainImage">

</div>        
<div class="cardHeader">
  <h1>{{cardData.heading}}</h1>
  <h2>{{cardData.subHeading}}</h2>            
</div>
<div class="cardContent">
  <div class="cardImages" >
    <div class="sprite ifc">
      <!-- <img src="/assets/images/ifc.png" /> -->
    </div>
    <div class="sprite disney">
      <!-- <img src="/assets/images/espn.png"  /> -->
    </div>
    <div class="sprite espn">
      <!-- <img src="/assets/images/disney.png"  /> -->
    </div>                       
</div>
  <div class="cardDesc">
    {{cardData.description}}
  </div>
  <div class="cardPrice fontDollar">
    <sup>$</sup>{{cardData.price}}<span class="small ">/mo.</span>
  </div>
  <div class="cardPriceDesc">{{cardData.summary}}
  </div>
  <div class="cardCTA">            
    <button type="button" class="btn btn-primary-functional">{{cardData.ctaText}}</button>
  </div>
</div>			
</div>
</template>
<script>
/* eslint-disable */
export default {
  props: ["cardData"]
};
</script>