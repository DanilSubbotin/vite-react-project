import TagCard from "@/components/cardOrder/TagCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import DescriptionCard from "../cardOrder/DescriptionCard";
import DescriptionOpenCard from "../cardOrder/DescriptionOpenCard";



export interface CardItem {
  id: number;
  name: string;
  details: {
    article: string,
    price: number,
    quantity: number,
  };
  get totalPrice(): number;
}

interface CardProps {
  item: CardItem;
}


export default function Cards({ item }: CardProps) {
  const [open, setOpen] = useState<string | undefined>(undefined);
  return (
      <Card className="relative font-display">
        {item.id && <TagCard id={item.id} />}
        <CardHeader>
          <Accordion
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
          >
            <AccordionItem value="product">
              <AccordionTrigger className="font-bold">
                {item.name} (ID: 57779)
              </AccordionTrigger>
              <AccordionContent>
                <DescriptionOpenCard details={item.details} totalPrice={item.totalPrice} />
              </AccordionContent>
              {open !== "product" && <DescriptionCard details={item.details} totalPrice={item.totalPrice} />}
            </AccordionItem>
          </Accordion>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

  );
}
