<script>
  import Checkout from "./lib/Checkout.svelte";
  import Scaffold from "./lib/Scaffold.svelte";

  let modalVisible = false;
  let showIncome = true;
  const show_modal = () => (modalVisible = true);
  const closeModal = () => (modalVisible = false);
  const swap_entry = () => (showIncome = !showIncome);
</script>

<main>
  <div class="h-[7vh]">
    <Scaffold {show_modal} {swap_entry} />
  </div>
  <div
    class="h-[91vh] overflow-y-scroll remove-scrollbar border-t-2 pt-2 border-gray-300"
  >
    <Checkout {modalVisible} {closeModal} {showIncome} />
  </div>
</main>
