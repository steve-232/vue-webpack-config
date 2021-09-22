<template>
  <div>
    <p>Home</p>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
    <Button :on-click="testEvent">
      Btn
    </Button>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';

export default {
  components: {
    Paragraph,
    Button,
  },
  methods: {
    testEvent() {
      // eslint-disable-next-line no-console
      console.log('button click');
    },
  },
};
</script>
