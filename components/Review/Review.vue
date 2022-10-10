<template>
  <div class="review">
    <div class="review__head">
      <div class="review__person">
        <div class="review__name">{{ element.name }}</div>
        <div class="review__desc">{{ element.desc }}</div>
      </div>
      <div class="review__rating">
        <div v-for="star in element.rating " class="review__rating-item">
          <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
              fill="#8F49A0" />
          </svg>
        </div>
      </div>
    </div>
    <div class="review__body">
      <div class="review__text">{{ element.text }}</div>
    </div>
  </div>
</template>
<script src="./Review.js"></script>
<style src="./Review.scss">

</style>
