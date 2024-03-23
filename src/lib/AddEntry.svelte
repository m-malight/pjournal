<script>
  import * as Yup from "yup";
  import Form from "@solisoma/svelte-form/lib/Form.svelte";
  import ErrorMessage from "@solisoma/svelte-form/lib/ErrorMessage.svelte";
  export let modalClose;
  export let modalStates;
  export let modalSetStates;

  function handleSubmit({ detail }) {
    console.log(detail);
    modalSetStates({ ...detail, submit: true });
    modalClose();
  }

  const schemaValidator = {
    name: {
      key: "string",
      value: null,
      next: {
        key: "required",
        value: "This field is required",
        next: { key: "max", value: [25, "Must be 25 characters or less"] },
      },
    },
    amount: {
      key: "string",
      value: null,
      next: {
        key: "required",
        value: "This field is required",
        next: {
          key: "matches",
          value: [/^[0-9]+$/, "Must be a positive number"],
        },
      },
    },
    date: {
      key: "string",
      value: null,
      next: {
        key: "required",
        value: "This field is required",
      },
    },
    desc: {
      key: "string",
      value: null,
      next: {
        key: "required",
        value: "This field is required",
      },
    },
  };
</script>

<div>
  <h2 class="font-bold text-2xl mb-3">Add new statement</h2>
  <div
    class="flex flex-col justify-between overflow-y-scroll remove-scrollbar h-[67vh] pb-2"
  >
    <Form {schemaValidator} initialValue={modalStates} on:submit={handleSubmit}>
      <div class="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={modalStates.name}
          class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
        />
        <ErrorMessage For="name" />
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          value={modalStates.amount}
          class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
        />
        <ErrorMessage For="amount" />
        <textarea
          placeholder="Description"
          name="desc"
          value={modalStates.desc}
          class="p-3 h-[20vh] bg-white entry-field border-2 border-gray-300 rounded-lg outline-none resize-none"
        />
        <ErrorMessage For="desc" />
        <div class="flex gap-3 items-center">
          <select
            value={modalStates.type}
            name="type"
            class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
          >
            <option value="inflow">In-flow</option>
            <option value="outflow">Out-flow</option>
          </select>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={modalStates.date}
            class="p-3 bg-white entry-field border-2 border-gray-300 rounded-lg outline-none"
          />
          <ErrorMessage For="date" />
        </div>
      </div>
      <div class="flex justify-center mb-6">
        <button
          type="submit"
          class="text-white !bg-blue-700 p-2 rounded-lg w-[40vw] font-semibold mt-2"
          >ADD</button
        >
      </div>
    </Form>
  </div>
</div>
