import questions from '@/data/questions.json';

export default {
  name: 'Questions',
  data() {
    return {
      classOpen: '--open',
      list: questions
    }
  }
}
