"use client";
import FileUpload from '@/components/FileUpload';
import NoticeTypeSelect from '@/components/NoticeTypeSelect';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const CreateForm = () => {
    return (
        <div>

            <form>

                <div className="bg-[#FFFFFF] rounded-2xl">

                    <div className="border-b p-4">
                        Please fill in the details below
                    </div>

                    <div className="p-4">
                        {/* target Department */}
                        <div className="bg-[#F5F6FA] p-4 rounded-xl">
                            <Field>
                                <FieldLabel>Department</FieldLabel>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="engineering">Engineering</SelectItem>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
                                        <SelectItem value="sales">Sales</SelectItem>
                                        <SelectItem value="support">Customer Support</SelectItem>
                                        <SelectItem value="hr">Human Resources</SelectItem>
                                        <SelectItem value="finance">Finance</SelectItem>
                                        <SelectItem value="operations">Operations</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>

                        {/* title name */}

                        <Field className="mt-4">
                            <FieldLabel htmlFor="username">* Notice Title</FieldLabel>
                            <Input id="username" type="text" placeholder="Write the Title of Notice" />
                        </Field>

                        {/* employ information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                            <Field>
                                <FieldLabel htmlFor="username">* Select Employee ID</FieldLabel>
                                <Input id="username" type="text" placeholder="Select employee designation" />
                            </Field>


                            <Field>
                                <FieldLabel htmlFor="username">* Employee Name</FieldLabel>
                                <Input id="username" type="text" placeholder="Enter employee full name" />
                            </Field>


                            <Field>
                                <FieldLabel>* Position</FieldLabel>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="engineering">Engineering</SelectItem>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
                                        <SelectItem value="sales">Sales</SelectItem>
                                        <SelectItem value="support">Customer Support</SelectItem>
                                        <SelectItem value="hr">Human Resources</SelectItem>
                                        <SelectItem value="finance">Finance</SelectItem>
                                        <SelectItem value="operations">Operations</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>


                        {/* notice */}
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            {/* notice type */}
                            <Field>
                                <FieldLabel>* Notice Type</FieldLabel>
                                <NoticeTypeSelect></NoticeTypeSelect>
                            </Field>


                            {/* publish date */}
                            <Field>
                                <FieldLabel htmlFor="username">* Publish Date</FieldLabel>
                                <Input id="username" type="date" placeholder="Select Publishing Date" />
                            </Field>
                        </div>

                        <FieldSet className="mt-4">
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                        Notice Body
                                    </FieldLabel>
                                    <Textarea
                                        id="checkout-7j9-optional-comments"
                                        placeholder="Write the details about notice"
                                        className="resize-none"
                                    />
                                </Field>
                            </FieldGroup>
                        </FieldSet>

                        {/* image upload */}
                        <Field className="mt-4">
                            <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                Upload Attachments (optional)
                            </FieldLabel>
                            <FileUpload />
                        </Field>
                    </div>

                </div>

                {/* button section */}
                <div className="py-6 flex justify-end gap-3">
                    <Button className="bg-gray-200 text-[#595F7A] border border-[#595F7A] hover:bg-gray-300 cursor-pointer">Cancel</Button>
                    <Button className="bg-gray-200 text-[#3B82F6] border border-[#595F7A] hover:bg-gray-300 cursor-pointer">Save as Draft</Button>
                    <Button className="bg-[#F95524] hover:bg-amber-500 cursor-pointer">Publish Notice</Button>
                </div>

            </form>
        </div>
    );
};

export default CreateForm;


// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldLegend,
//   FieldSeparator,
//   FieldSet,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"

// export function FieldDemo() {
//   return (
//     <div className="w-full max-w-md">
//       <form>
//         <FieldGroup>
//           <FieldSet>
//             <FieldLegend>Payment Method</FieldLegend>
//             <FieldDescription>
//               All transactions are secure and encrypted
//             </FieldDescription>
//             <FieldGroup>
//               <Field>
//                 <FieldLabel htmlFor="checkout-7j9-card-name-43j">
//                   Name on Card
//                 </FieldLabel>
//                 <Input
//                   id="checkout-7j9-card-name-43j"
//                   placeholder="Evil Rabbit"
//                   required
//                 />
//               </Field>
//               <Field>
//                 <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
//                   Card Number
//                 </FieldLabel>
//                 <Input
//                   id="checkout-7j9-card-number-uw1"
//                   placeholder="1234 5678 9012 3456"
//                   required
//                 />
//                 <FieldDescription>
//                   Enter your 16-digit card number
//                 </FieldDescription>
//               </Field>
//               <div className="grid grid-cols-3 gap-4">
//                 <Field>
//                   <FieldLabel htmlFor="checkout-exp-month-ts6">
//                     Month
//                   </FieldLabel>
//                   <Select defaultValue="">
//                     <SelectTrigger id="checkout-exp-month-ts6">
//                       <SelectValue placeholder="MM" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="01">01</SelectItem>
//                       <SelectItem value="02">02</SelectItem>
//                       <SelectItem value="03">03</SelectItem>
//                       <SelectItem value="04">04</SelectItem>
//                       <SelectItem value="05">05</SelectItem>
//                       <SelectItem value="06">06</SelectItem>
//                       <SelectItem value="07">07</SelectItem>
//                       <SelectItem value="08">08</SelectItem>
//                       <SelectItem value="09">09</SelectItem>
//                       <SelectItem value="10">10</SelectItem>
//                       <SelectItem value="11">11</SelectItem>
//                       <SelectItem value="12">12</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </Field>
//                 <Field>
//                   <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
//                     Year
//                   </FieldLabel>
//                   <Select defaultValue="">
//                     <SelectTrigger id="checkout-7j9-exp-year-f59">
//                       <SelectValue placeholder="YYYY" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="2024">2024</SelectItem>
//                       <SelectItem value="2025">2025</SelectItem>
//                       <SelectItem value="2026">2026</SelectItem>
//                       <SelectItem value="2027">2027</SelectItem>
//                       <SelectItem value="2028">2028</SelectItem>
//                       <SelectItem value="2029">2029</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </Field>
//                 <Field>
//                   <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
//                   <Input id="checkout-7j9-cvv" placeholder="123" required />
//                 </Field>
//               </div>
//             </FieldGroup>
//           </FieldSet>
//           <FieldSeparator />
//           <FieldSet>
//             <FieldLegend>Billing Address</FieldLegend>
//             <FieldDescription>
//               The billing address associated with your payment method
//             </FieldDescription>
//             <FieldGroup>
//               <Field orientation="horizontal">
//                 <Checkbox
//                   id="checkout-7j9-same-as-shipping-wgm"
//                   defaultChecked
//                 />
//                 <FieldLabel
//                   htmlFor="checkout-7j9-same-as-shipping-wgm"
//                   className="font-normal"
//                 >
//                   Same as shipping address
//                 </FieldLabel>
//               </Field>
//             </FieldGroup>
//           </FieldSet>
//           <FieldSet>
//             <FieldGroup>
//               <Field>
//                 <FieldLabel htmlFor="checkout-7j9-optional-comments">
//                   Comments
//                 </FieldLabel>
//                 <Textarea
//                   id="checkout-7j9-optional-comments"
//                   placeholder="Add any additional comments"
//                   className="resize-none"
//                 />
//               </Field>
//             </FieldGroup>
//           </FieldSet>
//           <Field orientation="horizontal">
//             <Button type="submit">Submit</Button>
//             <Button variant="outline" type="button">
//               Cancel
//             </Button>
//           </Field>
//         </FieldGroup>
//       </form>
//     </div>
//   )
// }

