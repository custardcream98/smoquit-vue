<script lang="ts" setup>
import CustomInput from "@/components/CustomInput/index.vue";
import LoginHeader from "@/components/LoginHeader.vue";
</script>

<template>
  <LoginHeader />
  <form>
    <CustomInput
      type="email"
      id="email"
      label="이메일"
      required
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    />
    <CustomInput type="password" id="password" label="비밀번호" required />
  </form>
</template>
