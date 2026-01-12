"use client";
import Loader from '@/app/components/Loader';
import SuccessModal from '@/app/components/SuccessModal';
import FileUpload from '@/components/FileUpload';
import NoticeTypeSelect from '@/components/NoticeTypeSelect';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const CreateForm = () => {
    const [photoUrl, setPhotoUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDraft, setIsDraft] = useState(false);
    const [open, setOpen] = useState(false);

    

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (isLoading) {
            return ;
        }

        data.photoUrl = photoUrl;

        if (isDraft) {
            console.log("FORM DATA  Draft👉", data);
            
        } else {
            console.log("FORM DATA👉", data);
            const res = await axios.post("http://localhost:5000/notices", data);
            console.log(res);
        }
    };

    // if (isLoading) {
    //     return <Loader></Loader>
    // }

    return (
        <div> 

            <Button onClick={() => setOpen(true)}>modata</Button>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="bg-[#FFFFFF] rounded-2xl">

                    <div className="border-b p-4">
                        Please fill in the details below
                    </div>

                    <div className="p-4">
                        {/* target Department */}
                        <div className="bg-[#F5F6FA] p-4 rounded-xl">
                            <Field>
                                <FieldLabel>Department</FieldLabel>

                                <Controller
                                    name="department"
                                    control={control}
                                    rules={{ required: "Department is required" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose department" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="engineering">Engineering</SelectItem>
                                                <SelectItem value="design">Design</SelectItem>
                                                <SelectItem value="marketing">Marketing</SelectItem>
                                                <SelectItem value="hr">Human Resources</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}
                            </Field>
                        </div>

                        {/* title name */}

                        <Field className="mt-4">
                            <FieldLabel>* Notice Title</FieldLabel>
                            <Input
                                {...register("title", { required: "Title is required" })}
                                placeholder="Write the Title of Notice"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </Field>

                        {/* employ information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                            <Field>
                                <FieldLabel>* Select Employee ID</FieldLabel>
                                <Input {...register("employeeId", { required: "Employ Id is Required" })} placeholder="Employee ID" />
                                {errors.employeeId && <p className="text-red-500 text-sm">{errors.employeeId.message}</p>}
                            </Field>


                            <Field>
                                <FieldLabel>* Employee Name</FieldLabel>
                                <Input {...register("employeeName", { required: "EmployeeName is required" })} placeholder="Employee Name" />

                                {errors.employeeName && <p className="text-red-500 text-sm">{errors.employeeName.message}</p>}
                            </Field>


                            <Field>
                                <FieldLabel>* Position</FieldLabel>
                                <Controller
                                    name="employeePosition"
                                    control={control}
                                    rules={{ required: "Position is required" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose department" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="engineering">Engineering</SelectItem>
                                                <SelectItem value="design">Design</SelectItem>
                                                <SelectItem value="marketing">Marketing</SelectItem>
                                                <SelectItem value="hr">Human Resources</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />

                                {errors.employeePosition && <p className="text-red-500 text-sm">{errors.employeePosition.message}</p>}

                            </Field>
                        </div>


                        {/* notice */}
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            {/* notice type */}
                            <Field>
                                <FieldLabel>* Notice Type</FieldLabel>
                                <Controller
                                    name="noticeType"
                                    control={control}
                                    rules={{ required: "Select at least one notice type" }}
                                    render={({ field }) => <NoticeTypeSelect {...field} />}
                                />

                                {errors.noticeType && <p className="text-red-500 text-sm">{errors.noticeType.message}</p>}
                            </Field>


                            {/* publish date */}
                            <Field>
                                <FieldLabel htmlFor="username">* Publish Date</FieldLabel>
                                <Input
                                    type="date"
                                    {...register("publishDate", { required: "Date is require" })}
                                />

                                {errors.publishDate && <p className="text-red-500 text-sm">{errors.publishDate.message}</p>}
                            </Field>
                        </div>


                        {/* description body */}

                        <FieldSet className="mt-4">
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                        Notice Body
                                    </FieldLabel>
                                    <Textarea
                                        {...register("body", { required: "Body is required" })}
                                        placeholder="Write the details about notice"
                                        className="resize-none"
                                    />
                                    {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
                                </Field>
                            </FieldGroup>
                        </FieldSet>

                        {/* image upload */}
                        <Field className="mt-4">
                            <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                Upload Attachments (optional)
                            </FieldLabel>
                            <FileUpload 
                            setPhotoUrl={setPhotoUrl}
                            setIsLoading={setIsLoading}  />
                        </Field>
                    </div>

                </div>

                {/* button section */}
                <div className="py-6 flex justify-end gap-3">
                    <Button 
                    type="button"
                    className="bg-gray-200 text-[#595F7A] border border-[#595F7A] hover:bg-gray-300 cursor-pointer">Cancel</Button>
                    <Button type="submit"
                    onClick={() => setIsDraft(true)}
                    className="bg-gray-200 text-[#3B82F6] border border-[#595F7A] hover:bg-gray-300 cursor-pointer">Save as Draft</Button>
                    <Button
                    onClick={() => setIsDraft(false)}
                    type="submit" className="bg-[#F95524] hover:bg-amber-500 cursor-pointer">
                        {isLoading && <Spinner className="size-3" />}
                        <span>Publish Notice</span>
                    </Button>
                </div>

            </form>

            {/* success Modal */}
            <SuccessModal open={open} onClose={() => setOpen(false)}></SuccessModal>

        </div>
    );
};

export default CreateForm;

