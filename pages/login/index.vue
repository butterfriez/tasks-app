<script setup>
const user = useSupabaseUser();
</script>

<template>
    <AuthenticationLogout v-if="user" />
    <AuthenticationAuth v-else />
</template>