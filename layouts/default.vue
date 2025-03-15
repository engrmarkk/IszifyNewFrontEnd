<template>
  <div>
    <ClientOnly>
      <AppBar />
    </ClientOnly>
    <slot />
    <FooterSection />
  </div>
</template>
