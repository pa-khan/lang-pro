<template>
  <Main>
    <Breadcrumb />
    <div class="contacts">
      <Case>
        <H2 class="contacts__title" value="Контакты"></H2>
        <Desc value="Мы на связи в любое удобное время"></Desc>
        <div class="contacts__wrap">
          <div class="contacts__left">
            <div class="contacts__list">
              <div class="contacts__item">
                <div class="contacts__icon">
                  <img src="/images/smartphone-docs.png" alt="">
                </div>
                <div class="contacts__text">
                  <div class="contacts__name">По телефону</div>
                  <div class="contacts__value">
                    <p><a href="tel:+74951563550">+7 (495) 156-35-50</a></p>
                  </div>
                </div>
              </div>
              <div class="contacts__item">
                <div class="contacts__icon">
                  <img src="/images/envelope.png" alt="">
                </div>
                <div class="contacts__text">
                  <div class="contacts__name">По электронке</div>
                  <div class="contacts__value --emails">
                    <p><a href="mailto:info@language2go.ru">info@language2go.ru</a></p>
                    <p><a href="mailto:support@language2go.ru">support@language2go.ru</a></p>
                  </div>
                </div>
              </div>
              <div class="contacts__item">
                <div class="contacts__icon">
                  <img src="/images/smartphone.png" alt="">
                </div>
                <div class="contacts__text">
                  <div class="contacts__name">В соц. сетях</div>
                  <div class="contacts__value">
                    <Socials class="contacts__socials" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contacts__right">
            <Form class="contacts__form" title="Нужна помощь с выбором курса?"
              desc="Оставьте заявку и мы подберем индивидуальное решение" />
          </div>
        </div>
      </Case>
    </div>
  </Main>
</template>
<script>
export default {
  head: {
    title: 'Контакты'
  },
  setup() {
    definePageMeta({
      title: 'Контакты'
    });
  }
}
</script>
<style lang="scss">
.contacts {
  --contacts-left-width: 455px;
  padding-bottom: 100px;

  &__title {
    margin-bottom: 10px;
  }

  &__wrap {
    display: flex;
    padding-top: 32px;
  }

  &__left {
    width: var(--contacts-left-width);
  }

  &__item {
    display: flex;
    align-items: flex-start;
    padding: 35px 40px;
    background: #F9F9F9;
    border-radius: 20px;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__icon {
    width: 42px;
    min-width: 42px;
  }

  &__text {
    width: 100%;
    margin-left: 35px;
    color: var(--color-gray-1);

    a {
      color: var(--color-gray-1);

      &[href^="mailto:"] {
        color: var(--color-purple);
        border-bottom: 1px solid var(--color-purple);

        &:hover {
          border-color: transparent;
        }

      }
    }
  }

  &__name {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.01em;
    margin-bottom: 8px;
  }

  &__value {
    letter-spacing: 0.02em;
  }

  &__socials {
    path {
      fill: var(--color-purple)
    }
  }

  &__right {
    width: calc(100% - var(--contacts-left-width));
    padding-left: 80px;
  }
}

@media screen and (max-width: 1200px) {
  .contacts {
    --contacts-left-width: 350px;

    &__item {
      padding: 20px 30px;
    }

    &__right {
      padding-left: 40px;
    }
  }
}

@media screen and (max-width: 992px) {
  .contacts {
    &__wrap {
      display: block;
    }

    &__left {
      width: 100%;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: -24px;
    }

    &__item {
      padding: 35px 40px;
      width: calc(50% - 12px);
      margin-bottom: 24px;

      &:nth-of-type(1) {
        order: 1;
      }

      &:nth-of-type(3) {
        order: 2;
      }

      &:nth-of-type(2) {
        order: 3;
        width: 100%;
      }
    }

    &__value {
      &.--emails {
        display: flex;
        flex-wrap: wrap;

        p {
          margin-right: 24px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    &__right {
      width: 100%;
      padding-left: 0;
      padding-top: 60px;
    }
  }

}

@media screen and (max-width: 768px) {
  .contacts {
    padding-bottom: 60px;

    &__title {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 16px;
    }

    &__list {
      display: block;
    }

    &__item {
      padding: 16px;
      width: 100%;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__text {
      margin-left: 25px;
    }

    &__name {
      font-size: 16px;
      line-height: 24px;
    }

    &__value {
      font-size: 14px;
      line-height: 20px;

      &.--emails {
        display: block;
      }
    }
  }

}
</style>