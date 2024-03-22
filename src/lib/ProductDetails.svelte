<script>
  import IoIosCash from "svelte-icons/io/IoIosCash.svelte";
  export let details;
  $: name = details.name;
  $: date = details.date;
  $: amount = details.amount;
  $: desc = details.desc;
</script>

<div>
  <div class="ml-auto mr-auto my-8 w-20">
    <IoIosCash />
  </div>
  <div class="flex justify-between">
    <h2 class="font-bold text-xm md:text-xl">{name}</h2>
    <h2 class="font-normal text-xm text-gray-500 md:text-xl">{date}</h2>
  </div>
  <h2 class="font-normal text-xm text-gray-500 md:text-xl">${amount}</h2>
  <h2 class="text-black mt-3 text-xl font-bold">Description</h2>
  <p class="font-normal text-xm text-gray-500 md:text-xl">{desc}</p>
</div>
