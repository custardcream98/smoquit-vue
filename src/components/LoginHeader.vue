<template>
  <header>
    <img :src="Logo" alt="Smoquit 로고" class="mt-24 block h-12 w-12" />
    <h1 class="text-gradient mt-9 text-4xl font-bold pc:text-6xl">Smoquit</h1>
    <p class="text-gradient mt-3 block text-xl pc:text-4xl">
      나는 네가 <strong class="font-bold">#노담</strong>이면_좋겠어
      <strong class="font-bold">#진심 #노담</strong>
    </p>
  </header>
</template>

<script lang="ts" setup>
import Logo from "@/assets/SmoquitLogo.png";
</script>
