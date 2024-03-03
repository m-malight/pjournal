<script>
    import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte'
    import MdAccountBox from 'svelte-icons/md/MdAccountBox.svelte'
    import MdAddBox from 'svelte-icons/md/MdAddBox.svelte'
    import FaSyncAlt from 'svelte-icons/fa/FaSyncAlt.svelte'
    import MdSwapHoriz from 'svelte-icons/md/MdSwapHoriz.svelte'

    export let show_modal = () => {}
    export let swap_entry = () => {}
</script>

<div>
    <div class="flex m-2 justify-between">
        <div class="flex items-center">
            <a href="/" class="w-7"><FaSyncAlt /></a>
            <a href="/" class="font-bold px-3">Sync</a>
        </div>
        <div class="flex items-center gap-3">
            <div class="flex px-1 items-center bg-white rounded-md md:bg-gray-200">
                <div class="w-7 text-gray-400">
                    <IoIosSearch />
                </div>
                <input type="search" class="p-1 bg-gray-200 hidden outline-none rounded-md md:block" placeholder="Search"/>
            </div>
            <button class="w-8 md:hidden" on:click={()=>swap_entry()}>
                <MdSwapHoriz />
            </button>
            <div class="w-8 text-gray-400">
                <MdAccountBox />
            </div>
            <button class="w-9" on:click={()=>show_modal()}>
                <MdAddBox/>
            </button>
        </div>
    </div>
</div>