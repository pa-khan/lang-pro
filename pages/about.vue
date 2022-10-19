<template>
  <Main>
    <Breadcrumb />
    <div class="about">
      <Case>
        <H2 class="about__title" value="О нас"></H2>
        <Desc value="Говори легко - живи свободно!" />
        <div v-if="list" class="about__list">
          <div v-for="item in list" class="about__item">
            <div class="about__content">
              <H3 class="about__item-title" :value="item.title"></H3>
              <T2 class="about__item-text" :value="item.text"></T2>
            </div>
            <div class="about__img">
              <img :src="`/images/${item.img}`" alt="">
            </div>
          </div>
        </div>
      </Case>
    </div>
    <Team />
    <Reg />
  </Main>
</template>
<script>
export default {
  head: {
    title: 'О нас'
  },
  data() {
    return {
      list: [
        {
          title: 'Language2GO - интерактивная <br><u>онлайн-школа иностранных языков</u>',
          text: '<p>Это новая, полностью автоматизированная платформа, которая  поможет вам прокачать язык для работы, учебы или общения. </p> <p>Наша система позволит вам в динамичной игровой форме овладеть иностранным языком, свободно мыслить и говорить, строить предложения, поддерживать разговор в любом обществе и в любой жизненной ситуации.</p>',
          img: 'about-1.png'
        },
        {
          title: 'Для тех, кто сам хочет строить свою <br>жизнь и стремится к мечте!',
          text: '<p>Наша школа подойдет для школьников и студентов, бизнесменов и путешественников, амбициозных предпринимателей и находчивых эмигрантов. Мы дадим вам основы и прочные знания иностранных языков за короткое время и в удобном месте. </p>',
          img: 'about-2.png'
        },
        {
          title: '<u>Language2GO</u> отличается <br>от классических курсов изучения языка',
          text: '<p>Это понятная, нескучная и полностью интерактивная система! <br>Вы сами выбираете где, как и сколько заниматься. Она подойдет всем, кто хочет за короткий срок качественно изменить свою жизнь, всем, кто готов искать новые возможности с новым языком!</p>',
          img: 'about-3.png'
        },
      ]
    }

  },
  setup() {
    definePageMeta({
      title: 'О нас'
    });
  }
}
</script>
<style lang="scss">
.about {
  padding-bottom: 140px;
  border-bottom: 1px solid #D9D9D9;

  &__title {
    margin-bottom: 10px;
  }

  &__list {
    margin-top: 60px;
  }

  &__item {
    display: flex;
    align-items: center;
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 60px;

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(even) {
      .about {
        &__content {
          order: 2
        }
      }
    }

    &-title {
      margin-bottom: 24px;
    }
  }

  &__content,
  &__img {
    width: 50%;
    padding-left: 20px;
    padding-right: 20px;
  }

}

@media screen and (max-width: 1200px) {
  .about {
    padding-bottom: 100px;
  }

}

@media screen and (max-width: 992px) {
  .about {

    &__list {
      margin-top: 40px;
    }

    &__item {
      flex-direction: column;
      margin-left: 0;
      margin-right: 0;
    }

    &__content {
      order: 2
    }

    &__content,
    &__img {
      padding-left: 0;
      padding-right: 0;
    }

    &__img {
      order: 1;
      width: 100%;
      max-width: 590px;
      margin-bottom: 36px;
    }

    &__content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .about {
    padding-bottom: 60px;

    &__title {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 16px;
    }

    &__img {
      margin-bottom: 24px;
    }

    &__item {
      margin-bottom: 40px;

      &-title {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

}
</style>