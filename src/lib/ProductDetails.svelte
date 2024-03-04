<script>
    import IoIosCash from 'svelte-icons/io/IoIosCash.svelte'
    export let details;
</script>

<div>
    <div class="ml-auto mr-auto my-8 w-20">
        <IoIosCash />
    </div>
    <div class="flex justify-between">
        <h2 class="font-bold text-xm md:text-xl">{details.name}</h2>
        <h2 class="font-normal text-xm text-gray-500 md:text-xl">{details.date}</h2>
    </div>
    <h2 class="font-normal text-xm text-gray-500 md:text-xl">${details.amount}</h2>
    <h2 class="text-black mt-3 text-xl font-bold">Description</h2>
    <p class="font-normal text-xm text-gray-500 md:text-xl">{details.desc}</p>
</div>