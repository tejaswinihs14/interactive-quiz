<template>
    <div class="quiz-page">
      <MainQuestionSection />
      <QuestionSection />
    </div>
</template>

<script>
import QuestionSection from '@/components/QuestionSection.vue'
import MainQuestionSection from '@/components/MainQuestionSection.vue'
export default {
  name: 'QuizPage',
  components: {
    QuestionSection,
    MainQuestionSection
  }
}
</script>

<style lang="scss" scoped>

.quiz-page{
  height: 100vh;
  display: flex;
  color: black;
}

</style>
