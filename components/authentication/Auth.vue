<script setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');

const handleLogin = async () => {
    try {
        console.log(email.value)
        loading.value = true;
        const { error } = await supabase.auth.signInWithOtp({ email: email.value, options: { emailRedirectTo: "/confirm" } });

        if (error) throw error;
        alert('Check your email for the login link!')
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <form class="flex flex-col rounded-md shadow-md w-1/4 gap-3 items-center border border-default p-5 text-primary"
        @submit.prevent="handleLogin">
        <div class="flex flex-col">
            <label class="border p-1 w-min mb-2 rounded-md" for="email">Email</label>
            <input class="bg-background border border-default" id="email" v-model="email" type="email" placeholder="Email..." :diabled="loading" />
        </div>

        <div>
            <input class="border p-1 rounded-md" type="submit" :value="loading ? 'Loading...' : 'Update'"
                :disabled="loading" />
        </div>
    </form>
</template>