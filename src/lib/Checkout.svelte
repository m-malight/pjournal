<script>
    import Modal from "./Modal.svelte";
    import {PaymentMethod, ProductInfo} from "../utils/checkout";
    export let modalVisible = false
    export let closeModal = () => {};
    export let showIncome = true;

    function cb(modalStates){
        modalVisible = false
        closeModal()
        console.log(modalStates)
    }
</script>

<div class="grid grid-rows-10 mx-3 pb-2 h-[inherit] md:grid-cols-10 md:gap-8">
    <div class={`row-span-10 ${showIncome ? "" : "hidden"} md:col-span-6 overflow-y-scroll remove-scrollbar`}>
        <h1 class="font-bold text-2xl">In-flow</h1> 
        {@html ProductInfo({src: "https://images.pexels.com/photos/15707951/pexels-photo-15707951.jpeg", name: "Women's Cargo Utility Jogger", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src: "https://images.pexels.com/photos/5889715/pexels-photo-5889715.jpeg", name: "Men's Suit", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src:"https://images.pexels.com/photos/9489458/pexels-photo-9489458.png", name: "Women's Trouser", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src: "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg", name: "Women's Jewelry", price: "78.00", desc: "Size, Medium Color: Black"})}
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Subtotal</h2>
            <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
        </div>
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Estimated Shipping</h2>
            <h2 class="font-normal text-xm md:text-xl">Free</h2>
        </div>
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Estimated Tax</h2>
            <h2 class="font-normal text-xm md:text-xl">To be determined</h2>
        </div>
        <div class="flex my-4 justify-between">
            <h2 class="font-normal text-xm text-gray-500 md:text-xl">Total</h2>
            <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
        </div>
        <div class="flex justify-center md:justify-start">
            <button class="text-white bg-blue-700 p-2 rounded-lg w-[40vw] font-semibold mt-2">More details</button>
        </div>
    </div>
    <div class={`row-span-10 ${showIncome ? "hidden" : ""} overflow-y-scroll remove-scrollbar md:col-span-4 md:block`}>
        <h1 class="font-bold text-2xl">Out-flow</h1> 
        {@html ProductInfo({src: "https://images.pexels.com/photos/15707951/pexels-photo-15707951.jpeg", name: "Women's Cargo Utility Jogger", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src: "https://images.pexels.com/photos/5889715/pexels-photo-5889715.jpeg", name: "Men's Suit", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src:"https://images.pexels.com/photos/9489458/pexels-photo-9489458.png", name: "Women's Trouser", price: "78.00", desc: "Size, Medium Color: Black"})}
        {@html ProductInfo({src: "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg", name: "Women's Jewelry", price: "78.00", desc: "Size, Medium Color: Black"})}
        <div class="md:hidden">
            <div class="flex my-4 justify-between">
                <h2 class="font-normal text-xm text-gray-500 md:text-xl">Subtotal</h2>
                <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
            </div>
            <div class="flex my-4 justify-between">
                <h2 class="font-normal text-xm text-gray-500 md:text-xl">Estimated Shipping</h2>
                <h2 class="font-normal text-xm md:text-xl">Free</h2>
            </div>
            <div class="flex my-4 justify-between">
                <h2 class="font-normal text-xm text-gray-500 md:text-xl">Estimated Tax</h2>
                <h2 class="font-normal text-xm md:text-xl">To be determined</h2>
            </div>
            <div class="flex my-4 justify-between">
                <h2 class="font-normal text-xm text-gray-500 md:text-xl">Total</h2>
                <h2 class="font-normal text-xm md:text-xl">$156.00</h2>
            </div>
            <div class="flex justify-center md:justify-start">
                <button class="text-white bg-blue-700 p-2 rounded-lg w-[40vw] font-semibold mt-2">More details</button>
            </div>
        </div>
    </div>  
</div>

<Modal {modalVisible} callbackFn={cb} useHtml setHtml={PaymentMethod({value:"SM", option:"me"})}/>