<template>
  <div>
    <p>Home</p>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
    <ul v-if="users.length">
      <li
        v-for="user in users"
        :key="user.id"
      >
        {{ user.username }} - {{ user.name }} - {{ user.email }} - {{ user.phone }}
      </li>
    </ul>
    <p v-else-if="errInReq.length">
      {{ errInReq }}
    </p>
    <Button :on-click="fetchUsers">
      Fetch Users
    </Button>
  </div>
</template>

<script>
import axios from 'axios';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';

export default {
  components: {
    Paragraph,
    Button,
  },
  data() {
    return {
      users: [],
      errInReq: '',
    };
  },
  methods: {
    fetchUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          if (res.status === 200) {
            this.users = res.data;
          } else {
            this.errInReq = 'Users are not available';
          }
        })
        .catch(() => {
          this.errInReq = 'Error! Users are not available';
        });
    },
  },
};
</script>
