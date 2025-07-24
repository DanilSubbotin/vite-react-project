import TagCard from "@/components/cardOrder/TagCard";
import { Card, CardContent } from "@/components/ui/card";
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
  article: string,
  price: number,
  quantity: number,
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
      <CardContent>
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
