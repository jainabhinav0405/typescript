const componentOption = {
    button: [
      {
        title: "Button Primary",
        image: "/assets/buttonV1.png",
        variant: "ButtonV1",
      },
      {
        title: "Button Secondary",
        image: "/assets/buttonV2.png",
        variant: "ButtonV2",
      },
      {
        title: "Button Tertiary",
        image: "/assets/buttonV3.png",
        variant: "ButtonV3",
      },
    ],
    header: [
      {
        title: "Header Primary",
        image: "/assets/headerV1.png",
        variant: "HeaderV1",
      },
      {
        title: "Header Secondary",
        image: "/assets/headerV2.png",
        variant: "HeaderV2",
      },
    ],
  } as const;
  
  type ComponentOption = typeof componentOption;
  
  type Variant<T> = T extends { variant: infer V } ? V : never;

//   const variant:Variant<componentOption> = 
  type AllVariants = Variant<ComponentOption[keyof ComponentOption][number]>;
  
  type HeaderVariants = Extract<AllVariants, `HeaderV${number}`>;
  
  const headerVariant: HeaderVariants = "HeaderV1"
  console.log(headerVariant); 
  