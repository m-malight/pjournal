export function ProductInfo({ src, name, amount, date }) {
  return `<div class="flex my-4 items-center">
                <div class="overflow-hidden h-[12vh] w-20 md:h-20 rounded-lg">
                    <img src=${src} alt="" class="h-full w-full" />
                </div>
                <div class="ml-4">
                    <h2 class="font-semibold text-xm md:text-xl">${name}</h2>
                    <h2 class="font-normal text-xm text-gray-500 md:text-xl">$${amount}</h2>
                    <h2 class="font-normal text-xm text-gray-500 md:text-xl">${date}</h2>
                </div>
            </div>`;
}

export function PaymentMethod({ value, option }) {
  return `<label for=${value} class="flex items-center p-3 my-2 rounded-lg border-2 border-gray-300">
                <div class="px-1 ml-2 rounded-full border-4 border-black">
                    <input type="radio" id=${value} value=${value} name="payment-method"/>
                </div>
                <span class="ml-2">${option}</span>
            </label>`;
}
