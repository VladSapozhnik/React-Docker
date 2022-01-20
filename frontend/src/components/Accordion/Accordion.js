import React from "react";
import {Accordion,} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import AccordionEl from "./AccordionItem";

function Info () {

    const about = [
        {
            head: 'Accordion Head 1',
            content: 'Accordion content 1'
        },
        {
            head: 'Accordion Head 2',
            content: 'Accordion content 2'
        },
        {
            head: 'Accordion Head 3',
            content: 'Accordion content 3'
        },
        {
            head: 'Accordion Head 4',
            content: 'Accordion content 4'
        }
    ]

    return (
        <>
            <Accordion className="mb-20">
                {about.map((item, index) => <AccordionEl title={item.head} content={item.content} key={index} />)}

                {/*<AccordionItem>*/}
                {/*    <AccordionItemHeading>*/}
                {/*        <AccordionItemButton>*/}
                {/*            Accordion Head 1*/}
                {/*        </AccordionItemButton>*/}
                {/*    </AccordionItemHeading>*/}
                {/*    <AccordionItemPanel>*/}
                {/*        <p>Accordion content 1</p>*/}
                {/*    </AccordionItemPanel>*/}
                {/*</AccordionItem>*/}
            </Accordion>
        </>
    )
}

export default Info