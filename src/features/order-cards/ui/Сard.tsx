import TagCard from "@/features/order-cards/ui/TagCard";
import { Card, CardContent } from "@/shared/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { useState } from "react";
import DescriptionCard from "@/features/order-cards/ui/DescriptionCard";
import DescriptionOpenCard from "@/features/order-cards/ui/DescriptionOpenCard";
import { type CardProps } from "@/entities/types/orderPage/card";


export default function Cards({ item }: CardProps) {
  const [open, setOpen] = useState<string | undefined>(undefined);
  return (
    <Card className="relative font-display">
      {item.id && <TagCard id={item.id} />}
      <CardContent>
        <Accordion
          type="single"
          collapsible
          value={open}
          onValueChange={setOpen}
        >
          <AccordionItem value="product">
            <AccordionTrigger className="font-bold">
              {item.name} (ID: {item.id}-{item.article})
            </AccordionTrigger>
            <AccordionContent>
              <DescriptionOpenCard article={item.article}
                price={item.price}
                quantity={item.quantity} />
            </AccordionContent>
            {open !== "product" && <DescriptionCard article={item.article}
              price={item.price}
              quantity={item.quantity} />}
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>

  );
}
