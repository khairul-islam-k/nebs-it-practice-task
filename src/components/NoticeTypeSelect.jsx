"use client";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const options = [
  "Warning / Disciplinary",
  "Performance Improvement",
  "Appreciation / Recognition",
  "Attendance / Leave Issue",
  "Payroll / Compensation",
  "Contract / Role Update",
  "Advisory / Personal Reminder",
];

export default function NoticeTypeSelect({ value = [], onChange }) {
  const toggle = (item) => {
    const updated = value.includes(item)
      ? value.filter((i) => i !== item)
      : [...value, item];

    onChange(updated); // send to React Hook Form
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between mt-1">
          {value.length ? value.join(", ") : "Select Notice Type"}
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-3 space-y-2">
        {options.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Checkbox
              checked={value.includes(item)}
              onCheckedChange={() => toggle(item)}
            />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
