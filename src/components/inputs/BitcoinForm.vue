<template>
  <div>
    <h2 class="text-lg font-bold">Bitcoin Payment Form</h2>
    <div class="mt-5">
      <p class="text-xs font-bold">Bitcoin Address</p>
      <input
        v-model="bitcoin_address"
        type="text"
        id="address"
        @input="handleInput"
        required
        class="v-input"
        placeholder="Enter Bitcoin Address"
      />
    </div>
    <div class="mt-5">
      <p class="text-xs font-bold">Amount (BTC)</p>
      <input
        v-model="bitcoin_amount"
        type="number"
        id="amount"
        step="0.00000001"
        @input="handleInput"
        class="v-input"
        placeholder="Enter Amount in BTC"
      />
    </div>
    <div class="mt-5">
      <p class="text-xs font-bold">Label</p>
      <input
        v-model="bitcoin_label"
        type="text"
        id="label"
        @input="handleInput"
        class="v-input"
        placeholder="Add Label (Optional)"
      />
    </div>
    <div class="mt-5">
      <p class="text-xs font-bold">Message</p>
      <textarea
        v-model="bitcoin_message"
        id="message"
        @input="handleInput"
        cols="30"
        rows="5"
        class="v-input placeholder:text-xs"
        placeholder="Add a Message (Optional)"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, watch } from "vue";
const emit = defineEmits(["handle-submit"]);

const bitcoin_address = ref("");
const bitcoin_amount = ref("");
const bitcoin_label = ref("");
const bitcoin_message = ref("");

// Emit the event whenever any of the inputs change
const handleInput = () => {
  // Construct the Bitcoin URI
  let bitcoinUri = `bitcoin:${bitcoin_address.value}`;

  const queryParams = [];
  if (bitcoin_amount.value) queryParams.push(`amount=${bitcoin_amount.value}`);
  if (bitcoin_label.value)
    queryParams.push(`label=${encodeURIComponent(bitcoin_label.value)}`);
  if (bitcoin_message.value)
    queryParams.push(`message=${encodeURIComponent(bitcoin_message.value)}`);

  if (queryParams.length) {
    bitcoinUri += `?${queryParams.join("&")}`;
  }

  emit("handle-submit", bitcoinUri);
};

// Watch the inputs and update the Bitcoin URI dynamically
watch(
  [bitcoin_address, bitcoin_amount, bitcoin_label, bitcoin_message],
  ([newAddress, newAmount, newLabel, newMessage]) => {
    let bitcoinUri = `bitcoin:${newAddress}`;

    const queryParams = [];
    if (newAmount) queryParams.push(`amount=${newAmount}`);
    if (newLabel) queryParams.push(`label=${encodeURIComponent(newLabel)}`);
    if (newMessage)
      queryParams.push(`message=${encodeURIComponent(newMessage)}`);

    if (queryParams.length) {
      bitcoinUri += `?${queryParams.join("&")}`;
    }

    emit("handle-submit", bitcoinUri);
  }
);
</script>

<style scoped></style>
