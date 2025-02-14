<template>
  <section class="bg-white pt-16 md:pt-20 px-5">
    <div class="max-w-full w-full md:w-[60%] mx-auto py-10 md:py-20">
      <div>
        <h2 class="text-accent font-bold text-3xl">Create New Link</h2>
      </div>

      <form @submit.prevent class="mt-5 md:mt-10">
        <div>
          <p class="font-bold text-info">Url Destination</p>
          <input
            v-model="form.original_url"
            type="text"
            class="v-input"
            placeholder="hpps://example,com/my-long-url"
          />
        </div>

        <div class="mt-5 md:mt-10">
          <p><span class="font-bold text-info">Title </span> (optional)</p>
          <input v-model="form.title" type="text" class="v-input" />
        </div>

        <div class="mt-5 md:mt-10">
          <p class="font-bold text-info">Custom Url</p>
          <input
            v-model="form.custom_url"
            type="text"
            class="v-input"
            placeholder=""
          />
        </div>

        <div class="mt-10 md:mt-20">
          <p>
            <span class="font-bold text-info text-lg md:text-xl">QR Code </span>
            (optional)
          </p>

          <div class="flex items-center gap-1 mt-4">
            <p>
              <input
                v-model="form.want_qr_code"
                type="checkbox"
                class="toggle"
              />
            </p>
            <p class="text-base">
              Generate a QR Code to share anywhere people can see it
            </p>
          </div>
        </div>

        <div class="mt-10 md:mt-20 flex justify-end gap-5 items-center">
          <div>
            <button
              @click="handleCancelLink"
              class="font-semibold text-info border px-5 py-2 rounded-md hover:bg-accent-tint"
            >
              Cancel
            </button>
          </div>
          <div>
            <button @click="hanlePostLink" class="btn-green-sm">Create</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { postQrLink } from "@/services/link.service";

const loading = ref(false);
const toast = useToast();
const form = ref({
  original_url: "",
  title: "",
  custom_url: "",
  want_qr_code: false,
});

const hanlePostLink = async () => {
  loading.value = true;
  const result = await postQrLink(form.value);
  if (!result.error) {
    loading.value = false;
    toast.success(result?.data?.message);
    handleCancelLink();
  } else {
    if (result.error) {
      toast.error(result.error.message);
      loading.value = false;
    }
  }
};

const handleCancelLink = () => {
  form.value.original_url = "";
  form.value.title = "";
  form.value.custom_url = "";
  form.value.want_qr_code = false;
};
</script>
