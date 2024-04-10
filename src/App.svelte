<script>
  import Checkout from "./lib/Checkout.svelte";
  import Scaffold from "./lib/Scaffold.svelte";

  let visible = false;
  let showIncome = true;
  const show_modal = () => (visible = true);
  const closeModal = () => (visible = false);
  const swap_entry = () => (showIncome = !showIncome);
</script>

<main>
  <div class="h-[7vh]">
    <Scaffold {show_modal} {swap_entry} />
  </div>
  <div
    class="h-[91vh] overflow-y-scroll remove-scrollbar border-t-2 pt-2 border-gray-300"
  >
    <Checkout {visible} {closeModal} {showIncome} />
  </div>
</main>
