import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

function Info () {
    return (
        <>
            <Accordion className="mb-20">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Accordion Head 1
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Accordion content 1</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Accordion Head 2
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Accordion content 2</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default Info