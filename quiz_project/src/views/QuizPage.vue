<template>
    <div class="quiz-page">
      <QuestionSection />
    </div>
</template>

<script>
import QuestionSection from '@/components/QuestionSection.vue'
export default {
  name: 'QuizPage',
  components: {
    QuestionSection
  }
}
</script>

<style lang="scss" scoped>

.quiz-page{
  width: 100%;
  padding-top: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 512px;
  color: black;
}

</style>
