<template>
  <div>
    <Card :icon="icon">
      親愛的媺媺：
      <p>
        生日快樂！雖然26這個數字可能對你來說有點老，也開心不起來，但很希望你今天還有以後的每一天都可以事事順心。
      </p>
      <p>
        雖然你以前常常說我們應該畢業後不會聯絡，結果時間來到了畢業後4年，我們仍然保持聯繫，每次見面的時候都很有話聊、彼此分享喜怒哀樂，所以很感謝每次和你見面或是聊天的日子。
      </p>
      <p>
        你是我遇過最努力、認真活著的人，有時候會心疼你的努力不被世界認可，但是也很欣賞你的生活態度，想要跟你說，累的時候也可以停下來稍微休息一下；覺得世界很糟的時候可以來找找我們或聯絡我們，雖然很八股，但我們都在ㄛ！
      </p>
      <p>
        安婷2022.08.17
      </p>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'SallyCard',
  components: {
    Card,
  },
  data() {
    return {
      icon: require('../assets/sally.png')
    }
  }
}
</script>