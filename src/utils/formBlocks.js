export const blocks = [
  {
    token: "PERSON_NAME",
    type: "text",
    props: {
      title: "Enter your name",
      required: true,
      placeholder: "e.g. John Doe",
    },
  },
  {
    token: "EMAIL",
    type: "email",
    props: {
      title: "Enter your email",
      required: true,
      placeholder: "e.g. john@example.com",
    },
  },
  {
    token: "SELECT_FIELD",
    type: "select",
    props: {
      title: "Select an option",
      required: true,
      options: [
        { value: "volvo", label: "Volvo" },
        { value: "innova", label: "Innova" },
        { value: "xuv500", label: "XUV 500" },
      ],
    },
  },
  {
    token: "IS_PERSON_MINOR",
    type: "checkbox",
    props: {
      title: "Is the current person minor?",
      default: false,
    },
  },
  {
    token: "PERSON_DOB",
    type: "date",
    props: {
      title: "Enter your BOD",
      required: "IS_PERSON_MINOR",
      placeholder: "e.g. 01/01/2000",
    },
  },
];
