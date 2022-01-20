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
                            Accardion Head 1
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Accardion content 1</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Accardion Head 2
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Accardion content 2</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default Info