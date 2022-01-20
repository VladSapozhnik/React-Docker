import React from "react";
import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";

function AccordionEl (prop) {
    return (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {prop.title}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>{prop.content}</p>
            </AccordionItemPanel>
        </AccordionItem>
    )
}

export default AccordionEl