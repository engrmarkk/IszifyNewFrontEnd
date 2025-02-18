<template>
  <div class="px-5 md:px-10">
    <div class="">
      <h3 class="text-xl lg:text-2xl font-bold text-black-shades">
        {{ headerTitle }}
      </h3>
    </div>

    <div class="pt-8 md:pt-10 flex overflow-x-scroll">
      <button
        v-for="platform in platforms"
        :key="platform.name"
        @click="share(platform.url)"
        :aria-label="'Share on ' + platform.name"
        class="m-2 p-2 rounded flex items-center gap-2 border border-accent/70 hover:bg-accent-tint"
      >
        <div>
          <div v-if="platform.name === 'Threads'" class="h-5 w-5">
            <img :src="platform.icon" class="h-5 w-5" />
          </div>
          <div v-else class="h-5 w-5">
            <ion-icon
              :name="platform.icon"
              class="h-5 w-5"
              :class="platform.color"
            ></ion-icon>
          </div>
        </div>
        <p>{{ platform.name }}</p>
      </button>
    </div>

    <div
      class="flex items-center justify-between mt-5 text-gray-800 border border-gray-800 bg-white text-sm py-2 px-4 rounded-md"
    >
      <div>
        <span>{{ urlToShare.short_url }}</span>
      </div>
      <span
        title="copy"
        @click="handleCopyLink(urlToShare.short_url)"
        class="flex text-gray-800 cursor-pointer w-8 h-8 hover:bg-gray-200 p-2 rounded-md duration-200"
      >
        <img src="/icons/copy.svg" alt="" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useToast } from "vue-toastification";

export default defineComponent({
  name: "SocialShare",
  props: {
    headerTitle: {
      type: String,
    },
    urlToShare: {
      type: Object,
      require: true,
    },
  },
  setup(props) {
    const toast = useToast();
    const platforms: any = ref([
      {
        name: "Facebook",
        icon: "logo-facebook",
        color: "text-info-shades",
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          props?.urlToShare?.short_url
        )}`,
      },
      {
        name: "WhatsApp",
        icon: "logo-whatsapp",
        color: "text-primary",
        url: `https://wa.me/?text=${encodeURIComponent(
          props?.urlToShare?.short_url
        )}`,
      },
      {
        name: "LinkedIn",
        icon: "logo-linkedin",
        color: "text-sky-600",
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          props?.urlToShare?.short_url
        )}`,
      },
      {
        name: "Twitter",
        icon: "logo-twitter",
        color: "text-info-shades",
        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          "Check this out!"
        )}&url=${encodeURIComponent(props?.urlToShare?.short_url)}`,
      },
      {
        name: "Email",
        icon: "mail",
        color: "text-black-shades",
        url: `mailto:?subject=Check this out&body=${encodeURIComponent(
          props?.urlToShare?.short_url
        )}`,
      },
      {
        name: "Telegram",
        icon: "paper-plane",
        color: "text-sky-600",
        url: `https://t.me/share/url?url=${encodeURIComponent(
          props?.urlToShare?.short_url
        )}`,
      },
      {
        name: "Messenger",
        icon: "chatbubble-ellipses",
        color: "text-info-shades",
        url: `https://www.facebook.com/dialog/send?link=${encodeURIComponent(
          props?.urlToShare?.short_url
        )}&app_id=1234567890&redirect_uri=${encodeURIComponent(
          props?.urlToShare?.short_url
        )}`, // Replace `app_id` with your Facebook app ID
      },
    ]);

    const share = (url: any) => {
      try {
        window.open(url, "_blank");
      } catch (error) {
        console.log("Failed to open share URL:", error);
      }
    };

    const handleCopyLink = (link: any) => {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          toast.info("Short link copied to clipboard!");
        })
        .catch((err) => {
          toast.error("Failed to copy: ", err);
        });
    };

    return {
      platforms,
      share,
      handleCopyLink,
    };
  },
});
</script>

<style scoped></style>
