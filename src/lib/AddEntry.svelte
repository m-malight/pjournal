<script>
  import * as Yup from "yup";
  export let modalClose;
  export let modalStates;
  export let modalSetStates;

  function handle_change(e) {
    modalStates = { ...modalStates, [e.target.id]: e.target.value };
    modalSetStates(modalStates);
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .max(25, "Must be 25 characters or less"),
    amount: Yup.string()
      .required("This field is required")
      .matches(/^[0-9]+$/, "Must be a positive number"),
    date: Yup.string().required("This field is required"),
    desc: Yup.string().required("This field is required"),
  });

  async function validateInput() {
    try {
      // Make all error mesage invisible
      const errorElems = document.querySelectorAll(".entry-error");
      const fieldElems = document.querySelectorAll(".entry-field");
      errorElems.forEach((elem) => (elem.style.display = "none"));
      fieldElems.forEach(
        (elem) => (elem.style.border = "2px solid rgb(209 213 219)")
      );

      // Validate user input
      await validationSchema.validate(modalStates);
      modalSetStates({ ...modalStates, submit: true });
      modalClose();
    } catch (e) {
      const elem = document.getElementById(`${e.path}@error`);
      const field = document.getElementById(e.path);

      field.style.border = "2px solid red";
      elem.innerText = e.errors[0];
      elem.style.display = "block";
    }
  }
</script>

<div>
  <h2 class="font-bold text-2xl mb-3">Add new statement</h2>
  <div
    class="flex flex-col justify-between overflow-y-scroll remove-scrollbar h-[67vh] pb-2"
  >
    <div class="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Name"
        id="name"
        on:keyup={handle_change}
        value={modalStates.name}
        class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
      />
      <p id="name@error" class="hidden entry-error text-red-600"></p>
      <input
        type="text"
        placeholder="Amount"
        id="amount"
        on:keyup={handle_change}
        value={modalStates.amount}
        class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
      />
      <p id="amount@error" class="hidden entry-error text-red-600"></p>
      <textarea
        placeholder="Description"
        id="desc"
        on:keyup={handle_change}
        value={modalStates.desc}
        class="p-3 h-[20vh] bg-white entry-field border-2 border-gray-300 rounded-lg outline-none resize-none"
      />
      <p id="desc@error" class="hidden entry-error text-red-600"></p>
      <div class="flex gap-3 items-center">
        <select
          value={modalStates.type}
          id="type"
          on:change={handle_change}
          class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
        >
          <option value="inflow">In-flow</option>
          <option value="outflow">Out-flow</option>
        </select>
        <input
          type="date"
          placeholder="Date"
          id="date"
          on:keyup={handle_change}
          value={modalStates.date}
          class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
        />
        <p id="date@error" class="hidden entry-error text-red-600"></p>
      </div>
    </div>
    <div class="flex justify-center mb-6">
      <button
        on:click={validateInput}
        class="text-white bg-blue-700 p-2 rounded-lg w-[40vw] font-semibold mt-2"
        >ADD</button
      >
    </div>
  </div>
</div>
