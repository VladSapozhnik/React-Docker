import React from "react";
import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import PropTypes from "prop-types";
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

AccordionEl.protoType = {
    title: PropTypes.string,
    content: PropTypes.string,
}

export default AccordionEl