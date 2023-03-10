<script lang="ts" setup>
import ROUTE from '@/constants/route';
import { RouterLink } from 'vue-router';


</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="ROUTE.HISTORY">히스토리</RouterLink>
        </li>
        <li>
          <RouterLink :to="ROUTE.LEADERBOARD">리더보드</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>