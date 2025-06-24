import TagCard from "@/components/list-cards/TagCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import DescriptionCard from "./DescriptionCard";
import DescriptionOpenCard from "./DescriptionOpenCard";


export default function Cards() {
  const [open, setOpen] = useState<string | undefined>(undefined);
  return (
    <div className="w-103 relative font-display">
      <Card>
        <TagCard />
        <CardHeader>
          <Accordion
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
          >
            <AccordionItem value="product">
              <AccordionTrigger>
                Аптечка универсальная для оказания первой медицинской
                помощи (ID: 57779)
              </AccordionTrigger>
              <AccordionContent>
                <DescriptionOpenCard />
              </AccordionContent>
              {open !== "product" && <DescriptionCard />}
            </AccordionItem>
          </Accordion>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
