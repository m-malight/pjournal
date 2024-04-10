<script>
  import Modal from "@solisoma/svelte-modal";
  import { ProductInfo } from "../utils/checkout";
  import AddEntry from "./AddEntry.svelte";
  import ProductDetails from "./ProductDetails.svelte";
  export let visible = false;
  export let closeModal = () => {};
  export let showIncome = true;

  let initialState = {
    name: "",
    amount: "",
    date: "",
    desc: "",
    type: "inflow",
    submit: false,
  };

  let infoInitialState = { visible: false, info: {} };

  let inFlow = [
    {
      src: "https://images.pexels.com/photos/15707951/pexels-photo-15707951.jpeg",
      name: "Women's Cargo Utility Jogger",
      amount: "78.00",
      date: "2022-10-14",
      desc: "From article",
    },
  ];
  let outFlow = [
    {
      src: "https://images.pexels.com/photos/15707951/pexels-photo-15707951.jpeg",
      name: "Women's Cargo Utility Jogger",
      amount: "78.00",
      date: "2022-10-20",
      desc: "",
    },
  ];

  function cb(modalStates) {
    if (modalStates.type === "inflow" && modalStates.submit) {
      inFlow = [
        ...inFlow,
        {
          ...modalStates,
          src: "https://images.pexels.com/photos/15707951/pexels-photo-15707951.jpeg",
        },
      ];
    } else if (modalStates.submit) {
      outFlow = [
        ...outFlow,
        {
          ...modalStates,
          src: "https://images.pexels.com/photos/15707951/pexels-photo-15707951.jpeg",
        },
      ];
    }
    visible = false;
    closeModal();
  }

  const info_cb = () => (infoInitialState.visible = false);
</script>

<div class="grid grid-rows-10 mx-3 pb-2 h-[inherit] md:grid-cols-10 md:gap-8">
  <div
    class={`row-span-10 ${showIncome ? "" : "hidden"} md:col-span-6 overflow-y-scroll remove-scrollbar`}
  >
    <h1 class="font-bold text-2xl">In-flow</h1>
    {#each inFlow as flow}
      <a
        href="#/"
        on:click={() => (infoInitialState = { visible: true, info: flow })}
      >
        {@html ProductInfo({
          src: flow.src,
          name: flow.name,
          amount: flow.amount,
          date: flow.date,
        })}
      </a>
    {/each}
    <div class="flex my-4 justify-between">
      <h2 class="font-normal text-xm text-gray-500 md:text-xl">Subtotal</h2>
      <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
    </div>
    <div class="flex my-4 justify-between">
      <h2 class="font-normal text-xm text-gray-500 md:text-xl">
        Estimated Shipping
      </h2>
      <h2 class="font-normal text-xm md:text-xl">Free</h2>
    </div>
    <div class="flex my-4 justify-between">
      <h2 class="font-normal text-xm text-gray-500 md:text-xl">
        Estimated Tax
      </h2>
      <h2 class="font-normal text-xm md:text-xl">To be determined</h2>
    </div>
    <div class="flex my-4 justify-between">
      <h2 class="font-normal text-xm text-gray-500 md:text-xl">Total</h2>
      <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
    </div>
    <div class="flex justify-center md:justify-start">
      <button
        class="text-white bg-blue-700 p-2 rounded-lg w-[40vw] font-semibold mt-2"
        >More details</button
      >
    </div>
  </div>
  <div
    class={`row-span-10 ${showIncome ? "hidden" : ""} overflow-y-scroll remove-scrollbar md:col-span-4 md:block`}
  >
    <h1 class="font-bold text-2xl">Out-flow</h1>
    {#each outFlow as flow}
      <a
        href="#/"
        on:click={() => (infoInitialState = { visible: true, info: flow })}
      >
        {@html ProductInfo({
          src: flow.src,
          name: flow.name,
          amount: flow.amount,
          date: flow.date,
        })}
      </a>
    {/each}
    <div class="md:hidden">
      <div class="flex my-4 justify-between">
        <h2 class="font-normal text-xm text-gray-500 md:text-xl">Subtotal</h2>
        <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
      </div>
      <div class="flex my-4 justify-between">
        <h2 class="font-normal text-xm text-gray-500 md:text-xl">
          Estimated Shipping
        </h2>
        <h2 class="font-normal text-xm md:text-xl">Free</h2>
      </div>
      <div class="flex my-4 justify-between">
        <h2 class="font-normal text-xm text-gray-500 md:text-xl">
          Estimated Tax
        </h2>
        <h2 class="font-normal text-xm md:text-xl">To be determined</h2>
      </div>
      <div class="flex my-4 justify-between">
        <h2 class="font-normal text-xm text-gray-500 md:text-xl">Total</h2>
        <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
      </div>
      <div class="flex justify-center md:justify-start">
        <button
          class="text-white bg-blue-700 p-2 rounded-lg w-[40vw] font-semibold mt-2"
          >More details</button
        >
      </div>
    </div>
  </div>
</div>

<Modal {visible} {initialState} onClose={cb} component={AddEntry} />
<Modal visible={infoInitialState.visible} onClose={info_cb}>
  <ProductDetails details={infoInitialState.info} />
</Modal>
