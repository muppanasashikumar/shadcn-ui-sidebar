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

const formSchema = z
  .object({
    accountNo: z.string().min(10),
    bank:z.enum(["icici", "hdfc","axis"]),
    status: z.enum(["verified", "unverified"]),
  })

export default function PlaceholderContent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountNo: "",
    },
  });


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex-col relative w-full">
          <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid grid-cols-4 gap-4 max-w-full"
      >
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
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
