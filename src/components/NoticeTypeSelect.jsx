"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const options = [
    "Warning / Disciplinary",
    "Performance Improvement",
    "Appreciation / Recognition",
    "Attendance / Leave Issue",
    "Payroll / Compensation",
    "Contract / Role Update",
    "Advisory / Personal Reminder",
];

const NoticeTypeSelect = () => {
    const [selected, setSelected] = useState([]);
    console.log(selected);

    const toggle = (item) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-between mt-1"
                    >
                        {selected.length
                            ? selected.join(", ")
                            : "Select Notice Type"}
                        <ChevronDown size={16} />
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="w-full p-3 space-y-2">
                    {options.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-2"
                        >
                            <Checkbox
                                checked={selected.includes(item)}
                                onCheckedChange={() => toggle(item)}
                            />
                            <span className="text-sm">{item}</span>
                        </div>
                    ))}
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default NoticeTypeSelect;