<script setup>
    const supabase = useSupabaseClient();
    const loading = ref(false);
    const router = useRouter();

    const userLogOut = async () => {
        try {
            if (user) {
                loading.value = true;

                const { error } = supabase.auth.signOut();
                if (error) throw error;

                alert('Successfully logged out.');
            } else {
                router.push('/login');
            }
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            loading.value = false;
        }
    }
</script>

<template>
    <form class="flex flex-col rounded-md shadow-md w-1/4 gap-3 items-center border border-default p-5 text-primary" @submit.prevent="userLogOut">
        <div class="flex flex-col">
            <label class="border p-1 w-min mb-2 rounded-md" for="submit">Log Out</label>
            <input class="bg-background border border-default" name="submit" type="submit" value="Log Out"/>
        </div>
    </form>
</template>