<template>
  <Main>
    <Breadcrumb />
    <div class="faq">
      <Case>
        <H2 class="faq__title" value="FAQ"></H2>
        <Desc value="Часто задаваемые вопросы"></Desc>
        <div class="faq__cats">
          <Tab class="faq__cat" v-for="cat in cats.list" v-model:value="cats.value" :type="cat.type" :title="cat.title">
          </Tab>
        </div>
        <div v-if="list" class="faq__list">
          <QuestionsItem v-for="item in list" :key="item.title" class="faq__item" :title="item.title" :text="item.text">
          </QuestionsItem>
        </div>
      </Case>
    </div>
    <Help />
  </Main>

</template>
<script>
import questions from '@/data/questions.json';

export default {
  head: {
    title: 'FAQ'
  },
  data() {
    return {
      list: questions,
      cats: {
        value: 'all',
        list: [
          {
            title: 'Все',
            type: 'all'
          },
          {
            title: 'Вопросы об обучении',
            type: 'edu'
          },
          {
            title: 'Вопросы о покупке',
            type: 'buy'
          },
        ]
      }
    }

  },
  setup() {
    definePageMeta({
      title: 'FAQ'
    });
  }
}
</script>
<style lang="scss">
.faq {
  padding-bottom: 50px;

  &__title {
    margin-bottom: 10px;
  }

  &__cats {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  &__item {
    margin-bottom: 28px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .faq {
    padding: 0;

    &__cats {
      flex-wrap: wrap;
    }

    &__cat {
      margin-bottom: 7px;
    }

    &__title {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 16px;
    }
  }

}
</style>