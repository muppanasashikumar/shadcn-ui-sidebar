"use client";
import { Card, CardContent } from "@/components/ui/card";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';

const formSchema = z
  .object({
    accountNo: z.string().min(10, "Account number must be at least 10 characters"),
    bank: z.enum(["icici", "hdfc", "axis"]),
    status: z.enum(["verified", "unverified"]),
    startdate: z.date({
      required_error: "Please select a date",
      invalid_type_error: "That’s not a valid date!",
    }),
    enddate: z.date({
      required_error: "Please select a date",
      invalid_type_error: "That’s not a valid date!",
    }),
  });

export default function PlaceholderContent() {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null); // Still using null here // State for date picker
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountNo: "",
      bank: "icici",
      status: "verified",
      startdate: undefined,
      enddate: undefined,
    },
  });


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };
  return (
    <Card className="rounded-lg border-none">
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className="flex flex-col relative w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-full"
              >
                <div className="grid grid-cols-4 gap-4">
                  <FormField
                    control={form.control}
                    name="bank"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Bank</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="personal">Icici</SelectItem>
                              <SelectItem value="company">Hdfc</SelectItem>
                              <SelectItem value="company">Axis</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="accountNo"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Loan Account No.</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Account No."
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="personal">verified</SelectItem>
                              <SelectItem value="company">unverified</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="startdate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            selected={selectedStartDate}
                            onChange={(date) => {
                              setSelectedStartDate(date);
                              field.onChange(date);
                            }}
                            customInput={<Input id="datePicker" placeholder="Select a date" />}
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Select a date"
                            className="input w-full mt-0"
                            wrapperClassName="datepicker-wrapper"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="enddate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            selected={selectedEndDate}
                            onChange={(date) => {
                              setSelectedEndDate(date);
                              field.onChange(date);
                            }}
                            customInput={<Input id="datePicker" placeholder="Select a date" />}
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Select a date"
                            className="input w-full mt-0"
                            wrapperClassName="datepicker-wrapper"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4">
                  <Button type="submit" className=" bg-tertiary w-72">
                    Search
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
