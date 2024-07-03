// "use client";

// import { z } from "zod";
// import { GetOnSiteHourType } from "../../../../types";
// import { useForm as refineForm } from "@refinedev/core";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@components/ui/form";
// import { Input } from "@components/ui/input";
// import { Button } from "@components/ui/button";

// const formSchema = z.object({
//   employee_id: z.string().min(5),
// });

// type EmployeeFormType = z.infer<typeof formSchema>;

// export default function EmployeeForm({
//   initialValues,
//   loading,
// }: {
//   initialValues?: GetOnSiteHourType;
//   loading?: boolean;
// }) {
//   const editMode = !!initialValues;
//   const forms = refineForm({});
//   const {
//     refineCore: { onFinish },
//   } = forms;
//   const form = useForm<EmployeeFormType>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       employee_id: initialValues?.employee_id || "",
//     },
//   });

//   const onSubmit = (values: any) => {
//     // Uncomment and customize if needed
//     // if (editMode) {
//     //   let stateIds = values.states.map((item) => ({ id: item.value }));
//     //   values.states = stateIds;
//     // }
//     onFinish(values);
//   };

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-8 p-4 mt-4 rounded-md ring-gray-100 ring-2"
//       >
//         <FormField
//           control={form.control}
//           name="employee_id"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Employee Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="Name" {...field} />
//               </FormControl>
//               <FormDescription>Name of employee</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">{editMode ? "Edit" : "Submit"}</Button>
//       </form>
//     </Form>
//   );
// }

import React from "react";

const empform = () => {
  return <div>Hello</div>;
};

export default empform;
